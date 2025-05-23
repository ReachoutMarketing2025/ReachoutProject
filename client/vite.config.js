import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base: process.env.VITE_BASE_PATH || "/",
    server: command === "serve" ? {
      port: 3000,
      proxy: {
        "/api": {
          target: "http://localhost:8800",
          changeOrigin: true,
        },
      },
    } : undefined,
  };
});
