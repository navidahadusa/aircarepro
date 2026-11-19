/**
 * Client-side lead scoring. Owner: Rachel Morgan (Lead Generation Architect).
 * Mirrors marketing/lead-gen/qualification-fields.md. Change both together.
 * The score travels with the CRM payload and the dataLayer event so dispatch
 * can prioritize callbacks and Ads can optimize toward high-value leads.
 */

/**
 * Chicago ZIPs start with 606. Suburb ZIPs below cover the served suburbs
 * (Evanston, Skokie, Wilmette, Highland Park, Des Plaines, Arlington Heights,
 * Schaumburg, Naperville). TODO(owner): refine with real job data.
 */
const SERVED_SUBURB_ZIPS = new Set([
  '60201', '60202', '60203', // Evanston
  '60076', '60077', // Skokie
  '60091', // Wilmette
  '60035', // Highland Park
  '60016', '60018', // Des Plaines
  '60004', '60005', // Arlington Heights
  '60173', '60193', '60194', '60195', // Schaumburg
  '60540', '60563', '60564', '60565', // Naperville
]);

type Data = Record<string, FormDataEntryValue | undefined>;

const points = (value: string | undefined, table: Array<[RegExp, number]>): number => {
  if (!value) return 0;
  for (const [re, pts] of table) if (re.test(value)) return pts;
  return 0;
};

export function inServiceArea(zip: string | undefined): boolean | null {
  if (!zip || !/^\d{5}$/.test(zip)) return null;
  return zip.startsWith('606') || SERVED_SUBURB_ZIPS.has(zip);
}

export function scoreLead(data: Data): { score: number; tier: 'hot' | 'warm' | 'nurture'; inArea: boolean | null } {
  const v = (k: string) => (typeof data[k] === 'string' ? (data[k] as string) : undefined);
  let score = 0;
  const inArea = inServiceArea(v('zip'));
  if (inArea === true) score += 2;
  if (inArea === false) score -= 5;

  score += points(v('issue'), [[/No heat|No cooling|leak|smell/i, 3], [/./, 1]]);
  score += points(v('need'), [[/now/i, 5], [/New system/i, 3], [/Tune-up|Comfort/i, 2], [/./, 1]]);
  score += points(v('project'), [[/replacement|Full system/i, 3], [/Heat pump|mini-split/i, 2], [/./, 1]]);
  score += points(v('system_age'), [[/15\+/, 3], [/11–15/, 2], [/6–10/, 1]]);
  score += points(v('property'), [[/two-flat|multi/i, 3], [/single-family/i, 2], [/condo/i, 1], [/Rent/i, -1]]);
  score += points(v('timeline'), [[/ASAP/, 3], [/2 weeks/, 2], [/1–3/, 1]]);
  score += points(v('systems'), [[/3\+/, 2], [/^2$/, 1]]);
  if (v('financing')) score += 1;
  if (v('rebates')) score += 1;

  const tier = score >= 7 ? 'hot' : score >= 4 ? 'warm' : 'nurture';
  return { score, tier, inArea };
}
