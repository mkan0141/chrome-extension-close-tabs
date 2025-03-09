import { defineManifest } from "@crxjs/vite-plugin";

export const manifest = defineManifest({
  name: "CloseTabs",
  description: "Chrome extensions to close tabs",
  version: "0.0.1",
  manifest_version: 3,
  permissions: ["contextMenus", "tabs"],
  background: {
    service_worker: "src/service-worker.ts",
    type: "module",
  },
});
