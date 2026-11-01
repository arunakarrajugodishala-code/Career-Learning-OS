window.CLOS.v7={
  "eprScenarios": [
    {
      "id": "epr-01",
      "question": "Explain why an EPR is more than an appointment spreadsheet.",
      "expected": "An EPR supports clinical records, workflows, access controls and audit trails."
    },
    {
      "id": "epr-02",
      "question": "Name stakeholders to consult about outpatient workflow changes.",
      "expected": "Clinicians, administrators, patients, IT, information governance and clinical safety."
    },
    {
      "id": "epr-03",
      "question": "Write a testable acceptance criterion for saving an appointment outcome.",
      "expected": "Given an authorised user, when an outcome is saved, it is displayed with an auditable timestamp."
    },
    {
      "id": "epr-04",
      "question": "What should be validated before calculating a missed-appointment rate?",
      "expected": "Outcome definitions, missing data, duplicates, exclusions and the denominator."
    },
    {
      "id": "epr-05",
      "question": "Why check references in a FHIR bundle?",
      "expected": "A reference can point to a missing or inconsistent resource even if JSON syntax is valid."
    },
    {
      "id": "epr-06",
      "question": "Why is role-based access important?",
      "expected": "It limits actions and data to appropriate duties and supports accountability."
    },
    {
      "id": "epr-07",
      "question": "What belongs in a clinical hazard log?",
      "expected": "Potential harm, cause, severity, mitigations, owner and review evidence."
    },
    {
      "id": "epr-08",
      "question": "What makes a defect report reproducible?",
      "expected": "Steps, environment, expected and actual behaviour, impact and evidence."
    },
    {
      "id": "epr-09",
      "question": "What is a rollback criterion?",
      "expected": "A predefined safety or service condition requiring a deployment to stop or reverse."
    },
    {
      "id": "epr-10",
      "question": "What must an EPR portfolio exclude?",
      "expected": "Real patient information, unlicensed data and unsupported clinical claims."
    }
  ],
  "dataPathway": [
    {
      "id": "hda-01",
      "title": "Healthcare data questions and definitions",
      "level": "Beginner",
      "prerequisites": [],
      "explanation": "Define a question, population, numerator, denominator, reporting period and exclusions before choosing a chart.",
      "task": "Write a fictional missed-appointment rate definition.",
      "expected": "Define a consistent numerator and eligible denominator with period and exclusions.",
      "reviewed": false
    },
    {
      "id": "hda-02",
      "title": "Data quality and confidentiality",
      "level": "Beginner",
      "prerequisites": [
        "hda-01"
      ],
      "explanation": "Inspect missing values, duplicates, coding consistency and outliers; use only fictional or appropriately authorised data.",
      "task": "Find duplicate identifiers and inconsistent outcome values.",
      "expected": "Duplicates can double-count records; inconsistent labels distort counts.",
      "reviewed": false
    },
    {
      "id": "hda-03",
      "title": "SQL analysis of appointments",
      "level": "Intermediate",
      "prerequisites": [
        "hda-02"
      ],
      "explanation": "Use SELECT, WHERE, GROUP BY and CASE to calculate counts; validate the denominator.",
      "task": "Write SQL counting outcomes by service.",
      "expected": "SELECT service, outcome, COUNT(*) AS n FROM appointments GROUP BY service, outcome;",
      "reviewed": false
    },
    {
      "id": "hda-04",
      "title": "Excel and Power BI dashboards",
      "level": "Intermediate",
      "prerequisites": [
        "hda-03"
      ],
      "explanation": "Show rates, counts, denominators and quality notes; descriptive charts do not establish causation.",
      "task": "Design a dashboard showing attendance by service.",
      "expected": "Include rate, count, denominator, period and exclusions.",
      "reviewed": false
    },
    {
      "id": "hda-05",
      "title": "Statistical interpretation",
      "level": "Intermediate",
      "prerequisites": [
        "hda-04"
      ],
      "explanation": "Understand sampling, uncertainty, confounding and correlation versus causation.",
      "task": "Explain why a 12-row synthetic dataset cannot prove a service improvement.",
      "expected": "The sample is tiny and fictional; no causal inference is justified.",
      "reviewed": false
    },
    {
      "id": "hda-06",
      "title": "Governance and reproducible reporting",
      "level": "Advanced",
      "prerequisites": [
        "hda-05"
      ],
      "explanation": "Document provenance, permissions, transformations, definitions, validation, versioning and review.",
      "task": "Write a reproducible handover checklist.",
      "expected": "Include source, authority, transformations, definitions, tests, limitations, version and reviewer.",
      "reviewed": false
    }
  ]
};
