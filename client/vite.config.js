import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
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
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("react")) {
              return "react-vendor";
            }
            if (id.includes("chart.js")) {
              return "chart";
            }
            if (id.includes("faker")) {
              return "faker";
            }
            return "vendor";
          }
          if (id.includes("components/analytics")) {
            return "analytics";
          }
          if (id.includes("components/media")) {
            return "media";
          }
          if (id.includes("components/additional-features")) {
            return "features";
          }
        },
      },
    },
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
