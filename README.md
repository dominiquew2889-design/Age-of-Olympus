# Age of Olympus v1.4.0 Stage 10 — Marriage Synchronization Fix

Replace:
- index.html
- style.css
- game.js

This is a corrective replacement build for Stage 10 and keeps the SAME Stage 10 save key, so the current campaign is preserved.

Fixes:

- Player-arranged marriages now get written to a permanent canonical NPC marriage registry.
- Existing Stage 10 weddings are automatically imported and repaired when the save loads.
- Family Tree now reads and repairs the same marriage source before rendering.
- A married god/Titan no longer remains labeled Unmarried in the Family Tree.
- Relationship roster status is forced to Married for both spouses.
- Legacy autonomous NPC marriage records are kept synchronized.
- Every married pair gets a Divine House if one does not already exist.
- Divine Houses are repaired before rendering.
- Existing immortal children are attached to both parents and their Divine House.
- Parent `children` arrays are repaired in the Family Tree.
- Unified Olympus spouse links are rebuilt on every synchronization pass.
- Living Souls receives marriage memories.
- The system repairs marriage links on load, on render, after weddings, after childbirth, and each year.

Example:
If Hades and Persephone marry through Matchmaking:
- Hades → Spouse: Persephone
- Persephone → Spouse: Hades
- Relationships → Married
- Family Tree → Married
- House of Hades & Persephone → created
- Future immortal children → linked to both parents + house
- Chronicle / Alerts / Living Souls → synchronized

No new campaign is required.
