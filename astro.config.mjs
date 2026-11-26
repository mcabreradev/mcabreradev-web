import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Activá esto cuando renueves y conectes tu dominio:
  // site: "https://mcabrera.dev",

  vite: {
    plugins: [tailwindcss()],
  },
});
