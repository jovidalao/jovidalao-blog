# Personal website guidance

Read [README.md](README.md) for the two static site variants, commands and deployment. Read only the affected content or integration guide.

- Preserve static export, English/Chinese routes, article deep links, RSS, sitemap and redirects.
- `SITE=peelday` selects a separate site build. Both variants export to `out`; verify the relevant variant and do not mix their outputs.
- The Converloop showcase is generated from the sibling source through `pnpm sync:converloop`. Do not hand-edit generated components/assets; shared navigation, metadata and blog design tokens belong here.
- README owns current operations. `docs/STATIC_DEPLOYMENT_PLAN.md` is dated implementation evidence; it does not establish current deployment status.
- Update owning instructions when commands or behavior change; keep one-off browser/deployment evidence dated and separate. A successful build or push does not establish publication.

## Code Review Rules

Read [REVIEW.md](REVIEW.md) when reviewing changes. Check changed documentation against its owning source and report concrete failures with evidence.
