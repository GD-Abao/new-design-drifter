// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import pagefind from "astro-pagefind";
import sitemap from "@astrojs/sitemap";
import rehypeExternalLinks from "rehype-external-links";

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
	markdown: {
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					target: "_blank", // 設定開新視窗
					rel: ["noopener", "noreferrer"], // 安全性設定
					// content: { type: 'text', value: ' ↗' } // (選用) 如果想在連結後加一個小箭頭圖示
				},
			],
		],
	},
	integrations: [pagefind(), sitemap()],
});
