import { defineConfig } from "vite"
import { qwikVite } from "@builder.io/qwik/optimizer"
import { qwikCity } from "@builder.io/qwik-city/vite"
import tsconfigPaths from "vite-tsconfig-paths"
import legacy from "@vitejs/plugin-legacy"

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths(), legacy()],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: (source, id) =>
            id.endsWith('app.scss') ? source : '',
        },
      },
    },
  }
})
