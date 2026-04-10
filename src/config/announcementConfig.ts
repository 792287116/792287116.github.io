import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "欢迎",

	// 公告内容
	content: "这里会持续记录项目、技术笔记和一些值得反复打磨的想法。",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "关于这个站点",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
