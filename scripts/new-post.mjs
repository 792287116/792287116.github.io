import fs from "node:fs";
import path from "node:path";

const title = process.argv.slice(2).join(" ").trim();

if (!title) {
  console.error('Usage: npm run new-post -- "文章标题"');
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const postsDir = path.resolve("src/content/blog");

const slug = title
  .normalize("NFKC")
  .toLowerCase()
  .replace(/[^\p{Letter}\p{Number}\s-]/gu, "")
  .trim()
  .replace(/\s+/g, "-")
  .replace(/-+/g, "-");

const filename = `${slug || `post-${Date.now()}`}.md`;
const filePath = path.join(postsDir, filename);

if (fs.existsSync(filePath)) {
  console.error(`File already exists: ${filePath}`);
  process.exit(1);
}

const template = `---
title: ${title}
description: 请补充这篇文章的摘要
publishDate: ${today}
featured: false
tags:
  - 待整理
---

# ${title}

在这里开始写正文。
`;

fs.writeFileSync(filePath, template, "utf8");

console.log(`Created ${path.relative(process.cwd(), filePath)}`);
