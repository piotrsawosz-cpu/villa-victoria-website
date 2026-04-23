# Villa Victoria — Landing Page Structure & Copy

A planning document for the direct-booking landing page, before moving into Claude Design.

**Goal:** Capture qualified inquiries (availability check → direct contact) and reduce dependency on Airbnb/Booking commissions.
**Primary audiences:** Wealthy families with children · Couples · Groups of friends · Multi-generational families.
**Tone:** Warm, inviting, active, genuine, personal — "a knowledgeable local friend who happens to have a stunning house in Roses."
**Visual direction:** Coastal / Mediterranean. Sun-drenched palette — Mediterranean Blue `#1A4E7A`, Warm Sand `#D4A96A`, Terracotta `#C1603A`, Coastal Cream `#F5F0E8`.
**Languages:** Build in EN first; copy blocks structured so ES / FR / DE translations drop in cleanly.

---

## Page Structure at a Glance

| # | Section | Purpose |
|---|---|---|
| 1 | Hero (scroll-linked video) | Stop the scroll, establish view + warmth |
| 2 | Villa info + map | Fast facts left, location right |
| 3 | Filterable photo gallery | Let visitors explore the house by area |
| 4 | The Area (expandable activities) | Show Costa Brava as a playground |
| 5 | Availability calendar + contact | Primary conversion — book or message |
| 6 | Guest reviews | Social proof, real voices |
| 7 | FAQ | Remove last-mile friction |
|  | Footer | Contact, socials, languages |

Sticky header: logo left · EN / ES / FR / DE switch center · **Check availability** button right (terracotta `#C1603A`) that scrolls to Section 5.

---

## Section 1 — Hero

**Purpose:** Within 3 seconds, the visitor should feel the view, the warmth, and the promise of a private family home.

**Headline:** `Family Vacation Villa in Costa Brava, Spain`
**Subheadline:** `Three bedrooms. Panoramic sea views. One unforgettable week with the whole family.`
**Button:** `Check availability` (terracotta, primary) → scrolls to Section 5.

### Scroll-linked hero video

The hero background is a video that plays forward as the visitor scrolls — not on a loop and not on autoplay. Scroll position drives the video's current time, so the footage "unfolds" as they move down the page. The video starts at the jacuzzi with the sea behind, pulls back through the pool area, and reveals a general overview of the home (terrace, façade, drone pull-out).

**Source footage to use / stitch:**
- `Villa Victoria Photos/10 - Pool Area and Jacuzzi/jacuzzi-sunset-sea-view.jpeg` — opening frame composition reference
- `Villa Victoria Photos/01 - Drone Shots/hf_20260329_022429_47086ab6-9a70-4049-adf7-bcdd5a914df2.mp4` — the existing drone clip for the pull-out
- Consider a 10–15 second edit: close-up of water in the jacuzzi → widen to pool infinity edge → lift to drone-style pull-out showing the villa from above

**Technical notes for Claude Design:**
- Use a muted, autoplay-capable MP4 (H.264, `playsinline`, `muted`, `preload="auto"`)
- Attach `video.currentTime` to a throttled scroll listener (e.g. `requestAnimationFrame`) — map the first ~100vh of scroll to the video duration
- Provide a static poster image and a JPEG fallback for iOS Safari / low-power mode
- Keep the file under 6 MB; serve H.265 and WebM variants where supported
- Target: 1920×1080, 24 fps, no audio

**Overlay copy layout:**
- Headline centered, large, white with subtle drop shadow
- Subheadline directly below, lighter weight
- Button 32 px below subheadline
- Small trust strip at the very bottom of the frame: *★★★★★ · 10+ years of five-star guests · sleeps up to 10 · Roses, Costa Brava*

---

## Section 2 — Short Info About the Villa

**Purpose:** Answer the "what is this place and where is it" question in one screen.

**Layout:** Two equal columns (stack on mobile, stats first).

**Section headline (small, above columns):** *Everything you need. Nothing you don't.*

### Left column — Villa stats

Icon + label grid (2 × 5), no long descriptions:

- **3 Bedrooms + 1 sofa bed** — sleeps 8 comfortably, up to 10
- **3 Bathrooms**
- **Sea views** — from every main room
- **Private pool**
- **Sauna**
- **Jacuzzi**
- **Fully equipped kitchen**
- **BBQ area**
- **Home cinema**
- **Nightly rate** — *from €1,000 / night*

Short descriptor under the grid (one line):
> Villa Victoria is a private home set inside a natural park above Roses — built for long family stays, not quick turnovers.

### Right column — Location map

Interactive Google Map pin showing the villa's position on the mountain above Roses, with labelled distances:

- Beach — 5 min
- Roses town — 5 min
- Figueres / Dalí Museum — 25 min
- Girona — 40 min
- Barcelona — 1h 30
- Skiing (Pyrenees) — 2h

Alternative: a short 3–5 s aerial video looping above the map, pulling out from the villa to show the Gulf of Roses context. Then the pinned map below it.

Small caption under the map:
> *Carrer de la Pujada del Puig Rom, 85 · 17480 Roses, Girona · Costa Brava*

---

## Section 3 — Photo Gallery (Filterable)

**Purpose:** Let every type of visitor find the photo that sells them — the chef looks at the kitchen, the parent checks the garden, the couple zooms in on the jacuzzi.

**Layout:** A filter bar at the top (chip-style pills), gallery grid below. Clicking a filter smoothly rearranges the grid with a fade/masonry animation. Clicking an image opens a full-screen lightbox with swipe navigation and captions.

### Filter categories (chip order)

1. All photos *(default, selected)*
2. Pool
3. Kitchen
4. Bedroom 1 + Bathroom 1
5. Bedroom 2 + Bathroom 2
6. Bedroom 3 + Bathroom 3
7. Sauna
8. BBQ area
9. Home cinema
10. Garden
11. Eagle view *(drone shots)*

### Gallery source mapping

Each filter pulls from one folder in `Villa Victoria Photos/`:

| Filter | Source folder |
|---|---|
| All photos | `Villa Victoria Photos/All Photos/` |
| Pool | `10 - Pool Area and Jacuzzi/` |
| Kitchen | `04 - Kitchen Area/` |
| Bedroom 1 + Bathroom 1 | `11 - Bedroom 1/` + `12 - Bathroom 1/` |
| Bedroom 2 + Bathroom 2 | `13 - Bedroom 2 and Bathroom 2/` |
| Bedroom 3 + Bathroom 3 | `14 - Bedroom 3/` + `15 - Bathroom 3/` |
| Sauna | `10 - Pool Area and Jacuzzi/sauna-interior-wooden-benches.jpeg` |
| BBQ area | `08 - Outdoor Barbecue Area/` |
| Home cinema | `05 - Home Cinema Area/` |
| Garden | `09 - Garden Area/` |
| Eagle view | `01 - Drone Shots/` |

**Section headline options:**
1. **Take a look around.**
2. **Every corner of the villa. Pick where you want to start.**
3. **Step inside.**

**Short intro (1 line):** Click a tag to filter. Tap any photo to see it full-screen.

**Alt text pattern for accessibility + SEO:**
`[Area] at Villa Victoria — [short descriptor]`
*(e.g., "Pool at Villa Victoria — infinity edge overlooking the marina of Roses")*

**Design notes:**
- Use masonry-style grid, 3 columns desktop / 2 tablet / 1 mobile
- Lazy-load everything below the first row
- Keep filter chips sticky at the top of this section while scrolling inside it
- Serve WebP/AVIF versions, JPEG fallback

---

## Section 4 — The Area (Expandable Activities)

**Purpose:** Prove that Villa Victoria is a launchpad, not just a pretty house. Let visitors click into the activities that matter to *them*.

**Layout:** A grid of activity cards (image + icon + title + short one-line teaser). Clicking a card expands it inline (accordion-style) to reveal more detail — or opens a side drawer / modal on mobile. Always: one expanded at a time.

**Section headline options:**
1. **Ten perfect towns. One perfect base.**
2. **Costa Brava, beyond the guidebook.**
3. **Days as full — or as empty — as you want them.**

**Section intro (≈30 words):**
> From sailing the Gulf at sunset to skiing the Pyrenees in winter, Villa Victoria puts you in the middle of one of Spain's richest corners. Tap any activity to see what's possible.

### Activity cards

Each card has: icon · title · 1-line teaser (closed state), then an expanded block with 2–4 short paragraphs, distances/times, and a "who it's for" line.

**1. Watersport school for kids** *(teaser: Build confident little swimmers and sailors.)*
> A short drive down the hill, the beaches of Roses host family-run watersport schools — introductory sailing, paddleboarding, kayaking, and beginner windsurfing. Courses run by the morning or the week, in English, French, and Spanish.
> **Great for:** Kids 6+ · **Distance:** 5–10 min drive

**2. Sailing & motorboat trips** *(teaser: Take the Gulf of Roses for yourself, for a day.)*
> Charter a sailing yacht or motorboat from Roses marina with or without skipper. Cruise to the hidden coves of Cap de Creus, anchor for lunch, swim in crystal-clear water, come home for sunset.
> **Great for:** Couples and groups · **Half-day from ~€400**

**3. Fishing trips** *(teaser: Be back with dinner before the kids are up.)*
> Morning sea-fishing charters leave from Roses. Traditional rod fishing or local trolling techniques; the catch is yours to bring back to the villa BBQ.
> **Great for:** First-timers and hobbyists

**4. Scuba diving** *(teaser: One of Spain's best Mediterranean dive sites.)*
> The Medes Islands marine reserve (~45 min south) is Catalonia's most protected underwater area. Local dive centres in Roses and L'Estartit run PADI courses for first-timers and guided dives for certified divers.
> **Great for:** Certified divers, curious beginners

**5. Hiking** *(teaser: The Camí de Ronda starts at your doorstep.)*
> The coastal path Camí de Ronda winds all the way to Cap de Creus — dramatic cliffs, turquoise coves, and the wild headland that inspired Dalí. Shorter loops leave directly from the villa into the natural park.
> **Great for:** Everyone · **From a 30-min stroll to a full day**

**6. Sightseeing — museums & nearby cities** *(teaser: Dalí, medieval Girona, Barcelona in a day.)*
> Visit the Dalí Theatre-Museum in Figueres (25 min), walk Girona's medieval quarter (40 min), or make a full Barcelona day trip (1h 30). Closer by: Cadaqués, Castelló d'Empúries, Empúries Roman ruins.
> **Great for:** Culture-hungry visitors, rainy days

**7. Going to the beach** *(teaser: Family-friendly sand, five minutes downhill.)*
> Roses' main beach is calm, shallow, and well-serviced — ideal for young kids. For something wilder, drive 15 min to the coves of Montjoi and Jóncols; 20 min to Cadaqués for the prettiest seaside village on the Costa Brava.
> **Great for:** Families, couples, everyone

**8. Cycling** *(teaser: E-bikes, coastal routes, and mountain trails.)*
> Rent e-bikes in Roses for an easy ride along the Gulf, or push into the hills on mountain bike trails through the natural park. The Vies Verdes greenways offer longer, car-free routes through the countryside.
> **Great for:** Active families, cycling enthusiasts

**9. Running** *(teaser: Trails right outside the front door.)*
> The villa is inside a protected natural park — trails start directly from the property. Early-morning runs with the sunrise over the Gulf are a guest favourite.
> **Great for:** Runners who like scenery

**10. Golf** *(teaser: Championship courses within 30 minutes.)*
> Empordà Golf (~20 min) is one of Catalonia's top courses, regularly hosting European tour events. Peralada and Torremirona are also close by — multi-course packages easy to arrange.
> **Great for:** Golfers of every handicap

**11. Food** *(teaser: Michelin stars, village markets, and fish straight off the boat.)*
> Costa Brava is one of the most celebrated food regions in the world. Book El Celler de Can Roca in Girona (three Michelin stars). Eat anchovies in L'Escala. Wander Roses' market and cook it all back at the villa. We can recommend where to go at every budget.
> **Great for:** Everyone who eats

**Design notes:**
- Icons from a minimal line set (e.g., Lucide) — consistent stroke weight
- Closed cards in a 3-column grid (desktop), 2 (tablet), 1 (mobile)
- Smooth expand animation (max 300 ms), scroll the expanded card into view
- Optional: a "Tell us what you like, we'll plan your week" CTA at the bottom of the section

---

## Section 5 — Availability & Contact (Primary Conversion)

**Purpose:** Turn warm interest into a message. Offer both a calendar check *and* direct contact for the guests who'd rather just pick up the phone.

**Layout:** Full-width, cream background (`#F5F0E8`). Two-column card inside:

### Left column — Availability calendar

An embedded 2-month-at-a-glance calendar with booked / available dates pulled from a single source of truth. Options to consider:
- **Recommended:** Use iCal feeds from Airbnb and Booking.com, syncing into a widget like **Hospitable**, **Smoobu**, or **Lodgify** — so availability is always current without manual work
- Alternative: a simple FullCalendar widget that reads an iCal file

Above the calendar:
> **Check your dates.**
> *Live availability, synced with Airbnb and Booking.com. Pick your week and send a quick message — we'll confirm within a few hours, usually the same day.*

Below the calendar, a compact inquiry strip:
- Check-in / check-out (auto-filled from calendar selection)
- Number of guests (adults / children)
- Name · Email · (optional) Phone / WhatsApp
- Short message field — *"Tell us a bit about your trip"*
- Primary button: **Send inquiry** (terracotta)

Microcopy under the button:
> *From €1,000 per night · no fees to inquire · reply within a few hours.*

### Right column — Direct contact

For visitors who'd rather skip the form. Large, clickable:

- 📞 **Phone:** *(Peter's number)* — `tel:` link on mobile
- 💬 **WhatsApp:** *Message us* — opens `wa.me` with a pre-filled "Hi, I'm interested in Villa Victoria for [dates]…"
- ✉️ **Email:** `piotr.sawosz@gmail.com` — `mailto:` link

Above the contact list, a short line:
> **Or reach out directly.**
> *Villa Victoria is owner-managed, which means you hear back from us — not a call centre.*

**Design notes:**
- Availability calendar gets visual priority (65/35 split on desktop)
- On mobile, calendar first, then inquiry form, then direct contact
- Use Mediterranean Blue (`#1A4E7A`) for calendar header, Terracotta (`#C1603A`) for the primary CTA

---

## Section 6 — Guest Reviews

**Purpose:** Social proof from people who've actually stayed. Real quotes from your Airbnb reviews.

**Layout:** Horizontal card carousel (swipeable on mobile, arrow-navigated on desktop). 4–6 visible at a time. Star count + "via Airbnb" badge on each card.

**Section headline options:**
1. **Don't take our word for it.**
2. **What past guests say when they get home.**
3. **Over a decade of five-star stays.**

### Curated quotes (verbatim from your Airbnb review screenshots)

> "Villa Victoria was perfect for our family of five. Our teenagers greatly enjoyed the hammock, and we all made great use of the beautiful pool and enjoyed the stunning views."
> — **Betsy**, Chicago · ★★★★★ · *Stayed with kids*

> "An incredible view of the bay makes this an exceptional place for a holiday. You can look down on the sea, and out across the mountains, from the pool and the hot tub, while also enjoying beautiful sunsets."
> — **Stefan** · ★★★★★

> "My family and I had an amazing time playing in the pool, sipping drinks on the terrace and admiring the breathtaking views. Michal was brilliant and everything we could think of was already taken care of."
> — **Simon** · ★★★★★

> "Everything from the house to the garden and the view creates a sense of harmony and luxury. The owners meticulously cared for every detail. Peace and quiet, no curious neighbors."
> — **Natalia** · ★★★★★

> "Quality and hospitality above and beyond expectations. Unforgettable view on Roses Bay."
> — **Sergey** · ★★★★★

> "Beautiful property. Close to everything, you can walk to town if needed. Incredible views, comfortable beds. We will be back!"
> — **Chelsea**, Los Angeles · ★★★★★

**Design notes:**
- Cards: Coastal Cream background, Charcoal Olive body text, small gold stars
- Include a "Read more reviews on Airbnb →" link at the end pointing to [airbnb.com/rooms/18872378](https://www.airbnb.com/rooms/18872378)

---

## Section 7 — FAQ

**Purpose:** Kill the last objections. Answer what people ask before they even ask.

**Layout:** Accordion. Max 8 items. Clean, quiet styling.

1. **How many people can the villa sleep?** — 8 comfortably in the three bedrooms; up to 10 with the sofa bed for flexible groups.
2. **Is it suitable for children?** — Absolutely — families are our favourite guests. Space to run, a private pool, inside a quiet natural park. We can arrange cots, high chairs, and child-friendly extras on request.
3. **What's the minimum stay?** — 5 nights in high season; flexible in the shoulder seasons. Ask us.
4. **How do I get there?** — Fly into Girona (~40 min from the villa) or Barcelona (~90 min). We can arrange a transfer.
5. **Is there a chef or concierge?** — Not in-house, but we work with trusted local contacts for private chefs, boat charters, childcare, and activity bookings. Tell us what you'd like and we'll arrange it.
6. **Is the villa pet-friendly?** — *(Peter to confirm.)*
7. **What's included?** — Pool, jacuzzi, sauna, BBQ, Wi-Fi, fully equipped kitchen, linens and towels, and a warm welcome from our local team.
8. **Can we book directly?** — Yes — that's what this page is for. Use the calendar above, or message us directly. We'll confirm within a few hours.

---

## Footer

- Left: Villa Victoria logo + *Roses, Costa Brava, Spain*
- Center: Language switcher (EN · ES · FR · DE) · © Villa Victoria
- Right: Instagram ([@villa_victoria_spain](https://www.instagram.com/villa_victoria_spain/)) · Facebook ([VillaVictoriaSpain](https://www.facebook.com/VillaVictoriaSpain/)) · WhatsApp · Email
- Tiny print: Privacy · Terms · Also listed on Airbnb and Booking.com

---

## Copy Bank — Extras to Have Ready

Short lines you can reuse for meta descriptions, ads, OG tags, or sprinkled through the page.

**One-liner descriptions (SEO / meta / OG):**
- Villa Victoria — a 3-bedroom family vacation villa above Roses, Costa Brava, with pool, jacuzzi, sauna, and panoramic Gulf views. Sleeps up to 10, from €1,000 / night.
- A private villa on the Costa Brava, set inside a natural park above Roses. Pool, jacuzzi, sauna, and a view you won't stop talking about.

**Button microcopy variants (for A/B later):**
- *Check availability* · *See your dates* · *Start your week*

**Emotional pullquotes (for breaking up scroll):**
- *"Mornings on the terrace. Afternoons in the sea."*
- *"Peace and quiet. No curious neighbours."* (real review)
- *"The kind of morning you didn't know you needed."*

---

## Design Notes for Claude Design

- **Grid:** 12-column, generous whitespace; sections at 80–120 px vertical padding.
- **Type:** Montserrat for headings (Bold → Light), Inter for body.
- **Buttons:** Terracotta primary (`#C1603A`), 6–8 px radius, generous padding. Mediterranean Blue for secondary/ghost.
- **Imagery:** Golden-hour / warm tones. Avoid cold blue-tint crops.
- **Motion:** Quiet — the scroll-linked hero video is the showstopper; everything else should fade in softly.
- **Mobile:** Gallery grid becomes single-column with sticky filter chips. Activity cards expand as full-width drawers.
- **Performance:** Compressed WebP/AVIF below the fold, lazy-load everything but the hero. Preload hero poster and first frame of the video.
- **i18n:** Every text block a separate string key. Leave 30% extra width for German; French is shorter but watch smart-quote differences.

---

## Open Questions for Peter

1. Is €1,000 / night year-round, or does it vary by season? Minimum stay per season?
2. Are pets allowed?
3. What's the best phone number to show publicly, or do we prefer WhatsApp-only for first contact?
4. Do you want the calendar to sync live from Airbnb + Booking.com (recommended — requires a tool like Hospitable, Smoobu, or Lodgify), or should we start with a manually-updated one?
5. Any chef / concierge partners we should name, or keep it generic "we can arrange"?
6. GDPR / legal pages — exist already or need drafting?
