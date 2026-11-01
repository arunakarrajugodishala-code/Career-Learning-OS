# v5.0.15 — Browser QA candidate

This release adds a reproducible real-browser navigation suite for desktop and mobile viewports, including JavaScript error detection, missing content and horizontal overflow checks. It is an automated TEST SUITE, not a claim that browser tests have passed.

## Run on laptop

1. Extract the ZIP. Open a terminal in the extracted directory.
2. Install Playwright: `python -m pip install playwright` then `python -m playwright install chromium`.
3. Run: `python tests/v5015_browser_e2e.py`.
4. Inspect `reports/V5015-BROWSER-RESULTS.json` and fix any failures.

The suite uses a temporary browser profile and a local HTTP server; it does not use your existing browser learning data. A GitHub Pages site still needs manual testing on iPhone Safari, especially offline installation, backup export/import, quizzes, dropdowns, screen readers and keyboard interaction.

## Gate status

2/9 acceptance gates previously passed. Browser testing gate remains **BLOCKED** because this environment prevents Chromium from opening local sites (`ERR_BLOCKED_BY_ADMINISTRATOR`). No device tests or independent educational review were performed.
