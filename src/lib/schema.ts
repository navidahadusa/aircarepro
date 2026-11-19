import { business as defaultBusiness, type Business, type ServiceArea } from '../data/business';

/**
 * Builds schema.org HVACBusiness (a LocalBusiness subtype) JSON-LD from the
 * canonical business record so NAP in schema always matches NAP on the page.
 */
export interface SchemaOptions {
  business?: Business;
  /** Restrict areaServed to one area (for city landing pages). */
  area?: ServiceArea;
  /** Page-specific URL (defaults to business.url). */
  pageUrl?: string;
  aggregateRating?: { ratingValue: number; reviewCount: number };
}

export function buildLocalBusinessSchema(opts: SchemaOptions = {}) {
  const b = opts.business ?? defaultBusiness;
  const id = `${b.url.replace(/\/$/, '')}/#business`;
  const areas = opts.area ? [opts.area] : b.serviceAreas;

  const hours = b.emergency24x7
    ? [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      ]
    : b.hours.map((h) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: h.days.map(dayName),
        opens: h.opens,
        closes: h.closes,
      }));

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['HVACBusiness', 'LocalBusiness'],
    '@id': id,
    name: b.name,
    ...(b.legalName && { legalName: b.legalName }),
    url: opts.pageUrl ?? b.url,
    logo: absolute(b.url, b.logo),
    image: absolute(b.url, b.image),
    telephone: b.phoneE164,
    email: b.email,
    priceRange: b.priceRange,
    ...(b.foundingYear && { foundingDate: String(b.foundingYear) }),
    ...(b.showAddress && {
      address: {
        '@type': 'PostalAddress',
        streetAddress: [b.address.street, b.address.suite].filter(Boolean).join(' '),
        addressLocality: b.address.city,
        addressRegion: b.address.region,
        postalCode: b.address.postalCode,
        addressCountry: b.address.country,
      },
    }),
    ...(b.geo && { geo: { '@type': 'GeoCoordinates', ...b.geo } }),
    areaServed: areas.map((a) => ({ '@type': a.type, name: a.name })),
    openingHoursSpecification: hours,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: b.phoneE164,
        contactType: b.emergency24x7 ? 'emergency' : 'customer service',
        areaServed: b.address.country,
        availableLanguage: ['English'],
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'HVAC Services',
      itemListElement: b.services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s },
      })),
    },
    ...(b.sameAs.length > 0 && { sameAs: b.sameAs }),
    ...(opts.aggregateRating && {
      aggregateRating: { '@type': 'AggregateRating', ...opts.aggregateRating },
    }),
  };

  return schema;
}

const DAY: Record<string, string> = {
  Mo: 'Monday', Tu: 'Tuesday', We: 'Wednesday', Th: 'Thursday', Fr: 'Friday', Sa: 'Saturday', Su: 'Sunday',
};
const dayName = (d: string) => DAY[d];
const absolute = (base: string, path: string) => (path.startsWith('http') ? path : new URL(path, base).toString());
