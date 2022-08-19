import { defineConfig } from 'astro/config';
import adapter from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: adapter(),
});
