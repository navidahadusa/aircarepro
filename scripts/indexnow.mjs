#!/usr/bin/env node
/**
 * IndexNow ping (Elena Brooks): tells Bing (which powers ChatGPT search and Copilot), Yandex, Seznam and Naver
 * that our pages changed, right after each production deploy. Google doesn't use IndexNow (it uses the sitemap).
 * Free, no account. The key file lives at /<key>.txt (public/), which proves we own the site.
 * Usage: node scripts/indexnow.mjs [dist]   (reads every URL from dist/sitemap-*.xml)
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const DIST = process.argv[2] || 'dist';
const HOST = 'aircareprohvac.com';
const keyFile = readdirSync('public').find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
if (!keyFile) { console.error('No IndexNow key file in public/'); process.exit(1); }
const key = keyFile.replace('.txt', '');
const urls = readdirSync(DIST).filter((f) => /^sitemap-\d+\.xml$/.test(f))
  .flatMap((f) => [...readFileSync(join(DIST, f), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
if (!urls.length) { console.error('No URLs found in the sitemap'); process.exit(1); }

const r = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST', headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${keyFile}`, urlList: urls.slice(0, 10000) }),
});
console.log(`IndexNow: ${urls.length} URLs → HTTP ${r.status} ${r.status === 200 || r.status === 202 ? '(accepted)' : await r.text()}`);
if (r.status >= 400 && r.status !== 429) process.exit(1);
