#!/usr/bin/env node
/**
 * Daily Google Business Profile snapshot (Hannah Carter, NAP/GBP + Rachel Morgan, Lead Gen). Free Google APIs.
 * Runs in GitHub Actions (seo-daily.yml) and writes gbp/latest.md + gbp/latest.json to the seo-data branch.
 * READ-ONLY use: it never edits the profile or posts. (Google's only GBP scope, business.manage, could edit;
 * the team uses it for reports only. Posting/editing needs the owner's explicit OK.)
 *
 * Env (GitHub secrets; owner setup in marketing/citations/gbp-api-setup.md):
 *   GBP_OAUTH_CLIENT_ID, GBP_OAUTH_CLIENT_SECRET, GBP_REFRESH_TOKEN
 *   GBP_LOCATION   optional "locations/123..." (auto: the only/first location on the account)
 *   OUT_DIR        default "gbp"
 */
import { mkdirSync, writeFileSync } from 'node:fs';

const { GBP_OAUTH_CLIENT_ID: id, GBP_OAUTH_CLIENT_SECRET: secret, GBP_REFRESH_TOKEN: refresh } = process.env;
const OUT = process.env.OUT_DIR || 'gbp';
if (!id || !secret || !refresh) { console.error('GBP secrets missing: GBP_OAUTH_CLIENT_ID, GBP_OAUTH_CLIENT_SECRET, GBP_REFRESH_TOKEN (see marketing/citations/gbp-api-setup.md).'); process.exit(1); }

const tok = await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({ grant_type: 'refresh_token', client_id: id, client_secret: secret, refresh_token: refresh }) });
if (!tok.ok) {
  const t = await tok.text();
  console.error(`GBP token failed (${tok.status}). ${/invalid_grant/.test(t) ? 'The refresh token expired or was revoked: if the OAuth app is in "Testing", publish it to "In production" and create a new refresh token.' : t.slice(0, 200)}`);
  process.exit(1);
}
const T = (await tok.json()).access_token;
const api = async (url) => {
  const r = await fetch(url, { headers: { authorization: `Bearer ${T}` } });
  const text = await r.text();
  if (!r.ok) {
    const hint = r.status === 403 || /quota|has not been used|disabled/i.test(text)
      ? ' (GBP API access not approved yet, or an API is not enabled in the Cloud project)' : '';
    throw new Error(`${url.replace(/\?.*/, '')}: ${r.status}${hint} ${text.slice(0, 200)}`);
  }
  return text ? JSON.parse(text) : {};
};

const out = { generatedAt: new Date().toISOString(), errors: [] };
const safe = async (label, fn) => { try { return await fn(); } catch (e) { out.errors.push(`${label}: ${e.message}`); return null; } };

// 1) Account + location
const accounts = (await api('https://mybusinessaccountmanagement.googleapis.com/v1/accounts')).accounts ?? [];
let location = null, account = null;
for (const a of accounts) {
  const locs = (await safe(`locations ${a.name}`, () => api(`https://mybusinessbusinessinformation.googleapis.com/v1/${a.name}/locations?pageSize=100&readMask=name,title,websiteUri,phoneNumbers,categories,metadata`)))?.locations ?? [];
  const pick = locs.find((l) => l.name === process.env.GBP_LOCATION) ?? locs.find((l) => /aircare|shad/i.test(l.title ?? '')) ?? locs[0];
  if (pick) { location = pick; account = a; break; }
}
if (!location) { console.error(`No Business Profile location visible. Accounts seen: ${accounts.length}. Use the Google account that manages the profile when creating the refresh token.`); process.exit(1); }
out.profile = {
  title: location.title, website: location.websiteUri ?? null, phone: location.phoneNumbers?.primaryPhone ?? null,
  primaryCategory: location.categories?.primaryCategory?.displayName ?? null,
  mapsUri: location.metadata?.mapsUri ?? null, newReviewUri: location.metadata?.newReviewUri ?? null,
};

// 2) Performance: last 28 full days vs the 28 before (Google lags ~2-3 days)
const d = (off) => { const x = new Date(Date.now() - off * 864e5); return { year: x.getUTCFullYear(), month: x.getUTCMonth() + 1, day: x.getUTCDate() }; };
const METRICS = ['CALL_CLICKS', 'WEBSITE_CLICKS', 'BUSINESS_DIRECTION_REQUESTS', 'BUSINESS_CONVERSATIONS', 'BUSINESS_BOOKINGS',
  'BUSINESS_IMPRESSIONS_MOBILE_SEARCH', 'BUSINESS_IMPRESSIONS_DESKTOP_SEARCH', 'BUSINESS_IMPRESSIONS_MOBILE_MAPS', 'BUSINESS_IMPRESSIONS_DESKTOP_MAPS'];
const range = (s, e) => ['startDate', 'endDate'].map((k, i) => { const v = i ? e : s; return `dailyRange.${k}.year=${v.year}&dailyRange.${k}.month=${v.month}&dailyRange.${k}.day=${v.day}`; }).join('&');
const perf = async (s, e) => {
  const q = METRICS.map((m) => `dailyMetrics=${m}`).join('&');
  const r = await api(`https://businessprofileperformance.googleapis.com/v1/${location.name}:fetchMultiDailyMetricsTimeSeries?${q}&${range(s, e)}`);
  const totals = Object.fromEntries(METRICS.map((m) => [m, 0]));
  for (const group of r.multiDailyMetricTimeSeries ?? []) for (const s2 of group.dailyMetricTimeSeries ?? [])
    totals[s2.dailyMetric] = (s2.timeSeries?.datedValues ?? []).reduce((n, v) => n + Number(v.value ?? 0), 0);
  return totals;
};
out.period = { current: [d(31), d(3)], previous: [d(59), d(32)] };
out.performance = { current: await safe('performance current', () => perf(d(31), d(3))), previous: await safe('performance previous', () => perf(d(59), d(32))) };

// 3) Search keywords people used to find the profile (last full month + current)
const m0 = d(35), m1 = d(3);
out.searchKeywords = (await safe('search keywords', () => api(`https://businessprofileperformance.googleapis.com/v1/${location.name}/searchkeywords/impressions/monthly?monthlyRange.startMonth.year=${m0.year}&monthlyRange.startMonth.month=${m0.month}&monthlyRange.endMonth.year=${m1.year}&monthlyRange.endMonth.month=${m1.month}`)))
  ?.searchKeywordsCounts?.map((k) => ({ keyword: k.searchKeyword, impressions: k.insightsValue?.value ? Number(k.insightsValue.value) : `<${k.insightsValue?.threshold ?? '?'}` })) ?? [];

// 4) Reviews (no reviewer names stored)
const STARS = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 };
const rv = await safe('reviews', () => api(`https://mybusiness.googleapis.com/v4/${account.name}/${location.name}/reviews?pageSize=50&orderBy=updateTime%20desc`));
out.reviews = rv ? {
  average: rv.averageRating ?? null, total: rv.totalReviewCount ?? 0,
  recent: (rv.reviews ?? []).slice(0, 10).map((r) => ({ stars: STARS[r.starRating] ?? null, date: r.createTime?.slice(0, 10), replied: Boolean(r.reviewReply), comment: (r.comment ?? '').replace(/\s+/g, ' ').slice(0, 200) })),
  unanswered: (rv.reviews ?? []).filter((r) => !r.reviewReply).length,
} : null;

// Write
mkdirSync(OUT, { recursive: true });
writeFileSync(`${OUT}/latest.json`, JSON.stringify(out, null, 2));
const c = out.performance.current ?? {}, p = out.performance.previous ?? {};
const label = { CALL_CLICKS: 'Calls from profile', WEBSITE_CLICKS: 'Website clicks', BUSINESS_DIRECTION_REQUESTS: 'Direction requests', BUSINESS_CONVERSATIONS: 'Messages', BUSINESS_BOOKINGS: 'Bookings',
  BUSINESS_IMPRESSIONS_MOBILE_SEARCH: 'Views: mobile Search', BUSINESS_IMPRESSIONS_DESKTOP_SEARCH: 'Views: desktop Search', BUSINESS_IMPRESSIONS_MOBILE_MAPS: 'Views: mobile Maps', BUSINESS_IMPRESSIONS_DESKTOP_MAPS: 'Views: desktop Maps' };
const md = [
  `# Google Business Profile snapshot (${out.generatedAt.slice(0, 10)})`, '',
  `Profile: **${out.profile.title}** · category: ${out.profile.primaryCategory ?? '—'} · phone: ${out.profile.phone ?? '—'} · website: ${out.profile.website ?? '—'}`,
  `Maps link: ${out.profile.mapsUri ?? '—'} · review link: ${out.profile.newReviewUri ?? '—'}`, '',
  `Period ${Object.values(out.period.current[0]).join('-')} → ${Object.values(out.period.current[1]).join('-')} vs previous 28 days`, '',
  '| Metric | Current 28d | Previous 28d |', '|---|---|---|',
  ...METRICS.map((m) => `| ${label[m]} | ${c[m] ?? '—'} | ${p[m] ?? '—'} |`), '',
  '## Search keywords that showed the profile', '',
  ...(out.searchKeywords.length ? ['| Keyword | Impressions |', '|---|---|', ...out.searchKeywords.slice(0, 30).map((k) => `| ${k.keyword} | ${k.impressions} |`)] : ['_No data yet._']), '',
  '## Reviews', '',
  ...(out.reviews ? [`Average **${out.reviews.average ?? '—'}** from **${out.reviews.total}** reviews · unanswered (of last 50): ${out.reviews.unanswered}`, '',
    ...out.reviews.recent.map((r) => `- ${'★'.repeat(r.stars ?? 0)} ${r.date}${r.replied ? '' : ' · **needs a reply**'}: ${r.comment || '(no text)'}`)] : ['_Not available._']), '',
  ...(out.errors.length ? ['## Errors', '', ...out.errors.map((e) => `- ${e}`), ''] : []),
].join('\n');
writeFileSync(`${OUT}/latest.md`, md + '\n');
writeFileSync(`${OUT}/${out.generatedAt.slice(0, 10)}.md`, md + '\n');
console.log(md);
