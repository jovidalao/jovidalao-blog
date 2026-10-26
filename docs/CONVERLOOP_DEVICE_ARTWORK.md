# Product device artwork

## Current use

The product page uses readable HTML/CSS feature illustrations in `src/components/ProductPreviews.tsx`, with localized labels in `src/i18n/converloop.ts`. These are static illustrations: their drawn controls are not interactive app controls. Preserve their accessible image labels and hidden decorative contents.

Full screenshots remain under `public/shots/{en,zh}/`. `Shot.tsx` supplies their device framing and reads intrinsic screenshot sizes from `src/productMedia.json`; some screenshots are also used directly in `ConverloopPage.tsx`. The six montage clips and posters in `public/media/` are retained from the earlier presentation. The current product page does not call `AutoVideo` or reference these clips. Updating the current feature illustrations does not require regenerating them.

## Artwork sources

The iPhone and iPad frames are Apple product artwork downloaded on 2026-10-25 from [Apple Design Resources → Product Bezels](https://developer.apple.com/design/resources/#product-bezels). They are not CSS approximations or generated illustrations.

| Website asset | Apple source PNG | Source canvas | Screen opening (x, y, width, height) | Web canvas |
| --- | --- | --- | --- | --- |
| `public/devices/iphone-16-pro-black-titanium.webp` | `iPhone 16 Pro - Black Titanium - Portrait.png` | 1350 × 2760 | 72, 69, 1206, 2622 | 1080 × 2208 |
| `public/devices/ipad-pro-13-space-black-landscape.webp` | `iPad Pro (M5) 13" - Space Black - Landscape.png` | 3000 × 2300 | 124, 118, 2752, 2064 | 1800 × 1380 |
| `public/devices/iphone-duo-night-sky-landscape.webp` | `iPhone Duo - Night Sky - Inner Open Landscape.png` | 3093 × 2247 | 120, 120, 2853, 2007 | 1800 × 1308 |

Download packages:

- [Bezel-iPhone-16.dmg](https://devimages-cdn.apple.com/design/resources/download/Bezel-iPhone-16.dmg)
- [Bezel-iPad-Pro-(M5).dmg](https://devimages-cdn.apple.com/design/resources/download/Bezel-iPad-Pro-%28M5%29.dmg)
- [Bezel-iPhone-Duo.dmg](https://devimages-cdn.apple.com/design/resources/download/Bezel-iPhone-Duo.dmg)

The 2026-10-25 integration report records the user's authorization to accept the Apple Design Resources and App Store Marketing Artwork license agreements presented by these packages. Apple retains ownership; these assets are not covered by any repository code license. The agreements referred to here are embedded in the source DMGs, not bundled with this repository. Consult those packages and [Apple's marketing guidelines](https://developer.apple.com/app-store/marketing/guidelines/). Trademark credit appears in the footer in both languages.

The original downloaded packages were still present at the following local staging paths when documentation was checked on 2026-10-26. These temporary paths are not a durable archive. Use the download links above to recover the packages, and compare SHA-256 hashes to identify the versions used here; if Apple replaces a package, retain its new source and agreement details with the new work.

| Local source package | SHA-256 |
| --- | --- |
| `/private/tmp/converloop-bezels/iphone16.dmg` | `215af02c6cb651f3f5dc57bcd01537b07356917d6caf2edfd418dbeb4a675512` |
| `/private/tmp/converloop-bezels/ipad-pro-m5.dmg` | `ebde5f7249d416ad83d2d14881c31a0ae3ed8343643d26a0fbf61195aeb06f0f` |
| `/private/tmp/converloop-bezels/iphone-duo.dmg` | `6d623163830ea86c9298f37f1f32d4fe29810be05c9155b7dcd3ca3805d76cc2` |

## Updating screenshots and frames

Processing: Pillow RGBA decode, proportional Lanczos resize, lossless WebP encode (`method=6`). The entire original canvas, transparency, hardware details and colours are retained. `Shot.tsx` overlays the artwork on the existing screenshot. Percentage screen bounds in `site.module.css` come from the source PNGs; `object-fit: contain` preserves screenshot proportions and complete content. The official artwork supplies the display corners and Dynamic Island. Alternate text belongs to the screenshot; device artwork is decorative.

To convert an extracted frame, use a Python environment with Pillow available. This is optional asset tooling, not a website dependency. From the repository root, replace the source argument below with the extracted PNG; use the web dimensions from the table for each frame. Write to a staging file before replacing the reviewed website asset.

```sh
python3 - '/path/to/iPhone 16 Pro - Black Titanium - Portrait.png' /tmp/iphone-frame.webp 1080 2208 <<'PY'
import sys
from PIL import Image

source, destination, width, height = sys.argv[1:]
size = (int(width), int(height))
with Image.open(source) as original:
    image = original.convert("RGBA")
    expected_height = image.height * size[0] / image.width
    if abs(expected_height - size[1]) > 1:
        raise ValueError("Output dimensions would distort the source canvas")
    image.resize(size, Image.Resampling.LANCZOS).save(
        destination, "WEBP", lossless=True, method=6
    )
with Image.open(destination) as output:
    assert output.size == size and output.mode == "RGBA"
    print(destination, output.size, output.mode)
PY
```

When replacing media:

1. Capture English and Chinese using deterministic demo content; record the app revision/build, device, language and capture method. Distinguish actual app screenshots from HTML/CSS illustrations and edited montages.
2. Preserve screenshot proportions and readable content. Update `src/productMedia.json` with final screenshot dimensions, and check any explicit image dimensions in `ConverloopPage.tsx`. For a different frame, update the table above, `Shot.tsx`'s artwork dimensions and the measured screen bounds in `site.module.css` together. CSS percentages are the source opening's x/width, y/height, opening-width/width and opening-height/height, each multiplied by 100.
3. Update localized alternative text when the content changes. Keep device artwork decorative (`alt=""`, `aria-hidden="true"`). Preserve `assetBase` prefixes for the personal-site showcase.
4. When replacing a screenshot at the same URL, update the `?v=` revision in `ConverloopPage.tsx`. For artwork or other resources without a revision parameter, use a new filename and update references when cache invalidation is needed.
5. Follow the [README build and browser checks](../README.md#build-and-preview). Record source/output dimensions and hashes, and inspect complete screens, corners, crops and loading at mobile and desktop sizes in both locales.

## Historical montage workflow

On 2026-10-25 the existing montage renderer was reused for the video and poster refresh, replacing its drawn phone rim with the same official iPhone artwork. The six clips are 1440 × 900, 24 fps, nine seconds, with no audio. They are screenshot montages rather than recordings of live interactions.

Local historical evidence is under `artifacts/2026-10-24/screenshot-refresh/` (capture manifest and release checks) and `artifacts/2026-10-25/device-bezels/` (artwork hashes, browser checks, video validation and `render.swift`). These dated reports describe their own revisions; they are not required build inputs and may be absent from a clean checkout.

`render.swift` is an archived macOS AppKit/AVFoundation renderer, not a portable build command. It hardcodes `/private/tmp/converloop-bezels/media` and a personal checkout path, reads `source-shots/{en,zh}/`, and writes staged media. If a future change needs those clips, copy it to a separate working location, adapt both paths, stage the source screenshots and review its output before copying selected files to `public/media/`. Poster WebP conversion is a separate step; the archived script emits PNG posters. Validate dimensions, duration, frame rate, absence of audio and complete decoding as well as the visual result before publishing. Reconnecting video also requires checking lazy loading and reduced-motion posters.
