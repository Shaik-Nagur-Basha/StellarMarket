import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      "Content-Type": "text/javascript",
    },
    host: true,
    strictPort: true,
    port: process.env.PORT || 3000,
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          chart: ["chart.js"],
        },
        format: "es",
        entryFileNames: "[name]-[hash].mjs",
        chunkFileNames: "[name]-[hash].mjs",
        assetFileNames: "[name]-[hash][extname]",
      },
    },
    target: "esnext",
    modulePreload: true,
    chunkSizeWarningLimit: 1000,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
