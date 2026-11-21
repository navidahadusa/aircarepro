---
name: local-seo-page
description: Build or upgrade a local SEO page for CHICAGO AIRCARE PRO: a neighborhood/suburb area page (/hvac-<area>/) or a service+city page (/<service>-<city>/). Use when adding a new service area, strengthening an area page that ranks 5–20, or when Search Console shows an area page not indexed. Owner: Elena Brooks, with Maya Lin.
---

# Local SEO page (Elena Brooks + Maya Lin)

## Where things live
- Area list and NAP: `src/data/business.ts` (`business.areas`, `areasByGroup()`). Never hard-code NAP.
- Area page content: `src/data/areaContent.ts` (h1, title, meta, intro, sections, faqs, nearbySlugs, serviceCitySlugs). Route: `src/pages/hvac-[slug].astro`.
- Service+city pages: `src/content/local/<service>-<city>.md` (schema in `src/content.config.ts`, collection `local`). Routed by `src/pages/[slug].astro`; template `src/components/LocalServicePage.astro`. Cities allowed: `serviceCitySlugs` in `areaContent.ts`.
- Keyword targets: `marketing/seo/keyword-map.md`. Run the `keyword-research` skill first.

## Checklist for every local page
1. **Keyword**: one primary ("<service> <place>" or "HVAC repair <place>") in title (≤ 60 chars), H1, first 100 words, one H2, meta (≤ 160 chars).
2. **Length and uniqueness**: area pages 950+ words; service+city 700+. At least 75% unique phrasing versus sibling pages. No city-name swaps.
3. **Real local substance** (cite a source in an HTML comment or the section text when it's a fact): housing stock (two-flats, greystones, bungalows, ranch homes, condos), typical systems (steam/hot-water boilers, attic air handlers), utilities (ComEd, Peoples Gas, North Shore Gas, Nicor Gas), local rules only if verified. Never invent statistics, response times, prices or customer stories.
4. **FAQs**: 4–7 local questions via the content data (rendered by `FaqSection`, so schema matches visible text).
5. **Internal links**: Chicago hub ↔ area ↔ 3–6 nearby areas (`nearbySlugs`) ↔ core services ↔ matching service+city pages ↔ 1–2 relevant posts. Every new page must get inbound links (no orphans).
6. **CTAs**: the template adds the emergency call, text and Housecall Pro booking. Every `tel:`/`sms:`/booking link carries `data-track` + `data-placement`.
7. **Schema**: the template outputs `Service` (pointing at the single `HVACBusiness` `@id`), `BreadcrumbList` and `FAQPage`. Don't add a second LocalBusiness. Never publish a street address (`showAddress: false`).
8. **Photo**: optional, from `src/data/photos.ts` only (owner's real photos; alt text describes what's visible, no location claims).

## New service area
Adding a place means: add it to `business.areas` (group, slug), add its `areaContent` entry, add nearby links both ways, update `CLAUDE.md` service-area list and `marketing/seo/keyword-map.md`. Only areas the owner actually serves.

## Verify
`npm run check` and `npm run build` (0 errors) · `node scripts/site-metrics.mjs` (orphans 0, one H1, meta ≤ 160, JSON-LD errors 0) · word count: `node -e` on `dist/<slug>/index.html` text · screenshot desktop + mobile (no horizontal scroll at 360px). Report under Elena Brooks.

## Unslop (owner rule, 2026-11-21)
Before shipping, apply `marketing/unslop-style.md`: no em dashes or filler words in visible copy, facts instead of trust adjectives, specific Chicago detail, varied rhythm; in design no label over every heading, no icon box on every item, varied section layouts, real photos first.
