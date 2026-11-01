# v5.0.16 — Backup import hardening

- Validate backup schema and record types before importing.
- Reject prototype-pollution keys and malformed/oversized data.
- Confirm before replacing progress and restore in-memory state on save failure.
- Fix two incorrect navigation version labels.
- Include deterministic backup tests. Browser/iPhone/offline tests still unverified.
- Production acceptance remains blocked.
