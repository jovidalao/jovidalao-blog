import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Keep the blog's showcase identical to the standalone product page, without
// depending on a sibling checkout or the live website at build/run time.
const root = fileURLToPath(new URL("../", import.meta.url));
const source = path.resolve(root, process.argv[2] ?? "../converloopai");
const destination = path.join(root, "src/components/converloop");
const files = [
  "components/ConverloopPage.tsx", "components/ConverloopPage.module.css",
  "components/ProductPreviews.tsx", "components/ProductPreviews.module.css",
  "components/Shot.tsx", "components/Icon.tsx", "components/site.module.css",
  "components/Header.module.css", "components/Footer.module.css",
  "consts.ts", "productMedia.json", "i18n/converloop.ts",
];

function replace(text, before, after, file) {
  if (!text.includes(before)) throw new Error(`Source import changed in ${file}; review the sync script.`);
  return text.replace(before, after);
}

const prepared = [];
for (const file of files) {
  let text = await readFile(path.join(source, "src", file), "utf8");
  if (file === "components/ConverloopPage.tsx") {
    text = replace(text, 'from "@/consts"', 'from "./consts"', file);
    text = replace(text,
      'import { converloopScenes, getConverloop, localeBase, type Locale } from "@/i18n";',
      'import { converloopScenes, getConverloop } from "./copy";\nimport { localeBase, type Locale } from "@/i18n";', file);
  }
  if (file === "components/ProductPreviews.tsx") {
    text = replace(text,
      'import { converloopScenes, getConverloop, type Locale } from "@/i18n";',
      'import { converloopScenes, getConverloop } from "./copy";\nimport type { Locale } from "@/i18n";', file);
  }
  if (file === "components/Shot.tsx") text = replace(text, 'from "@/productMedia.json"', 'from "./productMedia.json"', file);
  if (file === "i18n/converloop.ts") text = replace(text, 'from "./ui"', 'from "@/i18n"', file);
  const name = file === "i18n/converloop.ts" ? "copy.ts" : path.basename(file);
  const banner = name.endsWith(".json") ? "" : "/* Synced from converloopai; update with pnpm sync:converloop. */\n";
  prepared.push([name, banner + text]);
}

await mkdir(destination, { recursive: true });
for (const [name, text] of prepared) await writeFile(path.join(destination, name), text);
const publicDestination = path.join(root, "public/converloop");
await mkdir(publicDestination, { recursive: true });
for (const name of ["shots", "devices", "icon.webp", "icon.png", "plan-ai.webp", "plan-lifetime.webp"]) {
  await cp(path.join(source, "public", name), path.join(publicDestination, name), { recursive: true });
}
await cp(path.join(source, "docs/DEVICE_ARTWORK.md"), path.join(root, "docs/CONVERLOOP_DEVICE_ARTWORK.md"));
console.log(`Synced ${prepared.length} showcase files and product assets from ${source}.`);
