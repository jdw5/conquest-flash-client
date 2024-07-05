import { resolve } from "path"
import { defineConfig } from "vite"
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Conquest Flash",
      fileName: `index`,
    },
    rollupOptions: {
      external: ["vue", "@inertiajs/vue3", "axios",],
    },
  },
  plugins: [dts()]
})