import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure root-relative paths
  server: {
    host: true,
    strictPort: true,
    port: process.env.PORT || 3000,
    headers: {
      'Content-Type': 'application/javascript'
    }
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom']
        }
      }
    },
    target: "esnext",
    manifest: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
});