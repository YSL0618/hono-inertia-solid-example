// vite.config.ts
import { cloudflare } from "@cloudflare/vite-plugin";
import { inertiaPages } from "@hono/inertia/vite";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import ssrPlugin from "vite-ssr-components/plugin";

export default defineConfig({
	plugins: [inertiaPages(), cloudflare(), ssrPlugin(), solid({ ssr: true })],
});
