import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: './', // Make sure assets are loaded with relative paths
  server: {
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
        // Ensure proper file extensions for modules
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
      },
    },
    target: "esnext",
    modulePreload: {
      polyfill: true,
    },
  },
  // Ensure JS files are handled as modules
  optimizeDeps: {
    entries: ['src/main.jsx']
  }
});
