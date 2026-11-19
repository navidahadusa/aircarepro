# Lead qualification fields & scoring

Keep in sync with `src/data/leadForms.ts` (`qualifies:` tags). Each extra field costs conversions, so every field must change how the lead is handled.

| Field | Funnels | Qualifies | Values → score |
|---|---|---|---|
| `zip` | all | fit | In service area +2 · outside −5 (route to referral) |
| `issue` | emergency | urgency | No heat furnace or boiler (winter) / No cooling (summer) +3 · Leak / smell +3 · Other +1 |
| `equipment_brand` | emergency | — | Free text; lets the tech bring parts |
| `project` | quote | intent | Full system / furnace / boiler / AC replacement +3 · Heat pump / mini-split +2 · Not sure +1 |
| `system_age` | quote | value | 15+ yrs +3 · 11–15 +2 · 6–10 +1 · 0–5 0 |
| `property` | quote | fit | Own single-family +2 · Own two-flat/multi-unit +3 · Own condo +1 · Rent −1 (needs landlord approval) |
| `timeline` | quote | urgency | ASAP +3 · 2 wks +2 · 1–3 mo +1 · Researching 0 |
| `financing` | quote | value | Yes +1 (send financing info) |
| `rebates` | quote | value | Yes +1 (check ComEd / Peoples Gas / Nicor Gas rebates) |
| `heating_type` | maintenance | fit | Steam/hot-water boiler → boiler tune-up checklist |
| `systems` | maintenance | value | 3+ +2 · 2 +1 |

**Routing (suggested):** score ≥ 7 → call within 5 min · 4–6 → same day · ≤ 3 → nurture email.

## Payload sent to `PUBLIC_LEAD_ENDPOINT`
All form fields plus: `funnel`, `placement`, `page`, `submitted_at`, `landing_page`, `referrer`, `utm_*`, `gclid`, `gbraid`, `wbraid`, `fbclid`, `msclkid`.
