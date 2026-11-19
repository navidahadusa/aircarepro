# aircareprohvac.com audit (2026-11-19)

Crawled from the live site's sitemaps (Rank Math): **105 URLs**, made up of 35 blog posts, 33 area pages, 23 service and category pages, and company pages. Platform: WordPress + Rank Math. Tag manager: `GTM-K3PBQCR9`. Booking: Housecall Pro.

## What was extracted

| Item | Value on the live site |
|---|---|
| Brand | "Chicago Aircare Pro" in copy and titles; "CHICAGO AIRCARE PRO" in Rank Math schema |
| Legal entity | Shad Heating and Cooling LLC (registered in Illinois, 2026); founder Navid, NATE-certified |
| Phone | (773) 644-8227 · `tel:+17736448227` |
| Email | info@aircareprohvac.com |
| Address | **None published.** Schema gives Chicago, IL only, with geo 41.98881, -87.6606 (Andersonville/Edgewater area) → service-area business |
| Hours | 24/7, every day ("Answering every day, nights and holidays") |
| Credentials | NATE certified · EPA 608 · BBB accredited · City of Chicago License #3065598 · Comfortmaker dealer |
| Brands serviced | Carrier, Lennox, Trane, Goodman, Rheem, York, Comfortmaker (installs Comfortmaker) |
| Positioning | "One crew for both seasons." Diagnosis first, options with prices before work, repair what can be repaired, clean work; know-how with Chicago two-flats, greystones and bungalows |
| Services (20) | **Heating:** furnace repair, installation and tune-up; boiler repair and installation (hot-water and steam); heat pump repair and installation; thermostats and zoning. **Cooling:** AC repair, installation and tune-up; mini-split installation and repair; refrigerant leak repair. **Air quality:** humidifiers, dehumidifiers, air purifiers, UV sanitizers, ductwork repair, CO safety |
| Offers | Free estimates on new systems · financing (subject to credit approval, lender not named) · **Comfort Club** plan (2 tune-ups, priority, repair discounts; pricing "call") · utility rebate guidance (ComEd, Peoples Gas, Nicor Gas) |
| Service areas (33) | **North Side:** Lincoln Park, Lakeview, Old Town & Gold Coast, Lincoln Square, North Center, Ravenswood, Uptown, Andersonville & Edgewater, Rogers Park, West Ridge. **Northwest Side:** Logan Square, Avondale, Irving Park, Albany Park, Portage Park, Jefferson Park, Norwood Park, Edison Park. **West Side:** Bucktown, Wicker Park, Humboldt Park, Ukrainian Village, West Town, Austin. **North suburbs:** Evanston, Skokie, Wilmette, Highland Park. **NW and west suburbs:** Des Plaines, Arlington Heights, Schaumburg, Naperville |
| Profiles linked | Facebook (in schema only). **No links to Google, Yelp or BBB anywhere on the site.** |

## Strengths
- Deep, well-structured content: area pages run about 850 words with sections on local housing stock, common issues, utilities and rebates, and FAQs, which is far better than typical "city swap" pages. 35 problem-focused blog posts (e.g. steam heat banging, R-454B, Chicago winter thermostat settings).
- Clear phone CTA everywhere, 24/7 messaging, gas/CO safety guidance.
- Strong trust signals in copy: license number, NATE, EPA 608, BBB.

## SEO issues
1. **Two competing LocalBusiness entities** on every page. Rank Math outputs `LocalBusiness/Organization` "CHICAGO AIRCARE PRO" with `telephone: "7736448227"` (not E.164), malformed `openingHours: "Mo,…,Sa 00:00-23.59"` and an uppercase email. A second `HVACBusiness` block says "Chicago Aircare Pro". Pick one entity with one `@id` and drop the other.
2. **`sameAs` is missing GBP, Yelp and BBB.** Only Facebook is listed. These are your three established profiles and the strongest entity signals.
3. **`Article` schema on the homepage, service pages and area pages**, plus a `Person` author pointing at the WordPress author archive (`/author/<username>/`). Service and area pages should be `WebPage` + `Service`. The author archive also exposes the WP login username; set a display name and noindex author archives.
4. **No `FAQPage` markup** on `/faq/` or on the FAQ sections of area and service pages. FAQ rich results are limited now, but the markup still helps AI and answer engines.
5. **No `aggregateRating` or reviews** shown; `/reviews/` has no embedded reviews and no profile links.
6. **Name casing is inconsistent**: "CHICAGO AIRCARE PRO" in schema vs "Chicago Aircare Pro" in copy. Make citations match GBP exactly.
7. **Booking runs under a different name**: the Housecall Pro booking URL and page say "Shad-Heating-and-Cooling". Rename the Housecall Pro public business name to match the brand.
8. **No South Side or other western/northwestern suburbs** (e.g. Oak Park, Park Ridge, Niles, Glenview, Morton Grove, Lincolnwood sit between existing areas). These are gaps if you want to expand.
9. Minor: 2 images on the homepage have no alt text; `privacy-policy-2` slug.

## Conversion and lead gaps
1. **No lead forms anywhere.** The only `<form>` is the ZIP/area checker. Every non-phone lead leaves for Housecall Pro.
2. **Off-site booking breaks attribution.** GA4/Ads can't see bookings completed on housecallpro.com unless cross-domain tracking is set up. Clicks on "Book online" aren't tracked as an event either.
3. **"Call or text 24/7" but no `sms:` link.** Texting is promised and not one tap away.
4. **The free estimate is promised, but there's no estimate request page or form.**
5. **Comfort Club has no pricing and no signup.** The CTA is "call to join".
6. **Financing has no lender name, prequalification link or monthly-payment example.**
7. **The reviews page has no reviews, no stars, and no "Leave a review" link** (it says a link is sent after the appointment).
8. **No sticky mobile call bar or emergency banner** (verify on device; nothing in the markup suggests one).

## What this repo now does about it
See `citations-tracker.md`, `backlink-outreach.md` and `lead-gen-funnels.md` in this folder.
