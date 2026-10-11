# Peelday website screenshots

Source directory: `/Users/jovi/Code/peelday/screenshotmake`.
Use original app captures rather than the decorated App Store exports in `out/`.
Images are resized to 750 × 1630 and encoded as WebP at quality 88, without changing app content.

| Website asset | Original capture |
| --- | --- |
| page.webp | 1.png |
| maker.webp | 2.jpg |
| calendar.webp | 3.PNG |
| ticket.webp | 4.png |
| widget.webp | 5.jpg |
| empty.webp | Simulator Screenshot - iPhone 17 Pro - 2026-06-03 at 16.39.58.png |

`search.webp` retains the existing October 2026 simulator capture because this directory has no search screenshot.
Screenshots show the app language at capture time and are shared across website locales.

Pages import these captures through `src/lib/peelday-shots.ts`. Next.js emits content-hashed
`/_next/static/media/` URLs, so replacing an image also changes its URL and avoids stale browser caches.
