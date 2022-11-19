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
    port: 5050,
    host: "127.0.0.1"
  },
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
    },
  },
});
