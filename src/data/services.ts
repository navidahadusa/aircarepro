/**
 * Service page content. Owner: Maya Lin (HVAC Content Strategist).
 * Paths mirror the live WordPress site so a migration keeps rankings.
 * Facts here must stay consistent with src/data/business.ts. Never add prices,
 * response-time promises or guarantees the owner hasn't confirmed.
 *
 * Long-form `sections` are ported from the owner's published WordPress pages
 * (aircareprohvac.com) and expanded. Utility rebate amounts appear only as
 * "For 2026, <utility> lists …" with a pointer to check current amounts.
 * Section HTML is rendered with set:html: keep it to p/ul/ol/li/h3/a/strong/em/table.
 * Never put tel:/sms: links in section HTML (they'd miss data-track); the page CTAs handle that.
 */

import { PHONE_DISPLAY } from './contact';

export type CategoryName = 'Heating' | 'Cooling' | 'Air Quality';

export interface Faq {
  q: string;
  a: string;
}

export interface Section {
  h2: string;
  /** Trusted, hand-written HTML (rendered with set:html). */
  html: string;
}

export interface Service {
  slug: string; // path segment, e.g. "furnace-repair"
  name: string;
  category: CategoryName;
  /** Keyword-led <title> head (≤ 38 chars). ServicePage appends " | Chicago Aircare Pro" (≤ 60 total). */
  title?: string;
  /** One line for service cards. */
  card: string;
  /** Meta description (≤ 155 chars). */
  meta: string;
  intro: string;
  signs: string[];
  included: string[];
  /** Long-form content rendered after the signs/included block. */
  sections?: Section[];
  faqs: Faq[];
  related: string[]; // slugs
  /** Which lead funnel the page's form uses. */
  funnel: 'emergency' | 'quote' | 'maintenance' | 'quick';
}

export interface Category {
  slug: 'heating' | 'cooling' | 'air-quality';
  name: CategoryName;
  /** Keyword-led <title> head (≤ 38 chars). ServicePage appends the brand. */
  title?: string;
  headline: string;
  intro: string;
  meta: string;
  sections?: Section[];
}

export const categories: Category[] = [
  {
    slug: 'heating',
    name: 'Heating',
    title: 'Heating Repair & Installation Chicago',
    headline: 'Furnaces, boilers and heat pumps for Chicago homes',
    intro:
      'From a furnace that won’t light on the first cold night to banging steam pipes in a greystone, we diagnose the real cause, explain your options with prices, and repair only with your approval.',
    meta: `Furnace, boiler and heat pump repair, replacement and tune-ups in Chicago and nearby suburbs. 24/7 emergency heating service. Call ${PHONE_DISPLAY}.`,
    sections: [
      {
        h2: 'Which heating service do you need?',
        html: `<table><thead><tr><th>What is happening</th><th>Start here</th></tr></thead><tbody>
<tr><td>Furnace runs but blows cold air, won’t light, or keeps shutting off</td><td><a href="/furnace-repair/">Furnace repair</a></td></tr>
<tr><td>Furnace is 15–20+ years old, has a cracked heat exchanger, or repairs keep adding up</td><td><a href="/furnace-installation/">Furnace installation</a></td></tr>
<tr><td>No problem yet, but the furnace hasn’t been checked this year</td><td><a href="/furnace-tune-up/">Furnace tune-up</a></td></tr>
<tr><td>Radiators stay cold, the boiler leaks, short-cycles or loses pressure</td><td><a href="/boiler-repair/">Boiler repair</a></td></tr>
<tr><td>An old boiler needs replacing, or you are converting a steam system</td><td><a href="/boiler-installation/">Boiler installation</a></td></tr>
<tr><td>A heat pump isn’t heating, ices up, or runs constantly</td><td><a href="/heat-pump-repair/">Heat pump repair</a></td></tr>
<tr><td>You want to add or replace a heat pump</td><td><a href="/heat-pump-installation/">Heat pump installation</a></td></tr>
<tr><td>You want a smart or programmable thermostat, or zoning</td><td><a href="/thermostat-installation/">Thermostats &amp; zoning</a></td></tr>
</tbody></table>`,
      },
      {
        h2: 'Heating systems we see in Chicago homes',
        html: `<p>Chicago’s housing stock shapes how a home is heated. Many bungalows and single-family houses use a forced-air gas furnace in the basement. Many two-flats, greystones and older courtyard buildings still run on hot-water or steam boilers feeding cast-iron radiators. Newer rehabs often have high-efficiency condensing furnaces vented through the side wall with PVC pipe. Ductless and ducted heat pumps are becoming more common as backup or primary heat. We work on all of these and explain the trade-offs in plain terms. Not sure which you have? Our <a href="/boiler-vs-furnace/">boiler vs. furnace guide</a> explains the differences.</p>`,
      },
      {
        h2: 'How a heating visit works',
        html: `<ol>
<li><strong>Diagnosis.</strong> A NATE-certified technician tests ignition, gas pressure, airflow, safety switches and venting to find the actual cause.</li>
<li><strong>Options before work.</strong> You see what we found and the repair or replacement options, and you decide before any work starts.</li>
<li><strong>Repair and verify.</strong> We make the repair and run the system through a full heating cycle before we leave.</li>
</ol>`,
      },
      {
        h2: 'Safety comes first',
        html: `<p>Gas heat produces carbon monoxide when combustion or venting goes wrong. If a CO alarm sounds, or you smell gas, leave the home and call 911 or your gas utility first. Then call us. Read more about <a href="/carbon-monoxide-safety/">carbon monoxide safety</a>.</p>`,
      },
      {
        h2: 'Keep your heat running',
        html: `<p>A yearly check before the cold arrives catches worn igniters, dirty flame sensors, clogged condensate lines and weak blower capacitors, the parts that most often fail on the first cold night. Our <a href="/maintenance-plan/">Comfort Club maintenance plan</a> includes a fall furnace tune-up and a spring AC tune-up. New systems come with free estimates, and <a href="/financing/">financing is available</a>, subject to credit approval.</p>`,
      },
    ],
  },
  {
    slug: 'cooling',
    name: 'Cooling',
    title: 'AC & Cooling Services Chicago',
    headline: 'Central air, mini-splits and refrigerant work',
    intro:
      'When a heat wave hits, a weak capacitor or a clogged drain is all it takes. We repair and replace central air, rooftop units and ductless mini-splits across Chicago and the suburbs.',
    meta: `AC repair, installation and tune-ups, ductless mini-splits and refrigerant leak repair in Chicago. EPA 608 certified, 24/7. Call ${PHONE_DISPLAY}.`,
    sections: [
      {
        h2: 'Which cooling service do you need?',
        html: `<table><thead><tr><th>What is happening</th><th>Start here</th></tr></thead><tbody>
<tr><td>AC runs but doesn’t cool, won’t start, or the outdoor unit hums</td><td><a href="/ac-repair/">AC repair</a></td></tr>
<tr><td>AC is 12–15+ years old, uses R-22, or needs a costly repair</td><td><a href="/ac-installation/">AC installation</a></td></tr>
<tr><td>Getting the system ready before summer</td><td><a href="/ac-tune-up/">AC tune-up</a></td></tr>
<tr><td>Cooling rooms with no ductwork: attic, addition, boiler-heated home</td><td><a href="/mini-split-installation/">Mini-split installation</a></td></tr>
<tr><td>A ductless unit shows an error code, leaks water or stops cooling</td><td><a href="/mini-split-repair/">Mini-split repair</a></td></tr>
<tr><td>The system keeps needing refrigerant, or the coil freezes</td><td><a href="/refrigerant-leak-repair/">Refrigerant leak repair</a></td></tr>
</tbody></table>`,
      },
      {
        h2: 'Cooling in Chicago homes',
        html: `<p>Most Chicago houses with a furnace have a central AC whose indoor coil sits on top of the furnace. Boiler-heated two-flats and greystones usually have no ductwork, so ductless mini-splits are often the cleanest way to add central-quality cooling. Many two-flats and townhomes also use <a href="/rooftop-ac-units-chicago/">rooftop units</a>. Older systems may still run on R-22 refrigerant, which is no longer produced, so leaks on those systems are expensive to keep recharging.</p>`,
      },
      {
        h2: 'How we work',
        html: `<ol>
<li><strong>Measure, don’t guess.</strong> We read refrigerant pressures, superheat and subcooling, temperatures across the coil, and electrical values, so the diagnosis is based on numbers.</li>
<li><strong>Options before work.</strong> You decide before any repair begins.</li>
<li><strong>Verify.</strong> We confirm cooling performance before leaving.</li>
</ol>`,
      },
      {
        h2: 'Plan ahead',
        html: `<p>The first heat wave of the year is the busiest time for AC calls. A spring <a href="/ac-tune-up/">AC tune-up</a> catches weak capacitors, dirty coils and clogged drains first. The <a href="/maintenance-plan/">Comfort Club</a> includes it. New systems come with free estimates, and <a href="/financing/">financing</a> is available, subject to credit approval.</p>`,
      },
    ],
  },
  {
    slug: 'air-quality',
    name: 'Air Quality',
    title: 'Indoor Air Quality Services Chicago',
    headline: 'Humidity, filtration, ductwork and CO safety',
    intro:
      'Dry Chicago winters, damp basements and older ductwork all affect comfort and health. We size and install whole-home equipment that fits the system you already have.',
    meta: `Whole-home humidifiers, dehumidifiers, air purifiers, UV sanitizers, duct repair and carbon monoxide safety in Chicago. Call ${PHONE_DISPLAY}.`,
    sections: [
      {
        h2: 'Match the problem to the solution',
        html: `<table><thead><tr><th>What you notice</th><th>Likely fix</th></tr></thead><tbody>
<tr><td>Static shocks, dry skin, cracking wood floors in winter</td><td><a href="/whole-home-humidifiers/">Whole-home humidifier</a></td></tr>
<tr><td>Musty basement, sticky air, condensation in summer</td><td><a href="/whole-home-dehumidifiers/">Whole-home dehumidifier</a></td></tr>
<tr><td>Dust, pet dander, allergy symptoms indoors</td><td><a href="/air-purifiers/">Air purifier / high-efficiency filtration</a></td></tr>
<tr><td>Mold growth on the AC coil, odors from the vents</td><td><a href="/uv-air-sanitizers/">UV air sanitizer</a></td></tr>
<tr><td>Rooms too hot or cold, dusty basement, noisy vents</td><td><a href="/ductwork-repair/">Ductwork repair</a></td></tr>
<tr><td>Headaches when the heat runs, CO alarm chirps, soot near the furnace</td><td><a href="/carbon-monoxide-safety/">Carbon monoxide safety check</a></td></tr>
</tbody></table>`,
      },
      {
        h2: 'Start with the basics',
        html: `<p>A properly sized filter changed on schedule, sealed return ducts, and a furnace and AC that move the right amount of air do more for indoor air than most add-on products. We check those first and recommend equipment only when it solves a specific problem. See <a href="/how-often-change-furnace-filter/">how often to change your furnace filter</a>.</p>`,
      },
      {
        h2: 'Our approach',
        html: `<ol>
<li>Listen to what you’re noticing and when (season, rooms, time of day).</li>
<li>Check the HVAC system: filter, airflow, ducts, humidity, combustion safety.</li>
<li>Recommend the smallest change that fixes the problem, with options and a written estimate.</li>
</ol>
<p>Air quality equipment is installed in, or next to, your furnace and ductwork, so it is often done together with a <a href="/furnace-installation/">furnace</a> or <a href="/ac-installation/">AC</a> replacement.</p>`,
      },
    ],
  },
];

const BRANDS_SERVICED = 'Carrier, Bryant, Lennox, Trane, American Standard, Goodman, Amana, Rheem, Ruud, York, Comfortmaker and Heil';

export const services: Service[] = [
  // ───────────── Heating
  {
    slug: 'furnace-repair', name: 'Furnace Repair', category: 'Heating', funnel: 'emergency',
    title: 'Furnace Repair Chicago | 24/7 Service',
    card: 'No heat, short-cycling, error codes',
    meta: `Furnace repair in Chicago & suburbs, 24/7. No heat, cold air, short-cycling or error codes? NATE-certified techs, price before work. Call ${PHONE_DISPLAY}.`,
    intro: 'Chicago Aircare Pro repairs gas furnaces in Chicago and nearby suburbs, 24/7, including nights and holidays. A furnace usually fails on the first real cold night, when parts that weakened over the summer finally give out. A NATE-certified technician tests before replacing anything (gas pressure, temperature rise, flame sensor and igniter readings), explains what failed, and gives you the price before the repair starts.',
    signs: ['The blower runs but the air from the vents is cold', 'Short-cycling: the furnace lights, then shuts off after a few seconds or minutes', 'Nothing happens when the thermostat calls for heat', 'A blinking light code on the control board', 'New noises: squealing, banging on startup, rattling, or a humming blower that won’t start', 'Water around a high-efficiency furnace', 'Rising gas bills with no change in how you use the heat'],
    included: ['Full safety check, including a carbon monoxide test', 'Combustion and gas pressure readings', 'Repair options with prices before work begins', 'Common parts like igniters, flame sensors, inducer motors and pressure switches', 'A full heating cycle test before we leave'],
    sections: [
      {
        h2: 'Common furnace problems we fix',
        html: `<h3>Ignition and flame sensing</h3>
<p>Most modern furnaces use a hot-surface igniter and a flame sensor. A cracked igniter means no flame; a dirty flame sensor lets the burners light and then shuts the gas off a few seconds later. Both are among the most frequent winter calls, and both are quick to confirm with a meter instead of guessing.</p>
<h3>Draft inducer and pressure switch</h3>
<p>Before the gas valve opens, the inducer motor must prove that the vent is clear. A failing inducer, a cracked hose or a blocked vent stops the sequence. That is a safety feature, not a fault to bypass.</p>
<h3>Frozen or clogged condensate on high-efficiency furnaces</h3>
<p>Condensing furnaces drain water. In a Chicago cold snap, a PVC drain or vent pipe on an outside wall can freeze, and the furnace locks out. We clear the blockage and correct the cause: pipe routing, slope or insulation. More in our guide to a <a href="/frozen-furnace-condensate/">frozen furnace condensate line</a>. After a storm, snow drifted over the vent pipes outside causes the same kind of shutdown: see <a href="/furnace-vent-blocked-by-snow/">furnace vent blocked by snow</a>.</p>
<h3>Blower motor, capacitor and control board</h3>
<p>A weak capacitor keeps a blower from starting. Variable-speed ECM motors fail differently from older PSC motors and need different testing. We diagnose the motor and its module before replacing anything.</p>
<h3>Limit switch trips and short-cycling</h3>
<p>A furnace that overheats shuts itself off through the high-limit switch. The usual cause is restricted airflow: a clogged filter, closed returns or undersized ductwork. Replacing the switch without fixing airflow only brings the problem back. See <a href="/furnace-short-cycling/">why furnaces short-cycle</a>.</p>
<h3>Thermostat and controls</h3>
<p>Not every no-heat call is the furnace. A thermostat with a loose wire, a missing common wire on a new smart thermostat, a blown low-voltage fuse on the control board or a door safety switch that isn’t closed can all stop the furnace. We test the control circuit before condemning a part. If the furnace is completely silent, start with <a href="/furnace-wont-turn-on/">furnace won’t turn on</a>.</p>`,
      },
      {
        h2: 'When to shut the furnace off and call',
        html: `<ul>
<li>You smell gas, or a carbon monoxide alarm sounds: leave the home first, then call 911 or your gas utility from outside.</li>
<li>A burning or electrical smell that doesn’t fade after the first few minutes of the season.</li>
<li>Scorch marks near the burners, or the furnace has tripped a rollout switch. A rollout trip means flame escaped the burner area.</li>
<li>Water near the furnace’s electrical parts.</li>
</ul>
<p>Don’t reset rollout switches, bypass safety switches or open the gas valve yourself. Homeowner checks stop at the thermostat, the power switch, the breaker and the filter.</p>`,
      },
      {
        h2: 'Before you call: three quick checks',
        html: `<ol>
<li>Thermostat set to <em>Heat</em>, with the setpoint above room temperature and fresh batteries if it uses them.</li>
<li>The furnace power switch (it looks like a light switch near the unit) is on, and the breaker hasn’t tripped.</li>
<li>The filter isn’t clogged. A badly clogged filter can trip the limit switch.</li>
</ol>
<p>If all three check out and there’s still no heat, call or text ${PHONE_DISPLAY}. Tell us what the furnace does when the thermostat calls for heat (clicks, hums, lights then shuts off, or nothing at all) and any blinking light code. It helps us bring the right parts.</p>`,
      },
      {
        h2: 'How a furnace repair visit works',
        html: `<ol>
<li><strong>Diagnosis first.</strong> We check the control board’s fault history, then test ignition, flame signal, gas pressure, the inducer and pressure switch, airflow and the limit circuit.</li>
<li><strong>Options before work.</strong> You see what failed and why, with the repair price. If replacement is worth considering, we tell you plainly and explain the reason.</li>
<li><strong>Repair and verify.</strong> We make the repair you approve, test for carbon monoxide, and run the furnace through a full heating cycle before we leave.</li>
</ol>`,
      },
      {
        h2: 'Repair or replace?',
        html: `<p>Repair usually makes sense when a furnace is under about 12–15 years old and one component has failed. Replacement deserves a look when the furnace is 15–20+ years old, the heat exchanger is cracked, repairs are becoming frequent, or the home is never comfortable. We show you what we found so you can decide. Our guides on <a href="/repair-or-replace-furnace/">repairing or replacing a furnace</a> and <a href="/cracked-heat-exchanger-signs/">cracked heat exchanger signs</a> go deeper, and <a href="/furnace-installation/">furnace installation</a> covers replacement options. Estimates for new systems are free.</p>`,
      },
      {
        h2: 'What affects the cost of a furnace repair',
        html: `<p>The part that failed, whether it is a universal or a manufacturer-specific part, whether the furnace is still under the manufacturer’s parts warranty, access to the unit, and whether the visit is an after-hours emergency call. You get the price before any work begins, and nothing is repaired without your approval.</p>`,
      },
      {
        h2: 'Furnace repair in Chicago homes',
        html: `<p>Chicago furnaces live in tight places: bungalow basements, utility closets in condo units, and in some converted two-flats, one furnace per unit. High-efficiency furnaces vent through the side wall with PVC pipe, so drifting snow or ice at the vent terminal can shut one down in a storm; keep the intake and exhaust clear. Older homes often have small return ducts, which is a common hidden cause of limit trips. If your home has radiators instead of vents, you need <a href="/boiler-repair/">boiler repair</a> rather than furnace repair.</p>`,
      },
      {
        h2: 'Brands we service',
        html: `<p>We repair the brands common in Chicago homes, including ${BRANDS_SERVICED}. Chicago Aircare Pro is also a Comfortmaker dealer for new installations.</p>`,
      },
    ],
    faqs: [
      { q: 'Do you offer emergency furnace repair at night or on weekends?', a: `Yes. We take emergency heating calls 24/7, including nights, weekends and holidays. Call or text ${PHONE_DISPLAY} for no-heat emergencies.` },
      { q: 'Why does my furnace blow cold air?', a: 'The most common causes are a failed ignition sequence (igniter, flame sensor or inducer), a tripped limit switch from poor airflow, a frozen condensate line on a high-efficiency furnace, or a thermostat set to Fan On instead of Auto.' },
      { q: 'Should I repair or replace my furnace?', a: 'Repair usually makes sense when a furnace is under about 12–15 years old and one part has failed. Replacement deserves a look when it is 15–20+ years old, the heat exchanger is cracked, or repairs keep adding up. We show you what we found, and estimates on new systems are free.' },
      { q: 'Can I reset my furnace myself?', a: 'You can check the thermostat, the furnace power switch, the breaker and the filter. Don’t reset rollout switches, bypass safety switches or open the gas valve yourself; those trips mean something needs a technician’s diagnosis.' },
      { q: 'Which furnace brands do you repair?', a: `The brands common in Chicago homes, including ${BRANDS_SERVICED}.` },
      { q: 'Which areas do you cover?', a: 'Chicago’s North, Northwest and West Sides and nearby suburbs, including Evanston, Skokie, Wilmette, Highland Park, Des Plaines, Arlington Heights, Schaumburg and Naperville.' },
    ],
    related: ['furnace-installation', 'furnace-tune-up', 'carbon-monoxide-safety'],
  },
  {
    slug: 'furnace-installation', name: 'Furnace Installation', category: 'Heating', funnel: 'quote',
    title: 'Furnace Installation & Replacement',
    card: 'Sized replacements, free estimates',
    meta: `Furnace installation & replacement in Chicago: sized to your home, high-efficiency options, free written estimates, financing available. ${PHONE_DISPLAY}.`,
    intro: 'Chicago Aircare Pro installs and replaces gas furnaces in Chicago and nearby suburbs. A new furnace should be sized to your home, not to the old unit’s label. We measure, check the ductwork and venting, and give you a free written estimate with options, including high-efficiency models and Comfortmaker equipment. Financing is available, subject to credit approval.',
    signs: ['The furnace is 15–20+ years old and needs a major repair', 'A cracked heat exchanger has been found, which is a carbon monoxide risk', 'Repairs are happening every season', 'Some rooms never get warm, or the furnace runs constantly in cold weather', 'You are remodeling, finishing a basement, or adding central air'],
    included: ['Sizing based on your home, insulation, windows and ductwork', 'Removal and disposal of the old furnace', 'Gas, electrical, venting and condensate connections', 'Gas pressure, combustion, temperature rise and airflow set and checked', 'Thermostat setup and a walkthrough', 'Permits where your municipality requires them'],
    sections: [
      {
        h2: 'How we size and choose a furnace',
        html: `<p>Many old furnaces in Chicago are oversized. Oversized furnaces short-cycle, wear out faster and leave cold spots. We look at the home’s size, insulation, windows and the existing ductwork, then recommend a capacity and type that fit. The main choices:</p>
<ul>
<li><strong>Efficiency.</strong> High-efficiency condensing furnaces (about 95% AFUE and up) use less gas and vent with PVC pipe. Mid-efficiency furnaces (around 80% AFUE) vent into a chimney and can make sense where PVC venting is impractical.</li>
<li><strong>Blower and burner.</strong> Single-stage, two-stage or modulating burners, with variable-speed blowers, change how evenly the house heats and how quietly the furnace runs.</li>
<li><strong>Venting.</strong> Switching to a condensing furnace often means new PVC intake and exhaust, a condensate drain, and sometimes a chimney liner for a water heater left alone on the old flue.</li>
</ul>`,
      },
      {
        h2: 'What installation includes',
        html: `<ol>
<li>Removing and disposing of the old furnace</li>
<li>Setting the new furnace, with gas, electrical, venting and condensate connections</li>
<li>Matching or adjusting the return and supply connections at the furnace</li>
<li>Setting gas pressure and checking combustion, temperature rise and airflow</li>
<li>Thermostat setup, and a walkthrough of filter changes and warranty registration</li>
<li>Permits where your municipality requires them</li>
</ol>`,
      },
      {
        h2: 'Chicago homes: venting, chimneys and two-flats',
        html: `<p>Chicago’s older housing makes venting the part of a furnace replacement that most often needs thought. When a bungalow or two-flat moves from a chimney-vented furnace to a condensing model, the water heater can be left alone on a chimney sized for two appliances. That “orphaned” water heater may not draft properly, so we check it and tell you if a liner is needed. Side-wall PVC terminals also have to be placed with snow, walkways and windows in mind. In buildings with a furnace per unit, we look at each unit’s ductwork and returns separately; one undersized return can make a new furnace short-cycle just like the old one. See <a href="/carbon-monoxide-safety/">carbon monoxide safety</a> for why venting matters.</p>`,
      },
      {
        h2: 'Brands',
        html: `<p>Chicago Aircare Pro is a Comfortmaker dealer for new installations. We can also quote other brands if you have a preference, and we repair all the major brands found in Chicago homes.</p>`,
      },
      {
        h2: 'Gas utility rebates on a new furnace',
        html: `<p>For 2026, <a href="https://www.peoplesgasdelivery.com/savings/rebates-residential" target="_blank" rel="noopener">Peoples Gas</a> lists $200 for a 95% AFUE furnace and $225 at 97% AFUE and up for Chicago homes. Most north and northwest suburbs are on <a href="https://www.nicorgas.com/residential/ways-to-save/rebates.html" target="_blank" rel="noopener">Nicor Gas</a>, which lists furnace rebates of $150 to $225 by efficiency. <a href="https://www.northshoregasdelivery.com/savings/rebates-residential" target="_blank" rel="noopener">North Shore Gas</a> (most of Highland Park, for example) lists $200 for 95% AFUE and up. Amounts and rules can change during the year, so check current amounts with your utility; your estimate notes which rebate the furnace qualifies for. Federal incentive rules have also changed recently, so check current eligibility rather than counting on a tax credit. The <a href="/service-areas/">service area pages</a> list the gas utility for each town.</p>`,
      },
      {
        h2: 'What affects the cost',
        html: `<p>Furnace capacity and efficiency, blower and burner type, venting changes, ductwork modifications, accessories (<a href="/whole-home-humidifiers/">humidifier</a>, air cleaner, <a href="/thermostat-installation/">thermostat</a>) and permit requirements. Your written estimate lists each item. Ask about <a href="/financing/">financing options</a>.</p>`,
      },
      {
        h2: 'Repair first when it makes sense',
        html: `<p>We don’t push replacement. If a furnace is young and one part has failed, <a href="/furnace-repair/">furnace repair</a> is usually the better call, and we’ll say so. Our guides on <a href="/how-long-do-furnaces-last/">how long furnaces last</a> and <a href="/furnace-replacement-vs-repair/">furnace replacement vs. repair</a> help you weigh it. If you are also thinking about cooling or electrification, compare a <a href="/heat-pump-installation/">heat pump or dual-fuel system</a> during the same estimate.</p>`,
      },
    ],
    faqs: [
      { q: 'Are furnace estimates free?', a: 'Yes. Estimates for new furnaces, boilers and air conditioners are free, and they are written, with each item listed.' },
      { q: 'Do you offer financing?', a: 'Yes, for new systems through our financing partner, subject to credit approval. Ask during your estimate.' },
      { q: 'How long does a furnace replacement take?', a: 'A straightforward replacement is usually completed in one day. Venting changes or ductwork modifications can add time; your estimate will say so.' },
      { q: 'Should I replace my AC at the same time?', a: 'If the AC is near the end of its life, replacing both together means one installation visit and a matched system. If the AC is fairly new, it can usually stay.' },
      { q: 'Is a high-efficiency furnace worth it in Chicago?', a: 'Chicago’s long heating season makes efficiency matter more than it does in milder climates. Whether it pays off depends on your gas use and the venting work your home needs. We show both options side by side.' },
      { q: 'Are there rebates on a new furnace?', a: 'Often. For 2026, Peoples Gas, Nicor Gas and North Shore Gas each list rebates on qualifying high-efficiency furnaces. Amounts change, so check current amounts with your utility; your estimate notes which rebate applies.' },
    ],
    related: ['furnace-repair', 'heat-pump-installation', 'thermostat-installation'],
  },
  {
    slug: 'furnace-tune-up', name: 'Furnace Tune-Up', category: 'Heating', funnel: 'maintenance',
    title: 'Furnace Tune-Up & Maintenance in Chicago',
    card: 'Fall safety and efficiency check',
    meta: `Furnace tune-up and maintenance in Chicago: igniter, flame sensor, venting, condensate trap, safety controls and a CO check. Comfort Club available.`,
    intro: 'A furnace tune-up is a yearly inspection, cleaning and safety check done before the heating season, so the parts most likely to fail are caught early. Chicago Aircare Pro performs furnace tune-ups in Chicago and nearby suburbs. A fall visit catches worn igniters, dirty flame sensors and venting problems before the first cold snap, when every HVAC company in Chicago is booked solid.',
    signs: ['No tune-up in the last 12 months', 'The furnace was slow to start or short-cycled last winter', 'A high-efficiency furnace that has never had its condensate trap cleaned', 'You’re planning to sell or rent the home', 'You want to keep the manufacturer’s warranty in good standing'],
    included: ['Igniter inspection and flame sensor cleaning', 'Gas pressure and temperature rise readings', 'Inducer, pressure switch and limit switch tests', 'Venting check and condensate trap flush', 'Carbon monoxide test at the furnace and in the living space'],
    sections: [
      {
        h2: 'What our furnace tune-up covers',
        html: `<ul>
<li>Inspect the igniter and clean the flame sensor</li>
<li>Check burner flame and clean the burners if needed</li>
<li>Measure gas pressure and temperature rise</li>
<li>Test the inducer motor, pressure switch and high-limit switch</li>
<li>Inspect the heat exchanger where accessible</li>
<li>Check the venting, and on high-efficiency furnaces flush the condensate trap and drain</li>
<li>Test the blower motor and capacitor; check the blower wheel for buildup</li>
<li>Check electrical connections and the control board’s fault history</li>
<li>Verify thermostat operation and a full heating cycle</li>
<li>Check the filter and show you how to change it</li>
<li>Test for carbon monoxide at the furnace and in the living space</li>
</ul>`,
      },
      {
        h2: 'Why it matters in Chicago',
        html: `<p>The first cold week of the season is when furnaces that sat idle all summer fail. A dirty flame sensor, a worn igniter or a weak capacitor are cheap to deal with in October and stressful at midnight in January. On high-efficiency furnaces, a clogged condensate trap is one of the most common causes of winter lockouts, and a drain line that runs along a cold outside wall can freeze in a cold snap (see <a href="/frozen-furnace-condensate/">frozen furnace condensate</a>). The control board’s fault history often shows a problem building before it stops the heat. Hosting this week? See <a href="/thanksgiving-thermostat-furnace-prep/">Thanksgiving thermostat and furnace prep</a>.</p>`,
      },
      {
        h2: 'Tune-up vs. repair: what happens if we find something',
        html: `<p>A tune-up is inspection, cleaning and testing. If we find a part that is failing or a safety problem, we show you the reading or the part, explain what it means, and give you the repair price. Nothing beyond the tune-up is done without your approval. If we find a safety issue such as a cracked heat exchanger or a venting problem that lets flue gas spill, we’ll explain why the furnace shouldn’t run until it is corrected. More on that in <a href="/cracked-heat-exchanger-signs/">cracked heat exchanger signs</a>.</p>`,
      },
      {
        h2: 'When to schedule',
        html: `<p>September through November is ideal, before the first sustained cold. A tune-up still helps mid-winter if the furnace hasn’t been checked in over a year. Pair it with our <a href="/hvac-maintenance-checklist/">HVAC maintenance checklist</a> for the things you can do yourself between visits, like changing the filter on schedule (<a href="/how-often-change-furnace-filter/">how often to change your furnace filter</a>).</p>`,
      },
      {
        h2: 'Boilers, humidifiers and the rest of the system',
        html: `<p>Boilers need different checks: pressure, expansion tank, low-water cutoff and venting. See <a href="/boiler-repair/">boiler service</a>. If your furnace has a <a href="/whole-home-humidifiers/">whole-home humidifier</a>, we can replace the water panel and check the drain and valve during the same visit.</p>`,
      },
      {
        h2: 'Save with the Comfort Club',
        html: `<p>Our <a href="/maintenance-plan/">Comfort Club maintenance plan</a> includes a fall furnace tune-up and a spring <a href="/ac-tune-up/">AC tune-up</a>, priority appointments and member repair discounts.</p>`,
      },
    ],
    faqs: [
      { q: 'How long does a furnace tune-up take?', a: 'Usually about an hour, longer if we find something that needs attention. We tell you before doing any repair.' },
      { q: 'Does a tune-up keep my warranty valid?', a: 'Many manufacturers’ warranties ask for professional annual maintenance. Check your warranty terms; we leave a record of each visit.' },
      { q: 'How often does a furnace need maintenance in Chicago?', a: 'Once a year, ideally in the fall before the first cold snap. Between visits, check the filter monthly during the heating season and change it when it looks dirty.' },
      { q: 'When is the best time for a furnace tune-up?', a: 'September through November, before the first sustained cold. A mid-winter tune-up still helps if the furnace hasn’t been checked in over a year.' },
      { q: 'Is a tune-up included in the Comfort Club?', a: 'Yes. Members get a fall furnace tune-up and a spring AC tune-up each year, plus priority appointments and member repair discounts.' },
      { q: 'Do you also maintain boilers?', a: 'Yes. Boilers need different checks, such as pressure, expansion tank, low-water cutoff and venting, and we service both hot-water and steam systems.' },
    ],
    related: ['furnace-repair', 'ac-tune-up', 'carbon-monoxide-safety'],
  },
  {
    slug: 'boiler-repair', name: 'Boiler Repair', category: 'Heating', funnel: 'emergency',
    title: 'Boiler Repair Chicago | 24/7 Service',
    card: 'Hot-water and steam systems',
    meta: `Boiler & radiator repair in Chicago, 24/7: steam and hot-water systems, cold radiators, banging pipes, pressure problems, two-flats. Call ${PHONE_DISPLAY}.`,
    intro: 'Chicago Aircare Pro repairs hot-water (hydronic) and steam boilers in Chicago and nearby suburbs, with 24/7 emergency service. Chicago still has a large number of boiler-heated two-flats, greystones and bungalows, and these systems need someone who understands them. We troubleshoot pressure, air in the lines, low-water cutoffs, zone valves, circulators and steam vents, and keep old radiator systems running safely.',
    signs: ['Some radiators cold while others are hot', 'Banging or hammering steam pipes', 'Pressure gauge too high or too low, or a dripping relief valve', 'Water around the boiler', 'The boiler locks out, won’t fire or short-cycles', 'Upstairs unit of a two-flat too hot, garden unit too cold'],
    included: ['Low-water cutoff and gauge glass checks (steam)', 'Pressure, expansion tank and relief valve checks (hot water)', 'Main and radiator vents, air separator and bleeders', 'Burner, ignition, flame signal and combustion readings', 'Flue draft and carbon monoxide check'],
    sections: [
      {
        h2: 'Hot water or steam? It changes the repair',
        html: `<p><strong>Hot-water boilers</strong> pump heated water through radiators, baseboard or radiant floors. They run on a closed, pressurized loop with a circulator pump and an expansion tank. <strong>Steam boilers</strong> boil water and send steam to the radiators. They run at very low pressure, depend on venting and pipe pitch, and need the water level watched. A tag on the boiler or a gauge glass showing water usually tells you which you have. We work on both.</p> <p>Not sure which you have? See <a href="/steam-vs-hot-water-boiler/">how to tell a steam boiler from a hot-water boiler</a>.</p>`,
      },
      {
        h2: 'One-pipe and two-pipe steam',
        html: `<p>Most steam homes in Chicago have <strong>one-pipe steam</strong>: steam rises and condensate drains back through the same pipe, so each radiator needs a working air vent and the pipe must slope back toward the boiler. <strong>Two-pipe steam</strong> uses a separate return and usually has steam traps at the radiators; a failed trap lets steam into the return and causes banging and uneven heat. Knowing which you have decides where we look first.</p>`,
      },
      {
        h2: 'Common boiler problems we fix',
        html: `<h3>Some radiators cold, others hot</h3>
<p>On hot-water systems this is usually trapped air (radiators need bleeding) or a circulator problem; see <a href="/air-in-boiler-system/">air in a boiler system</a>. On steam systems it’s usually failed radiator vents or main vents, or pipes that have lost their pitch.</p>
<h3>Pressure too high or too low (hot water)</h3>
<p>A waterlogged expansion tank, a failing pressure-reducing valve or a leak shows up as a pressure gauge that climbs, drops or makes the relief valve drip. Our <a href="/boiler-pressure-guide/">boiler pressure guide</a> explains what the gauge is telling you.</p>
<h3>Banging and water hammer (steam)</h3>
<p>Usually water pooling in pipes that have sagged, a wet steam condition, or an overfilled boiler. The cause can also waste fuel, so it’s worth a visit. More in <a href="/steam-heat-banging-pipes/">why steam pipes bang</a>.</p>
<h3>Boiler won’t fire or short-cycles</h3>
<p>Ignition components, flame sensing, a tripped low-water cutoff, a faulty aquastat or pressuretrol, or a venting problem. See <a href="/boiler-not-heating/">boiler not heating</a> for what to check first.</p>
<h3>Leaks</h3>
<p>Leaking valves, fittings and circulator flanges can usually be repaired. A leak from the boiler’s heat exchanger or sections usually means replacement. See <a href="/boiler-installation/">boiler installation</a>.</p>`,
      },
      {
        h2: 'Two-flats and shared boilers',
        html: `<p>Many Chicago two- and three-flats still heat every unit from one boiler, with one thermostat. That leads to the classic complaint: the upstairs unit is hot while the garden unit is cold. Options range from balancing the existing system (vents and valves on steam, balancing valves on hot water), to zoning a hot-water boiler with zone valves or circulators and a thermostat per unit, to separate systems for each unit. Which one fits depends on the piping, which we trace before recommending anything. Owners deconverting a two-flat into a single-family home face the reverse question: whether one boiler should serve the whole house. See <a href="/thermostat-installation/">thermostats and zoning</a>.</p>`,
      },
      {
        h2: 'Safety: when to shut the boiler off',
        html: `<ul>
<li>Don’t add water to a hot steam boiler that has run dry. Shut it off and let it cool.</li>
<li>If you smell gas or a carbon monoxide alarm sounds, leave and call 911 or your gas utility first.</li>
<li>A relief valve that is discharging water, or a pressure gauge in the red, means shut the boiler off and call.</li>
</ul>
<p>Homeowner checks stop at the thermostat, the boiler’s power switch and the water level in the gauge glass. Read more about <a href="/carbon-monoxide-safety/">carbon monoxide safety</a>.</p>`,
      },
      {
        h2: 'What we check on a boiler visit',
        html: `<ul>
<li>Low-water cutoff operation (steam), and the gauge glass water level</li>
<li>Pressure: the pressuretrol setting on steam, and system pressure, expansion tank and relief valve on hot water</li>
<li>Main and radiator vents (steam), air separator and bleeders (hot water)</li>
<li>Burner, ignition, flame signal and combustion readings</li>
<li>Flue and chimney draft, and carbon monoxide around the appliance</li>
</ul>`,
      },
      {
        h2: 'What affects the cost of a boiler repair',
        html: `<p>The component involved (circulator, expansion tank, valve, controls, vents), whether parts are stocked or need ordering for an older boiler, access, and whether it’s an after-hours emergency. You get the price before work starts.</p>`,
      },
    ],
    faqs: [
      { q: 'Do you work on steam heat?', a: 'Yes. We service both hot-water and steam boilers, including the one-pipe and two-pipe steam systems common in Chicago greystones and two-flats.' },
      { q: 'Why are my steam pipes banging?', a: 'Usually water pooling in pipes that have lost their pitch, a wet steam condition, failed air vents or an overfilled boiler. It’s worth a service visit, because the cause can also waste fuel.' },
      { q: 'Can you work on very old boilers?', a: 'Yes, as long as parts and safety controls can be kept in working order. If a boiler can’t be made safe, we’ll tell you and explain the replacement options.' },
      { q: 'Should my steam boiler be converted to hot water?', a: 'Sometimes, but not always. Conversion involves the piping and radiators, not just the boiler. We look at the whole system before recommending it.' },
      { q: 'Do boilers need yearly maintenance?', a: 'Yes. Checking the low-water cutoff, pressure controls, expansion tank, venting and combustion keeps them safe and efficient.' },
      { q: 'Do you repair boilers at night?', a: `Yes. We take emergency heating calls 24/7. Call or text ${PHONE_DISPLAY}.` },
    ],
    related: ['boiler-installation', 'thermostat-installation', 'carbon-monoxide-safety'],
  },
  {
    slug: 'boiler-installation', name: 'Boiler Installation', category: 'Heating', funnel: 'quote',
    title: 'Boiler Installation Chicago',
    card: 'Boilers for homes and two-flats',
    meta: `Boiler installation & replacement in Chicago homes and two-flats: steam and hot-water boilers sized to your radiators. Free estimates. Call ${PHONE_DISPLAY}.`,
    intro: 'Chicago Aircare Pro installs and replaces hot-water and steam boilers in Chicago homes and two-flats. Replacing a boiler means matching it to your radiators, piping and building, not just the old nameplate. We size the boiler to the home’s heat loss and the existing radiation, then give you options in writing. Estimates are free, and financing is available, subject to credit approval.',
    signs: ['Leaks from the boiler’s sections or heat exchanger', 'Repeated failures of major parts, or parts no longer available', 'Rust-through, flue gas spillage or combustion problems that can’t be corrected', 'High gas use from an old, low-efficiency boiler', 'Converting a two-flat to separate heat, or deconverting to a single-family home'],
    included: ['Radiation survey (steam) or heat-loss review (hot water)', 'Removal of the old boiler', 'Near-boiler piping, gas, electrical and venting (chimney liner where needed)', 'Combustion testing and a full heating cycle', 'Permits where your municipality requires them'],
    sections: [
      {
        h2: 'Choosing the right replacement',
        html: `<h3>For hot-water systems</h3>
<p>Options range from conventional cast-iron boilers that vent into a chimney to high-efficiency modulating-condensing boilers that vent with PVC or polypropylene. Condensing boilers save the most when the system can run lower water temperatures. We check whether your radiators and piping allow that.</p>
<h3>For steam systems</h3>
<p>Steam boilers are sized by measuring every radiator in the building (the connected load), plus a piping allowance. Correct near-boiler piping matters as much as the boiler itself: it is what keeps steam dry and the system quiet. A steam boiler sized off the old nameplate, or piped with shortcuts, is a common reason a new system still bangs. See <a href="/steam-heat-banging-pipes/">steam heat banging pipes</a>.</p>
<h3>Indirect water heating</h3>
<p>A hot-water boiler can also heat domestic water through an indirect tank, which can replace a separate water heater.</p>`,
      },
      {
        h2: 'What installation includes',
        html: `<ol>
<li>Removing the old boiler</li>
<li>Setting the new boiler with near-boiler piping, gas, electrical and venting (chimney liner where needed)</li>
<li>Circulators, expansion tank, air separation and controls on hot-water systems; skimming and vent checks on steam</li>
<li>Combustion testing and a full heating cycle</li>
<li>Permits where your municipality requires them</li>
</ol>`,
      },
      {
        h2: 'Two-flats, greystones and separate heat',
        html: `<p>Many Chicago two- and three-flats heat every unit from one boiler. A replacement is the natural time to decide whether that still makes sense. A hot-water boiler can often be zoned with zone valves or circulators and a thermostat per unit; separate boilers or systems per unit are another option. Steam systems are harder to zone, which is one reason some owners look at <a href="/heat-pump-installation/">heat pumps</a> or <a href="/mini-split-installation/">mini-splits</a> for one unit. Owners deconverting a two-flat into a single-family home face the reverse question. The right answer depends on the piping and how each unit is used, so we trace the system before recommending anything.</p>`,
      },
      {
        h2: 'Steam to hot water?',
        html: `<p>Converting a steam system to hot water is sometimes possible, but it involves the piping and radiators, not just the boiler: old steam radiators and mains have to hold water pressure, and one-pipe systems need new piping. We look at the whole system and explain the trade-offs during a free estimate. Comparing heat sources? See <a href="/boiler-vs-furnace/">boiler vs. furnace</a>.</p>`,
      },
      {
        h2: 'Boiler rebates in 2026',
        html: `<p>For 2026, <a href="https://www.peoplesgasdelivery.com/resrebateapp" target="_blank" rel="noopener">Peoples Gas</a> (Chicago) lists $350 for a high-efficiency hot-water boiler, $150 for a steam boiler and $500 for a boiler with integrated domestic hot water. <a href="https://www.northshoregasdelivery.com/savings/rebates-residential" target="_blank" rel="noopener">North Shore Gas</a> lists the same three amounts. <a href="https://www.nicorgas.com/residential/ways-to-save/rebates.html" target="_blank" rel="noopener">Nicor Gas</a> lists $500 for a combination boiler and a separate high-efficiency boiler rebate. Efficiency minimums apply, and amounts can change during the year, so check current amounts; we confirm the current figure on your estimate.</p>`,
      },
      {
        h2: 'What affects the cost',
        html: `<p>Boiler type and capacity, steam versus hot water, venting changes, near-boiler piping, zoning and indirect water heating. Every item is listed in the written estimate. Ask about <a href="/financing/">financing</a>.</p>`,
      },
      {
        h2: 'Repair before replace',
        html: `<p>Many boiler problems (circulators, expansion tanks, vents, controls) are repairable, and old cast-iron boilers can run a long time when their safety controls work. If yours can be made safe and reliable, <a href="/boiler-repair/">boiler repair</a> is usually the better value, and we’ll tell you so.</p>`,
      },
    ],
    faqs: [
      { q: 'Can a two-flat have separate heat for each unit?', a: 'Often yes, by zoning one hot-water boiler or installing separate systems. The right answer depends on the piping and how each unit is used.' },
      { q: 'How long does boiler replacement take?', a: 'Usually one to two days for a direct replacement, longer with piping or venting changes.' },
      { q: 'Can I switch from steam to hot water?', a: 'Sometimes. It depends on the piping and radiators, not just the boiler. We look at your system and explain the trade-offs during a free estimate.' },
      { q: 'Are boiler estimates free?', a: 'Yes. Estimates for new boilers, furnaces and air conditioners are free and written, and financing is available, subject to credit approval.' },
      { q: 'Are there rebates on a new boiler?', a: 'Often. For 2026, Peoples Gas, North Shore Gas and Nicor Gas each list boiler rebates for qualifying equipment. Efficiency minimums apply and amounts change, so check current amounts; we confirm the figure on your estimate.' },
    ],
    related: ['boiler-repair', 'heat-pump-installation', 'furnace-installation'],
  },
  {
    slug: 'heat-pump-repair', name: 'Heat Pump Repair', category: 'Heating', funnel: 'emergency',
    title: 'Heat Pump Repair Chicago | 24/7',
    card: 'Cold-climate and dual-fuel systems',
    meta: `Heat pump repair in Chicago, 24/7: icing, cool air in heat mode, backup heat running nonstop, refrigerant leaks. EPA 608 & NATE certified. ${PHONE_DISPLAY}.`,
    intro: 'Chicago Aircare Pro repairs ducted and ductless heat pumps in Chicago and nearby suburbs, in both heating and cooling mode, with 24/7 emergency service. Heat pumps work hard in a Chicago winter. Our EPA 608 and NATE-certified technicians diagnose defrost problems, reversing valves, refrigerant charge and dual-fuel controls, so your system switches to backup heat only when it should.',
    signs: ['Outdoor unit iced over and not defrosting', 'Blowing cool air in heat mode', 'Backup or auxiliary heat running constantly', 'Electric bill jumped in winter', 'Not cooling in summer', 'Error codes on a mini-split head or thermostat'],
    included: ['Refrigerant pressures, superheat and subcooling (EPA 608 certified)', 'Defrost control, sensor and reversing valve testing', 'Dual-fuel changeover and backup heat settings', 'Compressor, fan, capacitor and electrical tests', 'Airflow and coil checks'],
    sections: [
      {
        h2: 'Normal behavior vs. a real problem',
        html: `<p>Some heat pump behavior is normal in a Chicago winter. Frost on the outdoor coil that clears on its own, a whoosh and steam cloud during defrost, and long run times in very cold weather are all expected. Ice that keeps building, a unit that never stops running while the house cools down, or backup heat running all the time are not. Our guide to <a href="/heat-pumps-in-chicago/">heat pumps in Chicago</a> explains what to expect.</p>`,
      },
      {
        h2: 'Common heat pump problems we fix',
        html: `<h3>Ice buildup that doesn’t clear</h3>
<p>Usually a defrost control, sensor or reversing valve problem, low refrigerant charge, or restricted airflow over the coil. Snow and ice piled around the outdoor unit, or a unit sitting too low, can also block airflow and drainage.</p>
<h3>Blowing cool air in heating mode</h3>
<p>The reversing valve may be stuck, the system may be low on refrigerant, or it may be in defrost. On dual-fuel systems, the changeover settings to the furnace may be wrong.</p>
<h3>Backup heat running constantly</h3>
<p>Electric backup heat is much more expensive to run than the heat pump itself. A thermostat configured for the wrong equipment, an outdoor sensor problem or a struggling heat pump can all leave it on. We check the controls and the heat pump together; see <a href="/thermostat-installation/">thermostats</a>.</p>
<h3>Not cooling in summer</h3>
<p>The same diagnostic approach as <a href="/ac-repair/">AC repair</a>: capacitor, contactor, refrigerant charge, coil condition and airflow.</p>
<h3>Refrigerant leaks</h3>
<p>A heat pump that needs refrigerant has a leak. We find and fix leaks rather than just adding charge. See <a href="/refrigerant-leak-repair/">refrigerant leak repair</a>.</p>
<h3>Ductless (mini-split) error codes</h3>
<p>Indoor heads report fault codes for sensors, drain pumps, communication and refrigerant issues. See <a href="/mini-split-repair/">mini-split repair</a>.</p>`,
      },
      {
        h2: 'How we diagnose',
        html: `<p>We measure refrigerant pressures, superheat and subcooling, temperatures across the coils, electrical readings on the compressor and fans, and airflow. We test the defrost and reversing valve operation. You see the readings and the options before repair.</p>`,
      },
      {
        h2: 'Before you call',
        html: `<ol>
<li>Check that the thermostat is set to <em>Heat</em> (or <em>Cool</em>) and hasn’t been switched to emergency heat by accident.</li>
<li>Check the breakers for the indoor and outdoor units and the disconnect next to the outdoor unit.</li>
<li>Clear snow away from the outdoor unit, gently. Don’t chip ice off the coil; the fins bend easily.</li>
<li>Replace a dirty filter.</li>
</ol>`,
      },
      {
        h2: 'Dual-fuel systems in Chicago',
        html: `<p>Many Chicago installations pair a heat pump with a gas furnace (dual fuel). The heat pump handles mild weather and the furnace takes over in deep cold. When the changeover point is set wrong, the house can feel chilly or the gas bill can climb. We check the balance point and changeover settings along with the equipment, and if the furnace side is the problem, that’s <a href="/furnace-repair/">furnace repair</a>. Comparing systems? See <a href="/heat-pump-vs-furnace/">heat pump vs. furnace</a>.</p>`,
      },
      {
        h2: 'What affects the cost',
        html: `<p>The failed component, refrigerant type and amount, leak location and access, warranty status, and after-hours service. You get the price first. If repair doesn’t make sense on an older system, we’ll explain <a href="/heat-pump-installation/">replacement options</a>.</p>`,
      },
    ],
    faqs: [
      { q: 'Do heat pumps work in Chicago winters?', a: 'Cold-climate heat pumps keep producing heat well below freezing. Many Chicago installations pair a heat pump with a gas furnace (dual fuel) or electric backup for the coldest days.' },
      { q: 'Why is my electric bill high in winter?', a: 'Often the backup electric heat is running more than it should because of a control setting, a sensor, or a heat pump problem. We check both.' },
      { q: 'Is it normal for my heat pump to steam in winter?', a: 'Yes. A whoosh and a cloud of steam during defrost is normal. Ice that keeps building and doesn’t clear is not, and is worth a service call.' },
      { q: 'Why is my heat pump blowing cool air in heat mode?', a: 'It may be in defrost, the reversing valve may be stuck, it may be low on refrigerant from a leak, or the dual-fuel changeover settings may be wrong.' },
      { q: 'Do you repair heat pumps at night?', a: `Yes. We take emergency calls 24/7. Call or text ${PHONE_DISPLAY}.` },
    ],
    related: ['heat-pump-installation', 'mini-split-repair', 'refrigerant-leak-repair'],
  },
  {
    slug: 'heat-pump-installation', name: 'Heat Pump Installation', category: 'Heating', funnel: 'quote',
    title: 'Heat Pump Installation Chicago',
    card: 'Ducted, ductless and dual fuel',
    meta: `Heat pump installation in Chicago: cold-climate, ducted, ductless and dual-fuel systems sized for our winters. Free estimates, rebate help. ${PHONE_DISPLAY}.`,
    intro: 'Chicago Aircare Pro installs ducted, ductless and dual-fuel heat pumps in Chicago and nearby suburbs, sized for our winters. A heat pump heats and cools with one system, and paired with a gas furnace it handles even the coldest Chicago weeks. We help you pick the setup that fits your house, your ductwork and the backup heat you want, not a sales script. Estimates are free, and financing is available, subject to credit approval.',
    signs: ['Replacing an old AC and furnace together', 'Adding efficient heat to rooms without ductwork', 'A boiler home that also needs cooling', 'Looking to reduce gas use', 'Interested in utility rebates (check current eligibility)'],
    included: ['Heating and cooling load at Chicago temperatures', 'Ducted, ductless or dual-fuel options compared', 'Outdoor unit raised above snow level', 'Line set, electrical and condensate work', 'Deep vacuum and charge verification', 'Backup heat or furnace changeover setup'],
    sections: [
      {
        h2: 'Three common setups',
        html: `<table><thead><tr><th>Setup</th><th>Best for</th><th>Notes</th></tr></thead><tbody>
<tr><td>Ducted heat pump with electric backup</td><td>Homes with good ductwork and no gas, or owners leaving gas</td><td>Use a cold-climate model so backup heat runs only on the coldest days</td></tr>
<tr><td>Dual fuel (heat pump + gas furnace)</td><td>Homes with a furnace in good shape</td><td>The heat pump handles mild weather; the furnace takes over in deep cold</td></tr>
<tr><td>Ductless mini-split</td><td>Additions, attics, finished basements, boiler homes with no ducts</td><td>Room-by-room control; see <a href="/mini-split-installation/">mini-split installation</a></td></tr>
</tbody></table>`,
      },
      {
        h2: 'How we size a heat pump for Chicago',
        html: `<p>Heat pump output drops as outdoor temperature falls, so sizing for Chicago means checking capacity at low temperatures, not just the nominal rating. We look at the heating and cooling load, the ductwork’s airflow capacity, the electrical service and where the outdoor unit can sit (clearance, snow and drainage). In older homes, the electrical panel and the ductwork are the two things most likely to need attention, so we check both before you commit.</p>`,
      },
      {
        h2: 'What installation includes',
        html: `<ol>
<li>Outdoor unit on a pad or stand raised above snow level, with line set, electrical disconnect and condensate management</li>
<li>Indoor coil or air handler, or ductless heads</li>
<li>Evacuation to a deep vacuum and charge verified by superheat and subcooling</li>
<li>Thermostat and backup-heat (or furnace changeover) settings</li>
<li>Permits where required</li>
</ol>`,
      },
      {
        h2: 'Heat pumps in Chicago homes',
        html: `<p>For a bungalow or single-family house with a furnace in good shape, dual fuel is often the easiest step: the heat pump replaces the AC and takes over heating in mild weather. For boiler-heated two-flats and greystones without ducts, ductless heads can add cooling and supplemental heat while the boiler stays for the coldest weeks. For an all-electric rehab, a cold-climate ducted system with electric backup is the usual route. Our guides on <a href="/heat-pump-installation-chicago/">heat pump installation in Chicago</a> and <a href="/heat-pump-vs-furnace/">heat pump vs. furnace</a> go deeper.</p>`,
      },
      {
        h2: 'Rebates and incentives',
        html: `<p>ComEd and the local gas utilities run efficiency programs that change their rules and amounts over time, and federal incentive rules have changed recently. We don’t promise a rebate or tax credit; we check what applies to your equipment and address, and you should check current eligibility with <a href="https://www.comed.com/" target="_blank" rel="noopener">ComEd</a> or your gas utility before you buy.</p>`,
      },
      {
        h2: 'What affects the cost',
        html: `<p>System type and capacity, cold-climate rating, ductwork changes, electrical upgrades, line set length and backup heat. Every item is on the written estimate. Ask about <a href="/financing/">financing</a>.</p>`,
      },
    ],
    faqs: [
      { q: 'Can I keep my gas furnace?', a: 'Yes. Dual-fuel systems are a common way to add a heat pump while keeping the furnace for very cold days.' },
      { q: 'Does a heat pump replace my air conditioner?', a: 'Yes. A heat pump provides cooling in summer just like a central AC.' },
      { q: 'Do heat pumps work in Chicago winters?', a: 'Cold-climate models keep producing heat well below freezing, though output drops as it gets colder. That’s why we size for low temperatures and set up backup heat or a furnace for the coldest days.' },
      { q: 'Are there rebates for heat pumps?', a: 'Sometimes. ComEd, the local gas utilities and federal programs change their rules, so we don’t promise one. We check what applies to your equipment and address; check current eligibility before you buy.' },
      { q: 'Can a heat pump work in a house with radiators?', a: 'Yes, usually as ductless mini-splits that add cooling and supplemental heat while the boiler stays for the coldest weeks.' },
    ],
    related: ['heat-pump-repair', 'mini-split-installation', 'furnace-installation'],
  },
  {
    slug: 'thermostat-installation', name: 'Thermostats & Zoning', category: 'Heating', funnel: 'quick',
    title: 'Smart Thermostat & Zoning Chicago',
    card: 'Smart thermostats and zoning',
    meta: `Smart thermostat installation & HVAC zoning in Chicago for furnaces, boilers and heat pumps. C-wire, staging and two-flat zoning done right. ${PHONE_DISPLAY}.`,
    intro: 'Chicago Aircare Pro installs smart and programmable thermostats and zoning controls for furnaces, boilers, heat pumps and central air in Chicago homes. The thermostat is wired and set up for your specific equipment, so staging, heat pump backup and boiler controls work as they should. Hot upstairs, cold basement? Zoning can even out temperatures across floors, which helps a lot in Chicago’s tall, narrow homes and two-flats.',
    signs: ['Big temperature differences between floors or units', 'Old mercury or non-programmable thermostat', 'A new smart thermostat that stopped the heat from working', 'Heat pump backup heat running when it shouldn’t', 'Wanting remote or smart control'],
    included: ['Equipment and wiring compatibility check', 'C-wire added or a supported adapter installed', 'Stages, backup heat and cycle settings configured', 'Zoning dampers, zone valves and controls where the system supports them', 'App and schedule setup with you'],
    sections: [
      {
        h2: 'Why compatibility matters',
        html: `<ul>
<li><strong>Common wire (C-wire).</strong> Most smart thermostats need constant power. Older homes often lack a C-wire; we add one or install an adapter the equipment supports.</li>
<li><strong>Heat pumps.</strong> Reversing valve, auxiliary heat and dual-fuel changeover need the right settings, or backup heat will run when it shouldn’t.</li>
<li><strong>Multi-stage equipment.</strong> Two-stage and modulating furnaces and AC need a thermostat that can call each stage, or the equipment’s communicating control.</li>
<li><strong>Boilers.</strong> Many boilers use two-wire controls; steam systems need settings that respect cycle length.</li>
</ul>`,
      },
      {
        h2: 'Zoning for Chicago homes',
        html: `<p>A two-flat with one boiler, or a house where upstairs is always warmer than downstairs, can often be zoned: separate thermostats controlling zone valves, circulators or motorized duct dampers. We assess whether the system and piping or ductwork support it. Hot-water boilers are usually the easiest to zone; forced-air systems need ductwork that can handle dampers without starving the blower; steam is the hardest, and balancing vents is often the better first step. Our guide to <a href="/hvac-zoning-explained/">HVAC zoning</a> explains the options, and <a href="/ductwork-repair/">ductwork repair</a> covers the airflow side.</p>`,
      },
      {
        h2: 'What’s included',
        html: `<ol>
<li>Checking the equipment and existing wiring</li>
<li>Mounting and wiring the thermostat, adding a C-wire if needed</li>
<li>Configuring equipment type, stages, backup heat and cycle settings</li>
<li>Testing heating and cooling calls; setting up the app and schedule with you</li>
</ol>`,
      },
      {
        h2: 'Settings that save without sacrificing comfort',
        html: `<p>A schedule that lowers the temperature at night and while you’re out is where most savings come from. Heat pumps are the exception: deep setbacks can trigger expensive backup heat on recovery, so we set them up with smaller setbacks or the thermostat’s heat pump recovery features. Steam systems also do better with fewer, longer cycles. See our guide to the <a href="/best-temperature-chicago-winter/">best thermostat temperature for a Chicago winter</a>.</p>`,
      },
      {
        h2: 'Smart thermostat rebates',
        html: `<p>For 2026, Peoples Gas, North Shore Gas and Nicor Gas each list a $25 rebate on qualifying ENERGY STAR smart thermostats. Peoples Gas and North Shore Gas note that thermostats bought through the ComEd Marketplace already include an instant $25 discount and don’t qualify again. Naperville residents can also apply to the <a href="https://www.naperville.il.us/energygrants/" target="_blank" rel="noopener">city electric utility’s thermostat program</a>. Amounts and rules change, so check current amounts before you buy.</p>`,
      },
      {
        h2: 'When the thermostat isn’t the problem',
        html: `<p>If the system still won’t heat or cool once the thermostat is wired and configured correctly, the problem is in the equipment. We’ll move straight to <a href="/furnace-repair/">furnace repair</a>, <a href="/boiler-repair/">boiler repair</a> or <a href="/heat-pump-repair/">heat pump repair</a> diagnosis, with the price before any work.</p>`,
      },
    ],
    faqs: [
      { q: 'Will a smart thermostat work with my boiler?', a: 'Most will, with the right wiring. Many boilers use two-wire controls, so we check compatibility and power first.' },
      { q: 'Can you install a thermostat I already bought?', a: 'Yes, if it is compatible with your equipment. We’ll check before installing.' },
      { q: 'My new thermostat stopped the heat from working. Can you fix it?', a: 'Yes. This is usually a wiring or configuration issue, often with heat pumps or a missing C-wire.' },
      { q: 'Can a two-flat with one boiler get a thermostat per unit?', a: 'Often, on hot-water systems, with zone valves or circulators and a thermostat per unit. Steam is harder to zone. We trace the piping before recommending anything.' },
      { q: 'Are there rebates on smart thermostats?', a: 'For 2026, Peoples Gas, North Shore Gas and Nicor Gas each list a rebate on qualifying ENERGY STAR smart thermostats. Rules change, so check current amounts before you buy.' },
    ],
    related: ['furnace-installation', 'boiler-repair', 'heat-pump-installation'],
  },
  // ───────────── Cooling
  {
    slug: 'ac-repair', name: 'AC Repair', category: 'Cooling', funnel: 'emergency',
    title: 'AC Repair Chicago | 24/7 Service',
    card: 'Warm air, leaks, frozen coils',
    meta: `AC repair in Chicago & suburbs, 24/7. Warm air, frozen coil, outdoor unit humming or leaking water? EPA 608 certified, price before work. ${PHONE_DISPLAY}.`,
    intro: 'Chicago Aircare Pro repairs central air conditioners and rooftop units in Chicago and nearby suburbs, with 24/7 emergency service. Most no-cooling calls trace back to a handful of parts: capacitors, contactors, clogged drains, dirty coils and refrigerant leaks. Our EPA 608-certified technicians measure before replacing parts, explain what we found, and quote the repair before we start.',
    signs: ['Air from the vents isn’t cold, or the house never reaches the setpoint', 'Outdoor unit hums but the fan won’t spin, or doesn’t run at all', 'Ice on the copper line or the indoor coil', 'Water around the furnace or a full condensate pan', 'The breaker trips when the AC starts', 'Short-cycling: turning on and off every few minutes'],
    included: ['Electrical, capacitor and contactor tests', 'Refrigerant superheat and subcooling readings', 'Condensate drain clearing', 'Coil and airflow checks', 'Price before any repair, and a cooling test before we leave'],
    sections: [
      {
        h2: 'Common AC problems we fix',
        html: `<h3>Failed capacitor or contactor</h3>
<p>The run capacitor helps the compressor and fan motor start. When it weakens in summer heat, the outdoor unit hums and won’t start. It is one of the most common AC repairs and quick to confirm with a meter.</p>
<h3>Low refrigerant from a leak</h3>
<p>Refrigerant isn’t used up. Low charge means a leak, so we look for it instead of just topping off. See <a href="/refrigerant-leak-repair/">refrigerant leak repair</a>.</p>
<h3>Frozen evaporator coil</h3>
<p>Caused by low airflow (dirty filter, dirty coil, blower problem) or low refrigerant. Turn the AC off and run the fan to thaw it while you wait; running a frozen system can damage the compressor. More in <a href="/ac-freezing-up/">why an AC freezes up</a>.</p>
<h3>Dirty condenser or evaporator coil</h3>
<p>Cottonwood, dust and debris on the outdoor coil raise pressures and cut capacity. A dirty indoor coil restricts airflow.</p>
<h3>Clogged condensate drain</h3>
<p>Algae in the drain line or a failed condensate pump leads to water leaks and float switches that shut the AC off. In a finished basement that can mean water damage, so it’s worth catching early; see <a href="/ac-leaking-water/">AC leaking water</a>.</p>
<h3>Compressor and fan motor failures</h3>
<p>We test windings and amperage before calling a compressor failed, because a bad capacitor or contactor can look like one.</p>`,
      },
      {
        h2: 'Before you call',
        html: `<ol>
<li>Thermostat on <em>Cool</em>, setpoint below room temperature.</li>
<li>Check the breakers for the furnace and the outdoor unit, and the disconnect switch next to the outdoor unit.</li>
<li>Replace a dirty filter.</li>
<li>If you see ice, switch the AC off and the fan to <em>On</em>, and call.</li>
</ol>
<p>Still not cooling? Our guide to an <a href="/ac-not-cooling/">AC that’s not cooling</a> walks through the usual causes. Then call or text ${PHONE_DISPLAY} and tell us what the indoor and outdoor units are doing.</p>`,
      },
      {
        h2: 'How an AC repair visit works',
        html: `<ol>
<li><strong>Measure, don’t guess.</strong> We read refrigerant pressures, superheat and subcooling, the temperature split across the coil, and electrical values on the compressor and fan.</li>
<li><strong>Options before work.</strong> You see what failed and the repair price. If replacement deserves a look, we explain why.</li>
<li><strong>Verify.</strong> We confirm cooling performance before leaving.</li>
</ol>`,
      },
      {
        h2: 'Repair or replace?',
        html: `<p>A 5–10-year-old AC with one failed part is usually worth repairing. A system 12–15+ years old, an R-22 system with a leak, or a failed compressor out of warranty deserves a replacement quote. Estimates for new systems are free. See <a href="/ac-installation/">AC installation</a>, and our guide to <a href="/refrigerant-changes-r454b/">refrigerant changes and R-454B</a> if your system is older.</p>`,
      },
      {
        h2: 'What affects the cost',
        html: `<p>The part, refrigerant type and amount, leak location, access (a rooftop unit versus a backyard condenser, for example), warranty status and after-hours service. You get the price before work starts.</p>`,
      },
      {
        h2: 'AC repair in Chicago homes',
        html: `<p>In most Chicago houses the AC coil sits on top of the basement furnace and shares its blower, so a furnace blower or filter problem can look like an AC problem. Two-flats and townhomes often have <a href="/rooftop-ac-units-chicago/">rooftop units</a>, and boiler-heated homes may have <a href="/mini-split-repair/">ductless mini-splits</a> instead of central air. Cottonwood season packs outdoor coils in late spring, and humid summers keep condensate drains busy. If your house feels cool but clammy, a <a href="/whole-home-dehumidifiers/">whole-home dehumidifier</a> may be part of the answer.</p>`,
      },
      {
        h2: 'Brands we service',
        html: `<p>We repair the brands common in Chicago, including Carrier, Bryant, Lennox, Trane, American Standard, Goodman, Rheem, Ruud, York and Comfortmaker.</p>`,
      },
    ],
    faqs: [
      { q: 'Why is my AC freezing up?', a: 'Usually low airflow (a dirty filter, dirty coil or blower problem) or low refrigerant from a leak. Turn the AC off and run the fan to let it thaw, then call us.' },
      { q: 'Why does my outdoor unit hum but the fan won’t spin?', a: 'A weak or failed run capacitor is the most common cause, and it’s quick to confirm with a meter. A failed contactor or fan motor can also do it. Turn the AC off until it’s checked.' },
      { q: 'Do you repair rooftop units?', a: 'Yes. We repair and replace central air and rooftop units common on Chicago two-flats and townhomes.' },
      { q: 'Should I repair or replace my AC?', a: 'A 5–10-year-old AC with one failed part is usually worth repairing. A system 12–15+ years old, an R-22 system with a leak, or a failed compressor out of warranty deserves a replacement quote. Estimates on new systems are free.' },
      { q: 'Can you come the same day?', a: `We take emergency calls 24/7. Call or text ${PHONE_DISPLAY} and we’ll give you the earliest time available.` },
      { q: 'Do you repair all AC brands?', a: 'We repair the brands common in Chicago, including Carrier, Bryant, Lennox, Trane, American Standard, Goodman, Rheem, Ruud, York and Comfortmaker.' },
    ],
    related: ['ac-installation', 'ac-tune-up', 'refrigerant-leak-repair'],
  },
  {
    slug: 'ac-installation', name: 'AC Installation', category: 'Cooling', funnel: 'quote',
    title: 'AC Installation Chicago | Central Air',
    card: 'Matched systems, free estimates',
    meta: `Central AC installation & replacement in Chicago: properly sized, matched coil and condenser, free written estimates, financing available. ${PHONE_DISPLAY}.`,
    intro: 'Chicago Aircare Pro installs and replaces central air conditioners in Chicago and nearby suburbs. An AC that’s too big short-cycles and leaves the house clammy; too small and it can’t keep up in July. We size it to your home and match the outdoor unit, indoor coil, furnace blower and ductwork so it delivers its rated performance. Estimates are free, and financing is available, subject to credit approval.',
    signs: ['The system is 12–15+ years old and needs a significant repair', 'It uses R-22 refrigerant and has a leak', 'The compressor has failed out of warranty', 'Rooms stay warm and humid even when it runs constantly'],
    included: ['Load-based sizing', 'Matched coil and condenser', 'Line set replaced or flushed, nitrogen pressure test, deep vacuum', 'Charge by superheat or subcooling, airflow verified', 'Refrigerant recovery and removal of the old system', 'Permits where required'],
    sections: [
      {
        h2: 'Getting the system right',
        html: `<ul>
<li><strong>Size.</strong> An oversized AC cools fast but leaves the house clammy, because it doesn’t run long enough to remove humidity. We size for the home, not the old unit.</li>
<li><strong>Matched coil.</strong> The outdoor unit and indoor coil must be a matched pair for rated efficiency and for warranty.</li>
<li><strong>Airflow.</strong> The furnace blower and ductwork have to move enough air. We check static pressure and flag duct restrictions.</li>
<li><strong>Efficiency and stages.</strong> Single-stage, two-stage and variable-speed systems differ in comfort, humidity control and running cost. We compare them for your home.</li>
<li><strong>Heat pump alternative.</strong> If you are replacing the AC, a <a href="/heat-pump-installation/">heat pump</a> can cool the same way and also provide heat.</li>
</ul>`,
      },
      {
        h2: 'What installation includes',
        html: `<ol>
<li>Recovering refrigerant from and removing the old system</li>
<li>Setting the outdoor unit on a level pad, with an electrical disconnect and whip</li>
<li>Installing the matched indoor coil, with a condensate drain (and pump if needed)</li>
<li>Replacing or flushing the line set, pressure-testing with nitrogen, evacuating to a deep vacuum</li>
<li>Charging by superheat or subcooling, and verifying airflow and temperature split</li>
<li>Permits where required</li>
</ol>`,
      },
      {
        h2: 'Refrigerants: R-22, R-410A and R-454B',
        html: `<p>R-22 is no longer manufactured in the US, so older systems that leak are expensive to keep recharging. Newer systems are moving to lower-impact refrigerants such as R-454B. We’ll explain what each option uses and what that means for service later. Our guide to <a href="/refrigerant-changes-r454b/">refrigerant changes and R-454B</a> covers the background.</p>`,
      },
      {
        h2: 'Central air in Chicago homes',
        html: `<p>Bungalows and older houses often had central air added to ductwork designed only for heat, with few return paths upstairs. That is a common reason upper floors run hot even with a new AC, so we look at the ducts as part of the estimate and flag what <a href="/ductwork-repair/">ductwork repair</a> could fix. Boiler-heated two-flats and greystones with no ducts are usually better served by <a href="/mini-split-installation/">ductless mini-splits</a>; compare them in <a href="/mini-split-vs-central-air/">mini-split vs. central air</a>. Rooftop units on two-flats and townhomes are a separate install with their own access planning.</p>`,
      },
      {
        h2: 'Replacing the furnace at the same time?',
        html: `<p>If the furnace is near the end of its life, replacing both together means one installation visit and a matched system. If the furnace is fairly new, the AC can usually be replaced on its own, as long as the blower can deliver the airflow the new coil needs. See <a href="/furnace-installation/">furnace installation</a>.</p>`,
      },
      {
        h2: 'Brands',
        html: `<p>Chicago Aircare Pro is a Comfortmaker dealer for new equipment and can quote other brands on request.</p>`,
      },
      {
        h2: 'What affects the cost',
        html: `<p>Capacity and efficiency, single or variable speed, coil and line set replacement, electrical work, a condensate pump, ductwork changes and permits. Every item is on the written estimate. See <a href="/financing/">financing</a>. Utility programs change, so check current eligibility for any ComEd rebate before you buy.</p>`,
      },
    ],
    faqs: [
      { q: 'Can you add central air to a house with a boiler?', a: 'Without ductwork, ductless mini-splits are usually the practical choice. Small high-velocity duct systems are another option in some homes.' },
      { q: 'How long does AC installation take?', a: 'A direct replacement usually takes one day. Line set, electrical or ductwork changes can add time; your estimate will say so.' },
      { q: 'What refrigerant do new systems use?', a: 'Newer systems are moving to lower-impact refrigerants such as R-454B. We’ll explain what your options use.' },
      { q: 'Why does the indoor coil have to match the outdoor unit?', a: 'The outdoor unit and indoor coil must be a matched pair to reach their rated efficiency and to keep the manufacturer’s warranty.' },
      { q: 'Are AC estimates free?', a: 'Yes. Estimates on new air conditioners, furnaces and boilers are free and written, and financing is available, subject to credit approval.' },
    ],
    related: ['ac-repair', 'heat-pump-installation', 'mini-split-installation'],
  },
  {
    slug: 'ac-tune-up', name: 'AC Tune-Up', category: 'Cooling', funnel: 'maintenance',
    title: 'AC Tune-Up Chicago | Spring AC Service',
    card: 'Spring cooling check',
    meta: `Spring AC tune-up in Chicago: condenser coil cleaning, capacitor and refrigerant checks, drain flush. Comfort Club available. ${PHONE_DISPLAY}.`,
    intro: 'An AC tune-up is a spring inspection and cleaning that catches the parts most likely to fail in the first heat wave. Chicago Aircare Pro performs AC tune-ups in Chicago and nearby suburbs. We clean the outdoor coil, test the capacitor and contactor, take refrigerant readings and flush the drain before same-day appointments disappear.',
    signs: ['No tune-up in the last 12 months', 'The AC struggled on hot days last summer', 'The outdoor coil is visibly packed with cottonwood or dirt', 'Water around the furnace last season', 'You want to keep the manufacturer’s warranty in good standing'],
    included: ['Condenser coil cleaning', 'Capacitor, contactor and electrical checks', 'Refrigerant readings (no topping off without finding a leak)', 'Condensate drain flush and float switch test', 'Thermostat, airflow and full cooling cycle check'],
    sections: [
      {
        h2: 'What our AC tune-up covers',
        html: `<ul>
<li>Clean the outdoor condenser coil and clear debris around the unit</li>
<li>Test the run capacitor and contactor; tighten electrical connections</li>
<li>Measure refrigerant pressures, superheat and subcooling (no “topping off” without finding a leak)</li>
<li>Measure the temperature split across the indoor coil</li>
<li>Check the indoor coil, blower and filter for airflow restrictions</li>
<li>Flush the condensate drain and test the float switch or condensate pump</li>
<li>Check the outdoor fan motor and compressor amperage</li>
<li>Verify thermostat operation and a full cooling cycle</li>
</ul>`,
      },
      {
        h2: 'Why it matters in Chicago',
        html: `<p>Capacitors weaken over the winter and fail on the first 90-degree day. Cottonwood and dirt pack into outdoor coils every spring in Chicago, raising pressures and power use. Algae clogs drains and can shut the AC off or leak into a finished basement. All of these are quick to catch in April or May. Our <a href="/prepare-ac-for-summer/">guide to preparing your AC for summer</a> covers what you can do yourself.</p>`,
      },
      {
        h2: 'What a tune-up won’t do',
        html: `<p>A tune-up won’t fix a refrigerant leak by adding refrigerant. If readings show the system is low, that means a leak, and we’ll explain the <a href="/refrigerant-leak-repair/">leak repair</a> options and price. The same goes for any failing part we find: you see the reading or the part and decide before any repair. If we find nothing wrong, you get a record of the readings for next year’s comparison.</p>`,
      },
      {
        h2: 'When to schedule',
        html: `<p>April through early June, before regular cooling starts. Once the first heat wave hits, calls for <a href="/ac-repair/">AC repair</a> take priority across the city, and tune-up appointments get harder to find.</p>`,
      },
      {
        h2: 'Mini-splits, heat pumps and rooftop units',
        html: `<p>Ductless units need their filters, coils, blower wheels and drains cleaned; see <a href="/mini-split-repair/">mini-split service</a>. Heat pumps get the same cooling-side checks plus a look at the defrost and reversing valve controls. Rooftop units on two-flats and townhomes get the same tune-up, with roof access planned ahead. If the coil keeps growing mold, a <a href="/uv-air-sanitizers/">UV sanitizer</a> may help.</p>`,
      },
      {
        h2: 'Comfort Club',
        html: `<p>The <a href="/maintenance-plan/">Comfort Club maintenance plan</a> includes a spring AC tune-up and a fall <a href="/furnace-tune-up/">furnace tune-up</a>, with priority appointments and member repair discounts.</p>`,
      },
    ],
    faqs: [
      { q: 'When should I schedule an AC tune-up?', a: 'April through early June, before regular cooling starts. Comfort Club members get a spring AC tune-up as part of the plan.' },
      { q: 'Can I clean the outdoor unit myself?', a: 'You can keep the area clear and gently rinse the coil from inside out with the power off. Electrical and refrigerant checks should be done by a technician.' },
      { q: 'Do you add refrigerant during a tune-up?', a: 'Not without finding the cause. Refrigerant isn’t used up, so a low reading means a leak. We explain the leak repair options and price first.' },
      { q: 'Do you tune up mini-splits?', a: 'Yes. Ductless units need their filters, coils, blower wheels and drains cleaned.' },
      { q: 'How long does an AC tune-up take?', a: 'Usually about an hour, longer if we find something that needs attention. We tell you before doing any repair.' },
    ],
    related: ['ac-repair', 'furnace-tune-up', 'refrigerant-leak-repair'],
  },
  {
    slug: 'mini-split-installation', name: 'Mini-Split Installation', category: 'Cooling', funnel: 'quote',
    title: 'Mini-Split Installation Chicago',
    card: 'Ductless for older homes',
    meta: `Ductless mini-split installation in Chicago: cooling and heat for boiler homes, two-flats, attics and additions. Free estimates. ${PHONE_DISPLAY}.`,
    intro: 'Chicago Aircare Pro installs ductless mini-splits in Chicago homes. They cool and heat rooms that have no ductwork, which makes them a common fit for boiler-heated two-flats and greystones, attic conversions, additions and finished basements. Each room or zone gets its own control. Estimates are free, and financing is available, subject to credit approval.',
    signs: ['Home heated by radiators with no central air', 'A hot attic bedroom or addition the main system can’t keep comfortable', 'Window units you want to retire', 'Wanting efficient supplemental heat alongside a boiler'],
    included: ['Room-by-room sizing', 'Indoor head type and placement planning', 'Outdoor unit on a stand or bracket above snow level', 'Line set, drain and electrical work', 'Pressure test, deep vacuum and charge verification', 'Controls walkthrough and filter cleaning lesson'],
    sections: [
      {
        h2: 'Where mini-splits make sense',
        html: `<ul>
<li>Homes heated by a boiler, with no ducts for central air</li>
<li>An attic bedroom or addition the main system can’t keep comfortable</li>
<li>Replacing window units with something quiet and efficient</li>
<li>Adding efficient heat as backup or primary heat (mini-splits are heat pumps)</li>
</ul>
<p>Not sure if ductless or central air fits better? Compare them in <a href="/mini-split-vs-central-air/">mini-split vs. central air</a>, or read <a href="/mini-splits-for-older-homes/">mini-splits for older homes</a>.</p>`,
      },
      {
        h2: 'How a system is designed',
        html: `<p>Each indoor head serves one zone with its own control. We place heads where airflow reaches the space, choose the head type (wall, ceiling cassette, slim ducted or floor console), and size each one to its room. The outdoor unit is set on a stand or wall bracket above snow level. For year-round heat, we recommend cold-climate models rated for low outdoor temperatures.</p>`,
      },
      {
        h2: 'Mini-splits in two-flats and greystones',
        html: `<p>In a boiler-heated two-flat, each unit can get its own outdoor unit and controls, so tenants or family members aren’t sharing a thermostat. Line sets on a brick or stone façade are run in a protective line-hide cover and routed to keep the building looking tidy; on a greystone, we plan the route with you before drilling. The boiler typically stays for the coldest weeks while the mini-splits handle cooling and shoulder-season heat. Attic and top-floor rooms, which run hottest in summer, are often the first zone owners add.</p>`,
      },
      {
        h2: 'What installation includes',
        html: `<ol>
<li>Indoor heads and outdoor unit mounted; a small wall penetration per head</li>
<li>Line sets and wiring run in a protective line-hide cover outside</li>
<li>Condensate drainage by gravity or with a small pump</li>
<li>Pressure test, deep vacuum and charge verification</li>
<li>Remote or wall control setup, and a walkthrough of filter cleaning</li>
</ol>`,
      },
      {
        h2: 'Heating with a mini-split in a Chicago winter',
        html: `<p>Cold-climate models keep producing heat in sub-zero weather, but output drops as it gets colder. In older Chicago homes they often work alongside the existing boiler rather than replacing it. If you want a mini-split as the main heat source, we size for low outdoor temperatures and discuss backup. See <a href="/heat-pumps-in-chicago/">heat pumps in Chicago</a> and <a href="/heat-pump-installation/">heat pump installation</a> for ducted options.</p>`,
      },
      {
        h2: 'What affects the cost',
        html: `<p>Number of zones, head types, line set lengths, wall and roof access, electrical work and cold-climate models. All are listed on the estimate. See <a href="/financing/">financing</a>. Utility and federal incentive rules change, so check current eligibility before counting on a rebate.</p>`,
      },
    ],
    faqs: [
      { q: 'Will a mini-split heat my home in January?', a: 'Cold-climate models keep producing heat in sub-zero weather, but output drops as it gets colder. In older Chicago homes they often work alongside the existing boiler.' },
      { q: 'How many indoor units do I need?', a: 'Usually one per room or open area you want controlled separately. We size and place them during the estimate visit.' },
      { q: 'Can each unit of a two-flat have its own mini-split system?', a: 'Yes. Each unit can have its own outdoor unit and controls, independent of the shared boiler.' },
      { q: 'How big is the hole in the wall?', a: 'Each indoor head needs one small wall penetration for the line set, drain and wiring, which are run outside in a protective cover.' },
      { q: 'Are mini-split estimates free?', a: 'Yes. Estimates are free and written, and financing is available, subject to credit approval.' },
    ],
    related: ['mini-split-repair', 'heat-pump-installation', 'ac-installation'],
  },
  {
    slug: 'mini-split-repair', name: 'Mini-Split Repair', category: 'Cooling', funnel: 'emergency',
    title: 'Mini-Split Repair in Chicago: Error Codes & Leaks',
    card: 'Error codes, drainage, refrigerant',
    meta: 'Ductless mini-split repair in Chicago and suburbs: blinking error codes, water dripping from the head, not heating in winter or cooling in summer. 24/7.',
    intro: 'Chicago Aircare Pro repairs and cleans ductless mini-splits in Chicago and nearby suburbs, in heating and cooling mode. Mini-splits show error codes for a reason. We read the fault history, test sensors and boards, clear drain lines, deep-clean coils and blower wheels, and find and fix refrigerant leaks, with the price before any work.',
    signs: ['Blinking lights or an error code on the indoor head', 'Water dripping from the indoor head', 'Weak airflow or a musty smell', 'Not cooling or not heating', 'Outdoor unit icing up in winter and staying iced'],
    included: ['Error-code and fault-history diagnosis', 'Drain line and condensate pump clearing', 'Coil and blower wheel deep cleaning', 'Flare connection and refrigerant leak checks', 'Sensor, board and fan motor testing'],
    sections: [
      {
        h2: 'Common mini-split problems we fix',
        html: `<h3>Blinking lights or error codes</h3>
<p>Indoor heads report faults for temperature sensors, communication between units, drain issues, fan motors and refrigerant problems. The code points us to where to test first; we confirm with measurements.</p>
<h3>Water dripping from the indoor head</h3>
<p>Usually a clogged drain line, a failed condensate pump, a dirty coil, or a head that isn’t level. On a wall over furniture or a finished floor, it’s worth shutting the unit off until it’s fixed.</p>
<h3>Weak airflow, musty smell</h3>
<p>The blower wheel and coil inside wall heads collect dust and biological growth over time. A deep cleaning restores airflow and removes odors.</p>
<h3>Not cooling or heating</h3>
<p>Low refrigerant from a leak (often at the flare connections), a failed sensor, an outdoor fan or compressor issue, or an electronic expansion valve fault. See <a href="/refrigerant-leak-repair/">refrigerant leak repair</a>.</p>
<h3>Outdoor unit icing in winter</h3>
<p>Some frost during heating is normal and clears on defrost. Ice that builds up and stays points to drainage, defrost or charge problems. Snow piling around a unit that sits too low can also block it; see <a href="/heat-pump-repair/">heat pump repair</a>.</p>`,
      },
      {
        h2: 'How we diagnose',
        html: `<p>We read the fault history, measure pressures and temperatures, test sensors and boards, check the flare connections for leaks, and inspect the drain. You see what we found and the options first.</p>`,
      },
      {
        h2: 'Before you call',
        html: `<ol>
<li>Check the remote: correct mode (Cool, Heat, not Dry or Fan), fresh batteries, and no timer set.</li>
<li>Rinse the washable filters behind the front panel and let them dry.</li>
<li>Check the breaker or disconnect for the outdoor unit.</li>
<li>Note the blinking pattern or code on the indoor head; it helps us bring the right parts.</li>
</ol>`,
      },
      {
        h2: 'Mini-split cleaning and maintenance',
        html: `<p>Clean the washable filters monthly during heavy use. A professional cleaning of the coil and blower wheel every year or two keeps airflow and efficiency up and prevents the musty smell that comes from growth inside the head. Chicago’s humid summers make that more likely in heads that run long hours in bedrooms and attics. We can do it alongside an <a href="/ac-tune-up/">AC tune-up</a>.</p>`,
      },
      {
        h2: 'Repair or replace?',
        html: `<p>Most mini-split problems (drains, sensors, fan motors, flare leaks, boards) are repairable. Compressor failures or major leaks on older systems deserve a side-by-side comparison with <a href="/mini-split-installation/">a new system</a>. Some parts must be ordered from the manufacturer, and we’ll tell you upfront if that’s the case.</p>`,
      },
      {
        h2: 'What affects the cost',
        html: `<p>The failed component, whether the part is stocked or must be ordered, refrigerant work, access to the indoor head and outdoor unit, warranty status and after-hours service. You get the price before work starts.</p>`,
      },
    ],
    faqs: [
      { q: 'Why does my mini-split smell musty?', a: 'Dust and biological growth on the blower wheel and coil inside the head. A deep cleaning usually solves it.' },
      { q: 'Why is water dripping from my mini-split?', a: 'Usually a clogged drain line, a failed condensate pump, a dirty coil, or a head that isn’t level.' },
      { q: 'How often should a mini-split be cleaned?', a: 'Clean the washable filters monthly during heavy use. A professional cleaning of the coil and blower wheel every year or two keeps airflow and efficiency up.' },
      { q: 'Do you work on all mini-split brands?', a: 'We service the major ductless brands. Some parts must be ordered from the manufacturer.' },
      { q: 'Is frost on my outdoor unit in winter normal?', a: 'Some frost during heating is normal and clears on defrost. Ice that builds up and stays points to drainage, defrost or charge problems.' },
    ],
    related: ['mini-split-installation', 'refrigerant-leak-repair', 'heat-pump-repair'],
  },
  {
    slug: 'refrigerant-leak-repair', name: 'Refrigerant Leak Repair', category: 'Cooling', funnel: 'quick',
    title: 'AC Refrigerant Leak Repair Chicago',
    card: 'Find, fix and recharge',
    meta: `AC & heat pump refrigerant leak repair in Chicago: we find the leak, fix it and recharge to spec. EPA 608 certified.${PHONE_DISPLAY}.`,
    intro: 'An air conditioner or heat pump that needs refrigerant has a leak. Chicago Aircare Pro finds the leak and fixes it instead of recharging the system every summer. Topping off without finding the leak just wastes money. Our EPA 608-certified technicians locate the leak, repair it when it’s repairable, and recharge to the manufacturer’s specs.',
    signs: ['The AC runs long but the air isn’t cold enough', 'Ice on the indoor coil or the larger copper line', 'A hissing or bubbling sound near the coil or line set', 'The system was “recharged” last year and is low again'],
    included: ['Low charge confirmed by superheat and subcooling', 'Electronic, bubble and nitrogen leak testing', 'Repair or replacement options with prices', 'Evacuation and recharge to spec', 'EPA 608-compliant refrigerant handling'],
    sections: [
      {
        h2: 'How we find leaks',
        html: `<ol>
<li>Confirm low charge from superheat and subcooling readings, not by guessing.</li>
<li>Check the common leak points first: Schrader valve cores, flare and brazed joints, the service valves, and the indoor coil.</li>
<li>Use an electronic leak detector and bubble solution. Where a leak is hard to find, isolate sections and pressure-test with nitrogen.</li>
</ol>`,
      },
      {
        h2: 'Repair options',
        html: `<ul>
<li><strong>Valve cores, flares, fittings:</strong> usually repaired directly.</li>
<li><strong>Brazed joints and line sets:</strong> re-brazed or a line section replaced.</li>
<li><strong>Evaporator coil leaks:</strong> coil replacement, which may be covered by the manufacturer’s parts warranty.</li>
<li><strong>Condenser coil leaks:</strong> repair is sometimes possible; on older systems, replacement is often the better value.</li>
</ul>
<p>After repair, the system is pressure-tested, evacuated to a deep vacuum and charged to the manufacturer’s specifications.</p>`,
      },
      {
        h2: 'Why “just add refrigerant” costs more',
        html: `<p>Refrigerant isn’t used up like fuel. If the charge is low, it escaped somewhere. Adding more without a repair means the leak continues, the system runs inefficiently, the coil can freeze (see <a href="/ac-freezing-up/">why an AC freezes up</a>), and the compressor works harder than it should. The refrigerant also escapes into the atmosphere. Fixing the leak is the lasting repair.</p>`,
      },
      {
        h2: 'R-22 systems',
        html: `<p>R-22 is no longer manufactured in the US, and the remaining supply is costly. For an older R-22 system with a leak, we will show you repair and replacement side by side. See <a href="/ac-installation/">AC installation</a> and our guide to <a href="/refrigerant-changes-r454b/">refrigerant changes and R-454B</a>.</p>`,
      },
      {
        h2: 'Heat pumps and mini-splits',
        html: `<p>Heat pumps and ductless systems leak in the same places, plus the flare connections at each mini-split head, which are a common leak point. A heat pump that’s low on charge heats poorly in winter as well as cooling poorly in summer. See <a href="/heat-pump-repair/">heat pump repair</a> and <a href="/mini-split-repair/">mini-split repair</a>.</p>`,
      },
      {
        h2: 'What affects the cost',
        html: `<p>Where the leak is and how accessible it is, the refrigerant type and amount needed, whether a coil is covered by the manufacturer’s parts warranty, and whether replacement makes more sense on an older system. You get the price before work starts.</p>`,
      },
    ],
    faqs: [
      { q: 'Why not just add refrigerant?', a: 'The leak continues, the system runs inefficiently and risks compressor damage, and refrigerant escapes into the atmosphere. Fixing the leak is the lasting repair.' },
      { q: 'Is a refrigerant leak dangerous?', a: 'Common residential refrigerants are not toxic in the small amounts from a typical leak, but in high concentrations they displace oxygen. If you smell a strong chemical odor indoors, ventilate and call.' },
      { q: 'Is it worth fixing a leak on an old AC?', a: 'It depends on the leak location, the refrigerant and the system’s age. For an older R-22 system, we show repair and replacement side by side so you can decide.' },
      { q: 'How do you find a refrigerant leak?', a: 'We confirm low charge with superheat and subcooling readings, check the common leak points, and use an electronic detector and bubble solution. Hard-to-find leaks are isolated and pressure-tested with nitrogen.' },
      { q: 'Are your technicians certified to handle refrigerant?', a: 'Yes. Our technicians are EPA 608 certified for refrigerant handling.' },
    ],
    related: ['ac-repair', 'ac-installation', 'heat-pump-repair'],
  },
  // ───────────── Air quality
  {
    slug: 'whole-home-humidifiers', name: 'Whole-Home Humidifiers', category: 'Air Quality', funnel: 'quick',
    title: 'Whole House Humidifier Install Chicago',
    card: 'Comfort in dry Chicago winters',
    meta: `Whole-house humidifier installation in Chicago: bypass, fan-powered and steam models for dry winter air, static shocks and cracked woodwork. ${PHONE_DISPLAY}.`,
    intro: 'A whole-home humidifier mounts on your furnace and adds moisture to the air throughout the house during the heating season. Chicago winter air gets very dry indoors once the heat runs, causing static shocks, dry skin and sinuses, and gaps in wood floors and trim. Chicago Aircare Pro installs and services whole-home humidifiers, sized and controlled so humidity stays comfortable without fogging the windows.',
    signs: ['Static shocks and dry skin all winter', 'Gaps in hardwood floors or cracking trim', 'Running several portable humidifiers', 'Dry sinuses or scratchy throat when the heat runs'],
    included: ['Bypass, fan-powered or steam options compared', 'Water line and drain connection', 'Wiring to the furnace and a humidistat or compatible thermostat', 'Outdoor-temperature compensation setup', 'Yearly maintenance walkthrough'],
    sections: [
      {
        h2: 'Types of whole-home humidifiers',
        html: `<table><thead><tr><th>Type</th><th>How it works</th><th>Good for</th></tr></thead><tbody>
<tr><td>Bypass</td><td>Uses the furnace blower to push air through a water panel</td><td>Most homes with a forced-air furnace</td></tr>
<tr><td>Fan-powered</td><td>Has its own fan, so it doesn’t need a bypass duct</td><td>Tight mechanical spaces, more output</td></tr>
<tr><td>Steam</td><td>Boils water to make steam; runs independently of the heat</td><td>Larger homes, precise control, heat pump or variable-speed systems</td></tr>
</tbody></table>`,
      },
      {
        h2: 'Getting humidity right',
        html: `<p>Too much humidity in winter causes condensation on cold windows and can lead to mold. We set the humidistat to adjust for outdoor temperature (an outdoor sensor is recommended), so humidity drops automatically when it gets very cold outside. A common winter target is around 30–40% indoors, lower during deep cold. Older Chicago homes with single-pane or storm windows show condensation sooner, so we start conservatively and adjust with you. More in our guide to <a href="/dry-air-in-winter/">dry air in winter</a>.</p>`,
      },
      {
        h2: 'Whole-home vs. portable humidifiers',
        html: `<p>A whole-home unit treats the entire house from the furnace, with no tanks to fill and far less cleaning than several room units. Portable units still make sense for a single bedroom or in homes without ductwork. Our <a href="/humidifier-vs-portable/">whole-home vs. portable humidifier guide</a> compares them.</p>`,
      },
      {
        h2: 'What installation includes',
        html: `<ol>
<li>Mounting the humidifier on the supply or return plenum, with a bypass duct where needed</li>
<li>A water line with a saddle or tee valve, and a drain line (bypass and fan types)</li>
<li>Wiring to the furnace and a humidistat or a compatible <a href="/thermostat-installation/">thermostat</a></li>
<li>Setup and a walkthrough of yearly water panel replacement</li>
</ol>`,
      },
      {
        h2: 'Boiler homes and heat pumps',
        html: `<p>Furnace-mounted humidifiers need ductwork. In boiler homes, a ducted steam humidifier can sometimes be added; otherwise room units are the practical option. Heat pumps and variable-speed furnaces deliver cooler supply air, which limits how much a bypass unit can evaporate, so a steam model is often the better match.</p>`,
      },
      {
        h2: 'Upkeep',
        html: `<p>Replace the water panel once a season (more often with hard water) and check the drain and valve. We can do it during your <a href="/furnace-tune-up/">furnace tune-up</a>. A new furnace is also a good time to add a humidifier; see <a href="/furnace-installation/">furnace installation</a>.</p>`,
      },
      {
        h2: 'What affects the cost',
        html: `<p>Humidifier type and capacity, whether a bypass duct is needed, the water and drain connections available near the furnace, the control (humidistat, outdoor sensor or thermostat integration), and whether it’s installed with a new furnace. Every item is on the written estimate.</p>`,
      },
    ],
    faqs: [
      { q: 'Is a whole-home humidifier better than portable units?', a: 'It treats the whole house with far less upkeep, and there are no tanks to refill. Portable units still make sense for a single room or homes without ductwork.' },
      { q: 'What humidity should my house be in winter?', a: 'A common winter target is around 30–40% indoors, lower during deep cold to avoid condensation on windows. An outdoor sensor adjusts it automatically.' },
      { q: 'How often does a humidifier need service?', a: 'Replace the water panel once a season (more often with hard water) and check the drain and valve. We can do it during your furnace tune-up.' },
      { q: 'Will a whole-home humidifier work with a boiler?', a: 'Furnace-mounted humidifiers need ductwork. In boiler homes, a ducted steam humidifier can sometimes be added; otherwise room units are the practical option.' },
    ],
    related: ['air-purifiers', 'furnace-installation', 'whole-home-dehumidifiers'],
  },
  {
    slug: 'whole-home-dehumidifiers', name: 'Whole-Home Dehumidifiers', category: 'Air Quality', funnel: 'quick',
    title: 'Whole-Home Dehumidifiers Chicago',
    card: 'Damp basements and summer humidity',
    meta: `Whole-home and basement dehumidifiers in Chicago: musty basements, clammy rooms, condensation. Ducted or standalone, no buckets to empty. ${PHONE_DISPLAY}.`,
    intro: 'A whole-home dehumidifier removes moisture from the entire house or basement, independently of the air conditioner. Chicago summers are humid, and basements stay damp even when the AC runs, which is a recipe for musty air and mold. Chicago Aircare Pro installs and services ducted and standalone whole-home dehumidifiers that drain continuously, so there are no buckets to empty.',
    signs: ['A musty smell in the basement or closets', 'Indoor humidity above about 50–60% in summer', 'Condensation on cold water pipes, ducts or windows', 'Portable dehumidifiers that fill up every day, or run constantly', 'The house feels cool but clammy with the AC on'],
    included: ['Sizing to the space and moisture load', 'Ducted or standalone installation', 'Dedicated drain to a floor drain or condensate pump', 'Dehumidistat control and setup'],
    sections: [
      {
        h2: 'Why the AC alone may not be enough',
        html: `<p>An air conditioner dehumidifies only while it runs. An oversized AC reaches the setpoint quickly and shuts off before removing much moisture. On mild, damp days it may barely run. Basements below grade often don’t get enough cooling to dry out. A dehumidifier works whenever humidity is high, whatever the temperature. If your AC itself is struggling, start with <a href="/ac-repair/">AC repair</a>.</p>`,
      },
      {
        h2: 'Options',
        html: `<ul>
<li><strong>Ducted whole-home dehumidifier:</strong> connected to the HVAC ductwork, treating the whole house.</li>
<li><strong>Basement or crawl-space unit:</strong> a high-capacity unit that drains continuously, sized for the space.</li>
</ul>
<p>Both drain to a floor drain or condensate pump, so there is no bucket to empty.</p>`,
      },
      {
        h2: 'Chicago basements',
        html: `<p>Many Chicago bungalows, two-flats and greystones have below-grade basements or garden units that stay cool and damp all summer. That dampness feeds musty odors, can encourage mold on stored items and drywall, and makes finished basements and garden apartments feel clammy. A sized, continuously draining unit is far more reliable than a portable one that shuts off when its bucket fills. If the garden unit is a separate apartment, we look at where the unit can drain and how it’s controlled.</p>`,
      },
      {
        h2: 'What installation includes',
        html: `<ol>
<li>Sizing to the space and moisture load</li>
<li>Mounting, duct connections (ducted models), and a dedicated drain</li>
<li>A dehumidistat control and setup</li>
</ol>`,
      },
      {
        h2: 'Water in the basement is a different problem',
        html: `<p>A dehumidifier controls moisture in the air. Liquid water coming in through foundation cracks, window wells or poor grading has to be fixed at the source first. We’ll tell you if what we see points that way.</p>`,
      },
      {
        h2: 'Pair it with the rest of the system',
        html: `<p>Lower humidity also makes the AC feel more effective at a higher setpoint. In damp homes where the AC coil keeps growing mold, a <a href="/uv-air-sanitizers/">UV sanitizer</a> can help keep it clean. In winter, the opposite problem shows up upstairs; see <a href="/whole-home-humidifiers/">whole-home humidifiers</a>. Replacing the AC? Ask about variable-speed systems that remove more moisture, during an <a href="/ac-installation/">AC installation</a> estimate.</p>`,
      },
      {
        h2: 'What affects the cost',
        html: `<p>The size of the space and moisture load, ducted versus standalone, drain options (gravity or pump), and duct modifications. Every item is listed on the written estimate.</p>`,
      },
    ],
    faqs: [
      { q: 'What humidity should my house be in summer?', a: 'Roughly 40–50% relative humidity in summer is comfortable and discourages mold and dust mites.' },
      { q: 'Will a dehumidifier fix water coming into my basement?', a: 'No. Liquid water from foundation cracks or grading needs to be fixed at the source. A dehumidifier controls moisture in the air.' },
      { q: 'Why is my house clammy even with the AC on?', a: 'An oversized AC can reach the setpoint and shut off before removing much moisture, and on mild, damp days it may barely run. A dehumidifier works whenever humidity is high.' },
      { q: 'Do I have to empty a whole-home dehumidifier?', a: 'No. It drains continuously to a floor drain or condensate pump.' },
    ],
    related: ['whole-home-humidifiers', 'air-purifiers', 'ac-repair'],
  },
  {
    slug: 'air-purifiers', name: 'Air Purifiers', category: 'Air Quality', funnel: 'quick',
    title: 'Whole-Home Air Purifiers Chicago',
    card: 'Filtration and media cabinets',
    meta: `Whole-home air purifiers & filtration in Chicago: media filter cabinets and air cleaners for dust, pollen and pet dander.${PHONE_DISPLAY}.`,
    intro: 'A whole-home air purifier filters the air every time your furnace or AC blower runs, catching dust, pollen, pet dander and fine particles throughout the house. Your HVAC system moves all the air in your home, so it’s the best place to clean it. Chicago Aircare Pro installs media filter cabinets and whole-home air cleaners on forced-air systems, sized so better filtration doesn’t choke your airflow.',
    signs: ['Allergies or asthma symptoms at home', 'Dust returns quickly after cleaning', 'Pets in the home', 'A 1-inch filter that clogs fast or bows in the slot'],
    included: ['Blower capacity and static pressure check', 'Filter cabinet or air cleaner sizing and install', 'Sealed at the return to prevent bypass', 'Filter schedule setup'],
    sections: [
      {
        h2: 'Filtration options',
        html: `<table><thead><tr><th>Option</th><th>What it does</th><th>Things to know</th></tr></thead><tbody>
<tr><td>Standard 1-inch filter</td><td>Protects the equipment; limited particle capture</td><td>Higher-MERV 1-inch filters can restrict airflow</td></tr>
<tr><td>4–5 inch media filter cabinet</td><td>MERV 11–13 capture with low airflow restriction</td><td>Replaced every 6–12 months; a strong upgrade for most homes</td></tr>
<tr><td>Electronic air cleaner</td><td>Charges and collects particles on cells</td><td>Cells need regular washing</td></tr>
</tbody></table>`,
      },
      {
        h2: 'Airflow comes first',
        html: `<p>A filter that is too restrictive for the blower and ductwork reduces airflow, which can freeze AC coils, trip furnace limit switches and shorten equipment life. We measure static pressure and choose a filter size and rating the system can handle. In older Chicago homes with small return ducts, a media cabinet’s larger surface area is often what makes better filtration possible without hurting airflow.</p>`,
      },
      {
        h2: 'What installation includes',
        html: `<ol>
<li>Checking blower capacity and duct static pressure</li>
<li>Installing the filter cabinet or air cleaner at the return, sealed to prevent bypass</li>
<li>Showing you how and when to change the filter</li>
</ol>`,
      },
      {
        h2: 'Get more from any filter',
        html: `<p>Filtration only cleans air that passes through it. Leaky return ducts in a basement pull in unfiltered air, and a fan that rarely runs leaves air sitting between cycles. Sealing returns (see <a href="/ductwork-repair/">ductwork repair</a>) and running the fan enough to circulate air make a real difference. Change filters on schedule; our guide to <a href="/how-often-change-furnace-filter/">how often to change your furnace filter</a> covers it.</p>`,
      },
      {
        h2: 'What we don’t install',
        html: `<p>We don’t recommend devices designed to produce ozone. Ozone is a lung irritant. For coil mold and odors, a properly installed, ozone-free <a href="/uv-air-sanitizers/">UV sanitizer</a> is a better tool; for particles, filtration is.</p>`,
      },
      {
        h2: 'Homes without ductwork',
        html: `<p>Whole-home filtration needs a forced-air system. In boiler-heated homes, portable HEPA purifiers in bedrooms and living areas are the practical option, and ductless <a href="/mini-split-installation/">mini-splits</a> have washable filters of their own.</p>`,
      },
      {
        h2: 'What affects the cost',
        html: `<p>The filtration type, cabinet size, any return duct modifications needed to fit it, and whether it’s installed with a new furnace. Every item is on the written estimate.</p>`,
      },
    ],
    faqs: [
      { q: 'Will a whole-home air purifier help with allergies?', a: 'Better filtration reduces airborne allergens like pollen, dust and dander. It works best combined with sealed return ducts and running the fan enough to circulate air.' },
      { q: 'Will a thicker filter hurt my system?', a: 'Not if the cabinet and ductwork are sized for it. We measure static pressure and check airflow before and after.' },
      { q: 'Do you install ozone-producing air cleaners?', a: 'No. Ozone is a lung irritant, and we don’t recommend devices designed to produce it.' },
      { q: 'How often do media filters need changing?', a: 'A 4–5 inch media filter is typically replaced every 6–12 months, depending on the home, pets and how much the system runs.' },
    ],
    related: ['uv-air-sanitizers', 'ductwork-repair', 'whole-home-humidifiers'],
  },
  {
    slug: 'uv-air-sanitizers', name: 'UV Air Sanitizers', category: 'Air Quality', funnel: 'quick',
    title: 'HVAC UV Light Installation in Chicago',
    card: 'UV lights for coils and air',
    meta: `HVAC UV light (UV air sanitizer) installation in Chicago, Skokie, Evanston and nearby suburbs: ozone-free UV-C lamps that keep the AC coil free of mold.`,
    intro: 'A UV air sanitizer is a UV-C lamp installed inside your HVAC system, usually aimed at the AC coil and drain pan, to stop mold and bacteria from growing on these damp surfaces. A clean coil keeps airflow and efficiency up and odors down. Chicago Aircare Pro installs and services ozone-free UV systems in Chicago homes, and we’ll tell you plainly whether your home would benefit.',
    signs: ['A musty smell when the AC starts', 'Slime in the drain pan or a drain that keeps clogging', 'A dirty indoor coil that keeps coming back', 'Household members with allergies'],
    included: ['Coil or air-stream UV options explained', 'Lamp mounted near the coil, with a safety switch where required', 'Power connection, often from the furnace', 'Labelled access panel and lamp replacement schedule'],
    sections: [
      {
        h2: 'What UV does well, and what it doesn’t',
        html: `<ul>
<li><strong>Coil and drain pan:</strong> continuous UV exposure keeps biological growth off the evaporator coil and pan, which helps airflow, efficiency and odors. This is the most reliable use.</li>
<li><strong>Air passing by:</strong> air moves past the lamp quickly, so UV is less effective at treating airborne particles than at keeping surfaces clean. For particles, use better <a href="/air-purifiers/">filtration</a>.</li>
</ul>
<p>Our blog post <a href="/uv-lights-worth-it/">are UV lights worth it?</a> goes into the trade-offs.</p>`,
      },
      {
        h2: 'Is it right for your home?',
        html: `<p>UV is most useful where the coil stays damp and growth has been a problem: musty smells when the AC starts, slime in the drain pan, or a dirty coil that keeps coming back. Chicago’s humid summers keep coils wet for long stretches, and basements where the furnace and coil sit are often damp too. If the house itself is humid, a <a href="/whole-home-dehumidifiers/">whole-home dehumidifier</a> addresses the cause; UV keeps the coil clean. If your home has none of these symptoms, we’ll tell you UV probably isn’t worth adding.</p>`,
      },
      {
        h2: 'What installation includes',
        html: `<ol>
<li>Mounting the lamp in the plenum near the coil, with a safety switch where required</li>
<li>Power connection, often from the furnace</li>
<li>Guidance on lamp replacement (typically yearly) and safe handling</li>
</ol>`,
      },
      {
        h2: 'UV and coil cleaning',
        html: `<p>A UV lamp keeps a clean coil clean; it won’t quickly clear years of buildup. If the coil is already heavily fouled, it should be cleaned first, which we can check during an <a href="/ac-tune-up/">AC tune-up</a>. Ductless heads are a different design; for a musty mini-split, a deep cleaning is the fix (see <a href="/mini-split-repair/">mini-split repair</a>).</p>`,
      },
      {
        h2: 'Safety',
        html: `<p>The lamp is enclosed inside the HVAC system. UV-C should never be looked at directly. Turn the power off before opening the plenum; we label the access panel. We install lamps rated as ozone-free for residential HVAC.</p>`,
      },
      {
        h2: 'What affects the cost',
        html: `<p>The type of lamp (coil-focused or air-stream), mounting location and access, power source, and whether the coil needs cleaning first. Every item is on the written estimate.</p>`,
      },
    ],
    faqs: [
      { q: 'Do you install HVAC UV lights in Skokie and the north suburbs?', a: 'Yes. We install UV air sanitizers in Chicago and in Skokie, Evanston, Wilmette, Highland Park and the northwest suburbs, on the furnace or air handler at the AC coil.' },
      { q: 'Are UV lights worth it?', a: 'They’re most useful for keeping coils and drain pans clean in humid conditions. If your home doesn’t have musty smells, drain slime or recurring coil growth, we’ll tell you plainly it probably isn’t worth adding.' },
      { q: 'Is UV-C safe?', a: 'The lamp is enclosed inside the HVAC system. UV-C should never be looked at directly. Turn the power off before opening the plenum, and we label the access panel.' },
      { q: 'Does UV produce ozone?', a: 'We install lamps rated as ozone-free for residential HVAC.' },
      { q: 'How often does a UV lamp need replacing?', a: 'Typically about once a year. We show you how and when during installation.' },
    ],
    related: ['air-purifiers', 'ac-tune-up', 'ductwork-repair'],
  },
  {
    slug: 'ductwork-repair', name: 'Ductwork Repair', category: 'Air Quality', funnel: 'quick',
    title: 'Ductwork Repair & Sealing Chicago',
    card: 'Leaks, balancing and returns',
    meta: `Ductwork repair in Chicago: sealing leaks, adding returns, balancing and resizing for hot upstairs rooms, noisy vents and weak airflow. ${PHONE_DISPLAY}.`,
    intro: 'Chicago Aircare Pro repairs, seals and modifies ductwork in Chicago homes to fix uneven temperatures, noisy vents and airflow problems. Ducts carry every bit of heat and cooling from the furnace and AC, and leaks or undersized runs waste much of it. We test static pressure and airflow before recommending anything, then seal, balance and add returns where older homes need them.',
    signs: ['Some rooms are always too hot or too cold', 'Whistling, rattling or booming from the ducts', 'A dusty house, or a basement much warmer than the rest of the home in winter', 'Weak airflow from some registers', 'AC coils that freeze or furnace limit switches that trip'],
    included: ['Static pressure and room-by-room airflow testing', 'Sealing accessible leaks with mastic or approved foil tape', 'Repairing disconnected or crushed runs', 'Adding or enlarging returns', 'Balancing dampers and duct insulation'],
    sections: [
      {
        h2: 'What we do',
        html: `<h3>Measure airflow and static pressure</h3>
<p>Static pressure tells us whether the ducts are too small or restricted for the blower. Room-by-room airflow shows where the air is going.</p>
<h3>Seal leaks</h3>
<p>Accessible joints and seams are sealed with mastic or approved foil tape, not cloth duct tape, especially on return ducts in basements and attics.</p>
<h3>Repair and modify</h3>
<p>Disconnected or crushed runs repaired, returns added to rooms that lack one, undersized trunks or branches resized, and balancing dampers installed.</p>
<h3>Insulate</h3>
<p>Ducts in attics or unconditioned spaces lose heat and gain heat; insulating them also prevents summer condensation.</p>`,
      },
      {
        h2: 'Chicago homes',
        html: `<p>Many Chicago bungalows and older houses had central air added to ductwork designed only for heat, or have few return air paths upstairs. That is a common reason upper floors run hot in summer. Finished attics in bungalows often get one supply and no return, and basement returns pulling from a leaky panned joist bay can draw dusty air into the system. We look at the whole system before recommending changes.</p>`,
      },
      {
        h2: 'Why ducts affect your equipment, not just comfort',
        html: `<p>Restricted ducts force the blower to work harder and reduce airflow across the furnace heat exchanger and the AC coil. That shows up as furnace limit trips and short-cycling (see <a href="/furnace-short-cycling/">furnace short-cycling</a>), frozen AC coils (see <a href="/ac-freezing-up/">AC freezing up</a>) and shorter equipment life. A new furnace or AC on undersized ducts inherits the same problems, so we check ducts during every <a href="/furnace-installation/">furnace</a> and <a href="/ac-installation/">AC installation</a> estimate.</p>`,
      },
      {
        h2: 'Duct repair vs. duct cleaning',
        html: `<p>We focus on repairs, sealing and airflow. Cleaning helps after construction or contamination, but it doesn’t fix leaky or undersized ducts, which are the usual cause of comfort problems. For dust, better <a href="/air-purifiers/">filtration</a> and sealed returns usually do more.</p>`,
      },
      {
        h2: 'Zoning and balancing',
        html: `<p>Zoning with motorized dampers can fix uneven floors when the ducts can support it; see <a href="/thermostat-installation/">thermostats and zoning</a> and our guide to <a href="/hvac-zoning-explained/">HVAC zoning</a>. Often, simply balancing existing dampers seasonally (more air upstairs in summer, more downstairs in winter) is a good first step, and we’ll show you how.</p>`,
      },
      {
        h2: 'What affects the cost',
        html: `<p>How accessible the ducts are (open basement ceilings versus finished walls), how much sealing is needed, whether returns are added or trunks resized, and insulation. Every item is listed on the written estimate.</p>`,
      },
    ],
    faqs: [
      { q: 'Do you do duct cleaning?', a: 'We focus on repairs, sealing and airflow. Cleaning helps after construction or contamination, but it doesn’t fix leaky or undersized ducts.' },
      { q: 'Why is my upstairs always hot in summer?', a: 'In many Chicago homes, central air was added to ductwork designed only for heat, with few return paths upstairs. Adding returns, sealing and balancing often helps.' },
      { q: 'Can zoning fix uneven rooms?', a: 'Sometimes. Zoning with motorized dampers works when the ducts can support it. We test airflow and static pressure first.' },
      { q: 'Is cloth duct tape OK for sealing ducts?', a: 'No. Joints and seams should be sealed with mastic or approved foil tape, which hold up far better than cloth duct tape.' },
    ],
    related: ['air-purifiers', 'thermostat-installation', 'furnace-installation'],
  },
  {
    slug: 'carbon-monoxide-safety', name: 'Carbon Monoxide Safety', category: 'Air Quality', funnel: 'emergency',
    title: 'Carbon Monoxide Safety Check Chicago',
    card: 'CO testing and alarms',
    meta: 'Carbon monoxide safety checks in Chicago: furnace, boiler and water heater combustion and venting testing. If a CO alarm sounds, leave and call 911.',
    intro: 'If a carbon monoxide alarm is sounding, leave the home now and call 911 or your gas utility from outside. Once responders have cleared the home, Chicago Aircare Pro can do a carbon monoxide safety check to find the source. Every gas furnace, boiler and water heater can produce carbon monoxide (CO) if venting or combustion goes wrong, so we test combustion and venting and check that your CO alarms are where they should be.',
    signs: ['CO alarm sounding or chirping', 'Headaches or nausea that ease when you leave home', 'Soot or rust around the furnace, boiler or vent', 'Yellow or flickering burner flames', 'A water heater left on the old chimney after a high-efficiency furnace install'],
    included: ['CO readings in the living space and near appliances', 'Combustion analysis of furnace or boiler flue gases', 'Venting, chimney draft and liner inspection where visible', 'Heat exchanger inspection where accessible', 'Backdraft test with exhaust fans running', 'CO alarm placement advice'],
    sections: [
      {
        h2: 'What carbon monoxide is',
        html: `<p>CO is a colorless, odorless gas produced when fuel burns incompletely. In a home it usually comes from a gas appliance that is burning poorly or venting badly. Early symptoms resemble the flu: headache, dizziness, nausea and fatigue, often better when you leave the house. More in our <a href="/carbon-monoxide-safety-tips/">carbon monoxide safety tips</a>.</p>`,
      },
      {
        h2: 'Common sources in Chicago homes',
        html: `<ul>
<li>A cracked furnace heat exchanger (see <a href="/cracked-heat-exchanger-signs/">cracked heat exchanger signs</a>)</li>
<li>Blocked or disconnected flue pipes, or a chimney blocked by debris or a collapsed liner</li>
<li>An orphaned water heater left alone on an oversized chimney after a furnace was replaced with a high-efficiency model</li>
<li>Burner problems causing incomplete combustion</li>
<li>Backdrafting when exhaust fans pull air from the same space as a gas appliance</li>
<li>Vehicles or generators running in an attached garage</li>
</ul>
<p>Older Chicago buildings add their own risks: brick chimneys that have deteriorated inside, and two-flats and greystones where several appliances share a flue. High-efficiency furnaces vent through PVC at the side wall, and a terminal buried in snow can cause problems too.</p>`,
      },
      {
        h2: 'What our safety check covers',
        html: `<ol>
<li>CO readings in the living space and near appliances</li>
<li>Combustion analysis of the furnace or boiler flue gases</li>
<li>Venting inspection: pipe connections, slope, chimney draft and liner condition where visible</li>
<li>Heat exchanger inspection where accessible</li>
<li>Checking for backdrafting with exhaust fans running</li>
<li>Advice on CO alarm placement</li>
</ol>`,
      },
      {
        h2: 'What to do if your CO alarm goes off',
        html: `<ol>
<li>Get everyone, including pets, out of the home. Don’t stop to open windows or look for the source.</li>
<li>From outside, call 911 or your gas utility (Peoples Gas in Chicago, North Shore Gas or Nicor Gas in the suburbs).</li>
<li>Don’t go back in until responders say it’s safe.</li>
<li>Then call us to find and fix the source, so it doesn’t happen again.</li>
</ol>`,
      },
      {
        h2: 'CO alarms',
        html: `<p>Illinois law requires carbon monoxide alarms in most homes with fuel-burning appliances or an attached garage, within 15 feet of every sleeping room. Test them monthly and replace them at the end of their rated life (usually 5–10 years; check the date on the back). For the current rules, check the Illinois Carbon Monoxide Alarm Detector Act or ask your local building department (in Chicago, call 311).</p>`,
      },
      {
        h2: 'Prevention',
        html: `<p>A yearly check of every gas appliance, before heating season, is the best prevention. It’s part of our <a href="/furnace-tune-up/">furnace tune-up</a> and <a href="/boiler-repair/">boiler service</a>. If a problem is found, the fix may be a <a href="/furnace-repair/">furnace repair</a>, a venting correction or, with a cracked heat exchanger, a replacement; you get the options and price before any work.</p>`,
      },
    ],
    faqs: [
      { q: 'What should I do if my CO alarm goes off?', a: 'Leave the home immediately and call 911 or your gas utility from outside. Once responders say it’s safe, call us to find the source.' },
      { q: 'My CO alarm chirps but isn’t alarming. What does that mean?', a: 'A periodic chirp usually means a low battery or an end-of-life alarm. Check its label. A continuous alarm pattern means leave and call 911.' },
      { q: 'How often should gas appliances be checked?', a: 'Once a year, before heating season. It’s part of our furnace tune-up and boiler service.' },
      { q: 'Where should CO alarms go?', a: 'Illinois law requires them within 15 feet of every sleeping room in most homes with fuel-burning appliances or an attached garage. Follow the alarm maker’s instructions too.' },
      { q: 'Can a high-efficiency furnace cause CO problems?', a: 'Any gas appliance can if combustion or venting goes wrong. A common related issue is a water heater left alone on an oversized chimney after a high-efficiency furnace install, which may not draft properly.' },
    ],
    related: ['furnace-repair', 'boiler-repair', 'furnace-tune-up'],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
export const servicesIn = (category: CategoryName) => services.filter((s) => s.category === category);
