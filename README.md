# jovidalao.com

Personal site and product home for [Converloop](https://jovidalao.com/converloop/) and Peelday, rebuilt with Next.js while preserving the original Astro site's pages, content, and interactions.

## Stack

- React + Next.js App Router + TypeScript
- CSS Modules
- Local Markdown content rendered at build time
- Static export deployed to Cloudflare Pages

The site intentionally has no account system, authentication, database, or runtime content API because the original product is a public, read-only personal site.

## Local development

Use Node **22.22.2** (see `.node-version`) and pnpm **10.11.1** (see `packageManager` in `package.json`). Activate those versions with your preferred version manager before installing dependencies.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Blog posts live in `content/blog/en` and `content/blog/zh`. Images referenced by posts live in `public/blog`. Adding or changing content requires a new build and deployment.

## Build and preview

Every build exports the site to `out`, regardless of hosting provider or `CF_PAGES`:

```sh
pnpm typecheck
pnpm build
pnpm check:static
pnpm preview
```

The static checker derives page routes from the App Router and article paths from Markdown files. It checks nonempty HTML, 404, RSS, sitemap, robots, local resources referenced by HTML, and the absence of the server-only `/_next/image` endpoint. It does not test browser interactions or every resource inside CSS.

Preview uses the pinned Cloudflare Wrangler development tool to serve `out` at `http://127.0.0.1:8788`. It verifies the export before starting. `pnpm start` is an alias for the same static preview. Neither command rebuilds the site: run `pnpm build` after editing content or code. `next start` is not used with static export.

Use `pnpm dev` for hot-reload development; verify the exported files and a Pages branch preview before publishing. Test deep links, refreshes, 404 status codes, English/Chinese navigation, themes, images and mobile layout.

## Routes

- `/` and `/zh`
- `/blog` and `/zh/blog`
- `/converloop` and `/zh/converloop`
- Converloop desktop, support and privacy pages in both languages
- `/peelday` and `/zh/peelday`
- Peelday privacy and terms pages in both languages
- `/rss.xml`, `/sitemap.xml`, and `/robots.txt`

## Deployment

The production domain is hosted on Cloudflare Pages. Use the same build mode and tool versions for production and branch previews:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Build command | `pnpm build` |
| Build output directory | `out` |
| Root directory | Repository root |
| Node version | `22.22.2` via `.node-version`; any `NODE_VERSION` override must match |
| pnpm version | `PNPM_VERSION=10.11.1`, matching `packageManager` |
| Branch previews | Enabled for non-production branches |

Cloudflare automatically installs dependencies using pnpm and the committed lockfile. Check the actual installation versions in deployment logs. A framework preset is optional with these explicit settings; **Next.js (Static HTML Export)** is also suitable. Deploy `out`, not `.next` or the former Astro `dist` directory.

`next.config.ts` always enables `output: "export"` and `images.unoptimized`. App Router pages and Server Components render at build time; client-side navigation, themes and locale switching remain interactive. RSS, robots and sitemap are generated as static files. `CF_PAGES` no longer selects a different build mode.

Images are served directly. This does not compress images or generate responsive variants; resize and compress new assets before publishing. Request-time features such as Server Actions, cookies, SSR and ISR require a runtime deployment and a separate architecture decision.

`vercel.json` retains the same build command, which now also produces a static export. Vercel deployment is not part of the verification scope for this change. Moving to another static host requires checking clean URLs, redirects, 404 responses, headers and the custom domain.

After a branch preview succeeds, verify its pages and interactions before merging. After publishing to `main`, wait for the Pages deployment to succeed and check the production domain. A successful push or local build alone does not confirm publication. Record the previous successful production deployment and build settings so they can be restored if needed.

The implementation scope and validation record are documented in [the static deployment plan](docs/STATIC_DEPLOYMENT_PLAN.md).

The Converloop landing page keeps the product contract documented by the original project: inline correction, natural expression, composing help, bilingual reading, text selection analysis, learning-only memory, conversation replay, portable backup, and the local-first privacy boundary.
