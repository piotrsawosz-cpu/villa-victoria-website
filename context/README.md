# Context — Index

> This file is the index for everything in `context/`. Claude reads this first; individual files are read only when their entry below indicates relevance to the current task.

## Files

| File | Read when… |
|---|---|
| `project-overview.md` | At the start of a new session, or when asked about the project's purpose, scope, or stage. |
<!-- Add a row whenever a context file is added. The "Read when…" column must be specific enough that Claude can decide relevance from this entry alone, without opening the file. -->

## Conventions

- One topic per file. Many small files beats one giant one.
- Filenames describe content: `auth-flow.md`, not `notes-2.md`.
- First line of each file: a one-sentence summary.
- Split files that grow past ~500 lines.
- When you add a file here, add its row to the index above in the same change.
