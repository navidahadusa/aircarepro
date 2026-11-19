/**
 * Blog collection. Owners: Maya Lin (content) + Elena Brooks (structure).
 * Posts live at ROOT paths (/<slug>/) to keep the live WordPress URLs and rankings.
 * 34 posts migrated from aircareprohvac.com (`migrated: true`); new posts follow
 * marketing/content/post-template.md. Never invent prices, stats, response times or stories.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['heating', 'cooling', 'air-quality', 'chicago-homeowners']),
    intent: z.enum(['emergency', 'planned']).default('planned'),
    quickAnswer: z.string().optional(),
    takeaways: z.array(z.string()).default([]),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    /** Slugs of service pages, area pages (hvac-…) or posts to link from the post. */
    related: z.array(z.string()).default([]),
    /** Optional key into src/data/photos.ts (owner's real photos only). */
    photo: z.string().optional(),
    draft: z.boolean().default(false),
    migrated: z.boolean().default(false),
    source: z.url().optional(),
  }),
});

export const collections = { blog };
