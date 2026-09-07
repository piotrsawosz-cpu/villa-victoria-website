# Higgsfield Ad-Generation Instructions — Three-Audience Brief

This file turns Peter's three-audience ad brief — **Families**, **Friend
Groups**, **Remote Workers** — into concrete, repeatable instructions for
generating each ad image in Higgsfield. For every creative it gives you the
exact on-image text, how that text should look, which source photo to use, and
— where the right scene doesn't exist yet — exactly how to tell Higgsfield to
edit the photo (e.g. take an empty jacuzzi-at-sunset shot and add a couple
drinking champagne).

**There are 11 creatives:** Families ×4, Friend Groups ×3, Remote Workers ×4.

---

## How to use this file

This file is the *creative content*. The *mechanics* live in the
**`villa-lifestyle-ad` skill** (`.claude/skills/villa-lifestyle-ad/SKILL.md`) —
that skill already locks exactly the look Peter wants: a unified Montserrat
headline, a "Costa Brava, Spain" tag, and a rounded terracotta CTA button.

For each ad, work the skill's standard loop and pull the per-creative values
from §5 below:

1. Read `ads/registry.md` (collision + composition check).
2. Check Higgsfield balance (`mcp__claude_ai_Higgsfield_MCP__balance`). If under
   ~5 credits, stop and ask Peter to top up.
3. Upload the source photo: `media_upload` → `curl` PUT to the returned URL →
   `media_confirm`.
4. Generate: `generate_image` with `model: "nano_banana_pro"`,
   `aspect_ratio: "4:5"`, `resolution: "4k"`, `count: 1`,
   `medias: [{ role: "image", value: "<media_id>" }]`, and the filled-in prompt
   from §4 + §5.
5. Poll (`job_status`), display (`job_display`), download `final.png` to
   `assets/ads/images/en-<slug>-<YYYYMMDD>/`.
6. Write `meta.md` and append a row to `ads/registry.md` (see §6).

Generation is a separate task — this file is the brief. Never push to Meta Ads;
Peter reviews and launches.

---

## 1. The look, in one paragraph

Every ad is the same designed object: a real photo of Villa Victoria, a short
two-line headline set over open sky in the upper third, and a lower lockup that
names the place and asks for the booking. It should feel like a well-art-
directed travel editorial — warm, calm, confident — not a discount flyer. The
text is interesting because of restraint: one typeface, one accent colour, and
weight doing the work that a louder design would do with size or colour.

---

## 2. Global rules — locked for all 11 ads

**Bottom lockup — every ad, no exceptions.** At the bottom of every image, over
a soft dark gradient scrim:

- A location tag: **`COSTA BRAVA, SPAIN`** — Montserrat, small caps, generous
  letter-spacing, Coastal Cream, flanked left and right by two short thin
  divider rules.
- Directly below it, a softly rounded **solid Terracotta (`#C1603A`) pill
  button** containing **`Book Villa Victoria today`** — Montserrat Semibold,
  Coastal Cream text, comfortably padded.

**Never** put a price or a minimum-stay length anywhere on the image. The
brief's draft lockup said "7-night minimum · Costa Brava, Spain" — drop the
"7-night minimum ·" entirely. No nightly rate, no "from €…", no stay length.

**Format.** `4:5` (Meta Feed), `4k`, model `nano_banana_pro`.

**Typography.** Montserrat for *everything* — headline, sub-line, location tag,
button. Interest comes from **weight and letter-spacing — never from enlarging a
word or a line.** All headline words stay a similar size; a heavier weight, not
a bigger size, carries the emphasis. No script fonts, no serifs.

**Palette.**

| Role | Colour | Hex |
|---|---|---|
| Sea & sky | Mediterranean Blue | `#1A4E7A` |
| Stone & warm light | Warm Sand | `#D4A96A` |
| **The single accent** | Terracotta | `#C1603A` |
| All typography | Coastal Cream | `#F5F0E8` |

Terracotta appears in exactly three places and nowhere else: the thin rule above
the headline, one accent word in the sub-line (when there is a sub-line), and
the CTA button. One accent colour, used sparingly, is what ties the ad together.

**Voice.** Warm, concrete, the owner's voice — a knowledgeable local friend, not
a resort. Banned words: *exclusive, VIP, indulge, luxurious, world-class, hidden
gem, pamper, prestige.*

---

## 3. Reading the brief's overlays into on-template text

The brief describes overlays loosely ("top", "bottom, smaller", "bottom,
larger", "centered"). Map them onto the locked template like this:

| Brief says… | On the ad it becomes… |
|---|---|
| "Overlay (top)" | The **headline** — split into two short lines: line 1 Montserrat Medium, line 2 Montserrat Bold, same size. |
| "Overlay (bottom, smaller)" | The **sub-line** — directly under the headline, Montserrat Medium Italic, smaller, with one Terracotta accent word. |
| "Overlay (bottom, larger)" | This is the **emphasis line** — make it headline line 2 (Bold); the "top" line becomes line 1 (Medium). Render the emphasis as **weight, not size.** |
| "Overlay (centered)" | A **centered headline block** of 2–3 short lines in the upper third; final line Bold, earlier lines Medium. No sub-line. |
| A single amenity list | One **centered line**, dot-separated (see Families C4). |

The key move: whenever the brief wants one part to feel bigger or louder, you
deliver that with **Montserrat Bold vs Montserrat Medium at the same size.**
That is the whole reason the set looks coherent.

---

## 4. Image methodology — "reference photo + add in"

This is the most important section. Higgsfield (Nano Banana Pro) always works
from a **reference photo** — a real image of Villa Victoria. The reference locks
the actual architecture, the real pool, the genuine Gulf-of-Roses view, so the
ad shows *our* property and not an invented one. Never run a text-only
generation; it hallucinates a fake villa.

There are two ways to use a reference photo:

### Mode A — use the photo as-is

The photo already shows the right scene: the right people, the right light, the
right props. You just want it reframed to 4:5 with the typography added.

Prompt instruction:

> *"Use the reference image as the literal source of truth for the property and
> the scene. Preserve the architecture, the materials and the people exactly as
> shown — do not invent, restage, or alter anything."*

### Mode B — reference + "add in"

The photo is the right **place**, but it's missing the **moment** the ad needs
— there are no people in it, or no champagne, or it's the wrong time of day.
Here the reference still locks the real villa, but you add an explicit
instruction telling Higgsfield what to put into the scene.

**Peter's own example:** we have a photo of the jacuzzi at sunset with nobody in
it. The ad needs people drinking champagne. You don't go looking for a different
photo — you use *that* photo as the reference and add the people:

> *"Keep the jacuzzi, the railing, the pool beside it and the genuine
> Gulf-of-Roses sunset exactly as in the reference — same framing, same light.*
> ***Add in:*** *a couple sitting together in the jacuzzi, relaxed and happy,
> each holding a glass of champagne, a chilled bottle resting on the jacuzzi
> rim. A real, candid moment — not a posed studio shot."*

The principle: **the reference photo is the source of truth for the *property*;
the `Add in:` line is the source of truth for the *moment*.** Describe added
people concretely — who they are, what they're wearing, what they're doing,
what they're holding — and always ask for a real, unposed moment.

> Worked proof: that exact champagne-in-the-jacuzzi scene already exists as an
> AI lifestyle photo —
> `assets/photos/ai/AI Lifestyle Photos/hf_20260421_044152_053d58f6-c8ce-482a-b296-f13e105d24b8.png`
> — built with this method. It's a useful style reference for how a Mode-B
> "add in" should look when it's done right.

Mode B also covers **relighting** (e.g. "shift the light from evening to bright
warm midday" or "warm the light to a golden-hour glow") and **swapping a prop**
(e.g. "replace the cocktail on the side table with an open laptop and a coffee").

### Master prompt template

Fill the brackets from §5 and send this as the `prompt`. For **Mode A**, delete
the `PEOPLE & PROPS` block. For **Mode B**, keep it and write the `Add in:`
instruction.

```
Use the reference image as the literal source of truth for the property and the
scene. Preserve [SCENE-PRESERVE DESCRIPTION — the actual pool / terrace / jacuzzi,
the genuine marina and Gulf of Roses view, the existing materials] exactly as
shown. Do not invent or alter the architecture.

Lighting: [bright, warm Mediterranean midday, clear sky, soft natural shadows |
warm golden-hour glow | late golden hour].

PEOPLE & PROPS (added in):  [omit this whole block for Mode A]
[Concrete description of the people/props to add — who, dressed how, doing what,
holding what. A real, candid, unposed moment. If swapping or relighting, say so.]

Reframe to a 4:5 vertical crop with clean negative space in the upper sky and a
calm band across the lower portion for typography.

Typography — a unified, restrained editorial system. Use ONE typeface family
(Montserrat) for every element; create interest through weight and letter-
spacing only — NO display scripts, NO serif fonts, and do NOT enlarge any single
word. All headline words stay a similar size.

  HEADLINE — upper third, over the open sky, centered, all Montserrat, Coastal
  Cream (#F5F0E8), soft drop shadow:
    Line 1: "[HEADLINE_LINE_1]" — Montserrat Medium
    Line 2: "[HEADLINE_LINE_2]" — Montserrat Bold, same size as line 1
    [add further lines as specified; final line Bold, earlier lines Medium]
    A short, thin Terracotta (#C1603A) horizontal rule centered just above line 1.

  [SUB-LINE — include only if specified:
  directly below the headline: "[SUBLINE]" — Montserrat Medium Italic, smaller,
  Coastal Cream, with the word "[ACCENT WORD]" in Terracotta (#C1603A) at the
  same size.]

  BOTTOM LOCKUP — lower band, centered, over a soft dark gradient scrim:
    "COSTA BRAVA, SPAIN" — Montserrat, small caps, generous letter-spacing,
    Coastal Cream, flanked left and right by two short thin divider rules.
    Below it, a softly rounded solid Terracotta (#C1603A) pill button containing
    "Book Villa Victoria today" in Montserrat Semibold, Coastal Cream text,
    comfortably padded.

Every text element is the Montserrat family and reads as one unified design
system. Terracotta is the single accent — the rule, [the sub-line accent word,]
and the button only.

Color palette: Mediterranean Blue (#1A4E7A) sea and sky, Warm Sand (#D4A96A)
stone, Terracotta (#C1603A) accent, Coastal Cream (#F5F0E8) typography. Avoid
cold blues, fluorescent tones, and hotel-brochure stiffness.

Mood: warm, genuine, premium-but-welcoming — a family friend's stunning house,
not a resort. Polished, editorial-grade graphic design. 4K, sharp. Output 4:5.
```

Always Read the source photo before writing the prompt, so the SCENE-PRESERVE
description matches what's actually in the frame. After download, check the
`final.png`: villa geometry intact, every word spelled correctly, terracotta
only on the rule / accent word / button. Re-run if the text renders wrong.

---

## 5. The 11 creative specs

Each spec gives you everything to fill the template. The **caption** is the Meta
post copy — it goes in the ad text field, **not on the image**.

---

### 🏖️ FAMILIES

#### F1 — "The best holiday for your kids"

- **Headline:** `The best holiday` (Medium) / `for your kids` (Bold)
- **Sub-line:** `And finally, one for you too.` — accent word: **you**
- **Source photo:** `assets/photos/ai/AI Lifestyle Photos/hf_20260421_030700_903914fb-aaa5-4fe5-9266-aab7e5e0d43a.png`
- **Mode:** A — use as-is. The photo already shows a couple relaxed on loungers
  with drinks and two children playing in the pool.
- **Scene-preserve:** the infinity pool, the stone sun deck, the striped blue
  loungers, the couple on the loungers and the two children in the pool, the
  panoramic marina and Gulf of Roses view.
- **Lighting:** bright, warm Mediterranean midday.
- **Caption:** *A pool they won't leave. A beach 5 minutes down the hill. And a
  terrace where the adults can actually finish a glass of wine. Villa Victoria
  sleeps 8. Check summer dates →*
- **Asset folder:** `en-best-holiday-your-kids-<YYYYMMDD>`
- ⚠️ **Note:** this overlaps registry ad #8 (`assets/ads/images/en-best-holiday-whole-family-20260521/`,
  whose `final-alt-kids.png` is a "…for your kids" version). Per Peter, generate
  F1 fresh anyway as the revised brief's creative — but log it distinctly in the
  registry and reference ad #8 in `meta.md` so the relationship is on record.

#### F2 — "A holiday that works for everyone"

- **Headline:** `A holiday that` (Medium) / `works for everyone` (Bold)
- **Sub-line:** `Kids in the pool. Grandparents on the terrace. You, finally
  relaxed.` — accent word: **relaxed**
- **Source photo:** `assets/photos/ai/01 - Drone Shots/ai-drone-villa-aerial-pool-view.png`
- **Mode:** A — use as-is. The aerial shows the whole property in one frame —
  pool, multiple terraces, garden — which is the literal proof that it "works
  for everyone." The sub-line carries the human story; don't try to add tiny
  figures into an aerial.
- **Scene-preserve:** the aerial view of Villa Victoria — the terracotta-tiled
  roof, the pool on its stone deck, the stepped terraces, the garden and palms
  on the hillside, the bay beyond.
- **Lighting:** warm golden-hour glow (as in the reference).
- **Caption:** *Three king bedrooms. Private pool, jacuzzi, sauna, BBQ, home
  cinema, garden. Villa Victoria is built so every generation gets their own
  version of the perfect day. Check availability →*
- **Asset folder:** `en-holiday-works-for-everyone-<YYYYMMDD>`

#### F3 — "One villa. One family. One unforgettable week."

- **Headline (centered 3-line block):** `One villa.` (Medium) / `One family.`
  (Medium) / `One unforgettable week.` (Bold)
- **Sub-line:** none.
- **Source photo:** `assets/photos/ai/AI Lifestyle Photos/hf_20260421_034508_a3d83796-5a1c-4a03-9c2e-e9ffebf0e1d1.png`
- **Mode:** A (light). The photo already shows a family dinner on the terrace by
  the sea. Optionally warm the light toward golden hour for the "long dinners
  under the sunset" feel — if so, that one relight makes it Mode B.
- **Scene-preserve:** the covered terrace under its arches, the family gathered
  around the laid table, the man grilling at the built-in BBQ, the children by
  the railing, the open sea behind.
- **Lighting:** warm late-afternoon light, optionally pushed to golden hour.
- **Caption:** *Mornings on the terrace. Afternoons in the sea. Long dinners
  under the sunset. Villa Victoria sleeps 8 across 3 king bedrooms — built for
  families, not quick turnovers. Check availability →*
- **Asset folder:** `en-one-villa-one-family-<YYYYMMDD>`

#### F4 — "Everything they need, all in one place" (amenities)

- **Headline:** a single centered line —
  `Pool · Jacuzzi · Sauna · Cinema · BBQ · Sea views`
  Montserrat Medium, generously letter-spaced; the `·` separators in Terracotta
  (`#C1603A`). Keep the thin terracotta rule above the line.
- **Sub-line:** none.
- **Source photo:** `assets/photos/villa/Photos for Ads/pool-infinity-marina-sea-view.jpeg`
- **Mode:** A — use as-is. A clean, empty infinity-pool hero; the amenity line
  is the message.
- **Scene-preserve:** the infinity pool with its mosaic medallion, the timber
  deck, the glass-and-steel railing, the marina and Gulf of Roses below, the
  clear blue sky.
- **Lighting:** bright, warm Mediterranean midday.
- **Caption:** *Resort amenities in a private home — without the crowds, the
  queues, or the kids' club. 4.9★ · 7 years hosting. Tap to check your dates →*
- **Asset folder:** `en-amenities-all-in-one-<YYYYMMDD>`
- **Template note:** this is the one creative with a single amenity line instead
  of a two-line headline. Everything else (rule, lockup, palette) is unchanged.

---

### 🥂 FRIEND GROUPS

> The angle across this set: the rare week where everyone is actually together.

#### FG1 — "The week you all finally make happen"

- **Headline:** `The week you all` (Medium) / `finally make happen` (Bold)
- **Sub-line:** none.
- **Source photo:** `assets/photos/villa/Photos for Ads/pool-loungers-cocktails-sea-view.jpeg`
- **Mode:** B — **add in.** The photo is sun loungers and drinks by the pool
  with no people.
  - *Add in:* `a relaxed group of six to eight adult friends around the pool —
    some on the loungers, some standing by the rail with drinks in hand,
    mid-conversation, laughing. Mid-afternoon. A real, candid moment, not posed.`
- **Scene-preserve:** the grey rattan sun loungers with navy cushions, the side
  table, the pool, the marina and bay view, the blue sky.
- **Lighting:** bright, warm Mediterranean midday.
- **Caption:** *It's been three years since you all got a real week together.
  Villa Victoria sleeps 8 — private pool, jacuzzi, sauna, BBQ, sunsets over the
  Gulf of Roses. Check open dates →*
- **Asset folder:** `en-week-you-finally-make-happen-<YYYYMMDD>`

#### FG2 — *deleted*

The brief's Friend Groups Creative 2 ("8 of you. 7 nights. One villa above the
sea.") is intentionally **not produced** — its headline states a stay length,
which Peter has ruled out of all on-image copy. Recorded here so a future reader
doesn't think it was missed.

#### FG3 — "Spain. Without the crowds."

- **Headline:** `Spain.` (Medium) / `Without the crowds.` (Bold)
- **Sub-line:** `A private villa above the Gulf of Roses.` — accent word:
  **private**
- **Source photo:** `assets/photos/ai/10 - Pool Area and Jacuzzi/ai-pool-sun-loungers-marina-view.png`
- **Mode:** B (light) — **relight only.** Keep the frame empty and peaceful (no
  people) and shift the light to **late golden hour** for a quiet, end-of-day
  calm.
  - *Add in:* `no people — keep the scene serene and unoccupied. Relight to a
    soft late-golden-hour glow, long warm light across the deck and the bay.`
- **Scene-preserve:** the pool, the striped sun loungers, the potted plants, the
  marina and bay panorama, the villa's arched terrace at right.
- **Lighting:** late golden hour.
- **Caption:** *Costa Brava is what the Mediterranean used to feel like — quiet
  coves, real towns, no queues. Villa Victoria sits inside a protected natural
  park, 5 min above Roses. Sleeps 8. Check dates →*
- **Asset folder:** `en-spain-without-the-crowds-<YYYYMMDD>`

#### FG4 — "Long lunches. Long swims. Long way from real life."

- **Headline (centered 3-line block):** `Long lunches.` (Medium) /
  `Long swims.` (Medium) / `Long way from real life.` (Bold)
- **Sub-line:** none.
- **Source photo:** `assets/photos/villa/Photos for Ads/terrace-dining-barbecue-sea-view.png`
- **Mode:** B — **add in + warm the light.** The covered terrace and round
  dining table are empty.
  - *Add in:* `a group of adult friends mid-lunch around the round table —
    plates of food, glasses of wine, easy conversation, one or two leaning back
    relaxed. Warm the light toward golden hour. A real, candid moment.`
- **Scene-preserve:** the covered terrace under its stone arches, the built-in
  BBQ at left, the round table and wooden chairs, the pool and open sea framed
  by the arches.
- **Lighting:** warm golden hour.
- **Caption:** *Villa Victoria sleeps 8 across 3 king bedrooms. Inside a
  protected natural park, 5 min above the sea. Built for the week where no one's
  checking their phone. Check availability →*
- **Asset folder:** `en-long-lunches-long-swims-<YYYYMMDD>`

---

### 💻 REMOTE WORKERS

#### RW1 — "Working from home. With the upgrade your family deserves."

- **Headline:** `Working from home.` (Medium) / `With the upgrade your family
  deserves.` (Bold — may wrap to two lines, all Bold)
- **Sub-line:** none.
- **Source photo:** `assets/photos/villa/Photos for Ads/terrace-egg-chair-pool-sea-view.png`
- **Mode:** B — **add in.**
  - *Add in:* `a person working calmly on a laptop at a small terrace table — a
    coffee beside them, relaxed posture, the sea view in front of them. A real,
    everyday working moment, not a stock pose.`
- **Scene-preserve:** the covered arched terrace, the black hanging egg chair at
  left, the pool beyond the railing, the potted plants, the marina and bay
  panorama.
- **Lighting:** bright, warm Mediterranean midday.
- **Caption:** *Same job. Same hours. Different view. 331 Mbps fiber, sea views
  from every main room, and a pool the kids disappear into after school. Villa
  Victoria sleeps 8. Check dates →*
- **Asset folder:** `en-working-from-home-upgrade-<YYYYMMDD>`

#### RW2 — "Work from here for a month"

- **Headline:** `Work from here` (Medium) / `for a month` (Bold)
- **Sub-line:** none.
- **Source photo:** `assets/photos/villa/Photos for Ads/pool-loungers-cocktails-sea-view.jpeg`
- **Mode:** B — **swap a prop.** Same reference as FG1, but a different moment.
  - *Add in:* `replace the Aperol bottle and spritz glasses on the side table
    with an open laptop and a coffee cup — the same lounger set-up, just dressed
    for a working morning.`
- **Scene-preserve:** the grey rattan sun loungers with navy cushions, the side
  table, the pool, the marina and bay view, the blue sky.
- **Lighting:** bright, warm Mediterranean midday.
- **Caption:** *331 Mbps fiber. Private villa above the Gulf of Roses. 5 min to
  the beach, 1.5 hrs to Barcelona, 40 min to Girona. Bring the family. Bring the
  laptop. Leave everything else. Ask about monthly rates →*
- **Asset folder:** `en-work-from-here-for-a-month-<YYYYMMDD>`

#### RW3 — "The view from the office"

- **Headline:** `The view` (Medium) / `from the office` (Bold)
- **Sub-line:** none.
- **Source photo:** `assets/photos/villa/03 - Main Living Area/living-room-marble-columns-arched-windows.jpeg`
- **Mode:** B — **add in.** An interior, looking out — the contrast of "office"
  word against a sea view is the joke.
  - *Add in:* `a tidy laptop workspace on a table set by the arched windows — an
    open laptop, a coffee, a notebook — with the sea clearly visible through the
    windows. Calm and uncluttered.`
- **Scene-preserve:** the main living room — the marble columns, the tall arched
  windows, the sea light coming through them.
- **Lighting:** bright natural daylight from the windows.
- **Caption:** *Most people log off to come somewhere like this. You'd be
  logging on. Villa Victoria — private home, panoramic sea views, fast Wi-Fi,
  Costa Brava. Check availability →*
- **Asset folder:** `en-view-from-the-office-<YYYYMMDD>`

#### RW4 — "Bring the family. Bring the laptop. Stay a while."

- **Headline:** `Bring the family. Bring the laptop.` (Medium) / `Stay a while.`
  (Bold)
- **Sub-line:** none.
- **Source photo:** `assets/photos/ai/AI Lifestyle Photos/hf_20260421_044630_cd4cbe37-8460-40b9-a806-1cce8b8bc6ad.png`
- **Mode:** B — **add in.** The photo already shows children in the pool and
  loungers with a breakfast tray; add the "laptop" half of the message.
  - *Add in:* `an open laptop and a coffee resting on one of the sun loungers —
    keep the children playing in the pool exactly as they are. The family and
    the work in one frame.`
- **Scene-preserve:** the pool with the two children on inflatables, the two sun
  loungers with the breakfast tray, the potted plants, the marina and bay
  panorama, the villa's terrace at right.
- **Lighting:** bright, warm Mediterranean midday.
- **Caption:** *Beach 5 minutes down the hill. Barcelona 90 minutes away. 331
  Mbps fiber. School holidays just got more interesting. Check availability →*
- **Asset folder:** `en-bring-family-bring-laptop-<YYYYMMDD>`

---

## 6. After generating each ad

For each finished ad, follow the `villa-lifestyle-ad` skill's record step:

1. **Download** `final.png` into `assets/ads/images/en-<slug>-<YYYYMMDD>/`
   (Higgsfield URLs expire — the local copy is the durable one).
2. **Write `meta.md`** in that folder — match the structure of the canonical
   example `assets/ads/images/en-best-holiday-whole-family-20260521/meta.md`:
   date, headline, sub-line, bottom lockup, persona, composition, source photo,
   the full prompt sent, the Higgsfield job ID, and the post caption.
3. **Append a row to `ads/registry.md`** — auto-increment `#`, add the headline
   to the collision list, and add the composition to the composition library.
   The registry's **Country** column records the target market; the asset
   folder stays `en`-prefixed (language, not country).
4. **Spot-check** the image: villa geometry intact, every word spelled
   correctly, `COSTA BRAVA, SPAIN` + `Book Villa Victoria today` present, no
   price or stay length anywhere, terracotta only on the rule / accent word /
   button. Re-run if the text renders wrong.

Never push to Meta Ads — generation only. Peter reviews and launches.
