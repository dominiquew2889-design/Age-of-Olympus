# Age of Olympus v1.4.0 Stage 11 — Olympus Core Rebuild & System Consolidation

Replace:
- index.html
- style.css
- game.js

## Core Rebuild
Stage 11 consolidates overlapping systems instead of layering more duplicate state.

### Unified Divine Union
Marriage now has one authoritative record.
The following systems rebuild from it:
- Matchmaking
- Relationships
- Family Tree
- Divine Houses
- NPC marriages
- Unified Olympus compatibility data
- future immortal children
- Chronicle and Alerts

### Unified Genealogy
Parent/child links are rebuilt from one graph.
Parents and children are cross-checked both directions.

### Unified Divine Houses
Divine Houses are generated from active married unions.
If Hades and Persephone are married, House of Hades & Persephone exists automatically.
Children and demigod branches are attached from genealogy.

### Alert lifecycle repair
Old matchmaking alerts are automatically marked resolved when the wedding completes.
Betrothals can also be cancelled.

### Central interaction router
Stage 11 adds centralized click routing for new core actions so rerenders do not break click handlers.

### Integrity repair
On load and after advancing a year, the game checks:
- spouse A agrees with spouse B
- every married pair has a Divine House
- children list their parents
- parents list their children
- Family Tree matches the core
- Relationships matches the core
- Divine Houses matches the core

The new Chronicle → Olympus Core page shows system integrity and allows a manual repair pass.

## Save Migration
Stage 11 uses `ageOfOlympusSaveV140S11`.
If unavailable, it loads Stage 10 and earlier compatible saves, then repairs them into the new core model.

All existing gameplay remains included.
