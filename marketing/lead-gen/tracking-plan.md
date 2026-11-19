# Conversion tracking plan

All events go to `window.dataLayer` via `src/lib/tracking.ts`. GTM (`PUBLIC_GTM_ID`, live container `GTM-K3PBQCR9`) forwards them to GA4, Google Ads, Meta, etc.

| Event | Fired when | Params | GA4 key event | Google Ads conversion (value) |
|---|---|---|---|---|
| `lead_emergency` | Emergency form submitted OK | funnel, placement, value, currency | ✔ | Emergency lead ($300 TODO) |
| `lead_quote` | Quote form submitted OK | funnel, placement, value, currency | ✔ | Estimate request ($500 TODO) |
| `lead_maintenance` | Maintenance form submitted OK | funnel, placement, value, currency | ✔ | Tune-up signup ($150 TODO) |
| `click_to_call` | Any `tel:` link with `data-track` clicked | placement | ✔ | Website call click (secondary) |
| `click_to_sms` | Any `sms:` link with `data-track` clicked | placement | ✔ | (secondary) |
| `click_book_online` | Housecall Pro "Book online" link clicked | placement | ✔ | Booking click (secondary); primary = HCP booking webhook |
| `form_start` | First focus inside a lead form | funnel, placement | ✗ | — |
| `form_error` | Validation fails or endpoint errors | funnel, placement, reason | ✗ | — |

Every event also carries `page_path`.

## GTM setup checklist
- [ ] Custom Event triggers for each event name above
- [ ] Data Layer Variables: `funnel`, `placement`, `value`, `currency`
- [ ] GA4 Event tags, and mark `lead_*` and `click_to_call` as key events
- [ ] Google Ads Conversion tags using `value` / `currency`; enable Enhanced Conversions for leads
- [ ] Google Ads call conversions (calls from ads plus website call tracking via Google forwarding number)
- [ ] Call tracking (CallRail etc.): dynamic number insertion via JS only; canonical number stays in HTML and schema
- [ ] Housecall Pro: send completed online bookings back as a conversion (HCP webhook → Zapier → GA4 Measurement Protocol / Ads offline import), or set up cross-domain tracking if HCP supports a GTM container
- [ ] Offline conversion import from CRM using `gclid` (closes the loop on booked/sold jobs)
- [ ] Consent mode v2 configured if required for your audience

## QA
1. `npm run build && npm run preview`
2. GTM Preview → submit each funnel → confirm event, params and the tag fired.
3. Confirm the CRM/webhook received the payload, including attribution fields.
