import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: process.env.PORT || 3000,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        secure: false,
      },
    },
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
      },
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "ui-components": [
            "./src/components/ui/ChatWidget.jsx",
            "./src/components/ui/DarkModeToggle.jsx",
            "./src/components/ui/LanguageSwitcher.jsx",
            "./src/components/ui/NotificationWidget.jsx",
          ],
          features: [
            "./src/components/additional-features/AugmentedRealityViewer.jsx",
          ],
          analytics: ["./src/components/analytics/AnalyticsDashboard.jsx"],
          media: [
            "./src/components/media/SocialMediaFeed.jsx",
            "./src/components/media/VideoGallery.jsx",
          ],
        },
      },
    },
    chunkSizeWarningLimit: 800,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
