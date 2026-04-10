import type { NavBarConfig, NavBarSearchConfig } from "../types/config";
import { NavBarSearchMethod } from "../types/config";

export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};

export const navBarConfig: NavBarConfig = {
	links: [
		{
			name: "首页",
			url: "/",
			icon: "material-symbols:home-outline-rounded",
		},
		{
			name: "归档",
			url: "/archive/",
			icon: "material-symbols:archive-outline-rounded",
		},
		{
			name: "关于",
			url: "/about/",
			icon: "material-symbols:person-outline-rounded",
		},
		{
			name: "GitHub",
			url: "https://github.com/792287116",
			external: true,
			icon: "fa7-brands:github",
		},
	],
};
