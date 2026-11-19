# Local citation checklist (prioritized)

Work top-down. Fix duplicates and mismatches on Tier 1 before adding new listings. Log every action in `citation-tracker.csv`.

## Tier 1: core platforms (do first)
- [ ] Google Business Profile: categories, service areas, hours, photos, products/services, booking link
- [ ] Bing Places for Business (can import from GBP)
- [ ] Apple Business Connect
- [ ] Facebook Page
- [ ] Yelp for Business
- [ ] Better Business Bureau (BBB)
- [ ] Nextdoor Business Page

## Tier 2: data aggregators (feed hundreds of downstream sites)
- [ ] Data Axle (formerly Infogroup)
- [ ] Neustar Localeze
- [ ] Foursquare

## Tier 3: home services and HVAC
- [ ] Angi
- [ ] HomeAdvisor
- [ ] Thumbtack
- [ ] Houzz
- [ ] Porch
- [ ] Networx
- [ ] Manufacturer dealer locator (only if authorized: Carrier / Trane / Lennox / Rheem / Goodman / Daikin…) TODO
- [ ] ACCA contractor directory (if member)
- [ ] Utility rebate "participating contractor" list TODO(utility name)
- [ ] ENERGY STAR / state energy-office contractor lists (if eligible)

## Tier 4: local
- [ ] Chamber of Commerce: TODO(city)
- [ ] City / county business directory
- [ ] Local newspaper business directory
- [ ] Neighborhood / HOA vendor lists

## General directories (lower priority)
- [ ] Yellow Pages (YP.com)
- [ ] Manta
- [ ] MapQuest (via aggregators)
- [ ] Hotfrog
- [ ] Brownbook

## After each listing goes live
1. Verify NAP is an exact match → update `nap_match` in the tracker.
2. If it's a claimed, official profile, add the URL to `sameAs` in `src/data/business.ts`.
3. Add photos, services, and description from `nap-standard.md`.
