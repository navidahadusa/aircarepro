#!/usr/bin/env node
/**
 * Site KPI snapshot from the built site (dist/). Used by Sophia Reynolds in every
 * Daily Executive Report. Run after `npm run build`:  node scripts/site-metrics.mjs [--json]
 * Measures only what is in the build: no estimates, no live traffic data.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const files = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) { if (!p.includes('_astro') && !p.includes('.prerender')) walk(p); }
    else if (f === 'index.html') files.push(p);
  }
})(DIST);

const route = (p) => p.replace(DIST, '/').replace(/index\.html$/, '');
const pages = files.map((f) => {
  const html = readFileSync(f, 'utf8');
  const types = [];
  let schemaErrors = 0;
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { const d = JSON.parse(m[1]); [].concat(d['@type']).forEach((t) => types.push(t)); } catch { schemaErrors++; }
  }
  const internal = [...html.matchAll(/href="(\/[^"#?]*)/g)].map((m) => m[1]).filter((h) => !h.startsWith('/_astro'));
  return {
    route: route(f),
    noindex: /<meta name="robots" content="noindex"/.test(html),
    title: (html.match(/<title>([^<]*)<\/title>/) || [])[1] ?? '',
    descLen: ((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] ?? '').length,
    types, schemaErrors,
    internal: new Set(internal),
    tel: (html.match(/href="tel:/g) || []).length,
    sms: (html.match(/href="sms:/g) || []).length,
    forms: (html.match(/data-lead-form/g) || []).length,
    booking: (html.match(/data-track="click_book_online"/g) || []).length,
    h1: (html.match(/<h1[\s>]/g) || []).length,
  };
});

const indexable = pages.filter((p) => !p.noindex);
const has = (t) => indexable.filter((p) => p.types.includes(t)).length;
const inbound = new Map(indexable.map((p) => [p.route, 0]));
for (const p of pages) for (const h of p.internal) if (inbound.has(h) && h !== p.route) inbound.set(h, inbound.get(h) + 1);
const orphans = [...inbound].filter(([r, n]) => n === 0 && r !== '/').map(([r]) => r);
const avg = (xs) => (xs.reduce((a, b) => a + b, 0) / Math.max(xs.length, 1)).toFixed(1);

const kpis = {
  pages_total: pages.length,
  pages_indexable: indexable.length,
  area_pages: indexable.filter((p) => p.route.startsWith('/hvac-') && !p.types.includes('BlogPosting')).length,
  blog_posts: indexable.filter((p) => p.types.includes('BlogPosting')).length,
  pages_with_HVACBusiness: has('HVACBusiness'),
  pages_with_Service_schema: has('Service'),
  pages_with_FAQPage: has('FAQPage'),
  pages_with_BreadcrumbList: has('BreadcrumbList'),
  jsonld_parse_errors: pages.reduce((a, p) => a + p.schemaErrors, 0),
  pages_with_lead_form: indexable.filter((p) => p.forms > 0).length,
  pages_with_booking_link: indexable.filter((p) => p.booking > 0).length,
  pages_with_tel_link: indexable.filter((p) => p.tel > 0).length,
  pages_with_sms_link: indexable.filter((p) => p.sms > 0).length,
  avg_internal_links_per_page: Number(avg(indexable.map((p) => p.internal.size))),
  avg_inbound_internal_links: Number(avg([...inbound.values()])),
  orphan_pages: orphans,
  pages_missing_single_h1: indexable.filter((p) => p.h1 !== 1).map((p) => p.route),
  meta_descriptions_over_160: indexable.filter((p) => p.descLen > 160).map((p) => p.route),
};

if (process.argv.includes('--json')) console.log(JSON.stringify(kpis, null, 2));
else for (const [k, v] of Object.entries(kpis)) console.log(`${k.padEnd(30)} ${Array.isArray(v) ? (v.length ? v.join(', ') : '0 ✓') : v}`);
