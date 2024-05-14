import { defineConfig, squooshImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

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
    host: "127.0.0.1",
  },
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
    },
  },
  image: {
    service: squooshImageService(),
  },
});
