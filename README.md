# jovidalao.com

Personal site of jovidalao, plus the Peelday site at [peelday.jovidalao.com](https://peelday.jovidalao.com), rebuilt with Next.js while preserving the original Astro site's pages, content, and interactions. Converloop also has an independent site and repository, [converloopai.com](https://converloopai.com); the same showcase is available inside the personal site at `/converloop` and `/zh/converloop`.

## Stack

- React + Next.js App Router + TypeScript
- CSS Modules
- Local Markdown content rendered at build time
- Static export deployed to Cloudflare Pages

The site intentionally has no account system, authentication, database, or runtime content API because the original product is a public, read-only personal site.

Hanken Grotesk and IBM Plex Mono are bundled in `src/fonts` with their SIL Open Font License files and source hashes. `next/font/local` serves them from the static export; builds do not fetch Google Fonts. Keep the font files, licenses and `sources.json` together when updating typography.

## Local development

Use Node **22.22.2** (see `.node-version`) and pnpm **10.11.1** (see `packageManager` in `package.json`). Activate those versions with your preferred version manager before installing dependencies.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Blog posts live in `content/blog/en` and `content/blog/zh`. Images referenced by posts live in `public/blog`. Adding or changing content requires a new build and deployment.

Run the Peelday site with `SITE=peelday pnpm dev` (it uses `.next-dev-peelday`, so both dev servers can run at once).

Development uses `.next-dev`; production builds use `.next` and export to `out`. Keeping these separate lets `pnpm build` run while `pnpm dev` is open without overwriting its Webpack modules. Restart dev once after changing this configuration, then reload any tabs that still hold the old modules.

## Build and preview

Every build exports the site to `out`, regardless of hosting provider or `CF_PAGES`:

```sh
pnpm build
pnpm typecheck
pnpm check:static
pnpm preview
```

Prefix each command with `SITE=peelday` to build, check and preview peelday.jovidalao.com instead. Both sites write to `out`, so build the one you want to preview last.

The static checker derives page routes from the App Router and article paths from Markdown files. It checks nonempty HTML, 404, RSS, sitemap, robots, local resources referenced by HTML, and the absence of the server-only `/_next/image` endpoint. It does not test browser interactions or every resource inside CSS.

Preview uses the pinned Cloudflare Wrangler development tool to serve `out` at `http://127.0.0.1:8788`. It verifies the export before starting. `pnpm start` is an alias for the same static preview. Neither command rebuilds the site: run `pnpm build` after editing content or code. `next start` is not used with static export.

Use `pnpm dev` for hot-reload development; verify the exported files and a Pages branch preview before publishing. Test deep links, refreshes, 404 status codes, English/Chinese navigation, themes, images and mobile layout.

## Two sites, one codebase

`SITE=peelday` switches `pageExtensions` in `next.config.ts` to `peelday.tsx`/`peelday.ts`, so that build sees only the `*.peelday.tsx` route files (and `route.peelday.ts` for robots and sitemap); the default build never sees them. Both sites share the components, styles and Header/Footer, which take a `site` prop and link across sites by absolute URL.

jovidalao.com:

- `/` and `/zh`
- `/converloop` and `/zh/converloop` — the product showcase inside the personal-site navigation
- `/blog` and `/zh/blog` (unpublished while `BLOG_PUBLISHED` is false)
- `/rss.xml`, `/sitemap.xml`, and `/robots.txt`

peelday.jovidalao.com:

- `/` and `/zh`
- `/privacy`, `/terms` and their `/zh` versions — the Peelday app and App Store listing link here
- `/sitemap.xml` and `/robots.txt`

`public/_redirects` keeps the Converloop showcase local, redirects its legacy desktop paths to that showcase, and sends Converloop legal/support links and Peelday links to their product domains. The rules list pages one by one rather than splats, because the home page still loads images from `/converloop/` and `/peelday/`.

## Deployment

Both sites are Cloudflare Pages projects connected to this repository. Use the same build mode and tool versions for production and branch previews:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Build command | `pnpm build` |
| Build output directory | `out` |
| Root directory | Repository root |
| Node version | `22.22.2` via `.node-version`; any `NODE_VERSION` override must match |
| pnpm version | `PNPM_VERSION=10.11.1`, matching `packageManager` |
| Branch previews | Enabled for non-production branches |
| Custom domain | jovidalao.com project: `jovidalao.com`. Peelday project: `peelday.jovidalao.com` |
| Site variable | Peelday project only: `SITE=peelday` |

Cloudflare automatically installs dependencies using pnpm and the committed lockfile. Check the actual installation versions in deployment logs. A framework preset is optional with these explicit settings; **Next.js (Static HTML Export)** is also suitable. Deploy `out`, not `.next` or the former Astro `dist` directory.

`next.config.ts` always enables `output: "export"` and `images.unoptimized`. App Router pages and Server Components render at build time; client-side navigation, themes and locale switching remain interactive. RSS, robots and sitemap are generated as static files. `CF_PAGES` no longer selects a different build mode.

Images are served directly. This does not compress images or generate responsive variants; resize and compress new assets before publishing. Request-time features such as Server Actions, cookies, SSR and ISR require a runtime deployment and a separate architecture decision.

`vercel.json` retains the same build command, which now also produces a static export. Vercel deployment is not part of the verification scope for this change. Moving to another static host requires checking clean URLs, redirects, 404 responses, headers and the custom domain.

After a branch preview succeeds, verify its pages and interactions before merging. After publishing to `main`, wait for the Pages deployment to succeed and check the production domain. A successful push or local build alone does not confirm publication. Record the previous successful production deployment and build settings so they can be restored if needed.

The implementation scope and validation record are documented in [the static deployment plan](docs/STATIC_DEPLOYMENT_PLAN.md).

## Keeping the Converloop showcase in sync

The blog renders the same Server Components, translated copy and product assets as the
standalone website, with the blog Header/Footer and an explicit official-site button.
It does not embed the live website or depend on another checkout during deployment.

After editing the source in the sibling `converloopai` checkout, run:

```sh
pnpm sync:converloop
# Or: pnpm sync:converloop /absolute/path/to/converloopai
pnpm build
pnpm typecheck
pnpm check:static
```

The sync command updates only `src/components/converloop`, product assets under
`public/converloop`, and the device-artwork attribution document. Import adaptations
are checked explicitly; review the sync script if an upstream import changes. Do not
edit the generated components directly. Route metadata, blog navigation, and the
shared blog design tokens remain owned by this repository. Header and Footer use the
canonical Converloop CSS modules directly; the home page uses its section and card
styles. Product captures on home are static imports with content-hashed URLs.

## Documentation

[AGENTS.md](AGENTS.md) owns agent routing and project constraints; [REVIEW.md](REVIEW.md) lists concrete review risks. `CLAUDE.md` imports the same agent guidance. The README owns current setup and deployment; the static deployment plan is a historical report. Only read its dated details when investigating that migration.

The copied device-artwork guide records paths in the upstream `converloopai` repository; generated assets here live under `public/converloop/` and components under `src/components/converloop/`. Refresh it from the upstream guide through the sync workflow when updating the showcase. For documentation-only changes, check sources, links and commands and run `git diff --check`; a new app build is unnecessary.
