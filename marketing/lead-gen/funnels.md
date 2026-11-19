# Lead capture funnels

Implementation: `src/data/leadForms.ts` (fields, events, values) → `<LeadForm funnel="…">`.
CTAs: `<EmergencyBanner>` (site-wide, sticky; bottom bar on mobile) and `<CallSmsCta placement="…">`.

## 1. Emergency dispatch (`emergency`)
- **Intent:** urgent; no heat/AC, leak, burning smell.
- **Entry points:** `/emergency/`, emergency banner on every page, Google Ads call-only and emergency keywords, GBP call button.
- **Primary CTA:** call. The form is a fallback for people who can't talk right now.
- **Fields:** name, phone, ZIP, issue, details (optional), SMS consent (unchecked by default).
- **After submit:** `/thank-you/?funnel=emergency`. Dispatcher callback SLA: **TODO(minutes)**. Auto-SMS confirmation if consented.
- **KPIs:** calls + forms per day, answer rate, callback time, booked rate.

## 2. Quote / estimate (`quote`)
- **Intent:** replacement or new install; high value, longer consideration.
- **Entry points:** home hero, `/free-estimate/`, city pages, replacement service pages, financing page.
- **Fields:** name, phone, ZIP, email, project, system age, property type, timeline, financing interest.
- **After submit:** comfort advisor contact within **TODO(hours)**; email follow-up sequence (day 0 / 2 / 7).
- **KPIs:** lead → appointment → sold rate, avg. ticket, cost per lead.

## 3. Seasonal maintenance (`maintenance`)
- **Intent:** preventive; recurring revenue and membership plan.
- **Entry points:** `/maintenance-plan/`, seasonal email/SMS, GBP posts, spring (Mar–May) and fall (Sep–Nov) campaigns.
- **Fields:** name, phone, ZIP, email, season preference, number of systems, email consent.
- **After submit:** confirm the date; enroll in reminder list if consented.
- **KPIs:** signups per season, plan conversion, retention.

## CTA placement rules
- Phone number visible above the fold on every page (header or hero).
- One primary form per page; repeat the call CTA near the footer.
- Mobile: sticky bottom call/text bar (EmergencyBanner) and tap targets of at least 44px.

## A/B test backlog
| Test | Hypothesis | Metric | Status |
|---|---|---|---|
| Quote form: 9 fields vs. 5 fields | Fewer fields lifts submissions more than it drops lead quality | form CVR, booked rate | idea |
| Hero button "Call Now" vs. "Talk to a Tech Now" | Specific copy lifts calls | click_to_call / sessions | idea |
| Emergency banner on vs. off for non-emergency pages | Banner raises calls without hurting forms | calls, forms | idea |
