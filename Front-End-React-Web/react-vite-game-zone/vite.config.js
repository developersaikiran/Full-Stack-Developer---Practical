import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@images": path.resolve("./src/assets/images"),
      "@utils": path.resolve("./src/utils"),
      "@config": path.resolve("./src/config"),
      "@pages": path.resolve("./src/pages"),
      "@components": path.resolve("./src/components"),
    },
  },
})
