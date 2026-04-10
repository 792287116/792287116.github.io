---
title: 欢迎来到这座写作花园
published: 2026-04-08
description: 这是一篇示例文章，用来演示 Firefly 博客的内容格式、布局和写作方式。
tags:
  - Astro
  - 博客
  - Firefly
category: 博客搭建
pinned: true
draft: false
comment: true
---

如果你能看到这篇文章，说明博客的内容系统已经正常工作了。

现在这个站点使用的是 Astro + Firefly，文章放在 `src/content/posts` 目录里，通过 Markdown 管理。对长期写作来说，这种方式很轻，备份和迁移也很方便。

## 你后续写文章时只需要做三件事

1. 在 `src/content/posts` 新建一个 `.md` 文件。
2. 写好文章头部的 `title`、`published`、`description` 等字段。
3. 提交并推送到 GitHub，Pages 会自动部署。

## 一篇文章通常长这样

你可以写普通段落，也可以用列表、引用、代码块：

```ts
const post = {
  title: "我的新文章",
  published: "2026-04-08",
  tags: ["写作", "Astro"]
};
```

> 把博客搭好只是开始，持续写下去才会让它真正有价值。

## 建议的写作方向

- 项目复盘：这次做成了什么，卡在哪里，下次怎么做得更好。
- 技术笔记：解决过的 bug、工具使用经验、架构取舍。
- 个人成长：阅读记录、思考过程、阶段性总结。

写博客最好的状态，不是追求“篇篇都很重要”，而是让想法有一个稳定落点。
