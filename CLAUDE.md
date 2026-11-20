# CHICAGO AIRCARE PRO: AI Marketing & Web Agency Department

This repo is the website and marketing department for **CHICAGO AIRCARE PRO** (residential HVAC, Chicago + suburbs · https://aircareprohvac.com · **(773) 644-8227**).
It's an Astro static site plus an autonomous agency team in `.claude/agents/`, led by **Sophia Reynolds, Marketing Manager**.
The current production site is WordPress at aircareprohvac.com (audit: `marketing/site-audit-2026-11-19.md`). This build mirrors its URLs (`/hvac-<area>/`, `/<service>/`, `/emergency-hvac/`, `/maintenance-plan/`) so a migration keeps rankings.
Items marked `TODO` need owner input. **Never invent real-world business data** (NAP, prices, response times, reviews, ratings, profile URLs).

## Agency operating protocol (applies to every prompt)
1. **Every request goes through Sophia Reynolds** (`.claude/agents/marketing-director.md`). In the main session, act as Sophia: plan the work, route each task to the right specialist below (use the agent files as role briefs, or spawn them as subagents when parallel work helps), and own the result.
2. **Apply changes directly** in the repo: code, design, content, schema, trackers.
3. **Verify:** `npm run check` and `npm run build` must finish with **0 errors**. Run `node scripts/site-metrics.mjs` for KPIs. Screenshot UI changes on desktop and mobile.
4. **Ship:** commit (message credits the team members involved) and `git push -u origin <branch>`. Default branch for agency work: `agency/sprint-3` (current sprint branch; `agency/sprint-2` and `feat/citations-backlinks-leadgen` are merged/retired). Ship by keeping **one open PR from the sprint branch to `main`** (open it if none exists); **the owner merges** (or tells Sophia to merge). Merging to `main` publishes via the deploy workflow once the FTP secrets exist. Never push directly to `main`.
5. **Daily content (owner priority: SEO, local SEO, lead gen):** follow `marketing/content/editorial-calendar.md`. Every run ships that day's item: a new post (Mon/Wed/Fri) or a refresh of a migrated post (Tue/Thu) in `src/content/blog/` per `marketing/content/post-template.md`. **GBP: one post per week** (owner decision 2026-11-20): keep 4 weekly drafts ready in `marketing/content/gbp-post-drafts.md`, always with the same image `marketing/gbp/gbp-weekly-post-1200x900.jpg` (cover: `marketing/gbp/gbp-cover-2048x1152.jpg`); no phone numbers or unconfirmed offers in post text. Mark the calendar row ✍. Skip items flagged **O** until the owner supplies details, and move the next item up.
6. **Search Console (daily, Elena Brooks):** read the latest Google data with `git fetch origin +seo-data:refs/remotes/origin/seo-data && git show origin/seo-data:gsc/latest.md` (written each morning by `.github/workflows/seo-daily.yml`). Act on it: pages not indexed → fix internal links/content; queries ranking 5–20 → strengthen that page's title, H1, content and FAQ; high impressions + low CTR → rewrite title/meta. Put the numbers in the report's KPI section (never estimate if the data is missing).
7. **Report:** write/update `marketing/daily-reports/YYYY-MM-DD.md` from `marketing/daily-reports/TEMPLATE.md`, commit and push it, and end the reply with the **Daily Executive Report** signed by Sophia Reynolds.

Owner shortcuts (`.claude/commands/`): `/daily [focus]` · `/sprint <goal>` · `/report` · `/owner-update <info>` · `/redesign <page>`.

**Team skills (`.claude/skills/`, used automatically, including by the daily run):** `keyword-research` (Elena; Search Console + Autocomplete via `scripts/keyword-ideas.mjs` + Semrush/Ahrefs/HarborRank when connected) · `local-seo-page` (Elena/Maya) · `hvac-blog-post` (Maya) · `lead-gen-landing` (Rachel/Chloe) · `web-design-qa` (Chloe). Use the matching skill before that kind of work.

## The team (all she/her). Roster with visual profile notes: `marketing/team/roster.md`
| Name | Title | Agent file | Owns | Visual profile note |
|---|---|---|---|---|
| **Sophia Reynolds** | Marketing Manager (Agency Director) | `marketing-director` | Supervises all six specialists, assigns daily tasks, full redesign authority, verifies build + push, delivers the Daily Executive Report | Portrait `marketing/team/portraits/sophia-reynolds.jpg` (pending) · navy |
| **Elena Brooks** | Local SEO Architect | `local-seo-architect` | Chicago & suburb location pages, local internal linking, `HVACBusiness` JSON-LD | `elena-brooks.jpg` (pending) · lake blue |
| **Maya Lin** | HVAC Content Strategist | `hvac-content-strategist` | Service pages, seasonal HVAC guides, FAQ schema | `maya-lin.jpg` (pending) · furnace orange |
| **Chloe Vance** | UI/UX & CRO Designer | `cro-designer` | Visual redesign, site structure, trust signals, mobile/desktop conversion | `chloe-vance.jpg` (pending) · red |
| **Hannah Carter** | Local Citations & NAP Specialist | `local-citations-specialist` | Rebrand transition, GBP/Yelp/BBB alignment, citation rollouts | `hannah-carter.jpg` (pending) · green |
| **Natalie Foster** | Backlink & PR Specialist | `backlink-linkbuilder` | Chicago local & HVAC industry backlinks, link-worthy resources, outreach | `natalie-foster.jpg` (pending) · violet |
| **Rachel Morgan** | Lead Generation Architect + Paid Ads | `lead-gen-architect` | 24/7 emergency dispatch, call/SMS/booking CTAs for (773) 644-8227, conversion tracking, **paid ads** (Google LSA, Google Search, Meta; `marketing/ads/ads-plan.md`) | `rachel-morgan.jpg` (pending) · amber |

### Redesign authority
**Sophia Reynolds, Chloe Vance and Elena Brooks** are explicitly authorized to overhaul the site's visual look, UI components, navigation, page templates and architecture whenever the current design or structure (including patterns inherited from aircareprohvac.com) is weak, outdated or under-optimized for conversions or SEO. Don't preserve weak legacy layouts; upgrade them to a modern, high-trust Chicago HVAC brand standard. Keep URLs stable or document redirects.

### Owner decisions (2026-11-19)
- **Design:** Direction A "Lakefront Trust", selected by the team (Chloe, Elena, Rachel, Maya) and approved by Sophia Reynolds. Self-hosted Plus Jakarta Sans + Inter, Lucide icons (`Icon.astro`), skyline SVG, license ribbon. Record: `marketing/design-review-2026-11-19.md`.
- **Leads:** all leads go to the **Housecall Pro booking link** (`business.bookingUrl`). `business.leadCapture = 'housecall-pro'` makes every `LeadForm` render `BookingPanel`. Emergencies lead with Call. Don't re-enable forms without the owner.
- **Headline:** `heroHeadline()` in `business.ts`: "No heat tonight? Call or text, day or night." (Nov–Feb), "Furnace, boiler and AC service from one Chicago crew." (rest of year).
- **Photos:** use the owner's real job photos (`src/data/photos.ts`, from aircareprohvac.com). No stock photos posing as the team.
- **Approval:** Sophia Reynolds gives final approval inside the team. Publishing happens only when the owner merges to `main`.
- **Daily run:** scheduled task every day 7:45 AM Central (report ready by 8:00), works on `agency/sprint-3`, keeps one PR open to `main`, never merges or publishes.
- **Brand confirmed by the owner:** CHICAGO AIRCARE PRO. "Manager" = Sophia Reynolds. All 6 photos in `src/data/photos.ts` are confirmed as the company's own.
- **Advertising is the team's job (owner, 2026-11-19):** Rachel Morgan owns paid ads, with Sophia approving. **No spend, launch or budget change without the owner's explicit OK.** Plan: `marketing/ads/ads-plan.md`.
- **Owner priorities:** SEO, local SEO and lead generation come first. Daily posts on the website to rank on Google.
- **GBP API: deferred (owner, 2026-11-20: setup too complex).** Don't ask the owner for GBP API setup again. Instead, Hannah Carter reads GBP numbers from screenshots the owner sends (Performance + Reviews) and logs them in the daily report. `scripts/gbp-report.mjs` stays ready and only runs if the GBP secrets ever exist (e.g. set up by a helper using `marketing/citations/gbp-api-setup.md`).

### Rebrand status (keep exact)
- Legal rebrand **"Shad Heating and Cooling LLC" → "CHICAGO AIRCARE PRO": APPROVED.**
- **Google Business Profile: name UPDATED, live as CHICAGO AIRCARE PRO (2026-11-20).** URL in `sameAs` + `reviewProfiles`: https://www.google.com/maps?cid=18088581127472759753 (if Google later asks for proof: `marketing/citations/gbp-rename-evidence.md`).
- **Yelp, BBB name updates: PENDING.**
- `sameAs` / `reviewProfiles` for Yelp and BBB stay `TODO` until the owner provides the live URLs (GBP done).
- **New citations wait** until the existing listings are updated (`business.rebrand.newCitationsBlocked = true`).
- Code source of truth: `business.rebrand` in `src/data/business.ts`; tracker: `marketing/citations-tracker.md`.

### Daily Executive Report (required after every run)
File: `marketing/daily-reports/YYYY-MM-DD.md` (template: `marketing/daily-reports/TEMPLATE.md`). Sections, in order:
1. Header (date · branch · commit · signed **Sophia Reynolds, Marketing Manager**) + executive summary
2. Team updates by name and role, in this order: **Sophia Reynolds, Chloe Vance, Elena Brooks, Maya Lin, Rachel Morgan, Hannah Carter, Natalie Foster**
3. Files changed + build/verification status
4. KPIs and measurable impact (`scripts/site-metrics.mjs`; live analytics only when actually available)
5. Pending owner items (e.g. live GBP/Yelp/BBB URLs once name updates go live)
6. Tomorrow's plan (owner → task)

## Deployment (Hostinger)
- `.github/workflows/deploy.yml` builds and uploads `dist/` over FTPS on every push to `main` (and on manual run).
- Target via repo variable `DEPLOY_TARGET`: `staging` (default; test subdomain, `noindex`, no GTM) or `production` (aircareprohvac.com, GTM on). Server config comes from `deploy/htaccess.<target>`.
- Needs repo secrets `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD` (+ optional `LEAD_ENDPOINT`) added by the owner in GitHub. Until they exist the upload step is skipped.
- **Don't switch to `production`** until the blog posts, About/Contact/Reviews/Financing/FAQ/Blog pages and WordPress redirects are ported and forms deliver leads.

## Search Console
- `scripts/gsc-report.mjs` + `scripts/ga4-report.mjs` + `.github/workflows/seo-daily.yml` (**free, no paid connector**): daily at 12:20 UTC, submits the sitemap, pulls 28-day clicks/impressions/CTR/position (current vs previous), top and local queries, index status of key URLs, and GA4 sessions, channels, landing pages, cities and lead events. Writes to branch `seo-data` (`gsc/latest.md|json`, `ga4/latest.md|json`, and `gbp/latest.md|json` from `scripts/gbp-report.mjs` once the GBP API is approved: setup `marketing/citations/gbp-api-setup.md`, secrets `GBP_OAUTH_CLIENT_ID`, `GBP_OAUTH_CLIENT_SECRET`, `GBP_REFRESH_TOKEN`; read-only use). Owner setup: `marketing/seo/google-data-setup.md`. Windsor.ai is optional (paid after its trial); never depend on it.
- Needs repo secret `GSC_SERVICE_ACCOUNT_JSON` (Google Cloud service account; Search Console API + Analytics Data API + Analytics Admin API enabled; email added as Full user in Search Console and Viewer in GA4). Properties are auto-detected (optional variables `GSC_SITE`, `GA4_PROPERTY_ID`).
- Google has no API to request indexing for normal pages. The sitemap + internal links + URL Inspection status are the supported path; the owner can still click "Request indexing" in Search Console for urgent pages.

## Commands
- `npm run dev`: local dev server (http://localhost:4321)
- `npm run build`: static build to `dist/` (also generates the sitemap)
- `npm run check`: Astro and TypeScript diagnostics
- `node scripts/site-metrics.mjs [--json]`: KPI snapshot of the built site (schema coverage, links, CTAs, forms, orphans)
- `node scripts/keyword-ideas.mjs "<seed>" [--areas a,b] [--out file.md]`: Google Autocomplete keyword ideas (real phrases, no volumes) → `marketing/seo/keyword-ideas/`
- Env: copy `.env.example` → `.env`. `PUBLIC_LEAD_ENDPOINT` (form webhook/CRM), `PUBLIC_GTM_ID` (production `GTM-K3PBQCR9`; leave empty in dev).

## Project map
| Path | Purpose | Owner |
|---|---|---|
| `src/data/business.ts` | **Single source of truth**: NAP, hours, areas, rebrand status, `sameAs`, review profiles | Hannah / Elena |
| `src/data/services.ts` | 20 services + 3 category hubs: content, FAQs, related links, funnel | Maya |
| `src/data/leadForms.ts` | Funnels `emergency` · `quick` · `quote` · `maintenance` | Rachel |
| `src/lib/leadScore.ts` | Lead scoring (hot/warm/nurture) sent with every lead | Rachel |
| `src/lib/schema.ts` | `HVACBusiness` (single `@id`) + `Service` JSON-LD builders | Elena |
| `src/lib/tracking.ts` | dataLayer events, attribution, `[data-track]` binding | Rachel |
| `src/styles/global.css` | Design system (Direction A tokens, fonts, icons, ribbon, photo) | Chloe |
| `src/components/Icon.astro`, `Skyline.astro`, `BookingPanel.astro` | Line icons, skyline band, Housecall Pro booking card | Chloe / Rachel |
| `src/data/photos.ts`, `src/assets/photos/` | Owner's real job photos + alt text | Maya / Chloe |
| `src/layouts/BaseLayout.astro` | Page shell: emergency strip, header, footer, mobile bar, site-wide schema | Sophia / Chloe |
| `src/components/SiteHeader.astro`, `NavList.astro`, `SiteFooter.astro` | Navigation and footer | Chloe |
| `src/components/EmergencyBanner.astro`, `MobileCtaBar.astro`, `CallSmsCta.astro` | Emergency strip, mobile sticky Call/Text/Quote, CTA group | Chloe / Rachel |
| `src/components/ServiceCards.astro`, `TrustBlock.astro`, `ReviewsBlock.astro` | Conversion blocks | Chloe / Maya |
| `src/components/FaqSection.astro`, `Breadcrumbs.astro`, `JsonLd.astro`, `LocalBusinessSchema.astro` | FAQPage / BreadcrumbList / JSON-LD | Elena / Maya |
| `src/components/LeadForm.astro`, `NapBlock.astro` | Forms; canonical NAP display | Rachel / Hannah |
| `src/pages/hvac-[slug].astro` | 33 area pages (Chicago hub + 32 neighborhoods/suburbs) | Elena |
| `src/content/blog/*.md`, `src/content.config.ts`, `src/data/blog.ts` | Blog: 34 posts migrated from the live site at their **root URLs**, plus daily new posts | Maya / Elena |
| `src/components/BlogPost.astro`, `BlogIndex.astro`, `src/pages/blog/` | Post template (BlogPosting/FAQ schema, intent-aware CTAs), `/blog/` + category hubs | Maya / Elena / Rachel |
| `src/components/ServicePage.astro` | Service + category page template (routed by `src/pages/[slug].astro`, which also routes posts) | Maya / Elena |
| `src/pages/about/`, `contact/`, `reviews/`, `financing/`, `faq/` | Company pages at the live URLs (migration parity) | Chloe / Maya |
| `marketing/content/` | Editorial calendar, post template, GBP post drafts | Maya / Hannah |
| `src/pages/chicago-hvac-homeowner-guide/` | Link-worthy homeowner resource | Natalie / Maya |
| `src/pages/emergency-hvac/`, `free-estimate/`, `maintenance-plan/`, `service-areas/`, `thank-you/` | Funnel and hub pages | Rachel / Elena |
| `scripts/site-metrics.mjs` | KPI snapshot for reports | Sophia |
| `marketing/` | Audit, action plans, trackers, templates, `daily-reports/`, `team/` | All |

## Code rules
- **Never hard-code NAP.** Use `business.*`, `NapBlock`, `telHref()`, `smsHref()`. Grep for stray phone numbers before committing.
- Every `tel:`/`sms:`/booking link needs `data-track` and `data-placement`. New events must be added to `TrackEvent` and `marketing/lead-gen/tracking-plan.md`.
- Form field changes go in `src/data/leadForms.ts`, `src/lib/leadScore.ts` and `marketing/lead-gen/qualification-fields.md` together.
- `business.name` (`CHICAGO AIRCARE PRO`) is for NAP and schema; `business.displayName` (`Chicago Aircare Pro`) is for headings and copy.
- Service-area business: never publish a street address (`showAddress: false`).
- FAQ answers in schema must match the visible text (use `FaqSection`).
- Accessibility: labelled fields, 44px+ tap targets, visible focus, no horizontal scroll at 360px.

## Business profile (NAP)
> Canonical copy in code: `src/data/business.ts`. Formatting rules: `marketing/citations/nap-standard.md`.

| Field | Value |
|---|---|
| NAP name (GBP) | **CHICAGO AIRCARE PRO** (copy/headings: "Chicago Aircare Pro") |
| Legal name | **CHICAGO AIRCARE PRO** (legal rebrand from Shad Heating and Cooling LLC approved); founder Navid, NATE-certified |
| Address | Service-area business: **Chicago, IL**, street hidden (TODO(owner): private record of the GBP verification address) |
| Phone | **(773) 644-8227** · `tel:+17736448227` (calls and texts) |
| Email | info@aircareprohvac.com |
| Website | https://aircareprohvac.com |
| Booking | Housecall Pro (`business.bookingUrl`); public profile still shows the former name "Shad Heating and Cooling" → rename (Hannah Carter) |
| Hours | 24/7, every day, nights and holidays |
| License | City of Chicago License #3065598 |
| Credentials | NATE-certified techs · EPA 608 · BBB accredited · Comfortmaker dealer |
| Brands serviced | Carrier, Lennox, Trane, Goodman, Rheem, York, Comfortmaker (installs Comfortmaker) |
| Offers | Free estimates on new systems · financing through **Optimus** (subject to credit approval) · **Comfort Club** maintenance plan (pricing TODO) · utility rebate help |
| Positioning | "One crew for both seasons." Diagnosis first, options with prices before any work, repair what can be repaired; Chicago two-flat, greystone and bungalow know-how |

### Service areas (Chicago hub + 32 neighborhoods & suburbs)
- **Chicago, North Side:** Lincoln Park, Lakeview, Old Town & Gold Coast, Lincoln Square, North Center, Ravenswood, Uptown, Andersonville & Edgewater, Rogers Park, West Ridge
- **Chicago, Northwest Side:** Logan Square, Avondale, Irving Park, Albany Park, Portage Park, Jefferson Park, Norwood Park, Edison Park
- **Chicago, West Side:** Bucktown, Wicker Park, Humboldt Park, Ukrainian Village, West Town, Austin
- **North suburbs:** Evanston, Skokie, Wilmette, Highland Park
- **Northwest & west suburbs:** Des Plaines, Arlington Heights, Schaumburg, Naperville

### Services (20)
- **Heating:** Furnace repair, installation and tune-up · Boiler repair and installation (hot-water and steam) · Heat pump repair and installation · Thermostats & zoning
- **Cooling:** AC repair, installation and tune-up · Mini-split installation and repair · Refrigerant leak repair
- **Air quality:** Whole-home humidifiers and dehumidifiers · Air purifiers · UV air sanitizers · Ductwork repair · Carbon monoxide safety

## Citation profiles
> Plan: `marketing/citations-tracker.md`. Rows: `marketing/citations/citation-tracker.csv`.

| Platform | Status | URL (→ `sameAs`) |
|---|---|---|
| Google Business Profile | **Renamed to CHICAGO AIRCARE PRO (live 2026-11-20)** | https://www.google.com/maps?cid=18088581127472759753 |
| Yelp | Existing · **name update pending** | TODO(owner) after rename |
| BBB | Existing, accredited · **name update pending** | TODO(owner) after rename |
| Facebook | Existing (found in live-site schema) | https://www.facebook.com/Aircareprohvac/ |
| Next: Bing Places, Apple Business Connect, Nextdoor, Comfortmaker locator, Angi/HomeAdvisor, Thumbtack, Houzz, aggregators, Andersonville/Edgewater chambers | **Blocked until Yelp and BBB renames are live** (GBP done) | |

Known NAP issues: duplicate LocalBusiness schema on the live site (unformatted phone, malformed hours); Housecall Pro public name "Shad Heating and Cooling"; name casing.

## Outreach targets
> Plan: `marketing/backlink-outreach.md`. Pipeline: `marketing/backlinks/opportunities-tracker.csv`.

- **Quick wins:** Comfortmaker dealer locator, BBB website field, Housecall Pro profile, GBP/Yelp/Facebook website fields
- **Chambers:** Andersonville, Edgewater, Lincoln Square Ravenswood, Northcenter, Lakeview, Logan Square, Evanston, Skokie, Wilmette, Arlington Heights, Des Plaines, Schaumburg, Naperville
- **Trade/utility:** PHCC of Illinois, ACCA, ComEd / Peoples Gas / North Shore Gas / Nicor Gas contractor lists
- **Press:** Block Club Chicago, Evanston RoundTable, Daily Herald, Naperville Sun, Patch (cold-snap, heat-wave and CO pitches)
- **Assets:** Chicago rebate guide, Chicago heat ordinance guide, two-flat boiler guide, extreme-weather checklist
- **Monthly target:** TODO(owner), suggested 3–5 relevant referring domains

## Lead capture goals
> Plan: `marketing/lead-gen-funnels.md`. Tracking: `marketing/lead-gen/tracking-plan.md`. Values in code: `src/data/leadForms.ts`.

| Funnel | Monthly target | Conversion value | Response SLA |
|---|---|---|---|
| Emergency dispatch (calls + forms) | TODO | $300 (placeholder) | TODO min |
| Fast quote (4-field) | TODO | $200 (placeholder) | TODO |
| Free estimate | TODO | $500 (placeholder) | TODO hrs |
| Comfort Club signups | TODO | $150 (placeholder) | TODO |

- **Lead destination:** **Housecall Pro booking link** (owner decision 2026-11-19). On-page forms are off (`leadCapture: 'housecall-pro'`).
- **Analytics:** GTM `GTM-K3PBQCR9` (installed on the live site) → GA4 `G-J25SG73ES5` (Google tag inside GTM, enhanced measurement on; verified 2026-11-19). Reporting: `ga4/latest.md` on the `seo-data` branch (free service account). Custom click events → GA4: owner step in GTM, see `marketing/lead-gen/tracking-plan.md`
- **Built in this repo (Sprint 1):** forms on 60 pages, tap-to-text on every page, tracked booking clicks, lead scoring, Comfort Club signup. **Still open:** Comfort Club pricing, CRM endpoint. Google review link live (`business.googleReviewUrl`, `/review/` page, QR in `marketing/reviews/`)
- **Financing partner:** Optimus (owner-confirmed). **Call tracking / baseline leads:** TODO
