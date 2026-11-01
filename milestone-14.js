window.CLOS.milestones.push(...[
  {
    "id": "milestone-14-01",
    "stage": "v1.4 — Healthcare / EPR / BA / QA depth",
    "title": "EPR workflow discovery",
    "objective": "Map current and future clinical workflows with stakeholder review",
    "example": "A cancelled appointment still appears in a clinic list; trace workflow states and ownership.",
    "task": "Create a fictional as-is/to-be process map with exception routes.",
    "question": "Why should clinicians review a workflow map?",
    "reviewHint": "Check your answer against the objective and scenario. Identify assumptions, demonstrate a reproducible example, and explain the risks or limitations. A qualified reviewer must assess the work before mastery can be claimed.",
    "videoVerified": false,
    "expertReviewed": false
  },
  {
    "id": "milestone-14-02",
    "stage": "v1.4 — Healthcare / EPR / BA / QA depth",
    "title": "FHIR resources and references",
    "objective": "Read resourceType, id, references and basic bundle structure",
    "example": "An Observation references a Patient that is absent from the bundle.",
    "task": "Validate the supplied fictional FHIR bundle for reference consistency.",
    "question": "Does syntactically valid JSON guarantee valid FHIR?",
    "reviewHint": "Check your answer against the objective and scenario. Identify assumptions, demonstrate a reproducible example, and explain the risks or limitations. A qualified reviewer must assess the work before mastery can be claimed.",
    "videoVerified": false,
    "expertReviewed": false
  },
  {
    "id": "milestone-14-03",
    "stage": "v1.4 — Healthcare / EPR / BA / QA depth",
    "title": "Clinical safety and change control",
    "objective": "Recognise hazards, controls, ownership and escalation",
    "example": "A medication allergy warning is hidden after a screen change.",
    "task": "Write a fictional hazard log entry and propose a safe escalation path.",
    "question": "Why must a high-risk change not rely on developer sign-off alone?",
    "reviewHint": "Check your answer against the objective and scenario. Identify assumptions, demonstrate a reproducible example, and explain the risks or limitations. A qualified reviewer must assess the work before mastery can be claimed.",
    "videoVerified": false,
    "expertReviewed": false
  },
  {
    "id": "milestone-14-04",
    "stage": "v1.4 — Healthcare / EPR / BA / QA depth",
    "title": "Requirements traceability",
    "objective": "Link requirements to acceptance criteria, tests and evidence",
    "example": "REQ-02 is not covered by any executed test.",
    "task": "Build a traceability matrix and identify missing tests.",
    "question": "What is the purpose of a requirement-to-test link?",
    "reviewHint": "Check your answer against the objective and scenario. Identify assumptions, demonstrate a reproducible example, and explain the risks or limitations. A qualified reviewer must assess the work before mastery can be claimed.",
    "videoVerified": false,
    "expertReviewed": false
  },
  {
    "id": "milestone-14-05",
    "stage": "v1.4 — Healthcare / EPR / BA / QA depth",
    "title": "EPR test strategy",
    "objective": "Design positive, negative, role and accessibility cases",
    "example": "An unauthorised role can edit an appointment outcome.",
    "task": "Write five tests including a permission denial and audit trail verification.",
    "question": "How do severity and priority differ?",
    "reviewHint": "Check your answer against the objective and scenario. Identify assumptions, demonstrate a reproducible example, and explain the risks or limitations. A qualified reviewer must assess the work before mastery can be claimed.",
    "videoVerified": false,
    "expertReviewed": false
  }
]);
