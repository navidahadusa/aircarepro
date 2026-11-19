# AirCare Pro: HVAC website & AI marketing agency

Astro static site for a local HVAC business, plus a `.claude/agents/` marketing team that covers local citations, backlinks and lead generation.
Everything marked `TODO(business-details)` is a placeholder; **never invent real-world business data** (NAP, licenses, prices, response times, reviews).

## Commands
- `npm run dev`: local dev server (http://localhost:4321)
- `npm run build`: static build to `dist/` (also generates the sitemap)
- `npm run check`: Astro and TypeScript diagnostics. Run before committing.
- Env: copy `.env.example` → `.env`. `PUBLIC_LEAD_ENDPOINT` (form webhook/CRM), `PUBLIC_GTM_ID`.

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
| `src/components/CallSmsCta.astro` | Inline call + text buttons; requires `placement` |
| `src/components/NapBlock.astro` | Canonical NAP display |
| `src/pages/service-areas/[slug].astro` | City landing pages generated from `business.serviceAreas` |
| `marketing/` | Playbooks, trackers (CSV), templates. See `marketing/README.md` |

## Code rules
- **Never hard-code NAP.** Use `business.*`, `NapBlock`, `telHref()`, `smsHref()`. `grep` for stray phone numbers before committing.
- Every `tel:`/`sms:` link needs `data-track` and `data-placement`. New event names must be added to `TrackEvent` and `marketing/lead-gen/tracking-plan.md`.
- Form field changes go in `src/data/leadForms.ts` and `marketing/lead-gen/qualification-fields.md` together.
- Add to `business.sameAs` only claimed, live, official profiles.
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
| Brand / GBP name | AirCare Pro TODO(business-details) |
| Legal name / DBA | TODO |
| Address | 123 Main St, Anytown, ST 00000 TODO (shown publicly? TODO) |
| Phone | (555) 555-0100 / +15555550100 TODO |
| SMS number | same as phone TODO |
| Email | service@example.com TODO |
| Website | https://www.example.com TODO |
| Hours | Mon–Fri 7–7, Sat 8–4 TODO |
| 24/7 emergency | Yes TODO(confirm) |
| License # | TODO |
| Founded | TODO |
| Brands serviced / dealer status | TODO |

### Service areas
| Area | Type | Primary |
|---|---|---|
| Anytown TODO | City | ✔ |

### Services
AC Repair · AC Installation · Furnace Repair · Heat Pump Service · HVAC Maintenance · Indoor Air Quality (TODO: confirm)

## Citation profiles
> Live status: `marketing/citations/citation-tracker.csv`. Checklist: `marketing/citations/directory-checklist.md`.

| Platform | Status | URL (→ `sameAs` when live) |
|---|---|---|
| Google Business Profile | TODO | |
| Bing Places | TODO | |
| Apple Business Connect | TODO | |
| Facebook | TODO | |
| Yelp | TODO | |
| BBB | TODO | |
| Nextdoor | TODO | |
| Angi / HomeAdvisor | TODO | |

Known old or incorrect NAP variants to clean up: TODO

## Outreach targets
> Pipeline: `marketing/backlinks/opportunities-tracker.csv`. Templates: `marketing/backlinks/outreach-templates.md`. Assets: `marketing/backlinks/linkable-assets.md`.

- **Local sponsorships:** TODO (youth leagues, school boosters, charity events)
- **Community/civic:** TODO (Chamber of Commerce, neighborhood associations)
- **Trade/industry:** TODO (state HVAC association, ACCA, utility rebate lists, manufacturer locators)
- **Suppliers/partners:** TODO (distributors, builders, realtors, property managers)
- **Local press/blogs:** TODO
- **Monthly target:** TODO new referring domains/month

## Lead capture goals
> Specs: `marketing/lead-gen/funnels.md`. Tracking: `marketing/lead-gen/tracking-plan.md`. Values in code: `src/data/leadForms.ts`.

| Funnel | Monthly target | Conversion value | Response SLA |
|---|---|---|---|
| Emergency dispatch (calls + forms) | TODO | $300 (placeholder) | TODO min |
| Quote / estimate | TODO | $500 (placeholder) | TODO hrs |
| Maintenance signups | TODO | $150 (placeholder) | TODO |

- **Lead destination (CRM/webhook):** TODO (e.g. ServiceTitan, Housecall Pro, Jobber, HubSpot, Zapier hook)
- **Call tracking provider:** TODO
- **Financing partner:** TODO
- **Current baseline:** TODO leads/month, TODO% booked
