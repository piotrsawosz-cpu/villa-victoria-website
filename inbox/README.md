# Inbox

Drop zone for new files. Nothing here is permanent.

## Workflow

1. The user drops files here.
2. The user says "I added X to inbox" or runs `/triage-inbox`.
3. Claude reads each file, proposes a destination, and waits for confirmation before moving anything.

## Rules

- Never delete files from inbox without telling the user.
- Never move files out silently — always propose first.
- This `README.md` stays. Don't move or delete it.
- Files here are gitignored except this README.
