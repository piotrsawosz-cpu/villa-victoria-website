# Villa Victoria — Claude Code Project Memory

## What This Project Is

Villa Victoria is a 3-bedroom luxury villa in Roses, Costa Brava, Spain. The owner (Peter) manages it remotely and rents it at €1,000/night via Airbnb and Booking.com. The goal is to grow direct bookings and reduce platform dependency through better marketing and a dedicated website.

---

## Key Files

| File | What it contains |
|------|-----------------|
| `villa_victoria_context.md` | Full property details, amenities, location, pricing, target guests, platforms |
| `Brand Guidelines/brand_guidelines.json` | Colors, typography, tone of voice, content pillars, campaign copy |
| `Landing Page - Structure & Copy.md` | Detailed spec for the direct-booking landing page |
| `Ads/visitor_avatars.md` | Target guest personas |

## Asset Directories

```
Villa Victoria Photos/     — Professional photography, organized by room (01–15)
Ai Images - Villa Victoria/ — AI-generated images, same room structure
Ads/                       — Ad concepts, carousel specs, visitor avatars
Reviews/                   — Guest testimonials
```

Rooms covered: Entrance, Main Living Area, Kitchen, Home Cinema, Hallway, Bottom Floor Terrace, BBQ, Garden, Pool & Jacuzzi, Bedroom 1–3, Bathroom 1–3, plus Drone Shots and AI Lifestyle Photos.

---

## Brand at a Glance

- **Tagline:** "Your Costa Brava base. Perfectly yours."
- **Tone:** Warm, genuine, welcoming — premium but never cold or distant
- **Personality:** A knowledgeable local friend with a stunning house

**Colors:**
- Primary: Mediterranean Blue `#1A4E7A`
- Secondary: Warm Sand `#D4A96A`
- Accent: Terracotta `#C1603A`
- Background: Coastal Cream `#F5F0E8`
- Text: Charcoal Olive `#3D4A3A`

**Typography:** Montserrat (headings), Inter or Open Sans (body)

---

## Property Quick Reference

- **Location:** Roses, Costa Brava, Catalonia — mountain above town, panoramic Gulf of Roses views
- **Capacity:** 8 guests comfortably, up to 10
- **Bedrooms:** 3 (Bed 1: queen/king, Bed 2: queen/king, Bed 3: king + wall bed)
- **Amenities:** Private pool, jacuzzi, sauna, outdoor BBQ, garden, large terrace
- **Rate:** €1,300/night
- **Nearby:** Girona (40 min), Barcelona (1.5 hrs), beaches, natural park hiking

---

## Social Media

- Instagram: [@villa_victoria_spain](https://www.instagram.com/villa_victoria_spain/)
- Facebook: [VillaVictoriaSpain](https://www.facebook.com/VillaVictoriaSpain/)
- Airbnb listing: https://www.airbnb.com/rooms/18872378

---

## Contact

Owner: Peter — piotr.sawosz@gmail.com

---

## File Organization Rules

### Where website files live (`website/` subfolder)

All website source code lives inside the `website/` folder. Vercel is configured (via `vercel.json`) to deploy from this folder.

| Path | Purpose |
|---|---|
| `website/index.html` | Main HTML entry point |
| `website/styles.css` | Main stylesheet |
| `website/components/` | React JSX components |
| `website/api/` | Serverless API endpoints |
| `website/brand/` | Logos, fonts, CSS design tokens used by the site |
| `website/media/` | Web-optimized images and videos |
| `website/media/activities/` | Activity icons and videos |
| `website/media/gallery/` | Gallery images |
| `website/media/hero-frames/` | Hero animation frames |
| `website/package.json` | Node config |

### Where project/marketing files live (root level)

| Directory | Purpose |
|---|---|
| `Ads/` | Ad concepts, carousel specs, visitor avatars |
| `Brand Guidelines/` | Brand documents, raw logo files |
| `Reviews/` | Guest review screenshots |
| `context/` | Long-lived project knowledge (read `context/README.md` first as the index) |
| `connectors/` | External tool integrations — each has a `README.md` with auth/usage |
| `.mcp.json` | MCP server registrations |
| `Pictures/` | Source photos and AI images (gitignored, not on GitHub) |
| `Old Files/` | Legacy duplicates (gitignored, not on GitHub) |
| `assets/` | Local-only source binaries (raw photos, AI images, mp4s, screenshots) — gitignored, never pushed. Web-ready versions live in `website/media/` instead. |
| `inbox/` | Triage zone — run `/triage-inbox` when files are dropped here (gitignored, only the README is committed) |
| `archive/` | Local-only superseded material (gitignored) |

### Rules — follow these strictly

- **All website changes go inside `website/`.** Do NOT create new folders at the root level for website features.
- **New activity images → `website/media/activities/`**
- **New gallery images → `website/media/gallery/`**
- **New website-ready brand assets → `website/brand/`**
- **New raw/source brand assets → `Brand Guidelines/`** (not inside `website/`)
- `.claude/` is gitignored — Claude's memory lives there safely without going to GitHub.
- `Pictures/` and `Old Files/` are gitignored — they never go to GitHub.

### Folders that should NEVER be pushed to GitHub

- `.claude/` — personal Claude config and memory
- `Pictures/` — source photography and AI images (too large, gitignored)
- `Old Files/` — legacy duplicates (gitignored)
- `archive/` — local-only superseded material (gitignored)
- `assets/` — local-only source binaries (raw photos, AI images), gitignored
- `inbox/` (except its `README.md`) — triage zone, contents are personal
- `CLAUDE.local.md` — personal Claude overrides (gitignored)
- `.env` and `.env.*` — secrets (gitignored)
- Any file ending in ` 2.ext` — Mac Finder duplicates

### How to push updates to GitHub

The workspace itself is the working copy of `piotrsawosz-cpu/villa-victoria-website`. Pushes go directly from this folder. See `connectors/github/README.md` for full setup details (auth, identity, troubleshooting).

When told **"push those updates to our GitHub repo"**:

1. **Sanity check** — `git status` and `git diff --staged`. Unstage anything from the never-push list before committing.
2. **Stage explicitly** (only paths that actually changed in the session):
   ```bash
   git add website/ CLAUDE.md Ads/ "Brand Guidelines/" Reviews/ .gitignore vercel.json \
           villa_victoria_context.md "Landing Page - Structure & Copy.md" \
           context/ connectors/ .mcp.json
   ```
3. **Commit and push** (confirm with the user before `git push`):
   ```bash
   git commit -m "<short summary of what changed>"
   git push origin main
   ```

**Do NOT run `git add .` or `git add -A`** — this would risk accidentally staging ignored or unwanted files.

Vercel auto-deploys from `main` within ~1 min. No build step.

---

## Workspace conventions

These rules apply to working in this repo, separate from the brand/file-organization rules above.

1. **For project context, read `context/README.md` first.** It indexes every context file with a short description and tells you when each is relevant. Read individual context files only when the task calls for them — never read every file in `context/` by default.
2. **`inbox/` is a triage zone, not storage.** When the user says they've added a file to inbox, run `/triage-inbox`.
3. **Personal overrides live in `CLAUDE.local.md`** (gitignored), not here.
4. **When you add a connector, MCP server, or skill, update the manifest below in the same change.** If it's not in this file, you'll forget it exists.

---

## Capability manifest

This is the inventory of everything available beyond standard tools. **Always check here first before assuming a capability is missing.**

### MCP servers

Registered in `.mcp.json`. Supporting files (configs, helpers) live in `connectors/<name>-mcp/`.

| Name | Purpose |
|---|---|
| _(none yet)_ | |

### CLI connectors

Command-line tools you can shell out to. Each has a folder in `connectors/<name>/` with a README explaining auth and usage.

| Name | Purpose | Folder |
|---|---|---|
| `github` | Push website updates to `piotrsawosz-cpu/villa-victoria-website`. Auth via HTTPS + macOS Keychain. | `connectors/github/` |

### Skills

Project-local skills live in `.claude/skills/<skill-name>/` (gitignored, so personal). Auto-discovered via frontmatter in each `SKILL.md`, but listed here so they surface during planning.

| Skill | Purpose |
|---|---|
| `skill-creator` | Create new skills, modify and improve existing skills, and measure skill performance. Use whenever the user wants to create, edit, or evaluate a skill. |

### Slash commands

Custom commands in `.claude/commands/` (gitignored).

| Command | Purpose |
|---|---|
| `/triage-inbox` | Sort files in `inbox/` into their proper homes. |
