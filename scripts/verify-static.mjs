import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = path.join(root, "out");
const origin = "https://jovidalao.com";

async function verify() {
  try {
    await stat(path.join(output, "index.html"));
  } catch {
    throw new Error("Static export not found. Run pnpm build before checking or previewing out.");
  }

  const failures = [];
  const routes = new Set();
  const assets = new Set();

  async function requireFile(relative, context) {
    try {
      const info = await stat(path.join(output, relative));
      if (!info.isFile() || info.size === 0) throw new Error("empty or not a file");
    } catch {
      failures.push(`${context}: missing or empty out/${relative}`);
    }
  }

  for (const file of ["404.html", "robots.txt", "sitemap.xml", "rss.xml"]) {
    await requireFile(file, "Required export");
  }

  // Match the existing App Router pages and Markdown-based catch-all routes.
  const pages = await readdir(path.join(root, "src/app"), { recursive: true });
  for (const file of pages) {
    if (path.basename(file) !== "page.tsx") continue;
    const parts = path.dirname(file).split(path.sep).filter((part) => part !== "." && !part.startsWith("("));
    const route = `/${parts.join("/")}`;
    if (!route.includes("[")) {
      routes.add(route);
      continue;
    }

    const blog = route.match(/^(\/zh)?\/blog\/\[\.\.\.slug\]$/);
    if (!blog) {
      failures.push(`Add static verification for dynamic route ${route}`);
      continue;
    }
    const locale = blog[1] ? "zh" : "en";
    const posts = await readdir(path.join(root, "content/blog", locale), { recursive: true });
    for (const post of posts.filter((entry) => entry.endsWith(".md"))) {
      const slug = post.slice(0, -3).split(path.sep).join("/");
      routes.add(`${blog[1] ?? ""}/blog/${slug}`);
    }
  }

  for (const route of routes) {
    const file = route === "/" ? "index.html" : `${route.slice(1)}.html`;
    await requireFile(file, `Route ${route}`);
  }

  const htmlFiles = (await readdir(output, { recursive: true })).filter((file) => file.endsWith(".html"));
  for (const file of htmlFiles) {
    const html = await readFile(path.join(output, file), "utf8");
    if (html.includes("/_next/image")) failures.push(`out/${file}: requires the Next.js image endpoint`);
    const route = file === "index.html" ? "/" : `/${file.split(path.sep).join("/").replace(/\.html$/, "")}`;

    // Inspect emitted resource tags, not navigation or canonical links.
    for (const [tag] of html.matchAll(/<(?:img|source|script|link)\b[^>]*>/gi)) {
      if (/^<link\b/i.test(tag) && !/\brel=["'](?:stylesheet|icon|apple-touch-icon|preload|modulepreload|manifest)["']/i.test(tag)) continue;
      for (const [, attribute, value] of tag.matchAll(/\b(src|href|srcset)=["']([^"']*)["']/gi)) {
        if (!value || value.startsWith("data:")) continue;
        const references = attribute.toLowerCase() === "srcset"
          ? value.split(",").map((candidate) => candidate.trim().split(/\s+/)[0])
          : [value];
        for (const reference of references) {
          if (!reference || reference.startsWith("#")) continue;
          try {
            const url = new URL(reference.replace(/&amp;/g, "&"), `${origin}${route}`);
            if (url.origin !== origin) continue;
            const relative = decodeURIComponent(url.pathname).replace(/^\/+/, "");
            const location = path.resolve(output, relative);
            if (!location.startsWith(`${output}${path.sep}`)) throw new Error("path outside out");
            assets.add(relative);
          } catch {
            failures.push(`out/${file}: invalid resource URL ${reference}`);
          }
        }
      }
    }
  }

  for (const asset of assets) await requireFile(asset, "Local resource");
  if (failures.length) throw new Error(failures.join("\n"));
  console.log(`Static export verified: ${routes.size} page routes, ${htmlFiles.length} HTML files, ${assets.size} local resources, RSS, sitemap, robots and 404.`);
}

verify().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
