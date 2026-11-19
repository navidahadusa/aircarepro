/** Blog helpers. Owners: Maya Lin + Elena Brooks. */
import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;
export const blogCategories = {
  heating: { name: 'Heating', blurb: 'Furnaces, boilers, heat pumps and thermostats in Chicago homes.' },
  cooling: { name: 'Cooling', blurb: 'Central air, rooftop units, mini-splits and refrigerant.' },
  'air-quality': { name: 'Air Quality & Safety', blurb: 'Humidity, filtration, UV and carbon monoxide safety.' },
  'chicago-homeowners': { name: 'Chicago Homeowners', blurb: 'Seasonal checklists, rebates and local know-how.' },
} as const;
export type BlogCategory = keyof typeof blogCategories;

/** Published posts, newest first (drafts are excluded from builds). */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf() || a.data.title.localeCompare(b.data.title));
}

/** Posts that link to a given service page slug (for "From our blog" on service pages). */
export async function postsForService(slug: string, limit = 3): Promise<Post[]> {
  return (await getPosts()).filter((p) => p.data.related.includes(slug)).slice(0, limit);
}
