import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://mern-blog-app-one.vercel.app/",
        changeOrigin: true,
        secure: true,
      },
    },
  },
  plugins: [react()],
  build: { chunkSizeWarningLimit: 1600 },
});
