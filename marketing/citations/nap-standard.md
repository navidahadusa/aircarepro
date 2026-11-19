# Canonical NAP standard

> Every citation, profile, page and schema block must match this **character for character**.
> The code copy is `src/data/business.ts`. If one changes, change both in the same commit.

| Field | Canonical value | Notes |
|---|---|---|
| Business name | `CHICAGO AIRCARE PRO` | Exactly as on Google Business Profile. No keywords or city suffixes. Title case "Chicago Aircare Pro" is OK in body copy, never in citations. |
| Legal name | `CHICAGO AIRCARE PRO` | Legal rebrand from `Shad Heating and Cooling LLC` approved 2026-11-19. Former name is retired. |
| Street / ZIP | *(hidden: service-area business)* | TODO(owner): record privately for directories that require verification. Never publish. |
| City, State | `Chicago, IL` | |
| Phone (display) | `(773) 644-8227` | Never use a tracking number in citations. |
| Phone (E.164) | `+17736448227` | `tel:` links and schema. |
| Website | `https://aircareprohvac.com` | No `www`, https. Add UTMs only on GBP (`utm_source=google&utm_medium=organic&utm_campaign=gbp`). |
| Email | `info@aircareprohvac.com` | Lowercase. |
| Hours | Open 24 hours, 7 days | |
| License | City of Chicago License #3065598 | |
| Booking | Housecall Pro link in `business.bookingUrl` | Rename the HCP public profile to the brand. |

## Categories
- GBP primary: `HVAC contractor`
- Secondary (only if accurate): `Air conditioning repair service`, `Furnace repair service`, `Heating contractor`, `Air duct cleaning service` (only if offered)

## Standard descriptions (from live-site copy)
- **Short (≤160):** Chicago heating & cooling: furnace, boiler & AC repair, installation and maintenance. NATE-certified, 24/7 emergency service. (773) 644-8227
- **Long (≤750):** CHICAGO AIRCARE PRO is a residential heating, cooling and indoor air quality company serving Chicago's North, Northwest and West Sides and nearby suburbs including Evanston, Skokie, Wilmette, Highland Park, Des Plaines, Arlington Heights, Schaumburg and Naperville. We repair, replace and maintain gas furnaces, hot-water and steam boilers, central air conditioners, heat pumps and ductless mini-splits. Our technicians are NATE and EPA 608 certified, we're a Comfortmaker dealer, and we answer 24/7. Every visit follows the same rule: find the actual cause, explain the options with prices, and repair only with your approval. City of Chicago License #3065598.

## Known variants to hunt down
| Variant | Where seen | Fix |
|---|---|---|
| `Shad Heating and Cooling` / `… LLC` (former legal name) | Housecall Pro booking page; possibly GBP, Yelp, BBB | Rename (pending) → see `../citations-tracker.md` |
| `Chicago Aircare Pro` vs `CHICAGO AIRCARE PRO` | Live-site copy vs schema | Use GBP casing in NAP |
| `7736448227` (unformatted) | Live-site Rank Math schema | Use `+17736448227` in schema |

## Call tracking rule
Use dynamic number insertion **only via JavaScript** on the site. The canonical number stays in HTML, schema and all citations.
