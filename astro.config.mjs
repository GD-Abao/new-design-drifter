// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import pagefind from "astro-pagefind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://design-drifter.com",
	image: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "cdn.design-drifter.com",
			},
		],
	},
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [pagefind(), sitemap()],
});
