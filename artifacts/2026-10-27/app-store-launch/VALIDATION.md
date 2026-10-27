# Converloop App Store launch update

Local verification on October 27, 2026, against blog base `7b20bc1` plus this change.

- Refreshed generated Converloop copy and configuration with `pnpm sync:converloop` from the sibling official-site checkout. No generated files were hand-edited.
- Updated both home-page availability labels and added an App Store button using the synced configuration's country-neutral URL: `https://apps.apple.com/app/converloop/id6788364286`.
- macOS, Node 22.22.2, pnpm 10.11.1, Next.js 15.5.20.
- `pnpm build`, then `pnpm typecheck`, then `pnpm check:static`: passed. Static verification covered four routes, five HTML files, 36 local resources, RSS, redirects, sitemap, robots and 404. Existing unpublished article behavior was retained.
- `git diff --check`: passed.
- Static preview ran with `pnpm preview --port 8789`.
- Application browser: `/`, `/zh`, `/converloop`, `/zh/converloop` at widths 320, 390, 768, 1024 and 1440. No horizontal document overflow. Each home page contained one Converloop download link; each showcase contained two. All used the exact country-neutral URL, with no rendered TestFlight or old App Store launch text.
- Visually checked the Chinese showcase on desktop and home product section on narrow mobile. Home download button measured within the 320 px viewport. Saved `zh-home-preview.png` as local preview evidence.
- These checks cover the default personal-site build. No Peelday source, shared routing, styles or build configuration changed. Cloudflare's separate Peelday deployment check must also succeed when this repository is published.

Publication was explicitly authorized by the user. Confirm the branch preview before pushing production, then verify deployment results and all four affected production pages separately; the checks above establish only local behavior.
