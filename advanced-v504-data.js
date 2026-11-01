window.CLOS.advancedV504=[
  {
    "id": "v504-01",
    "domain": "Cybersecurity",
    "title": "Asset inventory and risk prioritisation",
    "explanation": "Identify devices, accounts, datasets and interfaces; classify their business importance and exposure. Risk combines likelihood, impact and uncertainty; scores are decisions aids, not objective facts.",
    "worked": "A fictional clinic lists a public appointment site, staff laptops and a backup store. It assigns owners and identifies the appointment site as externally exposed.",
    "practice": "Build an asset register with owners, classification, dependencies and three risk scenarios.",
    "project": "Produce a synthetic risk register, justified priority order and residual-risk review.",
    "questions": [
      {
        "prompt": "What is the main purpose of asset inventory and risk prioritisation?",
        "choices": [
          "To avoid documenting limitations",
          "Identify devices, accounts, datasets and interfaces; classify their business importance and exposure.",
          "To guarantee that no failures can occur"
        ],
        "answer": 1,
        "explanation": "Identify devices, accounts, datasets and interfaces; classify their business importance and exposure."
      },
      {
        "prompt": "Which activity best demonstrates practical understanding of asset inventory and risk prioritisation?",
        "choices": [
          "Produce a synthetic risk register, justified priority order and residual-risk review.",
          "Only reading the page title",
          "Claiming mastery without evidence"
        ],
        "answer": 0,
        "explanation": "An independently reviewed artefact and its limitations provide stronger evidence than a short quiz."
      },
      {
        "prompt": "What should happen when a critical check has not been executed?",
        "choices": [
          "Mark it PASS",
          "Remove it from the report",
          "Record NOT_TESTED and block release if mandatory"
        ],
        "answer": 2,
        "explanation": "Unexecuted checks cannot justify release approval."
      }
    ],
    "review": "Independent expert review pending"
  },
  {
    "id": "v504-02",
    "domain": "Cybersecurity",
    "title": "Identity, MFA and least privilege",
    "explanation": "Authentication verifies identity; authorisation determines permitted actions. MFA reduces some account compromise risks but does not eliminate phishing or session theft. Review privileges and revoke unused access.",
    "worked": "A contractor needs read-only access for a two-week test. An expiry date and audit logging prevent indefinite access.",
    "practice": "Create a role-permission matrix and explain separation of duties.",
    "project": "Design an access review checklist with emergency access, revocation and audit evidence.",
    "questions": [
      {
        "prompt": "What is the main purpose of identity, mfa and least privilege?",
        "choices": [
          "To avoid documenting limitations",
          "Authentication verifies identity; authorisation determines permitted actions.",
          "To guarantee that no failures can occur"
        ],
        "answer": 1,
        "explanation": "Authentication verifies identity; authorisation determines permitted actions."
      },
      {
        "prompt": "Which activity best demonstrates practical understanding of identity, mfa and least privilege?",
        "choices": [
          "Design an access review checklist with emergency access, revocation and audit evidence.",
          "Only reading the page title",
          "Claiming mastery without evidence"
        ],
        "answer": 0,
        "explanation": "An independently reviewed artefact and its limitations provide stronger evidence than a short quiz."
      },
      {
        "prompt": "What should happen when a critical check has not been executed?",
        "choices": [
          "Mark it PASS",
          "Remove it from the report",
          "Record NOT_TESTED and block release if mandatory"
        ],
        "answer": 2,
        "explanation": "Unexecuted checks cannot justify release approval."
      }
    ],
    "review": "Independent expert review pending"
  },
  {
    "id": "v504-03",
    "domain": "Cybersecurity",
    "title": "Incident response and evidence",
    "explanation": "Incident response involves preparation, detection, containment, eradication, recovery and lessons learned. Preserve relevant evidence and follow authorised reporting paths; do not investigate live systems without permission.",
    "worked": "A fictional monitoring alert reports suspicious sign-ins. The team records timestamps, escalates and disables affected access under policy.",
    "practice": "Write a timeline from fictional alerts and identify when escalation is needed.",
    "project": "Draft a tabletop incident report with roles, communication, containment and recovery verification.",
    "questions": [
      {
        "prompt": "What is the main purpose of incident response and evidence?",
        "choices": [
          "To avoid documenting limitations",
          "Incident response involves preparation, detection, containment, eradication, recovery and lessons learned.",
          "To guarantee that no failures can occur"
        ],
        "answer": 1,
        "explanation": "Incident response involves preparation, detection, containment, eradication, recovery and lessons learned."
      },
      {
        "prompt": "Which activity best demonstrates practical understanding of incident response and evidence?",
        "choices": [
          "Draft a tabletop incident report with roles, communication, containment and recovery verification.",
          "Only reading the page title",
          "Claiming mastery without evidence"
        ],
        "answer": 0,
        "explanation": "An independently reviewed artefact and its limitations provide stronger evidence than a short quiz."
      },
      {
        "prompt": "What should happen when a critical check has not been executed?",
        "choices": [
          "Mark it PASS",
          "Remove it from the report",
          "Record NOT_TESTED and block release if mandatory"
        ],
        "answer": 2,
        "explanation": "Unexecuted checks cannot justify release approval."
      }
    ],
    "review": "Independent expert review pending"
  },
  {
    "id": "v504-04",
    "domain": "Cloud & DevOps",
    "title": "Cloud architecture and shared responsibility",
    "explanation": "Cloud providers secure parts of the underlying service; customers remain responsible for their configurations, access, data and application behaviour. Design for reliability, least privilege and cost visibility.",
    "worked": "A fictional learning site serves static assets via a CDN while private progress records require an authenticated backend.",
    "practice": "Draw the trust boundaries of static hosting, API, identity and storage.",
    "project": "Create a cloud design with threat assumptions, estimated cost drivers and failure scenarios.",
    "questions": [
      {
        "prompt": "What is the main purpose of cloud architecture and shared responsibility?",
        "choices": [
          "To avoid documenting limitations",
          "Cloud providers secure parts of the underlying service; customers remain responsible for their configurations, access, data and application behaviour.",
          "To guarantee that no failures can occur"
        ],
        "answer": 1,
        "explanation": "Cloud providers secure parts of the underlying service; customers remain responsible for their configurations, access, data and application behaviour."
      },
      {
        "prompt": "Which activity best demonstrates practical understanding of cloud architecture and shared responsibility?",
        "choices": [
          "Create a cloud design with threat assumptions, estimated cost drivers and failure scenarios.",
          "Only reading the page title",
          "Claiming mastery without evidence"
        ],
        "answer": 0,
        "explanation": "An independently reviewed artefact and its limitations provide stronger evidence than a short quiz."
      },
      {
        "prompt": "What should happen when a critical check has not been executed?",
        "choices": [
          "Mark it PASS",
          "Remove it from the report",
          "Record NOT_TESTED and block release if mandatory"
        ],
        "answer": 2,
        "explanation": "Unexecuted checks cannot justify release approval."
      }
    ],
    "review": "Independent expert review pending"
  },
  {
    "id": "v504-05",
    "domain": "Cloud & DevOps",
    "title": "CI/CD checks and rollback",
    "explanation": "Continuous integration runs reproducible checks on each change. Deployment pipelines need gated approvals, secrets protection, artefact integrity and a rollback strategy. A green syntax check is not a successful browser test.",
    "worked": "A new release passes unit tests but fails the mobile smoke test; deployment is blocked and the previous version remains available.",
    "practice": "Specify a pipeline from commit to staging to production with required gates.",
    "project": "Write a sample CI workflow specification and an evidence-based rollback runbook.",
    "questions": [
      {
        "prompt": "What is the main purpose of ci/cd checks and rollback?",
        "choices": [
          "To avoid documenting limitations",
          "Continuous integration runs reproducible checks on each change.",
          "To guarantee that no failures can occur"
        ],
        "answer": 1,
        "explanation": "Continuous integration runs reproducible checks on each change."
      },
      {
        "prompt": "Which activity best demonstrates practical understanding of ci/cd checks and rollback?",
        "choices": [
          "Write a sample CI workflow specification and an evidence-based rollback runbook.",
          "Only reading the page title",
          "Claiming mastery without evidence"
        ],
        "answer": 0,
        "explanation": "An independently reviewed artefact and its limitations provide stronger evidence than a short quiz."
      },
      {
        "prompt": "What should happen when a critical check has not been executed?",
        "choices": [
          "Mark it PASS",
          "Remove it from the report",
          "Record NOT_TESTED and block release if mandatory"
        ],
        "answer": 2,
        "explanation": "Unexecuted checks cannot justify release approval."
      }
    ],
    "review": "Independent expert review pending"
  },
  {
    "id": "v504-06",
    "domain": "Cloud & DevOps",
    "title": "Observability, SLOs and recovery",
    "explanation": "Logs, metrics and traces answer different questions. Service level objectives define acceptable reliability. Backup existence alone is not recovery: test restoration and measure recovery point and time objectives.",
    "worked": "A fictional app tracks failed requests, latency and storage failures, then rehearses recovery using test records.",
    "practice": "Define three measurable indicators and a threshold with alert ownership.",
    "project": "Produce a synthetic incident dashboard and recovery rehearsal report.",
    "questions": [
      {
        "prompt": "What is the main purpose of observability, slos and recovery?",
        "choices": [
          "To avoid documenting limitations",
          "Logs, metrics and traces answer different questions.",
          "To guarantee that no failures can occur"
        ],
        "answer": 1,
        "explanation": "Logs, metrics and traces answer different questions."
      },
      {
        "prompt": "Which activity best demonstrates practical understanding of observability, slos and recovery?",
        "choices": [
          "Produce a synthetic incident dashboard and recovery rehearsal report.",
          "Only reading the page title",
          "Claiming mastery without evidence"
        ],
        "answer": 0,
        "explanation": "An independently reviewed artefact and its limitations provide stronger evidence than a short quiz."
      },
      {
        "prompt": "What should happen when a critical check has not been executed?",
        "choices": [
          "Mark it PASS",
          "Remove it from the report",
          "Record NOT_TESTED and block release if mandatory"
        ],
        "answer": 2,
        "explanation": "Unexecuted checks cannot justify release approval."
      }
    ],
    "review": "Independent expert review pending"
  },
  {
    "id": "v504-07",
    "domain": "Python Automation",
    "title": "Defensive scripting and input validation",
    "explanation": "Scripts should validate inputs, use explicit encodings, handle expected errors and avoid silently dropping records. Keep secrets out of code and logs; use least-privileged file access.",
    "worked": "A CSV importer rejects missing required columns and reports row numbers without logging personal data.",
    "practice": "Write pseudocode for validating headers, types and duplicate IDs.",
    "project": "Create a local synthetic CSV validator with tests for empty, malformed and duplicate rows.",
    "questions": [
      {
        "prompt": "What is the main purpose of defensive scripting and input validation?",
        "choices": [
          "To avoid documenting limitations",
          "Scripts should validate inputs, use explicit encodings, handle expected errors and avoid silently dropping records.",
          "To guarantee that no failures can occur"
        ],
        "answer": 1,
        "explanation": "Scripts should validate inputs, use explicit encodings, handle expected errors and avoid silently dropping records."
      },
      {
        "prompt": "Which activity best demonstrates practical understanding of defensive scripting and input validation?",
        "choices": [
          "Create a local synthetic CSV validator with tests for empty, malformed and duplicate rows.",
          "Only reading the page title",
          "Claiming mastery without evidence"
        ],
        "answer": 0,
        "explanation": "An independently reviewed artefact and its limitations provide stronger evidence than a short quiz."
      },
      {
        "prompt": "What should happen when a critical check has not been executed?",
        "choices": [
          "Mark it PASS",
          "Remove it from the report",
          "Record NOT_TESTED and block release if mandatory"
        ],
        "answer": 2,
        "explanation": "Unexecuted checks cannot justify release approval."
      }
    ],
    "review": "Independent expert review pending"
  },
  {
    "id": "v504-08",
    "domain": "Python Automation",
    "title": "API requests, pagination and retries",
    "explanation": "HTTP clients must handle status codes, timeouts, pagination and rate limits. Retries require bounded backoff and care with non-idempotent operations. Never assume every API response has the expected schema.",
    "worked": "A fictional endpoint returns 429 and a retry hint; the client waits and retries within a defined limit.",
    "practice": "Diagram pagination and identify safe versus unsafe retry scenarios.",
    "project": "Write an API integration design using mock responses, timeouts and an error budget.",
    "questions": [
      {
        "prompt": "What is the main purpose of api requests, pagination and retries?",
        "choices": [
          "To avoid documenting limitations",
          "HTTP clients must handle status codes, timeouts, pagination and rate limits.",
          "To guarantee that no failures can occur"
        ],
        "answer": 1,
        "explanation": "HTTP clients must handle status codes, timeouts, pagination and rate limits."
      },
      {
        "prompt": "Which activity best demonstrates practical understanding of api requests, pagination and retries?",
        "choices": [
          "Write an API integration design using mock responses, timeouts and an error budget.",
          "Only reading the page title",
          "Claiming mastery without evidence"
        ],
        "answer": 0,
        "explanation": "An independently reviewed artefact and its limitations provide stronger evidence than a short quiz."
      },
      {
        "prompt": "What should happen when a critical check has not been executed?",
        "choices": [
          "Mark it PASS",
          "Remove it from the report",
          "Record NOT_TESTED and block release if mandatory"
        ],
        "answer": 2,
        "explanation": "Unexecuted checks cannot justify release approval."
      }
    ],
    "review": "Independent expert review pending"
  },
  {
    "id": "v504-09",
    "domain": "Python Automation",
    "title": "Testing, logging and scheduling",
    "explanation": "Separate pure functions from I/O so they can be unit tested. Log useful operational context without sensitive values. Scheduled jobs need monitoring, idempotency and clear failure notifications.",
    "worked": "A nightly synthetic report job reruns safely after interruption without duplicating output.",
    "practice": "Specify unit tests, integration tests and a failure injection case.",
    "project": "Create a scheduled-job test plan including partial failure, restart and audit logs.",
    "questions": [
      {
        "prompt": "What is the main purpose of testing, logging and scheduling?",
        "choices": [
          "To avoid documenting limitations",
          "Separate pure functions from I/O so they can be unit tested.",
          "To guarantee that no failures can occur"
        ],
        "answer": 1,
        "explanation": "Separate pure functions from I/O so they can be unit tested."
      },
      {
        "prompt": "Which activity best demonstrates practical understanding of testing, logging and scheduling?",
        "choices": [
          "Create a scheduled-job test plan including partial failure, restart and audit logs.",
          "Only reading the page title",
          "Claiming mastery without evidence"
        ],
        "answer": 0,
        "explanation": "An independently reviewed artefact and its limitations provide stronger evidence than a short quiz."
      },
      {
        "prompt": "What should happen when a critical check has not been executed?",
        "choices": [
          "Mark it PASS",
          "Remove it from the report",
          "Record NOT_TESTED and block release if mandatory"
        ],
        "answer": 2,
        "explanation": "Unexecuted checks cannot justify release approval."
      }
    ],
    "review": "Independent expert review pending"
  },
  {
    "id": "v504-10",
    "domain": "Data Engineering & AI",
    "title": "Data pipelines and lineage",
    "explanation": "Pipelines ingest, transform, validate and publish data. Track sources, schema changes, ownership and lineage. Check completeness, uniqueness, timeliness and reconciliation before using outputs.",
    "worked": "A fictional appointment export adds a new status; the pipeline quarantines unexpected values rather than silently misclassifying them.",
    "practice": "Define data contracts and three automated quality assertions.",
    "project": "Design a synthetic ETL pipeline with lineage, exception handling and reconciliation.",
    "questions": [
      {
        "prompt": "What is the main purpose of data pipelines and lineage?",
        "choices": [
          "To avoid documenting limitations",
          "Pipelines ingest, transform, validate and publish data.",
          "To guarantee that no failures can occur"
        ],
        "answer": 1,
        "explanation": "Pipelines ingest, transform, validate and publish data."
      },
      {
        "prompt": "Which activity best demonstrates practical understanding of data pipelines and lineage?",
        "choices": [
          "Design a synthetic ETL pipeline with lineage, exception handling and reconciliation.",
          "Only reading the page title",
          "Claiming mastery without evidence"
        ],
        "answer": 0,
        "explanation": "An independently reviewed artefact and its limitations provide stronger evidence than a short quiz."
      },
      {
        "prompt": "What should happen when a critical check has not been executed?",
        "choices": [
          "Mark it PASS",
          "Remove it from the report",
          "Record NOT_TESTED and block release if mandatory"
        ],
        "answer": 2,
        "explanation": "Unexecuted checks cannot justify release approval."
      }
    ],
    "review": "Independent expert review pending"
  },
  {
    "id": "v504-11",
    "domain": "Data Engineering & AI",
    "title": "Model evaluation and data leakage",
    "explanation": "Evaluation needs a defined task, representative holdout data and metrics aligned with harm. Leakage occurs when training uses information unavailable at prediction time. Check subgroup performance and distribution shifts.",
    "worked": "A fictional triage model appears accurate because its training data includes a post-outcome field; removing that field changes results.",
    "practice": "Identify leakage in three sample feature descriptions and choose suitable metrics.",
    "project": "Write a model card using synthetic data, error analysis and explicit deployment limits.",
    "questions": [
      {
        "prompt": "What is the main purpose of model evaluation and data leakage?",
        "choices": [
          "To avoid documenting limitations",
          "Evaluation needs a defined task, representative holdout data and metrics aligned with harm.",
          "To guarantee that no failures can occur"
        ],
        "answer": 1,
        "explanation": "Evaluation needs a defined task, representative holdout data and metrics aligned with harm."
      },
      {
        "prompt": "Which activity best demonstrates practical understanding of model evaluation and data leakage?",
        "choices": [
          "Write a model card using synthetic data, error analysis and explicit deployment limits.",
          "Only reading the page title",
          "Claiming mastery without evidence"
        ],
        "answer": 0,
        "explanation": "An independently reviewed artefact and its limitations provide stronger evidence than a short quiz."
      },
      {
        "prompt": "What should happen when a critical check has not been executed?",
        "choices": [
          "Mark it PASS",
          "Remove it from the report",
          "Record NOT_TESTED and block release if mandatory"
        ],
        "answer": 2,
        "explanation": "Unexecuted checks cannot justify release approval."
      }
    ],
    "review": "Independent expert review pending"
  },
  {
    "id": "v504-12",
    "domain": "Data Engineering & AI",
    "title": "RAG evaluation and human oversight",
    "explanation": "Retrieval-augmented generation retrieves source passages but can still hallucinate or miscite. Evaluate retrieval relevance, groundedness, refusal behaviour and prompt-injection resistance. Human review is required for consequential decisions.",
    "worked": "A fictional help assistant retrieves an outdated policy and gives a confident answer; the evaluator marks it ungrounded and escalates.",
    "practice": "Build a five-case evaluation set with expected citations and unsafe-request handling.",
    "project": "Create a RAG evaluation matrix covering freshness, citation accuracy, privacy and human escalation.",
    "questions": [
      {
        "prompt": "What is the main purpose of rag evaluation and human oversight?",
        "choices": [
          "To avoid documenting limitations",
          "Retrieval-augmented generation retrieves source passages but can still hallucinate or miscite.",
          "To guarantee that no failures can occur"
        ],
        "answer": 1,
        "explanation": "Retrieval-augmented generation retrieves source passages but can still hallucinate or miscite."
      },
      {
        "prompt": "Which activity best demonstrates practical understanding of rag evaluation and human oversight?",
        "choices": [
          "Create a RAG evaluation matrix covering freshness, citation accuracy, privacy and human escalation.",
          "Only reading the page title",
          "Claiming mastery without evidence"
        ],
        "answer": 0,
        "explanation": "An independently reviewed artefact and its limitations provide stronger evidence than a short quiz."
      },
      {
        "prompt": "What should happen when a critical check has not been executed?",
        "choices": [
          "Mark it PASS",
          "Remove it from the report",
          "Record NOT_TESTED and block release if mandatory"
        ],
        "answer": 2,
        "explanation": "Unexecuted checks cannot justify release approval."
      }
    ],
    "review": "Independent expert review pending"
  }
];
