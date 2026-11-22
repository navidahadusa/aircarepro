/**
 * Real Google reviews shown in the ReviewsCarousel (Hannah Carter + Chloe Vance).
 * RULES: copy reviews EXACTLY as they appear on the owner's Google Business Profile
 * (from the owner's screenshots or text). Never write, edit, combine or invent reviews.
 * Use the reviewer's name as Google shows it (first name + last initial is fine).
 * No AggregateRating/Review schema: Google treats self-hosted reviews of your own business as
 * "self-serving" and ignores or penalizes them. Visible text only, linked to the Google profile.
 * The carousel stays hidden while this list is empty.
 */
export interface Review {
  author: string;
  stars: 1 | 2 | 3 | 4 | 5;
  /** Exact month only if Google shows a date; leave '' when Google shows only "X months ago" (we don't estimate). */
  date: string;
  /** true when Google truncates the review ("… more") and we show only the visible sentences. */
  excerpt?: boolean;
  text: string;
  source: 'Google';
}

/** Date the list was last copied from Google (shown under the carousel). */
export const reviewsAsOf = '2026-11';

export const reviews: Review[] = [
  // Copied word for word from the owner's Google Business Profile screenshots (2026-11-22). Spelling kept as written.
  // Two 5-star reviews that name the former company are left out to keep the old name off the site.
  { author: 'Dwayne D.', stars: 5, date: '', source: 'Google', text: 'This guys came to my house in Chicago north at the Sunday night and fix my furnace same day with very fair price. I highly recommend' },
  { author: 'Lance V.', stars: 5, date: '', source: 'Google', text: 'They came to our house and they swapped my compressor in 2 hours at the Sunday night in Chicago . I really appreciate you guys. Highly recommend' },
  { author: 'Michael J. M.', stars: 5, date: '', source: 'Google', text: 'These guys are excellent. My Air Conditioning stopped working. They came with urgency, diagnosed and repaired at very fair price. I highly recommend' },
  { author: 'Abasin Z.', stars: 5, date: '', source: 'Google', text: 'Professional, friendly, and trustworthy. The technician took the time to explain the issue and provided the best solution without trying to upsell unnecessary services.' },
  { author: 'Amelia C.', stars: 5, date: '', source: 'Google', excerpt: true, text: 'Top-tier customer service! The technicians were friendly, knowledgeable, and took the time to answer all my questions.' },
  { author: 'Kenneth W.', stars: 5, date: '', source: 'Google', excerpt: true, text: 'They are a great company. They offer great and fast reliable service. They installed my air conditioner perfectly.' },
  { author: 'Brittani', stars: 5, date: '', source: 'Google', excerpt: true, text: 'This hvac company does excellent work! They are very transparent with what needs to be done. Very reliable. (Residential & commercial too).' },
];
