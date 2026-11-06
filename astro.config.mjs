import { defineConfig } from 'astro/config';

// SITE_URL and BASE_PATH come from the hosting setup.
// For GitHub Pages in a repo subfolder: BASE_PATH=/repo-name
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || '/',
  build: { inlineStylesheets: 'auto' },
});
