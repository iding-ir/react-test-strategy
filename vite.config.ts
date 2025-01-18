import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg",
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
  },
  css: {
    modules: {
      generateScopedName: "[name] - [local] - [hash:base64:5]",
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "/src/styles/config.scss" as *;
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        `,
      },
    },
  },
});
