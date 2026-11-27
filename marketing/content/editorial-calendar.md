# Editorial calendar & daily publishing program

Owner: **Maya Lin, HVAC Content Strategist** · Structure and links: **Elena Brooks** · CTAs: **Rachel Morgan** · GBP mirror posts: **Hannah Carter** · Final approval: **Sophia Reynolds** · Publishing: the owner merges to `main`.

## Cadence (Sophia's decision, 2026-11-19)
The owner wants daily posting. The team advised against a brand-new long-form post every day: with one writer and limited real job details, that produces thin, overlapping posts, and Google demotes those. So **something publishes every day**:

| Day | Website | Google Business Profile |
|---|---|---|
| Mon | **New** guide (900–1,500 words) | Draft post mirroring Monday's guide |
| Tue | **Refresh** a migrated post (update facts, add FAQ, add internal links) | Tip post |
| Wed | **New** post (seasonal / single-question answer) | Draft post |
| Thu | **Refresh** a migrated post | Tip post |
| Fri | **New** post (area-specific or job story when the owner supplies details) | Draft post |
| Sat–Sun | — | Seasonal reminder / Comfort Club post |

After 8 weeks, Elena reviews Search Console. If impressions and clicks are growing and quality holds, we can add more new posts.

## Rules for every post
- Follow `post-template.md`. One search intent per post, checked against the existing posts (`src/content/blog/`) first. No city-swapped copies.
- At least 1 real Chicago detail (two-flats, greystones, steam, lake-effect cold, humid summers).
- **Never invent** prices, response times, statistics, reviews or customer stories. Job stories need the owner's real details and photos.
- Links: at least 1 service page, 1 related post, and 1–2 area pages for local posts. Set `related` in frontmatter.
- Set `intent: emergency` for urgent-fix topics (Call leads) and `planned` for the rest (Book online leads).
- Fact-check anything regulatory or utility-related, or point readers to the official source (311, ComEd, Peoples Gas, North Shore Gas, Nicor Gas).

## Avoid cannibalization (existing posts)
Merge these pairs later with 301s (Elena, at production switch): `ac-not-cooling` + `air-conditioner-not-cooling`, `repair-or-replace-furnace` + `furnace-replacement-vs-repair`, `heat-pumps-in-chicago` + `heat-pump-installation-chicago`.
Don't write new posts on: furnace won't turn on, furnace noises, short-cycling, blowing cold air, air in boiler, boiler pressure, banging steam pipes, dry winter air, frozen condensate, zoning.

## Daily new article (owner rule, 2026-11-27)
**Every day ships a new article** (7 a week), not only Mon/Wed/Fri. Refreshes of migrated posts continue as extra work when the daily article is done, and as page fixes from Search Console. Every article:
- starts from real searches (Autocomplete + Search Console questions, in the searcher's words);
- reads like a Chicago technician wrote it (`hvac-blog-post` skill: human voice, no AI tells);
- has **1–3 external links to authoritative sources** (City of Chicago / 311, State of Illinois, ComEd, Peoples Gas, Nicor, ENERGY STAR, energy.gov, EPA, CDC, manufacturer manuals), taken from search results and checked, never guessed;
- uses the owner's real job photos where one fits.

## Shipped
| Date | Type | Title | Target keyword | Links | Flags | Status |
|---|---|---|---|---|---|---|
| Fri Nov 20 | New guide | Chicago Heat Ordinance: What Renters and Two-Flat Owners Should Know | chicago heat ordinance | /boiler-repair/, /heating/, /hvac-chicago/ | F (point to City/311) | ✍ shipped Nov 21 → /chicago-heat-ordinance/ |
| Sat Nov 21 | Refresh | boiler-not-heating | boiler not heating | /boiler-repair/, /emergency-hvac/ | | ✍ shipped Nov 21 → /boiler-not-heating/ (rewritten: steam vs hot-water, cold-snap "heat not keeping up", 5 FAQs) |
| Mon Nov 23 | New | Snow Blocking Your Furnace's PVC Vents: What to Do | furnace vent blocked by snow | /furnace-repair/, /carbon-monoxide-safety/ | | ✍ shipped Nov 22 → /furnace-vent-blocked-by-snow/ |
| Tue Nov 24 | New guide | Steam or Hot-Water Boiler? How to Tell Which You Have | steam vs hot water boiler | /boiler-repair/, /boiler-installation/ | | ✍ shipped Nov 23 → /steam-vs-hot-water-boiler/ |
| Wed Nov 25 | Seasonal | Hosting Thanksgiving: Thermostat and Furnace Prep | thermostat settings for guests | /furnace-tune-up/, /thermostat-installation/ | | ✍ shipped Nov 24 → /thanksgiving-thermostat-furnace-prep/ (before the holiday) |
| Fri Nov 27 | Refresh | carbon-monoxide-safety-tips | carbon monoxide safety | /carbon-monoxide-safety/, /furnace-repair/ | F (Illinois CO Alarm Detector Act 430 ILCS 135; Chicago rules → 311) | ✍ shipped Nov 25 → /carbon-monoxide-safety-tips/ (rewritten: Illinois/Chicago alarm rules, placement, symptoms, alarm steps, Chicago chimney/vent sources, 5 FAQs) |
| Mon Nov 30 | Job story | Steam Boiler Not Working? A Clogged Gauge Glass and Pigtail | steam boiler not working, clogged pigtail steam boiler | /boiler-repair/, /boiler-not-heating/ | Owner photos + details 2026-11-26 (area not given) | ✍ shipped Nov 26 → /steam-boiler-not-working-clogged-gauge-glass/ |
| Wed Dec 2 | Refresh | cracked-heat-exchanger-signs | cracked heat exchanger | /furnace-repair/, /carbon-monoxide-safety/ | | ✍ shipped Nov 26 (Thu refresh slot; Mon Nov 30 is O) → /cracked-heat-exchanger-signs/ (rewritten: signs, how it's confirmed, repair vs replace, check the diagnosis, 5 FAQs) |

## Next 14 days (one new article per day)
| Date | Type | Title | Target keyword | Links | External sources to cite | Status |
|---|---|---|---|---|---|---|
| Fri Nov 27 | Job story | How to Clean a Furnace Blower Wheel (and How Often) | how to clean furnace blower wheel | /furnace-tune-up/, /furnace-repair/ | ENERGY STAR maintenance checklist; Illinois Keep Warm heating guide | ✍ shipped Nov 27 → /how-to-clean-furnace-blower-wheel/ (owner photo) |
| Sat Nov 28 | Answer | How to Keep Pipes From Freezing in a Chicago Cold Snap | how to keep pipes from freezing | /emergency-hvac/, /boiler-repair/ | City of Chicago / 311 winter guidance | ☐ |
| Sun Nov 29 | Seasonal | Space Heaters and Carbon Monoxide: Cold-Snap Safety | space heater safety | /carbon-monoxide-safety/, /emergency-hvac/ | U.S. CPSC, CDC CO page | ☐ |
| Mon Nov 30 | Answer | Heat Pump Defrost Mode: Why It Steams in Chicago Cold | heat pump defrost mode | /heat-pump-repair/, /heating/ | energy.gov heat pump page, manufacturer manual | ☐ |
| Tue Dec 1 | Answer | One Radiator Not Getting Hot? Steam and Hot-Water Checks | radiator not getting hot | /boiler-repair/, /boiler-not-heating/ | manufacturer / energy.gov | ☐ |
| Wed Dec 2 | Resource | Heating Help and Rebates: Where Chicago Homeowners Should Check | chicago heating assistance | /furnace-installation/, /heat-pump-installation/ | LIHEAP / Illinois, Peoples Gas, ComEd (check current eligibility) | ☐ |
| Thu Dec 3 | Answer | Thermostat Blank or Not Working? What to Check First | thermostat blank screen | /thermostat-installation/, /furnace-repair/ | manufacturer support pages | ☐ |
| Fri Dec 4 | Guide | Cold Upstairs Rooms in Bungalows with Finished Attics | bungalow attic cold | /ductwork-repair/, /mini-split-installation/ | ENERGY STAR / energy.gov | ☐ |
| Sat Dec 5 | Answer | Furnace Smells Like Burning When It First Turns On | furnace burning smell | /furnace-repair/, /carbon-monoxide-safety/ | CPSC / manufacturer | ☐ |
| Sun Dec 6 | Answer | Which Furnace Filter (MERV) for a Chicago Home? | best furnace filter merv | /how-often-change-furnace-filter/, /air-purifiers/ | EPA indoor air / filter guide | ☐ |
| Mon Dec 7 | Guide | Boiler Service in Chicago: What a Yearly Steam or Hot-Water Check Covers | boiler service chicago | /boiler-repair/, /maintenance-plan/ | Illinois Keep Warm guide | ☐ |
| Tue Dec 8 | Answer | Are Carbon Monoxide Detectors Required in Chicago Rentals? | chicago carbon monoxide detector law | /carbon-monoxide-safety-tips/, /carbon-monoxide-safety/ | Illinois CO Alarm Detector Act (ILGA), City of Chicago | ☐ |
| Wed Dec 9 | Guide | Heat Pump Maintenance Before a Chicago Winter | heat pump maintenance | /heat-pump-repair/, /ac-repair-schaumburg/ | energy.gov | ☐ |
| Thu Dec 10 | Answer | Dual-Fuel Heat Pumps in the Northwest Suburbs | dual fuel heat pump | /heat-pump-installation/, /hvac-arlington-heights/ | energy.gov, ComEd | ☐ |
| Fri Dec 11 | Answer | What Temperature Should a Vacant Chicago House Be Kept At? | thermostat setting for vacant house winter | /furnace-tune-up/, /maintenance-plan/ | City of Chicago / insurer guidance | ☐ |
| Later | Area post | Heating Courtyard Buildings in Rogers Park and Edgewater | rogers park heating | /hvac-rogers-park/ | | **O** (actual jobs there) |
| Later | Job story | Furnace replacement in a Chicago bungalow | furnace replacement chicago | /furnace-installation/ | | **O** (photos, area, findings) |
