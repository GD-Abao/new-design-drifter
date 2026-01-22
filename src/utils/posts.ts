import type { CollectionEntry } from "astro:content";

export function getPostSlug(post: CollectionEntry<"blog">) {
	const date = new Date(post.data.pubDate);
	const dateStr = date.toISOString().slice(0, 10).replace(/-/g, "");
	const fileName = post.id.split("/").pop() || post.id;

	return `${dateStr}-${fileName}`;
}

export function getPostHref(post: CollectionEntry<"blog">) {
	return `/${post.data.category}/${getPostSlug(post)}`;
}
