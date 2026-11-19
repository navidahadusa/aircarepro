# Canonical NAP standard

> Every citation, profile, page and schema block must match this **character for character**.
> The code copy is `src/data/business.ts`. If one changes, change both in the same commit.

| Field | Canonical value | Notes |
|---|---|---|
| Business name | `AirCare Pro` TODO(business-details) | Exactly as on Google Business Profile and legal/DBA. No keywords or city names added. |
| Street | `123 Main St` TODO | USPS abbreviations (`St`, `Ave`, `Blvd`, `Ste`). |
| Suite | — | Use `Ste 100`, never `#100` or `Suite 100`. |
| City, State ZIP | `Anytown, ST 00000` TODO | 2-letter state; 5-digit ZIP. |
| Phone (display) | `(555) 555-0100` TODO | Local number, not a tracking number. |
| Phone (E.164) | `+15555550100` TODO | Used in `tel:` links and schema. |
| Website | `https://www.example.com/` TODO | Same protocol and `www` choice everywhere. |
| Email | `service@example.com` TODO | |
| Hours | Mon–Fri 7:00–19:00, Sat 8:00–16:00; 24/7 emergency TODO | Must match GBP. |
| Address visible? | Yes TODO | If a service-area business hides its address on GBP, set `showAddress: false` and omit it everywhere. |

## Primary categories
- GBP primary: `HVAC contractor` TODO
- Secondary: `Air conditioning repair service`, `Furnace repair service`, `Heating contractor` TODO

## Standard descriptions (reuse across directories)
- **Short (≤ 160 chars):** TODO
- **Long (≤ 750 chars):** TODO

## Known old or incorrect NAP variants to hunt down
| Variant | Where seen | Fix status |
|---|---|---|
| _e.g. old phone (555) 555-0199_ | | |

## Call tracking rule
Use dynamic number insertion **only via JavaScript** on the site. The canonical number stays in HTML, schema and all citations.
