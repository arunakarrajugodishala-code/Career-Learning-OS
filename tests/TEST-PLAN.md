# Acceptance test plan (release gate BLOCKED)

## Run on published GitHub Pages
1. Backup progress from v2.0 and keep the JSON file safe.
2. Replace repository root with v2.1 candidate files.
3. Open the website in desktop Chrome, Firefox and Safari; test all 16 navigation tabs.
4. Test on an actual iPhone in Safari and as a Home Screen app. Confirm navigation, dropdowns, forms, keyboard and long pages.
5. For every page, verify all buttons, input validation, progress saving and reload behaviour.
6. Check offline mode: visit while online, close, enable airplane mode and reopen the installed app; test available learning pages.
7. Test backup roundtrip in a separate browser profile; check that all journal and revision fields survive.
8. Use keyboard-only navigation and screen reader; check WCAG 2.2 AA, contrast, focus, labels, tap sizes and text at 200% zoom.
9. Open Release QA; export JSON; confirm production status BLOCKED until external reviews are completed.
10. Verify each teaching video, copyright/licence, each answer and rubric with an appropriate reviewer.
11. Verify current job visa/sponsorship details only from official current GOV.UK guidance.

## Do not claim passed without evidence
A JavaScript syntax check does not test a click. A URL format check does not establish that a video exists. A completed exercise is not independently mastered.
