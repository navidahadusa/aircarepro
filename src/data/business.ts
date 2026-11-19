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
  | 'Chicago — North Side'
  | 'Chicago — Northwest Side'
  | 'Chicago — West Side'
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

export interface Business {
  /** Name exactly as on the Google Business Profile. Used in NAP and schema. */
  name: string;
  /** Title-case brand for headings and body copy (never in citations). */
  displayName: string;
  legalName?: string;
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
  licenseNumber?: string;
  credentials: string[];
  brandsServiced: string[];
  dealerOf?: string;
  foundingYear?: number;
  maintenancePlanName: string;
  serviceCategories: ServiceCategory[];
  /** Flat list used in schema OfferCatalog. Derived from serviceCategories. */
  services: string[];
}

const serviceCategories: ServiceCategory[] = [
  {
    name: 'Heating',
    path: '/heating/',
    services: [
      { name: 'Furnace Repair', path: '/furnace-repair/' },
      { name: 'Furnace Installation', path: '/furnace-installation/' },
      { name: 'Furnace Tune-Up', path: '/furnace-tune-up/' },
      { name: 'Boiler Repair', path: '/boiler-repair/' },
      { name: 'Boiler Installation', path: '/boiler-installation/' },
      { name: 'Heat Pump Repair', path: '/heat-pump-repair/' },
      { name: 'Heat Pump Installation', path: '/heat-pump-installation/' },
      { name: 'Thermostats & Zoning', path: '/thermostat-installation/' },
    ],
  },
  {
    name: 'Cooling',
    path: '/cooling/',
    services: [
      { name: 'AC Repair', path: '/ac-repair/' },
      { name: 'AC Installation', path: '/ac-installation/' },
      { name: 'AC Tune-Up', path: '/ac-tune-up/' },
      { name: 'Mini-Split Installation', path: '/mini-split-installation/' },
      { name: 'Mini-Split Repair', path: '/mini-split-repair/' },
      { name: 'Refrigerant Leak Repair', path: '/refrigerant-leak-repair/' },
    ],
  },
  {
    name: 'Air Quality',
    path: '/air-quality/',
    services: [
      { name: 'Whole-Home Humidifiers', path: '/whole-home-humidifiers/' },
      { name: 'Whole-Home Dehumidifiers', path: '/whole-home-dehumidifiers/' },
      { name: 'Air Purifiers', path: '/air-purifiers/' },
      { name: 'UV Air Sanitizers', path: '/uv-air-sanitizers/' },
      { name: 'Ductwork Repair', path: '/ductwork-repair/' },
      { name: 'Carbon Monoxide Safety', path: '/carbon-monoxide-safety/' },
    ],
  },
];

const area = (name: string, group: AreaGroup, slug?: string): ServiceArea => ({
  name,
  slug: slug ?? name.toLowerCase().replace(/&/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
  type: group.startsWith('Chicago') ? 'Place' : 'City',
  group,
});

export const business: Business = {
  name: 'CHICAGO AIRCARE PRO',
  displayName: 'Chicago Aircare Pro',
  legalName: 'Shad Heating and Cooling LLC',
  tagline: 'Heating & Cooling',
  description:
    'Residential heating, cooling and indoor air quality company serving Chicago and nearby suburbs. NATE- and EPA 608-certified technicians, 24/7 emergency service, free estimates on new systems.',
  url: 'https://aircareprohvac.com',
  logo: '/logo.svg',
  image: '/og-image.jpg', // TODO: export a 1200×630 brand image
  phoneDisplay: '(773) 644-8227',
  phoneE164: '+17736448227',
  email: 'info@aircareprohvac.com',
  bookingUrl: 'https://book.housecallpro.com/book/Shad-Heating-and-Cooling/8d48b75104b0455da0f38ddcf1519bd3?v2=true',
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
    // Chicago — North Side
    area('Lincoln Park', 'Chicago — North Side'),
    area('Lakeview', 'Chicago — North Side'),
    area('Old Town & Gold Coast', 'Chicago — North Side', 'old-town-gold-coast'),
    area('Lincoln Square', 'Chicago — North Side'),
    area('North Center', 'Chicago — North Side'),
    area('Ravenswood', 'Chicago — North Side'),
    area('Uptown', 'Chicago — North Side'),
    area('Andersonville & Edgewater', 'Chicago — North Side', 'andersonville-edgewater'),
    area('Rogers Park', 'Chicago — North Side'),
    area('West Ridge', 'Chicago — North Side'),
    // Chicago — Northwest Side
    area('Logan Square', 'Chicago — Northwest Side'),
    area('Avondale', 'Chicago — Northwest Side'),
    area('Irving Park', 'Chicago — Northwest Side'),
    area('Albany Park', 'Chicago — Northwest Side'),
    area('Portage Park', 'Chicago — Northwest Side'),
    area('Jefferson Park', 'Chicago — Northwest Side'),
    area('Norwood Park', 'Chicago — Northwest Side'),
    area('Edison Park', 'Chicago — Northwest Side'),
    // Chicago — West Side
    area('Bucktown', 'Chicago — West Side'),
    area('Wicker Park', 'Chicago — West Side'),
    area('Humboldt Park', 'Chicago — West Side'),
    area('Ukrainian Village', 'Chicago — West Side'),
    area('West Town', 'Chicago — West Side'),
    area('Austin', 'Chicago — West Side'),
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
    // TODO(owner): paste the exact live URLs of the existing profiles:
    // Google Business Profile → 'https://www.google.com/maps?cid=…' (or the share link)
    // Yelp → 'https://www.yelp.com/biz/…'
    // BBB  → 'https://www.bbb.org/us/il/chicago/profile/…'
  ],
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
  serviceCategories,
  services: serviceCategories.flatMap((c) => c.services.map((s) => s.name)),
};

/** Single-line NAP string, identical everywhere it is printed. */
export const napLine = (b: Business = business): string =>
  b.showAddress && b.address.street
    ? `${b.name}, ${b.address.street}${b.address.suite ? ` ${b.address.suite}` : ''}, ${b.address.city}, ${b.address.region} ${b.address.postalCode ?? ''} · ${b.phoneDisplay}`.trim()
    : `${b.name} · ${b.address.city}, ${b.address.region} · ${b.phoneDisplay}`;

export const telHref = (b: Business = business) => `tel:${b.phoneE164}`;
export const smsHref = (b: Business = business, body?: string) =>
  `sms:${b.smsE164 ?? b.phoneE164}${body ? `?&body=${encodeURIComponent(body)}` : ''}`;

export const areasByGroup = (b: Business = business) => {
  const groups = new Map<AreaGroup, ServiceArea[]>();
  for (const a of b.serviceAreas) {
    if (!a.group) continue;
    groups.set(a.group, [...(groups.get(a.group) ?? []), a]);
  }
  return groups;
};
