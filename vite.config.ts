import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // For GitHub Pages project sites (username.github.io/<repo>), set VITE_BASE="/<repo>/"
  // For a user/org site (username.github.io) or custom domain, leave unset.
  base: process.env.VITE_BASE || "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [tailwindcss(), react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
