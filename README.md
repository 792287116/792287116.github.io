# Steven's Field Notes

基于 Astro 5 的个人博客，适合部署到 `792287116.github.io`。

## 本地开发

```bash
nvm use 20
npm install
npm run dev
```

## 构建预览

```bash
npm run build
npm run preview
```

## 发布新文章

1. 在 `src/content/blog` 新建一个 Markdown 文件。
2. 写 frontmatter：

```yaml
---
title: 文章标题
description: 一句话描述
publishDate: 2026-04-09
tags:
  - 标签一
  - 标签二
featured: false
---
```

3. 写正文。
4. 提交并推送：

```bash
git add .
git commit -m "publish: add post"
git push origin main
```

## 常改的地方

- 站点名称和链接：`src/config/site.ts`
- 全局样式：`src/styles/global.css`
- 首页：`src/pages/index.astro`
- 文章列表：`src/pages/blog/index.astro`
- 文章详情：`src/pages/blog/[...slug].astro`

## GitHub Pages

仓库里已经带了 `.github/workflows/deploy.yml`。推送到 `main` 分支后，GitHub Actions 会自动构建并部署。
