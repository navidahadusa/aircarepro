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
  /** As shown on Google, e.g. "2026-10" (month is enough). */
  date: string;
  text: string;
  source: 'Google';
}

/** Date the list was last copied from Google (shown under the carousel). */
export const reviewsAsOf = '';

export const reviews: Review[] = [
  // Added from the owner's Google profile only.
];
