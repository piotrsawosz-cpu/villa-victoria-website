# NotebookLM connector

Lets Claude drive Google NotebookLM end-to-end — create notebooks, push sources (URLs, PDFs, pasted text), ask questions, and generate audio overviews / mind maps / briefing docs / quizzes.

Powered by the unofficial **[`notebooklm-py`](https://github.com/teng-lin/notebooklm-py)** Python package (uses undocumented Google APIs — not affiliated with Google, can break without notice). Claude shells out to its `notebooklm` CLI; there's no MCP server.

## What this connects to

- **Account:** Peter's personal Google account (`piotr.sawosz@gmail.com`)
- **Service:** [notebooklm.google.com](https://notebooklm.google.com/)

## How it's installed on this Mac

The library lives in a `uv`-managed tool venv (Homebrew Python failed under macOS Tahoe due to a libexpat link mismatch in the bottle, so `uv` provides its own CPython 3.12).

```bash
brew install uv
uv tool install "notebooklm-py[browser]" --python 3.12
~/.local/share/uv/tools/notebooklm-py/bin/playwright install chromium
```

The `notebooklm` binary ends up at `~/.local/bin/notebooklm` (already on PATH).

If Homebrew ever ships a fixed `python@3.12` bottle, this could move to `pipx install "notebooklm-py[browser]"` for consistency with how other Python CLIs are installed — but `uv` is fine and works today.

## Auth

```bash
notebooklm login
```

Opens Chromium, you sign into Google, library captures session cookies into `~/.notebooklm/storage_state.json`. **No tokens or secrets in this repo.**

Cookies expire (timeline undocumented, expect every few weeks). When commands start failing with auth errors, re-run `notebooklm login`.

Diagnose:

```bash
notebooklm auth check --test
```

## Claude Code skill

Installed at `~/.claude/skills/notebooklm/SKILL.md` via:

```bash
notebooklm skill install
```

User-level (works in any project on this Mac), not project-level. Reinstall after `uv tool upgrade notebooklm-py` if the bundled skill changes.

## Common commands

```bash
# Notebooks
notebooklm list
notebooklm create "Villa Victoria — UK Avatar Research"
notebooklm use <id>     # set active context (partial IDs work)
notebooklm rename <id> "New name"
notebooklm delete <id>

# Sources
notebooklm source add "https://example.com"
notebooklm source add ./paper.pdf
notebooklm source add-research "luxury villa rental UK families"  # web research → auto-imports sources

# Chat
notebooklm ask "Summarize the recurring complaints in these reviews."

# Generate
notebooklm generate audio "warm, conversational, 10 minutes" --wait
notebooklm generate report --template briefing
notebooklm generate mind-map
notebooklm generate quiz --difficulty hard

# Download artifacts
notebooklm download audio ./podcast.mp3
notebooklm download report ./briefing.md
notebooklm download mind-map ./mindmap.json
```

Full reference: `notebooklm <command> --help` or [the package docs](https://github.com/teng-lin/notebooklm-py/blob/main/docs/cli-reference.md).

## How this fits Villa Victoria's workflow

The strongest use case is **research digestion**. The research prompts in [`ads/research-prompts/`](../../ads/research-prompts/) (e.g. the UK avatar prompt) work well as NotebookLM inputs:

1. Run the research prompt elsewhere (Claude / Gemini / GPT) to collect a set of source URLs.
2. `notebooklm create "<topic>"`, then `notebooklm source add <url>` for each.
3. `notebooklm generate report --template briefing` for a structured doc you can drop into [`context/`](../../context/).
4. Optionally `notebooklm generate audio` for a podcast you can listen to in the car before a strategy session.

## Guardrails

- **Don't paste guest data, booking emails, or anything PII** as a source. Treat NotebookLM as a public Google service.
- **Treat outputs as drafts**, not facts — the library uses undocumented endpoints and the underlying model can hallucinate sources.
- **Don't bake notebook IDs into website code or anything customer-facing.** The library may break; never ship anything that depends on it being available.
- **Cookies are personal credentials.** The `~/.notebooklm/storage_state.json` file is a session token — don't share it, don't commit it (`~/.notebooklm/` is outside the repo so this is automatic, but worth saying).

## Recovery

```bash
notebooklm auth check --test           # diagnose auth
notebooklm login                       # re-auth if cookies expired
uv tool upgrade notebooklm-py          # pull a newer release if the API changed underneath
notebooklm skill install               # reinstall skill after upgrade
notebooklm skill uninstall             # remove the Claude Code skill
uv tool uninstall notebooklm-py        # remove the tool entirely
```

If the underlying Google endpoints have shifted and `uv tool upgrade` doesn't help, check the [`notebooklm-py` issues](https://github.com/teng-lin/notebooklm-py/issues) — the maintainer is generally quick.
