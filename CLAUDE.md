# CHICAGO AIRCARE PRO: HVAC website & AI marketing agency

Astro static site for **CHICAGO AIRCARE PRO** (residential HVAC, Chicago + suburbs), plus a `.claude/agents/` marketing team that covers local citations, backlinks and lead generation.
The current production site is WordPress at https://aircareprohvac.com (audit: `marketing/site-audit-2026-11-19.md`). This Astro build mirrors its URL patterns (`/hvac-<area>/`, `/emergency-hvac/`, `/maintenance-plan/`) so a migration keeps rankings.
Items marked `TODO` need owner input; **never invent real-world business data** (NAP, licenses, prices, response times, reviews, profile URLs).

## Commands
- `npm run dev`: local dev server (http://localhost:4321)
- `npm run build`: static build to `dist/` (also generates the sitemap)
- `npm run check`: Astro and TypeScript diagnostics. Run before committing.
- Env: copy `.env.example` → `.env`. `PUBLIC_LEAD_ENDPOINT` (form webhook/CRM), `PUBLIC_GTM_ID` (production `GTM-K3PBQCR9`; leave empty in dev).

## Project map
| Path | Purpose |
|---|---|
| `src/data/business.ts` | **Single source of truth** for NAP, hours, service areas, `sameAs`, services |
| `src/data/leadForms.ts` | Lead funnel definitions (fields, qualification tags, conversion events/values) |
| `src/lib/schema.ts` | Builds `HVACBusiness`/`LocalBusiness` JSON-LD from `business.ts` |
| `src/lib/tracking.ts` | `track()` dataLayer events, UTM/click-ID attribution, `[data-track]` binding |
| `src/components/LocalBusinessSchema.astro` | JSON-LD (site-wide in layout; `area` prop for city pages) |
| `src/components/LeadForm.astro` | `funnel="emergency" \| "quote" \| "maintenance"` |
| `src/components/EmergencyBanner.astro` | Sticky click-to-call/text banner (bottom bar on mobile) |
| `src/components/CallSmsCta.astro` | Call + text + Housecall Pro booking buttons; requires `placement` |
| `src/components/NapBlock.astro` | Canonical NAP display |
| `src/pages/hvac-[slug].astro` | 34 area pages at `/hvac-<slug>/` generated from `business.serviceAreas` |
| `src/pages/service-areas/index.astro` | Area directory grouped by North/Northwest/West Side and suburbs |
| `marketing/` | Audit, action plans (`citations-tracker.md`, `backlink-outreach.md`, `lead-gen-funnels.md`), CSV trackers, templates |

## Code rules
- **Never hard-code NAP.** Use `business.*`, `NapBlock`, `telHref()`, `smsHref()`. `grep` for stray phone numbers before committing.
- Every `tel:`/`sms:` link needs `data-track` and `data-placement`. New event names must be added to `TrackEvent` and `marketing/lead-gen/tracking-plan.md`.
- Form field changes go in `src/data/leadForms.ts` and `marketing/lead-gen/qualification-fields.md` together.
- Add to `business.sameAs` only claimed, live, official profiles.
- `business.name` (`CHICAGO AIRCARE PRO`) is for NAP and schema; `business.displayName` (`Chicago Aircare Pro`) is for headings and copy.
- Service-area business: never publish a street address (`showAddress: false`).
- Accessibility: labelled fields, 44px+ tap targets, visible focus.

## AI marketing agency (`.claude/agents/`)
| Agent | Use for |
|---|---|
| `local-citations-specialist` | NAP standardization, directory checklist, citation tracker, `sameAs`/location schema |
| `backlink-linkbuilder` | Local and industry link prospects, outreach drafts, link-worthy assets/guides |
| `lead-gen-architect` | Lead funnels, qualification fields, CTAs, conversion tracking |

Agents prepare data, drafts and code. **Humans submit listings, send outreach and publish.**

---

## Business profile (NAP)
> Canonical copy in code: `src/data/business.ts`. Formatting rules: `marketing/citations/nap-standard.md`.

| Field | Value |
|---|---|
| NAP name (GBP) | **CHICAGO AIRCARE PRO** (copy/headings: "Chicago Aircare Pro") |
| Legal entity | Shad Heating and Cooling LLC (Illinois, 2026); founder Navid, NATE-certified |
| Address | Service-area business: **Chicago, IL**, street hidden (TODO(owner): private record of the GBP verification address) |
| Phone | **(773) 644-8227** · `tel:+17736448227` (calls and texts) |
| Email | info@aircareprohvac.com |
| Website | https://aircareprohvac.com |
| Booking | Housecall Pro (`business.bookingUrl`); public profile currently named "Shad Heating and Cooling" → rename |
| Hours | 24/7, every day, nights and holidays |
| License | City of Chicago License #3065598 |
| Credentials | NATE-certified techs · EPA 608 · BBB accredited · Comfortmaker dealer |
| Brands serviced | Carrier, Lennox, Trane, Goodman, Rheem, York, Comfortmaker (installs Comfortmaker) |
| Offers | Free estimates on new systems · financing (subject to credit approval; lender TODO) · **Comfort Club** maintenance plan (pricing TODO) · utility rebate help |
| Positioning | "One crew for both seasons." Diagnosis first, options with prices before any work, repair what can be repaired; Chicago two-flat, greystone and bungalow know-how |

### Service areas (33 + Chicago hub)
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
| Google Business Profile | **Existing**: optimize and audit | TODO(owner) |
| Yelp | **Existing**: optimize and audit | TODO(owner) |
| BBB | **Existing, accredited**: optimize and audit | TODO(owner) |
| Facebook | Existing (found in live-site schema) | https://www.facebook.com/Aircareprohvac/ |
| Next: Bing Places, Apple Business Connect, Nextdoor, Comfortmaker locator, Angi/HomeAdvisor, Thumbtack, Houzz, aggregators, Andersonville/Edgewater chambers | To do | |

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
| Free estimate | TODO | $500 (placeholder) | TODO hrs |
| Comfort Club signups | TODO | $150 (placeholder) | TODO |

- **Lead destination:** Housecall Pro (booking in use) → TODO: webhook/Zapier for form leads (`PUBLIC_LEAD_ENDPOINT`)
- **Analytics:** GTM `GTM-K3PBQCR9` (installed on the live site)
- **Biggest gaps on the live site:** no on-site forms, no `sms:` link, untracked off-site booking, no Comfort Club pricing or signup, no review links
- **Call tracking / financing partner / baseline leads:** TODO
