// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Atllas1981.github.io/deployar ',
  base: '/deployar/',
  vite: {
    plugins: [tailwindcss()]
  }
});