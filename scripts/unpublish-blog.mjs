import { readFile, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const consts = await readFile(path.join(root, "src/consts.ts"), "utf8");
if (/export const BLOG_PUBLISHED = true\b/.test(consts)) process.exit(0);

const output = path.join(root, "out");
const pages = [
  "blog.html",
  "blog.txt",
  "blog/_.html",
  "blog/_.txt",
  "zh/blog.html",
  "zh/blog.txt",
  "zh/blog/_.html",
  "zh/blog/_.txt",
];

for (const page of pages) await rm(path.join(output, page), { force: true });
console.log("Blog pages removed from the static export.");
