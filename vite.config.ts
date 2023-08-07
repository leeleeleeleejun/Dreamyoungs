import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert(), tsconfigPaths()],
  server: {
    https: {
      cert: "./localhost.json2bot.chat.pem",
      key: "./localhost.json2bot.chat-key.pem",
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
