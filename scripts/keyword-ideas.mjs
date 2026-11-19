#!/usr/bin/env node
/**
 * Keyword ideas from Google Autocomplete (Elena Brooks, Local SEO).
 * Real phrases people type into Google. NO search volumes: Autocomplete doesn't give them.
 * Use Search Console (seo-data branch) or a connected keyword tool (Semrush/Ahrefs/HarborRank) for volumes.
 *
 * Usage:
 *   node scripts/keyword-ideas.mjs "furnace repair"                 # seed + Chicago areas + modifiers
 *   node scripts/keyword-ideas.mjs "boiler repair" --areas evanston,skokie
 *   node scripts/keyword-ideas.mjs "no heat" --no-areas --json
 *   node scripts/keyword-ideas.mjs "ac repair" --out marketing/seo/keyword-ideas/ac-repair.md
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { spawnSync } from 'node:child_process';

// Behind an HTTPS proxy (cloud sessions), Node's fetch only uses it with NODE_USE_ENV_PROXY=1: re-run once with it set.
if ((process.env.HTTPS_PROXY || process.env.https_proxy) && !process.env.NODE_USE_ENV_PROXY) {
  const r = spawnSync(process.execPath, ['--no-warnings', ...process.argv.slice(1)], { stdio: 'inherit', env: { ...process.env, NODE_USE_ENV_PROXY: '1' } });
  process.exit(r.status ?? 1);
}

const args = process.argv.slice(2);
const seed = args.find((a) => !a.startsWith('--'));
if (!seed) { console.error('Usage: node scripts/keyword-ideas.mjs "<seed>" [--areas a,b] [--no-areas] [--json] [--out file.md]'); process.exit(1); }
const flag = (n) => args.includes(`--${n}`);
const opt = (n) => { const i = args.indexOf(`--${n}`); return i > -1 ? args[i + 1] : undefined; };

const DEFAULT_AREAS = ['chicago', 'lincoln park', 'lakeview', 'logan square', 'rogers park', 'edgewater', 'evanston', 'skokie',
  'wilmette', 'highland park', 'des plaines', 'arlington heights', 'schaumburg', 'naperville'];
const areas = flag('no-areas') ? [] : (opt('areas')?.split(',').map((s) => s.trim().replace(/-/g, ' ')) ?? DEFAULT_AREAS);
const MODIFIERS = ['', ' near me', ' cost', ' emergency', ' 24 hour', ' best', ' how to', ' why', ' vs', ' price'];
const LETTERS = 'abcdefghijklmnoprstuvwy'.split('');

const queries = new Set();
for (const m of MODIFIERS) queries.add(`${seed}${m}`.trim());
for (const l of LETTERS) queries.add(`${seed} ${l}`);
for (const a of areas) { queries.add(`${seed} ${a}`); queries.add(`${seed} in ${a}`); }

async function suggest(q) {
  const url = `https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=${encodeURIComponent(q)}`;
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (keyword-ideas script)' } });
      if (r.status === 403) throw Object.assign(new Error('blocked'), { fatal: true });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const [, list] = JSON.parse(await r.text());
      return list;
    } catch (e) {
      if (e.fatal) throw new Error('Google Autocomplete is blocked by the network (suggestqueries.google.com must be allowed).');
      await new Promise((res) => setTimeout(res, 600 * (i + 1)));
    }
  }
  return [];
}

const results = new Map(); // phrase -> source query
let n = 0;
for (const q of queries) {
  const list = await suggest(q);
  for (const s of list) if (!results.has(s)) results.set(s, q);
  if (++n % 10 === 0) process.stderr.write(`  ${n}/${queries.size} queries\r`);
  await new Promise((res) => setTimeout(res, 150)); // be polite
}

// "Local" = names one of OUR areas or "near me" (whole words, so "billings" doesn't match "il").
const AREA_WORDS = [...new Set([...DEFAULT_AREAS, ...areas, 'near me', 'north side', 'north shore', 'chicagoland'])];
const OTHER_STATE = /\b(al|ak|az|ar|ca|co|ct|de|fl|ga|ia|id|in|ks|ky|la|ma|md|me|mi|mn|mo|ms|mt|nc|nd|ne|nh|nj|nm|nv|ny|oh|ok|or|pa|ri|sc|sd|tn|tx|ut|va|vt|wa|wi|wv|wy)$/;
const classify = (k) => {
  const local = AREA_WORDS.some((a) => new RegExp(`\\b${a}\\b`).test(k)) && !OTHER_STATE.test(k);
  const intent = /emergency|24 hour|near me|repair|fix|replace|install|service|company|contractor|cost|price|quote/.test(k)
    ? (/emergency|24 hour|no heat|not working|won.?t/.test(k) ? 'emergency' : 'commercial')
    : (/how|why|what|when|should|can|vs|best|signs|diy/.test(k) ? 'informational' : 'other');
  return { local, intent };
};
const rows = [...results.keys()].map((k) => ({ keyword: k, ...classify(k) }))
  .sort((a, b) => Number(b.local) - Number(a.local) || a.intent.localeCompare(b.intent) || a.keyword.localeCompare(b.keyword));

if (flag('json')) { console.log(JSON.stringify({ seed, generated: new Date().toISOString(), count: rows.length, rows }, null, 2)); }
else {
  const md = [`# Keyword ideas: "${seed}"`, '',
    `Source: Google Autocomplete (US, English), ${new Date().toISOString().slice(0, 10)} · ${queries.size} queries · **${rows.length} unique phrases**.`,
    'No search volumes (Autocomplete does not provide them). Volumes come from Search Console or a connected keyword tool.', '',
    '| Keyword | Local | Intent |', '|---|---|---|',
    ...rows.map((r) => `| ${r.keyword} | ${r.local ? '✓' : ''} | ${r.intent} |`)].join('\n');
  const out = opt('out');
  if (out) { mkdirSync(dirname(out), { recursive: true }); writeFileSync(out, md + '\n'); console.error(`\nSaved ${rows.length} keywords to ${out}`); }
  else console.log(md);
}
