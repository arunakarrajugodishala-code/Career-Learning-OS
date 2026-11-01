# v5.0.23 — Offline service-worker simulation

- Fixed offline navigation fallback for uncached same-origin routes.
- 9/9 simulated Service Worker tests passed (Node VM, mocked network and CacheStorage).
- Real localhost navigation in Chromium was blocked by environment policy (`ERR_BLOCKED_BY_ADMINISTRATOR`).
- Real PWA offline reopening, iPhone Safari and disk persistence remain unverified.
- Release gates remain 2/9; production BLOCKED.
- Backup your progress before upgrading GitHub Pages.
