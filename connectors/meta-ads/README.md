# Meta Ads connector

Connects Claude Code to Villa Victoria's Meta (Facebook + Instagram) ad account so Claude can launch, manage, and review ads end-to-end.

Uses the **official Meta Ads MCP** (open beta, launched April 29, 2026 as part of "Meta Ads AI Connectors").

## What this connects to

- **Ad account:** Villa Victoria (Eur) — `act_951115744044583`
- **Business Manager:** Villa Victoria — `141413489896833`
- **Facebook Page:** [VillaVictoriaSpain](https://www.facebook.com/VillaVictoriaSpain/) — page ID `138425480095230`
- **Instagram:** [@villa_victoria_spain](https://www.instagram.com/villa_victoria_spain/)

> **MCP rollout status (as of 2026-05-06):** OAuth connected and the ad account is queryable (read), but `is_ads_mcp_enabled` is **false** on this ad account — Meta says: *"Ads MCP is gradually being rolled out. Please check back at a later date to use Ads MCP with this Ad Account."* Until enabled, Claude can pull insights and read entities, but cannot create/edit/launch campaigns via MCP. Use Ads Manager manually or the CLI fallback in the meantime.

## Auth

OAuth via Meta Business Suite → AI Connectors. Meta hands back either an MCP URL or a copy-paste config snippet during setup. The URL/config is registered with Claude Code via `claude mcp add --scope user` so it lives in `~/.claude.json` (user-scoped) and is reachable from any project on this Mac, not just this repo. **No tokens or secrets are stored in this repo.**

Revoke at any time at **business.facebook.com → Business Settings → Integrations → AI Connectors → Disconnect**.

## What Claude can do once connected

Per Meta's announcement, the MCP supports four capability groups:

- **Insights & reporting** — campaign / ad set / ad performance, spend, impressions, CTR, ROAS, audience breakdowns
- **Campaign management** — create, edit, launch, and pause campaigns, ad sets, and ads using natural language
- **Catalog management** — create product catalogs, add products, troubleshoot data feed issues
- **Signal health** — pixel/conversion data quality monitoring

## Guardrails

Mirrored in `CLAUDE.md`'s Capability manifest section so they apply automatically. Summary:

- Confirm with Peter before any action that creates, launches, edits budgets, or pauses live campaigns
- Read-only actions (metrics, listings, drafting) do not require confirmation
- Default daily-budget ceiling per ad set: **€50** — anything above requires explicit approval
- Meta creates new resources in PAUSED state by default — never flip a campaign to ACTIVE without Peter's explicit go-ahead in that turn

## Setup steps (Phase B)

OAuth is live as of 2026-05-06. The MCP is registered at user scope (`~/.claude.json`) and reachable from any project on this Mac. To re-register on a new machine:

1. Open business.facebook.com → Business Settings → Integrations → AI Connectors → connect Claude Code, copy the URL/config Meta hands back.
2. Run `claude mcp add --transport http meta-ads <URL_FROM_META> --scope user`.
3. Verify with `claude mcp list` — meta-ads should appear.

To check whether the Villa Victoria ad account has been added to the MCP rollout, call `ads_get_ad_accounts` and look for `is_ads_mcp_enabled: true` on `951115744044583`. Once true, Claude can begin creating campaigns directly.

## Fallback: Meta Ads CLI

If the MCP route hits a wall (open beta not rolled out to this account, or a needed operation isn't exposed via MCP), Meta also ships an official CLI:

- Python 3.12+, env-var auth (`META_ACCESS_TOKEN`, ad account ID)
- Binary: `meta` (e.g. `meta ads campaign list`, `meta ads campaign create ...`)
- Resources created in PAUSED state by default — same safety design as the MCP
- Docs: [developers.facebook.com/blog/post/2026/04/29/introducing-ads-cli](https://developers.facebook.com/blog/post/2026/04/29/introducing-ads-cli)

Install only if needed; document the install + token setup here when used.

## Recovery

Connection broken or behaving oddly:

```bash
claude mcp list                    # confirm meta-ads is registered
claude mcp remove meta-ads         # tear down
# then re-run the `claude mcp add` from Setup steps above
```

If Meta's side has changed (token expired, scopes revoked), re-run the AI Connector flow at business.facebook.com to issue a fresh URL/config.
