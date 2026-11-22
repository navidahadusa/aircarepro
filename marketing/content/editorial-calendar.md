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

## Next 14 days (Maya Lin)
Status key: ☐ to do · ✍ drafted on branch · ✅ published (merged) · **O** needs owner input · **F** fact check needed

| Date | Type | Title | Target keyword | Links | Flags | Status |
|---|---|---|---|---|---|---|
| Fri Nov 20 | New guide | Chicago Heat Ordinance: What Renters and Two-Flat Owners Should Know | chicago heat ordinance | /boiler-repair/, /heating/, /hvac-chicago/ | F (point to City/311) | ✍ shipped Nov 21 → /chicago-heat-ordinance/ |
| Sat Nov 21 | Refresh | boiler-not-heating | boiler not heating | /boiler-repair/, /emergency-hvac/ | | ✍ shipped Nov 21 → /boiler-not-heating/ (rewritten: steam vs hot-water, cold-snap "heat not keeping up", 5 FAQs) |
| Mon Nov 23 | New | Snow Blocking Your Furnace's PVC Vents: What to Do | furnace vent blocked by snow | /furnace-repair/, /carbon-monoxide-safety/ | | ✍ shipped Nov 22 → /furnace-vent-blocked-by-snow/ |
| Tue Nov 24 | New guide | Steam or Hot-Water Boiler? How to Tell Which You Have | steam vs hot water boiler | /boiler-repair/, /boiler-installation/ | | ☐ |
| Wed Nov 25 | Seasonal | Hosting Thanksgiving: Thermostat and Furnace Prep | thermostat settings for guests | /furnace-tune-up/, /thermostat-installation/ | | ☐ |
| Fri Nov 27 | Refresh | carbon-monoxide-safety-tips | carbon monoxide safety | /carbon-monoxide-safety/, /furnace-repair/ | F | ☐ |
| Mon Nov 30 | Job story | Furnace replacement in a Chicago bungalow | furnace replacement chicago | /furnace-installation/, matching /hvac-<area>/ | **O** (real photos, area, what was found) | ☐ |
| Tue Dec 1 | Answer | Heat Pump Defrost Mode: Why It Steams in Chicago Cold | heat pump defrost mode | /heat-pump-repair/, /heating/ | | ☐ |
| Wed Dec 2 | Refresh | cracked-heat-exchanger-signs | cracked heat exchanger | /furnace-repair/, /carbon-monoxide-safety/ | | ☐ |
| Thu Dec 3 | Seasonal | Space Heaters and CO: Cold-Snap Safety | space heater safety | /carbon-monoxide-safety/, /emergency-hvac/ | F (official safety sources) | ☐ |
| Fri Dec 4 | Resource | Heating Help and Rebates: Where Chicago Homeowners Should Check | chicago heating assistance | /furnace-installation/, /heat-pump-installation/ | F ("check current eligibility") | ☐ |
| Mon Dec 7 | Guide | Cold Upstairs Rooms in Bungalows with Finished Attics | bungalow attic cold | /ductwork-repair/, /mini-split-installation/ | | ☐ |
| Tue Dec 8 | Refresh | how-often-change-furnace-filter | change furnace filter | /furnace-tune-up/, /maintenance-plan/ | | ☐ |
| Wed Dec 9 | Area post | Heating Courtyard Buildings in Rogers Park and Edgewater | rogers park heating | /hvac-rogers-park/, /hvac-andersonville-edgewater/, /boiler-repair/ | **O** (actual jobs there) | ☐ |
| Fri Dec 11 | Guide | Heat Pump Maintenance Before a Chicago Winter: What Gets Checked | heat pump maintenance | /heat-pump-repair/, /ac-repair-schaumburg/, /hvac-des-plaines/ | Search Console: Schaumburg 19.5 · Des Plaines 11 heat pump maintenance | ☐ |
| Thu Dec 10 | Answer | Dual-Fuel Heat Pumps in the Northwest Suburbs: When the Furnace Takes Over | dual fuel heat pump | /heat-pump-repair/, /hvac-arlington-heights/, /ac-repair-arlington-heights/ | Search Console: Arlington Heights heat pump queries at pos 10–17 | ☐ |

Posts needing owner input stay `draft: true` until the details arrive. The daily run then moves the next item up.
