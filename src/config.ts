export const SITE = {
	name: "Design Drifter",
	description: "分享遊戲與 AI 相關訊息與知識",
	url: "https://design-drifter.com/",
};

export const AUTHOR = {
	name: "Design Drifter",
	url: "https://design-drifter.com/about",
};

export const PAGE_SIZE = 12;

export const CATEGORIES = {
	game: "GAME",
	ai: "AI",
} as const;

export type Category = keyof typeof CATEGORIES;
