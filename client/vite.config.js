import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/",

  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://reachoutproject.onrender.com",
        changeOrigin: true,
      },
    },
  },
});