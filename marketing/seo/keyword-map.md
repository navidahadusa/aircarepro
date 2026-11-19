# Keyword map: CHICAGO AIRCARE PRO

Owner: Elena Brooks, Local SEO Architect · Updated 2026-11-19 · Branch `agency/sprint-3`

## Read this first
- **Search volumes are not measured.** We have no keyword-tool, Search Console or Google Ads data in this repo, so no row has a volume, difficulty or ranking estimate. Priorities are set by **local intent** (an emergency or repair query that names a place and has a clear phone-call outcome ranks highest), by the housing stock each live page describes, and by the owner's priorities (SEO, local SEO, lead gen).
- Once Search Console is connected for aircareprohvac.com, replace the priority column with real impressions/clicks and re-check cannibalization.
- **One primary keyword per URL.** Area pages (`/hvac-<area>/`) own "HVAC repair <place>" (or the furnace/boiler variant that fits the area's housing). Service+city pages own "<service> <city>". Generic service pages own the unqualified service term + "Chicago".
- Titles and H1s for area pages are copied from `src/data/areaContent.ts` (source of truth). Service titles come from `src/data/services.ts` (Maya Lin). Service+city pages are being built by Sophia Reynolds; their titles and H1s are listed as targets.

## Page types
| Page type | URL pattern | Primary keyword pattern | Secondary keyword patterns | Priority (intent-based) |
|---|---|---|---|---|
| Home | `/` | chicago hvac company | heating and cooling chicago; furnace and ac repair chicago; 24/7 hvac chicago | High |
| Emergency | `/emergency-hvac/` | emergency hvac repair chicago | no heat chicago; 24 hour furnace repair chicago; emergency boiler repair | Highest |
| Chicago hub | `/hvac-chicago/` | hvac repair chicago | hvac company chicago; boiler repair chicago; heating and cooling chicago | High |
| Neighborhood (25) | `/hvac-<neighborhood>/` | hvac / furnace / boiler repair <neighborhood> | <system> <neighborhood>; housing-type problems (two-flat, bungalow attic, steam) | Medium-high |
| Suburb (8) | `/hvac-<suburb>/` | hvac repair <suburb> | heating and cooling <suburb> il; hvac contractor <suburb>; boiler/heat pump <suburb> | High |
| Service+city (27) | `/furnace-repair-<city>/`, `/ac-repair-<city>/`, `/furnace-installation-<city>/` | <service> <city> | <service> near me (local pack); <service> <city> il; emergency <service> <city> | Highest (repair), High (installation) |
| Service (20) | `/<service>/` | <service> chicago | <service> cost chicago; <service> near me; brand + service | High |
| Category hub (3) | `/heating/`, `/cooling/`, `/air-quality/` | heating / cooling / air quality chicago | category repair and installation chicago | Medium |
| Maintenance plan | `/maintenance-plan/` | hvac maintenance plan chicago | furnace tune-up plan; ac tune-up chicago | Medium |
| Free estimate | `/free-estimate/` | free hvac estimate chicago | free furnace estimate; free ac quote chicago | High |
| Service areas | `/service-areas/` | hvac service areas chicago suburbs | hvac north side chicago; hvac north shore | Low (navigation hub) |
| Blog | `/<post>/`, `/blog/` | informational (one per post, see editorial calendar) | question variants | Supports area/service pages |

## Area pages (33)
| Area | Target URL | Primary keyword | Secondary keywords | Title | H1 |
|---|---|---|---|---|---|
| Chicago | `/hvac-chicago/` | hvac repair chicago | hvac company chicago; heating and cooling chicago; boiler repair chicago; emergency hvac chicago | HVAC Repair in Chicago, IL \| 24/7 \| Chicago Aircare Pro | HVAC Repair in Chicago: Furnace, Boiler & AC Service |
| Lincoln Park | `/hvac-lincoln-park/` | hvac repair lincoln park | boiler repair lincoln park; radiator repair lincoln park chicago; condo hvac lincoln park | HVAC Repair in Lincoln Park, Chicago \| Chicago Aircare Pro | Boiler, Furnace & AC Repair in Lincoln Park, Chicago |
| Lakeview | `/hvac-lakeview/` | hvac repair lakeview chicago | condo furnace repair lakeview; ac repair wrigleyville; steam heat repair lakeview | HVAC Repair in Lakeview, Chicago \| Chicago Aircare Pro | Furnace, Boiler & AC Repair in Lakeview, Chicago |
| Old Town & Gold Coast | `/hvac-old-town-gold-coast/` | hvac repair old town chicago | hvac gold coast chicago; ductless ac historic home chicago; boiler repair old town | HVAC Repair Old Town & Gold Coast \| Chicago Aircare Pro | HVAC Repair in Old Town & Gold Coast, Chicago |
| Lincoln Square | `/hvac-lincoln-square/` | hvac repair lincoln square | bungalow attic ac chicago; mini split lincoln square; two-flat boiler zoning | HVAC Repair in Lincoln Square, Chicago \| Chicago Aircare Pro | Furnace, Boiler & AC Repair in Lincoln Square, Chicago |
| North Center | `/hvac-north-center/` | furnace repair north center chicago | hvac roscoe village; zoning system repair chicago; high efficiency furnace service | Furnace & AC Repair in North Center \| Chicago Aircare Pro | Furnace & AC Repair in North Center, Chicago |
| Ravenswood | `/hvac-ravenswood/` | boiler repair ravenswood | radiator repair ravenswood chicago; ductless ac ravenswood; hvac ravenswood | Boiler & AC Repair in Ravenswood \| Chicago Aircare Pro | Boiler, Radiator & AC Service in Ravenswood, Chicago |
| Uptown | `/hvac-uptown/` | hvac repair uptown chicago | condo mini split uptown; steam heat uptown chicago; boiler repair sheridan park | HVAC Repair in Uptown, Chicago \| Chicago Aircare Pro | Steam Heat, Boiler & Ductless AC Service in Uptown, Chicago |
| Andersonville & Edgewater | `/hvac-andersonville-edgewater/` | hvac repair edgewater chicago | hvac andersonville; boiler repair edgewater; indirect water heater boiler chicago | HVAC Repair Andersonville & Edgewater \| Chicago Aircare Pro | Boiler, Furnace & AC Repair in Andersonville & Edgewater |
| Rogers Park | `/hvac-rogers-park/` | boiler repair rogers park | steam heat repair rogers park; banging steam pipes chicago; furnace repair rogers park | Boiler & Furnace Repair in Rogers Park \| Chicago Aircare Pro | Steam Boiler, Furnace & AC Repair in Rogers Park, Chicago |
| West Ridge | `/hvac-west-ridge/` | furnace repair west ridge chicago | ac installation west ridge; hvac devon avenue; chimney liner furnace chicago | Furnace & AC Repair in West Ridge \| Chicago Aircare Pro | Furnace, Boiler & AC Repair in West Ridge, Chicago |
| Logan Square | `/hvac-logan-square/` | hvac repair logan square | two-flat furnace logan square; boiler repair logan square; two-flat deconversion heating | HVAC Repair in Logan Square, Chicago \| Chicago Aircare Pro | Furnace, Boiler & AC Repair in Logan Square, Chicago |
| Avondale | `/hvac-avondale/` | furnace repair avondale chicago | boiler to forced air conversion chicago; ac repair avondale; two-flat hvac renovation | Furnace & AC Repair in Avondale \| Chicago Aircare Pro | Furnace, Boiler & AC Repair in Avondale, Chicago |
| Irving Park | `/hvac-irving-park/` | furnace repair irving park | old irving park hvac; gravity furnace ductwork chicago; second floor not cooling | Furnace & AC Repair in Irving Park \| Chicago Aircare Pro | Furnace, Boiler & AC Repair in Irving Park, Chicago |
| Albany Park | `/hvac-albany-park/` | boiler repair albany park | shared boiler zoning chicago; furnace repair albany park; basement apartment hvac | Boiler & Furnace Repair in Albany Park \| Chicago Aircare Pro | Boiler, Furnace & AC Repair in Albany Park, Chicago |
| Portage Park | `/hvac-portage-park/` | furnace repair portage park | bungalow ac chicago; hot bungalow attic fix; hvac six corners | Furnace & AC Repair in Portage Park \| Chicago Aircare Pro | Furnace & AC Repair in Portage Park, Chicago |
| Jefferson Park | `/hvac-jefferson-park/` | furnace repair jefferson park | cape cod upstairs ac chicago; chimney liner new furnace; hvac jefferson park | Furnace & AC Repair in Jefferson Park \| Chicago Aircare Pro | Furnace & AC Repair in Jefferson Park, Chicago |
| Norwood Park | `/hvac-norwood-park/` | furnace repair norwood park | ranch ductwork balancing chicago; crawlspace duct sealing; hvac norwood park | Furnace & AC Repair in Norwood Park \| Chicago Aircare Pro | Furnace, Boiler & AC Repair in Norwood Park, Chicago |
| Edison Park | `/hvac-edison-park/` | furnace repair edison park | high efficiency furnace service chicago; raised ranch hvac; ac repair edison park | Furnace & AC Repair in Edison Park \| Chicago Aircare Pro | Furnace & AC Repair in Edison Park, Chicago |
| Bucktown | `/hvac-bucktown/` | furnace repair bucktown | ac repair bucktown; attic air handler service chicago; top floor too hot | Furnace & AC Repair in Bucktown \| Chicago Aircare Pro | Furnace & AC Repair in Bucktown, Chicago |
| Wicker Park | `/hvac-wicker-park/` | hvac repair wicker park | loft ac repair chicago; rooftop condenser service; greystone boiler repair | HVAC Repair in Wicker Park, Chicago \| Chicago Aircare Pro | Furnace, Boiler & AC Repair in Wicker Park, Chicago |
| Humboldt Park | `/hvac-humboldt-park/` | boiler repair humboldt park | furnace repair humboldt park; two-flat rehab hvac chicago; greystone boiler service | Boiler & Furnace Repair Humboldt Park \| Chicago Aircare Pro | Boiler, Furnace & AC Repair in Humboldt Park, Chicago |
| Ukrainian Village | `/hvac-ukrainian-village/` | hvac repair ukrainian village | closet furnace repair chicago; condo ac repair ukrainian village; loud furnace | HVAC Repair in Ukrainian Village \| Chicago Aircare Pro | Furnace, Boiler & AC Repair in Ukrainian Village, Chicago |
| West Town | `/hvac-west-town/` | hvac repair west town chicago | condo ac repair river west; air handler leaking ceiling; hvac noble square | HVAC Repair in West Town, Chicago \| Chicago Aircare Pro | HVAC Repair in West Town, Chicago: Condos, Lofts & Townhomes |
| Austin | `/hvac-austin/` | furnace repair austin chicago | boiler repair austin chicago; west side hvac chicago; radiator heat repair | Furnace & Boiler Repair in Austin \| Chicago Aircare Pro | Furnace, Boiler & AC Repair in Austin, Chicago |
| Evanston | `/hvac-evanston/` | hvac repair evanston | boiler repair evanston; steam boiler evanston il; heating and cooling evanston | HVAC Repair in Evanston, IL \| Chicago Aircare Pro | HVAC Repair in Evanston, IL: Furnaces, Boilers & AC |
| Skokie | `/hvac-skokie/` | hvac repair skokie | heating and cooling skokie il; split level hvac; hvac contractor skokie | HVAC Repair in Skokie, IL \| Chicago Aircare Pro | HVAC Repair in Skokie, IL: Furnace & AC Service |
| Wilmette | `/hvac-wilmette/` | hvac repair wilmette | boiler repair wilmette; whole home humidifier wilmette; heating and cooling wilmette il | HVAC Repair in Wilmette, IL \| Chicago Aircare Pro | HVAC Repair in Wilmette, IL: Furnaces, Boilers & AC |
| Highland Park | `/hvac-highland-park/` | hvac repair highland park il | hvac service highland park; zoning repair north shore; boiler repair highland park | HVAC Repair in Highland Park, IL \| Chicago Aircare Pro | HVAC Repair in Highland Park, IL: Multi-System Homes |
| Des Plaines | `/hvac-des-plaines/` | hvac repair des plaines | heating and cooling des plaines il; hvac contractor des plaines; furnace sizing | HVAC Repair in Des Plaines, IL \| Chicago Aircare Pro | HVAC Repair in Des Plaines, IL: Furnace & AC Service |
| Arlington Heights | `/hvac-arlington-heights/` | hvac repair arlington heights | heat pump arlington heights; dual fuel heat pump il; hvac contractor arlington heights | HVAC Repair in Arlington Heights, IL \| Chicago Aircare Pro | HVAC Repair in Arlington Heights, IL: Furnace, AC & Heat Pumps |
| Schaumburg | `/hvac-schaumburg/` | hvac repair schaumburg | townhome furnace schaumburg; heating and cooling schaumburg il; hoa ac replacement | HVAC Repair in Schaumburg, IL \| Chicago Aircare Pro | HVAC Repair in Schaumburg, IL: Homes, Townhomes & Condos |
| Naperville | `/hvac-naperville/` | hvac repair naperville | heating and cooling naperville; naperville electric ac rebate; hvac zoning naperville | HVAC Repair in Naperville, IL \| Chicago Aircare Pro | HVAC Repair in Naperville, IL: Furnace, AC & Zoning |

## Service+city pages (27, routes built by Sophia Reynolds)
Area pages link to these: each of the 9 cities' `/hvac-<city>/` page links to its three; every Chicago neighborhood page links to the Chicago three. Titles and H1s below are **targets**; the built page is the source of truth.

| City | Target URL | Primary keyword | Secondary keywords | Target title | Target H1 |
|---|---|---|---|---|---|
| Chicago | `/furnace-repair-chicago/` | furnace repair chicago | furnace repair near me; emergency furnace repair chicago; furnace not working chicago | Furnace Repair Chicago \| Chicago Aircare Pro | Furnace Repair in Chicago |
| Chicago | `/ac-repair-chicago/` | ac repair chicago | air conditioning repair chicago; ac not cooling chicago; central air repair chicago | AC Repair Chicago \| Chicago Aircare Pro | AC Repair in Chicago |
| Chicago | `/furnace-installation-chicago/` | furnace installation chicago | furnace replacement chicago; new furnace chicago; high efficiency furnace chicago | Furnace Installation Chicago \| Chicago Aircare Pro | Furnace Installation in Chicago |
| Evanston | `/furnace-repair-evanston/` | furnace repair evanston | furnace repair near me; emergency furnace repair evanston; furnace not working evanston | Furnace Repair Evanston, IL \| Chicago Aircare Pro | Furnace Repair in Evanston, IL |
| Evanston | `/ac-repair-evanston/` | ac repair evanston | air conditioning repair evanston; ac not cooling evanston; central air repair evanston | AC Repair Evanston, IL \| Chicago Aircare Pro | AC Repair in Evanston, IL |
| Evanston | `/furnace-installation-evanston/` | furnace installation evanston | furnace replacement evanston; new furnace evanston; high efficiency furnace evanston | Furnace Installation Evanston, IL \| Chicago Aircare Pro | Furnace Installation in Evanston, IL |
| Skokie | `/furnace-repair-skokie/` | furnace repair skokie | furnace repair near me; emergency furnace repair skokie; furnace not working skokie | Furnace Repair Skokie, IL \| Chicago Aircare Pro | Furnace Repair in Skokie, IL |
| Skokie | `/ac-repair-skokie/` | ac repair skokie | air conditioning repair skokie; ac not cooling skokie; central air repair skokie | AC Repair Skokie, IL \| Chicago Aircare Pro | AC Repair in Skokie, IL |
| Skokie | `/furnace-installation-skokie/` | furnace installation skokie | furnace replacement skokie; new furnace skokie; high efficiency furnace skokie | Furnace Installation Skokie, IL \| Chicago Aircare Pro | Furnace Installation in Skokie, IL |
| Wilmette | `/furnace-repair-wilmette/` | furnace repair wilmette | furnace repair near me; emergency furnace repair wilmette; furnace not working wilmette | Furnace Repair Wilmette, IL \| Chicago Aircare Pro | Furnace Repair in Wilmette, IL |
| Wilmette | `/ac-repair-wilmette/` | ac repair wilmette | air conditioning repair wilmette; ac not cooling wilmette; central air repair wilmette | AC Repair Wilmette, IL \| Chicago Aircare Pro | AC Repair in Wilmette, IL |
| Wilmette | `/furnace-installation-wilmette/` | furnace installation wilmette | furnace replacement wilmette; new furnace wilmette; high efficiency furnace wilmette | Furnace Installation Wilmette, IL \| Chicago Aircare Pro | Furnace Installation in Wilmette, IL |
| Highland Park | `/furnace-repair-highland-park/` | furnace repair highland park | furnace repair near me; emergency furnace repair highland park; furnace not working highland park | Furnace Repair Highland Park, IL \| Chicago Aircare Pro | Furnace Repair in Highland Park, IL |
| Highland Park | `/ac-repair-highland-park/` | ac repair highland park | air conditioning repair highland park; ac not cooling highland park; central air repair highland park | AC Repair Highland Park, IL \| Chicago Aircare Pro | AC Repair in Highland Park, IL |
| Highland Park | `/furnace-installation-highland-park/` | furnace installation highland park | furnace replacement highland park; new furnace highland park; high efficiency furnace highland park | Furnace Installation Highland Park, IL \| Chicago Aircare Pro | Furnace Installation in Highland Park, IL |
| Des Plaines | `/furnace-repair-des-plaines/` | furnace repair des plaines | furnace repair near me; emergency furnace repair des plaines; furnace not working des plaines | Furnace Repair Des Plaines, IL \| Chicago Aircare Pro | Furnace Repair in Des Plaines, IL |
| Des Plaines | `/ac-repair-des-plaines/` | ac repair des plaines | air conditioning repair des plaines; ac not cooling des plaines; central air repair des plaines | AC Repair Des Plaines, IL \| Chicago Aircare Pro | AC Repair in Des Plaines, IL |
| Des Plaines | `/furnace-installation-des-plaines/` | furnace installation des plaines | furnace replacement des plaines; new furnace des plaines; high efficiency furnace des plaines | Furnace Installation Des Plaines, IL \| Chicago Aircare Pro | Furnace Installation in Des Plaines, IL |
| Arlington Heights | `/furnace-repair-arlington-heights/` | furnace repair arlington heights | furnace repair near me; emergency furnace repair arlington heights; furnace not working arlington heights | Furnace Repair Arlington Heights, IL \| Chicago Aircare Pro | Furnace Repair in Arlington Heights, IL |
| Arlington Heights | `/ac-repair-arlington-heights/` | ac repair arlington heights | air conditioning repair arlington heights; ac not cooling arlington heights; central air repair arlington heights | AC Repair Arlington Heights, IL \| Chicago Aircare Pro | AC Repair in Arlington Heights, IL |
| Arlington Heights | `/furnace-installation-arlington-heights/` | furnace installation arlington heights | furnace replacement arlington heights; new furnace arlington heights; high efficiency furnace arlington heights | Furnace Installation Arlington Heights, IL \| Aircare Pro | Furnace Installation in Arlington Heights, IL |
| Schaumburg | `/furnace-repair-schaumburg/` | furnace repair schaumburg | furnace repair near me; emergency furnace repair schaumburg; furnace not working schaumburg | Furnace Repair Schaumburg, IL \| Chicago Aircare Pro | Furnace Repair in Schaumburg, IL |
| Schaumburg | `/ac-repair-schaumburg/` | ac repair schaumburg | air conditioning repair schaumburg; ac not cooling schaumburg; central air repair schaumburg | AC Repair Schaumburg, IL \| Chicago Aircare Pro | AC Repair in Schaumburg, IL |
| Schaumburg | `/furnace-installation-schaumburg/` | furnace installation schaumburg | furnace replacement schaumburg; new furnace schaumburg; high efficiency furnace schaumburg | Furnace Installation Schaumburg, IL \| Chicago Aircare Pro | Furnace Installation in Schaumburg, IL |
| Naperville | `/furnace-repair-naperville/` | furnace repair naperville | furnace repair near me; emergency furnace repair naperville; furnace not working naperville | Furnace Repair Naperville, IL \| Chicago Aircare Pro | Furnace Repair in Naperville, IL |
| Naperville | `/ac-repair-naperville/` | ac repair naperville | air conditioning repair naperville; ac not cooling naperville; central air repair naperville | AC Repair Naperville, IL \| Chicago Aircare Pro | AC Repair in Naperville, IL |
| Naperville | `/furnace-installation-naperville/` | furnace installation naperville | furnace replacement naperville; new furnace naperville; high efficiency furnace naperville | Furnace Installation Naperville, IL \| Chicago Aircare Pro | Furnace Installation in Naperville, IL |

## Service pages (20) and category hubs (3)
Owner: Maya Lin (titles live in `src/data/services.ts`; the H1 is "<Service> in Chicago"). Listed here so the intent split with area and service+city pages stays clear.

| Page | Target URL | Primary keyword | Secondary keywords |
|---|---|---|---|
| Furnace repair | `/furnace-repair/` | furnace repair chicago | furnace not heating; furnace blowing cold air; emergency furnace repair |
| Furnace installation | `/furnace-installation/` | furnace installation chicago | furnace replacement chicago; high efficiency furnace; furnace rebates peoples gas |
| Furnace tune-up | `/furnace-tune-up/` | furnace tune-up chicago | furnace maintenance; furnace inspection; furnace cleaning |
| Boiler repair | `/boiler-repair/` | boiler repair chicago | steam boiler repair; radiator not heating; banging steam pipes |
| Boiler installation | `/boiler-installation/` | boiler installation chicago | boiler replacement; combi boiler; steam to hot water conversion |
| Heat pump repair | `/heat-pump-repair/` | heat pump repair chicago | heat pump not heating; heat pump frozen |
| Heat pump installation | `/heat-pump-installation/` | heat pump installation chicago | dual fuel heat pump; cold climate heat pump; heat pump rebates |
| Thermostats & zoning | `/thermostat-installation/` | thermostat installation chicago | zoning system; smart thermostat install; two-flat zoning |
| AC repair | `/ac-repair/` | ac repair chicago | ac not cooling; central air repair; ac emergency repair |
| AC installation | `/ac-installation/` | ac installation chicago | central air installation; ac replacement; new ac cost |
| AC tune-up | `/ac-tune-up/` | ac tune-up chicago | ac maintenance; ac cleaning; condenser cleaning |
| Mini-split installation | `/mini-split-installation/` | mini split installation chicago | ductless ac; ac for house with radiators; attic mini split |
| Mini-split repair | `/mini-split-repair/` | mini split repair chicago | ductless ac repair; mini split not cooling |
| Refrigerant leak repair | `/refrigerant-leak-repair/` | ac refrigerant leak repair chicago | freon leak; ac low on refrigerant |
| Whole-home humidifiers | `/whole-home-humidifiers/` | whole house humidifier chicago | furnace humidifier; dry air in winter |
| Whole-home dehumidifiers | `/whole-home-dehumidifiers/` | whole house dehumidifier chicago | basement dehumidifier; humid basement |
| Air purifiers | `/air-purifiers/` | whole home air purifier chicago | media filter; hvac air cleaner |
| UV air sanitizers | `/uv-air-sanitizers/` | uv light hvac chicago | uv air purifier; coil uv light |
| Ductwork repair | `/ductwork-repair/` | ductwork repair chicago | duct sealing; uneven heating; add return air |
| Carbon monoxide safety | `/carbon-monoxide-safety/` | carbon monoxide furnace check chicago | co detector furnace; cracked heat exchanger |
| Heating hub | `/heating/` | heating repair chicago | heating installation; heating company chicago |
| Cooling hub | `/cooling/` | cooling repair chicago | air conditioning chicago; ac company chicago |
| Air quality hub | `/air-quality/` | indoor air quality chicago | iaq services; humidity control |

## Cannibalization rules
1. `/hvac-<city>/` must not use "furnace repair <city>" or "ac repair <city>" as its title lead when a service+city page exists for that city (all 8 suburbs + Chicago). Those area pages lead with "HVAC Repair".
2. Neighborhood pages may lead with "Furnace & AC" or "Boiler & Furnace" because no neighborhood service+city pages exist; each links up to the Chicago service+city pages.
3. Blog posts target informational queries and link to the matching service and area page; they never use a service+city phrase as their title.
4. Re-run this map when a new page type ships, and keep titles ≤ 60 characters and meta descriptions ≤ 155.
