# Villa Victoria — Ad Image Registry

Canonical record of every ad image generated through the `villa-ad-builder` skill (and any ad image added by hand).

**Why this exists:** Avoid duplicating headlines, motivator angles, or compositions across campaigns. Before generating a new ad, the skill MUST read this file and confirm the proposed concept is meaningfully different from anything already shipped or drafted.

**Update rule:** Every new generation appends one row to the table below. If an ad is killed or retired, update its `Status` rather than deleting the row — the negative record matters too.

---

## Active and historical ads

| # | Date | Country | Headline | Motivator(s) | Persona | Composition | Reference photo | Asset folder | Job ID | Status |
|---|------|---------|----------|--------------|---------|-------------|-----------------|--------------|--------|--------|
| 1 | 2026-05-02 | UK | TWO FAMILIES. ONE PERFECT WEEK. | #5 Effortless Base + #1 Sovereign Space | Friend-group families (Segment B) | Golden-hour terrace dinner, two families seated, kids in pool, sea backdrop | `assets/photos/villa/10 - Pool Area and Jacuzzi/pool-terrace-evening-sea-view.jpeg` | `assets/ads/images/uk-two-families-one-week-20260502/` | `a98c90c5-eaa4-4e21-99b1-600713560a01` | Launch-spec ready ([uk-ctwa-launch-spec.md](uk-ctwa-launch-spec.md)) — pending Peter manual launch in Ads Manager (MCP write blocked until rollout reaches account `951115744044583`) |
| 2 | 2026-05-06 | UK | COSTA BRAVA IS WHAT TUSCANY WAS, TWENTY YEARS AGO. (9:16) | #2 Insider Discovery | Tastemaker couples + friend-groups who've "done" Tuscany | Lifestyle pool hero + editorial typography (empty deck, towel + wine glass) | `assets/photos/villa/10 - Pool Area and Jacuzzi/pool-infinity-marina-sea-view.jpeg` | `assets/ads/images/uk-tuscany-twenty-years-ago-9x16-20260506/` | `dd7d54f3-f1f2-40b0-b202-5b17909717a6` | Draft |
| 3 | 2026-05-06 | UK | COSTA BRAVA IS WHAT TUSCANY WAS, TWENTY YEARS AGO. (1:1) | #2 Insider Discovery | Tastemaker couples + friend-groups who've "done" Tuscany | Lifestyle pool hero + editorial typography (empty deck, towel + wine glass) | `assets/photos/villa/10 - Pool Area and Jacuzzi/pool-infinity-marina-sea-view.jpeg` | `assets/ads/images/uk-tuscany-twenty-years-ago-1x1-20260506/` | `a60eee4d-34e0-40de-89dc-5b7230a34263` | Draft |
| 4 | 2026-05-06 | UK | CAP DE CREUS. CADAQUÉS. EMPORDÀ. ONE BASE. OURS. (9:16) | #2 Insider Discovery + #5 Effortless Base | Tastemaker couples; logistics-aware traveller | Aerial drone signature, villa lower two-thirds, sea horizon top, hover wordmark | `assets/photos/villa/01 - Drone Shots/hf_20260329_022201_d0b054ce-b101-4020-973e-ff19ec30e6f9.png` | `assets/ads/images/uk-cap-de-creus-one-base-9x16-20260506/` | `edbb7928-2dd1-43fe-a567-41bdc0b638fa` | Draft |
| 5 | 2026-05-06 | UK | CAP DE CREUS. CADAQUÉS. EMPORDÀ. ONE BASE. OURS. (1:1) | #2 Insider Discovery + #5 Effortless Base | Tastemaker couples; logistics-aware traveller | Aerial drone signature, villa lower two-thirds, sea horizon top, hover wordmark | `assets/photos/villa/01 - Drone Shots/hf_20260329_022201_d0b054ce-b101-4020-973e-ff19ec30e6f9.png` | `assets/ads/images/uk-cap-de-creus-one-base-1x1-20260506/` | `e10ff5f8-1d57-479f-bcb7-4de69a1ff531` | Draft |
| 6 | 2026-05-06 | UK | THE FORECAST SAID 13°C AND DRIZZLE. WE WERE ALREADY IN THE JACUZZI. (9:16) | #4 Adult Restoration | Burnt-out high-earner couples; shoulder-season UK | Couple poolside + editorial headline (jacuzzi sunset, three-quarter from behind) | `assets/photos/villa/10 - Pool Area and Jacuzzi/jacuzzi-sunset-sea-view.jpeg` | `assets/ads/images/uk-forecast-jacuzzi-13c-9x16-20260506/` | `b3d3a4ec-539d-4eed-a519-f0eb6cbf34a9` | Draft |
| 7 | 2026-05-06 | UK | THE FORECAST SAID 13°C AND DRIZZLE. WE WERE ALREADY IN THE JACUZZI. (1:1) | #4 Adult Restoration | Burnt-out high-earner couples; shoulder-season UK | Couple poolside + editorial headline (jacuzzi sunset, three-quarter from behind) | `assets/photos/villa/10 - Pool Area and Jacuzzi/jacuzzi-sunset-sea-view.jpeg` | `assets/ads/images/uk-forecast-jacuzzi-13c-1x1-20260506/` | `1cca9a5e-548b-4433-86c1-de5880b74be4` | Draft |
| 8 | 2026-05-21 | UK | BEST HOLIDAY FOR THE WHOLE FAMILY. (4:5) | #3 Memory & Legacy | Families travelling together — multi-age / multi-generational groups | Daytime infinity-pool hero, kids in pool + adults on loungers, marina panorama; unified Montserrat type system, "Costa Brava, Spain" tag + terracotta CTA button | `assets/photos/ai/AI Lifestyle Photos/hf_20260421_030700_903914fb-aaa5-4fe5-9266-aab7e5e0d43a.png` (AI lifestyle image) | `assets/ads/images/en-best-holiday-whole-family-20260521/` | `725e1981-52a9-47ec-8ade-0c4d8c4ba0e1` | Draft (alt "your kids" version in same folder, job `1d472800-2b23-49e6-b850-20252b0291bb`) |
| 9 | 2026-05-21 | UK | A HOLIDAY THAT WORKS FOR EVERYONE. (4:5) | #3 Memory & Legacy | Families travelling together — multi-age / multi-generational groups | Golden-hour aerial of the whole property — roof, infinity pool, terraces and garden in one frame; unified Montserrat type system, italic sub-line + soft dark scrims top/bottom, "Costa Brava, Spain" tag + terracotta CTA button | `assets/photos/ai/01 - Drone Shots/ai-drone-villa-aerial-pool-view.png` (AI aerial image) | `assets/ads/images/en-holiday-works-for-everyone-20260521/` | `561ae415-fa63-467c-ab4a-c55553021252` | Draft — creative F2 from `ads/Higgsfield/ad-generation-instructions.md` |

---

## Headline collision check (quick scan list)

When drafting a new headline, scan this list first. If your draft echoes any of these in pattern, structure, or core promise, rework it.

- *(UK)* TWO FAMILIES. ONE PERFECT WEEK. — value-split + privacy promise
- *(UK)* COSTA BRAVA IS WHAT TUSCANY WAS, TWENTY YEARS AGO. — destination comparison + taste-signaling
- *(UK)* CAP DE CREUS. CADAQUÉS. EMPORDÀ. ONE BASE. OURS. — specificity + sovereignty
- *(UK)* THE FORECAST SAID 13°C AND DRIZZLE. WE WERE ALREADY IN THE JACUZZI. — UK weather escape + restoration
- *(UK)* BEST HOLIDAY FOR THE WHOLE FAMILY. — family-togetherness hook (alt: "...for your kids. And then you.")
- *(UK)* A HOLIDAY THAT WORKS FOR EVERYONE. — multi-generational "something for every generation" hook

---

## Motivator coverage (UK)

Per-motivator ad count, against `uk-ad-motivators.md`'s five-motivator framework. Use this to spot under-covered angles. Each row in the main table counts; ratio variants of the same concept count as separate ads since they ship independently.

| # | Motivator | UK ads shipped |
|---|-----------|----------------|
| 1 | Sovereign Space | 1 (shared with #5) |
| 2 | Insider Discovery | 4 (rows #2/#3 standalone; rows #4/#5 shared with M5) |
| 3 | Memory & Legacy | 2 (rows #8/#9) |
| 4 | Adult Restoration | 2 (rows #6/#7) |
| 5 | Effortless Base | 3 (row #1 shared with M1; rows #4/#5 shared with M2) |

**Most under-covered right now:** #1 Sovereign Space (1). Bias next concepts toward it.

---

## Composition library (don't repeat)

| Composition | Used in ad # |
|---|---|
| Golden-hour terrace dinner, families + pool, sea backdrop | 1 |
| Lifestyle pool hero + editorial typography (empty deck, towel + wine glass) | 2, 3 |
| Aerial drone signature, hover wordmark, sea horizon top of frame | 4, 5 |
| Couple poolside, jacuzzi sunset, editorial headline above the figures | 6, 7 |
| Daytime infinity-pool hero, kids in pool + adults on loungers, marina panorama; unified type system + location tag + terracotta CTA button | 8 |
| Golden-hour aerial of the whole property — roof, pool, terraces and garden in one frame; unified type system + location tag + terracotta CTA button | 9 |
