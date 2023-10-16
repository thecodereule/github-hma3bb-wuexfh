import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";
import solid from '@astrojs/solid-js'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [solid()],
  integrations: [mdx(), sitemap(), tailwind()]
});