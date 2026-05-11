/// <reference types="vitest/config" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import tailwindcss from "@tailwindcss/vite";
import { playwright } from "@vitest/browser-playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";
import dts from "vite-plugin-dts";
import copy from "rollup-plugin-copy";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig(({ mode }) => {
  const isLibraryBuild = mode === "library";

  return {
    plugins: [
      react(),
      tailwindcss(),
      ...(isLibraryBuild
        ? [
            dts({
              include: ["src"],
              tsconfigPath: "./tsconfig.app.json",
            }),
          ]
        : []),
      copy({
        targets: [{ src: "static/sources.css", dest: "dist" }],
        hook: "writeBundle",
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: isLibraryBuild
      ? {
          lib: {
            entry: path.resolve(dirname, "src/index.ts"),
            name: "LxvUI",
            formats: ["es", "umd"],
            fileName: (format) => `lxv-ui.${format}.js`,
          },
          rollupOptions: {
            external: ["react", "react-dom", "react/jsx-runtime"],
            output: {
              globals: {
                react: "React",
                "react-dom": "ReactDOM",
                "react/jsx-runtime": "jsxRuntime",
              },
            },
            assetFileNames: (assetInfo: { name: string }) => {
              if (assetInfo.name === "style.css") {
                return "lxv-ui.css";
              }
              return assetInfo.name;
            },
          },

          sourcemap: true,
          emptyOutDir: true,
        }
      : {},
    cssCodeSplit: true,
    sourcemap: true,
    emptyOutDir: true,
    test: {
      projects: [
        {
          extends: true,
          plugins: [
            // The plugin will run tests for the stories defined in your Storybook config
            // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
            storybookTest({
              configDir: path.join(dirname, ".storybook"),
            }),
          ],
          test: {
            name: "storybook",
            browser: {
              enabled: true,
              headless: true,
              provider: playwright({}),
              instances: [
                {
                  browser: "chromium",
                },
              ],
            },
          },
        },
      ],
    },
  };
});
