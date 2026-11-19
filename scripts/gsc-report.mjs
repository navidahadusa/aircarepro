#!/usr/bin/env node
/**
 * Daily Google Search Console snapshot for the agency team (Elena Brooks, Local SEO).
 * Runs in GitHub Actions (.github/workflows/seo-daily.yml). No dependencies.
 *
 * Env:
 *   GSC_SERVICE_ACCOUNT_JSON  service-account key JSON (GitHub secret). The service account's
 *                             email must be added as a "Full" user in Search Console.
 *   GSC_SITE                  property, default "sc-domain:aircareprohvac.com"
 *                             (use "https://aircareprohvac.com/" for a URL-prefix property)
 *   OUT_DIR                   output folder, default "gsc"
 * Does: (1) submits the sitemap, (2) pulls 28-day search performance vs the previous 28 days,
 * top queries/pages and local (Chicago + suburbs) queries, (3) inspects index status of key URLs.
 * Note: Google offers no API to "request indexing" for normal pages; sitemap submission +
 * internal links are the supported way. URL Inspection here is read-only status.
 */
import { createSign } from 'node:crypto';
import { mkdirSync, writeFileSync } from 'node:fs';

const SITE = process.env.GSC_SITE || 'sc-domain:aircareprohvac.com';
const ORIGIN = 'https://aircareprohvac.com';
const OUT = process.env.OUT_DIR || 'gsc';
const key = JSON.parse(process.env.GSC_SERVICE_ACCOUNT_JSON || '{}');
if (!key.client_email || !key.private_key) { console.error('GSC_SERVICE_ACCOUNT_JSON missing or invalid'); process.exit(1); }

const b64 = (o) => Buffer.from(typeof o === 'string' ? o : JSON.stringify(o)).toString('base64url');
async function token() {
  const now = Math.floor(Date.now() / 1000);
  const unsigned = `${b64({ alg: 'RS256', typ: 'JWT' })}.${b64({ iss: key.client_email, scope: 'https://www.googleapis.com/auth/webmasters', aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600 })}`;
  const sig = createSign('RSA-SHA256').update(unsigned).sign(key.private_key).toString('base64url');
  const r = await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${unsigned}.${sig}` }) });
  if (!r.ok) throw new Error(`token: ${r.status} ${await r.text()}`);
  return (await r.json()).access_token;
}
const T = await token();
const api = async (method, url, body) => {
  const r = await fetch(url, { method, headers: { authorization: `Bearer ${T}`, 'content-type': 'application/json' }, body: body ? JSON.stringify(body) : undefined });
  const text = await r.text();
  if (!r.ok) throw new Error(`${method} ${url}: ${r.status} ${text.slice(0, 300)}`);
  return text ? JSON.parse(text) : {};
};
const site = encodeURIComponent(SITE);
const day = (offset) => new Date(Date.now() - offset * 864e5).toISOString().slice(0, 10);
const query = (start, end, dimensions, rowLimit = 250, filters) => api('POST', `https://www.googleapis.com/webmasters/v3/sites/${site}/searchAnalytics/query`, { startDate: start, endDate: end, dimensions, rowLimit, ...(filters && { dimensionFilterGroups: [{ filters }] }) });

const out = { site: SITE, generatedAt: new Date().toISOString(), errors: [] };
const safe = async (label, fn) => { try { return await fn(); } catch (e) { out.errors.push(`${label}: ${e.message}`); return null; } };

// 1) Sitemap: submit + status
await safe('sitemap submit', () => api('PUT', `https://www.googleapis.com/webmasters/v3/sites/${site}/sitemaps/${encodeURIComponent(ORIGIN + '/sitemap-index.xml')}`));
out.sitemaps = (await safe('sitemaps list', () => api('GET', `https://www.googleapis.com/webmasters/v3/sites/${site}/sitemaps`)))?.sitemap ?? [];

// 2) Performance (GSC data lags ~2-3 days)
const cur = [day(30), day(3)], prev = [day(58), day(31)];
const totals = async ([s, e]) => ((await safe(`totals ${s}`, () => query(s, e, [], 1)))?.rows ?? [{}])[0] ?? {};
out.period = { current: cur, previous: prev };
out.totals = { current: await totals(cur), previous: await totals(prev) };
out.topQueries = (await safe('queries', () => query(cur[0], cur[1], ['query'], 100)))?.rows ?? [];
out.topPages = (await safe('pages', () => query(cur[0], cur[1], ['page'], 100)))?.rows ?? [];
const localRe = /chicago|evanston|skokie|wilmette|highland park|des plaines|arlington heights|schaumburg|naperville|lincoln park|lakeview|logan square|edgewater|andersonville|rogers park|uptown|ravenswood|lincoln square|north center|avondale|irving park|albany park|portage park|jefferson park|norwood park|edison park|bucktown|wicker park|humboldt park|ukrainian village|west town|austin|west ridge|old town|gold coast|near me/i;
out.localQueries = out.topQueries.length ? (await safe('local', () => query(cur[0], cur[1], ['query', 'page'], 500)))?.rows?.filter((r) => localRe.test(r.keys[0])) ?? [] : [];

// 3) Index status of key URLs
const keyUrls = ['/', '/hvac-chicago/', '/emergency-hvac/', '/furnace-repair/', '/ac-repair/', '/boiler-repair/', '/furnace-repair-chicago/', '/ac-repair-chicago/', '/hvac-evanston/', '/hvac-skokie/', '/blog/', '/free-estimate/', '/maintenance-plan/', '/furnace-wont-turn-on/', '/service-areas/'];
out.inspections = [];
for (const p of keyUrls) {
  const r = await safe(`inspect ${p}`, () => api('POST', 'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', { inspectionUrl: ORIGIN + p, siteUrl: SITE }));
  const s = r?.inspectionResult?.indexStatusResult;
  out.inspections.push({ url: p, verdict: s?.verdict ?? 'n/a', coverage: s?.coverageState ?? 'n/a', lastCrawl: s?.lastCrawlTime ?? null, googleCanonical: s?.googleCanonical ?? null });
}

// Write JSON + a short markdown summary for the Daily Executive Report
mkdirSync(OUT, { recursive: true });
writeFileSync(`${OUT}/latest.json`, JSON.stringify(out, null, 2));
const f = (n, d = 0) => (n == null ? '—' : Number(n).toFixed(d));
const c = out.totals.current, pv = out.totals.previous;
const md = [
  `# Search Console snapshot (${out.generatedAt.slice(0, 10)})`, '',
  `Property: \`${SITE}\` · Period ${cur[0]} → ${cur[1]} vs ${prev[0]} → ${prev[1]}`, '',
  '| Metric | Current 28d | Previous 28d |', '|---|---|---|',
  `| Clicks | ${f(c.clicks)} | ${f(pv.clicks)} |`, `| Impressions | ${f(c.impressions)} | ${f(pv.impressions)} |`,
  `| CTR | ${c.ctr != null ? f(c.ctr * 100, 1) + '%' : '—'} | ${pv.ctr != null ? f(pv.ctr * 100, 1) + '%' : '—'} |`,
  `| Avg position | ${f(c.position, 1)} | ${f(pv.position, 1)} |`, '',
  '## Top local queries', '| Query | Page | Clicks | Impr. | Pos. |', '|---|---|---|---|---|',
  ...out.localQueries.slice(0, 25).map((r) => `| ${r.keys[0]} | ${r.keys[1].replace(ORIGIN, '')} | ${r.clicks} | ${r.impressions} | ${f(r.position, 1)} |`), '',
  '## Index status of key pages', '| URL | Verdict | Coverage | Last crawl |', '|---|---|---|---|',
  ...out.inspections.map((i) => `| ${i.url} | ${i.verdict} | ${i.coverage} | ${i.lastCrawl?.slice(0, 10) ?? '—'} |`), '',
  `Sitemaps: ${out.sitemaps.map((s) => `${s.path} (submitted ${s.lastSubmitted?.slice(0, 10) ?? '—'}, ${s.contents?.[0]?.submitted ?? '?'} URLs)`).join('; ') || '—'}`,
  out.errors.length ? `\n## Errors\n${out.errors.map((e) => `- ${e}`).join('\n')}` : '',
].join('\n');
writeFileSync(`${OUT}/latest.md`, md);
writeFileSync(`${OUT}/${out.generatedAt.slice(0, 10)}.md`, md);
console.log(md);
if (out.errors.length && !out.topQueries.length && !out.inspections.some((i) => i.verdict !== 'n/a')) process.exit(1);
