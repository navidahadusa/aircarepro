#!/usr/bin/env node
/**
 * Daily Google Analytics 4 snapshot (Rachel Morgan, Lead Gen). Free: GA4 Data API + service account.
 * Runs in GitHub Actions (seo-daily.yml) and writes ga4/latest.md + ga4/latest.json to the seo-data branch.
 *
 * Env:
 *   GSC_SERVICE_ACCOUNT_JSON  same service-account key as Search Console; add its email in GA4 as Viewer
 *   GA4_PROPERTY_ID           numeric property ID (optional: auto-detected from measurement ID below)
 *   GA4_MEASUREMENT_ID        default G-J25SG73ES5 (the site's GA4 tag inside GTM-K3PBQCR9)
 *   OUT_DIR                   default "ga4"
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { loadKey, googleClient } from './lib/google-auth.mjs';

const OUT = process.env.OUT_DIR || 'ga4';
const MEASUREMENT_ID = process.env.GA4_MEASUREMENT_ID || 'G-J25SG73ES5';
const key = loadKey();
const api = await googleClient(key, ['https://www.googleapis.com/auth/analytics.readonly']);

// Find the property: env, else the property whose web stream has our measurement ID (Admin API).
let PROPERTY = process.env.GA4_PROPERTY_ID;
if (!PROPERTY) {
  const summaries = (await api('GET', 'https://analyticsadmin.googleapis.com/v1beta/accountSummaries?pageSize=200')).accountSummaries ?? [];
  const props = summaries.flatMap((a) => a.propertySummaries ?? []).map((p) => p.property.split('/')[1]);
  for (const id of props) {
    const streams = (await api('GET', `https://analyticsadmin.googleapis.com/v1beta/properties/${id}/dataStreams`)).dataStreams ?? [];
    if (streams.some((s) => s.webStreamData?.measurementId === MEASUREMENT_ID)) { PROPERTY = id; break; }
  }
  if (!PROPERTY && props.length === 1) PROPERTY = props[0];
  if (!PROPERTY) {
    console.error(`No GA4 property with ${MEASUREMENT_ID} visible to ${key.client_email}. In GA4: Admin → Property access management → add this email as Viewer. Visible properties: ${props.join(', ') || 'none'}`);
    process.exit(1);
  }
}

const run = (body) => api('POST', `https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY}:runReport`, body);
const CUR = { startDate: '28daysAgo', endDate: 'yesterday', name: 'current' };
const PREV = { startDate: '56daysAgo', endDate: '29daysAgo', name: 'previous' };
const out = { property: PROPERTY, measurementId: MEASUREMENT_ID, generatedAt: new Date().toISOString(), errors: [] };
const safe = async (label, fn) => { try { return await fn(); } catch (e) { out.errors.push(`${label}: ${e.message}`); return null; } };
const rows = (r) => (r?.rows ?? []).map((row) => ({
  dims: (row.dimensionValues ?? []).map((d) => d.value),
  vals: (row.metricValues ?? []).map((m) => Number(m.value)),
}));

const TOTAL_METRICS = ['sessions', 'totalUsers', 'newUsers', 'engagedSessions', 'screenPageViews', 'keyEvents'];
out.totals = {};
for (const range of [CUR, PREV]) {
  const r = await safe(`totals ${range.name}`, () => run({ dateRanges: [range], metrics: TOTAL_METRICS.map((name) => ({ name })) }));
  const v = rows(r)[0]?.vals ?? [];
  out.totals[range.name] = Object.fromEntries(TOTAL_METRICS.map((m, i) => [m, v[i] ?? 0]));
}
const report = (label, dimension, metrics, limit = 15, extra = {}) =>
  safe(label, () => run({ dateRanges: [CUR], dimensions: [{ name: dimension }], metrics: metrics.map((name) => ({ name })), limit, orderBys: [{ metric: { metricName: metrics[0] }, desc: true }], ...extra })).then(rows);

out.channels = await report('channels', 'sessionDefaultChannelGroup', ['sessions', 'keyEvents']);
out.landingPages = await report('landing pages', 'landingPage', ['sessions', 'keyEvents'], 20);
out.cities = await report('cities', 'city', ['sessions'], 15);
out.devices = await report('devices', 'deviceCategory', ['sessions'], 5);
const LEAD_EVENTS = ['click_to_call', 'click_to_sms', 'click_book_online', 'click_review_link', 'click_form_link'];
out.leadEvents = await report('lead events', 'eventName', ['eventCount'], 20, {
  dimensionFilter: { filter: { fieldName: 'eventName', inListFilter: { values: LEAD_EVENTS } } },
});
out.outboundBooking = await report('booking clicks (enhanced measurement)', 'linkDomain', ['eventCount'], 10, {
  dimensionFilter: { filter: { fieldName: 'eventName', stringFilter: { value: 'click' } } },
});

mkdirSync(OUT, { recursive: true });
writeFileSync(`${OUT}/latest.json`, JSON.stringify(out, null, 2));
const c = out.totals.current ?? {}, p = out.totals.previous ?? {};
const table = (title, list, heads) => list?.length
  ? [`## ${title}`, '', `| ${heads.join(' | ')} |`, `|${heads.map(() => '---').join('|')}|`, ...list.map((r) => `| ${[...r.dims, ...r.vals].join(' | ')} |`), '']
  : [`## ${title}`, '', '_No data yet._', ''];
const md = [
  `# Google Analytics 4 snapshot (${out.generatedAt.slice(0, 10)})`, '',
  `Property \`${PROPERTY}\` (${MEASUREMENT_ID}) · last 28 days vs previous 28 days`, '',
  '| Metric | Current 28d | Previous 28d |', '|---|---|---|',
  ...TOTAL_METRICS.map((m) => `| ${m} | ${c[m] ?? '—'} | ${p[m] ?? '—'} |`), '',
  ...table('Lead events (calls, texts, bookings, reviews)', out.leadEvents, ['Event', 'Count']),
  ...table('Outbound clicks by domain (Housecall Pro = bookings)', out.outboundBooking, ['Domain', 'Clicks']),
  ...table('Channels', out.channels, ['Channel', 'Sessions', 'Key events']),
  ...table('Top landing pages', out.landingPages, ['Landing page', 'Sessions', 'Key events']),
  ...table('Cities', out.cities, ['City', 'Sessions']),
  ...table('Devices', out.devices, ['Device', 'Sessions']),
  ...(out.errors.length ? ['## Errors', '', ...out.errors.map((e) => `- ${e}`), ''] : []),
].join('\n');
writeFileSync(`${OUT}/latest.md`, md + '\n');
writeFileSync(`${OUT}/${out.generatedAt.slice(0, 10)}.md`, md + '\n');
console.log(md);
