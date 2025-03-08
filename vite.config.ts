import { defineConfig } from "vite";

import tsconfigPaths from "vite-tsconfig-paths";
import { crx, defineManifest } from "@crxjs/vite-plugin";

const manifest = defineManifest({
  name: "CloseTabs",
  description: "Chrome extensions to close tabs",
  version: "1.0",
  manifest_version: 3,
  permissions: ["contextMenus", "tabs"],
  background: {
    service_worker: "src/service-worker.ts",
    type: "module",
  },
});

export default defineConfig({
  plugins: [tsconfigPaths(), crx({ manifest })],
  server: {
    cors: {
      origin: [/chrome-extension:\/\//],
    },
  },
  legacy: {
    skipWebSocketTokenCheck: true,
  },
});
