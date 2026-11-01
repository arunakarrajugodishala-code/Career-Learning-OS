# Career Learning OS v5.1.0

A free self-study app for GitHub Pages. This is a working learning workspace, not a fully reviewed beginner-to-advanced academy or accredited qualification. Full acceptance remains pending.

## Start
Open Home → My learning. Search Lesson library, open a lesson, read its worked example, practise, save notes, and answer knowledge questions. Practice completion is self-reported. Original course pages retain their original progress records; the unified library records new activity separately.

- 169 indexed existing lessons and project tasks; 411 knowledge questions. Some entries are short practical prompts rather than full courses. Indexing is not coverage certification.
- 15 role-specific portfolio project briefs, interview reasoning examples and editable application worksheets in Career centre.
- Backup exports all supported current app records, including nested learning state, practice history, project evidence and career worksheets. The local safety snapshots and temporary diagnostics are excluded.
- Full schema 2 restores replace supported records after inspection and confirmation, with an undo snapshot. Legacy schema 1 imports preserve their nested learning state and leave auxiliary records untouched. Reload after restoration before using older course pages.
- Written app content and lab assets are precached; external reference sites and videos require internet. No real offline AI tutor, auto sync or remote account storage is connected.

## Checks
`node tests/v51_regression.cjs` runs 19 regression scenarios. `node tests/v5023_offline_simulation.cjs` runs 9 service-worker simulation scenarios and writes V51 evidence. `reports/V51-CHECKS.json` records 78 JavaScript parse checks and 7 test program executions. `reports/V51-BROWSER.json` records actual Chrome interactions across all 48 routes and the new main workflows. Simulation, syntax and route checks have distinct meanings.

## Acceptance
Nine current gates appear in Nine release gates, Release QA and Release readiness. No overall PASS is asserted. Outstanding: full syllabus depth and mapping, qualified lesson/answer review, individual external video/licence/accessibility review, full accessibility and security review, comprehensive form coverage, real iPhone and installed offline/update checks, and physical device transfer. Older version reports are historical evidence and are superseded for current status.

## Updates and recovery
Deploy the repository root to GitHub Pages. Keep index.html at the root and preserve icons/, labs/, tests/ and reports/. Application assets are served from one installed cache snapshot. A changed service-worker cache version installs the next snapshot; reload after a successful update. Existing learning storage keys are preserved. Export before updating or clearing storage. Browser clearing and private browsing may remove progress and snapshots. For rollback, revert the release commit and deploy the previous source; do not clear local storage.

No secrets or real patient data belong in notes, public portfolios or the repository. User-entered data is rendered as text. Local browser data is not encrypted. Keep exported backups private. Check the actual vacancy and current official immigration guidance before career decisions; this app does not determine eligibility.
