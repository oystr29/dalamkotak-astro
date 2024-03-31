import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import svelte from '@astrojs/svelte';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://dalamkotak.com",
  integrations: [mdx(), sitemap(), tailwind(), svelte()],
  output: "hybrid",
  adapter: netlify(),
});
