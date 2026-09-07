# UK Click-to-WhatsApp Launch Spec — Villa Victoria

**Status:** Ready to launch (manual). Created 2026-05-06.
**Why this is a manual spec, not an MCP-launched campaign:** As of 2026-05-06, the Meta Ads MCP has been authenticated but `is_ads_mcp_enabled` is **false** on Villa Victoria's ad account (`951115744044583`). Meta is rolling out MCP write access gradually. Until that flag flips to true, we cannot create campaigns from Claude — but everything below is launch-ready in Ads Manager.

---

## Identifiers (already captured)

| Field | Value |
|---|---|
| Ad account | `act_951115744044583` (Villa Victoria — Eur) |
| Business Manager | `141413489896833` (Villa Victoria) |
| Facebook Page | `138425480095230` (Villa Victoria) |
| Instagram | @villa_victoria_spain (link via the Page) |

## Prerequisite to verify in Ads Manager before launch

The "Send WhatsApp message" CTA only appears if Villa Victoria's WhatsApp Business number is linked to the Facebook Page. Quick check:

1. Go to **business.facebook.com → Business Settings → WhatsApp Accounts**
2. If a number appears and is linked to the Villa Victoria page → ready to launch
3. If not → **Add WhatsApp Account**, verify the number via SMS/call, link it to the page (~5 min)

---

## Campaign structure

### Campaign

| Field | Value |
|---|---|
| Name | `UK · CTWA · Two Families · 2026-05` |
| Objective | **Engagement** |
| Buying type | Auction |
| Special ad categories | None |
| Campaign budget optimization | Off (budget at ad-set level) |
| Status on creation | **PAUSED** |

### Ad set

| Field | Value |
|---|---|
| Name | `UK · 35-55 · Friend-group families · WA` |
| Conversion location | **Messaging apps** |
| Messaging app | **WhatsApp** |
| Performance goal | Maximize number of conversations |
| Daily budget | **€25.00** |
| Schedule | 7 days from launch (set start = approval date, end = +7d) |
| Geo | United Kingdom (all regions) |
| Age | 35–55 |
| Gender | All |
| Languages | English (All) |
| Detailed targeting (interests) | Costa Brava · Catalonia · Spain travel · Luxury vacation rentals · Villa rental · Family vacations · Second home · Airbnb · International travel |
| Detailed targeting expansion | Off (keep targeting tight on first run) |
| Placements | Advantage+ placements (auto: FB Feed, IG Feed, Stories, Reels) |
| Optimization | Conversations |
| Bid strategy | Highest volume (default) |

**Reach estimate (rough):** ~2–4M before targeting expansion. 7-day spend at €25/day = €175 ≈ 30k–60k impressions, ~150–400 link clicks, ~20–60 WhatsApp conversations started (highly dependent on creative resonance).

### Ad

| Field | Value |
|---|---|
| Name | `UK · CTWA · Two Families One Perfect Week · img v1` |
| Identity | Facebook Page: Villa Victoria · Instagram: @villa_victoria_spain |
| Format | Single image |
| Image | [assets/ads/images/uk-two-families-one-week-20260502/final.png](../assets/ads/images/uk-two-families-one-week-20260502/final.png) (4K, 1:1 + 9:16 crops) |
| Call-to-action | **Send WhatsApp Message** |
| Destination | WhatsApp number linked to the Page |

---

## Copy (banned-phrase filtered against [uk-ad-motivators.md](uk-ad-motivators.md))

### Primary text (body, ~125 chars to stay un-truncated on mobile)

> Two families. One villa. Pool, jacuzzi, terrace overlooking the Gulf of Roses. Split it and it's less per night than a Premier Inn — message us for the dates that are still open this summer.

### Headline (≤27 chars renders best on Feed)

> Two families. One week.

### Description (Feed only, optional)

> 3 bedrooms, private pool, Costa Brava. Ask us anything on WhatsApp.

### Prefilled WhatsApp greeting (what the user sees when they tap the CTA)

> Hi — I saw your Villa Victoria ad on Facebook. Could you share availability and pricing for [their dates]?

> Peter can edit before launch. Suggested template above keeps the user's first message short, dates-focused, and easy for Peter to triage in WhatsApp.

---

## Why this creative + copy combination

- **Motivators tapped:** #5 Effortless Base (the value-split math) + #1 Sovereign Space (private pool, no strangers) — same pairing the image was built for, so visual + copy are coherent.
- **Banned phrases avoided:** No "exclusive," "VIP," "indulge," "treat yourself," "world-class," "iconic," "hidden gem," "champagne." No ALL-CAPS scarcity in body copy.
- **Specificity:** "Premier Inn" is the exact comparator from the UK research ("less than a Premier Inn"); "Gulf of Roses" anchors the destination concretely vs generic "Spain."
- **CTA fit:** "Message us for the dates that are still open" gives a direct, low-commitment reason to tap WhatsApp — better than vague "Learn more."

---

## Pre-launch checklist (Peter to confirm)

- [ ] WhatsApp Business number is linked to the Villa Victoria FB page (see prerequisite section above)
- [ ] WhatsApp number is monitored daily during the 7-day window — inquiries should get a reply within ~4 hours during UK waking hours
- [ ] Daily budget €25 is acceptable (campaign cap = €175 over 7 days)
- [ ] Campaign starts in PAUSED state in Ads Manager — flip to ACTIVE only after final review
- [ ] Set a calendar reminder 48–72h post-launch to review insights

## Post-launch tracking

Once the MCP write flag flips for this ad account, Claude can pull insights via `ads_insights_*`. Until then, key metrics to copy from Ads Manager → Insights:

| Metric | Target signal |
|---|---|
| Cost per messaging conversation started | <€8 = strong; €8–€15 = OK; >€15 = creative needs rework |
| CTR (link click-through rate) | >1.5% = strong creative-audience match |
| Frequency | Watch for >2.5 within 7 days — sign the audience is too narrow |
| Conversations → bookings (manual count) | Peter logs replies in WhatsApp; >5% of conversations → quotes is a healthy hand-off |

After the test, log the result row in [ads/registry.md](registry.md) and decide: scale, kill, or iterate creative.

---

## What changes once MCP write access lands

When `is_ads_mcp_enabled: true` on `951115744044583`, this entire spec can be created in Claude with three calls:

```
ads_create_campaign(ad_account_id="951115744044583", name="UK · CTWA · Two Families · 2026-05", objective="OUTCOME_ENGAGEMENT", status="PAUSED")
ads_create_ad_set(...)   # destination_type=WHATSAPP, page_id=138425480095230, daily_budget=2500
ads_create_ad(...)       # call_to_action_type=WHATSAPP_MESSAGE, image from final.png
```

Re-check status with `ads_get_ad_accounts` periodically.
