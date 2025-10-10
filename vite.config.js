import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './', // 👈 important for main-branch hosting

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})