import { defineManifest } from "@crxjs/vite-plugin";

export const manifest = defineManifest({
  name: "CloseTabs",
  description: "Chrome extensions to close tabs",
  version: "1.0.0",
  manifest_version: 3,
  permissions: ["contextMenus", "tabs"],
  default_locale: "en",
  icons: {
    "16": "assets/icons/icon16.png",
    "48": "assets/icons/icon48.png",
    "128": "assets/icons/icon128.png",
  },
  background: {
    service_worker: "src/service-worker.ts",
    type: "module",
  },
});
