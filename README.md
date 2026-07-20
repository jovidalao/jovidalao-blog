# jovidalao.com

Personal site and product home for [Converloop](https://jovidalao.com/converloop/) and Peelday, rebuilt with Next.js while preserving the original Astro site's pages, content, and interactions.

## Stack

- React + Next.js App Router + TypeScript
- CSS Modules
- Local Markdown content rendered at build time
- Vercel deployment

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

Import the repository into Vercel. No environment variables or external services are required; `vercel.json` uses the standard Next.js build.

The Converloop landing page keeps the product contract documented by the original project: inline correction, natural expression, composing help, bilingual reading, text selection analysis, learning-only memory, conversation replay, portable backup, and the local-first privacy boundary.
