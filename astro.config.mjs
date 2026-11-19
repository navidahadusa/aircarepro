// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO(business-details): replace with the production domain.
export default defineConfig({
  site: 'https://www.example.com',
  integrations: [sitemap()],
});
