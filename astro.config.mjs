// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // SITE_URL lets the Pages workflow build a preview at another domain.
  site: process.env.SITE_URL || 'https://www.aadhyafarmstays.com',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
