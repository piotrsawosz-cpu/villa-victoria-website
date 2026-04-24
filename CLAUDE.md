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
- **Rate:** €1,000/night
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

### Where website files live (root level only)

| Directory/File | Purpose |
|---|---|
| `index.html`, `styles.css` | Main entry points |
| `components/` | React JSX components |
| `api/` | Serverless API endpoints |
| `brand/` | Logos, fonts, CSS design tokens used by the site |
| `media/` | Web-optimized images and videos |
| `media/activities/` | Activity icons and videos |
| `media/gallery/` | Gallery images |
| `media/hero-frames/` | Hero animation frames |
| `package.json` | Node config |

### Where project/marketing files live

| Directory | Purpose |
|---|---|
| `Ads/` | Ad concepts, carousel specs, visitor avatars |
| `Brand Guidelines/` | Brand documents, raw logo files |
| `Reviews/` | Guest review screenshots |

### Rules — follow these strictly

- **Do NOT create new top-level folders for website features.** Use `media/`, `components/`, or `api/` as appropriate.
- **Do NOT create new top-level folders for project documents.** Use `Ads/`, `Brand Guidelines/`, or `Reviews/`.
- New activity images → `media/activities/`
- New gallery images → `media/gallery/`
- New website-ready brand assets → `brand/`
- New raw/source brand assets → `Brand Guidelines/`
- `.claude/` is gitignored — Claude's memory lives there safely without going to GitHub.
- `Villa Victoria Photos/` and `Ai Images - Villa Victoria/` are gitignored — too large for GitHub.

### Folders that should NEVER be pushed to GitHub

- `.claude/` — personal Claude config and memory
- `Villa Victoria Photos/` — original photography (already gitignored)
- `Ai Images - Villa Victoria/` — AI-generated source images (already gitignored)
- `elements activites roses/` — raw source images (web versions are in `media/activities/`)
- `Villa Victoria Main Website/` — legacy duplicate folder (active site is root-level)
- Any file ending in ` 2.ext` — these are Mac Finder duplicates, not real files

### How to push updates to GitHub

When told **"push those updates to our GitHub repo"**, run exactly these commands:

```bash
git add index.html styles.css components/ api/ brand/ media/ CLAUDE.md Ads/ "Brand Guidelines/" Reviews/ package.json .gitignore villa_victoria_context.md "Landing Page - Structure & Copy.md"
git commit -m "<short summary of what changed>"
git push origin main
```

**Do NOT run `git add .` or `git add -A`** — this would risk accidentally staging ignored or unwanted files.
