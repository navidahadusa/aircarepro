---
name: lead-gen-landing
description: Build a conversion landing page or improve CTAs for CHICAGO AIRCARE PRO: Google Ads / Local Services Ads landing pages, seasonal offers, emergency dispatch pages, Comfort Club or free-estimate funnels. Use for any lead generation, call/text/booking CTA, or conversion-tracking change. Owner: Rachel Morgan (Lead Gen + Paid Ads), design by Chloe Vance.
---

# Lead-gen landing page (Rachel Morgan + Chloe Vance)

## Owner decisions (don't change without the owner)
- **All leads go to Housecall Pro** (`business.bookingUrl`). `business.leadCapture = 'housecall-pro'`, so every `LeadForm` renders `BookingPanel`. Don't re-enable forms.
- **Emergencies lead with Call** (24/7, `telHref()`), then Text (`smsHref()`), then Book.
- **No ad spend, launch or budget change** without the owner's explicit OK in a live conversation. Plan: `marketing/ads/ads-plan.md`.

## Page recipe
1. **One goal per page**: emergency → Call; planned (install, tune-up, estimate) → Book online.
2. **Above the fold** (360px wide too): headline that matches the ad or search query, one-line proof (City of Chicago License #3065598, NATE-certified, EPA 608, BBB accredited, 24/7, financing through Optimus subject to credit approval: only claims in `business.ts`/`CLAUDE.md`), primary button, secondary button, real job photo from `src/data/photos.ts`.
3. **Body**: what happens when you call (diagnosis first, options and prices before any work), what we fix, service area (link `/service-areas/`), FAQ via `FaqSection`, final CTA band. Mobile sticky bar is automatic (`MobileCtaBar`).
4. **Ads landing pages**: create under `src/pages/<slug>/index.astro` with `BaseLayout`; add `noindex` when the page duplicates an organic page (avoid cannibalization), and exclude it from the sitemap filter in `astro.config.mjs`.
5. **Never claim** prices, response times, "best/#1", ratings, review counts or guarantees the owner hasn't confirmed.

## Tracking (required)
- Every `tel:`/`sms:`/booking/review link: `data-track="<event>"` + `data-placement="<page>_<spot>"`. Events must exist in `TrackEvent` (`src/lib/tracking.ts`) and in `marketing/lead-gen/tracking-plan.md`. Add new events to both.
- UTM/gclid capture is automatic (`captureAttribution()`); keep GTM `GTM-K3PBQCR9` deferred loading as is.
- Form/field changes (only if the owner re-enables forms): `src/data/leadForms.ts` + `src/lib/leadScore.ts` + `marketing/lead-gen/qualification-fields.md` together.

## Verify
check + build 0 errors · `site-metrics` (tel/sms/booking on every page) · browser test: click each CTA and confirm the `dataLayer` event and placement · Lighthouse mobile ≥ 95 performance on the page · screenshots desktop + mobile. Report under Rachel Morgan; propose one A/B test (hypothesis, metric, minimum sample).
