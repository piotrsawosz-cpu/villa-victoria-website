# Context — Index

> This file is the index for everything in `context/`. Claude reads this first; individual files are read only when their entry below indicates relevance to the current task.

## Files

| File | Read when… |
|---|---|
| `project-overview.md` | At the start of a new session, or when asked about the project's purpose, scope, or stage. |
| `property-profile.md` | When asked about the villa's amenities, capacity, location, nightly rate, or target-guest details. |
| `landing-page-spec.md` | When working on the direct-booking landing page — copy, sections, structure, CTAs. |
| `seo-and-indexing.md` | When asked about the Astro migration / per-language URLs (Phase 3). Note: its "Phase 1 complete" status is superseded by `seo-aeo-audit-2026-09.md` — the Phase 1 tags were correct but applied to a page with no crawlable content. |
| `airbnb-listing-copy.md` | When updating or referencing the English Airbnb listing fields (Description / The Space / Guest Access / Interaction / Other Things to Note). |
| `airbnb-listing-copy-translations.md` | When updating or referencing the FR / DE / RU translations of the five Airbnb listing fields. |
| `airbnb-prebooking-message.md` | When updating Airbnb's pre-booking message (the short note guests must agree to before booking) in any language. |
| `airbnb-additional-rules.md` | When updating Airbnb's "Additional rules" field copy in any language. |
| `airbnb-checkout-instructions.md` | When updating Airbnb's "Checkout instructions" sent to guests before departure in any language. |
| `airbnb-directions.md` | When updating Airbnb's "Getting around" / "Directions" copy or the in-person check-in description. |
| `seo-aeo-audit-2026-09.md` | When working on anything search-related: indexing, rankings, schema, hreflang, Core Web Vitals, AI/answer-engine visibility, or Search Console data. Contains the September 2026 audit, the measured GSC baseline, and the Wave 0–3 fix roadmap. |
| `content-seo-playbook.md` | **Before writing or publishing any new page** — blog post, guide, location or landing page. Pre-publish checklist, page templates with JSON-LD, AEO writing rules, and the keyword map. |
<!-- Add a row whenever a context file is added. The "Read when…" column must be specific enough that Claude can decide relevance from this entry alone, without opening the file. -->

## Conventions

- One topic per file. Many small files beats one giant one.
- Filenames describe content: `auth-flow.md`, not `notes-2.md`.
- First line of each file: a one-sentence summary.
- Split files that grow past ~500 lines.
- When you add a file here, add its row to the index above in the same change.
