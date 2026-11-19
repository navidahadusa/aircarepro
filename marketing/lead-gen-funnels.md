# Lead-gen funnels and improvements: CHICAGO AIRCARE PRO

Owner: **Rachel Morgan, Lead Generation Architect** (`lead-gen-architect`) · Reports to Sophia Reynolds · Specs: `lead-gen/funnels.md` · Fields and scoring: `lead-gen/qualification-fields.md` · Tracking: `lead-gen/tracking-plan.md`
Based on the live-site audit in `site-audit-2026-11-19.md`.

## Owner decision (2026-11-19): all leads go to Housecall Pro
Every lead CTA opens the Housecall Pro booking link (`business.bookingUrl`); `business.leadCapture = 'housecall-pro'` renders `BookingPanel` in place of on-page forms. Emergencies lead with **Call**, and planned work with **Book online**. All clicks are tracked (`click_book_online`, `click_to_call`, `click_to_sms`). Bookings completed inside Housecall Pro are not visible to GA4 until an HCP → GA4/Ads conversion import is set up (see `lead-gen/tracking-plan.md`). The form code stays in the repo for later.

## Current state on aircareprohvac.com
- Lead paths: **phone** (`tel:+17736448227`) and **"Book online"** (off-site Housecall Pro). Email for non-urgent questions.
- No on-site forms, no `sms:` link, no estimate request, no Comfort Club signup, no review links.
- GTM is installed (`GTM-K3PBQCR9`), but booking clicks and bookings aren't tracked.

## Improvements (priority order)
| # | Improvement | Funnel | Built in this repo? |
|---|---|---|---|
| 1 | Sticky **Call / Text / Request dispatch** bar (bottom of screen on mobile) | Emergency | ✅ `EmergencyBanner.astro` |
| 2 | Add `sms:` links wherever "Call or text 24/7" appears | All | ✅ `CallSmsCta.astro` |
| 3 | Track **Book online** clicks (`click_book_online`) + set up Housecall Pro cross-domain/booking webhook → GA4/Ads conversion | Booking | ✅ click event; ☐ HCP webhook (owner) |
| 4 | **Emergency dispatch form** on `/emergency-hvac/` for people who can't talk (boiler/radiator option, brand/error code field) | Emergency | ✅ `LeadForm funnel="emergency"` |
| 5 | **Free estimate page and form** (`/free-estimate/`): project, system age, property type (two-flat/condo), timeline, financing + rebate interest | Quote | ✅ `LeadForm funnel="quote"` |
| 6 | **Comfort Club signup form** with heating type (furnace/hot-water/steam boiler/heat pump) | Maintenance | ✅ `LeadForm funnel="maintenance"` |
| 7 | **Fast 4-field quote** in the hero of the homepage, every area page and the category hubs | Quick | ✅ Sprint 1 (`funnel="quick"`) |
| 7b | Mobile sticky **Call 24/7 / Text / Quote** bar | All | ✅ Sprint 1 (`MobileCtaBar.astro`) |
| 7c | **Lead scoring** (hot/warm/nurture) in every payload and event | All | ✅ Sprint 1 (`leadScore.ts`) |
| 7d | Service pages use the funnel that matches intent (repair → emergency, install → quote, tune-up → maintenance) | All | ✅ Sprint 1 |
| 8 | Publish Comfort Club pricing (or "from $X/mo") | Maintenance | ☐ owner decision |
| 9 | Name the financing lender, add a prequal link and a monthly payment example | Quote | ☐ owner |
| 10 | Reviews page: embed real Google/BBB reviews, star rating, "Leave a review" links | All (trust) | ☐ needs profile URLs |
| 11 | Send form leads to Housecall Pro (or Zapier → HCP) with UTM/gclid fields | All | ☐ set `PUBLIC_LEAD_ENDPOINT` |
| 12 | Seasonal campaigns: fall furnace/boiler tune-up (Sep–Nov), spring AC tune-up (Mar–May), first-freeze emergency push | Maintenance / Emergency | ☐ |

## Conversion events (GTM `GTM-K3PBQCR9`)
`lead_emergency` · `lead_quick` · `lead_quote` · `lead_maintenance` · `click_to_call` · `click_to_sms` · `click_book_online` · `form_start` · `form_error`. See `lead-gen/tracking-plan.md`.

## Goals (fill in)
| Funnel | Monthly target | Value per lead | Response SLA |
|---|---|---|---|
| Emergency (calls + forms) | TODO | $300 placeholder | TODO |
| Fast quote | TODO | $200 placeholder | TODO |
| Free estimate | TODO | $500 placeholder | TODO |
| Comfort Club signups | TODO | $150 placeholder | TODO |
