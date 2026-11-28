/**
 * Area page content for /hvac-<slug>/ (37 pages). Owner: Elena Brooks (Local SEO Architect).
 *
 * Source: the owner's own published WordPress area pages (aircareprohvac.com/hvac-<slug>/),
 * ported and expanded. Rules:
 * - Local facts (housing stock, sub-neighborhoods, utilities, "at a glance" stats) come ONLY from the source pages.
 *   Expansions explain how common HVAC equipment behaves; no invented landmarks, prices, response times or reviews.
 * - Rebate amounts keep the source's utility attribution, phrased "For 2026, <utility> lists…" + "check current amounts".
 * - Phone comes from business.* (never hard-coded). FAQ answers are plain text (FaqSection mirrors them into FAQPage).
 * - nearbySlugs = the source page's "Nearby areas we serve" list (geographic neighbors).
 */
import { business } from './business';
import type { Faq } from './services';

export interface AreaSection {
  h2: string;
  /** Trusted, hand-written HTML (p, h3, ul, a). Rendered with set:html. */
  html: string;
}

export interface AreaContent {
  /** Keyword-led H1, includes the place name. */
  h1: string;
  /** <title>, ≤ 60 characters. */
  title: string;
  /** Meta description, ≤ 155 characters. */
  meta: string;
  /** Plain-text hero intro. */
  intro: string;
  sections: AreaSection[];
  faqs: Faq[];
  /** Geographic neighbors from the source page's "Nearby areas" list. */
  nearbySlugs: string[];
}

const phone = business.phoneDisplay;

const ext = (href: string, label: string) => `<a href="${href}" target="_blank" rel="noopener">${label}</a>`;
const glance = (place: string, items: Array<[fact: string, label: string, url: string]>) =>
  `<h3>${place} at a glance</h3><ul>${items.map(([fact, label, url]) => `<li>${fact} <span class="src">Source: ${ext(url, label)}</span></li>`).join('')}</ul>`;

const CONFIRM = '<p>Rebate amounts and rules change. We confirm what applies when we quote new equipment.</p>';

const PG_URL = 'https://www.peoplesgasdelivery.com/savings/rebates-residential';
const PG_AMOUNTS = `<p>For 2026, Peoples Gas lists rebates of $200 for a 95% AFUE furnace, $225 for 97% AFUE or higher, $350 for a hot-water boiler, $150 for a steam boiler, $500 for a combination boiler with domestic hot water, and $25 for a smart thermostat. Single-family homes, two-flats and individually metered condos and townhomes qualify. Check current amounts before you buy: ${ext(PG_URL, 'Peoples Gas Home Energy Rebates')}.</p>`;
/** Chicago neighborhoods: Peoples Gas + ComEd (per the source pages). `local` ties the rebate list to the area's homes. */
const peoplesGas = (place: string, local: string) =>
  `<p>${place} is in Peoples Gas and ComEd territory: natural gas comes from Peoples Gas and electricity from ComEd.</p><p>${local}</p>${PG_AMOUNTS}${CONFIRM}`;

const NICOR_URL = 'https://www.nicorgas.com/residential/ways-to-save/rebates.html';
const NICOR_AMOUNTS = `<p>For 2026, Nicor Gas lists furnace rebates of $150 to $225 depending on efficiency, plus rebates on boilers and smart thermostats. Check current amounts before you buy: ${ext(NICOR_URL, 'Nicor Gas Energy Efficiency Program rebates')}.</p>`;
const nicor = (place: string, local: string) =>
  `<p>Most ${place} homes get natural gas from Nicor Gas and electricity from ComEd. Your gas bill shows which utility serves your address.</p><p>${local}</p>${NICOR_AMOUNTS}${CONFIRM}`;

const emergencyFaq = (place: string): Faq => ({
  q: `Do you offer emergency service in ${place}?`,
  a: `Yes, 24/7, including nights and holidays. Call or text ${phone} for no heat, no cooling or a boiler that won’t fire, or request dispatch on our emergency HVAC page.`,
});

/* ------------------------------------------------------------------ */
/* Chicago hub                                                         */
/* ------------------------------------------------------------------ */
const hub: Record<string, AreaContent> = {
  chicago: {
    h1: 'HVAC Repair in Chicago: Furnace, Boiler & AC Service',
    title: 'HVAC Repair in Chicago, IL | 24/7 | Chicago Aircare Pro',
    meta: 'Furnace, boiler and AC repair and installation across Chicago’s North, Northwest and West Sides. Two-flat, greystone and bungalow know-how. 24/7.',
    intro: `${business.displayName} repairs, replaces and maintains furnaces, boilers, air conditioners, heat pumps and mini-splits in homes across Chicago’s North Side, Northwest Side and West Side neighborhoods, with 24/7 emergency service. We diagnose first, show you options with prices before any work starts, and repair what can be repaired.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Chicago',
        html: `<p>Chicago’s housing stock changes block by block: brick bungalows across the Bungalow Belt, greystone and brick two- and three-flats, frame workers’ cottages, vintage courtyard buildings and new-construction single-family homes and condos. Each comes with different heating and cooling setups, and we work on all of them.</p>
<p>That variety is why a Chicago service call starts with the building, not just the equipment. A two-flat sharing one steam boiler, a bungalow whose basement furnace never reached the finished attic, and a new-construction home with two zoned systems each need a different fix. One crew covers gas furnaces, hot-water and steam boilers, central air, heat pumps and ductless mini-splits, so the same technicians handle both seasons.</p>
${glance('Chicago', [['Chicago has about 1.27 million housing units, from bungalows and two-flats to high-rises.', 'CMAP Chicago Housing Profile', 'https://cmap.illinois.gov/wp-content/uploads/Chicago-Housing-Profile.pdf']])}`,
      },
      {
        h2: 'Common heating and cooling issues in Chicago',
        html: `<h3>Two-flats and boilers</h3>
<p>Many two- and three-flats still share a single hot-water or steam boiler. Owners often ask about separating heat by unit: zoning the existing boiler, or adding separate systems. The right choice depends on the piping. We trace how supply and return lines run to each floor first. If they are already split by unit, zone valves or separate circulators can give each unit its own thermostat without replacing a boiler that still has years left.</p>
<h3>Bungalows with finished attics</h3>
<p>Bungalow attics finished into bedrooms are often hot in summer and cool in winter, because the original ductwork never reached them. Ductless mini-splits or added duct runs and returns are the usual fixes. Turning the basement furnace up rarely helps on its own: it overheats the main floor while the attic still lags. A ductless head on its own thermostat treats the attic as the separate space it is.</p>
<h3>Condensing furnace venting</h3>
<p>High-efficiency furnaces vent through PVC on an outside wall. Placement near walkways, gangways and windows, and protection from snow drifts, matter in tight city lots. Removing a chimney-vented furnace can also leave the water heater alone on an oversized chimney, so we check its venting on every replacement.</p>`,
      },
      {
        h2: 'Furnace repair, furnace installation and AC repair in Chicago',
        html: `<p>Most calls we get in the city fall into three jobs. Each has its own page with what we check and the causes we see most in Chicago homes:</p>
<ul>
<li><a href="/furnace-repair-chicago/">Furnace repair in Chicago</a>: no heat, short-cycling, ignition and flame-sensor faults, blower and pressure-switch problems, day or night.</li>
<li><a href="/furnace-installation-chicago/">Furnace installation in Chicago</a>: sized to the home with a load calculation, with the chimney and water heater venting checked on every replacement.</li>
<li><a href="/ac-repair-chicago/">AC repair in Chicago</a>: central air, heat pumps and ductless systems, from capacitors and contactors to refrigerant leaks.</li>
</ul>
<p>For radiator heat, see <a href="/boiler-repair/">boiler repair</a> for hot-water and steam systems. Estimates on new systems are free.</p>`,
      },
      {
        h2: 'Chicago neighborhoods we serve',
        html: `<p>We focus on the North Side, Northwest Side and West Side. Each neighborhood page covers its own housing stock and the problems we see there:</p>
<ul>
<li><strong>North Side:</strong> greystones and cast-iron radiators in <a href="/hvac-lincoln-park/">Lincoln Park</a>, condo closet furnaces in <a href="/hvac-lakeview/">Lakeview</a>, vintage steam buildings in <a href="/hvac-uptown/">Uptown</a> and <a href="/hvac-rogers-park/">Rogers Park</a>, and finished bungalow attics in <a href="/hvac-lincoln-square/">Lincoln Square</a>.</li>
<li><strong>Northwest Side:</strong> the Bungalow Belt around <a href="/hvac-portage-park/">Portage Park</a>, Cape Cods in <a href="/hvac-jefferson-park/">Jefferson Park</a>, converted gravity ductwork in <a href="/hvac-irving-park/">Irving Park</a>, and boulevard greystones in <a href="/hvac-logan-square/">Logan Square</a>.</li>
<li><strong>West Side:</strong> two-system new construction in <a href="/hvac-bucktown/">Bucktown</a>, lofts and rooftop condensers in <a href="/hvac-wicker-park/">Wicker Park</a> and <a href="/hvac-west-town/">West Town</a>, and large radiator-heated homes in <a href="/hvac-austin/">Austin</a>.</li>
</ul>
<p>Not sure your block is covered? Call or text ${phone} with your address.</p>`,
      },
      {
        h2: 'Utilities and rebates in Chicago',
        html: `<p>Homes in Chicago get natural gas from Peoples Gas and electricity from ComEd.</p>${PG_AMOUNTS}${CONFIRM}
<p>New-system estimates are free, and financing is available through ${business.financingPartner}, subject to credit approval.</p>`,
      },
    ],
    faqs: [
      { q: 'Do you serve all of Chicago?', a: 'We focus on North Side and West Side neighborhoods, including the Northwest Side. See the full list of service areas, or call to confirm your address.' },
      { q: 'Can a shared boiler in a Chicago two-flat be split by unit?', a: 'Often, yes. If the piping already runs separately to each floor, zone valves or separate circulators can give each unit its own thermostat. If it doesn’t, separate systems may be the better route. We inspect the piping before recommending either.' },
      { q: 'Do you service condo units with their own furnace or AC?', a: 'Yes, when the equipment serves only your unit. Central boilers and rooftop equipment serving several units belong to the association, which decides who services them.' },
      { q: 'Are estimates free in Chicago?', a: 'Estimates for new furnaces, boilers, air conditioners and heat pumps are free. Repair visits start with a diagnosis, and you get the price before any work begins.' },
      emergencyFaq('Chicago'),
    ],
    nearbySlugs: ['lincoln-park', 'logan-square', 'portage-park', 'rogers-park'],
  },
};

/* ------------------------------------------------------------------ */
/* Chicago North Side                                                */
/* ------------------------------------------------------------------ */
const northSide: Record<string, AreaContent> = {
  'lincoln-park': {
    h1: 'Boiler, Furnace & AC Repair in Lincoln Park, Chicago',
    title: 'HVAC Repair in Lincoln Park, Chicago | Chicago Aircare Pro',
    meta: 'Boiler, radiator, furnace and AC service for Lincoln Park greystones, row houses, condos and multi-system rehabs. 24/7 emergency HVAC. Call or text.',
    intro: `${business.displayName} provides heating and cooling repair, replacement and maintenance for Lincoln Park homes, from North Avenue to Diversey and the lakefront to the river. Greystones on cast-iron radiators, row houses with tight mechanical rooms and big rehabs with two or three systems all get the same approach: diagnose first, options with prices, then the work you approve.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Lincoln Park',
        html: `<p>Lincoln Park is one of Chicago’s older neighborhoods: 19th-century row houses and brownstones, greystones, brick two-flats and vintage courtyard condos, alongside large single-family rehabs. Many homes have been renovated more than once, so the mechanical systems are often a mix of original and new.</p>
<p>In practice that means a boiler from one era feeding radiators from another, a condenser added by one owner and an attic air handler added by the next. Before we recommend anything, we work out what each piece of equipment serves and how it connects, so a repair on one system doesn’t create a problem on another.</p>
${glance('Lincoln Park', [
  ['About 34% of Lincoln Park homes were built before 1940.', 'CMAP Lincoln Park Community Data Snapshot (ACS 2020-24)', 'https://www.cmap.illinois.gov/wp-content/uploads/dlm_uploads/Lincoln-Park.pdf'],
  ['About 62% of homes are in buildings with five or more units, and about 55% are renter-occupied.', 'CMAP Lincoln Park Community Data Snapshot (ACS 2020-24)', 'https://www.cmap.illinois.gov/wp-content/uploads/dlm_uploads/Lincoln-Park.pdf'],
])}`,
      },
      {
        h2: 'Common heating and cooling issues in Lincoln Park',
        html: `<h3>Original boilers with cast-iron radiators</h3>
<p>Many greystones and older homes still heat with hot-water or steam boilers. Keeping radiators balanced, vents working and the boiler’s safety controls healthy is regular work here. On hot-water systems that means purging air, checking the expansion tank and circulator; on steam it means working radiator vents, correct water level and a tested low-water cutoff. See <a href="/boiler-repair/">boiler repair</a>.</p>
<h3>Multi-system rehabs</h3>
<p>Large rehabs often have two or three furnaces or air handlers, some in attics, with zoning. Attic air handlers need their condensate drains and safety switches checked every season. A clogged drain above a finished ceiling is one of the costliest small failures in a rehab, and a working float switch is what shuts the system off before water comes through.</p>
<h3>Tight mechanical spaces</h3>
<p>Row houses and narrow lots leave little room for equipment and venting. Equipment selection and vent routing have to fit the space. Sometimes the right furnace is the one that fits the closet with room left for a proper return and a filter you can actually change.</p>`,
      },
      {
        h2: 'Adding cooling to a radiator-heated Lincoln Park home',
        html: `<p>Greystones and row houses heated by radiators never had ductwork, so central air is not a simple add-on. The two options that work without opening plaster walls are <a href="/mini-split-installation/">ductless mini-splits</a>, with line sets routed through closets, attics or the exterior, and small high-velocity duct systems where there is attic or closet space for them. Ductless heads also give you heat on their own thermostats in spring and fall, before the boiler needs to run. We assess the building, the electrical panel and where an outdoor unit can sit before quoting.</p>`,
      },
      {
        h2: 'Utilities and rebates in Lincoln Park',
        html: peoplesGas('Lincoln Park', 'Because so many Lincoln Park homes run hot-water or steam boilers, the boiler rebates matter here as much as the furnace ones. Individually metered condos also qualify, which covers many courtyard-building units with their own equipment.'),
      },
    ],
    faqs: [
      { q: 'Can you add central air to a Lincoln Park greystone heated by radiators?', a: 'Usually with ductless mini-splits, or a small high-velocity duct system where there is space for it. We assess the building first.' },
      { q: 'Is the furnace in my Lincoln Park condo mine or the building’s?', a: 'If the furnace, air handler or condenser serves only your unit, it is usually yours to maintain, and your condo declaration says so. Central boilers and rooftop equipment serving several units belong to the association. Check before booking; we service equipment that is yours.' },
      { q: 'How often should an attic air handler be checked?', a: 'Every cooling season. We clear the condensate drain, test the safety float switch and check the filter, because a blocked drain over a finished ceiling can cause water damage.' },
      emergencyFaq('Lincoln Park'),
    ],
    nearbySlugs: ['lakeview', 'old-town-gold-coast', 'bucktown'],
  },

  lakeview: {
    h1: 'Furnace, Boiler & AC Repair in Lakeview, Chicago',
    title: 'HVAC Repair in Lakeview, Chicago | Chicago Aircare Pro',
    meta: 'Closet furnace, condo AC, steam boiler and mini-split service in Lakeview, Wrigleyville and Northalsted. 24/7 emergency HVAC. Call or text.',
    intro: `${business.displayName} services furnaces, boilers, central air and mini-splits in Lakeview, including Wrigleyville and Northalsted, with 24/7 emergency service. Much of our Lakeview work is in condo units with their own closet furnace and a condenser on a rear deck or roof, plus two-flats and courtyard buildings still on boilers.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Lakeview',
        html: `<p>Lakeview is dense with two- and three-flats, vintage courtyard buildings converted to condos, greystones and frame cottages, plus newer townhomes and single-family homes. Condo conversions mean many units now have their own furnace and AC in a closet or utility room.</p>
<p>Those conversions shaped the equipment. A unit that was once heated by a shared boiler may now have a compact furnace or air handler squeezed into a hall closet, ducts run through soffits, and a condenser on the back porch. It works well when the return air, filter and outdoor clearance were planned properly, and it’s noisy and short-lived when they weren’t.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in Lakeview',
        html: `<h3>Condo units with closet furnaces</h3>
<p>Compact furnaces and air handlers in closets need adequate return air and combustion air. We see filters and returns that are too small for the equipment, causing noise and overheating. We measure static pressure to confirm it: a choked return makes the blower work harder, whistles at the grille and can trip the furnace’s high-limit safety.</p>
<h3>Condensers on rear decks and roofs</h3>
<p>Outdoor units on back porches and flat roofs need secure mounting, clearance and access. We plan for that during installation and service. A condenser boxed in by railings or storage recirculates its own hot air and loses capacity on the hottest days.</p>
<h3>Steam in courtyard buildings</h3>
<p>Courtyard buildings that kept central steam heat rely on working vents and a properly maintained boiler for even heat across units. One unit roasting while another stays cold is usually a venting or balancing problem, not a reason to replace the boiler.</p>`,
      },
      {
        h2: 'Lakeview condo owners: what we service',
        html: `<p>If the furnace, air handler, mini-split or condenser serves only your unit, we can repair, maintain or replace it. Building-wide boilers and shared rooftop equipment are the association’s call. For roof or deck work, we coordinate access with the building where needed. For replacements in tight closets, we size the equipment to the unit’s actual load and make sure the return, filter rack and service access fit, so the new system is quieter than the one it replaces. See <a href="/ac-repair/">AC repair</a> and <a href="/furnace-repair/">furnace repair</a>.</p>`,
      },
      {
        h2: 'Utilities and rebates in Lakeview',
        html: peoplesGas('Lakeview', 'Individually metered condos and townhomes qualify for the Peoples Gas rebates, which covers many converted Lakeview units with their own furnace. Two-flats qualify too.'),
      },
    ],
    faqs: [
      { q: 'Do you service condo units with their own furnace?', a: 'Yes, as long as the equipment serves your unit. For building-wide systems, the building’s management decides who services them.' },
      { q: 'Why is the furnace in my Lakeview condo closet so loud?', a: 'Most often the return air or filter is too small for the equipment, so the blower strains. We measure static pressure to find the cause before suggesting a fix.' },
      { q: 'Can you replace a condenser on a rear deck or roof?', a: 'Yes, where there is safe access. We plan mounting, clearance and access for future service as part of the job.' },
      emergencyFaq('Lakeview'),
    ],
    nearbySlugs: ['lincoln-park', 'north-center', 'uptown'],
  },

  'old-town-gold-coast': {
    h1: 'HVAC Repair in Old Town & Gold Coast, Chicago',
    title: 'HVAC Repair Old Town & Gold Coast | Chicago Aircare Pro',
    meta: 'Boiler, furnace, ductless and condo HVAC service for Old Town rowhouses and Gold Coast greystones and condos. Careful work in historic homes. 24/7.',
    intro: `${business.displayName} provides heating and cooling service for rowhouses, townhomes, single-family homes and condo units with their own equipment in Old Town and the Gold Coast. Historic homes here often pair an old boiler with cooling added later, and the job is to keep both working without disturbing plaster and trim.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Old Town & Gold Coast',
        html: `<p>Old Town has Victorian rowhouses and workers’ cottages built after the 1871 fire, many renovated. The Gold Coast mixes historic mansions and greystones with high-rise buildings. Historic homes often combine old boilers with newer forced-air or ductless systems added for cooling.</p>
<p>That mix means a single home can have three generations of equipment: a boiler and radiators for heat, a ducted system added in an attic for the upper floors, and ductless heads where ducts couldn’t go. We service all three and keep track of how they work together.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in Old Town & Gold Coast',
        html: `<h3>Historic homes, modern comfort</h3>
<p>Adding cooling to older homes without disturbing plaster and trim usually means ductless heads placed carefully, or slim ducted units in closets and attics. Placement matters: a head on the right wall cools a room evenly, and line sets routed through closets or the exterior keep visible changes small.</p>
<h3>Condo units with individual systems</h3>
<p>Some condo units have their own furnaces, fan coils or heat pumps. We service unit equipment; building-wide systems are handled by building management. Fan coils and heat pumps in condos need clean filters and clear condensate drains, since a backed-up drain can leak into the unit below.</p>
<h3>Narrow lots and access</h3>
<p>Equipment often sits in tight basements or on roofs. Planning access for service and replacement matters as much as the equipment itself. Before replacing anything, we check how the old unit came in and how the new one will, including stairs, hatches and roof access.</p>`,
      },
      {
        h2: 'Boiler care in Old Town and Gold Coast homes',
        html: `<p>Older boilers keep running for decades when their controls are maintained. A yearly visit covers the burner, venting and safety controls; on hot-water systems, the expansion tank, circulator and air purging; on steam, the sight glass, low-water cutoff and radiator vents. When a boiler does need replacing, we compare like-for-like with higher-efficiency options and tell you which rebates apply. See <a href="/boiler-repair/">boiler repair</a> and <a href="/boiler-installation/">boiler installation</a>.</p>`,
      },
      {
        h2: 'Utilities and rebates in Old Town & Gold Coast',
        html: peoplesGas('Old Town &amp; Gold Coast', 'Rowhouses, single-family homes and individually metered condos and townhomes can qualify. For boiler homes, the hot-water and steam boiler rebates are usually the ones that matter.'),
      },
    ],
    faqs: [
      { q: 'Can you work in older homes without damaging finishes?', a: 'Yes. We plan line set and duct routes through closets, attics and basements to keep visible changes to a minimum.' },
      { q: 'Do you service condo fan coils and heat pumps in the Gold Coast?', a: 'Yes, when the equipment serves your unit. Building-wide systems are handled by building management.' },
      { q: 'Can my old boiler stay if I add cooling?', a: 'Usually, yes. Ductless or slim ducted cooling works alongside an existing boiler, and keeping a healthy boiler is often the better value.' },
      emergencyFaq('Old Town & Gold Coast'),
    ],
    nearbySlugs: ['lincoln-park', 'west-town', 'wicker-park'],
  },

  'lincoln-square': {
    h1: 'Furnace, Boiler & AC Repair in Lincoln Square, Chicago',
    title: 'Furnace Repair & HVAC in Lincoln Square | Chicago Aircare Pro',
    meta: 'Furnace and boiler repair, bungalow attic cooling and two-flat zoning in Lincoln Square. Local HVAC contractor, options with prices first. 24/7.',
    intro: `${business.displayName} repairs and installs heating and cooling systems in Lincoln Square, including its brick bungalows, two-flats and courtyard buildings. The most common request we hear: a finished bungalow attic that’s too hot in summer and too cold in winter.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Lincoln Square',
        html: `<p>Lincoln Square has many brick bungalows and two-flats, vintage courtyard buildings and some larger single-family homes. Finished bungalow attics are common and often the hardest rooms to keep comfortable.</p>
<p>Bungalows here usually heat the main floor from a basement furnace or boiler, and the attic was finished later, often with one small duct or none. Two-flats commonly share a boiler. Courtyard condo owners mostly cool with window units. Each of those has a well-proven fix, and the right one depends on what’s already in the building.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in Lincoln Square',
        html: `<h3>Finished attics</h3>
<p>Bungalow attic bedrooms usually have little or no ductwork. Ductless heads or a small dedicated system fix rooms that the basement furnace can’t reach. A ductless head heats too, so the attic stays comfortable in January without overheating the main floor.</p>
<h3>Two-flats sharing a boiler</h3>
<p>Owners often want separate control per unit; zoning or separate systems both work depending on the piping. If each floor already has its own supply and return loop, a zone valve or circulator per unit is usually enough. If the piping is mixed, separate systems may be simpler.</p>
<h3>Window AC replacement</h3>
<p>Courtyard condo owners replacing window units often choose ductless mini-splits for quieter, more efficient cooling. The outdoor unit location usually needs association approval, and we can help you prepare the details they ask for.</p>`,
      },
      {
        h2: 'Furnace and boiler repair in Lincoln Square',
        html: `<p>Most Lincoln Square bungalows heat with a basement furnace, and many two-flats and courtyard buildings still run on a boiler. When the heat stops, we test the thermostat and controls, ignition and flame sensor, the blower or circulator, and the venting before recommending anything. You get the findings and your options with prices before any work starts. See <a href="/furnace-repair/">furnace repair</a> and <a href="/boiler-repair/">boiler repair</a>.</p>
<p>Older furnaces here often share a chimney with the water heater. If a furnace is replaced with a high-efficiency model vented through the wall, the water heater can be left alone on a chimney that is now too big for it, so we check the venting on every replacement.</p>`,
      },
      {
        h2: 'Choosing between ductless and ducted for a Lincoln Square bungalow',
        html: `<p>If the attic is one or two rooms, a single <a href="/mini-split-installation/">ductless mini-split</a> is usually the simplest and least disruptive fix. If the whole house needs central air and there is attic space for an air handler, a small ducted system upstairs can serve the attic and drop supplies to the main floor. We compare both on cost, disruption and comfort, and show you the numbers before you choose.</p>`,
      },
      {
        h2: 'Utilities and rebates in Lincoln Square',
        html: peoplesGas('Lincoln Square', 'Two-flats qualify for the Peoples Gas program, which matters for shared-boiler buildings here. Upgrading the boiler or adding smart thermostats per unit can both be eligible.'),
      },
    ],
    faqs: [
      { q: 'What’s the best way to cool a finished bungalow attic?', a: 'Usually a ductless mini-split. It heats as well, which helps in winter too.' },
      { q: 'Can each unit in my Lincoln Square two-flat control its own heat?', a: 'Yes, either by zoning a shared boiler, if the piping is arranged by unit, or with separate systems. We inspect the piping first.' },
      { q: 'Can I replace window AC units in a courtyard condo?', a: 'Often with a ductless mini-split, once the association approves the outdoor unit location. It is quieter and frees your windows.' },
      { q: 'Do you repair furnaces in Lincoln Square bungalows and two-flats?', a: 'Yes, along with hot-water and steam boilers. We diagnose first and give you your options with prices before any work starts.' },
      emergencyFaq('Lincoln Square'),
    ],
    nearbySlugs: ['ravenswood', 'north-center', 'albany-park'],
  },

  'north-center': {
    h1: 'Furnace & AC Repair in North Center, Chicago',
    title: 'Furnace & AC Repair in North Center | Chicago Aircare Pro',
    meta: 'High-efficiency furnace, zoning and AC service in North Center and Roscoe Village. PVC venting, two-zone systems, basement finishing. 24/7.',
    intro: `${business.displayName} provides heating and cooling service in North Center homes, from frame houses and bungalows to new-construction single-family homes. Many newer homes here run high-efficiency furnaces with side-wall venting and two-zone systems, and they need a technician who understands both.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in North Center',
        html: `<p>North Center, including Roscoe Village nearby, has frame houses, brick bungalows and two-flats, and many newer single-family homes built on older lots. Newer homes commonly have high-efficiency furnaces with side-wall PVC venting and two-zone systems.</p>
<p>The older homes bring the usual Chicago issues: original ductwork, boilers in some two-flats, attics that run warm. The newer ones bring zoning controls, variable-speed blowers and condensing furnaces, which are efficient but need their condensate drains, vent terminals and control settings right to run quietly.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in North Center',
        html: `<h3>Side-wall venting on narrow lots</h3>
<p>PVC vents exiting into gangways need proper clearance from windows, neighbors’ walls and snow buildup. A vent terminal that frosts over or sits in a drift can shut a condensing furnace down on the coldest night, so we check terminal location and condition on every heating visit.</p>
<h3>Two-zone systems</h3>
<p>Zoned systems with dampers need a correctly configured control board and bypass or variable-speed blower; misconfiguration causes noise and short-cycling. When one zone calls alone, the blower has to slow down or the extra air has to go somewhere. If it doesn’t, you hear it at the registers.</p>
<h3>Basement finishing</h3>
<p>Finishing a basement changes the heating and cooling load; supply and return paths should be planned before walls go up. Adding supplies without a return leaves the room stuffy and the door whistling.</p>`,
      },
      {
        h2: 'Caring for a high-efficiency furnace in North Center',
        html: `<p>Condensing furnaces produce water as they run. It drains through a trap and hose to a floor drain or pump, and if either clogs, the furnace stops. A yearly <a href="/furnace-tune-up/">furnace tune-up</a> before winter covers the condensate trap and drain, the flame sensor, the inducer and pressure switch, the intake and exhaust pipes and the vent terminals outside. On zoned homes we also test each damper and the zone board so both floors heat evenly.</p>`,
      },
      {
        h2: 'Utilities and rebates in North Center',
        html: peoplesGas('North Center', 'If you’re replacing an older chimney-vented furnace in a bungalow or frame house, the 95% and 97% AFUE furnace rebates apply to the condensing models that vent through PVC.'),
      },
    ],
    faqs: [
      { q: 'Can you check my zoning system?', a: 'Yes. We test damper operation, the zone board and blower settings.' },
      { q: 'Why does my high-efficiency furnace shut off in very cold weather?', a: 'Common causes are a blocked condensate drain or a vent terminal blocked by snow or frost. We check the drain, trap and vent terminals as part of service.' },
      { q: 'We’re finishing our basement. When should HVAC be planned?', a: 'Before the walls go up, so supply and return paths can be added where they’re needed.' },
      emergencyFaq('North Center'),
    ],
    nearbySlugs: ['lakeview', 'lincoln-square', 'irving-park'],
  },

  ravenswood: {
    h1: 'Boiler, Furnace & AC Service in Ravenswood, Chicago',
    title: 'Boiler, Furnace & AC Repair in Ravenswood | Chicago Aircare Pro',
    meta: 'Boiler and radiator service, furnace installation and ductless cooling for Ravenswood’s Victorian homes, two-flats and loft conversions. 24/7.',
    intro: `${business.displayName} services furnaces, boilers, air conditioners and mini-splits in Ravenswood homes. Many older homes here still heat with radiators, so boiler care and adding cooling without ductwork are a big part of our work in the neighborhood.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Ravenswood',
        html: `<p>Ravenswood has Victorian and frame single-family homes on tree-lined streets, two-flats, and loft and commercial conversions near the Metra line. Many older homes still heat with radiators.</p>
<p>Radiator heat is comfortable and long-lived when the boiler and its controls are maintained. What these homes usually lack is cooling, and the lofts have the opposite challenge: open volumes and tall ceilings that make air distribution the main design problem.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in Ravenswood',
        html: `<h3>Radiator homes adding cooling</h3>
<p>Ductless systems add efficient cooling and supplemental heat without opening walls for ductwork. Indoor heads go where they cool best, and line sets run through closets, attics or along the exterior.</p>
<h3>Older hot-water boilers</h3>
<p>Bleeding radiators, checking the expansion tank and circulator, and verifying safety controls keeps older boilers reliable. A waterlogged expansion tank shows up as a pressure relief valve that drips or a pressure gauge that swings; a weak circulator shows up as cold radiators at the end of the loop.</p>
<h3>Lofts near the tracks</h3>
<p>Open loft spaces need careful supply and return placement for even temperatures. Supplies aimed at the living space and returns placed to pull warm air from up high keep a tall room from layering.</p>`,
      },
      {
        h2: 'Furnace installation in Ravenswood',
        html: `<p>Not every Ravenswood home runs on radiators. Frame houses, rehabbed two-flats and the loft conversions often have forced-air furnaces, and many are on their second or third. When one is due for replacement, we size the new furnace to the home with a load calculation instead of copying the old unit, check the ductwork and returns, and look at the venting: moving to a high-efficiency furnace that vents through PVC can leave the water heater alone on the old chimney. Estimates are free. More on <a href="/furnace-installation-chicago/">furnace installation in Chicago</a> and <a href="/furnace-installation/">how we install furnaces</a>.</p>`,
      },
      {
        h2: 'Start-of-season boiler checklist for Ravenswood homes',
        html: `<p>Before the first cold week, we check the burner and venting, test the pressure relief valve and safety controls, confirm system pressure and expansion tank charge, and purge air from radiators that heat only at the bottom or not at all. Steam systems get a sight-glass and low-water cutoff check instead. Scheduling this in early fall beats finding a problem on the first freezing night. See <a href="/boiler-repair/">boiler repair</a>.</p>`,
      },
      {
        h2: 'Utilities and rebates in Ravenswood',
        html: peoplesGas('Ravenswood', 'For radiator homes, the hot-water boiler rebate and the combination boiler rebate (a boiler that also makes domestic hot water) are worth comparing when a boiler is due for replacement.'),
      },
    ],
    faqs: [
      { q: 'Do I need to bleed my radiators every year?', a: 'On hot-water systems, bleeding trapped air at the start of the season helps radiators heat fully. Steam radiators don’t get bled; they rely on working air vents.' },
      { q: 'Can I add air conditioning to a Ravenswood home with radiators?', a: 'Yes. Ductless mini-splits add cooling and supplemental heat without opening walls for ductwork.' },
      { q: 'Why is the pressure relief valve on my boiler dripping?', a: 'Often the expansion tank has lost its air charge, so pressure climbs as the water heats. We test the tank and system pressure to confirm.' },
      { q: "Can a loft near the Metra tracks be heated and cooled evenly?", a: "Yes, with careful supply and return placement. Supplies aimed at the living space and returns placed to pull warm air from up high keep a tall open room from layering." },
      emergencyFaq('Ravenswood'),
    ],
    nearbySlugs: ['lincoln-square', 'uptown', 'andersonville-edgewater'],
  },

  uptown: {
    h1: 'Steam Heat, Boiler & Ductless AC Service in Uptown, Chicago',
    title: 'HVAC Repair in Uptown, Chicago | Chicago Aircare Pro',
    meta: 'Ductless cooling for Uptown condos, steam and hot-water boiler service for Sheridan Park and Buena Park greystones. 24/7 emergency HVAC.',
    intro: `${business.displayName} provides heating and cooling service for Uptown homes and condo units, from Sheridan Park greystones to vintage courtyard buildings. Condo owners in steam-heated buildings often want their own cooling and heat control; greystone owners usually need dependable boiler service.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Uptown',
        html: `<p>Uptown has a large stock of vintage courtyard and apartment buildings, many now condos, along with greystones and single-family homes in Sheridan Park and Buena Park, and high-rises along the lake.</p>
<p>In the vintage buildings, heat usually comes from a central steam boiler the association maintains, and cooling is up to each owner. In the greystones and single-family homes, the owner runs the boiler and decides how to add cooling.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in Uptown',
        html: `<h3>Steam heat in vintage buildings</h3>
<p>Many vintage buildings kept central steam. Unit owners often add ductless cooling, which also gives them heating control in shoulder seasons. When the building heat runs too warm in October or April, a heat-pump mini-split lets you cool; when it hasn’t started yet, it gives you heat.</p>
<h3>Condo cooling upgrades</h3>
<p>Replacing window AC units or failing through-wall units with ductless systems is a common request; condo association rules on outdoor units apply. We plan the outdoor unit location and line set route to fit the building’s rules.</p>
<h3>Single-family boilers</h3>
<p>Greystones and older homes often run hot-water boilers that benefit from yearly service and radiator balancing. Balancing means adjusting flow so the far rooms heat as well as the near ones.</p>`,
      },
      {
        h2: 'Getting a mini-split approved in an Uptown condo',
        html: `<p>Associations usually want to know where the outdoor unit will sit, how it’s mounted, how the line set reaches it and how condensate is drained. We give you those details with the quote so you can submit them to the board. Once approved, the install is typically contained to your unit and the agreed exterior location. See <a href="/mini-split-installation/">mini-split installation</a> and <a href="/mini-split-repair/">mini-split repair</a>.</p>`,
      },
      {
        h2: 'Utilities and rebates in Uptown',
        html: peoplesGas('Uptown', 'Gas rebates apply to equipment you own and your meter serves: greystone and single-family boilers, and furnaces or smart thermostats in individually metered condos. Central steam boilers are the association’s project.'),
      },
    ],
    faqs: [
      { q: 'Can I install a mini-split in my condo?', a: 'Usually, with your association’s approval for the outdoor unit location. We can help you prepare the details they ask for.' },
      { q: 'Can a mini-split heat my unit before the building heat comes on?', a: 'Yes. Heat-pump mini-splits heat as well as cool, which gives you control in spring and fall when building steam is off or running too warm.' },
      { q: 'Do you service hot-water boilers in Sheridan Park and Buena Park homes?', a: 'Yes. Yearly service and radiator balancing keep older boilers reliable and rooms even.' },
      { q: "Who services the steam boiler in my condo building?", a: "Central steam boilers belong to the association, which decides who services them. We service equipment that serves only your unit, such as a mini-split or your own furnace." },
      emergencyFaq('Uptown'),
    ],
    nearbySlugs: ['lakeview', 'andersonville-edgewater', 'ravenswood'],
  },

  'andersonville-edgewater': {
    h1: 'Boiler, Furnace & AC Repair in Andersonville & Edgewater',
    title: 'HVAC Repair Andersonville & Edgewater | Chicago Aircare Pro',
    meta: 'Boiler, radiator, furnace and AC service in Andersonville, Edgewater Glen and Lakewood Balmoral. Two-flat zoning, indirect water heaters. 24/7.',
    intro: `${business.displayName} repairs and installs heating and cooling systems in Andersonville and Edgewater, including Edgewater Glen and Lakewood Balmoral. Large older homes with hot-water boilers, two-flats with one warm unit and one cold one, and central air that is reaching replacement age are the jobs we see most.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Andersonville & Edgewater',
        html: `<p>Andersonville has brick two-flats, bungalows and courtyard buildings. Edgewater adds large early-20th-century single-family homes in Edgewater Glen and Lakewood Balmoral, plus lakefront high-rises. Large older homes frequently have hot-water boilers.</p>
<p>A big boiler-heated home can be very comfortable, but it has its own maintenance rhythm: radiators to balance, an expansion tank and circulator to check, and venting to inspect. Many of these homes also make domestic hot water from the boiler, or could.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in Andersonville & Edgewater',
        html: `<h3>Large homes with boilers</h3>
<p>Big older homes with radiators often need boiler service, radiator balancing and, for cooling, ductless or high-velocity systems. High-velocity systems use small flexible ducts that fit through closets and floor cavities; ductless heads need no ducts at all.</p>
<h3>Two-flat comfort</h3>
<p>Two-flats often have one unit warmer than the other; separate controls or zoning helps. Heat rises, so the upper unit can overheat while the lower unit calls for heat. A thermostat per unit fixes the cause instead of the symptom.</p>
<h3>Aging central air</h3>
<p>Homes that had central air added decades ago are reaching replacement age; we size new systems to the home rather than the old unit. A properly sized system runs longer, quieter cycles and removes more humidity.</p>`,
      },
      {
        h2: 'Indirect water heaters for boiler homes',
        html: `<p>If your home already has a hot-water boiler, an indirect water heater can use it to heat your domestic water, replacing a separate gas water heater. The tank has no burner of its own; the boiler heats a coil inside it. When a boiler is due for replacement, we also compare a combination boiler that makes heat and hot water in one unit. See <a href="/boiler-installation/">boiler installation</a>.</p>`,
      },
      {
        h2: 'Utilities and rebates in Andersonville & Edgewater',
        html: peoplesGas('Andersonville &amp; Edgewater', 'The combination boiler rebate is the largest on the Peoples Gas list, and it fits boiler homes that also want new domestic hot water. Two-flats qualify as well.'),
      },
    ],
    faqs: [
      { q: 'Can a hot-water boiler also heat my water?', a: 'Yes, with an indirect water heater connected to the boiler. It can replace a separate water heater.' },
      { q: 'Why is the upstairs unit of my two-flat always warmer?', a: 'Heat rises and the upper unit gains heat from below. Separate thermostats or zoning by unit is usually the fix.' },
      { q: 'How do you add cooling to a large radiator-heated home?', a: 'With ductless mini-splits, or a high-velocity system that uses small ducts routed through closets and floor cavities. We assess the house first.' },
      { q: "My central air is decades old. Should the new one be the same size?", a: "Not necessarily. We size new systems to the home rather than the old unit. A properly sized system runs longer, quieter cycles and removes more humidity." },
      emergencyFaq('Andersonville & Edgewater'),
    ],
    nearbySlugs: ['uptown', 'rogers-park', 'ravenswood'],
  },

  'rogers-park': {
    h1: 'Heating & Cooling in Rogers Park, Chicago: Furnace, Steam Boiler & AC',
    title: 'Heating & Cooling Contractor in Rogers Park | Chicago Aircare Pro',
    meta: 'Furnace repair, tune-ups and replacement, steam boiler service and AC installation in Rogers Park, near Loyola and the lake. 24/7 HVAC.',
    intro: `${business.displayName} services heating and cooling equipment in Rogers Park homes and condo units, near Loyola and the lakefront. Steam heat is everywhere here, and so are window AC units, so steam repairs and ductless upgrades are our most common Rogers Park calls.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Rogers Park',
        html: `<p>Rogers Park has many vintage courtyard apartment buildings, along with two-flats and single-family homes. A lot of buildings still run steam heat, and window AC units are common.</p>
<p>Steam systems last a very long time, but they are sensitive to small things: a stuck radiator vent, a pipe that has sagged, a water level set too high. Most steam complaints come down to those details rather than the boiler itself.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in Rogers Park',
        html: `<h3>Steam systems</h3>
<p>Banging pipes, uneven heat and failed radiator vents are common steam issues; most come down to vents, pipe pitch and boiler water level. A radiator that never heats often has a vent stuck closed; one that hisses and spits has a vent stuck open. Main vents in the basement matter just as much.</p>
<h3>Replacing window units</h3>
<p>Ductless systems give condo and single-family owners quieter cooling and supplemental heat. Condo installs need association approval for the outdoor unit.</p>
<h3>Older single-family furnaces</h3>
<p>Single-family homes with aging furnaces benefit from a safety check of heat exchangers and venting. A cracked heat exchanger or a blocked flue can let combustion gases into the house, which is why we also recommend working carbon monoxide alarms. See <a href="/carbon-monoxide-safety/">carbon monoxide safety</a>.</p>`,
      },
      {
        h2: 'What a steam boiler service covers',
        html: `<p>We check the sight glass and water level, test the low-water cutoff, inspect the pressure control and burner, and look at the venting. Then we walk the system: main vents, radiator vents, and pipes that have lost their pitch and trap condensate. Water level and venting fixes are usually small jobs, and they often solve years of banging and uneven heat. See <a href="/boiler-repair/">boiler repair</a>.</p>`,
      },
      {
        h2: 'Furnace repair, tune-ups and replacement in Rogers Park',
        html: `<p>Not every Rogers Park building runs steam. Many single-family homes, two-flats with a furnace per unit and condo units with their own equipment heat with a forced-air furnace. For a <a href="/furnace-repair/">furnace repair</a>, we read the fault codes and test ignition, flame sensing, the inducer and pressure switch, the blower and the venting before recommending a part. A fall <a href="/furnace-tune-up/">furnace tune-up</a> covers the same safety checks plus cleaning, a condensate trap flush on high-efficiency models and a carbon monoxide test.</p>
<p>When a furnace is near the end of its life, we compare repair and <a href="/furnace-installation/">furnace replacement</a> with prices for both, and size any new furnace to the home rather than to the old unit. New-system estimates are free.</p>`,
      },
      {
        h2: 'AC installation in Rogers Park',
        html: `<p>Courtyard condos and vintage buildings here mostly cool with window units, because there's no ductwork to carry central air. <a href="/mini-split-installation/">Ductless mini-splits</a> are the usual upgrade; in a condo, the association approves where the outdoor unit goes. Homes with a furnace and ducts can add central air with a matched condenser and coil. See <a href="/ac-installation/">AC installation</a>.</p>`,
      },
      {
        h2: 'Utilities and rebates in Rogers Park',
        html: peoplesGas('Rogers Park', 'Steam boilers have their own line on the Peoples Gas list, which matters in a neighborhood where so many buildings still run steam. Two-flats and single-family homes qualify.'),
      },
    ],
    faqs: [
      { q: 'Why do my steam pipes bang?', a: 'Usually condensate pooling in pipes that have lost their pitch, or a boiler water level that’s too high. Both are fixable.' },
      { q: 'One radiator never gets hot. What’s wrong?', a: 'On steam systems it’s often a radiator vent stuck closed, so air can’t escape and steam can’t enter. Replacing the vent usually fixes it.' },
      { q: 'Can I replace window AC units with a ductless system?', a: 'Yes. Ductless mini-splits give quieter cooling and supplemental heat. In condos, the association approves the outdoor unit location.' },
      { q: 'Do you do furnace tune-ups and replacements in Rogers Park?', a: 'Yes. We tune up, repair and replace furnaces in Rogers Park homes, two-flats and condo units, as well as steam and hot-water boilers. New-system estimates are free, and you get prices before any work starts.' },
      { q: "Should I get my older furnace checked even if it still runs?", a: "Yes. A yearly safety check of the heat exchanger and venting catches problems a running furnace won’t show, such as a crack or a blocked flue. Working carbon monoxide alarms matter too." },
      emergencyFaq('Rogers Park'),
    ],
    nearbySlugs: ['west-ridge', 'andersonville-edgewater', 'evanston'],
  },

  'west-ridge': {
    h1: 'Furnace, Boiler & AC Repair in West Ridge, Chicago',
    title: 'Furnace & AC Repair in West Ridge | Chicago Aircare Pro',
    meta: 'Furnace replacement, central air on original ductwork, raised ranch comfort and boiler service around Devon Avenue and Warren Park. 24/7 HVAC.',
    intro: `${business.displayName} repairs and replaces furnaces, boilers and air conditioners in West Ridge, around Devon Avenue and Warren Park. Much of the housing here has original ductwork with central air added later, and that combination is behind many of the comfort calls we get.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in West Ridge',
        html: `<p>West Ridge has brick bungalows, Georgians, raised ranches and two-flats, much of it built in the early and mid-20th century. Many homes have original ductwork and central air added later.</p>
<p>Ductwork sized for a furnace moves less air than an air conditioner wants, especially on the return side. When a newer, larger AC is connected to it, the result is often noise, weak airflow upstairs and a coil that can freeze. Fixing the duct limit is frequently worth more than buying a bigger unit.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in West Ridge',
        html: `<h3>Adding or replacing central air</h3>
<p>Homes whose ductwork was designed for heat only may need duct changes for good cooling airflow. We measure static pressure and check return capacity before sizing a new AC.</p>
<h3>Mid-century furnace replacements</h3>
<p>Replacing chimney-vented furnaces with high-efficiency models requires new PVC venting and attention to the remaining water heater’s venting. A water heater left alone on a large masonry chimney may not draft properly and may need a liner.</p>
<h3>Raised ranch comfort</h3>
<p>Raised ranches can have lower levels cooler than upper levels; balancing dampers and returns help. Seasonal damper settings, one for heating and one for cooling, are a simple adjustment worth trying first.</p>`,
      },
      {
        h2: 'Repair or replace in a West Ridge home',
        html: `<p>We show repair options first. When replacement makes sense, we size the new furnace and AC to the home’s actual load, not the old nameplate, and plan the venting and duct changes up front so there are no surprises on install day. New-system estimates are free, and financing is available through ${business.financingPartner}, subject to credit approval. See <a href="/furnace-installation/">furnace installation</a> and <a href="/ac-installation/">AC installation</a>.</p>`,
      },
      {
        h2: 'Utilities and rebates in West Ridge',
        html: peoplesGas('West Ridge', 'Replacing a mid-century chimney-vented furnace with a 95% or 97% AFUE condensing model is exactly what the Peoples Gas furnace rebates target. Two-flats with a boiler can use the boiler rebates.'),
      },
    ],
    faqs: [
      { q: 'My ductwork is original. Will a new AC work well?', a: 'Often yes, but we check duct size and static pressure. Undersized returns are the most common limit.' },
      { q: 'Do I need a chimney liner if I get a high-efficiency furnace?', a: 'Possibly. The new furnace vents through PVC, which can leave the water heater alone on the chimney. We check whether it will draft safely during the estimate.' },
      { q: 'Why is the lower level of my raised ranch always cooler?', a: 'Air takes the easiest path to the upper level. Balancing dampers and added returns usually even it out.' },
      emergencyFaq('West Ridge'),
    ],
    nearbySlugs: ['rogers-park', 'albany-park', 'skokie'],
  },
};

/* ------------------------------------------------------------------ */
/* Chicago Northwest Side                                            */
/* ------------------------------------------------------------------ */
const northwestSide: Record<string, AreaContent> = {
  'logan-square': {
    h1: 'Furnace, Boiler & AC Repair in Logan Square, Chicago',
    title: 'HVAC & AC Installation in Logan Square | Chicago Aircare Pro',
    meta: 'Furnace, boiler and AC repair, installation and maintenance in Logan Square two-flats, greystones and bungalows. Central air for radiator homes. 24/7.',
    intro: `${business.displayName} provides heating and cooling repair, replacement and maintenance in Logan Square, from the boulevard greystones to bungalows on the west side of the neighborhood. Two- and three-flats with a furnace per unit, shared boilers, damp garden units and two-flats being converted into single-family homes make up most of our work here.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Logan Square',
        html: `<p>Logan Square is known for greystone two- and three-flats along its boulevards, plus brick two-flats, frame houses and bungalows. Many multi-unit buildings have separate furnaces per unit; others still share a boiler. Garden units are common.</p>
<p>The neighborhood is also changing building by building. When a two- or three-flat becomes one home, the heating that was designed for separate units has to be rethought, and that decision affects comfort and operating cost for decades.</p>
${glance('Logan Square', [['Between 2013 and 2019, 224 two-to-four-unit buildings in Logan Square were converted into single-family homes, according to DePaul University’s Institute for Housing Studies as summarized by Pencilling Out.', 'Pencilling Out: How Logan Square shrank', 'https://pencillingout.substack.com/p/how-logan-square-shrank']])}`,
      },
      {
        h2: 'Common heating and cooling issues in Logan Square',
        html: `<h3>Separate systems per unit</h3>
<p>Two- and three-flats with a furnace per unit often have the equipment side by side in the basement, sharing chimneys or venting that must be checked when one furnace is replaced. Pulling one furnace off a shared chimney changes how the remaining appliances draft.</p>
<h3>Garden units</h3>
<p>Below-grade units tend to be cool and damp. Supply and return balance, and sometimes a dehumidifier, make them comfortable. A garden unit fed by leftover air from an upstairs system rarely gets enough; its own supply and return paths make the difference. See <a href="/whole-home-dehumidifiers/">whole-home dehumidifiers</a>.</p>
<h3>Orphaned water heaters</h3>
<p>Replacing a chimney-vented furnace with a high-efficiency model can leave a water heater alone on an oversized chimney, which can cause venting problems. We check this on every replacement.</p>`,
      },
      {
        h2: 'AC installation and maintenance in Logan Square',
        html: `<p>Many Logan Square greystones and two-flats heat with radiators and were never built with ductwork, so adding central air takes planning. The usual options are <a href="/mini-split-installation/">ductless mini-splits</a> mounted room by room, or a ducted system with an air handler in the attic or a closet feeding the top floor. In buildings with a furnace per unit, each unit can get its own condenser and coil on its existing ductwork, and the condensers have to fit in a narrow gangway, a rear yard or the roof.</p>
<p>For <a href="/ac-installation/">AC installation</a>, we size the equipment to the unit’s actual heat gain rather than its square footage alone: top-floor units under a flat roof run hotter than garden units. For existing systems, a spring <a href="/ac-tune-up/">AC tune-up</a> cleans the outdoor coil, checks the refrigerant charge and clears the condensate drain, which matters in basements where a clogged drain line can leak into a finished garden unit.</p>`,
      },
      {
        h2: 'Heating options when a Logan Square two-flat becomes one home',
        html: `<p>There are usually three paths: keep both systems and zone them by floor, keep one boiler or furnace sized for the whole house, or replace both with one new system. Keeping both is often cheapest up front and gives natural zoning. One right-sized system is simpler to maintain. A full replacement makes sense when both systems are near the end of their life. We measure the heat loss and trace the piping or ducts before recommending one.</p>`,
      },
      {
        h2: 'Utilities and rebates in Logan Square',
        html: peoplesGas('Logan Square', 'Two-flats qualify, so a building with a furnace per unit may be eligible for a furnace rebate on each replacement. For shared-boiler buildings, the hot-water and steam boiler rebates apply.'),
      },
    ],
    faqs: [
      { q: 'Can each unit in my two-flat have its own thermostat?', a: 'Yes, either with separate systems or by zoning a shared boiler, depending on the piping.' },
      { q: 'We’re converting our two-flat into a single-family home. What happens to the heating?', a: 'Usually one of three paths: keep both systems and zone them by floor, keep one boiler or furnace sized for the whole house, or replace both with one new system. We measure the heat loss and trace the piping or ducts before recommending one.' },
      { q: 'Our garden unit is always cold and damp. What helps?', a: 'Its own supply and return air paths, balanced with the rest of the building, and sometimes a dehumidifier.' },
      { q: 'Can you install central air in a Logan Square greystone with radiators?', a: 'Yes. The usual options are ductless mini-splits room by room or a ducted system with an air handler in the attic or a closet. We look at the building first and give you options with prices; new-system estimates are free.' },
      emergencyFaq('Logan Square'),
    ],
    nearbySlugs: ['avondale', 'bucktown', 'humboldt-park'],
  },

  avondale: {
    h1: 'Furnace, Boiler & AC Repair in Avondale, Chicago',
    title: 'Furnace & AC Repair in Avondale | Chicago Aircare Pro',
    meta: 'Boiler-to-furnace conversions, basement apartment airflow and furnace and AC repair or replacement in Avondale bungalows and two-flats. 24/7.',
    intro: `${business.displayName} services heating and cooling systems in Avondale homes, including bungalows, frame houses and two-flats along and around Milwaukee Avenue. Renovations are reshaping the neighborhood’s mechanical systems, and we help owners plan conversions and keep aging equipment running.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Avondale',
        html: `<p>Avondale has brick bungalows, frame single-family homes, two-flats and a growing number of rehabs and new builds. Many two-flats are being converted from shared boilers to separate forced-air systems during renovation.</p>
<p>That conversion gives each unit its own heat, its own thermostat and central air, but it also means new ductwork and venting in buildings that were never designed for either. Planned during the renovation, it fits. Added after the walls are closed, it’s a compromise.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in Avondale',
        html: `<h3>Boiler-to-furnace conversions</h3>
<p>Converting a two-flat from one boiler to separate furnaces means new ductwork in each unit and new venting. We plan duct routes to fit existing walls and chases, size each furnace to its unit, and lay out returns so each floor breathes properly.</p>
<h3>Basement apartments</h3>
<p>Lower units need their own supply and return air paths, not just leftover airflow from the main system. Without a return, the basement stays stuffy and pressure pushes air where it shouldn’t go.</p>
<h3>Aging original equipment</h3>
<p>Many homes still run 20-plus-year-old furnaces and ACs. We help owners decide what to repair and what to replace, starting with a safety check of the heat exchanger, venting and controls.</p>`,
      },
      {
        h2: 'Boiler to forced air, or boiler plus mini-splits?',
        html: `<p>Converting to forced air makes sense when you want central air and the building can take ductwork. Keeping the boiler and adding <a href="/mini-split-installation/">ductless mini-splits</a> keeps radiator comfort, avoids new ducts and still gives you cooling. We price both, including venting and electrical work, so you can compare the full cost, not just the equipment.</p>`,
      },
      {
        h2: 'Utilities and rebates in Avondale',
        html: peoplesGas('Avondale', 'If a renovation adds a separate high-efficiency furnace in each unit of a two-flat, each furnace may qualify. Smart thermostats per unit can qualify too.'),
      },
    ],
    faqs: [
      { q: 'Is it worth converting from a boiler to forced air?', a: 'It depends on whether you want central air and how much ductwork the building can take. We compare it with keeping the boiler and adding mini-splits.' },
      { q: 'Does a basement apartment need its own ductwork?', a: 'It needs its own supply and return air paths. Leftover airflow from the main system usually isn’t enough.' },
      { q: 'My furnace is over 20 years old. Should I replace it?', a: 'Not automatically. If the heat exchanger, venting and controls check out, repair can make sense. We show both options with prices.' },
      { q: "Can you plan HVAC for our two-flat renovation?", a: "Yes. We plan duct routes to fit existing walls and chases, size each furnace to its unit and plan the venting. It works best before the walls are closed." },
      emergencyFaq('Avondale'),
    ],
    nearbySlugs: ['logan-square', 'irving-park', 'albany-park'],
  },

  'irving-park': {
    h1: 'Furnace, Boiler & AC Repair in Irving Park, Chicago',
    title: 'Furnace & AC Repair in Irving Park | Chicago Aircare Pro',
    meta: 'Old Irving Park homes with converted gravity ductwork, second floors that won’t cool, two-system homes and boiler service. 24/7 HVAC.',
    intro: `${business.displayName} repairs and replaces furnaces, boilers and air conditioners in Irving Park, including the large older homes of Old Irving Park. Big houses with ductwork left over from old gravity furnaces need a technician who checks airflow, not just the equipment.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Irving Park',
        html: `<p>Irving Park includes Old Irving Park’s Victorian and frame single-family homes on large lots, bungalows, and two-flats. Many larger older homes had their heat converted from gravity systems, leaving oversized or unusual ductwork.</p>
<p>Gravity furnaces moved warm air without a blower, so their ducts were large and round. Modern furnaces push air with a blower and expect smaller, sealed ducts and adequate returns. When the two are combined without adjustment, some rooms get too much air and others get none.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in Irving Park',
        html: `<h3>Converted gravity ductwork</h3>
<p>Large-diameter ducts left from old gravity furnaces don’t always match modern blowers. Adjusting duct connections and adding returns improves airflow and comfort.</p>
<h3>Second floors that don’t cool</h3>
<p>Older homes with central air added later often lack upstairs returns, so second floors stay warm. Added returns, balancing or a separate upstairs system are the usual options. Cool air is heavy; without a return upstairs, it settles on the first floor.</p>
<h3>Big homes, big loads</h3>
<p>Larger homes may need two systems or zoning for even comfort. One system serving three floors of a big Victorian is usually fighting physics.</p>`,
      },
      {
        h2: 'Fixing airflow before buying equipment',
        html: `<p>In older Irving Park homes, the cheapest comfort upgrade is often in the basement, not the equipment. We measure static pressure and room airflow, check how the old gravity ducts connect to the furnace, and look for missing returns. Sometimes that work alone fixes the complaint; when it doesn’t, it makes a new furnace or AC perform as rated. See <a href="/ductwork-repair/">ductwork repair</a>.</p>`,
      },
      {
        h2: 'Utilities and rebates in Irving Park',
        html: peoplesGas('Irving Park', 'Large homes with boilers can use the hot-water or steam boiler rebates; homes on forced air can use the furnace rebates. A second system for the upper floor may qualify on its own.'),
      },
    ],
    faqs: [
      { q: 'My old house has huge round ducts in the basement. Is that a problem?', a: 'Not necessarily, but they often came from a gravity furnace. We check whether the airflow matches your current furnace and AC.' },
      { q: 'Why won’t my second floor cool down?', a: 'Older homes with central air added later often have no upstairs returns. Adding returns, balancing, or a separate upstairs system usually fixes it.' },
      { q: 'Does a big Old Irving Park house need two systems?', a: 'Not always, but larger homes often need two systems or zoning for even comfort. We measure the load and airflow first.' },
      { q: "Is it worth fixing ductwork before replacing my furnace?", a: "Often, yes. Adjusting old gravity duct connections and adding returns can fix comfort complaints on their own, and they help a new furnace or AC perform as rated." },
      emergencyFaq('Irving Park'),
    ],
    nearbySlugs: ['portage-park', 'north-center', 'avondale'],
  },

  'albany-park': {
    h1: 'Boiler, Furnace & AC Repair in Albany Park, Chicago',
    title: 'Boiler & Furnace Repair in Albany Park | Chicago Aircare Pro',
    meta: 'Shared boiler zoning, basement unit comfort and furnace and AC repair for Albany Park two-flats, greystones and bungalows near the river. 24/7.',
    intro: `${business.displayName} provides heating and cooling service in Albany Park, including two-flats, bungalows and greystones near the river. Shared boilers in multi-unit buildings and furnaces running on original ductwork are both common here.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Albany Park',
        html: `<p>Albany Park is dense with two-flats, greystones and bungalows, plus courtyard buildings. Shared boilers in multi-unit buildings and furnaces with original ductwork are both common.</p>
<p>Shared boilers raise practical questions for owners: who controls the heat, how to keep both units comfortable, and whether the setup can be split. Original ductwork raises a different one: whether it can carry enough air for a modern furnace and AC.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in Albany Park',
        html: `<h3>Shared boilers</h3>
<p>Multi-unit buildings sharing one boiler benefit from correctly set controls and, where possible, zoning by unit. Outdoor reset controls, which adjust water temperature to the weather, can also even out comfort and reduce short-cycling on hot-water systems.</p>
<h3>Basement units</h3>
<p>Lower-level units often need better supply and return paths, and humidity control in summer. A damp basement unit feels colder than the thermostat says.</p>
<h3>Aging equipment</h3>
<p>We help owners compare repair and replacement on older furnaces and ACs. You get both options with prices, and the safety findings that drive the recommendation.</p>`,
      },
      {
        h2: 'Zoning a shared boiler by unit',
        html: `<p>It starts with the piping. If each unit’s radiators are on their own loop, a zone valve or circulator per loop with a thermostat in each unit gives everyone their own control. If the loops are mixed, re-piping or separate systems may be needed. Steam systems are harder to zone by unit than hot-water systems. We inspect and sketch the piping before quoting. See <a href="/thermostat-installation/">thermostats and zoning</a>.</p>`,
      },
      {
        h2: 'Utilities and rebates in Albany Park',
        html: peoplesGas('Albany Park', 'Two-flats qualify, which covers many shared-boiler buildings here. If a zoning project adds a smart thermostat per unit, those may qualify too.'),
      },
    ],
    faqs: [
      { q: 'Can a shared boiler be zoned by unit?', a: 'Often, with zone valves or separate circulators, if the piping is arranged by unit. We inspect the piping first.' },
      { q: 'Why is our basement unit uncomfortable?', a: 'Lower-level units often lack proper supply and return paths and get damp in summer. Better airflow and humidity control usually fix it.' },
      { q: 'Should I repair or replace my older furnace?', a: 'It depends on safety and condition. We check the heat exchanger, venting and controls, then show repair and replacement options with prices.' },
      { q: "Can a steam system be split by unit?", a: "It is harder than with hot water. Steam systems are more difficult to zone by unit, so separate systems may make more sense. We inspect the piping before recommending anything." },
      { q: "Do you help with Peoples Gas rebates in Albany Park?", a: "Yes. Rebate amounts and rules change, so we confirm what applies when we quote new equipment." },
      emergencyFaq('Albany Park'),
    ],
    nearbySlugs: ['irving-park', 'lincoln-square', 'west-ridge'],
  },

  'portage-park': {
    h1: 'Furnace & AC Repair in Portage Park, Chicago (Northwest Side)',
    title: 'Furnace & AC Repair in Portage Park, Chicago | Chicago Aircare Pro',
    meta: 'Furnace, boiler and AC repair for Portage Park, Chicago: bungalows around Six Corners on the Northwest Side. Hot attics, added returns, 24/7 service.',
    intro: `${business.displayName} repairs and installs heating and cooling systems in Portage Park, the Chicago neighborhood on the Northwest Side around Six Corners, next to Jefferson Park and Irving Park. It sits in the heart of the city’s Bungalow Belt. Bungalow furnaces on original ducts, finished attics that never get enough air, and furnaces and ACs reaching the end of their life together are what we see most.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Portage Park',
        html: `<p>Portage Park is classic Chicago bungalow territory, along with frame homes, two-flats and some newer construction. Bungalows usually have a basement furnace serving the main floor through original ducts, and finished attics that the system barely reaches.</p>
<p>The bungalow layout is consistent enough that the problems are predictable: main floors that are fine, attics that are not, returns that are too few and too small, and noise at the registers. The fixes are just as well known.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in Portage Park',
        html: `<h3>Bungalow attics</h3>
<p>Finished attic bedrooms stay hot in summer. Ductless heads or added duct runs with a return are the usual fixes. Without a return upstairs, added supply air has nowhere to go.</p>
<h3>Original duct layouts</h3>
<p>Many bungalows have few or small return grilles; adding return air often fixes noise and weak airflow. It also lowers the strain on the blower motor and helps a new AC deliver its rated capacity.</p>
<h3>Furnace and AC replacement together</h3>
<p>When both are near end of life, replacing them together gives a matched system and one installation visit. The indoor coil sits on the furnace, so replacing them at the same time avoids fitting a new coil to an old cabinet.</p>`,
      },
      {
        h2: 'A typical Portage Park bungalow upgrade',
        html: `<p>For a bungalow with a hot attic and an aging furnace and AC, the plan we price most often has three parts: a right-sized furnace and matched AC in the basement, one or two added returns on the main floor, and a <a href="/mini-split-installation/">ductless mini-split</a> for the attic. You can do all three at once or in stages. We show each part with its own price so you decide the order.</p>`,
      },
      {
        h2: 'Utilities and rebates in Portage Park',
        html: peoplesGas('Portage Park', 'A furnace replacement in a bungalow is the textbook case for the 95% and 97% AFUE furnace rebates. Add a smart thermostat and that can qualify too.'),
      },
    ],
    faqs: [
      { q: 'Why is my bungalow attic so hot?', a: 'Heat collects under the roof and the attic usually gets little or no conditioned air. A mini-split is often the simplest fix.' },
      { q: 'My registers are noisy. Why?', a: 'Many bungalows have too few or too small returns, so the blower strains. Adding return air often fixes the noise and improves airflow.' },
      { q: 'Should I replace my furnace and AC at the same time?', a: 'If both are near end of life, replacing them together gives a matched system and one installation visit. If one is healthy, we’ll say so.' },
      { q: 'Do you also serve the neighborhoods around Portage Park?', a: 'Yes. We work across Chicago’s Northwest Side, including Jefferson Park, Irving Park, Norwood Park, Albany Park and Avondale. We don’t serve Portage, Indiana; our area is Chicago and nearby Illinois suburbs.' },
      emergencyFaq('Portage Park'),
    ],
    nearbySlugs: ['jefferson-park', 'irving-park', 'norwood-park'],
  },

  'jefferson-park': {
    h1: 'HVAC Repair in Jefferson Park, Chicago: Furnace, Boiler & AC',
    title: 'HVAC Repair in Jefferson Park, Chicago | Chicago Aircare Pro',
    meta: 'Cape Cod upstairs comfort, bungalow attics, chimney and venting checks and right-sized furnace replacement in Jefferson Park. 24/7 HVAC.',
    intro: `${business.displayName} is an HVAC contractor serving Jefferson Park, Chicago: furnace, boiler and air conditioner repair, replacement and maintenance. Cape Cod upper floors and bungalow attics are the most common comfort problems here, and furnace replacements need careful attention to chimney venting.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Jefferson Park',
        html: `<p>Jefferson Park has brick bungalows, Cape Cods and Georgians, many built in the 1920s through the 1950s, along with two-flats. Cape Cod upper floors and bungalow attics are common comfort problems.</p>
<p>Homes of that age are often on their second or third furnace, usually still venting into the original chimney with the water heater. Each replacement is a chance to right-size the equipment and to fix the venting properly.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in Jefferson Park',
        html: `<h3>Cape Cod upper floors</h3>
<p>Knee-wall spaces and small duct runs make Cape Cod upstairs rooms uneven. Ductless heads or a small upstairs system usually work best. Ducts that run through unconditioned knee walls lose much of their heating and cooling before reaching the room.</p>
<h3>Chimney and venting changes</h3>
<p>Switching to a high-efficiency furnace changes chimney use; we check water heater venting every time.</p>
<h3>Original equipment</h3>
<p>Many homes are on their second or third furnace; we size replacements to the home’s actual load. Earlier replacements often copied the original size, and many older furnaces are oversized. An oversized furnace short-cycles, heats unevenly and wears out sooner.</p>`,
      },
      {
        h2: 'What happens to the chimney when you upgrade your furnace',
        html: `<p>A high-efficiency furnace vents through PVC pipe out a side wall, not the chimney. If the water heater stays on the chimney by itself, the flue may now be too large for it to draft reliably, especially in a cold exterior chimney. The usual fix is a properly sized liner. We inspect this at the estimate and include it in the price, so it isn’t a surprise. See <a href="/furnace-installation/">furnace installation</a> and <a href="/carbon-monoxide-safety/">carbon monoxide safety</a>.</p>`,
      },
      {
        h2: 'Utilities and rebates in Jefferson Park',
        html: peoplesGas('Jefferson Park', 'Most furnace replacements here move from a chimney-vented model to a condensing 95% or 97% AFUE furnace, which is what the Peoples Gas furnace rebates cover.'),
      },
    ],
    faqs: [
      { q: 'Do I need a chimney liner with a new furnace?', a: 'If the new furnace is high-efficiency, the water heater may be left alone on the chimney and may need a liner. We check during the estimate.' },
      { q: 'How do I fix the upstairs of a Cape Cod?', a: 'Ductless heads or a small upstairs system usually work best, because knee-wall ducts lose too much heating and cooling on the way.' },
      { q: 'Should my new furnace be the same size as the old one?', a: 'Not necessarily. We size it to the home’s actual heating load. Many older furnaces are oversized.' },
      { q: "Can a bungalow attic in Jefferson Park be cooled without new ducts?", a: "Yes. A ductless mini-split cools and heats the attic on its own thermostat, without running new ducts from the basement." },
      emergencyFaq('Jefferson Park'),
    ],
    nearbySlugs: ['portage-park', 'norwood-park', 'edison-park'],
  },

  'norwood-park': {
    h1: 'Furnace, Boiler & AC Repair in Norwood Park, Chicago',
    title: 'Furnace & AC Repair in Norwood Park | Chicago Aircare Pro',
    meta: 'Ranch duct balancing, crawlspace duct sealing, historic-home boilers and furnace and AC repair in Norwood Park. 24/7 emergency HVAC service.',
    intro: `${business.displayName} repairs and replaces heating and cooling systems in Norwood Park, from the historic district’s older homes to mid-century ranches. Ranch ductwork is behind most comfort complaints here, and historic homes often pair a boiler with cooling added later.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Norwood Park',
        html: `<p>Norwood Park includes a historic district with Victorian and early-20th-century homes, plus many mid-century ranches, raised ranches and bungalows. Ranches often have ductwork in crawlspaces or a single long trunk.</p>
<p>A single long trunk feeds the nearest rooms first; by the time air reaches the far bedroom, there isn’t much left. Crawlspace ducts add a second issue: heat loss in winter and condensation in summer if they aren’t sealed and insulated.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in Norwood Park',
        html: `<h3>Ranch ductwork</h3>
<p>Long single trunks leave far rooms weak. Balancing, sealing and sometimes resizing branches even things out.</p>
<h3>Crawlspace ducts</h3>
<p>Ducts in crawlspaces should be sealed and insulated to avoid heat loss and summer condensation. Unsealed joints also pull damp crawlspace air into the system.</p>
<h3>Older homes, newer systems</h3>
<p>Historic homes may combine boilers with added cooling; we work on both. Boilers get the usual safety and control checks; added cooling, whether ducted in the attic or ductless, gets its own maintenance.</p>`,
      },
      {
        h2: 'How we even out a Norwood Park ranch',
        html: `<p>We start by measuring airflow at the registers and static pressure at the furnace, then walk the trunk and branches. The fixes, in order of cost: set branch dampers, seal leaking joints, insulate crawlspace runs, add or enlarge returns, and resize the weakest branches. Most homes don’t need every step. See <a href="/ductwork-repair/">ductwork repair</a>.</p>`,
      },
      {
        h2: 'Utilities and rebates in Norwood Park',
        html: peoplesGas('Norwood Park', 'Ranch homes on forced air can use the furnace rebates; historic homes with boilers can use the hot-water or steam boiler rebates.'),
      },
    ],
    faqs: [
      { q: 'Why is the bedroom at the end of my ranch always cold?', a: 'It’s usually the last run on a long trunk. Balancing and sealing often fix it.' },
      { q: 'Should crawlspace ducts be insulated?', a: 'Yes. Sealed and insulated crawlspace ducts lose less heat in winter and avoid condensation in summer.' },
      { q: 'Can you service both a boiler and central air in the same house?', a: 'Yes. Many historic homes have a boiler for heat and added cooling, and we work on both.' },
      { q: "Do you work on homes in the Norwood Park historic district?", a: "Yes. Historic homes there may combine boilers with added cooling, and we work on both." },
      { q: "Do I need a whole new duct system for my ranch?", a: "Rarely. Setting branch dampers, sealing joints, insulating crawlspace runs and adding returns usually come first. Resizing is reserved for the weakest branches." },
      emergencyFaq('Norwood Park'),
    ],
    nearbySlugs: ['jefferson-park', 'edison-park', 'portage-park'],
  },

  'edison-park': {
    h1: 'Furnace & AC Repair in Edison Park, Chicago',
    title: 'Furnace & AC Repair in Edison Park | Chicago Aircare Pro',
    meta: 'High-efficiency furnace service, two-system homes, raised ranch balancing and AC repair on Chicago’s far Northwest Side in Edison Park. 24/7.',
    intro: `${business.displayName} provides heating and cooling service in Edison Park, on Chicago’s far Northwest Side. Larger newer homes with two systems, raised ranches with uneven levels, and high-efficiency furnaces that need their condensate systems kept clear are typical here.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Edison Park',
        html: `<p>Edison Park has brick bungalows, Georgians and raised ranches, along with many newer, larger single-family homes. Newer homes often have two systems or a zoned high-efficiency furnace and AC.</p>
<p>That makes maintenance more important, not less. Two systems mean two sets of filters, drains and controls; a condensing furnace adds a trap, drain line and PVC vents that must stay clear; and attic equipment brings a condensate safety switch that has to work.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in Edison Park',
        html: `<h3>Larger newer homes</h3>
<p>Two-system homes need each system serviced, with attic equipment checked for condensate safety. An attic unit with a clogged drain and a failed float switch can leak through the ceiling below.</p>
<h3>Raised ranches</h3>
<p>Upper and lower levels can differ by several degrees; returns and balancing are the first fixes.</p>
<h3>High-efficiency equipment</h3>
<p>Condensing furnaces need condensate traps and drains kept clear, especially before winter. A blocked trap trips a pressure switch and the furnace shuts down, usually on a cold night.</p>`,
      },
      {
        h2: 'Maintaining a two-system Edison Park home',
        html: `<p>We service each system on its own schedule: furnaces before heating season, air conditioners before cooling season. We keep track of what each system serves, its filter size and its service history, so each visit picks up where the last left off. Our ${business.maintenancePlanName} maintenance plan covers two tune-ups a year: AC in spring, heating in fall. See <a href="/furnace-tune-up/">furnace tune-up</a> and <a href="/ac-tune-up/">AC tune-up</a>.</p>`,
      },
      {
        h2: 'Utilities and rebates in Edison Park',
        html: peoplesGas('Edison Park', 'When a two-system home replaces both furnaces, each high-efficiency furnace may qualify for its own rebate. Smart thermostats for each zone can qualify too.'),
      },
    ],
    faqs: [
      { q: 'How often should a high-efficiency furnace be serviced?', a: 'Once a year before heating season, including the condensate trap and drain.' },
      { q: 'Why are the two levels of my raised ranch different temperatures?', a: 'Air favors the easiest path. Returns and balancing dampers are the first fixes.' },
      { q: 'What does a condensate safety switch do?', a: 'It shuts the system off if the drain backs up, so water doesn’t overflow from attic or closet equipment. We test it during service.' },
      { q: "Do you service attic furnaces and air handlers in newer Edison Park homes?", a: "Yes. We service each system and check attic equipment for condensate safety, including the drain and the float switch." },
      { q: "Why does my high-efficiency furnace shut off on cold nights?", a: "A blocked condensate trap or drain trips a pressure switch and shuts the furnace down. Keeping the trap and drain clear before winter prevents it." },
      emergencyFaq('Edison Park'),
    ],
    nearbySlugs: ['norwood-park', 'jefferson-park', 'des-plaines'],
  },
};

/* ------------------------------------------------------------------ */
/* Chicago West Side                                                 */
/* ------------------------------------------------------------------ */
const westSide: Record<string, AreaContent> = {
  bucktown: {
    h1: 'Furnace & AC Repair in Bucktown, Chicago',
    title: 'Furnace & AC Repair in Bucktown | Chicago Aircare Pro',
    meta: 'Two-system new construction, attic air handlers, hot top floors and compact cottage furnaces in Bucktown. Furnace and AC repair, 24/7.',
    intro: `${business.displayName} repairs and installs heating and cooling systems in Bucktown homes, from original frame cottages to new-construction single-family homes and condos. Two-system homes with attic equipment and top floors that run hot are our most common Bucktown calls.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Bucktown',
        html: `<p>Bucktown’s housing ranges from frame workers’ cottages and brick two-flats to the many single-family homes and condo buildings built since the late 1990s. Newer homes typically have two forced-air systems or zoned equipment; older cottages often have low basements and limited space.</p>
<p>So a Bucktown service day can mean squeezing a compact furnace into a cottage basement in the morning and clearing an attic air handler’s condensate drain on a three-story home in the afternoon. The equipment differs; the method doesn’t: find the cause, show the options, then fix it.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in Bucktown',
        html: `<h3>Two-system new construction</h3>
<p>Many newer homes have a basement furnace for lower floors and an attic air handler or furnace for upper floors. Attic equipment needs condensate safety switches and regular drain cleaning. Attic units also work hardest in summer, in the hottest part of the house.</p>
<h3>Low basements in cottages</h3>
<p>Older cottages may have low ceilings where the furnace sits, limiting equipment choices and making horizontal or compact units the practical option.</p>
<h3>Upper floors running hot</h3>
<p>Third floors and roof decks gain heat fast. Correct duct sizing, returns on the top floor and zoning make the biggest difference.</p>`,
      },
      {
        h2: 'Keeping a Bucktown top floor comfortable',
        html: `<p>We check the upstairs system first: filter, coil, refrigerant charge and blower setting. Then airflow: whether the top floor has enough supply and, just as important, enough return. On zoned single-system homes we verify the dampers and zone board. If the upper system is simply undersized for a floor with roof-deck exposure, we’ll say so and size a replacement properly. See <a href="/ac-repair/">AC repair</a> and <a href="/thermostat-installation/">thermostats and zoning</a>.</p>`,
      },
      {
        h2: 'Utilities and rebates in Bucktown',
        html: peoplesGas('Bucktown', 'Two-system homes replacing both furnaces may qualify for a rebate on each high-efficiency furnace. Individually metered condos qualify as well.'),
      },
    ],
    faqs: [
      { q: 'Why is my top floor always warmer?', a: 'Heat rises, upper floors gain sun through the roof, and returns are often undersized upstairs. Balancing, added returns or zoning usually help.' },
      { q: 'How often should my attic air handler be serviced?', a: 'Every year before cooling season, including the condensate drain and safety switch.' },
      { q: 'My cottage basement is low. Can a new furnace fit?', a: 'Usually, with a compact or horizontal unit. We check the space before recommending equipment.' },
      { q: "Do you service condo units in Bucktown?", a: "Yes, for equipment that serves your unit, such as your furnace, air handler or condenser. Building-wide systems are handled by the association." },
      { q: "Our top floor has a roof deck. Do we need a bigger AC?", a: "Not always. We check duct sizing, top-floor returns and zoning first. If the upper system is undersized for the floor, we size a replacement properly." },
      emergencyFaq('Bucktown'),
    ],
    nearbySlugs: ['wicker-park', 'logan-square', 'lincoln-park'],
  },

  'wicker-park': {
    h1: 'Furnace, Boiler & AC Repair in Wicker Park, Chicago',
    title: 'HVAC Repair in Wicker Park, Chicago | Chicago Aircare Pro',
    meta: 'Loft split systems, rooftop condensers, greystone boilers and ductless cooling in Wicker Park, from historic greystones to lofts. 24/7 HVAC.',
    intro: `${business.displayName} services furnaces, boilers, central air and mini-splits in Wicker Park, from historic greystones to converted lofts. Greystones usually need boiler care and a way to add cooling; lofts need split systems kept running and condensate drains kept clear.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Wicker Park',
        html: `<p>Wicker Park’s historic district has large Victorian greystones and mansions, surrounded by brick two- and three-flats and loft conversions along the commercial corridors. Lofts often have high ceilings and ducted split systems; greystones often still have boilers.</p>
<p>Those are two very different kinds of HVAC. Greystone boilers are about water, pressure and balance. Loft split systems are about airflow in tall spaces, drains above finished ceilings, and condensers on the roof.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in Wicker Park',
        html: `<h3>Lofts with high ceilings</h3>
<p>Warm air collects near tall ceilings. Return placement, ceiling fans and correct supply sizing keep lofts comfortable.</p>
<h3>Greystones with boilers</h3>
<p>Large boiler-heated homes need balanced radiators and well-maintained boilers; ductless systems are a common way to add cooling.</p>
<h3>Split systems in condo lofts</h3>
<p>Air handlers above ceilings or in closets with condensers on the roof require good access and well-maintained condensate drains. A drain that clogs above a finished ceiling shows up as a stain or drip below, so we clear it and test the safety switch on every visit.</p>`,
      },
      {
        h2: 'Servicing loft systems in Wicker Park',
        html: `<p>A loft visit covers both halves of the split system. Inside: filter, blower, coil and condensate drain and pan. On the roof: condenser coil, refrigerant pressures, electrical connections and secure mounting. We coordinate roof access with building management when required, and we only work where access is safe. If the condenser is reaching the end of its life, we size the replacement to the loft, not just the old nameplate. See <a href="/ac-tune-up/">AC tune-up</a>.</p>`,
      },
      {
        h2: 'Utilities and rebates in Wicker Park',
        html: peoplesGas('Wicker Park', 'Greystone owners replacing a boiler can use the hot-water or steam boiler rebates. Individually metered condo lofts with their own gas furnace can use the furnace and smart thermostat rebates.'),
      },
    ],
    faqs: [
      { q: 'Do you service rooftop condensers on loft buildings?', a: 'Yes, where there is safe roof access. We coordinate with building management when required.' },
      { q: 'How do I keep a high-ceiling loft comfortable?', a: 'Return placement, ceiling fans and correct supply sizing keep warm air from collecting near the ceiling.' },
      { q: 'Can I add cooling to a greystone heated by a boiler?', a: 'Yes. Ductless mini-splits are a common way to add cooling to boiler-heated homes without ductwork.' },
      { q: "Why is there a water stain on the ceiling under my loft air handler?", a: "Usually a clogged condensate drain or an overflowing pan. Turn the system off and call. We clear the drain and test the safety switch." },
      { q: "Do you service boilers in Wicker Park greystones?", a: "Yes. Large boiler-heated homes need balanced radiators and well-maintained boilers, and we work on both hot-water and steam systems." },
      emergencyFaq('Wicker Park'),
    ],
    nearbySlugs: ['bucktown', 'ukrainian-village', 'west-town'],
  },

  'humboldt-park': {
    h1: 'Boiler, Furnace & AC Repair in Humboldt Park, Chicago',
    title: 'Boiler & Furnace Repair Humboldt Park | Chicago Aircare Pro',
    meta: 'Older boiler safety checks, unit-by-unit furnace venting and rehab HVAC planning for Humboldt Park greystones, two-flats and frame homes. 24/7.',
    intro: `${business.displayName} repairs and installs heating and cooling systems in Humboldt Park homes, including greystones, two-flats and frame houses around the park. Older boilers, buildings with a furnace per unit and gut rehabs are the work we see most.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Humboldt Park',
        html: `<p>Humboldt Park has greystones and brick two- and three-flats along its boulevards and around the park, plus frame houses and newer rehabs. Many buildings have older boilers or furnaces per unit.</p>
<p>Older equipment can run safely for a long time, but only if its safety controls are tested. And in buildings with several furnaces, a change to one affects the others, because they often share a chimney.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in Humboldt Park',
        html: `<h3>Older boilers</h3>
<p>Old boilers need their low-water cutoffs, pressure controls and venting checked to stay safe. The low-water cutoff shuts the burner off if the water level drops; the pressure control limits how hard the boiler fires. Both should be tested, not just looked at.</p>
<h3>Unit-by-unit furnaces</h3>
<p>Buildings with a furnace per unit need each one’s venting and combustion checked, especially after another furnace is replaced. When one furnace leaves a shared chimney for PVC venting, the remaining appliances can draft differently.</p>
<h3>Rehab planning</h3>
<p>Gut rehabs are the best time to plan duct routes, returns and equipment locations.</p>`,
      },
      {
        h2: 'Planning HVAC in a Humboldt Park rehab',
        html: `<p>Bring us in before framing is finished. We size equipment for each unit from its heat loss, lay out supply and return routes that fit the framing, choose equipment locations with service access, and plan venting for high-efficiency furnaces and the water heater. Planned early, ducts go where they should; planned late, they go where they fit. New-system estimates are free. See <a href="/furnace-installation/">furnace installation</a>.</p>`,
      },
      {
        h2: 'Utilities and rebates in Humboldt Park',
        html: peoplesGas('Humboldt Park', 'Two-flats qualify, so a rehab that installs a high-efficiency furnace in each unit may be eligible for a rebate per furnace. Older boilers being replaced can use the boiler rebates.'),
      },
    ],
    faqs: [
      { q: 'I’m rehabbing a two-flat. When should HVAC be planned?', a: 'Before framing is finished, so ducts, returns, venting and equipment locations fit.' },
      { q: 'Is my old boiler safe?', a: 'It can be, if the low-water cutoff, pressure controls and venting test properly. A yearly service checks all three.' },
      { q: 'We replaced one furnace in our building. Do the others need checking?', a: 'Yes. If the furnaces shared a chimney, the remaining appliances’ venting and combustion should be checked after the change.' },
      { q: "Do you work on the furnace in each unit of a three-flat?", a: "Yes. We check each furnace’s venting and combustion, which matters most after one of the furnaces has been replaced." },
      { q: "Are estimates free for a rehab?", a: "Estimates for new furnaces, boilers, air conditioners and heat pumps are free. Bring us in before framing is finished so the plan fits." },
      emergencyFaq('Humboldt Park'),
    ],
    nearbySlugs: ['logan-square', 'west-town', 'ukrainian-village'],
  },

  'ukrainian-village': {
    h1: 'Furnace, Boiler & AC Repair in Ukrainian Village, Chicago',
    title: 'HVAC Repair in Ukrainian Village | Chicago Aircare Pro',
    meta: 'Closet furnaces, gangway and rooftop condensers and shared boilers in Ukrainian Village two-flats, cottages and condos. Furnace and AC repair, 24/7.',
    intro: `${business.displayName} services furnaces, boilers and air conditioners in Ukrainian Village homes and condo buildings. Renovated two-flats with compact equipment in closets, condensers in narrow gangways and older buildings still on a shared boiler are typical here.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Ukrainian Village',
        html: `<p>Ukrainian Village has brick two- and three-flats, workers’ cottages and some newer condo buildings. Many two-flats have been renovated with new forced-air systems in tight spaces.</p>
<p>Fitting a furnace, ducts and a condenser into a narrow two-flat takes compromises, and the most common one is return air. Equipment that can’t breathe gets loud, runs hot and wears out early. Outdoor units squeezed into gangways face the same problem from the other side.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in Ukrainian Village',
        html: `<h3>Compact equipment in renovations</h3>
<p>Renovated units often put furnaces and air handlers in closets; return air and service access must be adequate. If a technician can’t reach the filter, blower or drain, maintenance gets skipped.</p>
<h3>Condensers in gangways and on roofs</h3>
<p>Outdoor units in narrow spaces need clearance for airflow and service. A condenser that breathes its own exhaust loses capacity on the hottest days.</p>
<h3>Boilers in older buildings</h3>
<p>Unrenovated buildings may still share a boiler that needs regular service.</p>`,
      },
      {
        h2: 'Diagnosing a loud closet furnace',
        html: `<p>We measure static pressure, the pressure the blower works against. High readings point to an undersized return, a restrictive filter, a dirty coil or undersized ducts. The fix can be as simple as a different filter, or as involved as an added return grille. Either way, you get the reading and the options before any work. See <a href="/furnace-repair/">furnace repair</a>.</p>`,
      },
      {
        h2: 'Utilities and rebates in Ukrainian Village',
        html: peoplesGas('Ukrainian Village', 'Renovated two-flats and individually metered condos with their own furnace can qualify for the furnace and smart thermostat rebates. Shared-boiler buildings can use the boiler rebates.'),
      },
    ],
    faqs: [
      { q: 'My closet furnace is loud. Why?', a: 'Often an undersized return or a restrictive filter. We measure static pressure to find the cause.' },
      { q: 'Does my gangway condenser have enough room?', a: 'It needs clearance on its sides and top for airflow and service. We check clearance on every AC visit.' },
      { q: 'Do you service shared boilers in older two-flats?', a: 'Yes. Shared boilers need regular service, including safety controls and venting.' },
      { q: "Can a new furnace fit in my renovated closet?", a: "Usually, if there is adequate return air and room for service access. We measure the space and check both before recommending equipment." },
      { q: "Can you work on a roof-mounted condenser in Ukrainian Village?", a: "Yes, where there is safe access and enough clearance for airflow and service." },
      emergencyFaq('Ukrainian Village'),
    ],
    nearbySlugs: ['wicker-park', 'west-town', 'humboldt-park'],
  },

  'west-town': {
    h1: 'HVAC Repair in West Town, Chicago: Condos, Lofts & Townhomes',
    title: 'HVAC Repair in West Town, Chicago | Chicago Aircare Pro',
    meta: 'Condo split systems, ceiling leaks from air handlers, rooftop condensers and townhome zoning in River West, Noble Square and East Village. 24/7.',
    intro: `${business.displayName} provides heating and cooling service across West Town, including River West, Noble Square and East Village. Condo and loft split systems with air handlers above ceilings, rooftop condensers and multi-level townhomes are most of our work here.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in West Town',
        html: `<p>West Town includes loft conversions, new-construction condos and townhomes, and older two- and three-flats. Condos and lofts commonly use split systems with air handlers in closets or above ceilings and condensers on the roof.</p>
<p>Split systems are reliable, but their weak point in a condo is the condensate drain. Air conditioning pulls water out of the air, and that water has to drain away; when it can’t, it ends up in the ceiling.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in West Town',
        html: `<h3>Condo split systems</h3>
<p>Air handlers above ceilings need accessible filters and clean condensate drains; clogged drains cause ceiling leaks.</p>
<h3>Rooftop condensers</h3>
<p>Roof units need safe access and secure mounting; we coordinate with building management.</p>
<h3>Townhome zoning</h3>
<p>Multi-level townhomes often need zoning or two systems to keep top floors comfortable. The bottom floor wants heat while the top floor wants cooling, and one thermostat can’t satisfy both.</p>`,
      },
      {
        h2: 'If water is dripping from your ceiling',
        html: `<p>Turn the system off at the thermostat to stop more water from forming, put a container under the drip, and call. It’s usually a clogged condensate drain or an overflowing pan. We clear and flush the drain, check the pan, and test or add a float switch that shuts the system off before it overflows again. A yearly <a href="/ac-tune-up/">AC tune-up</a> includes the drain.</p>`,
      },
      {
        h2: 'Utilities and rebates in West Town',
        html: peoplesGas('West Town', 'Individually metered condos and townhomes qualify, so owners with their own gas furnace can use the furnace and smart thermostat rebates.'),
      },
    ],
    faqs: [
      { q: 'Water is dripping from my ceiling under the air handler. What should I do?', a: 'Turn the system off at the thermostat and call. It’s usually a clogged condensate drain or an overflowing pan.' },
      { q: 'Can you service a rooftop condenser for my condo?', a: 'Yes, with safe roof access. We coordinate with building management.' },
      { q: 'Why is the top floor of my townhome too warm?', a: 'One system serving several levels struggles to satisfy all of them. Zoning or a second system usually fixes it.' },
      { q: "Where is the filter for an air handler above my ceiling?", a: "Usually in a return grille or at the air handler itself, behind an access panel. If it is hard to reach, filters get skipped, so we look at improving access." },
      { q: "Do you work in River West, Noble Square and East Village?", a: "Yes. We serve all of West Town, including River West, Noble Square and East Village." },
      emergencyFaq('West Town'),
    ],
    nearbySlugs: ['wicker-park', 'ukrainian-village', 'old-town-gold-coast'],
  },

  austin: {
    h1: 'Furnace, Boiler & AC Repair in Austin, Chicago',
    title: 'Furnace & Boiler Repair in Austin | Chicago Aircare Pro',
    meta: 'Boiler and radiator service for Austin’s Victorian homes, bungalow furnace safety checks and repair-first HVAC service on the West Side. 24/7.',
    intro: `${business.displayName} repairs and replaces furnaces, boilers and air conditioners in Austin homes on Chicago’s West Side. We show repair options first and recommend replacement only when a system is unsafe or no longer worth repairing.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Austin',
        html: `<p>Austin has large Victorian and Queen Anne homes in its historic districts, brick bungalows, two-flats and apartment buildings. Many larger homes still heat with boilers and radiators; bungalows typically have forced-air furnaces.</p>
<p>That gives Austin two distinct kinds of service call: big radiator-heated homes where the boiler, venting and radiator balance matter most, and bungalows where an older furnace needs a careful safety check before another winter.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in Austin',
        html: `<h3>Large homes with radiators</h3>
<p>Boiler service, radiator balancing and safe venting keep large older homes warm. In a big house, the radiators farthest from the boiler are the first to go lukewarm when air, pressure or flow is off.</p>
<h3>Bungalow furnaces</h3>
<p>Older furnaces benefit from a safety check of the heat exchanger and venting before winter. We inspect the heat exchanger, test the flame and safety switches, and confirm the flue is drafting.</p>
<h3>Repair-first approach</h3>
<p>We show repair options first and recommend replacement only when a system is unsafe or no longer worth repairing.</p>`,
      },
      {
        h2: 'How we decide between repair and replacement in Austin',
        html: `<p>Safety comes first: a cracked heat exchanger, a failing vent or bypassed safety controls are reasons to stop. If the system is safe, we price the repair and compare it with the equipment’s age, condition and recent repair history. You see both numbers and decide. When replacement is the answer, new-system estimates are free and financing is available through ${business.financingPartner}, subject to credit approval. Working carbon monoxide alarms are a must in any home with gas heat. See <a href="/carbon-monoxide-safety/">carbon monoxide safety</a>.</p>`,
      },
      {
        h2: 'Utilities and rebates in Austin',
        html: peoplesGas('Austin', 'Large radiator-heated homes can use the hot-water or steam boiler rebates when a boiler is replaced; bungalows moving to a condensing furnace can use the furnace rebates.'),
      },
    ],
    faqs: [
      { q: 'Is it safe to keep running a very old furnace?', a: 'It can be, if the heat exchanger, venting and safety controls check out. A yearly safety check tells you.' },
      { q: 'Do you repair boilers in large Austin homes?', a: 'Yes, both hot-water and steam. Boiler service, radiator balancing and venting checks keep large older homes warm.' },
      { q: 'Will you tell me if a repair isn’t worth it?', a: 'Yes. We show repair options first and recommend replacement only when a system is unsafe or no longer worth repairing.' },
      { q: "Do you service furnaces in Austin bungalows?", a: "Yes. Bungalows in Austin typically have forced-air furnaces, and we recommend a safety check of the heat exchanger and venting before winter." },
      { q: "Do you work in Austin’s historic districts?", a: "Yes. Large Victorian and Queen Anne homes there often still heat with boilers and radiators, and we service both hot-water and steam systems." },
      emergencyFaq('Austin'),
    ],
    nearbySlugs: ['humboldt-park', 'portage-park', 'chicago'],
  },
};

/* ------------------------------------------------------------------ */
/* North suburbs                                                       */
/* ------------------------------------------------------------------ */
const northSuburbs: Record<string, AreaContent> = {
  evanston: {
    h1: 'HVAC Repair in Evanston, IL: Furnaces, Boilers & AC',
    title: 'HVAC Repair in Evanston, IL | Chicago Aircare Pro',
    meta: 'Steam and hot-water boilers, furnace and AC repair, ductless cooling and condo HVAC for Evanston homes, lakefront to west side. 24/7. Call or text.',
    intro: `${business.displayName} provides heating and cooling repair, replacement and maintenance for Evanston homes, from the lakefront to the west side. Early-20th-century houses on boilers, big homes that need more than one zone and condo units with their own equipment are the core of our Evanston work.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Evanston',
        html: `<p>Evanston has many early-20th-century single-family homes, including Victorian, Prairie-style and Tudor houses, along with two-flats, courtyard buildings and condos near downtown and Northwestern. Older homes frequently heat with hot-water or steam boilers.</p>
<p>Boiler heat suits these houses, but it leaves them without cooling, and their size makes even comfort harder. The condo buildings bring the opposite problem: compact equipment in small spaces that needs good return air to run quietly.</p>
${glance('Evanston', [
  ['About 55.8% of Evanston homes are owner-occupied (2019-2023).', 'U.S. Census QuickFacts: Evanston', 'https://www.census.gov/quickfacts/evanstoncityillinois'],
  ['The City of Evanston lists Nicor Gas as the natural gas provider.', 'City of Evanston utilities', 'https://cityofevanston.org/departments/public_works/services/utilities.php'],
])}`,
      },
      {
        h2: 'Common heating and cooling issues in Evanston',
        html: `<h3>Boiler homes adding cooling</h3>
<p>Ductless mini-splits and high-velocity systems add cooling to radiator-heated homes with minimal disruption. Ductless heads need only a small wall opening for the line set; high-velocity systems run small flexible ducts through closets and attics.</p>
<h3>Large older homes</h3>
<p>Bigger homes may need multiple zones or systems for even comfort. A three-story house rarely heats or cools evenly from a single thermostat.</p>
<h3>Condo units</h3>
<p>Condo owners with their own furnace or heat pump often need compact equipment and good return air. Equipment that serves your unit is usually yours to maintain; building-wide systems belong to the association.</p>`,
      },
      {
        h2: 'Steam and hot-water boiler service in Evanston',
        html: `<p>We work on both. Hot-water systems get air purging, an expansion tank and circulator check and a pressure relief valve test. Steam systems get a sight-glass and water-level check, a low-water cutoff test and a look at main and radiator vents, the usual cause of uneven heat and banging pipes. Both get burner, venting and safety-control checks. When a boiler is near the end of its life, we compare replacement options and the Nicor Gas boiler rebates. See <a href="/boiler-repair/">boiler repair</a>.</p>`,
      },
      {
        h2: 'Utilities and rebates in Evanston',
        html: nicor('Evanston', 'For Evanston’s many boiler homes, note that Nicor Gas lists boiler rebates alongside its furnace rebates, so a boiler replacement may qualify too.'),
      },
    ],
    faqs: [
      { q: 'Do you work on steam boilers in Evanston homes?', a: 'Yes, both steam and hot-water boilers. See our boiler repair page for details.' },
      { q: 'Can I add central air to an Evanston home with radiators?', a: 'Yes, usually with ductless mini-splits or a high-velocity system that uses small ducts. Both add cooling with minimal disruption.' },
      { q: 'Do you service condo units in Evanston?', a: 'Yes, when the furnace, heat pump or AC serves your unit. Building-wide systems are handled by the association.' },
      { q: "Who provides natural gas in Evanston?", a: "The City of Evanston lists Nicor Gas as the natural gas provider, and electricity comes from ComEd. Your gas bill shows which utility serves your address." },
      { q: "Does a big older Evanston home need more than one system?", a: "Not always, but bigger homes may need multiple zones or systems for even comfort. We assess the load and layout first." },
      emergencyFaq('Evanston'),
    ],
    nearbySlugs: ['skokie', 'wilmette', 'rogers-park'],
  },

  skokie: {
    h1: 'HVAC Repair in Skokie, IL: Furnace & AC Service',
    title: 'HVAC Repair in Skokie, IL | Chicago Aircare Pro',
    meta: 'Furnace and AC repair and replacement for Skokie ranches, split-levels and Cape Cods. Split-level balancing, added returns, condos. 24/7.',
    intro: `${business.displayName} repairs and installs heating and cooling systems in Skokie, including east and west Skokie and the Old Orchard area. Post-war homes on original ductwork and furnaces and ACs at the end of their life are what we see most.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Skokie',
        html: `<p>Much of Skokie was built after World War II: brick ranches, split-levels, raised ranches and Cape Cods, plus townhomes and condos near Old Orchard. Many homes are on aging furnaces and ACs and original ductwork.</p>
<p>Original ductwork in these homes was usually sized for heating. It often has too few returns for today’s equipment, and the split-level layout makes some levels harder to reach than others. Fix the airflow and a new system performs as rated; skip it and the same comfort complaints follow the new equipment.</p>
${glance('Skokie', [['The median Skokie home was built in 1959, and about 74% of homes are owner-occupied (ACS data via a secondary aggregator).', 'City-Stats: Skokie housing', 'https://city-stats.com/illinois/skokie/housing']])}`,
      },
      {
        h2: 'Common heating and cooling issues in Skokie',
        html: `<h3>Split-level temperature differences</h3>
<p>Split-levels often have one level noticeably warmer or cooler. Balancing dampers, added returns or zoning help. Many homes benefit from two damper settings, one for heating season and one for cooling.</p>
<h3>Undersized returns</h3>
<p>Original ductwork often has too few returns for modern equipment, causing noise and reduced airflow. We measure static pressure to confirm before recommending changes.</p>
<h3>End-of-life equipment</h3>
<p>Many systems from the 1990s and 2000s are due for replacement; we size new equipment to the home. Copying the old nameplate often repeats an oversizing mistake.</p>`,
      },
      {
        h2: 'Replacing a furnace and AC in a Skokie home',
        html: `<p>We start with a load calculation and a duct check, then quote options: a matched furnace and AC, and where it makes sense a heat pump paired with a furnace. Each quote includes the venting, return-air and electrical work the job needs, so the price you see is the price of a system that works. New-system estimates are free, and financing is available through ${business.financingPartner}, subject to credit approval. See <a href="/furnace-installation/">furnace installation</a> and <a href="/ac-installation/">AC installation</a>.</p>`,
      },
      {
        h2: 'Utilities and rebates in Skokie',
        html: nicor('Skokie', 'Furnace replacements in Skokie’s post-war homes are the most common case for the Nicor Gas furnace rebates; a smart thermostat installed with the new system may qualify too.'),
      },
    ],
    faqs: [
      { q: 'Do you service townhomes and condos in Skokie?', a: 'Yes, for equipment that serves your unit.' },
      { q: 'Why is one level of my split-level always warmer?', a: 'Air favors the easiest path. Balancing dampers, added returns or zoning usually even it out.' },
      { q: 'Is my original ductwork good enough for a new AC?', a: 'Often, but many Skokie homes have too few returns. We measure static pressure and check returns before sizing a new system.' },
      { q: "Do you serve both east and west Skokie?", a: "Yes, including east and west Skokie and the Old Orchard area." },
      { q: "Can a heat pump work in a Skokie home?", a: "Yes, often paired with a gas furnace as a dual-fuel system: the heat pump cools in summer and heats in mild weather, and the furnace takes over in deep cold." },
      emergencyFaq('Skokie'),
    ],
    nearbySlugs: ['evanston', 'wilmette', 'west-ridge'],
  },

  wilmette: {
    h1: 'HVAC Repair in Wilmette, IL: Furnaces, Boilers & AC',
    title: 'HVAC Repair in Wilmette, IL | Chicago Aircare Pro',
    meta: 'Boilers and radiators in east Wilmette, forced air west of the Edens, two-system homes and whole-home humidity control. 24/7 HVAC service.',
    intro: `${business.displayName} provides heating and cooling service for Wilmette homes, from older houses on the east side to mid-century homes west of the Edens. Boiler homes, two-system homes and dry winter air are the recurring themes here.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Wilmette',
        html: `<p>East Wilmette has many older single-family homes, some with boilers and radiators; west Wilmette has more mid-century ranches and two-stories with forced air. Larger homes commonly have two systems.</p>
<p>Which side of town you’re on often tells us what we’ll find in the basement. East-side boiler homes need water-side care and a plan for cooling; west-side forced-air homes need airflow, filtration and, in larger houses, two systems kept in step.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in Wilmette',
        html: `<h3>Two-system homes</h3>
<p>Homes with separate upstairs and downstairs systems need both serviced; attic units need condensate safety checks. If the upstairs system is in the attic, a clogged drain can leak into the ceiling below.</p>
<h3>Boilers in older homes</h3>
<p>Boiler service and radiator balancing keep older homes comfortable; ductless adds cooling.</p>
<h3>Humidity</h3>
<p>Large homes benefit from whole-home humidification in winter and dehumidification in damp basements. Forced-air heating dries indoor air, which shows up as static, dry skin and gaps in wood floors.</p>`,
      },
      {
        h2: 'Whole-home humidity control in Wilmette',
        html: `<p>A <a href="/whole-home-humidifiers/">whole-home humidifier</a> mounts on the furnace and adds moisture to the air it distributes, controlled by a humidistat so windows don’t fog. In summer, a <a href="/whole-home-dehumidifiers/">whole-home dehumidifier</a> keeps a basement dry without a portable unit to empty. Both need yearly service: a new water panel or pad for the humidifier, a clean filter and drain for the dehumidifier.</p>`,
      },
      {
        h2: 'Utilities and rebates in Wilmette',
        html: nicor('Wilmette', 'East-side boiler homes should note the Nicor Gas boiler rebates; west-side forced-air homes, the furnace rebates. A smart thermostat on each system may qualify too.'),
      },
    ],
    faqs: [
      { q: 'Should I add a humidifier to my furnace?', a: 'If winter air is dry (static, dry skin, gaps in wood floors), a whole-home humidifier helps. See our whole-home humidifiers page.' },
      { q: 'Do both of my systems need yearly service?', a: 'Yes. Homes with separate upstairs and downstairs systems need both serviced, and attic units need their condensate safety switch checked.' },
      { q: 'Can I add cooling to an east Wilmette home with radiators?', a: 'Yes. Ductless mini-splits add cooling to boiler-heated homes without ductwork.' },
      { q: "Do you work on both sides of Wilmette?", a: "Yes, from older homes on the east side to mid-century ranches and two-stories west of the Edens." },
      { q: "Do I need a dehumidifier for my Wilmette basement?", a: "If the basement feels damp or smells musty in summer, a whole-home dehumidifier keeps it dry without a portable unit to empty." },
      { q: "Can you balance the radiators in my older Wilmette home?", a: "Yes. Boiler service and radiator balancing keep older homes comfortable from room to room." },
      emergencyFaq('Wilmette'),
    ],
    nearbySlugs: ['evanston', 'skokie', 'highland-park'],
  },

  'highland-park': {
    h1: 'HVAC Repair in Highland Park, IL: Multi-System Homes',
    title: 'HVAC Repair in Highland Park, IL | Chicago Aircare Pro',
    meta: 'Multi-system and zoned homes, mid-century slab ductwork, humidifiers, media filters and UV lights in Highland Park. Furnace, boiler and AC, 24/7.',
    intro: `${business.displayName} repairs and installs heating and cooling systems in Highland Park homes. Larger houses with several systems and zoning, mid-century homes with ducts in tight spaces, and air quality equipment that needs regular service make up most of our work here.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Highland Park',
        html: `<p>Highland Park has a wide range of homes: older houses near the lake and ravines, mid-century modern homes, and large newer houses. Bigger homes often have multiple systems, zoning, humidifiers and air cleaners.</p>
<p>More equipment means more to keep track of. We record what each system serves, its model, filter size and service history, so every visit starts from a complete picture instead of a guess.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in Highland Park',
        html: `<h3>Multiple systems and zoning</h3>
<p>Large homes may have three or more systems; we service each and check zoning controls. A stuck damper or misconfigured zone board can make one wing too hot while the equipment itself is fine.</p>
<h3>Mid-century homes</h3>
<p>Slab and low-profile homes can have ductwork in slabs or tight spaces; we assess before recommending changes. Ducts in a slab can’t easily be replaced, so the options often involve working around them.</p>
<h3>Air quality equipment</h3>
<p>Humidifiers, media filters and UV lights on larger systems need regular service. A UV lamp loses output over time even while it still glows, and a clogged media filter restricts airflow. See <a href="/uv-air-sanitizers/">UV air sanitizers</a> and <a href="/air-purifiers/">air purifiers</a>.</p>`,
      },
      {
        h2: 'Boilers and hot water in Highland Park homes',
        html: `<p>Older homes near the lake may heat with hot-water or steam boilers. We service both, and when replacement is due we compare high-efficiency hot-water boilers with like-for-like steam replacements, since a steam system can’t simply be swapped for a hot-water boiler without changing the piping. See <a href="/boiler-installation/">boiler installation</a>.</p>`,
      },
      {
        h2: 'Utilities and rebates in Highland Park',
        html: `<p>Most Highland Park homes get natural gas from North Shore Gas and electricity from ComEd.</p>
<p>For 2026, North Shore Gas lists rebates of $200 for a 95% AFUE or higher furnace, $350 for a hot-water boiler (88% AFUE or higher), $150 for a steam boiler and $25 for a smart thermostat. In multi-system homes, each qualifying furnace or thermostat may count. Check current amounts before you buy: ${ext('https://www.northshoregasdelivery.com/savings/rebates-residential', 'North Shore Gas Home Energy Rebates')}.</p>${CONFIRM}`,
      },
    ],
    faqs: [
      { q: 'Can you service a home with several HVAC systems?', a: 'Yes. We keep a record of each system’s equipment and service history.' },
      { q: 'My mid-century home has ducts in the slab. Can it get new equipment?', a: 'Usually, yes. We assess the slab ducts and tight spaces before recommending changes, and plan around ducts that can’t be replaced.' },
      { q: 'How often do humidifiers, media filters and UV lights need service?', a: 'They need regular service, typically checked at each system tune-up. Pads, filters and lamps are replaced as needed.' },
      { q: "Who provides natural gas in Highland Park?", a: "Most Highland Park homes get natural gas from North Shore Gas and electricity from ComEd." },
      { q: "Can you check the zoning in a large Highland Park home?", a: "Yes. We service each system and check the zoning controls, including dampers and the zone board." },
      emergencyFaq('Highland Park'),
    ],
    nearbySlugs: ['wilmette', 'skokie', 'evanston'],
  },
};

/* ------------------------------------------------------------------ */
/* Northwest & west suburbs                                            */
/* ------------------------------------------------------------------ */
const westSuburbs: Record<string, AreaContent> = {
  'des-plaines': {
    h1: 'HVAC Repair in Des Plaines, IL: Furnace & AC Service',
    title: 'HVAC Repair in Des Plaines, IL | Chicago Aircare Pro',
    meta: 'Furnace and AC repair and matched replacements for Des Plaines ranches, split-levels and bungalows. Airflow balancing, basements. 24/7.',
    intro: `${business.displayName} provides heating and cooling service in Des Plaines homes. Mid-century ranches and split-levels on original ductwork, with furnaces and ACs that are both getting old, describe most of the homes we work in here.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Des Plaines',
        html: `<p>Des Plaines has many mid-century ranches, split-levels and bungalows, along with newer homes and townhomes. Original ductwork and aging furnaces and ACs are common.</p>
<p>When the equipment is old and the ducts are original, the question isn’t only which furnace to buy. It’s whether the duct system can deliver what a new furnace and AC are rated for, and how to fix the rooms that have always been uncomfortable.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in Des Plaines',
        html: `<h3>Ranch and split-level airflow</h3>
<p>Long duct runs and level changes cause uneven rooms; balancing and returns are the first fixes. They cost far less than new equipment and often solve the complaint outright.</p>
<h3>Furnace and AC replacement</h3>
<p>When both are aging, a matched replacement is often the better long-term choice. The indoor coil sits on the furnace, and a matched pair is designed to work together.</p>
<h3>Basements</h3>
<p>Finished basements in older homes often need added supply and return paths, and humidity control.</p>`,
      },
      {
        h2: 'Sizing a new furnace for a Des Plaines home',
        html: `<p>For a breakdown, see <a href="/furnace-repair-des-plaines/">furnace repair in Des Plaines</a>; for a new system, <a href="/furnace-installation-des-plaines/">furnace and central air installation in Des Plaines</a>.</p><p>Many older furnaces are oversized. An oversized furnace heats in short bursts, leaves rooms uneven and cycles more often, which wears parts. We size from the home’s heating load, accounting for insulation, windows and any additions, not from the old furnace’s rating. The same goes for the AC: right-sized equipment runs longer, steadier cycles and removes more humidity. New-system estimates are free. See <a href="/furnace-installation/">furnace installation</a>.</p>`,
      },
      {
        h2: 'Utilities and rebates in Des Plaines',
        html: nicor('Des Plaines', 'A matched furnace and AC replacement is the typical Des Plaines project; the furnace side may qualify for the Nicor Gas rebate, and so may a smart thermostat installed with it.'),
      },
    ],
    faqs: [
      { q: 'How do I know if my furnace is the right size?', a: 'We look at the home’s heating load, not the old furnace’s rating. Many older furnaces are oversized.' },
      { q: 'Some rooms in my ranch are always uncomfortable. What helps?', a: 'Long duct runs leave far rooms weak. Balancing and added returns are the first fixes.' },
      { q: 'Should I replace my furnace and AC together?', a: 'When both are aging, a matched replacement is often the better long-term choice. If one is still healthy, we’ll tell you.' },
      { q: "Can you add heating and cooling to a finished basement?", a: "Yes. Finished basements in older homes often need added supply and return paths, plus humidity control." },
      { q: "Do you service townhomes in Des Plaines?", a: "Yes, for equipment that serves your unit." },
      emergencyFaq('Des Plaines'),
    ],
    nearbySlugs: ['edison-park', 'arlington-heights', 'skokie'],
  },

  'arlington-heights': {
    h1: 'HVAC Repair in Arlington Heights, IL: Furnace, AC & Heat Pumps',
    title: 'HVAC Repair in Arlington Heights, IL | Chicago Aircare Pro',
    meta: 'Furnace, AC and dual-fuel heat pump service in Arlington Heights. Two-story comfort, right-sized replacements for 1990s and 2000s systems. 24/7.',
    intro: `${business.displayName} repairs and replaces furnaces, air conditioners and heat pumps in Arlington Heights homes. Systems from the 1990s and 2000s are reaching replacement age here, and many owners want to know about heat pumps as well as furnaces.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Arlington Heights',
        html: `<p>Arlington Heights has many ranches, split-levels and two-story homes built from the 1950s to the 1980s, plus newer construction and townhomes. Systems from the 1990s and 2000s are reaching replacement age.</p>
<p>A replacement is the best chance in decades to fix comfort problems the old system never solved: the hot upstairs, the cold family room over the garage, the noisy return. It’s also when owners decide between a straight furnace-and-AC swap and a dual-fuel heat pump.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in Arlington Heights',
        html: `<h3>Two-story comfort</h3>
<p>Upstairs rooms running hot in summer usually point to returns, duct sizing or a need for zoning.</p>
<h3>Replacement sizing</h3>
<p>Replacing like-for-like often repeats oversizing; we size to the home. Homes that have had new windows or insulation since the original install usually need less capacity, not more.</p>
<h3>Heat pump options</h3>
<p>Dual-fuel heat pumps paired with an existing furnace are an option for homeowners interested in electrification.</p>`,
      },
      {
        h2: 'Dual-fuel heat pumps in Arlington Heights',
        html: `<p>A dual-fuel system replaces the air conditioner with a heat pump and keeps a gas furnace. The heat pump cools in summer and heats in mild weather; the furnace takes over in deep cold. The changeover point is set in the thermostat. It’s a practical way to add electric heating without giving up gas heat on the coldest days. We compare it side by side with a standard AC replacement. See <a href="/heat-pump-installation/">heat pump installation</a>.</p>`,
      },
      {
        h2: 'Utilities and rebates in Arlington Heights',
        html: nicor('Arlington Heights', 'If a replacement includes a high-efficiency furnace, the Nicor Gas furnace rebate may apply; a smart thermostat, needed to run a dual-fuel system well, may qualify too.'),
      },
    ],
    faqs: [
      { q: 'Can I add a heat pump and keep my furnace?', a: 'Yes. Dual-fuel systems use the heat pump in mild weather and the furnace in deep cold. See our heat pump installation page.' },
      { q: 'Why is my upstairs hot in summer?', a: 'Usually returns, duct sizing or a need for zoning. We check those before recommending equipment.' },
      { q: 'Should my new system be the same size as the old one?', a: 'Not necessarily. Like-for-like replacement often repeats oversizing; we size to the home.' },
      { q: "My system is from the 1990s. Should I replace it now?", a: "Not automatically. Many systems from the 1990s and 2000s are reaching replacement age, but if the equipment is safe and a repair makes sense, we show you that option first." },
      { q: "Do you work on townhomes and newer construction in Arlington Heights?", a: "Yes, along with ranches, split-levels and two-story homes." },
      emergencyFaq('Arlington Heights'),
    ],
    nearbySlugs: ['schaumburg', 'des-plaines', 'skokie'],
  },

  schaumburg: {
    h1: 'HVAC Repair in Schaumburg, IL: Homes, Townhomes & Condos',
    title: 'HVAC Repair in Schaumburg, IL | Chicago Aircare Pro',
    meta: 'Closet furnaces in townhomes and condos, aging subdivision systems and HOA-friendly AC replacement in Schaumburg. Furnace and AC repair, 24/7.',
    intro: `${business.displayName} provides heating and cooling service for Schaumburg homes, townhomes and condos. Closet furnaces, original or second-generation subdivision systems and association rules for outdoor units shape most of our work here.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Schaumburg',
        html: `<p>Schaumburg grew mostly from the 1960s through the 1990s: single-family subdivisions, townhomes and condo communities. Townhomes and condos often have furnaces in closets or utility rooms and condensers on pads or patios.</p>
<p>Closet installs work well when there is enough combustion air and return air, and poorly when there isn’t. Subdivision homes, many on their original or second set of equipment, raise the repair-or-replace question.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in Schaumburg',
        html: `<h3>Closet furnaces in townhomes</h3>
<p>Compact spaces need adequate combustion and return air; we check both on service and replacement. A closet door that was replaced with a solid one, or a return grille that was blocked, can starve a furnace.</p>
<h3>Aging subdivision equipment</h3>
<p>Many original or second-generation systems are due for replacement. We check safety first, then show repair and replacement options with prices.</p>
<h3>HOA rules</h3>
<p>Townhome and condo associations may have rules about outdoor unit placement; we plan around them.</p>`,
      },
      {
        h2: 'Replacing a closet furnace or patio condenser in a Schaumburg townhome',
        html: `<p>We measure the closet, check combustion and return air, and choose equipment that fits with room for service. For the condenser, we confirm the pad location, clearances and any association requirements before the install. If the furnace and AC are both aging, a matched pair avoids fitting a new coil to an old furnace. New-system estimates are free, and financing is available through ${business.financingPartner}, subject to credit approval. See <a href="/furnace-installation/">furnace installation</a>.</p>`,
      },
      {
        h2: 'Utilities and rebates in Schaumburg',
        html: nicor('Schaumburg', 'Townhomes and single-family homes replacing a furnace may qualify for the Nicor Gas furnace rebates; a smart thermostat may qualify too.'),
      },
    ],
    faqs: [
      { q: 'Do you work in townhome communities?', a: 'Yes. We service and replace equipment that serves your unit and follow your association’s rules.' },
      { q: 'My townhome furnace is in a closet. Is that a problem?', a: 'Not if it has adequate combustion and return air. We check both on every service and replacement.' },
      { q: 'Is my original subdivision furnace due for replacement?', a: 'Many are, but not all. We check safety first, then show repair and replacement options with prices.' },
      { q: "Does my association need to approve a new condenser location?", a: "Often, yes. Townhome and condo associations may have rules about outdoor unit placement, and we plan the installation around them." },
      { q: "Why does my closet furnace overheat or shut off?", a: "A common cause is not enough return or combustion air, for example a blocked return grille or a closet door that seals too tightly. We check both." },
      { q: "Are estimates free in Schaumburg?", a: "Estimates for new furnaces, air conditioners and heat pumps are free. Repair visits start with a diagnosis, and you get the price before any work begins." },
      emergencyFaq('Schaumburg'),
    ],
    nearbySlugs: ['arlington-heights', 'des-plaines', 'naperville'],
  },

  naperville: {
    h1: 'HVAC Repair in Naperville, IL: Furnace, AC & Zoning',
    title: 'HVAC Repair in Naperville, IL | Chicago Aircare Pro',
    meta: 'Two-story and two-system homes, zoning, humidity control and furnace and AC replacement in Naperville. Nicor Gas and Naperville Electric rebates.',
    intro: `${business.displayName} repairs and installs heating and cooling systems in Naperville homes. Large two-story homes with two systems or zoning, equipment from the 2000s reaching replacement age, and year-round humidity control are what we see most here.`,
    sections: [
      {
        h2: 'Homes and HVAC systems in Naperville',
        html: `<p>Naperville has a historic district of older homes near downtown, and many large two-story homes built from the 1980s through the 2000s. Larger homes often have two systems or zoning.</p>
<p>In the newer homes, the most common complaint is a warm second floor in summer. In the historic district, older homes bring their own mix of equipment. Either way, a good diagnosis starts with airflow, not with a new unit.</p>`,
      },
      {
        h2: 'Common heating and cooling issues in Naperville',
        html: `<h3>Two-story and two-system homes</h3>
<p>Second floors running warm is the most common comfort complaint; zoning or a separate upstairs system helps. Before either, we check returns, duct sizing and blower settings, which often fix it on their own.</p>
<h3>Equipment reaching replacement age</h3>
<p>Systems from the 2000s are aging out; we compare repair and replacement.</p>
<h3>Humidity control</h3>
<p>Large homes benefit from humidifiers in winter and dehumidifiers in summer basements. See <a href="/whole-home-humidifiers/">whole-home humidifiers</a> and <a href="/whole-home-dehumidifiers/">whole-home dehumidifiers</a>.</p>`,
      },
      {
        h2: 'Fixing a warm second floor in a Naperville home',
        html: `<p>We work from least to most invasive: confirm the upstairs returns are adequate, check duct sizing to the far bedrooms, set the blower speed for cooling, and adjust balancing dampers. If the home has one system for two floors and that isn’t enough, zoning with a correctly configured control board is the next step. A separate upstairs system is the last resort for homes where the duct layout can’t be fixed. See <a href="/thermostat-installation/">thermostats and zoning</a>.</p>`,
      },
      {
        h2: 'Utilities and rebates in Naperville',
        html: `<p>Naperville homes get natural gas from Nicor Gas and electricity from the City of Naperville Electric Utility, not ComEd.</p>
<p>For 2026, Nicor Gas lists furnace rebates of $150 to $225 depending on efficiency. The city’s electric utility runs its own rebates for smart thermostats, replacement central air conditioners and air-source heat pumps; see ${ext('https://www.naperville.il.us/energygrants/', 'Naperville Electric Utility energy efficiency programs')}. Check current amounts before you buy: ${ext(NICOR_URL, 'Nicor Gas Energy Efficiency Program rebates')}.</p>
<p>That means a Naperville AC or heat pump replacement may be eligible for a city electric rebate, while the furnace side may be eligible through Nicor Gas.</p>${CONFIRM}`,
      },
    ],
    faqs: [
      { q: 'My upstairs is always warmer in summer. Can that be fixed?', a: 'Usually: we check returns, duct sizing and blower settings first, then zoning or a second system if needed.' },
      { q: 'Is Naperville electricity from ComEd?', a: 'No. Naperville homes get electricity from the City of Naperville Electric Utility, which runs its own rebates for smart thermostats, replacement central air conditioners and air-source heat pumps. Natural gas comes from Nicor Gas.' },
      { q: 'Should I add a humidifier or dehumidifier?', a: 'Large homes often benefit from a whole-home humidifier in winter and a dehumidifier for damp basements in summer.' },
      { q: "Do you work on older homes in Naperville’s historic district?", a: "Yes. Older homes near downtown bring their own mix of equipment, and we start every visit with a diagnosis of what is there." },
      { q: "Can I get a rebate on a new air conditioner in Naperville?", a: "Possibly. The City of Naperville Electric Utility runs its own rebates for replacement central air conditioners, air-source heat pumps and smart thermostats. Check current amounts before you buy." },
      emergencyFaq('Naperville'),
    ],
    nearbySlugs: ['schaumburg', 'arlington-heights', 'des-plaines'],
  },
};


/* ------------------------------------------------------------------ */
/* Added 2026-11-28 (owner: "add Lincolnwood, Niles, Park Ridge, Morton Grove"; "make them unique").
 * No WordPress source pages exist for these towns. Local facts come only from the cited sources in each
 * "at a glance" list (ACS-based aggregators) and from the owner's own jobs; utilities only where a Nicor Gas
 * document lists the town (Niles, Park Ridge: Nicor municipality tariff list; Morton Grove: Nicor project notice).
 * Lincolnwood's gas utility was not verified, so that page makes no utility claim. */
const NICOR_TOWNS = 'https://www.nicorgas.com/content/dam/southern-co-gas/nicor-gas/docs/rates-and-riders/nicor-terms-and-conditions-territory-municipalities-to-which-this-schedule-is-applicable.pdf';
const NS_LW = 'https://www.neighborhoodscout.com/il/lincolnwood/real-estate';
const NS_NILES = 'https://www.neighborhoodscout.com/il/niles/rates/';
const NS_PR = 'https://www.neighborhoodscout.com/il/park-ridge/rates/';
const NS_MG = 'https://locationinc.neighborhoodscout.com/il/morton-grove/real-estate';

const addedSuburbs: Record<string, AreaContent> = {
  lincolnwood: {
    h1: 'Furnace & AC Repair in Lincolnwood, IL',
    title: 'Furnace & AC Repair in Lincolnwood, IL | Chicago Aircare Pro',
    meta: 'Furnace, AC and boiler repair in Lincolnwood, IL, from mid-century homes to newer two-system houses. Recent job: inducer motor replacement. 24/7.',
    intro: `Our most recent Lincolnwood job was a furnace inducer motor replacement. Most of the village’s homes went up in the 1940s through the 1960s, and a newer group of larger houses was built after 2000, so we see everything from original-era ductwork to two-system homes with high-efficiency venting.`,
    sections: [
      {
        h2: 'Recent job in Lincolnwood: an inducer motor',
        html: `<p>We replaced the draft inducer motor on a gas furnace in Lincolnwood. The inducer is the small fan that pushes exhaust out the flue before the burners are allowed to light; when it fails, the pressure switch never proves the venting and the furnace won’t fire. Here’s <a href="/furnace-inducer-motor-replacement/">what an inducer replacement involves and what changes the cost</a>.</p>
<p>Inducers wear out with hours of run time, and a worn one usually gets louder before it quits. A high whine or rattle in the first seconds after the furnace starts is the warning.</p>`,
      },
      {
        h2: 'Two kinds of Lincolnwood homes, two kinds of service calls',
        html: `<h3>Mid-century homes</h3>
<p>In homes from the 1940s to the 1960s, the ductwork is often original and was sized for heat, with fewer returns than today’s furnaces and ACs want. Weak airflow shows up as noisy registers, an AC that freezes its coil, or a furnace that trips its high limit. We measure static pressure before blaming the equipment.</p>
<h3>Homes built since 2000</h3>
<p>Newer, larger houses often have two systems and 90%+ furnaces vented with plastic pipe through a side wall. Those vents and condensate drains are the weak points: snow and ice over the vent, or a drain that freezes or clogs, will shut the furnace down on a cold night. Attic or second-floor equipment also needs its condensate safety switch tested every year.</p>
${glance('Lincolnwood', [['The median Lincolnwood home was built in 1959 (ACS data via a secondary aggregator).', 'City-Stats: Lincolnwood housing', 'https://city-stats.com/illinois/lincolnwood/housing'], ['About 65% of homes date from the 1940s through the 1960s, and about 14% were built in 2000 or later.', 'NeighborhoodScout: Lincolnwood', NS_LW]])}`,
      },
      {
        h2: 'Replacing a furnace or AC in Lincolnwood',
        html: `<p>When a furnace is past repair, we size the new one with a load calculation instead of copying the old nameplate, and we price the venting and condensate work a high-efficiency furnace needs. New-system estimates are free, and financing is available through ${business.financingPartner}, subject to credit approval. Book a <a href="/free-estimate/">free estimate</a>.</p>`,
      },
    ],
    faqs: [
      { q: 'My furnace starts, a fan runs, then it shuts off. What could it be?', a: 'Often the draft inducer, the pressure switch or its hose, a blocked vent, or a dirty flame sensor. We test each one before replacing anything, so you only pay for the part that failed.' },
      { q: 'Why does my side-wall furnace vent matter in winter?', a: 'High-efficiency furnaces vent through plastic pipe on a side wall. If snow or ice covers the vent or intake, the furnace shuts itself off. Keep them clear after a storm.' },
      { q: 'Is my older Lincolnwood home’s ductwork big enough for a new AC?', a: 'Sometimes not. Original ductwork from the 1950s was often sized for heating. We measure static pressure and look at the returns before sizing a new system.' },
      emergencyFaq('Lincolnwood'),
    ],
    nearbySlugs: ['skokie', 'west-ridge', 'morton-grove'],
  },

  niles: {
    h1: 'HVAC Service in Niles, IL: Homes, Condos & Townhomes',
    title: 'HVAC Service in Niles, IL: Homes & Condos | Chicago Aircare Pro',
    meta: 'Furnace and AC repair in Niles, IL for houses, condos and townhomes: shared condenser pads, closet furnaces, aging 1970s–90s systems. 24/7.',
    intro: `About half of the homes in Niles are detached houses; the rest are condos, townhomes and apartments. That split shapes most of our calls here: closet furnaces and air handlers in condo units, condensers on shared pads in townhome rows, and houses on systems that are on their second or third replacement.`,
    sections: [
      {
        h2: 'Condos and townhomes in Niles',
        html: `<p>In a condo or townhome, the equipment that serves your unit is usually yours to maintain, even when it sits in a hallway closet, on a shared pad or on the roof. We work on unit equipment and coordinate with the association when access or a shared area is involved.</p>
<ul><li><strong>Closet furnaces and air handlers:</strong> tight access, small filters that load up fast, and condensate drains that back up into the closet floor.</li>
<li><strong>Condensers on shared pads:</strong> make sure the outdoor unit we’re working on is actually yours. We match it to your unit before any work.</li>
<li><strong>Older AC units:</strong> many systems from the 1970s to the 1990s used R-22 refrigerant, which is no longer produced. When one of those leaks, replacement often makes more sense than refilling it.</li></ul>`,
      },
      {
        h2: 'Houses in Niles',
        html: `<p>Most Niles houses date from the 1940s through the 1960s, with a median build year of 1965, and close to a third were built from 1970 to 1999. That means many are on their second or third furnace and AC. The ductwork stayed the same while the equipment changed, so a new system can be noisy or short-cycle if it was oversized or the returns are small. We check airflow before recommending a size.</p>
${glance('Niles', [['The median Niles home was built in 1965 (ACS data via a secondary aggregator).', 'City-Stats: Niles housing', 'https://city-stats.com/illinois/niles/housing'], ['About 52.6% of Niles housing units are detached single-family homes.', 'Point2: Niles demographics', 'https://www.point2homes.com/US/Neighborhood/IL/Niles-Demographics.html'], ['About 62% of housing dates from the 1940s through the 1960s and about 29% from 1970 to 1999.', 'NeighborhoodScout: Niles', NS_NILES]])}`,
      },
      {
        h2: 'Utilities and rebates in Niles',
        html: `<p>Niles is on Nicor Gas’s list of municipalities it serves (${ext(NICOR_TOWNS, 'Nicor Gas territory list')}), and electricity comes from ComEd. Your gas bill confirms the utility for your address.</p>${NICOR_AMOUNTS}${CONFIRM}`,
      },
    ],
    faqs: [
      { q: 'Do you service furnaces and ACs in Niles condos?', a: 'Yes, for the equipment that serves your unit, including closet furnaces, air handlers and condensers on shared pads. We coordinate with the association when access is needed.' },
      { q: 'My AC uses R-22. Should I repair or replace it?', a: 'R-22 is no longer produced, so refilling a leaking system gets expensive and the leak comes back. On an older R-22 system with a leak, replacement is usually the better value. We give you both prices.' },
      { q: 'Why is my condo closet furnace leaking water?', a: 'Usually a clogged or disconnected condensate drain, or a frozen AC coil melting. Turn the system off and call; water near a furnace can damage the floor and the controls.' },
      emergencyFaq('Niles'),
    ],
    nearbySlugs: ['park-ridge', 'morton-grove', 'skokie'],
  },

  'park-ridge': {
    h1: 'Furnace, Boiler & AC Repair in Park Ridge, IL',
    title: 'Furnace, Boiler & AC Repair in Park Ridge, IL | Chicago Aircare Pro',
    meta: 'Park Ridge heating and cooling: boilers and radiators in older homes, furnace and AC replacement in mid-century houses, mini-splits. 24/7.',
    intro: `Park Ridge has more older homes than most of the suburbs around it: about one in six was built before 1940, and half date from the 1940s to the 1960s. That gives us a steady mix of hot-water and steam boilers in the older houses and forced-air systems in the post-war ones.`,
    sections: [
      {
        h2: 'Boilers and radiators in older Park Ridge homes',
        html: `<p>Pre-war houses are where we find most boilers in Park Ridge. Hot-water systems need the right pressure, working air vents and an expansion tank that isn’t waterlogged. Steam systems need a steady water line in the gauge glass, a clean low-water cutoff and radiator vents that open and close.</p>
<p>The usual complaints: one radiator that never gets hot, banging pipes, and a boiler that locks out on a cold morning. See <a href="/boiler-repair/">boiler repair</a>, <a href="/steam-heat-banging-pipes/">why steam pipes bang</a> and our job story on <a href="/steam-boiler-not-working-clogged-gauge-glass/">a steam boiler brought back by cleaning the gauge glass and pigtail</a>.</p>
<h3>Adding cooling without ductwork</h3>
<p>Boiler homes have no ducts for central air. Ductless <a href="/mini-split-installation/">mini-splits</a> cool the bedrooms and living areas without opening walls, and a heat pump model also heats in mild weather.</p>`,
      },
      {
        h2: 'Forced air in mid-century Park Ridge homes',
        html: `<p>Post-war homes mostly heat with a furnace and cool with central air on the same ductwork. When they’re due for replacement, we size the furnace and AC with a load calculation and check the returns, because the original ducts were usually sized for heat. See <a href="/furnace-installation/">furnace installation</a> and <a href="/ac-installation/">AC installation</a>.</p>
${glance('Park Ridge', [['The median Park Ridge home was built in 1960, and about 85% of homes are owner-occupied (ACS data via a secondary aggregator).', 'City-Stats: Park Ridge housing', 'https://city-stats.com/illinois/park-ridge/housing'], ['About 51% of housing dates from the 1940s through the 1960s, and about 16% was built before 1940.', 'NeighborhoodScout: Park Ridge', NS_PR]])}`,
      },
      {
        h2: 'Utilities and rebates in Park Ridge',
        html: `<p>Park Ridge is on Nicor Gas’s list of municipalities it serves (${ext(NICOR_TOWNS, 'Nicor Gas territory list')}), and electricity comes from ComEd. Boiler homes should look at the Nicor boiler rebates; forced-air homes at the furnace rebates.</p>${NICOR_AMOUNTS}${CONFIRM}`,
      },
    ],
    faqs: [
      { q: 'Do you work on steam and hot-water boilers in Park Ridge?', a: 'Yes, both: no heat, cold radiators, banging pipes, pressure and water-level problems, and boiler replacement when it’s time.' },
      { q: 'Can I get air conditioning in a Park Ridge home with radiators?', a: 'Yes. Ductless mini-splits are the usual answer, because they need no ductwork. A heat pump model can also take some of the heating load in spring and fall.' },
      { q: 'One radiator in my house never gets hot. Why?', a: 'On steam, usually a stuck radiator vent or a pipe that’s lost its pitch. On hot water, usually air in the radiator or a balancing problem. Both are fixable; see our guide on a boiler that’s not heating.' },
      emergencyFaq('Park Ridge'),
    ],
    nearbySlugs: ['edison-park', 'norwood-park', 'niles', 'des-plaines'],
  },

  'morton-grove': {
    h1: 'Furnace & AC Replacement and Repair in Morton Grove, IL',
    title: 'Furnace & AC Repair in Morton Grove, IL | Chicago Aircare Pro',
    meta: 'Morton Grove homes are mostly 1940s–60s builds: furnace and AC replacement, chimney liners, duct and return fixes, repairs 24/7.',
    intro: `Two out of three Morton Grove homes were built between the 1940s and the 1960s. In houses that age, the questions we get most are about replacement: what size, what efficiency, and what has to change around the furnace when the old one comes out.`,
    sections: [
      {
        h2: 'What changes when you replace an older furnace',
        html: `<p>Many older furnaces in Morton Grove vent up the chimney, often sharing it with the water heater. Moving to a 90%+ furnace changes that: the new furnace vents through plastic pipe, and the water heater can be left alone in a chimney that’s now too big for it. That “orphaned” water heater may need a chimney liner to draft safely. We check it on every quote, so it isn’t a surprise after the install.</p>
<p>A high-efficiency furnace also makes condensate, so it needs a drain, and in some basements a condensate pump. All of that belongs in the price you see. See <a href="/furnace-installation/">furnace installation</a> and <a href="/repair-or-replace-furnace/">repair or replace</a>.</p>`,
      },
      {
        h2: 'Ductwork that was sized for heat',
        html: `<p>Ducts in homes from this era were usually designed for a furnace, before central air. Adding or upsizing AC on the same ducts can mean noisy registers, a coil that freezes, and rooms that never cool. Before we size a new system, we measure static pressure and look at the returns; sometimes adding a return does more than a bigger AC. See <a href="/ductwork-repair/">ductwork repair</a>.</p>
${glance('Morton Grove', [['The median Morton Grove home was built in 1960 (ACS data via a secondary aggregator).', 'City-Stats: Morton Grove housing', 'https://city-stats.com/illinois/morton-grove/housing'], ['About 66% of housing dates from the 1940s through the 1960s.', 'NeighborhoodScout: Morton Grove', NS_MG]])}`,
      },
      {
        h2: 'Utilities and rebates in Morton Grove',
        html: `<p>Nicor Gas works on gas lines in Morton Grove under its system-upgrade program (${ext('https://www.nicorgas.com/company/where-we-are/work-in-your-neighborhood/current-projects.html', 'Nicor Gas current projects')}), and electricity comes from ComEd. Your gas bill confirms the utility for your address.</p>${NICOR_AMOUNTS}${CONFIRM}`,
      },
    ],
    faqs: [
      { q: 'Does my water heater need a chimney liner if I get a new furnace?', a: 'It can. When a high-efficiency furnace stops venting into the chimney, the water heater may be left in a chimney too large for it to draft properly. We check it during the estimate and include a liner in the quote if it’s needed.' },
      { q: 'Can I add central air to my Morton Grove home’s existing ducts?', a: 'Often, but older ducts were sized for heating. We measure airflow and returns first; sometimes a return or duct change is needed for the AC to work as rated.' },
      { q: 'Do you give free estimates for furnace and AC replacement?', a: `Yes, on new systems. Financing is available through ${business.financingPartner}, subject to credit approval.` },
      emergencyFaq('Morton Grove'),
    ],
    nearbySlugs: ['skokie', 'niles', 'lincolnwood'],
  },
};

/** All 37 area pages keyed by slug (must match business.serviceAreas). */
export const areaContent: Record<string, AreaContent> = {
  ...hub,
  ...northSide,
  ...northwestSide,
  ...westSide,
  ...northSuburbs,
  ...westSuburbs,
  ...addedSuburbs,
};

/** Area slugs that have dedicated service+city pages (/furnace-repair-<city>/, /ac-repair-<city>/, /furnace-installation-<city>/). */
export const serviceCitySlugs = ['chicago', 'evanston', 'skokie', 'wilmette', 'highland-park', 'des-plaines', 'arlington-heights', 'schaumburg', 'naperville'] as const;
