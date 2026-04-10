---
title: 以后怎么发布一篇新博客
published: 2026-04-08
description: 用一篇示例文章把 Firefly 版本博客的后续维护流程讲清楚，方便你自己持续更新。
tags:
  - 维护
  - 发布
  - 工作流
category: 博客搭建
pinned: true
draft: false
comment: true
---

这个博客现在已经切到了 Firefly 主题模板，后续发布文章依然很简单，只是目录和命令和之前那版不一样了。

## 第一步：本地预览

推荐先准备好官方建议的环境：

```bash
nvm use 22
corepack enable
pnpm install
pnpm dev
```

然后打开本地开发地址，一边写一边看效果。

## 第二步：新增文章

推荐直接运行下面这个命令：

```bash
pnpm run new-post -- "我的第一篇文章"
```

它会自动在 `src/content/posts` 里生成 Markdown 文件，并写入 Firefly 所需的 frontmatter。

如果你想手动新建文件，也可以，比如：

```text
src/content/posts/my-first-post.md
```

文件开头通常长这样：

```yaml
---
title: 我的第一篇文章
published: 2026-04-09
description: 简短描述这篇文章讲什么
tags:
  - 记录
  - 项目
category: 随笔
draft: false
---
```

通常你只需要改几处：

- `description`：写一句摘要
- `tags`：改成这篇文章的标签
- `category`：给文章一个分类
- 正文内容：替换成你的文章

## 第三步：提交并推送

```bash
git add .
git commit -m "publish: add new post"
git push origin master
```

推送之后，GitHub Actions 会自动构建并部署到 `https://792287116.github.io`。

## 想改站点本身时看哪里

- 站点标题、描述、站点链接：`src/config/siteConfig.ts`
- 个人资料和社交链接：`src/config/profileConfig.ts`
- 导航栏：`src/config/navBarConfig.ts`
- 公告和侧边栏：`src/config/announcementConfig.ts`、`src/config/sidebarConfig.ts`
- 关于页内容：`src/content/spec/about.md`

把这些位置记住，后面维护会轻松很多。
