# Content SEO & AEO Playbook — Villa Victoria

*The standard for every new page on villavictoriaspain.com. Apply it to blog posts, guide pages, location pages and landing pages alike, so the September 2026 audit never has to be repeated.*

> Companion to `context/seo-aeo-audit-2026-09.md` (what was broken and why). This file is about what to do from now on.

---

## The five rules that matter most

Everything below expands on these. If you remember nothing else:

1. **If it isn't in the HTML source, it doesn't exist.** Google can render JavaScript; AI crawlers cannot. Every word you want cited must be in the raw HTML.
2. **Never ship `noindex` "for now".** Temporary exclusions become permanent invisibility. Six pages on this site were hidden for four months exactly this way.
3. **One fact, one number, everywhere.** Contradictory facts don't just look sloppy — they make answer engines refuse to cite you at all.
4. **Every page targets exactly one primary term.** Two pages chasing the same term compete with each other, not with your competitors.
5. **Name the entity, never "the villa".** "Villa Victoria in Roses, Girona" survives being quoted out of context. "The villa" does not.

---

## Pre-publish checklist

Every row must pass before a page goes live.

### Crawlability

| ✓ | Check | Standard |
|---|---|---|
| ☐ | No `noindex` | Tag absent entirely (present only on redirect interstitials) |
| ☐ | Not blocked in `robots.txt` | Confirm the path isn't caught by a prefix rule |
| ☐ | Self-referencing canonical | `<link rel="canonical" href="<this exact URL>"/>` |
| ☐ | Added to `sitemap.xml` | With `<lastmod>` and realistic `<priority>` |
| ☐ | Linked from an indexed page | Orphan pages get crawled late or never |
| ☐ | Content present in raw HTML | `curl` the URL — if the copy isn't there, it doesn't count |

### Metadata

| ✓ | Check | Standard |
|---|---|---|
| ☐ | `<title>` | 50–60 chars, primary term first, ends `· Villa Victoria Roses` |
| ☐ | Meta description | 140–160 chars, written to earn a click, not to stuff keywords |
| ☐ | Exactly one `<h1>` | Contains the primary term; distinct from the `<title>` |
| ☐ | Logical `<h2>`/`<h3>` | No skipped levels; each `<h2>` a real section |
| ☐ | Open Graph | `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:type` |
| ☐ | Twitter card | `summary_large_image` |
| ☐ | `<html lang="…">` | Matches the actual content language |

### Internationalisation

| ✓ | Check | Standard |
|---|---|---|
| ☐ | Full reciprocal `hreflang` | Every version lists every version, itself included |
| ☐ | `x-default` present | Points at the English version |
| ☐ | No orphan translations | A new language means a new URL, never a `localStorage` toggle |

### Structured data

| ✓ | Check | Standard |
|---|---|---|
| ☐ | Correct type | See templates below |
| ☐ | `FAQPage` if the page has Q&As | And the answers must be visible on the page too |
| ☐ | `BreadcrumbList` | On every page except the homepage |
| ☐ | Validates | [Rich Results Test](https://search.google.com/test/rich-results) with zero errors |
| ☐ | No invented facts | Schema must only state what the page states |

### Performance (mobile first — 77% of clicks)

| ✓ | Check | Standard |
|---|---|---|
| ☐ | Images ≤200 KB | WebP; no 1.5 MB heroes |
| ☐ | `width` and `height` on every `<img>` | Prevents layout shift |
| ☐ | LCP image preloaded | `<link rel="preload">` + `fetchpriority="high"` |
| ☐ | All other images lazy | `loading="lazy"` |
| ☐ | Total initial payload < 2 MB | Test on throttled 4G, not desktop wifi |
| ☐ | No render-blocking third-party JS | Analytics async or deferred |

### Content quality and accuracy

| ✓ | Check | Standard |
|---|---|---|
| ☐ | One assigned primary keyword | Recorded in the keyword map below |
| ☐ | No cannibalisation | No existing page targets the same term |
| ☐ | ≥800 words for guides | Below that rarely competes |
| ☐ | Facts match `property-profile.md` | Capacity, rate, distances, amenities |
| ☐ | 2–4 internal links out | To `/book` in the same language, plus related guides |
| ☐ | Every `<img>` has meaningful `alt` | Describe the content; empty `alt` only for decoration |
| ☐ | Visible last-updated date | Both a trust and a freshness signal |

---

## AEO writing rules

Classic SEO gets you ranked. These get you *cited* by ChatGPT, Claude, Perplexity and AI Overviews — increasingly where travel research begins.

**Answer first, elaborate second.** Open each section with the direct answer in one sentence, then expand. Answer engines extract the first clear statement.

> ✅ "Villa Victoria has a seven-night minimum stay. We found a week is the right amount of time for a family to settle in…"
>
> ❌ "People often ask about our booking policies, and there are a few things worth understanding before…"

**One claim per sentence.** Compound sentences are hard to extract cleanly.

> ✅ "The villa sleeps 8 comfortably. A retractable wall bed in the third bedroom takes the maximum to 10."
>
> ❌ "The villa sleeps 8 comfortably, though with the wall bed in bedroom three and the hallway sofa you can push to 10 if your group doesn't mind."

**Name the entity every time.** Pronouns and "the villa" break when a paragraph is quoted alone.

> ✅ "Villa Victoria sits on Puig Rom, above Roses in Girona province."
>
> ❌ "It's up on the hill above town."

**Make facts self-contained.** Each should survive with no surrounding context: *"Villa Victoria is €1,300 per night with a seven-night minimum."* — not *"the rate above applies to a standard week."*

**Never contradict yourself across pages.** The audit found capacity published as both 8 and 10. When sources disagree, models hedge or omit — you lose the citation entirely.

**Use real numbers.** "€1,300 per night" is citable; "competitively priced" is not. "40 minutes from Girona" beats "a short drive".

**Write the questions people actually ask** as `<h2>`s, then answer them immediately underneath. This maps directly onto how retrieval works.

---

## Page templates

### A. Guide page

*Example: "Things to do in Roses with kids"*

```html
<html lang="en">
<head>
  <title>Things to Do in Roses With Kids · Villa Victoria Roses</title>
  <meta name="description" content="Twelve family-friendly things to do in Roses, Costa Brava — beaches, boat trips, the citadel and day trips, from a family who lived here."/>
  <link rel="canonical" href="https://villavictoriaspain.com/guides/roses-with-kids"/>
  <link rel="alternate" hreflang="en" href="https://villavictoriaspain.com/guides/roses-with-kids"/>
  <link rel="alternate" hreflang="fr" href="https://villavictoriaspain.com/fr/guides/roses-en-famille"/>
  <link rel="alternate" hreflang="de" href="https://villavictoriaspain.com/de/guides/roses-mit-kindern"/>
  <link rel="alternate" hreflang="x-default" href="https://villavictoriaspain.com/guides/roses-with-kids"/>
</head>
```

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Things to Do in Roses With Kids",
  "datePublished": "2026-09-15",
  "dateModified": "2026-09-15",
  "author": { "@type": "Person", "name": "Piotr Sawosz" },
  "publisher": {
    "@type": "Organization",
    "name": "Villa Victoria Roses",
    "url": "https://villavictoriaspain.com/"
  },
  "about": {
    "@type": "Place",
    "name": "Roses",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Roses",
      "addressRegion": "Catalonia",
      "addressCountry": "ES"
    }
  },
  "mentions": {
    "@type": "LodgingBusiness",
    "name": "Villa Victoria",
    "url": "https://villavictoriaspain.com/"
  }
}
```

**Structure:** `<h1>` with the primary term → one-paragraph answer-first summary → `<h2>` per activity, each with practical detail (cost, opening hours, distance from the villa) → a natural closing link to `/book`.

### B. Location page

*Example: "Villa rentals near Cadaqués"*

Same head pattern. Schema uses `Place` plus `LodgingBusiness`, and adds `geo` and `containedInPlace`. Content must include real distances and drive times — these are the extractable facts that win the citation.

### C. Seasonal / offer page

Uses `Offer` with `validFrom` and `validThrough`. **Set a calendar reminder to `noindex` or remove it once expired** — stale offers damage trust and can trigger manual actions.

---

## Never do this

- ❌ **`noindex` "temporarily."** Four months, six pages, zero traffic. If a page isn't ready, don't deploy it.
- ❌ **New content behind client-side-only rendering.** If `curl` can't see it, it doesn't rank and it can't be cited.
- ❌ **A new language via `localStorage`.** New language = new URL + full `hreflang` cluster. No exceptions.
- ❌ **Uncompressed hero images.** Nothing above 200 KB ships.
- ❌ **`Disallow` a page that also carries `noindex`.** They cancel out — Google can never fetch the page to read the tag, so the URL stays permanently "unknown".
- ❌ **Two pages targeting one term.** Consolidate or differentiate before publishing.
- ❌ **Copy from the Airbnb listing verbatim.** Duplicate content; also wastes the chance to rank for something different.
- ❌ **`priceRange: "€€€€"` when you know the number.** Vague schema is a wasted opportunity.

---

## Keyword map

One primary term per page. Update this table whenever a page is added, before writing.

### Assigned

| Term | Page | Baseline (Sep 2026) | Target |
|---|---|---|---|
| villa victoria roses | `/` | pos 2.6 | **1** |
| villa victoria | `/` | pos 21.5 | 1–2 |
| villa victoria photos | `/book` | pos 6.9 | 1–3 |

### Tier 2 — unassigned, highest priority

Ranked by opportunity. FR and DE first: those markets already rank 8.1 and 9.2 on English pages.

| Term | Lang | Suggested page |
|---|---|---|
| villa Roses vue mer | FR | `/book-fr` |
| location villa Costa Brava piscine privée | FR | `/book-fr` |
| villa familiale Costa Brava | FR | guide |
| Villa Roses Meerblick | DE | `/book-de` |
| Ferienhaus Costa Brava Privatpool | DE | `/book-de` |
| Villa Costa Brava mieten | DE | guide |
| villa Roses sea view sauna | EN | `/book` |
| Costa Brava villa jacuzzi sleeps 8 | EN | `/book` |
| private pool villa Gulf of Roses | EN | `/book` |
| things to do in Roses with kids | EN | new guide |
| Costa Brava with children | EN | new guide |
| Barcelona to Roses transfer | EN | new guide |
| best beaches near Roses | EN | new guide |
| villa Roses vistas al mar | ES | needs an ES page |

### Tier 3 — long horizon

`luxury villa Costa Brava private pool` · `villa rental Costa Brava` · `Costa Brava holiday villa` — held by Airbnb, Booking, Clubvillamar, Spain-Holiday. Pursue via topical depth, don't measure success against them.

---

## Worked example: applying this to `/book` as it stands today

Proof the checklist catches real problems. Run against `website/book.html` before any fixes:

| Check | Result |
|---|---|
| No `noindex` | ❌ **FAIL** — `noindex, nofollow` present |
| Not blocked in robots.txt | ❌ **FAIL** — `Disallow: /book` |
| Self-referencing canonical | ❌ **FAIL** — none |
| In sitemap | ❌ **FAIL** — sitemap has only `/` |
| Content in raw HTML | ✅ PASS — ~17,000 chars |
| Single `<h1>` | ✅ PASS |
| Open Graph | ❌ **FAIL** — no `og:` tags |
| Reciprocal `hreflang` | ❌ **FAIL** — 4 sibling languages, zero tags |
| Structured data | ❌ **FAIL** — no JSON-LD |
| `FAQPage` where Q&As exist | ❌ **FAIL** — 8 Q&As, no markup |
| Images ≤200 KB | ❌ **FAIL** — `eagle-view.webp` is 1.5 MB |
| `width`/`height` on images | ❌ **FAIL** — 0 of 27 |
| Lazy loading | ❌ **FAIL** — 3 of 27 |
| Meaningful `alt` | ⚠️ PARTIAL — 6 of 27 empty |
| Facts match property-profile | ❌ **FAIL** — capacity 8 vs 10 |

**14 failures on the site's best page.** Had this checklist existed in May, none would have shipped.

---

## Quick verification

```bash
# Content actually in the HTML?
curl -sS https://villavictoriaspain.com/<page> | sed 's/<[^>]*>//g' | wc -w

# Accidental noindex?
grep -l 'noindex' website/*.html

# Images over budget?
find website/media -name "*.webp" -size +200k -exec ls -lh {} \;

# Images missing dimensions?
grep -o '<img[^>]*>' website/<page>.html | grep -vc 'width='
```

Then: [Rich Results Test](https://search.google.com/test/rich-results) · [PageSpeed Insights](https://pagespeed.web.dev/) *(mobile tab)* · Search Console → URL Inspection → **Live test**.
