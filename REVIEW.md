# Review guidance

Review the changed behavior against its owning documentation and implementation. Report actionable failures with a file/line, concrete trigger and consequence. Separate pre-existing issues from regressions; do not invent defects from names alone. Say plainly when there are no actionable findings.

For documentation, check that commands, links, supported behavior, release status and evidence claims are true. Fix repeated causes in their owning rule or executable check when practical. Match verification to the change: documentation-only edits need source/link and whitespace checks (`git diff --check` in a Git checkout, otherwise compare the saved prior text); runtime changes need the relevant existing tests/build and any applicable device or browser checks.

After a repair, review the new diff and unresolved findings. Do not repeat resolved comments or keep expanding into unrelated cleanup; if three repair rounds do not converge, revisit the approach and report the remaining issue. A review result does not authorize a merge, deployment or account change.

## Project checks

- Check both site variants when touching shared routing, Header/Footer, tokens or the build configuration.
- Preserve Markdown article discovery, language alternates, clean/deep URLs and redirects. Static export verification does not execute browser interactions.
- Generated Converloop changes must originate in the source website and follow the sync script; document which repository owns each instruction.
- Require actual deployment and production evidence before claiming publication; a dated plan is historical.
