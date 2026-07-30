# Agent Rules — Oscar Castellino Website

These rules apply to **all AI agents** working on this repository (Cursor, Claude, and others).

## Demo first — do not go live by default

1. **Always provide a demo / preview** of changes for Oscar to review before anything is live.
2. **Preferred demo: a clickable preview link** (a temporary demo site URL Oscar can open in his browser).
   - Spin up / publish a preview from the feature branch whenever possible.
   - Also attach screenshots or short captures in `/opt/cursor/artifacts` (or equivalent) in the PR.
3. **Until a dedicated demo-hosting system is configured**, use the best available preview URL for the branch (for example a static preview host, tunnel, or Pages preview), and say clearly that it is a demo — not the live site. If a true preview URL cannot be created, fall back to screenshots + PR walkthrough and note that a preview link was not available.
4. **Do NOT push to `main`, merge to `main`, or otherwise deploy live** unless Oscar **explicitly** says one of:
   - “go live”
   - “push” (to main / production)
   - “merge”
5. Until then, keep work on a feature branch and a **draft PR**.
6. If unsure whether something should be live, **keep it as a demo** and ask.

### Phrase meanings

| Oscar says | Agent should |
|---|---|
| “go live” / “push” / “merge” | Merge/push the approved work to `main` so GitHub Pages deploys |
| Anything else (including “looks good”, “thanks”, silence) | Leave on the PR/demo branch — do **not** deploy |

### Future setup note

Oscar wants a standing **demo site / preview-link system** so every change gets its own review URL. Prefer implementing or using that when available; until then, still aim to produce a preview link rather than screenshots alone.

## Site notes

- Live site: https://oscarcastellino.com (GitHub Pages from `main`)
- Contact for site owner: voice@oscarcastellino.com
