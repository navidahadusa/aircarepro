# SEO audit: aircareprohvac.com · 2026-11-25

Run by **Elena Brooks** (local SEO) with Natalie Foster (links) and Chloe Vance (performance). Approved by Sophia Reynolds.
Method: the `seo-audit`, `seo-local` and `seo-geo` skills (claude-seo), run with the project's own tools. The plugin's scripts and paid APIs are not installed.

**Data used**
- Crawl of all 140 live sitemap URLs (`crawl-live.json` in this folder)
- robots.txt, llms.txt, redirects and response headers
- Live JSON-LD
- Lighthouse 12 on the live site
- Search Console and GA4 from the `seo-data` branch (2026-11-25)

**Not measured**
- **Backlink profile:** the Semrush connector has no API units, and there are no Moz or Ahrefs keys.
- **CrUX field data:** the site is too new and too low-traffic.
- **Google Business Profile metrics:** these come from owner screenshots.

**Business type:** local service-area business (residential HVAC), Chicago and suburbs, open 24/7.

## Summary
**SEO health score: 88/100 for on-site work.** This is the team's score using the skill's weights. It is not a tool output.

| Category | Weight | Score | Notes |
|---|---|---|---|
| Technical SEO | 22% | 93 | 140/140 pages return 200, HTTPS, clean redirects, security headers |
| Content quality | 23% | 80 | Strong local depth on area and service pages; some thin utility pages |
| On-page SEO | 20% | 88 | 27 titles were too long (fixed today); 1 duplicate title (fixed) |
| Schema | 10% | 92 | Valid on every page; the emergency page lacked `Service` (fixed) |
| Performance | 10% | 100 | Lighthouse 100 on home, service and area pages; LCP 1.0–1.1 s |
| AI search readiness | 10% | 75 | AI crawlers allowed, llms.txt, quick answers; few third-party mentions yet |
| Images | 5% | 95 | All images have alt text; WebP; responsive sizes |

**The main gap is off-site authority, not the site itself.**
- Search Console (28 days): 2,723 impressions, 1 click, average position 53.2.
- Google sees the pages but ranks them low, which is typical for a new domain with few links, listings and reviews.
- The fixes for that are in `marketing/backlinks/30-day-presence-plan.md` and `marketing/citations/directory-rollout-2026-11.md`.

## Technical SEO
**What works**
- All 140 sitemap URLs return 200.
- No page has noindex. Every canonical points to itself.
- robots.txt allows everything except /thank-you/ and links the sitemap index.
- http → https and www → non-www both redirect with a 301. Paths without a trailing slash redirect to the slash version.
- Old WordPress sitemap URLs redirect to the new sitemap.
- Headers are set: HSTS, nosniff, frame protection, referrer policy and permissions policy.
- The site loads no external JavaScript.

**Findings**
| Severity | Finding | Status |
|---|---|---|
| Medium | `/index.html` returned 200: a duplicate of the homepage (the canonical tag pointed to `/`) | **Fixed:** 301 to `/` in both htaccess files, written so it can't redirect-loop |
| Low | `http://www.` takes two hops to reach `https://aircareprohvac.com/` | Leave as is (both are 301s; Google follows them) |
| Info | `/free-estimate/` is "Discovered, not indexed"; `/ac-repair-chicago/` shows an old noindex from the Nov 18 crawl | Internal links added today (see On-page). **Owner:** Request indexing for both |

## Content quality
**What works**
- 33 area pages and 27 service+city pages have unique, Chicago-specific content: housing types, utilities, sourced data notes.
- 38 blog posts, each with a quick answer, FAQ and an organization byline.
- No duplicate meta descriptions.

**Findings**
| Severity | Finding | Recommendation |
|---|---|---|
| Medium | Thin utility pages: `/service-areas/` (116 words), `/maintenance-plan/` (171), `/contact/` (215), `/financing/` (217), `/free-estimate/` (276) | Add a short, factual intro to `/service-areas/` (how we cover the North, Northwest and West Sides and the suburbs). `/maintenance-plan/` stays thin until the owner gives Comfort Club pricing and what's included |
| Medium | Overlapping post pairs (already listed in the editorial calendar): `ac-not-cooling` + `air-conditioner-not-cooling`, `repair-or-replace-furnace` + `furnace-replacement-vs-repair`, `heat-pumps-in-chicago` + `heat-pump-installation-chicago` | Merge with 301 redirects (Elena, next sprint) |
| Low | 61 meta descriptions include the phone number | Keep for now: it can prompt calls from the results page. Revisit when Search Console shows CTR per page |
| Info | Experience signals: real job photos, license number, NATE/EPA credentials and BBB are all on the site | Add real job stories when the owner sends details (calendar items flagged O) |

## On-page SEO
| Severity | Finding | Status |
|---|---|---|
| High | 27 titles ran over 65 characters because " \| Chicago Aircare Pro" was added to long titles, so Google would cut the keyword part | **Fixed:** the brand suffix is dropped automatically when the full title would pass 62 characters. Now 2 are over 65, and only because of HTML entities |
| High | Duplicate title: `/furnace-installation/` and `/furnace-installation-chicago/` were both "Furnace Installation Chicago" | **Fixed:** the service page is now "Furnace Installation & Replacement". The city page keeps "furnace installation chicago" |
| Medium | `/free-estimate/` had only 2 in-body internal links and isn't indexed | **Fixed:** linked from all 23 service and category pages and all 33 area pages |
| Low | `/about/`, `/contact/`, `/faq/` and `/reviews/` have 1 in-body link each (they're also in the header and footer) | Fine for company pages |
| ✓ | Exactly one H1 on every page; 0 orphan pages; 0 JSON-LD errors | |

## Schema
**What works**
- One `HVACBusiness`/`LocalBusiness` entity (`@id` #business) on every page, with:
  - name, legal name, phone, email, logo and image
  - 24/7 hours, 33 areas served, 20 services in the offer catalog
  - license credential, and `sameAs` for Google, Yelp and Facebook
- `WebSite` on every page.
- `BreadcrumbList` on inner pages.
- `Service` on service, area and city pages.
- `BlogPosting` (organization author) on posts.
- `FAQPage` whose answers match the visible text.
- No self-serving review or rating markup.

**Findings**
| Severity | Finding | Status |
|---|---|---|
| Medium | `foundingDate: 2026` was the rebrand year | **Fixed earlier today:** removed. **Owner:** send the real founding year |
| Low | `/emergency-hvac/` had no `Service` entity | **Fixed:** `Service` for 24/7 emergency HVAC repair added |
| Info | No `streetAddress`/`postalCode`: Rich Results Test will warn | Intentional (service-area business, street hidden, same as the Google profile) |
| Info | FAQ rich results only show for government and health sites since 2023 | Keep the markup: it helps understanding and AI answers |
| Next | Add Apple, Bing, Nextdoor, Angi and Houzz profile URLs to `sameAs` as each listing goes live | Hannah, during the directory rollout |

## Performance
- **Live Lighthouse (mobile, 2026-11-25):**

| Page | Score | LCP | CLS |
|---|---|---|---|
| Homepage | 100/100/100/100 | 1.0 s | 0 |
| /furnace-repair/ | 100/100/100/100 | 1.1 s | 0 |
| /hvac-lakeview/ | 100/100/100/100 | 1.0 s | 0 |

- No third-party scripts in the page. GTM loads only on production, as configured.
- **Not measured:** INP and CrUX field data (not enough traffic yet).

## Images
- 0 images without alt text across 140 pages.
- Responsive WebP through Astro, with the hero photos pre-cropped for phones.
- All photos are the owner's real job photos.

## Local SEO (`seo-local`)
| Signal | Status |
|---|---|
| Google Business Profile | Live as CHICAGO AIRCARE PRO; weekly posts drafted; **review count and velocity not measured** (owner screenshots needed) |
| NAP consistency on the site | One source (`business.ts`), identical on all 140 pages; no street address (service-area business) |
| Citations | GBP, Yelp, Facebook, Housecall Pro and ChatGPT profile live; Bing pending publish; **15 more ready** (rollout approved today) |
| Location pages | 33 area pages + 27 service+city pages, unique content, linked from the hub and the footer |
| Local links | Not measured; plan in `30-day-presence-plan.md` |
| Search Console local signals | Homepage ranks 1–3 for many "<service> + neighborhood" queries; area pages mostly at positions 40–80 |

**Top local actions (in order)**
1. Directory rollout (owner submits; checklist ready).
2. Steady Google reviews: ask every customer, the same day.
3. Weekly GBP post and photos.
4. Local links: wards, block clubs, the chamber.

## AI search readiness (`seo-geo`)
| Signal | Status |
|---|---|
| AI crawler access | robots.txt allows all bots (GPTBot, ClaudeBot, PerplexityBot, Google-Extended are not blocked) |
| llms.txt | Live: business summary, phone, areas, credentials, key pages |
| Answer-first content | Every post has a 40–80-word quick answer and FAQs; service pages open with what the service fixes |
| Entity clarity | Single `@id`, legal name, license, `sameAs` (3 profiles) |
| Third-party mentions | **Weak:** AI answers lean on directories, reviews and local press, which is exactly what the rollout and press plan build |
| ChatGPT business profile | Live (owner, 2026-11-22) |

## What wasn't checked, and why
- **Backlinks:** no data source with units or keys. **Owner:** Search Console → Links → screenshot of "Top linking sites" to set the baseline.
- **Google update correlation:** the update ledger script isn't installed. The site is too new for trend analysis anyway.
- **Geo-grid map ranking:** needs DataForSEO (paid). Not used.
