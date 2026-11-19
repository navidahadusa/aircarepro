# Local citation checklist (prioritized)

Work top-down. Fix duplicates and mismatches on Tier 1 before adding new listings. Log every action in `citation-tracker.csv`.

## Tier 1: core platforms (do first)
- [x] Google Business Profile: **existing**, run the audit in `../citations-tracker.md`
- [x] Yelp for Business: **existing**, audit
- [x] Better Business Bureau (BBB): **existing, accredited**, audit
- [x] Facebook Page: **existing** (facebook.com/Aircareprohvac), audit
- [ ] Bing Places for Business (import from GBP)
- [ ] Apple Business Connect
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
- [ ] Comfortmaker dealer locator (confirmed dealer)
- [ ] ACCA contractor directory (if member)
- [ ] Utility program contractor lists: ComEd, Peoples Gas / North Shore Gas, Nicor Gas
- [ ] ENERGY STAR / state energy-office contractor lists (if eligible)

## Tier 4: local
- [ ] Andersonville or Edgewater Chamber of Commerce (closest to base), then chambers in the top-revenue areas (see `../backlink-outreach.md`)
- [ ] City of Chicago business license lookup (verify license #3065598 shows correctly)
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
