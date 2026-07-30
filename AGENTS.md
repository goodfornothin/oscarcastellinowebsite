# Agent Rules — Oscar Castellino Website

These rules apply to **all AI agents** working on this repository (Cursor, Claude, and others).

## Demo first — do not go live by default

1. **Always provide a demo / preview** of changes for Oscar to review before anything is live.
   - Prefer: screenshots or short screen captures in `/opt/cursor/artifacts` (or equivalent), linked in the PR.
   - Also fine: a preview URL, local demo notes, or a walkthrough of what changed.
2. **Do NOT push to `main`, merge to `main`, or otherwise deploy live** unless Oscar **explicitly** says one of:
   - “go live”
   - “push” (to main / production)
   - “merge”
3. Until then, keep work on a feature branch and a **draft PR**.
4. If unsure whether something should be live, **keep it as a demo** and ask.

### Phrase meanings

| Oscar says | Agent should |
|---|---|
| “go live” / “push” / “merge” | Merge/push the approved work to `main` so GitHub Pages deploys |
| Anything else (including “looks good”, “thanks”, silence) | Leave on the PR/demo branch — do **not** deploy |

## Site notes

- Live site: https://oscarcastellino.com (GitHub Pages from `main`)
- Contact for site owner: voice@oscarcastellino.com
