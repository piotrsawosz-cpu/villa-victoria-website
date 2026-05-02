# GitHub connector

Pushes this workspace to the `villa-victoria-website` GitHub repo. The "connector" here is just system `git` over HTTPS plus the user's saved Keychain credential — nothing extra to install.

## Repo

- **URL:** https://github.com/piotrsawosz-cpu/villa-victoria-website
- **Branch:** `main` (only branch; Vercel deploys from it)
- **Deployment:** Vercel auto-deploys `main` on every push, no build step, static site

## Auth

- Uses HTTPS + macOS Keychain. `git config credential.helper=osxkeychain` is set globally on this Mac.
- If a push prompts for credentials: generate a GitHub Personal Access Token at https://github.com/settings/tokens (scope: `repo`), paste it as the password — Keychain will remember it.
- Never commit a token, never write one to `.env`.

## Identity

Git identity is set **locally inside this repo**, not globally. Verify with:

```bash
git config user.name      # Piotr Sawosz
git config user.email     # piotr.sawosz@gmail.com
```

If those return empty, set them:

```bash
git config user.name "Piotr Sawosz"
git config user.email "piotr.sawosz@gmail.com"
```

(Matches the existing commit history on the repo. Don't switch to a different email without aligning the history.)

## Push workflow

When the user says **"push those updates to our GitHub repo"**:

1. Sanity check:
   ```bash
   git status
   git diff --staged
   ```
   If anything from the never-push list is staged, unstage it before committing.

2. Stage only the paths that changed in the session (never `git add .` / `git add -A`):
   ```bash
   git add website/ CLAUDE.md ads/ brand-guidelines/ reviews/ .gitignore vercel.json \
           context/ connectors/ .mcp.json
   ```
   Drop any path from the line that didn't actually change.

3. Commit:
   ```bash
   git commit -m "<short summary of what changed>"
   ```

4. Confirm with the user, then push:
   ```bash
   git push origin main
   ```

Vercel auto-deploys within ~1 minute.

## Never push

These are gitignored, but explicit form helps catch accidents:

- `.claude/` — personal Claude config and memory
- `Pictures/`, `Old Files/`, `Villa Victoria Photos/`, `Ai Images - Villa Victoria/`, `Villa Victoria Main Website/` — large or legacy
- `elements activites roses/` — source image dumps
- `archive/` — local-only superseded material
- `assets/` — local-only source binaries (raw photos, AI images), kept on this Mac only
- `inbox/*` (except `inbox/README.md`) — triage zone
- `CLAUDE.local.md` — personal Claude overrides
- `.env`, `.env.*` — secrets
- Anything ending in ` 2.ext` — Mac Finder duplicates

## Vercel constraints

Two configs must stay correct or the live site 404s:

1. `vercel.json` at the **repo root** (NOT inside `website/`) must contain exactly:
   ```json
   {"buildCommand": null, "outputDirectory": ".", "framework": null}
   ```
2. The Vercel dashboard → Project Settings → **Root Directory** must be set to `website`. Set this in the dashboard, **not** in `vercel.json` — Vercel rejects `rootDirectory` as a `vercel.json` field.

## Recovery

- **Lost commits:** `git reflog` then `git checkout <hash>` to recover. The local scaffold commit was dropped during initial setup but is recoverable via reflog if needed.
- **Branch divergence:** if a push is rejected due to remote changes, run `git pull --rebase origin main`, resolve any conflicts, then push again.
- **Force push:** never to `main` without explicit user approval.
