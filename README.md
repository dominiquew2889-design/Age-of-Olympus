# Age of Olympus Stage 11 — Core Marriage Persistence Fix

Built directly from the current GitHub `game.js`.

Replace:
- index.html
- style.css
- game.js

Root cause:
`stage11CompleteMarriage()` created a Core union and immediately called the integrity repair.
`migrateStage11Core()` then cleared `core.unions=[]` before the new wedding had been copied to persistent systems.
The game could therefore show “Wedding Complete” while Divine Houses showed 0 Houses.

Fixes:
- Core marriages survive integrity rebuilds.
- Wedding data is persisted to Matchmaking, NPC marriages, Unified Olympus compatibility, Family Tree, and Relationships BEFORE repair.
- Match Accepted uses dedicated wedding actions, not generic family crisis actions.
- Wedding Complete is an informational activity, not another crisis modal.
- Divine Houses render directly from Olympus Core.
- Matchmaking dynasties render directly from Olympus Core houses.
- Existing accepted betrothals and durable weddings are repaired on load.
- Same Stage 11 save key is preserved.

No new campaign is required.
