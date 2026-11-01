# Career Learning OS v5.0.27

This is a corrected review build, not a 9/9 approved final release.

## Changes
- Restored labelled navigation landmark used by accessibility and diagnostic checks.
- Backup opens the protected inspect/restore/undo workflow.
- Home returns keyboard focus to main content; Escape closes the mobile menu.
- Fixed diagnostic route counting to exclude the Home control.
- Updated service-worker cache version for the changed files.

## Verification
82 automated checks passed, including all 76 JavaScript syntax checks and six regression test programs. All 46 navigation routes opened with content in the managed Chrome preview. Backup displayed the protected workflow with restore disabled before inspection. Details: reports/V5027-AUTOMATED.json and reports/V5027-RELEASE.json.

## Still required for full acceptance
Physical iPhone/Safari checks; HTTPS offline install/restart/update; cross-browser backup restoration; exhaustive form, accessibility and security review; qualified educational and answer-key review; individual resource verification and current career guidance review. Historical audit files refer to earlier builds. No overall gate score is asserted because the inherited documents define inconsistent gate totals (9, 10 and 13).

## One GitHub upload
1. Export progress from your existing app and keep the backup.
2. Download a ZIP of your existing repository for rollback.
3. Extract this ZIP and upload its contents to your GitHub Pages repository root, preserving icons/, labs/, tests/ and reports/.
4. Commit once. Confirm GitHub Pages deployment succeeds.
5. Open the deployed HTTPS page, reload once, then test Device Evidence, backup restore on a disposable profile and offline reopening.

Progress remains local to each browser. Use export/import to transfer it. Backups contain your notes; keep them private. This build preserves the existing progress key. No automatic sync or accredited qualification is supplied.
