# Connectors

External tool integrations. Each connector is a self-contained folder.

## What counts as a connector

- **CLI tools** — Playwright CLI, gcloud, GitHub CLI, AWS CLI, ffmpeg.
- **MCP servers** — supporting files live here; the registration itself goes in `/.mcp.json`.
- **API client wrappers** — thin modules wrapping a third-party REST API.
- **Browser automation harnesses.**

## Folder layout

```
connectors/
└── <connector-name>/
    ├── README.md          # Required — what it is, how to use it, auth setup
    ├── config/            # Optional — config files
    ├── scripts/           # Optional — wrappers, login helpers
    └── examples/          # Optional — usage examples
```

## Naming

- Lowercase, hyphenated: `playwright-cli`, `google-workspace`, `github-cli`.
- MCP servers get an `-mcp` suffix: `linear-mcp`, `notion-mcp`. The MCP registration itself stays in `/.mcp.json`.

## Connectors index

| Connector | Type | Purpose |
|---|---|---|
| `github` | CLI (system git) | Push the workspace to `piotrsawosz-cpu/villa-victoria-website`. Auth via HTTPS + Keychain. |
| `composio` | CLI | Connect agents to 1000+ SaaS tools (Gmail, Slack, Notion…). Scoped to the Villa Victoria Composio account via `COMPOSIO_CACHE_DIR` — see its README before use. |

When adding a connector, also add a row to the **MCP servers** or **CLI connectors** section of `/CLAUDE.md`. Without that step, Claude won't know the connector exists.

## Rule

A human walking into this repo cold should be able to figure out what each connector does and how to use it from its `README.md` alone.
