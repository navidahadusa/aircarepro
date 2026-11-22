import { categories, servicesIn } from './services';
import { PHONE_DISPLAY, PHONE_E164 } from './contact';

/**
 * SINGLE SOURCE OF TRUTH for NAP (Name, Address, Phone) and location data.
 *
 * Every page, component, JSON-LD block and citation must read from here.
 * The exact strings below are the "canonical NAP": directory listings must
 * match them character-for-character (see marketing/citations/nap-standard.md).
 *
 * Source: owner-supplied details plus the live site https://aircareprohvac.com
 * (audited 2026-11-19). Items marked TODO still need owner confirmation.
 */

export interface PostalAddress {
  street?: string;
  suite?: string;
  city: string;
  region: string; // state abbreviation, e.g. "IL"
  postalCode?: string;
  country: string; // ISO 3166-1 alpha-2, e.g. "US"
}

export interface OpeningHours {
  days: Array<'Mo' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa' | 'Su'>;
  opens: string; // "08:00"
  closes: string; // "18:00"
}

export type AreaGroup =
  | 'Chicago North Side'
  | 'Chicago Northwest Side'
  | 'Chicago West Side'
  | 'North suburbs'
  | 'Northwest & west suburbs';

export interface ServiceArea {
  name: string; // city / neighborhood
  /** URL slug. Pages render at /hvac-<slug>/ to mirror the live WordPress URLs. */
  slug: string;
  type: 'City' | 'AdministrativeArea' | 'Place';
  group?: AreaGroup;
  primary?: boolean;
}

export interface ServiceCategory {
  name: 'Heating' | 'Cooling' | 'Air Quality';
  /** Live-site path of the category hub. */
  path: string;
  services: Array<{ name: string; path: string }>;
}

export type ListingRebrandState = 'pending-name-update' | 'submitted-under-review' | 'name-updated' | 'verified-live';

export interface RebrandStatus {
  /** The approved change from the old legal name to the brand. */
  from: string;
  to: string;
  legalApproved: boolean;
  /** Existing listings whose display name must change before new citations roll out. */
  listings: Record<'Google Business Profile' | 'Yelp' | 'BBB', ListingRebrandState>;
  /** New citations stay blocked until every existing listing is 'verified-live'. */
  newCitationsBlocked: boolean;
}

export interface Business {
  /** Name exactly as on the Google Business Profile. Used in NAP and schema. */
  name: string;
  /** Title-case brand for headings and body copy (never in citations). */
  displayName: string;
  legalName?: string;
  /** Names the business has traded under; used to find and fix old citations. */
  rebrand: RebrandStatus;
  tagline: string;
  description: string;
  url: string;
  logo: string;
  image: string;
  /** Display format. Must match citations exactly. */
  phoneDisplay: string;
  /** E.164 format for tel:/sms: links and schema. */
  phoneE164: string;
  /** Optional separate SMS-capable number (E.164). Falls back to phoneE164. */
  smsE164?: string;
  email: string;
  /** Online booking (Housecall Pro). */
  bookingUrl?: string;
  /**
   * Where leads go. 'housecall-pro' (owner decision 2026-11-19): every lead CTA sends
   * visitors to the Housecall Pro booking link; on-page forms are not shown.
   * 'forms' re-enables LeadForm (requires PUBLIC_LEAD_ENDPOINT).
   */
  leadCapture: 'housecall-pro' | 'forms';
  /** Service-area business: street address hidden on GBP → false. */
  showAddress: boolean;
  address: PostalAddress;
  geo?: { latitude: number; longitude: number };
  hours: OpeningHours[];
  /** True if you genuinely offer 24/7 emergency service. Drives banners + schema. */
  emergency24x7: boolean;
  priceRange: string;
  serviceAreas: ServiceArea[];
  /** Official profile URLs for JSON-LD sameAs. Only add live, claimed profiles. */
  sameAs: string[];
  /** Review platforms shown in ReviewsBlock. url stays undefined until the rebranded listing is live. */
  reviewProfiles: Array<{ platform: 'Google' | 'Yelp' | 'BBB'; url?: string; writeReviewUrl?: string }>;
  /** Owner-supplied Google "Ask for reviews" link (opens the write-a-review box). */
  googleReviewUrl?: string;
  licenseNumber?: string;
  credentials: string[];
  brandsServiced: string[];
  dealerOf?: string;
  foundingYear?: number;
  maintenancePlanName: string;
  /** Financing lender (owner-confirmed 2026-11-19). */
  financingPartner?: string;
  serviceCategories: ServiceCategory[];
  /** Flat list used in schema OfferCatalog. Derived from serviceCategories. */
  services: string[];
}

/** Derived from src/data/services.ts (single source for service content). */
const serviceCategories: ServiceCategory[] = categories.map((c) => ({
  name: c.name,
  path: `/${c.slug}/`,
  services: servicesIn(c.name).map((sv) => ({ name: sv.name, path: `/${sv.slug}/` })),
}));

const area = (name: string, group: AreaGroup, slug?: string): ServiceArea => ({
  name,
  slug: slug ?? name.toLowerCase().replace(/&/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
  type: group.startsWith('Chicago') ? 'Place' : 'City',
  group,
});

export const business: Business = {
  name: 'CHICAGO AIRCARE PRO',
  displayName: 'Chicago Aircare Pro',
  // Legal rebrand approved by the owner (2026-11-19): Shad Heating and Cooling LLC → CHICAGO AIRCARE PRO.
  legalName: 'CHICAGO AIRCARE PRO',
  rebrand: {
    from: 'Shad Heating and Cooling LLC',
    to: 'CHICAGO AIRCARE PRO',
    legalApproved: true,
    listings: {
      'Google Business Profile': 'name-updated', // live as CHICAGO AIRCARE PRO (verified from the owner's Maps link 2026-11-20)
      Yelp: 'submitted-under-review', // owner opened a NEW Yelp page under CHICAGO AIRCARE PRO (2026-11-20); old 'Shad' page must be merged/closed; URL TODO(owner)
      BBB: 'submitted-under-review', // owner requested the BBB name change (2026-11-20)
    },
    newCitationsBlocked: true,
  },
  tagline: 'Heating & Cooling',
  description:
    'Residential heating, cooling and indoor air quality company serving Chicago and nearby suburbs. NATE- and EPA 608-certified technicians, 24/7 emergency service, free estimates on new systems.',
  url: 'https://aircareprohvac.com',
  logo: '/logo.png', // owner's logo (512px), also used in schema
  image: '/og-image.jpg', // 1200×630 share image built from the owner's logo
  phoneDisplay: PHONE_DISPLAY,
  phoneE164: PHONE_E164,
  email: 'info@aircareprohvac.com',
  // Housecall Pro booking page (owner's widget code 2026-11-22: token unchanged, orgName CHICAGO-AIRCARE-PRO).
  bookingUrl: 'https://book.housecallpro.com/book/CHICAGO-AIRCARE-PRO/8d48b75104b0455da0f38ddcf1519bd3?v2=true',
  leadCapture: 'housecall-pro',
  // Live site and schema publish no street address → service-area business.
  showAddress: false,
  address: {
    // TODO(owner): street + ZIP as registered on GBP (kept private while showAddress=false)
    city: 'Chicago',
    region: 'IL',
    country: 'US',
  },
  geo: { latitude: 41.98881, longitude: -87.6606 }, // from live-site schema
  hours: [{ days: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'], opens: '00:00', closes: '23:59' }],
  emergency24x7: true,
  priceRange: '$$',
  serviceAreas: [
    { name: 'Chicago', slug: 'chicago', type: 'City', primary: true },
    // Chicago North Side
    area('Lincoln Park', 'Chicago North Side'),
    area('Lakeview', 'Chicago North Side'),
    area('Old Town & Gold Coast', 'Chicago North Side', 'old-town-gold-coast'),
    area('Lincoln Square', 'Chicago North Side'),
    area('North Center', 'Chicago North Side'),
    area('Ravenswood', 'Chicago North Side'),
    area('Uptown', 'Chicago North Side'),
    area('Andersonville & Edgewater', 'Chicago North Side', 'andersonville-edgewater'),
    area('Rogers Park', 'Chicago North Side'),
    area('West Ridge', 'Chicago North Side'),
    // Chicago Northwest Side
    area('Logan Square', 'Chicago Northwest Side'),
    area('Avondale', 'Chicago Northwest Side'),
    area('Irving Park', 'Chicago Northwest Side'),
    area('Albany Park', 'Chicago Northwest Side'),
    area('Portage Park', 'Chicago Northwest Side'),
    area('Jefferson Park', 'Chicago Northwest Side'),
    area('Norwood Park', 'Chicago Northwest Side'),
    area('Edison Park', 'Chicago Northwest Side'),
    // Chicago West Side
    area('Bucktown', 'Chicago West Side'),
    area('Wicker Park', 'Chicago West Side'),
    area('Humboldt Park', 'Chicago West Side'),
    area('Ukrainian Village', 'Chicago West Side'),
    area('West Town', 'Chicago West Side'),
    area('Austin', 'Chicago West Side'),
    // North suburbs
    area('Evanston', 'North suburbs'),
    area('Skokie', 'North suburbs'),
    area('Wilmette', 'North suburbs'),
    area('Highland Park', 'North suburbs'),
    // Northwest & west suburbs
    area('Des Plaines', 'Northwest & west suburbs'),
    area('Arlington Heights', 'Northwest & west suburbs'),
    area('Schaumburg', 'Northwest & west suburbs'),
    area('Naperville', 'Northwest & west suburbs'),
  ],
  sameAs: [
    'https://www.facebook.com/Aircareprohvac/', // listed in the live site's schema
    // Google Business Profile: owner's share link (2026-11-20) resolves to "CHICAGO AIRCARE PRO" (ftid …:0xfb078cb2b1d943c9 → cid below).
    'https://www.google.com/maps?cid=18088581127472759753',
    // TODO(owner): add these ONLY after each listing's name update to CHICAGO AIRCARE PRO is live:
    // Yelp → 'https://www.yelp.com/biz/…'
    // BBB  → 'https://www.bbb.org/us/il/chicago/profile/…'
  ],
  // TODO(owner): set each url once that listing shows CHICAGO AIRCARE PRO (also add to sameAs).
  // Google write-review link from the owner (2026-11-19).
  googleReviewUrl: 'https://g.page/r/CclD2bGyjAf7EBE/review',
  reviewProfiles: [{ platform: 'Google', url: 'https://www.google.com/maps?cid=18088581127472759753', writeReviewUrl: 'https://g.page/r/CclD2bGyjAf7EBE/review' }, { platform: 'Yelp' }, { platform: 'BBB' }],
  licenseNumber: '3065598', // City of Chicago
  credentials: [
    'NATE-certified technicians',
    'EPA Section 608 certified',
    'BBB accredited business',
    'City of Chicago License #3065598',
    'Comfortmaker dealer',
  ],
  brandsServiced: ['Carrier', 'Lennox', 'Trane', 'Goodman', 'Rheem', 'York', 'Comfortmaker'],
  dealerOf: 'Comfortmaker',
  foundingYear: 2026,
  maintenancePlanName: 'Comfort Club',
  financingPartner: 'Optimus',
  serviceCategories,
  services: serviceCategories.flatMap((c) => c.services.map((s) => s.name)),
};

/** Single-line NAP string, identical everywhere it is printed. */
export const napLine = (b: Business = business): string =>
  b.showAddress && b.address.street
    ? `${b.name}, ${b.address.street}${b.address.suite ? ` ${b.address.suite}` : ''}, ${b.address.city}, ${b.address.region} ${b.address.postalCode ?? ''} · ${b.phoneDisplay}`.trim()
    : `${b.name} · ${b.address.city}, ${b.address.region} · ${b.phoneDisplay}`;

export const telHref = (b: Business = business) => `tel:${b.phoneE164}`;
/** One SMS target site-wide (Lighthouse: identical links must share a purpose). The body arg is ignored on purpose. */
export const SMS_BODY = 'Hi, I need HVAC service at ';
export const smsHref = (b: Business = business, _body?: string) =>
  `sms:${b.smsE164 ?? b.phoneE164}?&body=${encodeURIComponent(SMS_BODY)}`;

export const areasByGroup = (b: Business = business) => {
  const groups = new Map<AreaGroup, ServiceArea[]>();
  for (const a of b.serviceAreas) {
    if (!a.group) continue;
    groups.set(a.group, [...(groups.get(a.group) ?? []), a]);
  }
  return groups;
};

/**
 * Homepage hero headline. Recommended by Maya Lin, approved by Sophia Reynolds (2026-11-19).
 * Brand-name independent. The heating message runs Nov–Feb, year-round copy the rest of the year.
 */
export const heroHeadline = (date = new Date()) => {
  const m = date.getMonth(); // 0 = Jan
  const heatingSeason = m >= 10 || m <= 1;
  return heatingSeason
    ? { eyebrow: 'Answering 24/7 · nights & holidays', h1Lead: 'Chicago furnace and boiler repair', h1: 'No heat tonight? Call or text, day or night.', sub: 'Furnaces, hot-water and steam boilers. Diagnosis first, then options and prices before any work.' }
    : { eyebrow: 'One crew for both seasons', h1Lead: '', h1: 'Furnace, boiler and AC service from one Chicago crew.', sub: 'Diagnosis first, then options and prices before any work. Two-flats, greystones, bungalows, steam boilers. Call or text 24/7.' };
};
