# Composio connector

Composio connects agents to 1000+ external SaaS tools (Gmail, Slack, Notion, GitHub, Sheets…) behind
one CLI. Claude shells out to the `composio` binary — search for a tool, execute it, link accounts.

**The one thing to know:** there are two Composio *interfaces* (MCP server and CLI) and two CLI
*accounts* on this Mac. This project uses the **CLI**, on the **Villa Victoria** account. Read
[MCP server vs CLI](#mcp-server-vs-cli--read-this-first) and [Two accounts](#two-accounts-important)
before running anything.

## MCP server vs CLI — read this first

There are **two** Composio interfaces available in Claude Code, bound to **different accounts**:

| Interface | Account | Use for this project? |
|---|---|---|
| MCP server (`mcp__claude_ai_Composio__*`) | `apsawosz@gmail.com` | **No** |
| CLI (`composio ...` via Bash) | `villa.victoriaspain@gmail.com` | **Yes** |

The MCP server will report this project's toolkits as **not connected**, because they are not
connected *on that account*. This is misleading and has cost a full session before — always verify
with the CLI:

```bash
composio connections list      # COMPOSIO_CACHE_DIR scopes this to Villa Victoria
```

**If any Composio check says "not connected", confirm with the CLI before believing it.**

### Connected toolkits (verified 2026-09-06)

`google_search_console` · `google_analytics` · `microsoft_clarity` · `googledocs` — all ACTIVE.

### Property IDs (so nobody has to rediscover them)

| Service | Identifier |
|---|---|
| Search Console | `sc-domain:villavictoriaspain.com` (siteOwner) |
| GA4 property | `properties/553019894` ("Villa Victoria Spain") |
| GA4 measurement ID | `G-NJYD4XPQ49` |
| Google Tag Manager | `GTM-5R9R4TBZ` |
| Microsoft Clarity | `yeabrk2neo` |

> Note: `GOOGLEDOCS_GET_DOCUMENT_BY_ID` returns a payload large enough that Composio spools it to
> disk and returns `outputFilePath` instead of `data` — read that file rather than parsing stdout.
> Clarity's export only covers the last 24/48/72 hours.

## What this connects to

- **Account (this project):** `villa.victoriaspain@gmail.com` (org `villa.victoriaspain_workspace`)
- **Service:** [dashboard.composio.dev](https://dashboard.composio.dev/)

## How it's installed on this Mac

```bash
curl -fsSL https://composio.dev/install | sh
```

Binary lives at `~/.composio/composio`, with a symlink entry point at `~/.local/bin/composio`
(already on PATH via `~/.zshrc`). Current version: **0.4.1**.

The installer rewrites its own `~/.zshrc` block on every run, so re-running it is safe and
idempotent. Upgrading preserves auth state.

## Two accounts (important)

Composio stores auth in a **single global file**, `~/.composio/user_data.json`. This Mac is signed in
globally as `uniqtime.usa@gmail.com` — a **different business**. A plain `composio login` would
overwrite that session.

To keep them separate, this project overrides the CLI's state directory with `COMPOSIO_CACHE_DIR`:

| Scope | State dir | Account |
|---|---|---|
| Global / other projects | `~/.composio/` | `uniqtime.usa@gmail.com` |
| This project | `.claude/composio/` | `villa.victoriaspain@gmail.com` |

`COMPOSIO_CACHE_DIR` is the **only** variable that does this. `COMPOSIO_DIR` and `COMPOSIO_API_KEY`
were both tested and do *not* redirect auth — don't reach for them.

### How the override is wired

`.claude/settings.local.json` sets it for every Bash call Claude makes in this project:

```json
{
  "env": {
    "COMPOSIO_CACHE_DIR": "/Users/piotrsawosz/Desktop/Villa Victoria New/.claude/composio"
  }
}
```

Two consequences:

- It applies to **Claude Code only**. In Peter's own terminal, `composio` still uses the global
  uniqtime account unless the variable is passed explicitly.
- The path is **absolute on purpose** — settings `env` values are not shell-expanded, so `$HOME`
  and `$CLAUDE_PROJECT_DIR` would not work here.

`.claude/` is gitignored wholesale, so the API key in `.claude/composio/user_data.json` never
reaches GitHub.

## Auth

Log in (or re-login) scoped to this project:

```bash
COMPOSIO_CACHE_DIR="/Users/piotrsawosz/Desktop/Villa Victoria New/.claude/composio" \
  composio login --no-skill-install --no-wait
# prints a dashboard URL — open it, then:
COMPOSIO_CACHE_DIR="..." composio login --poll
```

**Before clicking the URL:** sign out of the Composio dashboard, or use a private window. The browser
may already hold a `uniqtime.usa@gmail.com` session, which would silently link the wrong account.

`--no-skill-install` is deliberate: a Composio MCP server is already available in Claude Code, and a
second overlapping interface just adds confusion.

### Which account am I?

```bash
composio whoami                              # global → uniqtime.usa@gmail.com
COMPOSIO_CACHE_DIR="..." composio whoami     # this project → villa.victoriaspain@gmail.com
```

Two different emails means the isolation is working. Same email means it isn't — check that the
`env` block is present in `.claude/settings.local.json`. It applies immediately — no restart needed.

## Common commands

```bash
composio search "send emails" --limit 5   # find tools by use case (JSON; --human to format)
composio tools info <SLUG>                # inspect one tool
composio execute <SLUG> --get-schema      # see required inputs
composio execute <SLUG> -d '{ ... }'      # run it (validates inputs + connection)
composio execute <SLUG> -d '{...}' --dry-run
composio link <toolkit>                   # connect an account, e.g. `composio link gmail`
composio connections list                 # what's connected
composio proxy <url> --toolkit <slug>     # curl-like call using a connected account
```

Typical flow: `search` → `execute` (the CLI tells you if a `link` is needed first).

## Gotchas

- **Re-running the installer rewrites `~/.zshrc`.** Harmless, but it has previously dropped a
  `COMPOSIO_INSTALL_DIR` export and left duplicate `~/.local/bin` PATH lines.
- **`--no-wait` + `--poll` beats a blocking login.** The plain `composio login` blocks on a browser
  handoff, which is awkward from an agent shell.
- **Never use `composio login --agent` here.** It creates an anonymous Composio agent account
  instead of using Peter's — only for genuinely unattended machines.
- **Session artifacts** (downloads, `run`/`execute` outputs) land in `/tmp/composio/`, scoped per
  working directory. `composio artifacts cwd` prints the path.
