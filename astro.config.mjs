import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { SITE_URL } from "./src/config/site.js";

export default defineConfig({
  site: SITE_URL,
  integrations: [react()],
  build: { format: "file" },
  trailingSlash: "never",
  server: { port: 5173 },
});
