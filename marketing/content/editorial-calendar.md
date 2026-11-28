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

## Next 14 days (one new article per day, lead-first: owner 2026-11-27)
Owner: "Topics must be real, the ones that bring leads and customers." Every topic below is a phrase Google Autocomplete returned on 2026-11-27 (`scripts/keyword-ideas.mjs`), with **repair, emergency or replacement intent** (someone with a problem, about to call or book). Each article ends with Call/Text + booking and links to the service page that converts.

| Date | Type | Title | Real search (Autocomplete) | Converts on | External sources to cite | Status |
|---|---|---|---|---|---|---|
| Fri Nov 27 | Job story | How to Clean a Furnace Blower Wheel (and How Often) | how to clean furnace blower wheel | /furnace-tune-up/, /furnace-repair/ | ENERGY STAR checklist; Illinois Keep Warm | ✍ shipped → /how-to-clean-furnace-blower-wheel/ |
| Sat Nov 28 | Job story | Furnace Inducer Motor Replacement: Signs, Testing and Cost | draft inducer motor replacement · furnace inducer motor cost to replace | /furnace-repair/, /furnace-wont-turn-on/ | CPSC 2025 heating safety release; ENERGY STAR checklist | ✍ shipped Nov 28 → /furnace-inducer-motor-replacement/ (owner photos, job done Nov 28) |
| Sun Nov 29 | Emergency | Furnace Not Working? How to Keep the House Warm Until We Get There | furnace not working how to keep house warm · is heat not working an emergency | /emergency-hvac/, /furnace-repair/ | CPSC 2026 winter heating release; City of Chicago Nov 2026 winter guidance (311) | ✍ shipped Nov 28 → /furnace-not-working-keep-house-warm/ |
| Mon Nov 30 | Repair | Heat Pump Not Heating When It's Cold Outside | heat pump not heating when cold outside · why is my heat pump not heating but ac works | /heat-pump-repair/ | energy.gov heat pump page | ☐ |
| Tue Dec 1 | Local repair | Steam Boiler Repair in Chicago: What We Fix Most Often | steam boiler repair chicago · boiler repair chicago | /boiler-repair/, /hvac-chicago/ | Illinois Keep Warm; manufacturer manual | ☐ |
| Wed Dec 2 | Repair | Radiator Not Heating Up? How to Fix It (Steam and Hot Water) | radiator not heating up how to fix | /boiler-repair/, /boiler-not-heating/ | energy.gov / manufacturer | ☐ |
| Thu Dec 3 | Replacement | Furnace Replacement Cost in Chicago: What Changes the Price | furnace replacement cost chicago · hvac replacement cost chicago | /furnace-installation/, /free-estimate/, /financing/ | ENERGY STAR furnace page; utility rebate pages (check current) | ☐ no invented prices: factors + free estimate |
| Fri Dec 4 | Landlord | No Heat in a Chicago Two-Flat: A Landlord's Same-Day Checklist | no heat complaint chicago · landlord will not fix heat | /emergency-hvac/, /boiler-repair/, /chicago-heat-ordinance/ | City of Chicago heat ordinance / 311 | ☐ |
| Sat Dec 5 | Repair | Furnace Smells Like Burning When Turned On: Normal or Not? | furnace smells like burning when turned on · what to do if furnace smells like burning | /furnace-repair/, /carbon-monoxide-safety/ | CPSC / U.S. Fire Administration | ☐ |
| Sun Dec 6 | Repair | Furnace Repair Cost: What Drives the Price of a Service Call | furnace not working repair cost | /furnace-repair/, /maintenance-plan/ | ENERGY STAR | ☐ no invented prices |
| Mon Dec 7 | Emergency | Frozen Pipes in Chicago: When the Furnace Goes Out Overnight | frozen pipes chicago · do pipes freeze in chicago | /emergency-hvac/ | City of Chicago winter guidance | ☐ |
| Tue Dec 8 | Replacement | Boiler Replacement Cost in Chicago: Steam vs. Hot Water | boiler replacement cost chicago | /boiler-installation/, /free-estimate/, /financing/ | Peoples Gas / Nicor rebate pages (check current) | ☐ no invented prices |
| Wed Dec 9 | Repair | Emergency Heat on the Thermostat Not Working | emergency heat on thermostat not working | /heat-pump-repair/, /thermostat-installation/ | manufacturer support | ☐ |
| Thu Dec 10 | Replacement | Furnace and AC Replacement Together: When It Makes Sense | furnace and ac replacement cost chicago | /furnace-installation/, /ac-installation/, /free-estimate/ | ENERGY STAR; ComEd rebates | ☐ |
| Fri Dec 11 | Repair | Furnace Not Turning On When the Temperature Drops | furnace not turning on when temp drops | /furnace-repair/, /emergency-hvac/ | manufacturer manual | ☐ |
| Sat Dec 12 | Local | Furnace Repair Near Me With a Free Estimate: What to Ask on the Phone | furnace repair near me free estimate | /furnace-repair/, /free-estimate/ | FTC / BBB hiring-a-contractor tips | ☐ |
| Later | Area post | Heating Courtyard Buildings in Rogers Park and Edgewater | rogers park heating | /hvac-rogers-park/ | | **O** (actual jobs there) |
| Later | Job story | Furnace replacement in a Chicago bungalow | furnace replacement chicago | /furnace-installation/ | | **O** (photos, area, findings) |
