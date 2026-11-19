/**
 * SINGLE SOURCE OF TRUTH for NAP (Name, Address, Phone) and location data.
 *
 * Every page, component, JSON-LD block and citation must read from here.
 * The exact strings below are the "canonical NAP" — directory listings must
 * match them character-for-character (see marketing/citations/nap-standard.md).
 *
 * Values marked TODO are placeholders until real business details are supplied.
 */

export interface PostalAddress {
  street: string;
  suite?: string;
  city: string;
  region: string; // state abbreviation, e.g. "TX"
  postalCode: string;
  country: string; // ISO 3166-1 alpha-2, e.g. "US"
}

export interface OpeningHours {
  days: Array<'Mo' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa' | 'Su'>;
  opens: string; // "08:00"
  closes: string; // "18:00"
}

export interface ServiceArea {
  name: string; // city / county / neighborhood
  slug: string;
  type: 'City' | 'AdministrativeArea' | 'Place';
  primary?: boolean;
}

export interface Business {
  /** Legal/registered name exactly as on the Google Business Profile. */
  name: string;
  legalName?: string;
  /** Public-facing tagline, never used in NAP. */
  tagline: string;
  url: string;
  logo: string;
  image: string;
  /** Display format, e.g. "(555) 555-0100". Must match citations exactly. */
  phoneDisplay: string;
  /** E.164 format for tel:/sms: links and schema, e.g. "+15555550100". */
  phoneE164: string;
  /** Optional separate SMS-capable number (E.164). Falls back to phoneE164. */
  smsE164?: string;
  email: string;
  /** Service-area businesses that hide their address on GBP should set false. */
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
  foundingYear?: number;
  services: string[];
}

export const business: Business = {
  name: 'AirCare Pro', // TODO(business-details)
  tagline: 'Heating & Air Conditioning Experts', // TODO(business-details)
  url: 'https://www.example.com', // TODO(business-details)
  logo: '/logo.svg',
  image: '/og-image.jpg',
  phoneDisplay: '(555) 555-0100', // TODO(business-details)
  phoneE164: '+15555550100', // TODO(business-details)
  email: 'service@example.com', // TODO(business-details)
  showAddress: true,
  address: {
    street: '123 Main St', // TODO(business-details)
    city: 'Anytown',
    region: 'ST',
    postalCode: '00000',
    country: 'US',
  },
  hours: [
    { days: ['Mo', 'Tu', 'We', 'Th', 'Fr'], opens: '07:00', closes: '19:00' },
    { days: ['Sa'], opens: '08:00', closes: '16:00' },
  ],
  emergency24x7: true, // TODO(business-details): confirm
  priceRange: '$$',
  serviceAreas: [
    { name: 'Anytown', slug: 'anytown', type: 'City', primary: true }, // TODO(business-details)
  ],
  sameAs: [
    // TODO(business-details): add claimed profiles only, e.g.
    // 'https://www.google.com/maps?cid=XXXXXXXX',
    // 'https://www.facebook.com/yourpage',
    // 'https://www.yelp.com/biz/your-business',
    // 'https://www.bbb.org/us/st/anytown/profile/hvac/your-business',
    // 'https://www.angi.com/companylist/us/st/anytown/your-business.htm',
    // 'https://www.nextdoor.com/pages/your-business',
  ],
  services: [
    'AC Repair',
    'AC Installation',
    'Furnace Repair',
    'Heat Pump Service',
    'HVAC Maintenance',
    'Indoor Air Quality',
  ],
};

/** Single-line NAP string, identical everywhere it is printed. */
export const napLine = (b: Business = business): string =>
  b.showAddress
    ? `${b.name}, ${b.address.street}${b.address.suite ? ` ${b.address.suite}` : ''}, ${b.address.city}, ${b.address.region} ${b.address.postalCode} · ${b.phoneDisplay}`
    : `${b.name} · ${b.phoneDisplay}`;

export const telHref = (b: Business = business) => `tel:${b.phoneE164}`;
export const smsHref = (b: Business = business, body?: string) =>
  `sms:${b.smsE164 ?? b.phoneE164}${body ? `?&body=${encodeURIComponent(body)}` : ''}`;
