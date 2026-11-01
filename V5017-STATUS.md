# v5.0.17 — Quiz scoring reliability

- Introduces a separate deterministic quiz scoring engine.
- Rejects incomplete submissions instead of saving misleading low scores.
- Rejects malformed question/answer data and out-of-range selections.
- Handles failed local progress saves and restores the previous in-memory attempt.
- Adds ten executable unit tests for the scoring engine.
- **Not yet verified:** full browser interactions, mobile Safari, device persistence, offline recovery, independent content accuracy.
- Production status: BLOCKED; previously established release gates remain 2/9.
