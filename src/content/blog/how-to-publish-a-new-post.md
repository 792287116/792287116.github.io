---
title: 以后怎么发布一篇新博客
description: 用一篇示例文章把后续维护流程讲清楚，方便你自己持续更新。
publishDate: 2026-04-08
featured: true
tags:
  - 维护
  - 发布
  - 工作流
---

这个博客已经接入 GitHub Actions 自动部署，所以后续发布文章会非常简单。

## 第一步：本地预览

```bash
nvm use 20
npm install
npm run dev
```

然后打开本地开发地址，一边写一边看效果。

## 第二步：新增文章

推荐直接运行下面这个命令：

```bash
npm run new-post -- "我的第一篇文章"
```

它会自动在 `src/content/blog` 里生成一个 Markdown 文件，并写入基础 frontmatter。

如果你想手动新建文件，也可以，比如：

```text
src/content/blog/my-first-post.md
```

文件开头写上 frontmatter：

```yaml
---
title: 我的第一篇文章
description: 简短描述这篇文章讲什么
publishDate: 2026-04-09
tags:
  - 记录
  - 项目
featured: false
---
```

通常你只需要改三处：

- `description`：写一句摘要
- `tags`：改成这篇文章的标签
- 正文内容：替换成你的文章

## 第三步：提交并推送

```bash
git add .
git commit -m "publish: add new post"
git push origin master
```

推送之后，GitHub Actions 会自动构建并部署到 `https://792287116.github.io`。

## 想改站点本身时看哪里

- 站点标题、描述、社交链接：`src/config/site.ts`
- 全局视觉样式：`src/styles/global.css`
- 首页结构：`src/pages/index.astro`
- 文章页结构：`src/pages/blog/[...slug].astro`

把这些位置记住，后面维护会轻松很多。
