# Repository comparison and implementation decisions — 1 November 2026

This is a targeted review of four relevant upstream projects, not an exhaustive review of all learning repositories. Their official repository pages were read. No code or curriculum from them was copied into this release.

| Project | Useful capability | Decision for this app |
|---|---|---|
| [FSRS4Anki](https://github.com/open-spaced-repetition/fsrs4anki) | Review scheduling and memory-model ecosystem | Add due recall cards using original, explicitly documented interval rules. FSRS and memory prediction are NOT integrated. A future FSRS integration needs its own history, validation and migration work. |
| [freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp) | Self-paced learning with interactive challenges | Add seven original fictional scenario activities with model reasoning and reflection rubrics. Preserve source links rather than copying upstream curriculum. |
| [Kolibri](https://github.com/learningequality/kolibri) | Offline-first learning | Keep written lessons, recall and scenarios in the existing PWA cache. External videos still need internet. Kolibri itself is not installed or embedded. |
| [H5P Interactive Video](https://github.com/h5p/h5p-interactive-video) | Tasks around video learning | Keep publisher-hosted videos and add separate recall/application practice. No timed video overlays or H5P runtime is claimed. |

## Gaps closed

- A focus-based 10/20/30-minute study plan, using recorded attempts to suggest revision where available.
- Recall cards across the existing 411-question catalogue, answer reveal, self-rating and due dates.
- Seven fictional practical scenarios, saveable drafts, model responses and four-point self-review rubrics.
- Saved lessons, seven-day activity, and three practice milestones without missed-day penalties.
- A source-health page and local-only resource-problem reports that can be exported.
- Repairs to two dead source references and one redirect that no longer reached the intended lesson.
- Corrections to resource assignments for reproducible CSV/QA tasks that had been misclassified through a substring match.

## Source audit scope

138 distinct URLs embedded in the authored course data and curated registry were checked over HTTP. 131 responded successfully before repairs. The IIBA and OpenLearn references returned 404; the GCF computer-basics URL redirected to a general goal-selection page. Those three references were replaced. Five other URLs blocked automated retrieval; they remain marked unresolved, not broken. Some source pages link to optional paid materials; app activity does not require a subscription.

Reachability does not establish playback, captions, licensing, topic relevance or teaching quality. The source-health date is a recorded check, not a continuously running background monitor. Publisher video availability and physical-device offline operation remain subject to separate checks.

## Deliberate limits

No live AI tutor, automatic cross-device sync, predictive memory model, external account system or professional accreditation was added. These would require separate infrastructure, data-handling and validation decisions. Full backup preserves the new coach and resource-report records in the existing learning state.
