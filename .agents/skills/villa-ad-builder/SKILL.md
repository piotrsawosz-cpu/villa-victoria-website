---
name: villa-ad-builder
description: Generate a Villa Victoria ad image (Meta/Instagram Feed/Story/Reels) using Higgsfield's Nano Banana Pro. Use whenever the user asks to create, generate, build, draft, or produce an ad image, ad concept, ad creative, or marketing visual for the villa — including country-specific creative (UK / DE / FR / others). Mandates a real villa reference photo, consults country motivator docs and the past-ads registry to avoid duplication, and downloads results to assets/ads/images/.
---

# Villa Ad Builder

Single-image ad creative for Villa Victoria, generated through Higgsfield's Nano Banana Pro and grounded in real villa photography. The whole point of this skill is to avoid the two failure modes that plague AI ad work:

1. **Hallucinated property** — the model invents a fake villa with the wrong terrace, fake pool, made-up view. Solved by always passing a real reference photo.
2. **Repetitive concepts** — the same headline, motivator, or composition gets recycled across campaigns. Solved by reading the registry before drafting and writing back to it after generating.

The third pillar is **strong hooks**: every ad must communicate within one second that this is *a vacation villa, Airbnb-style, on the Costa Brava, available to book*. No clever-but-vague headlines, no luxury-magazine ambiguity, no "what is this even selling" creative.

---

## When this skill activates

- "Create an ad for the UK / Germany / France"
- "Generate an ad image / ad concept / new creative"
- "Build a Meta ad for Villa Victoria"
- "Make a Story / Reel / Feed ad"
- "Draft a new ad"

If the user just asks for a *headline* with no image, skip generation and only run steps 1–4.

---

## Workflow

### Step 1 — Confirm scope

Before doing anything else, confirm three things with the user (use AskUserQuestion if any are missing):

| Field | Default if unspecified |
|---|---|
| **Country** | Ask — UK / DE / FR / other. Each has its own motivator doc. |
| **Platform / aspect ratio** | Meta Feed → `4:5`. Story/Reels → `9:16`. Square → `1:1`. |
| **Motivator angle** | Ask if user hasn't picked one. Recommend the least-covered motivator from the registry's coverage table. |

Don't ask if the user has already specified them in the prompt.

### Step 2 — Load context (read in parallel)

Read these files before drafting anything:

1. **`ads/registry.md`** — Required. Scan the `Headline collision check` section and the `Motivator coverage` table. Your draft must not echo any existing headline's pattern or core promise.
2. **`ads/<country>-ad-motivators.md`** — `uk-ad-motivators.md` is the gold-standard reference (real research). `de-ad-motivators.md` and `fr-ad-motivators.md` are stubs — flag any DE/FR hooks as `[DRAFT — pre-research]` in the registry.
3. **`ads/visitor_avatars.md`** — Personas.
4. **`brand-guidelines/brand_guidelines.json`** — Palette (Mediterranean Blue `#1A4E7A`, Warm Sand `#D4A96A`, Terracotta `#C1603A`, Coastal Cream `#F5F0E8`), typography (Montserrat headings, Inter body), tone-of-voice rules.

### Step 3 — Draft hook + value prop (the most important step)

The hook must satisfy ALL FOUR of these in one or two lines:

1. **Country-specific motivator** — picked from the country's motivator doc, ideally an under-covered one per the registry.
2. **Brand voice** — warm, specific, owner voice ("we"), concrete scenes. Banned phrases (UK research, also applies elsewhere): *exclusive, VIP, indulge, treat yourself, world-class, iconic, hidden gem, champagne moments, pamper, prestige, luxurious*. Concrete > superlative. Permission language ("you've earned") > status language.
3. **Immediate context clarity** — within one second of seeing the ad, the viewer must register: ① it's a vacation villa, ② Airbnb/private-rental style (not a hotel), ③ it's on the Costa Brava, ④ they can book it. The corner mark `VILLA VICTORIA · ROSES, SPAIN` carries ② + ③; the headline carries ① + ④. If the headline is so abstract the viewer doesn't know what's being sold, rewrite.
4. **Strong value prop in the subline** — concrete payoff. Examples that work: `€650 per family · Private pool · Costa Brava` (math), `Your pool. Your week. Costa Brava.` (sovereignty), `90 min from Barcelona · 36 flights/week` (logistics).

**Test before continuing:** Write 3 hook variations on the chosen motivator. Pick the one that survives the four checks best. Run the chosen hook past the registry's collision check one more time.

### Step 4 — Pick the villa reference photo (mandatory)

**Never generate without a real villa reference.** This is a hard rule — text-only generations of the villa produce a fake property and are off-limits.

Pick from one of these sources, choosing whichever best matches the concept's geometry:

- `assets/photos/villa/` — high-res originals organised by room (01 Drone, 10 Pool, etc.). **Prefer this** for non-website use.
- `Villa Victoria Photos/` — same content, also high-res.
- `website/media/gallery/` — web-optimised, smaller. Fine for fast iteration.

**Match scene to reference:**
- Terrace dinner concept → pool/terrace/sea-view shot
- Bedroom concept → that bedroom's folder
- Establishing/aerial → `assets/photos/villa/01 - Drone Shots/`
- BBQ/garden → those folders

### Step 5 — (Optional) Pick a composition reference

`ads/Ads Ideas/` contains 19 screenshots and WhatsApp images Peter has saved as visual inspiration. If a particular composition (overhead-pool flat-lay, terrace dinner, hero portrait, before/after split, etc.) is worth emulating, pass it as a *second* `medias` entry to Nano Banana Pro alongside the villa reference. The villa reference dictates *what the property looks like*; the composition reference dictates *how the frame is built*.

Skip this step if the prompt's described composition is sufficient. Don't add a composition reference just for the sake of it — extra references can confuse the model.

### Step 6 — Verify Higgsfield balance and workspace

```
mcp__claude_ai_Higgsfield_MCP__balance
```

Nano Banana Pro at 4K costs more than the Starter plan's monthly default allocation. **If balance < 5 credits, stop and tell Peter to top up at https://higgsfield.ai/mcp-pricing before proceeding.** See `~/.Codex/projects/-Users-piotrsawosz-Desktop-Villa-Victoria-New/memory/reference_higgsfield-credits.md`.

### Step 7 — Upload reference(s)

```
mcp__claude_ai_Higgsfield_MCP__media_upload  filename=<basename>  content_type=image/jpeg
```

Returns an `upload_url` and a `media_id`. Then PUT the file:

```bash
curl -X PUT -H "Content-Type: image/jpeg" \
  --data-binary @"<absolute path to file>" \
  '<upload_url>' -w "\nHTTP %{http_code}\n" -s
```

After 200 OK:

```
mcp__claude_ai_Higgsfield_MCP__media_confirm  media_id=<media_id>  type=image
```

Repeat for the composition reference if using one.

### Step 8 — Generate

```
mcp__claude_ai_Higgsfield_MCP__generate_image  params={
  model: "nano_banana_2",
  aspect_ratio: <4:5 | 9:16 | 1:1>,
  resolution: "4k",
  count: 1,
  medias: [
    { role: "image", value: "<villa reference media_id>" },
    // optional composition reference:
    // { role: "image", value: "<composition reference media_id>" }
  ],
  prompt: "<see prompt template below>"
}
```

**Prompt template** — adapt to the concept, but always include these sections in this order:

```
Use the reference image as the literal source of truth for the property.
Preserve the actual <terrace / pool / bedroom / etc.> layout, the genuine
<sea view / mountain backdrop>, and the existing materials. Do not invent
or alter the architecture.

Lighting: <golden hour / midday / blue hour / evening warm>.

People and props (added in): <specific scene description with concrete
details — clothes, food, activity. Real moment, not staged.>

Color palette to honour: Mediterranean Blue (#1A4E7A) sky and sea, Warm
Sand (#D4A96A) stone, Terracotta (#C1603A) accents, Coastal Cream
(#F5F0E8) for whites and typography. Avoid cold blues, fluorescent tones,
and hotel-brochure stiffness.

Rendered typography (sharp, kerned, integrated cleanly over negative space
— do not cover the people or the focal subject):

  Upper third — Montserrat Bold, Coastal Cream:
    <HEADLINE>

  Lower third — Inter Regular, smaller, Coastal Cream:
    <subline with concrete value prop>

  Bottom-right corner — small caps, Coastal Cream:
    VILLA VICTORIA · ROSES, SPAIN

Mood: warm, genuine, premium-but-welcoming. The feeling of a knowledgeable
local friend's stunning house, not a resort. 4K, sharp, editorial-grade
composition. Output <aspect ratio>.
```

### Step 9 — Poll until complete

```
mcp__claude_ai_Higgsfield_MCP__job_status  jobId=<id>  sync=true
```

Sync mode polls server-side for ~25s. Image jobs typically finish in 10–30s. If still `in_progress` after one sync call, call again.

When `status: "completed"`, the response contains `results.rawUrl` (full-res PNG) and `results.minUrl` (web-optimised webp).

### Step 10 — Surface in widget

```
mcp__claude_ai_Higgsfield_MCP__job_display  ids=["<id>"]
```

This makes the image visible to Peter without needing to click a URL.

### Step 11 — Download to assets

Create the asset folder. **Naming convention:** `<country>-<short-slug>-<YYYYMMDD>/`

```bash
mkdir -p "/Users/piotrsawosz/Desktop/Villa Victoria New/assets/ads/images/<country>-<slug>-<YYYYMMDD>"

curl -s -o "/Users/piotrsawosz/Desktop/Villa Victoria New/assets/ads/images/<country>-<slug>-<YYYYMMDD>/final.png" \
  "<rawUrl>"
```

**slug** = 3–6 lowercase words from the headline, hyphen-separated. Example: headline "TWO FAMILIES. ONE PERFECT WEEK." → slug `two-families-one-week`.

`assets/` is gitignored, so binaries stay local. The registry (committed) is the durable record.

### Step 12 — Write meta.md

In the same asset folder, write `meta.md` with: date, country, headline, subline, motivator(s), persona, composition, platform/format, status, all generation parameters, the full prompt that was sent, the Higgsfield job ID, the source URL. Use the existing `assets/ads/images/uk-two-families-one-week-20260502/meta.md` as the template — match its structure exactly.

### Step 13 — Append to registry

Edit `ads/registry.md`:

1. Append a new row to the main table (auto-increment the `#`).
2. Append the headline to the `Headline collision check` section.
3. Increment the relevant motivator(s) count in the `Motivator coverage` table for the right country.
4. Append the composition style to the `Composition library` table.

### Step 14 — Report to Peter

Concise summary: headline, motivator angle, country, asset folder, job ID. Offer next steps: alternative aspect ratios for the same concept, a different motivator angle, or push to Meta Ads draft (currently manual — Peter approves before MCP push).

---

## Hard rules (never violate)

1. **Always pass a villa reference photo.** No text-only generations.
2. **Always read the registry before drafting** to avoid duplication.
3. **Never use banned phrases** — *exclusive, VIP, indulge, treat yourself, world-class, hidden gem, champagne, pamper, prestige, luxurious*.
4. **Never confirm a draft for paid spend without country research.** UK is researched (5 motivators with avatar backing). DE and FR are stubs — any hook from those docs must be flagged `[DRAFT — pre-research]` until research is filled in.
5. **Never push directly to Meta Ads.** Generation only. Peter reviews and pushes manually (or instructs the meta-ads MCP separately, with the guardrails in `connectors/meta-ads/README.md`).
6. **Always download to `assets/ads/images/<country>-<slug>-<YYYYMMDD>/`.** Source URLs from Higgsfield expire.
7. **Always write meta.md and update the registry** as the last two steps. An ad that exists only as an image, with no record, is invisible to future planning.

---

## Aspect ratio cheat sheet

| Format | Aspect | Notes |
|---|---|---|
| Meta Feed | `4:5` | Default; max in-feed real estate |
| Story / Reels | `9:16` | Vertical full-screen; headline goes in the upper-third safe zone |
| Square Feed | `1:1` | Older Feed convention; still valid |
| Wide hero (web/email) | `16:9` or `21:9` | Use only for non-paid placements |

## Files this skill touches

| Path | Read | Write |
|---|---|---|
| `ads/registry.md` | ✓ | ✓ (append row) |
| `ads/uk-ad-motivators.md` | ✓ | – |
| `ads/de-ad-motivators.md` | ✓ | – |
| `ads/fr-ad-motivators.md` | ✓ | – |
| `ads/visitor_avatars.md` | ✓ | – |
| `ads/Ads Ideas/` | ✓ (composition refs) | – |
| `brand-guidelines/brand_guidelines.json` | ✓ | – |
| `assets/photos/villa/**` | ✓ (reference photos) | – |
| `assets/ads/images/<slug>/final.png` | – | ✓ (new) |
| `assets/ads/images/<slug>/meta.md` | – | ✓ (new) |
