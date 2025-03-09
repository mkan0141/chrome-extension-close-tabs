import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { crx } from "@crxjs/vite-plugin";

import { manifest } from "./manifest";

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
