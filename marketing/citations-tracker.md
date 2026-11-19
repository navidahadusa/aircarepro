# Citations tracker: CHICAGO AIRCARE PRO

Owner agent: `local-citations-specialist` · Row-level data: `citations/citation-tracker.csv` · Rules: `citations/nap-standard.md`

## Canonical NAP
```
CHICAGO AIRCARE PRO
Chicago, IL   (service-area business, street address hidden)
(773) 644-8227
https://aircareprohvac.com
```
Legal entity: Shad Heating and Cooling LLC · City of Chicago License #3065598 · info@aircareprohvac.com · Open 24/7

## Existing profiles: optimize and audit first

| Profile | Status | Audit checklist | Profile URL (→ `sameAs`) |
|---|---|---|---|
| **Google Business Profile** | Live (owner-confirmed) | ☐ Name exactly `CHICAGO AIRCARE PRO` (no keywords) ☐ Primary category *HVAC contractor*; secondary: *Air conditioning repair service, Furnace repair service, Heating contractor, Boiler supplier?* (only if accurate) ☐ Address hidden; service areas = the 33 areas (max 20; prioritize by revenue) ☐ Hours 24/7 ☐ Phone (773) 644-8227 ☐ Website `https://aircareprohvac.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp` ☐ Booking link = Housecall Pro ☐ Services list mirrors the 20 site services ☐ Products: Comfort Club, Comfortmaker systems ☐ 10+ real job photos ☐ Weekly posts ☐ Q&A seeded with real FAQs ☐ Review link set up in Housecall Pro follow-ups | TODO(owner) |
| **Yelp** | Live (owner-confirmed) | ☐ Claimed at biz.yelp.com ☐ Name/phone/website match ☐ Service-area mode, address hidden ☐ Categories: Heating & Air Conditioning/HVAC ☐ Hours 24/7 ☐ Photos ☐ "Request a Quote" enabled and answered fast ☐ Don't solicit reviews (Yelp policy) | TODO(owner) |
| **BBB** | Live, accredited (site claims "BBB accredited") | ☐ Business name shows brand + legal entity correctly (DBA) ☐ Phone/website/license match ☐ Accreditation seal on the site links to the BBB profile ☐ Respond to any complaints ☐ Add service areas | TODO(owner) |
| Facebook | Live (in site schema) | ☐ Page name, phone, website, hours match ☐ "Call now" button ☐ Service area set | https://www.facebook.com/Aircareprohvac/ |

**Site fixes these profiles need:** add all four URLs to `sameAs` (in `src/data/business.ts` for this repo, and in Rank Math → Local SEO on the live WordPress site), link them from `/reviews/` and the footer, and embed the BBB seal.

## Next priority citations
| # | Directory | Why |
|---|---|---|
| 1 | Bing Places | Imports from GBP; feeds Bing, ChatGPT search and Copilot |
| 2 | Apple Business Connect | Apple Maps/Siri, iPhone-heavy North Side market |
| 3 | Nextdoor Business | Neighborhood referrals; strong in Edgewater, Lincoln Square, Evanston |
| 4 | Comfortmaker dealer locator | Confirmed dealer: high-trust, relevant link |
| 5 | Angi / HomeAdvisor | Major home-services directory |
| 6 | Thumbtack | Lead source + citation |
| 7 | Houzz | Install and remodel audience |
| 8 | Data Axle, Neustar Localeze, Foursquare | Aggregators that feed hundreds of downstream sites |
| 9 | Andersonville or Edgewater Chamber of Commerce | Closest to the business's geo point; local link + citation |
| 10 | ComEd, Peoples Gas / North Shore Gas, Nicor Gas contractor (trade ally) lists | Rebate shoppers; high-intent referral traffic |

## Clean-up items found on the live site
- [ ] Merge the two LocalBusiness schema blocks into one (`CHICAGO AIRCARE PRO`, `+17736448227`, valid hours)
- [ ] Rename the Housecall Pro public profile from "Shad Heating and Cooling" to the brand (keep the LLC as legal name)
- [ ] Decide on casing: `CHICAGO AIRCARE PRO` (GBP) everywhere NAP is printed
- [ ] Search for duplicate or old listings under "Shad Heating and Cooling" and merge or redirect them
