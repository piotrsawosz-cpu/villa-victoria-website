# Villa Victoria — SEO & AEO Audit and Remediation Plan

*Site: villavictoriaspain.com · Audit date: 6 September 2026 · Data window: 12 months to 3 September 2026*

> **One-line summary:** The site earns 95 organic clicks a year because it has exactly one page Google is allowed to read, and that page contains no readable text in its HTML source. Everything you have actually written is either blocked or invisible.

---

## 1. Executive summary

Villa Victoria has been indexed since 2 May 2026. In the four months since, it has produced:

**95 clicks · 2,296 impressions · 4.14% CTR · average position 19.7**

That is roughly 24 clicks a month, flat, with average position stuck near 20 and never breaking 18. Every single click came from someone searching your brand name. In twelve months, not one person has found this site by searching for a villa.

The reason is not competition, budget, or backlinks. It is that there is almost nothing for a search engine to index:

1. **The homepage is the only indexable URL on the site.** It renders its content with React and Babel in the browser, so its HTML source contains six words of text. Google renders it (confirmed indexed), but AI answer engines do not — so for ChatGPT, Claude, Perplexity and Google's AI surfaces, this site is functionally blank.
2. **Every content-rich page is hidden on purpose.** `/book`, `/book-now`, `/book-fr`, `/book-de`, `/book-ru`, `/book-ar` all carry `noindex, nofollow`, and `/book` is additionally blocked in `robots.txt`. Search Console confirms Google has **never crawled them once**. That is roughly 17,000 characters of good, translated sales copy earning nothing.
3. **Google does not know which Villa Victoria you are.** The brand term "villa victoria" draws 413 impressions at position 21.5, scattered across a dozen unrelated countries. Even "villa victoria roses" — as specific as it gets — sits at position 2.6, not 1.

The encouraging part: most of this is cheap to fix, and the assets already exist. France and Germany are already your best-ranking markets (positions 8.1 and 9.2) on an English page — and you have finished French and German pages sitting in the repository with `noindex` on them. Publishing what you have already written is the highest-return action available and requires no new copy.

**A note on the previous SEO work.** `context/seo-and-indexing.md` records Phase 1 (May 2026) as successful: schema, canonical, Open Graph, sitemap, all verified. Those were done correctly. But they were applied to a page with no readable content, while the pages that had content stayed blocked. The foundations are sound; they were poured under an empty building.

---

## 2. Scorecard

Severity: **P0** = actively preventing ranking · **P1** = capping ranking · **P2** = limiting growth

| # | Finding | Severity | Current | Target |
|---|---|---|---|---|
| 1 | Content pages excluded from search | **P0** | 6 pages `noindex, nofollow` | 6 pages indexable |
| 2 | `robots.txt` blocks `/book` | **P0** | `Disallow: /book` | Removed |
| 3 | Booking pages never crawled | **P0** | "URL is unknown to Google" | Indexed |
| 4 | Homepage HTML contains no text | **P0** | 6 words in source | Full copy server-rendered |
| 5 | React **development** builds in production | **P0** | ~2.5 MB JS + in-browser Babel | Production builds, no Babel |
| 6 | Sitemap lists 1 URL | **P1** | 1 submitted, 0 indexed | All real URLs |
| 7 | No `hreflang` anywhere | **P1** | 0 tags, 5 language variants | Full reciprocal cluster |
| 8 | No canonical on content pages | **P1** | 0 of 6 | 6 of 6 |
| 9 | Structured data on wrong page | **P1** | Schema on empty page only | Schema on content pages |
| 10 | Entity collision on brand name | **P1** | "villa victoria" position 21.5 | Position 1–2 |
| 11 | Mobile page weight | **P1** | 53 MB media, 13 MB hero video | < 2 MB initial load |
| 12 | Images lack dimensions | **P1** | 0 of 27 have width/height | All, + LCP preload |
| 13 | Contradictory occupancy facts | **P1** | "8" and "10" both published | One number everywhere |
| 14 | No topical content | **P2** | 0 guides, 0 blog posts | Content programme live |
| 15 | No `llms.txt` | **P2** | 404 | Published |
| 16 | GA4 likely double-counting | **P2** | gtag + GTM both firing | One path |
| 17 | GA4 timezone wrong | **P2** | `Atlantic/Canary` | `Europe/Madrid` |

---

## 3. What the Search Console data actually shows

All figures pulled live on 6 September 2026 from `sc-domain:villavictoriaspain.com`.

### 3.1 Performance is flat

| Month | Clicks | Impressions | Avg position |
|---|---|---|---|
| 2026-05 | 23 | 306 | 20.7 |
| 2026-06 | 17 | 535 | 20.4 |
| 2026-07 | 29 | 761 | 20.3 |
| 2026-08 | 25 | 647 | 18.1 |
| 2026-09 (3 days) | 1 | 47 | 16.1 |

Impressions grew through July then fell back. Clicks never left the 17–29 band. Position has improved by two places in four months. **This is a plateau, not a ramp** — the site has reached the ceiling of what one thin page can achieve.

### 3.2 Every query is your own name

| Query | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|
| villa victoria roses | 34 | 142 | 23.9% | **2.6** |
| villa victoria | 7 | 413 | 1.7% | **21.5** |
| villa victoria photos | 3 | 14 | 21.4% | 6.9 |
| victoria villa | 1 | 69 | 1.4% | 29.9 |
| villa victoria fotos | 1 | 20 | 5.0% | 3.0 |
| villas victoria | 1 | 28 | 3.6% | 16.1 |

Two things to take from this.

**First: there is no non-branded traffic at all.** Not "a little" — none. No "villa costa brava private pool", no "villa roses sea view", no "family villa spain". The remaining tail is noise, one impression each: *hotel calahonda*, *hotel mijas spain*, *carte costa brava*, *clima villa victoria*. Those are Google guessing, not demand.

**Second: where you do rank, you convert extremely well.** "villa victoria roses" converts at 23.9% and "villa victoria photos" at 21.4%. When the right person finds you, the site works. The problem is purely that almost nobody is being shown it.

### 3.3 The entity collision, measured

"villa victoria" is a common name. Filtering that query by country:

| Country | Impressions | Clicks | Position |
|---|---|---|---|
| Spain | 80 | 6 | 13.2 |
| Belgium | 4 | 1 | 20.2 |
| Australia | 13 | 0 | 21.6 |
| Switzerland | 14 | 0 | 32.1 |
| Brazil | 5 | 0 | 23.6 |
| Canada | 4 | 0 | 8.2 |
| Colombia, Cyprus, Bulgaria, Argentina, Andorra, Angola | 1–2 each | 0 | 4–35 |

Google is showing this site to people in Angola and Argentina searching for a completely different Villa Victoria, and it never wins those impressions. A web search confirms at least one other **"Villa Victoria" in Roses itself** — Canyelles Petites, let by K. Maetzing from €101/night, listed on `ferienwohnungen.de` and `tourist-paradise.com`.

This matters more for AEO than for SEO. A language model asked "what is Villa Victoria in Roses?" has two properties with the same name in the same town, and one of them has far more third-party citations. Without disambiguation signals, the model either conflates them or declines to answer.

### 3.4 Only two URLs have ever been seen

| Page | Clicks | Impressions | Position |
|---|---|---|---|
| `https://villavictoriaspain.com/` | 94 | 2,289 | 19.7 |
| `http://villavictoriaspain.com/` | 1 | 8 | 14.6 |

That is the entire site, as far as Google is concerned. (The `http://` row is a minor protocol duplicate worth redirecting.)

Direct URL inspection of the booking pages:

```
/book      → verdict: NEUTRAL
             coverageState: "URL is unknown to Google"
             lastCrawlTime: None

/book-de   → verdict: NEUTRAL
             coverageState: "URL is unknown to Google"
             lastCrawlTime: None
```

Note the wording: not "crawled, currently not indexed" — **unknown**. Google has never fetched these URLs. The `robots.txt` `Disallow` prevented discovery, and because Google could never fetch the page, it could never even read the `noindex` tag inside it.

**Sitemap status:** 1 URL submitted, **0 indexed**, last downloaded 6 September 2026.

### 3.5 Mobile is where this site works

| Device | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|
| **Mobile** | 73 | 878 | **8.31%** | **10.1** |
| Desktop | 22 | 1,402 | 1.57% | 25.8 |
| Tablet | 0 | 16 | 0% | 7.2 |

Mobile gets *fewer* impressions than desktop but produces **three times the clicks**, ranks fifteen positions higher, and converts at five times the rate. Your read that this is a mobile-first property is correct, and every prioritisation decision below follows from it — particularly the Core Web Vitals work, which is a mobile problem specifically.

### 3.6 France and Germany are already outperforming

| Country | Clicks | Impressions | Position |
|---|---|---|---|
| Spain | 52 | 455 | 14.0 |
| **France** | 19 | 106 | **8.1** |
| UK | 7 | 220 | 21.2 |
| Belgium | 3 | 32 | 12.1 |
| Poland | 3 | 17 | 22.1 |
| **Germany** | 2 | 71 | **9.2** |
| Switzerland | 2 | 28 | 21.6 |
| USA | 2 | 558 | 23.2 |
| Netherlands | 1 | 124 | 13.5 |

**France ranks at 8.1 and Germany at 9.2 — your two best positions of any market — on an English-language page.** You have completed French and German translations of `/book` sitting in the repository right now, and both are `noindex`ed.

This is the single clearest opportunity in the audit: proven demand, finished assets, one meta tag standing between them.

(USA's 558 impressions at position 23.2 with 2 clicks is collision noise from the name, not latent American demand.)

---

## 4. Findings and fixes

### P0-1 · Six content pages are excluded from search

**Where:** `website/book.html`, `book-now.html`, `book-fr.html`, `book-de.html`, `book-ru.html`, `book-ar.html`

Every one carries:

```html
<meta name="robots" content="noindex, nofollow"/>
```

`/book` alone holds ~17,000 characters of well-written copy: seven `<h2>` sections, a full amenity list, twelve named guest reviews, a location description and a photo tour. `/book-now` has fourteen `<h2>` sections of conversion-focused copy. None of it can rank.

The `nofollow` compounds this: it also tells Google not to follow the links *out* of these pages, including the language-switcher links between the five translations. Even if you removed `noindex` alone, the pages would not pass authority to each other.

**Fix:** delete the meta robots tag from all six. Keep `noindex` only on `contact-confirmation.html`, where it is correct — that is a redirect interstitial with no standalone value.

---

### P0-2 · `robots.txt` blocks the pages, hiding their own `noindex`

**Where:** `website/robots.txt`

```
User-agent: *
Allow: /
Disallow: /book
Disallow: /book.html
```

This is a classic and damaging combination. `Disallow` blocks *crawling*; `noindex` controls *indexing*. When a page is disallowed, Google never fetches it, so it never sees the `noindex` inside — the directives cancel each other into "Google knows nothing about this URL". Search Console's "URL is unknown to Google" is exactly that state.

Note also that `Disallow: /book` is a prefix match, so it blocks `/book-fr`, `/book-de`, `/book-ru` and `/book-ar` too, even though they are never named.

**Fix:**

```
User-agent: *
Allow: /

Sitemap: https://villavictoriaspain.com/sitemap.xml
```

Order matters when you deploy: remove the `Disallow` **and** the `noindex` tags in the same release. Removing only the `Disallow` would let Google finally fetch the pages and read `noindex` — actively confirming their exclusion.

---

### P0-3 · The homepage renders no text in its HTML

**Where:** `website/index.html`

The entire body is:

```html
<div id="top"></div>
<div id="root"></div>
```

Everything else is assembled in the browser from ten JSX files. Fetched as a crawler, the page yields **35 characters — six words** — all of it the `<title>`. There is no `<h1>` and no `<h2>` anywhere in the document.

**Be precise about who this hurts.** Google *does* render JavaScript, and Search Console confirms the page is `"Submitted and indexed"`, `crawledAs: MOBILE`, `verdict: PASS`. So this is not why Google can't index you. But it has three real costs:

- **Rendering is deferred and budget-limited.** Google queues JS rendering separately from crawling. For a small site this means slower, less reliable recrawls, and content changes taking longer to register.
- **AI crawlers do not render at all.** GPTBot, ClaudeBot, PerplexityBot and most AI retrieval agents fetch raw HTML and stop. For every one of them, this site is a title and nothing else. **This is the single biggest AEO problem you have** — and AEO is where booking research increasingly starts.
- **No text means no keyword signals.** Ranking at 19.7 on a page whose source Google must execute code to read is not a coincidence.

**Fix (interim, Wave 1):** pre-render. Ship the real copy as static HTML inside `index.html` and let React hydrate over it. The content already exists in the JSX components — it needs to exist in the source too.

**Fix (proper, Wave 2):** the Astro migration already scoped in `context/seo-and-indexing.md` § Phase 3. That plan is sound and its architectural decisions are already made; this audit does not revisit them.

---

### P0-4 · React development builds are shipped to production

**Where:** `website/index.html`

```html
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js"></script>
```

Three separate problems in three lines:

1. **`.development.js`** builds include the full warning and dev-tooling apparatus. They are several times larger than production builds and meaningfully slower. These must never be public.
2. **`@babel/standalone`** ships a complete JavaScript compiler to every visitor, which then transpiles ten JSX files *in the browser, on every single page load*. This is a build step being performed on your users' phones.
3. **`unpkg.com`** is an unfunded community CDN with no uptime guarantee. If it is slow or down, your site does not render at all. It is also a third-party dependency in your critical path.

Given that 77% of your clicks are mobile, this is your Core Web Vitals problem in a nutshell.

**Fix (immediate, Wave 0):** switch to `.production.min.js` from a pinned CDN. One-line change, immediate improvement, zero risk.

**Fix (proper, Wave 2):** the Astro build removes Babel from the browser entirely.

---

### P1-1 · Sitemap lists one URL

**Where:** `website/sitemap.xml` — one `<loc>`, the homepage. Search Console: 1 submitted, 0 indexed.

**Fix:** once the pages are unblocked, list every real URL with `hreflang` alternates:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://villavictoriaspain.com/</loc>
    <lastmod>2026-09-06</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://villavictoriaspain.com/book</loc>
    <lastmod>2026-09-06</lastmod>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://villavictoriaspain.com/book"/>
    <xhtml:link rel="alternate" hreflang="fr" href="https://villavictoriaspain.com/book-fr"/>
    <xhtml:link rel="alternate" hreflang="de" href="https://villavictoriaspain.com/book-de"/>
    <xhtml:link rel="alternate" hreflang="ru" href="https://villavictoriaspain.com/book-ru"/>
    <xhtml:link rel="alternate" hreflang="ar" href="https://villavictoriaspain.com/book-ar"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://villavictoriaspain.com/book"/>
  </url>
  <!-- repeat the same alternates block on each language URL -->
</urlset>
```

---

### P1-2 · No `hreflang`, and language switching is invisible to Google

**Two separate problems.**

**On the `/book` family:** five translated pages exist with zero `hreflang` tags. Without them Google may treat them as duplicates, or serve the wrong language to the wrong market — the markets already ranking at 8.1 and 9.2.

Each page needs the full reciprocal set (every page lists every version, including itself), plus a self-canonical:

```html
<link rel="canonical" href="https://villavictoriaspain.com/book-de"/>
<link rel="alternate" hreflang="en" href="https://villavictoriaspain.com/book"/>
<link rel="alternate" hreflang="fr" href="https://villavictoriaspain.com/book-fr"/>
<link rel="alternate" hreflang="de" href="https://villavictoriaspain.com/book-de"/>
<link rel="alternate" hreflang="ru" href="https://villavictoriaspain.com/book-ru"/>
<link rel="alternate" hreflang="ar" href="https://villavictoriaspain.com/book-ar"/>
<link rel="alternate" hreflang="x-default" href="https://villavictoriaspain.com/book"/>
```

**On the homepage:** language is switched via `localStorage` only — `website/components/i18n.js:540,547`:

```js
const saved = (typeof localStorage !== 'undefined' && localStorage.getItem('vv-lang')) || 'en';
localStorage.setItem('vv-lang', lc);
```

Four languages (EN/ES/FR/DE) share one URL with no way to link to a specific one. Google can only ever index the English version. This is not fixable with tags — it needs per-language URLs, which is Wave 2.

**Also inconsistent:** `index.html` declares `og:locale:alternate` for `es_ES`, but no Spanish page exists. Meanwhile Russian and Arabic pages *do* exist and are not declared. And the homepage i18n covers ES while the `/book` family does not — while `/book` covers RU and AR which the homepage does not. Worth a deliberate decision about which languages you actually want to support.

---

### P1-3 · Structured data is on the wrong page

`website/index.html` carries a well-formed `LodgingBusiness` block with address, geo coordinates, amenities and `sameAs` links. It is genuinely good work. It sits on the page with no content, while the six pages full of content have **no structured data at all**.

Beyond relocating it, several high-value types are missing:

**`FAQPage`** — eight complete Q&As already exist in `website/components/FaqSection.jsx` (minimum stay, capacity, price, location, transport, family suitability, inclusions, how to book). These are exactly the questions an answer engine wants, and they are currently invisible to every crawler.

**`Review` and `AggregateRating`** — twelve named reviews with authors, origins and dates sit in `website/components/ReviewsSection.jsx`, sourced from Airbnb and Google. Review stars are among the strongest CTR levers in travel SERPs.

**Real pricing.** Current schema says:

```json
"priceRange": "€€€€"
```

You know the actual number. Give it:

```json
"makesOffer": {
  "@type": "Offer",
  "priceSpecification": {
    "@type": "UnitPriceSpecification",
    "price": 1300,
    "priceCurrency": "EUR",
    "unitCode": "DAY"
  },
  "availability": "https://schema.org/InStock"
}
```

**Also worth adding:** `Accommodation` sub-entities per bedroom (you have three with distinct configurations), `BreadcrumbList`, `checkinTime`/`checkoutTime`, and a `Person` entity for Piotr — the host bio is a genuine E-E-A-T signal currently marked up as ordinary text.

---

### P1-4 · Google cannot tell which Villa Victoria you are

Quantified in §3.3. The fix is a cluster of consistent signals, not one tag:

1. **Google Business Profile.** The most important item in this entire audit that cannot be done in code. A verified GBP with the exact address, coordinates, photos and category creates the authoritative entity record that both Google and AI systems anchor to. It also unlocks Maps, which is where a great deal of accommodation discovery actually happens.
2. **Name the entity distinctly.** Prefer "Villa Victoria Roses" or "Villa Victoria Costa Brava" in `<title>`, schema `name`, and page copy. "Villa Victoria" alone is unwinnable.
3. **Expand `sameAs`.** Currently Instagram, Facebook, Airbnb. Add Google Business Profile, Booking.com, and any directory listing. Each is a corroborating link in the entity graph.
4. **Add `identifier` and `alternateName`** to the schema to make the disambiguation explicit.
5. **Use the address as a distinguishing fact in copy.** "Villa Victoria on Puig Rom, above Roses" is unambiguous in a way the name alone never will be.

---

### P1-5 · Mobile page weight

`website/media/` totals **53 MB**:

| Asset | Size |
|---|---|
| `hero.mp4` | 13 MB |
| `media/gallery/` | 20 MB |
| `media/hero-frames/` (121 files) | 11 MB |
| `media/activities/watersports.mp4` | 7.3 MB |
| `gallery/eagle-view.webp` (single image) | 1.5 MB |

`website/components/Hero.jsx` preloads a **121-frame WebP sequence** to drive a scroll-scrubbed canvas animation. It is a lovely effect and it is expensive: on a phone on hotel wifi, that is 11 MB before the hero settles.

Given that mobile drives 77% of your clicks, this is a revenue issue, not a technical nicety.

**Fixes, in order of return:**
- Compress gallery images to ≤200 KB (from 1.5 MB — roughly 87% saving at no visible quality cost at display size)
- Serve a reduced hero sequence on mobile (every third frame ≈ 40 frames), or a static hero image below 768px
- `preload="none"` on `hero.mp4`, load on interaction
- Add `width`/`height` to all 27 images on `/book` — currently **zero** have them, which guarantees layout shift
- `fetchpriority="high"` plus `<link rel="preload">` on the LCP image; `loading="lazy"` on the rest (only 3 of 27 are lazy today)

---

### P1-6 · Your published facts contradict each other

| Source | Capacity |
|---|---|
| `index.html` schema `occupancy.maxValue` | **10** |
| `index.html` meta description | "Sleeps up to 10" |
| `book-now.html` | "Sleeps up to 8" |
| `FaqSection.jsx` | "Up to eight guests" |
| `context/property-profile.md` | 8 comfortable, 10 maximum |

The underlying truth is clear enough, but the published numbers disagree. For classic SEO this is untidy. **For AEO it is disqualifying** — when a language model finds conflicting figures for the same property, the safe behaviour is to hedge or omit, so you lose the citation entirely.

**Fix:** state it once, precisely, everywhere: *"Sleeps 8 comfortably, up to 10 with the additional sofa bed."* Then reflect that in schema:

```json
"occupancy": { "@type": "QuantitativeValue", "value": 8, "maxValue": 10 }
```

Treat `context/property-profile.md` as the single source of truth and check every new page against it.

---

### P2-1 · There is no content to rank

No blog, no guides, no location pages. The site is a single-property brochure. The absence of non-branded impressions in §3.2 is the direct measurement of this.

You cannot rank for "things to do in Roses" without a page about things to do in Roses. Section 6, Wave 3 covers the programme; Section 8 (the playbook) covers how to build each page correctly.

---

### P2-2 · AEO-specific gaps

**No `llms.txt`** — `https://villavictoriaspain.com/llms.txt` returns 404. This emerging convention gives AI crawlers a clean, structured summary. It is a ten-minute file:

```markdown
# Villa Victoria

> A 3-bedroom luxury villa above Roses on the Costa Brava, Catalonia, Spain,
> with panoramic views over the Gulf of Roses. Private pool, jacuzzi, sauna.
> Sleeps 8 comfortably, up to 10. €1,300 per night. Minimum stay 7 nights.
> Booked directly with the owner, Piotr.

## Key facts
- Location: Carrer de la Pujada del Puig Rom 85, 17480 Roses, Girona, Spain
- Coordinates: 42.254755, 3.185012
- Bedrooms: 3 · Bathrooms: 3
- Rate: €1,300/night · Minimum stay: 7 nights
- Distances: Girona 40 min · Barcelona 1h45 · French border 30 min

## Pages
- [Book direct](https://villavictoriaspain.com/book): full details, photos, reviews
- [FAQ](https://villavictoriaspain.com/book#faq): stay length, capacity, access

## Contact
WhatsApp +34 692 852 918 · VillaVictoriaSpain@gmail.com
```

**No crawlable FAQ** — covered in P1-3. The eight answers exist; nothing can read them.

**Thin citation surface.** AI systems weight corroboration across independent sources. You appear on Airbnb, Instagram and Facebook. Booking.com, a Google Business Profile, and a handful of Costa Brava travel directories would materially strengthen the entity.

---

### P2-3 · Analytics hygiene

Two defects found while pulling data. Neither is SEO, both distort measurement.

**Probable double-counting.** Commit `4473710` (2 May) removed hardcoded gtag.js with the message *"GA4 now fires via GTM"* (container `GTM-5R9R4TBZ`). Commit `a2653af` (today) re-added hardcoded gtag.js for `G-NJYD4XPQ49` on every page. Unless the GA4 tag inside the GTM container was removed, **every pageview now fires twice**. This needs a GTM container audit — it cannot be verified from the repository.

**Wrong timezone.** GA4 property `553019894` is set to `Atlantic/Canary`. Roses is `Europe/Madrid` — one hour ahead. Every day boundary is misaligned. Fix it now, while the property is four hours old and there is no history to distort.

**No baseline exists yet.** GA4 was created 6 September 2026 at 22:41 UTC; 12-month and 30-day reports return zero rows, though realtime confirms the tag fires. Clarity was installed the same evening. Establishing a clean baseline this week matters, because everything after Wave 0 will be measured against it.

---

## 5. Ranking strategy: positions 1, 2 and 10

Targets stated as deltas from the measured baseline of **95 clicks / 2,296 impressions / position 19.7**.

### Tier 1 — Position #1 on brand (weeks, not months)

**Terms:** villa victoria roses · villa victoria costa brava · villa victoria spain · villa victoria photos

**Where you are:** "villa victoria roses" at **2.6** with 23.9% CTR. "villa victoria" at **21.5**.

**Why you are not first:** entity collision, plus a homepage with no readable text. Not competition.

**Actions:** Wave 0 unblocking · Google Business Profile · rename the entity to "Villa Victoria Roses" throughout · expand `sameAs` · homepage pre-render.

**Target:** brand cluster at position 1–2, CTR above 30%. Roughly 34 → 90 clicks/month on brand alone.

### Tier 2 — Positions 1–2 on long-tail intent (3–6 months) — *where the revenue is*

This is the tier that matters, and you are better positioned than you realise.

**The French and German opening.** France ranks 8.1 and Germany 9.2 *on an English page*. Publishing the existing `/book-fr` and `/book-de` as indexable, hreflang-clustered URLs targets proven demand with finished assets. No new copy required.

**Target terms:**

| Language | Terms |
|---|---|
| FR | villa Roses vue mer · location villa Costa Brava piscine privée · villa familiale Costa Brava |
| DE | Villa Roses Meerblick · Ferienhaus Costa Brava Privatpool · Villa Costa Brava mieten |
| EN | villa Roses sea view sauna · Costa Brava villa jacuzzi sleeps 8 · private pool villa Gulf of Roses |
| ES | villa Roses vistas al mar · alquiler villa Costa Brava piscina privada |

These have thin competition and high intent. Someone searching "Costa Brava villa jacuzzi sleeps 8" is close to booking.

**Actions:** Waves 0–1 · unblock and hreflang the translations · FAQ and Review schema · 3–5 guide pages per language.

**Target:** 8–12 non-branded terms in positions 1–2. From zero non-branded clicks to 150–250/month.

### Tier 3 — Top 10 on head terms (9–18 months)

**Terms:** luxury villa Costa Brava private pool · villa rental Costa Brava · Costa Brava holiday villa

**Honest assessment:** these SERPs are held by Airbnb, Booking.com, Clubvillamar and Spain-Holiday — aggregators with thousands of pages and years of authority. A single-property site does not displace them quickly, and possibly not at all for the broadest terms.

**Realistic aim:** page one for the more qualified head terms ("luxury villa Costa Brava private pool sea view"), not the broadest. This requires the Wave 3 content programme plus genuine link acquisition.

**Do not measure success here.** Tier 2 is where the bookings come from. Tier 3 is a long-horizon bet.

---

## 6. Remediation roadmap

### Wave 0 — Same day (~1 hour) · unblock everything

The highest impact-to-effort ratio in the audit. No new content, no architecture change.

| # | Action | File |
|---|---|---|
| 1 | Delete `Disallow: /book` and `/book.html` | `website/robots.txt` |
| 2 | Remove `noindex, nofollow` from all six pages | `book*.html` |
| 3 | Add self-canonical to each | `book*.html` |
| 4 | Add reciprocal `hreflang` cluster | `book*.html` |
| 5 | Expand sitemap to all URLs with alternates | `website/sitemap.xml` |
| 6 | React `.development.js` → `.production.min.js` | `website/index.html` |
| 7 | Fix GA4 timezone → `Europe/Madrid` | GA4 admin |
| 8 | Audit GTM for duplicate GA4 tag | GTM console |

**Deploy 1 and 2 together** — never separately, per P0-2.

**Acceptance:** `curl` shows no `noindex` on any book page · Search Console URL inspection moves `/book` off "unknown" within 7 days · sitemap shows 6 URLs submitted.

### Wave 1 — Week one · make the content readable

| # | Action | File |
|---|---|---|
| 1 | Pre-render homepage copy as static HTML | `website/index.html` |
| 2 | Add `FAQPage` schema from the 8 existing Q&As | `book.html` |
| 3 | Add `Review` + `AggregateRating` from the 12 reviews | `book.html` |
| 4 | Move/extend `LodgingBusiness` schema onto content pages | `book*.html` |
| 5 | Replace `priceRange: "€€€€"` with real `Offer` | schema |
| 6 | Resolve sleeps 8-vs-10 everywhere | all |
| 7 | Publish `llms.txt` | `website/llms.txt` |
| 8 | `width`/`height` on all 27 images; LCP preload | `book*.html` |
| 9 | Compress gallery images to ≤200 KB | `website/media/gallery/` |
| 10 | Reduce or replace hero sequence on mobile | `Hero.jsx` |

**Acceptance:** homepage `curl` yields >1,500 words · Rich Results Test passes FAQ and Review · mobile LCP under 2.5s.

### Wave 2 — Two sessions · the Astro migration *(recommended)*

Already scoped in `context/seo-and-indexing.md` § Phase 3, with its architectural decisions made: Astro, subdirectory URLs (`/`, `/de/`, `/fr/`), English at root with `x-default`, auto-generated sitemap, work on `feat/astro-migration` with a Vercel preview.

**Wave 1's pre-render is a stopgap, not a substitute.** It buys months; it does not fix the homepage's single-URL multilingual problem, which is structural.

Two open questions this audit can now answer:

- *i18n completeness:* `i18n.js` covers EN/ES/FR/DE. The `/book` family covers EN/FR/DE/RU/AR. **The sets do not match** — ES exists on the homepage but has no booking page; RU and AR have booking pages but no homepage translation. Decide the supported set before migrating.
- *Priority order:* the GSC data says FR and DE first (8.1 and 9.2). ES third despite Spain's click volume, since those are largely brand searches.

### Wave 3 — Ongoing · the content programme

Roughly two pages a month, each targeting one Tier 2 term, built to the playbook in Section 8.

**First six, in priority order:**

1. Things to do in Roses with family *(EN, then FR/DE)*
2. Costa Brava with kids: a week in Roses
3. Getting to Roses: Barcelona and Girona airports
4. Best beaches near Roses
5. Day trips: Cadaqués, Girona, Figueres
6. Why book direct instead of Airbnb

Each links to `/book` in its language, carries appropriate schema, and targets one assigned keyword.

---

## 7. What Peter needs to do (not codeable)

| Priority | Task | Effort | Why |
|---|---|---|---|
| **1** | **Create/claim Google Business Profile** | 30 min + verification | Biggest single AEO and local lever; fixes the entity collision; unlocks Maps |
| **2** | Audit GTM container for duplicate GA4 tag | 15 min | Prevents double-counting |
| **3** | Fix GA4 timezone → `Europe/Madrid` | 2 min | Do it before history accumulates |
| **4** | Re-submit sitemap after Wave 0 | 5 min | Triggers recrawl |
| 5 | Bing Webmaster Tools ("Import from GSC") | 5 min | Bing feeds Copilot and ChatGPT search |
| 6 | Ask recent guests for Google reviews | ongoing | Entity signal + `AggregateRating` |
| 7 | Decide the supported language set | 15 min | Blocks Wave 2 |
| 8 | Outreach for Costa Brava directory listings | ongoing | Citations and links |

---

## 8. Best practice for every new page

See `context/content-seo-playbook.md` for the full checklist, page templates and AEO writing rules. That document is the standard to apply to every new blog post, guide or landing page, so this audit does not need repeating.

---

## 9. Measurement

**Baseline (12 months to 2026-09-03):** 95 clicks · 2,296 impressions · 4.14% CTR · position 19.7 · 2 URLs with impressions · 0 non-branded clicks.

| Cadence | Check | Success looks like |
|---|---|---|
| Weekly, month 1 | GSC → Indexing → Pages | 7+ pages indexed (from 1) |
| Weekly | GSC → Sitemaps | 6 submitted, 6 indexed |
| Fortnightly | GSC → Performance, non-branded filter | First non-branded impressions appear |
| Monthly | Position for "villa victoria roses" | 2.6 → 1.0 |
| Monthly | FR/DE clicks | 19 and 2 → 60+ combined |
| Monthly | Mobile CTR | Hold above 8.31% as impressions grow |
| Quarterly | Branded vs non-branded split | 100/0 → 60/40 |
| Ongoing | GA4 mobile LCP p75 | Under 2.5s |

**A caution on GA4:** the property is four hours old and may be double-counting. Do not compare month one to anything until the GTM audit is done.

**Leading indicator worth watching:** the first non-branded impression in Search Console. That is the moment this site stops being a business card and starts being a search asset.

---

## Appendix · Reproduce these findings

```bash
# 1. What an AI crawler sees on the homepage → 6 words
curl -sS -A "GPTBot/1.2" https://villavictoriaspain.com/ \
  | python3 -c "import sys,re; h=sys.stdin.read(); \
    h=re.sub(r'<script.*?</script>','',h,flags=re.S|re.I); \
    h=re.sub(r'<style.*?</style>','',h,flags=re.S|re.I); \
    t=re.sub(r'\s+',' ',re.sub(r'<[^>]+>',' ',h)).strip(); \
    print(len(t.split()),'words:',t[:200])"

# 2. Which pages are excluded → six files
grep -l 'noindex' website/*.html

# 3. Sitemap size → one <loc>
curl -sS https://villavictoriaspain.com/sitemap.xml | grep -c '<loc>'

# 4. Headings on the indexable page → 0 and 0
grep -c '<h1' website/index.html; grep -c '<h2' website/index.html

# 5. Media weight → 53 MB
du -sh website/media

# 6. Live Search Console data (Composio CLI, project-scoped)
composio execute GOOGLE_SEARCH_CONSOLE_SEARCH_ANALYTICS_QUERY -d '{
  "site_url":"sc-domain:villavictoriaspain.com",
  "start_date":"2025-09-06","end_date":"2026-09-03",
  "dimensions":["query"],"row_limit":25}'

# 7. Confirm the booking pages are unknown to Google
composio execute GOOGLE_SEARCH_CONSOLE_INSPECT_URL -d '{
  "site_url":"sc-domain:villavictoriaspain.com",
  "inspection_url":"https://villavictoriaspain.com/book"}'
```

**Reference IDs:** GSC `sc-domain:villavictoriaspain.com` · GA4 `properties/553019894` · GA4 measurement `G-NJYD4XPQ49` · GTM `GTM-5R9R4TBZ` · Clarity `yeabrk2neo`
