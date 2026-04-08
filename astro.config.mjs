import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://792287116.github.io",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: "github-dark-default"
    }
  }
});
