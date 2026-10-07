# jovidalao.com

Personal site and product home for [Converloop](https://jovidalao.com/converloop/) and Peelday, rebuilt with Next.js while preserving the original Astro site's pages, content, and interactions.

## Stack

- React + Next.js App Router + TypeScript
- CSS Modules
- Local Markdown content rendered at build time
- Cloudflare Pages deployment, with Vercel support

The site intentionally has no account system, authentication, database, or runtime content API because the original product is a public, read-only personal site.

## Local development

```sh
pnpm install
pnpm dev
pnpm build
```

Blog posts live in `content/blog/en` and `content/blog/zh`. Images referenced by posts live in `public/blog`.

## Routes

- `/` and `/zh`
- `/blog` and `/zh/blog`
- `/converloop` and `/zh/converloop`
- `/peelday` and `/zh/peelday`
- Peelday privacy and terms pages in both languages
- `/rss.xml`, `/sitemap.xml`, and `/robots.txt`

## Deployment

The production domain is hosted on Cloudflare Pages. Keep the production branch set to `main`, the build command set to `npm run build`, the build output directory set to `out`, and the root directory set to the repository root.

Cloudflare automatically provides `CF_PAGES=1`. Only in that environment, `next.config.ts` enables Next.js static export and serves the blog's existing images directly, without the server-only image optimization endpoint. App Router pages, Server Components rendered at build time, client-side navigation, themes, and locale switching are preserved. RSS, robots.txt, and sitemap.xml are generated as static files too.

To verify the Pages build locally:

```sh
CF_PAGES=1 npm run build
```

Every route should have an HTML file under `out`, alongside `_next` assets and public images. Deploy `out`, not `.next` or the former Astro `dist` directory. A framework preset is optional with these explicit build settings; **Next.js (Static HTML Export)** is also suitable. The lockfile still makes Cloudflare install dependencies with pnpm before running the build script.

Vercel remains supported via `vercel.json`; without `CF_PAGES=1`, the project uses its standard Next.js build and image optimization. No account system, database, or application environment variables are required on either platform. Future request-time features such as Server Actions, cookies, or SSR would require a runtime deployment rather than Pages static export.

The Converloop landing page keeps the product contract documented by the original project: inline correction, natural expression, composing help, bilingual reading, text selection analysis, learning-only memory, conversation replay, portable backup, and the local-first privacy boundary.
