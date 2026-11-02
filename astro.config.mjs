// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kcrs.cl',
  build: {
    inlineStylesheets: 'never',
  },
});