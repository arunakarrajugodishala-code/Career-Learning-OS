window.CLOS.milestones.push(...[
  {
    "id": "milestone-19-01",
    "stage": "v1.9 — Reliability and QA",
    "title": "Accessibility and responsive testing",
    "objective": "Check keyboard, focus, labels and narrow screens",
    "example": "A dropdown is unusable at 320px width.",
    "task": "Run a manual keyboard and mobile checklist and record screenshots.",
    "question": "Does successful JS syntax guarantee an accessible UI?",
    "reviewHint": "Check your answer against the objective and scenario. Identify assumptions, demonstrate a reproducible example, and explain the risks or limitations. A qualified reviewer must assess the work before mastery can be claimed.",
    "videoVerified": false,
    "expertReviewed": false
  },
  {
    "id": "milestone-19-02",
    "stage": "v1.9 — Reliability and QA",
    "title": "Offline and backup recovery",
    "objective": "Test fresh install, offline cache and restore scenarios",
    "example": "A new release changes storage format and progress disappears.",
    "task": "Export a backup, restore into a test browser profile and compare records.",
    "question": "Why test restoration rather than export alone?",
    "reviewHint": "Check your answer against the objective and scenario. Identify assumptions, demonstrate a reproducible example, and explain the risks or limitations. A qualified reviewer must assess the work before mastery can be claimed.",
    "videoVerified": false,
    "expertReviewed": false
  },
  {
    "id": "milestone-19-03",
    "stage": "v1.9 — Reliability and QA",
    "title": "Security and dependency audit",
    "objective": "Check XSS, input validation, secrets and dependency exposure",
    "example": "A user note contains HTML tags.",
    "task": "Document how displayed user content is escaped and test with harmless markup.",
    "question": "Why must secrets never be committed to a public repository?",
    "reviewHint": "Check your answer against the objective and scenario. Identify assumptions, demonstrate a reproducible example, and explain the risks or limitations. A qualified reviewer must assess the work before mastery can be claimed.",
    "videoVerified": false,
    "expertReviewed": false
  },
  {
    "id": "milestone-19-04",
    "stage": "v1.9 — Reliability and QA",
    "title": "Release regression evidence",
    "objective": "Separate passed, failed, blocked and not-tested checks",
    "example": "A developer marks a release green without running mobile tests.",
    "task": "Create a release evidence log with test owner, date, result and reproduction.",
    "question": "Why is NOT_TESTED different from PASS?",
    "reviewHint": "Check your answer against the objective and scenario. Identify assumptions, demonstrate a reproducible example, and explain the risks or limitations. A qualified reviewer must assess the work before mastery can be claimed.",
    "videoVerified": false,
    "expertReviewed": false
  }
]);
