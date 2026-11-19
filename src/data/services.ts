/**
 * Service page content. Owner: Maya Lin (HVAC Content Strategist).
 * Paths mirror the live WordPress site so a migration keeps rankings.
 * Facts here must stay consistent with src/data/business.ts. Never add prices,
 * response-time promises or guarantees the owner hasn't confirmed.
 */

import { PHONE_DISPLAY } from './contact';

export type CategoryName = 'Heating' | 'Cooling' | 'Air Quality';

export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string; // path segment, e.g. "furnace-repair"
  name: string;
  category: CategoryName;
  /** One line for service cards. */
  card: string;
  /** Meta description (≤ 160 chars). */
  meta: string;
  intro: string;
  signs: string[];
  included: string[];
  faqs: Faq[];
  related: string[]; // slugs
  /** Which lead funnel the page's form uses. */
  funnel: 'emergency' | 'quote' | 'maintenance' | 'quick';
}

export interface Category {
  slug: 'heating' | 'cooling' | 'air-quality';
  name: CategoryName;
  headline: string;
  intro: string;
  meta: string;
}

export const categories: Category[] = [
  {
    slug: 'heating',
    name: 'Heating',
    headline: 'Furnaces, boilers and heat pumps for Chicago homes',
    intro:
      'From a furnace that won’t light on the first cold night to banging steam pipes in a greystone, we diagnose the real cause, explain your options with prices, and repair only with your approval.',
    meta: `Furnace, boiler and heat pump repair, replacement and tune-ups in Chicago and nearby suburbs. 24/7 emergency heating service. Call ${PHONE_DISPLAY}.`,
  },
  {
    slug: 'cooling',
    name: 'Cooling',
    headline: 'Central air, mini-splits and refrigerant work',
    intro:
      'When a heat wave hits, a weak capacitor or a clogged drain is all it takes. We repair and replace central air, rooftop units and ductless mini-splits across Chicago and the suburbs.',
    meta: `AC repair, installation and tune-ups, ductless mini-splits and refrigerant leak repair in Chicago. EPA 608 certified, 24/7. Call ${PHONE_DISPLAY}.`,
  },
  {
    slug: 'air-quality',
    name: 'Air Quality',
    headline: 'Humidity, filtration, ductwork and CO safety',
    intro:
      'Dry Chicago winters, damp basements and older ductwork all affect comfort and health. We size and install whole-home equipment that fits the system you already have.',
    meta: `Whole-home humidifiers, dehumidifiers, air purifiers, UV sanitizers, duct repair and carbon monoxide safety in Chicago. Call ${PHONE_DISPLAY}.`,
  },
];

export const services: Service[] = [
  // ───────────── Heating
  {
    slug: 'furnace-repair', name: 'Furnace Repair', category: 'Heating', funnel: 'emergency',
    card: 'No heat, short-cycling, error codes',
    meta: `Furnace not heating, short-cycling or showing an error code? 24/7 furnace repair in Chicago and nearby suburbs. NATE-certified. Call ${PHONE_DISPLAY}.`,
    intro: 'A furnace usually fails on the first real cold night, when parts that weakened over the summer finally give out. We test before we replace anything (gas pressure, temperature rise, flame sensor and igniter readings), then give you the price before the repair starts.',
    signs: ['Blowing cold or lukewarm air', 'Short-cycling: turning on and off every few minutes', 'Blinking error code on the control board', 'Igniter clicks but no flame', 'Loud bangs, squeals or rattles at startup', 'Higher gas bills with no change in use'],
    included: ['Full safety check, including a carbon monoxide test', 'Combustion and gas pressure readings', 'Repair options with prices before work begins', 'Common parts like igniters, flame sensors, inducer motors and pressure switches'],
    faqs: [
      { q: 'Do you repair furnaces at night and on weekends?', a: `Yes. We answer 24/7, including nights and holidays. Call ${PHONE_DISPLAY} for no-heat emergencies.` },
      { q: 'Should I repair or replace my furnace?', a: 'We recommend replacement only when a furnace is unsafe (for example, a cracked heat exchanger), beyond economical repair, or can’t keep the home comfortable, and we explain why. Estimates on new systems are free.' },
      { q: 'Which brands do you repair?', a: 'The brands common in Chicago homes, including Carrier, Lennox, Trane, Goodman, Rheem, York and Comfortmaker.' },
    ],
    related: ['furnace-installation', 'furnace-tune-up', 'carbon-monoxide-safety'],
  },
  {
    slug: 'furnace-installation', name: 'Furnace Installation', category: 'Heating', funnel: 'quote',
    card: 'Sized replacements, free estimates',
    meta: `New high-efficiency furnace installation in Chicago, properly sized for your home. Free written estimates, financing available. Call ${PHONE_DISPLAY}.`,
    intro: 'A new furnace should be sized to your home, not to the old unit’s label. We measure, check the ductwork and venting, and give you a free written estimate with options, including high-efficiency models and Comfortmaker equipment.',
    signs: ['Furnace is 15+ years old and needs frequent repairs', 'Cracked heat exchanger or other safety problem', 'Uneven heat between rooms or floors', 'Repair quote is a large share of a replacement cost'],
    included: ['Load-based sizing for your home', 'Venting, gas line and condensate drain checked to code', 'Thermostat setup and system start-up testing', 'Removal of the old equipment', 'Help with available utility rebates'],
    faqs: [
      { q: 'Are estimates free?', a: 'Yes. Estimates for new furnaces, boilers and air conditioners are free.' },
      { q: 'Do you offer financing?', a: 'Yes, for new systems, subject to credit approval. Ask during your estimate.' },
    ],
    related: ['furnace-repair', 'heat-pump-installation', 'thermostat-installation'],
  },
  {
    slug: 'furnace-tune-up', name: 'Furnace Tune-Up', category: 'Heating', funnel: 'maintenance',
    card: 'Fall safety and efficiency check',
    meta: `Fall furnace tune-up in Chicago: ignition, flame sensor, venting, safety controls and a carbon monoxide check. Join the Comfort Club. ${PHONE_DISPLAY}.`,
    intro: 'A fall tune-up catches worn igniters, dirty flame sensors and venting problems before the first cold snap, when every HVAC company in Chicago is booked solid.',
    signs: ['No tune-up in the last 12 months', 'Furnace was slow to start last winter', 'You’re planning to sell or rent the home', 'You want to keep the manufacturer’s warranty in good standing'],
    included: ['Ignition and flame sensor cleaning and testing', 'Venting and combustion safety check', 'Safety controls and limit switch tests', 'Carbon monoxide check', 'Filter check and airflow readings'],
    faqs: [
      { q: 'Is a tune-up included in the Comfort Club?', a: 'Yes. Members get a fall heating tune-up and a spring AC tune-up each year, plus priority appointments and repair discounts.' },
    ],
    related: ['furnace-repair', 'ac-tune-up', 'carbon-monoxide-safety'],
  },
  {
    slug: 'boiler-repair', name: 'Boiler Repair', category: 'Heating', funnel: 'emergency',
    card: 'Hot-water and steam systems',
    meta: `Boiler and radiator repair for Chicago homes and two-flats: hot-water and steam systems, no heat, banging pipes, pressure problems. 24/7. ${PHONE_DISPLAY}.`,
    intro: 'Chicago still runs on boilers: hot-water systems in bungalows and steam in greystones and two-flats. We troubleshoot pressure, air in the lines, low-water cut-offs, zone valves and circulators, and keep old radiator systems running safely.',
    signs: ['Some radiators cold while others are hot', 'Banging or hammering steam pipes', 'Pressure gauge too high or too low', 'Water around the boiler or a relief valve dripping', 'Boiler locks out or won’t fire'],
    included: ['Pressure, expansion tank and relief valve checks', 'Bleeding and balancing hot-water systems', 'Steam system venting and pitch troubleshooting', 'Circulator, zone valve and low-water cut-off repair'],
    faqs: [
      { q: 'Do you work on steam heat?', a: 'Yes. We service both hot-water and steam boilers, including the older systems common in Chicago greystones and two-flats.' },
      { q: 'Why are my steam pipes banging?', a: 'Usually trapped condensate from poor pipe pitch, failed air vents or an overfilled boiler. It’s worth a service visit, because the cause can also waste fuel.' },
    ],
    related: ['boiler-installation', 'thermostat-installation', 'carbon-monoxide-safety'],
  },
  {
    slug: 'boiler-installation', name: 'Boiler Installation', category: 'Heating', funnel: 'quote',
    card: 'Boilers for homes and two-flats',
    meta: `New boiler installation for Chicago homes and two-flats: high-efficiency hot-water and steam boilers, sized right. Free estimates. ${PHONE_DISPLAY}.`,
    intro: 'Replacing a boiler means matching it to your radiators, piping and building, not just the old nameplate. We size the boiler to the home’s heat loss and the existing radiation, then give you options in writing.',
    signs: ['Boiler is 20+ years old or leaking', 'Repeated lockouts or repairs', 'High gas bills for an older system', 'Converting a two-flat to separate heat'],
    included: ['Heat-loss and radiation survey', 'Hot-water or steam options explained', 'Venting and gas piping to code', 'Start-up, pressure and safety testing', 'Rebate guidance for qualifying equipment'],
    faqs: [
      { q: 'Can I switch from steam to hot water?', a: 'Sometimes. It depends on the piping and radiators. We’ll look at your system and explain the trade-offs during a free estimate.' },
    ],
    related: ['boiler-repair', 'heat-pump-installation', 'furnace-installation'],
  },
  {
    slug: 'heat-pump-repair', name: 'Heat Pump Repair', category: 'Heating', funnel: 'emergency',
    card: 'Cold-climate and dual-fuel systems',
    meta: `Heat pump repair in Chicago: cold-climate and dual-fuel systems, defrost problems, refrigerant leaks and error codes. 24/7 service. ${PHONE_DISPLAY}.`,
    intro: 'Heat pumps work hard in a Chicago winter. We diagnose defrost-cycle problems, reversing valves, refrigerant charge and dual-fuel controls so your system switches to backup heat when it should.',
    signs: ['Outdoor unit iced over and not defrosting', 'Blowing cool air in heat mode', 'Backup or auxiliary heat running constantly', 'Error codes on a mini-split or thermostat'],
    included: ['Refrigerant charge and leak checks (EPA 608 certified)', 'Defrost control and sensor testing', 'Dual-fuel changeover settings', 'Electrical and capacitor tests'],
    faqs: [
      { q: 'Do heat pumps work in Chicago winters?', a: 'Cold-climate heat pumps can heat efficiently well below freezing, and dual-fuel setups switch to a gas furnace on the coldest days.' },
    ],
    related: ['heat-pump-installation', 'mini-split-repair', 'refrigerant-leak-repair'],
  },
  {
    slug: 'heat-pump-installation', name: 'Heat Pump Installation', category: 'Heating', funnel: 'quote',
    card: 'Ducted, ductless and dual fuel',
    meta: `Heat pump installation in Chicago: cold-climate, ducted, ductless and dual-fuel systems. Free estimates and rebate help. Call ${PHONE_DISPLAY}.`,
    intro: 'A heat pump can heat and cool, and paired with a gas furnace (dual fuel) it handles even the coldest Chicago weeks. We help you pick ducted, ductless or dual fuel based on your home, not a sales script.',
    signs: ['Replacing an old AC and furnace together', 'Adding efficient heat to rooms without ductwork', 'Interested in utility rebates and federal incentives'],
    included: ['Load calculation and equipment matching', 'Ducted, ductless or dual-fuel options', 'Line set, electrical and condensate work', 'Rebate and incentive guidance'],
    faqs: [
      { q: 'Are there rebates for heat pumps?', a: 'Often. ComEd, local gas utilities and federal programs change their rules, so we check what applies to your equipment and address.' },
    ],
    related: ['heat-pump-repair', 'mini-split-installation', 'furnace-installation'],
  },
  {
    slug: 'thermostat-installation', name: 'Thermostats & Zoning', category: 'Heating', funnel: 'quick',
    card: 'Smart thermostats and zoning',
    meta: `Smart thermostat installation and HVAC zoning in Chicago: even temperatures across floors and lower bills. Call ${PHONE_DISPLAY}.`,
    intro: 'Hot upstairs, cold basement? Zoning and the right thermostat setup can even out temperatures across floors, which helps a lot in Chicago’s tall, narrow homes.',
    signs: ['Big temperature differences between floors', 'Old mercury or non-programmable thermostat', 'Wanting remote or smart control'],
    included: ['Thermostat compatibility check (including heat pumps and boilers)', 'Wiring and C-wire solutions', 'Zoning dampers and controls', 'Setup and walkthrough'],
    faqs: [{ q: 'Will a smart thermostat work with my boiler?', a: 'Most will, with the right wiring. We check compatibility first.' }],
    related: ['furnace-installation', 'boiler-repair', 'heat-pump-installation'],
  },
  // ───────────── Cooling
  {
    slug: 'ac-repair', name: 'AC Repair', category: 'Cooling', funnel: 'emergency',
    card: 'Warm air, leaks, frozen coils',
    meta: `AC not cooling, not turning on or freezing up? Air conditioner repair in Chicago and nearby suburbs, 24/7, EPA 608 certified. Call ${PHONE_DISPLAY}.`,
    intro: 'Most no-cooling calls trace back to a handful of parts: capacitors, contactors, clogged drains, dirty coils and refrigerant leaks. We find the actual cause and quote the repair before we start.',
    signs: ['Blowing warm air', 'Outdoor unit humming but the fan won’t spin', 'Ice on the refrigerant lines or indoor coil', 'Water leaking from the indoor unit', 'Breaker trips when the AC starts'],
    included: ['Electrical, capacitor and contactor tests', 'Refrigerant superheat/subcooling readings', 'Condensate drain clearing', 'Coil and airflow checks'],
    faqs: [
      { q: 'Why is my AC freezing up?', a: 'Usually low airflow (a dirty filter or coil) or low refrigerant from a leak. Turn the system off to let it thaw and call us.' },
      { q: 'Do you repair rooftop units?', a: 'Yes. We repair and replace central air and rooftop units common on Chicago two-flats and townhomes.' },
    ],
    related: ['ac-installation', 'ac-tune-up', 'refrigerant-leak-repair'],
  },
  {
    slug: 'ac-installation', name: 'AC Installation', category: 'Cooling', funnel: 'quote',
    card: 'Matched systems, free estimates',
    meta: `Central air conditioner installation in Chicago: matched, properly sized systems. Free written estimates, financing available. Call ${PHONE_DISPLAY}.`,
    intro: 'An AC that’s too big short-cycles and leaves the house clammy; too small and it can’t keep up in July. We size it to your home and match the indoor and outdoor equipment.',
    signs: ['AC is 12–15+ years old', 'Uses phased-out R-22 refrigerant', 'Repeated refrigerant leaks', 'Can’t keep up on hot days'],
    included: ['Load-based sizing', 'Matched coil and condenser', 'New line set or flush as needed', 'Start-up and charge verification', 'Rebate guidance'],
    faqs: [{ q: 'What refrigerant do new systems use?', a: 'Newer systems are moving to lower-impact refrigerants such as R-454B. We’ll explain what your options use.' }],
    related: ['ac-repair', 'heat-pump-installation', 'mini-split-installation'],
  },
  {
    slug: 'ac-tune-up', name: 'AC Tune-Up', category: 'Cooling', funnel: 'maintenance',
    card: 'Spring cooling check',
    meta: `Spring AC tune-up in Chicago: coil cleaning, capacitor and refrigerant checks, drain flush. Included in the Comfort Club. Call ${PHONE_DISPLAY}.`,
    intro: 'A spring tune-up catches weak capacitors, dirty coils and clogged drains before the first heat wave, when same-day appointments disappear.',
    signs: ['No tune-up in the last 12 months', 'AC struggled last summer', 'Outdoor coil is visibly dirty'],
    included: ['Condenser coil cleaning', 'Capacitor and electrical checks', 'Refrigerant readings', 'Condensate drain flush', 'Thermostat and airflow check'],
    faqs: [{ q: 'When should I schedule an AC tune-up?', a: 'Spring (March to May) is ideal. Comfort Club members are contacted automatically.' }],
    related: ['ac-repair', 'furnace-tune-up', 'refrigerant-leak-repair'],
  },
  {
    slug: 'mini-split-installation', name: 'Mini-Split Installation', category: 'Cooling', funnel: 'quote',
    card: 'Ductless for older homes',
    meta: `Ductless mini-split installation in Chicago: heating and cooling for older homes, additions and rooms without ductwork. Free estimates. ${PHONE_DISPLAY}.`,
    intro: 'Ductless mini-splits are a great fit for Chicago homes with radiators and no ductwork, attic conversions and additions. They heat and cool, room by room.',
    signs: ['Home heated by radiators with no central air', 'Hot attic bedroom or addition', 'Window units you want to retire'],
    included: ['Room-by-room sizing', 'Indoor head placement planning', 'Line set, drain and electrical work', 'Start-up and controls walkthrough'],
    faqs: [{ q: 'Can a mini-split heat in winter?', a: 'Yes. Cold-climate mini-splits heat efficiently in Chicago winters and can supplement a boiler.' }],
    related: ['mini-split-repair', 'heat-pump-installation', 'ac-installation'],
  },
  {
    slug: 'mini-split-repair', name: 'Mini-Split Repair', category: 'Cooling', funnel: 'emergency',
    card: 'Error codes, drainage, refrigerant',
    meta: `Ductless mini-split repair in Chicago: error codes, leaks, drainage and refrigerant problems on all major brands. Call ${PHONE_DISPLAY}.`,
    intro: 'Mini-splits show error codes for a reason. We read them, test sensors and boards, clear drain lines and repair refrigerant leaks.',
    signs: ['Blinking error lights', 'Water dripping from the indoor head', 'Weak airflow or musty smell', 'Not heating or cooling'],
    included: ['Error-code diagnosis', 'Drain line and pump clearing', 'Coil and blower wheel cleaning', 'Refrigerant leak search'],
    faqs: [{ q: 'Why does my mini-split smell musty?', a: 'Mold or debris on the blower wheel and coil. A deep cleaning usually solves it.' }],
    related: ['mini-split-installation', 'refrigerant-leak-repair', 'heat-pump-repair'],
  },
  {
    slug: 'refrigerant-leak-repair', name: 'Refrigerant Leak Repair', category: 'Cooling', funnel: 'quick',
    card: 'Find, fix and recharge',
    meta: `AC and heat pump refrigerant leak detection and repair in Chicago by EPA 608-certified technicians. Find, fix, recharge. ${PHONE_DISPLAY}.`,
    intro: 'Topping off refrigerant without finding the leak just wastes money. We locate the leak, repair it when it’s repairable, and recharge to the manufacturer’s specs.',
    signs: ['AC needs refrigerant every year', 'Ice on lines or coil', 'Hissing near the indoor or outdoor unit', 'Long run times with weak cooling'],
    included: ['Electronic and bubble leak detection', 'Repair or replacement options', 'Evacuation and recharge to spec', 'EPA 608-compliant handling'],
    faqs: [{ q: 'Is it worth fixing a leak on an old AC?', a: 'It depends on the leak location and system age. We’ll compare repair and replacement costs honestly.' }],
    related: ['ac-repair', 'ac-installation', 'heat-pump-repair'],
  },
  // ───────────── Air quality
  {
    slug: 'whole-home-humidifiers', name: 'Whole-Home Humidifiers', category: 'Air Quality', funnel: 'quick',
    card: 'Comfort in dry Chicago winters',
    meta: `Whole-home humidifier installation in Chicago: relief from dry winter air, static and cracked woodwork. Call ${PHONE_DISPLAY}.`,
    intro: 'Forced-air heat in a Chicago winter can drop indoor humidity low enough to cause static shocks, dry skin and cracked hardwood. A whole-home humidifier fixes it at the source.',
    signs: ['Static shocks and dry skin all winter', 'Gaps in hardwood floors', 'Running several portable humidifiers'],
    included: ['Bypass, fan-powered or steam options', 'Water line and drain connection', 'Humidistat setup'],
    faqs: [{ q: 'Is a whole-home humidifier better than portable units?', a: 'It treats the whole house with far less upkeep, and there are no tanks to refill.' }],
    related: ['air-purifiers', 'furnace-installation', 'whole-home-dehumidifiers'],
  },
  {
    slug: 'whole-home-dehumidifiers', name: 'Whole-Home Dehumidifiers', category: 'Air Quality', funnel: 'quick',
    card: 'Damp basements and summer humidity',
    meta: `Whole-home dehumidifiers for damp Chicago basements and humid summers: less mold, better comfort. Call ${PHONE_DISPLAY}.`,
    intro: 'Chicago basements and humid summers are a recipe for musty air and mold. A ducted dehumidifier controls moisture all year without emptying buckets.',
    signs: ['Musty basement smell', 'Condensation on windows or pipes', 'AC runs but the house still feels clammy'],
    included: ['Sizing for basement or whole home', 'Ducted or standalone install', 'Condensate drainage'],
    faqs: [{ q: 'What humidity should my house be?', a: 'Most homes are comfortable between about 40 and 50 percent relative humidity in summer.' }],
    related: ['whole-home-humidifiers', 'air-purifiers', 'ac-repair'],
  },
  {
    slug: 'air-purifiers', name: 'Air Purifiers', category: 'Air Quality', funnel: 'quick',
    card: 'Filtration and media cabinets',
    meta: `Whole-home air filtration and purifiers in Chicago: media cabinets and high-efficiency filters for allergies and dust. ${PHONE_DISPLAY}.`,
    intro: 'Your HVAC system moves all the air in your home, so it’s the best place to clean it. Media cabinets and high-efficiency filtration catch dust, pollen and pet dander.',
    signs: ['Allergies or asthma at home', 'Dust returns quickly after cleaning', 'Pets in the home'],
    included: ['Filter cabinet sizing and install', 'Airflow (static pressure) check', 'Filter schedule setup'],
    faqs: [{ q: 'Will a thicker filter hurt my system?', a: 'Not if the cabinet and ductwork are sized for it. We check airflow before and after.' }],
    related: ['uv-air-sanitizers', 'ductwork-repair', 'whole-home-humidifiers'],
  },
  {
    slug: 'uv-air-sanitizers', name: 'UV Air Sanitizers', category: 'Air Quality', funnel: 'quick',
    card: 'UV lights for coils and air',
    meta: `UV light installation for HVAC coils and air in Chicago: keep the coil clean and reduce microbial growth. Call ${PHONE_DISPLAY}.`,
    intro: 'UV lights mounted near the indoor coil help keep it clean of mold and biofilm, which keeps airflow and efficiency up.',
    signs: ['Musty smell when the AC runs', 'Recurring coil growth', 'Household members with allergies'],
    included: ['Coil or air-stream UV options', 'Safe mounting and electrical', 'Bulb replacement schedule'],
    faqs: [{ q: 'Are UV lights worth it?', a: 'They’re most useful for keeping coils clean in humid conditions. We’ll tell you honestly if your home would benefit.' }],
    related: ['air-purifiers', 'ac-tune-up', 'ductwork-repair'],
  },
  {
    slug: 'ductwork-repair', name: 'Ductwork Repair', category: 'Air Quality', funnel: 'quick',
    card: 'Leaks, balancing and returns',
    meta: `Ductwork repair in Chicago: sealing leaks, balancing airflow and adding returns for even temperatures. Call ${PHONE_DISPLAY}.`,
    intro: 'Leaky or undersized ducts waste energy and leave rooms hot or cold. We seal, balance and add returns where older homes need them.',
    signs: ['Rooms that never get warm or cool', 'Whistling vents or loud returns', 'Dusty home even with a good filter'],
    included: ['Static pressure and airflow testing', 'Sealing accessible leaks', 'Balancing dampers', 'Adding or enlarging returns'],
    faqs: [{ q: 'Do I need duct cleaning or duct repair?', a: 'Comfort problems are usually leaks or undersized returns, not dirt. We test before recommending anything.' }],
    related: ['air-purifiers', 'thermostat-installation', 'furnace-installation'],
  },
  {
    slug: 'carbon-monoxide-safety', name: 'Carbon Monoxide Safety', category: 'Air Quality', funnel: 'emergency',
    card: 'CO testing and alarms',
    meta: 'Carbon monoxide testing and CO alarm guidance for Chicago homes with furnaces, boilers and water heaters. If your CO alarm sounds, leave and call 911.',
    intro: 'Every gas furnace, boiler and water heater can produce carbon monoxide if venting or combustion goes wrong. We test combustion and venting and check that your CO alarms are where they should be.',
    signs: ['CO alarm chirping or sounding', 'Headaches or nausea that ease when you leave home', 'Soot or rust around the furnace or vent', 'Yellow or flickering burner flames'],
    included: ['Combustion and ambient CO testing', 'Venting and chimney liner check', 'Heat exchanger inspection', 'CO alarm placement advice'],
    faqs: [{ q: 'What should I do if my CO alarm goes off?', a: 'Leave the home immediately and call 911 or your gas utility. Once you’re safe, call us to find the source.' }],
    related: ['furnace-repair', 'boiler-repair', 'furnace-tune-up'],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
export const servicesIn = (category: CategoryName) => services.filter((s) => s.category === category);
