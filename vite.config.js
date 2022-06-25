import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import mockServer from "vite-plugin-mock-server";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    mockServer({
      logLevel: "info",
      mockJsSuffix: ".js",
    }),
  ],
  server: {
    proxy: {
      "/api": {
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      src: path.resolve("src"),
    },
  },
});
