import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    svelte(),
  ],
  server: {
    port: 8080,
  },
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
    },
  },
});
