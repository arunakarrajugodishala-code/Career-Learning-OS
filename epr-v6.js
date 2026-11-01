window.CLOS.eprV6=[
  {
    "id": "epr-01",
    "title": "EPR and digital healthcare fundamentals",
    "order": 1,
    "level": "Beginner",
    "prerequisites": [],
    "objectives": [
      "Explain epr and digital healthcare fundamentals in a healthcare setting",
      "Demonstrate the concept using fictional information"
    ],
    "beginner": "An Electronic Patient Record (EPR) stores clinical information and supports care processes. A record system is not just a database: it connects staff, permissions, workflows, clinical safety and information governance.",
    "worked": "Map how a patient moves from referral through assessment to discharge. Identify where information is entered, reviewed and communicated.",
    "advanced": "Distinguish an EPR, electronic health record, patient administration system and departmental system. Explain why workflow design affects patient safety.",
    "practice": [
      "Map how a patient moves from referral through assessment to discharge. Identify where information is entered, reviewed and communicated.",
      "Record the assumptions, decisions and limitations in a short learning journal."
    ],
    "project": "Draw a fictional patient journey with six stages; annotate users, decisions and records.",
    "mistakes": [
      "Confusing a digital form with a safe end-to-end workflow."
    ],
    "revision": [
      "Summarise the topic without notes.",
      "Repeat the practical task after one week."
    ],
    "resource": {
      "url": "https://digital.nhs.uk/",
      "label": "NHS England digital services",
      "reviewed": false
    },
    "video": {
      "url": null,
      "verified": false
    },
    "questions": [
      {
        "q": "Which statement best describes an EPR?",
        "choices": [
          "Only a spreadsheet of appointments",
          "A clinical record system embedded in care workflows",
          "A replacement for clinical judgement",
          "A public social network"
        ],
        "answer": 1,
        "why": "An EPR supports clinical records and care processes; it does not replace clinical judgement."
      }
    ],
    "expertReviewed": false,
    "practicalReviewed": false
  },
  {
    "id": "epr-02",
    "title": "Clinical workflows and stakeholder discovery",
    "order": 2,
    "level": "Beginner",
    "prerequisites": [
      "epr-01"
    ],
    "objectives": [
      "Explain clinical workflows and stakeholder discovery in a healthcare setting",
      "Demonstrate the concept using fictional information"
    ],
    "beginner": "A workflow describes how people, decisions and information move through care. Analysts should understand current practice before proposing software changes.",
    "worked": "Use observation, interviews and process maps to document a fictional outpatient appointment: booking, identity check, consultation, prescription and follow-up.",
    "advanced": "Differentiate as-is and to-be workflows; capture exceptions, handoffs, bottlenecks and safety-critical checks.",
    "practice": [
      "Use observation, interviews and process maps to document a fictional outpatient appointment: booking, identity check, consultation, prescription and follow-up.",
      "Record the assumptions, decisions and limitations in a short learning journal."
    ],
    "project": "Create a swimlane diagram for receptionist, nurse, clinician and patient; include an exception for missing information.",
    "mistakes": [
      "Assuming that every team follows the same process."
    ],
    "revision": [
      "Summarise the topic without notes.",
      "Repeat the practical task after one week."
    ],
    "resource": {
      "url": "https://www.england.nhs.uk/digitaltechnology/",
      "label": "NHS England digital transformation",
      "reviewed": false
    },
    "video": {
      "url": null,
      "verified": false
    },
    "questions": [
      {
        "q": "What is the purpose of an as-is workflow?",
        "choices": [
          "Document the current process",
          "Describe the future process only",
          "Hide exceptions",
          "Assign software passwords"
        ],
        "answer": 0,
        "why": "An as-is map records how work happens today."
      }
    ],
    "expertReviewed": false,
    "practicalReviewed": false
  },
  {
    "id": "epr-03",
    "title": "Requirements, user stories and acceptance criteria",
    "order": 3,
    "level": "Beginner",
    "prerequisites": [
      "epr-02"
    ],
    "objectives": [
      "Explain requirements, user stories and acceptance criteria in a healthcare setting",
      "Demonstrate the concept using fictional information"
    ],
    "beginner": "A requirement states a need or constraint. User stories express user goals, while acceptance criteria make outcomes testable.",
    "worked": "Write a fictional requirement for an allergy alert: who needs it, when it appears, what it must display and what must be logged.",
    "advanced": "Separate functional requirements from security, accessibility, availability and performance requirements. Prioritise with clear rationale.",
    "practice": [
      "Write a fictional requirement for an allergy alert: who needs it, when it appears, what it must display and what must be logged.",
      "Record the assumptions, decisions and limitations in a short learning journal."
    ],
    "project": "Produce five user stories and testable Given/When/Then acceptance criteria for a fictional clinic.",
    "mistakes": [
      "Using vague criteria such as “system should be user-friendly”."
    ],
    "revision": [
      "Summarise the topic without notes.",
      "Repeat the practical task after one week."
    ],
    "resource": {
      "url": "https://www.gov.uk/service-manual",
      "label": "GOV.UK Service Manual",
      "reviewed": false
    },
    "video": {
      "url": null,
      "verified": false
    },
    "questions": [
      {
        "q": "Which acceptance criterion is testable?",
        "choices": [
          "The system is excellent",
          "The screen is nice",
          "Given an allergy, when prescribing, then show an alert",
          "Staff will like it"
        ],
        "answer": 2,
        "why": "A testable criterion defines a condition, action and observable result."
      }
    ],
    "expertReviewed": false,
    "practicalReviewed": false
  },
  {
    "id": "epr-04",
    "title": "Healthcare data quality and SQL validation",
    "order": 4,
    "level": "Intermediate",
    "prerequisites": [
      "epr-03"
    ],
    "objectives": [
      "Explain healthcare data quality and sql validation in a healthcare setting",
      "Demonstrate the concept using fictional information"
    ],
    "beginner": "Healthcare reports depend on accurate identifiers, dates, coded values and clear definitions. A query can be syntactically correct but analytically wrong.",
    "worked": "On a synthetic appointment dataset, identify duplicate appointment IDs, missing dates and implausible discharge-before-admission records.",
    "advanced": "Check row counts before and after joins; define denominators, null handling and reconciliation totals.",
    "practice": [
      "On a synthetic appointment dataset, identify duplicate appointment IDs, missing dates and implausible discharge-before-admission records.",
      "Record the assumptions, decisions and limitations in a short learning journal."
    ],
    "project": "Write SQL quality checks for duplicates, nulls and invalid date sequences using synthetic records.",
    "mistakes": [
      "Joining one-to-many tables and accidentally inflating patient counts."
    ],
    "revision": [
      "Summarise the topic without notes.",
      "Repeat the practical task after one week."
    ],
    "resource": {
      "url": "https://sqlbolt.com/",
      "label": "SQLBolt SQL practice",
      "reviewed": false
    },
    "video": {
      "url": null,
      "verified": false
    },
    "questions": [
      {
        "q": "A join doubles your patient count unexpectedly. What should you check first?",
        "choices": [
          "Font size",
          "Join cardinality and duplicate keys",
          "Monitor brightness",
          "The browser theme"
        ],
        "answer": 1,
        "why": "One-to-many joins can multiply rows unless grain and keys are controlled."
      }
    ],
    "expertReviewed": false,
    "practicalReviewed": false
  },
  {
    "id": "epr-05",
    "title": "HL7, FHIR and healthcare interoperability",
    "order": 5,
    "level": "Intermediate",
    "prerequisites": [
      "epr-04"
    ],
    "objectives": [
      "Explain hl7, fhir and healthcare interoperability in a healthcare setting",
      "Demonstrate the concept using fictional information"
    ],
    "beginner": "Interoperability lets systems exchange and interpret health information. HL7 FHIR provides resources and APIs, but technical exchange alone does not guarantee shared clinical meaning.",
    "worked": "Explore the structure of a fictional FHIR Patient resource: id, identifier and name; compare Patient with Observation and Encounter.",
    "advanced": "Explain resource references, profiles, terminology systems, consent and the difference between validation and clinical interpretation.",
    "practice": [
      "Explore the structure of a fictional FHIR Patient resource: id, identifier and name; compare Patient with Observation and Encounter.",
      "Record the assumptions, decisions and limitations in a short learning journal."
    ],
    "project": "Create a small synthetic JSON Patient and Observation pair; validate JSON structure without sending real patient information anywhere.",
    "mistakes": [
      "Assuming a valid JSON response proves that the clinical content is correct."
    ],
    "revision": [
      "Summarise the topic without notes.",
      "Repeat the practical task after one week."
    ],
    "resource": {
      "url": "https://hl7.org/fhir/",
      "label": "HL7 FHIR specification",
      "reviewed": false
    },
    "video": {
      "url": null,
      "verified": false
    },
    "questions": [
      {
        "q": "Which FHIR resource represents a measurement or test result?",
        "choices": [
          "Observation",
          "Invoice only",
          "Binary only",
          "DeviceDefinition only"
        ],
        "answer": 0,
        "why": "Observation is commonly used for measurements and results."
      }
    ],
    "expertReviewed": false,
    "practicalReviewed": false
  },
  {
    "id": "epr-06",
    "title": "Privacy, role-based access and audit trails",
    "order": 6,
    "level": "Intermediate",
    "prerequisites": [
      "epr-05"
    ],
    "objectives": [
      "Explain privacy, role-based access and audit trails in a healthcare setting",
      "Demonstrate the concept using fictional information"
    ],
    "beginner": "Clinical systems contain sensitive information. Access should be justified, appropriately restricted and auditable.",
    "worked": "Build a fictional access matrix for receptionist, nurse, clinician and system administrator. Consider what each role needs to do.",
    "advanced": "Distinguish authentication, authorisation, least privilege, access logging, retention and incident escalation.",
    "practice": [
      "Build a fictional access matrix for receptionist, nurse, clinician and system administrator. Consider what each role needs to do.",
      "Record the assumptions, decisions and limitations in a short learning journal."
    ],
    "project": "Create a role-access table and explain how to investigate an unusual fictional access event without exposing personal data.",
    "mistakes": [
      "Assuming everyone working in a hospital needs access to every record."
    ],
    "revision": [
      "Summarise the topic without notes.",
      "Repeat the practical task after one week."
    ],
    "resource": {
      "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/",
      "label": "ICO UK GDPR guidance",
      "reviewed": false
    },
    "video": {
      "url": null,
      "verified": false
    },
    "questions": [
      {
        "q": "What does least privilege mean?",
        "choices": [
          "All users have admin access",
          "Give only access needed for assigned duties",
          "Never record access logs",
          "Share passwords for convenience"
        ],
        "answer": 1,
        "why": "Least privilege restricts permissions to those needed for legitimate work."
      }
    ],
    "expertReviewed": false,
    "practicalReviewed": false
  },
  {
    "id": "epr-07",
    "title": "Clinical safety, hazards and escalation",
    "order": 7,
    "level": "Intermediate",
    "prerequisites": [
      "epr-06"
    ],
    "objectives": [
      "Explain clinical safety, hazards and escalation in a healthcare setting",
      "Demonstrate the concept using fictional information"
    ],
    "beginner": "A software change may create a clinical hazard even if it meets a technical specification. Safety assessment identifies hazards, controls, residual risks and responsibilities.",
    "worked": "Consider a fictional medication allergy alert that fails to display. Identify possible harm, contributing conditions and controls.",
    "advanced": "Explain hazard logs, severity, likelihood, testing evidence and the need for accountable clinical safety professionals.",
    "practice": [
      "Consider a fictional medication allergy alert that fails to display. Identify possible harm, contributing conditions and controls.",
      "Record the assumptions, decisions and limitations in a short learning journal."
    ],
    "project": "Draft a synthetic hazard-log entry for a delayed laboratory result, including mitigation and verification evidence.",
    "mistakes": [
      "Treating a passed unit test as proof that a clinical system is safe."
    ],
    "revision": [
      "Summarise the topic without notes.",
      "Repeat the practical task after one week."
    ],
    "resource": {
      "url": "https://digital.nhs.uk/services/clinical-safety",
      "label": "NHS clinical safety guidance",
      "reviewed": false
    },
    "video": {
      "url": null,
      "verified": false
    },
    "questions": [
      {
        "q": "What is a clinical hazard?",
        "choices": [
          "A possible source of patient harm",
          "A CSS styling issue only",
          "A training completion badge",
          "A type of Wi-Fi router"
        ],
        "answer": 0,
        "why": "Clinical hazards describe potential sources of patient harm."
      }
    ],
    "expertReviewed": false,
    "practicalReviewed": false
  },
  {
    "id": "epr-08",
    "title": "EPR testing and defect management",
    "order": 8,
    "level": "Intermediate",
    "prerequisites": [
      "epr-07"
    ],
    "objectives": [
      "Explain epr testing and defect management in a healthcare setting",
      "Demonstrate the concept using fictional information"
    ],
    "beginner": "Testing must cover expected behaviour, failures, permissions, interfaces and realistic user journeys. Defects need reproducible evidence and prioritisation.",
    "worked": "Write positive, negative and boundary tests for a fictional appointment booking workflow.",
    "advanced": "Compare unit, integration, system, user acceptance, regression and performance testing; separate severity from priority.",
    "practice": [
      "Write positive, negative and boundary tests for a fictional appointment booking workflow.",
      "Record the assumptions, decisions and limitations in a short learning journal."
    ],
    "project": "Create ten test cases and a defect log for a fictional referral workflow; include expected/actual results and retest status.",
    "mistakes": [
      "Recording “does not work” without steps, environment or expected result."
    ],
    "revision": [
      "Summarise the topic without notes.",
      "Repeat the practical task after one week."
    ],
    "resource": {
      "url": "https://www.istqb.org/",
      "label": "ISTQB testing resources",
      "reviewed": false
    },
    "video": {
      "url": null,
      "verified": false
    },
    "questions": [
      {
        "q": "Which information is essential for a useful defect report?",
        "choices": [
          "Only a screenshot",
          "Steps to reproduce, expected and actual results",
          "The tester’s favourite colour",
          "Only the product name"
        ],
        "answer": 1,
        "why": "A reproducible defect describes conditions, steps and observed behaviour."
      }
    ],
    "expertReviewed": false,
    "practicalReviewed": false
  },
  {
    "id": "epr-09",
    "title": "Migration, cutover and go-live support",
    "order": 9,
    "level": "Advanced",
    "prerequisites": [
      "epr-08"
    ],
    "objectives": [
      "Explain migration, cutover and go-live support in a healthcare setting",
      "Demonstrate the concept using fictional information"
    ],
    "beginner": "Replacing or upgrading an EPR requires data reconciliation, operational readiness, training, rollback planning and communication.",
    "worked": "Plan a fictional migration of 100 synthetic appointment records; define checks before and after loading.",
    "advanced": "Discuss cutover rehearsals, downtime procedures, rollback triggers, go/no-go decisions and hypercare monitoring.",
    "practice": [
      "Plan a fictional migration of 100 synthetic appointment records; define checks before and after loading.",
      "Record the assumptions, decisions and limitations in a short learning journal."
    ],
    "project": "Produce a cutover checklist, reconciliation sheet and a rollback decision tree for a synthetic clinic.",
    "mistakes": [
      "Assuming a successful file import means migration is complete."
    ],
    "revision": [
      "Summarise the topic without notes.",
      "Repeat the practical task after one week."
    ],
    "resource": {
      "url": "https://www.england.nhs.uk/digitaltechnology/",
      "label": "NHS digital transformation resources",
      "reviewed": false
    },
    "video": {
      "url": null,
      "verified": false
    },
    "questions": [
      {
        "q": "What should be included in a migration reconciliation?",
        "choices": [
          "Only the number of files",
          "Counts, key fields, exceptions and sign-off",
          "A list of staff birthdays",
          "Only a success message"
        ],
        "answer": 1,
        "why": "Reconciliation checks completeness, accuracy, exceptions and accountability."
      }
    ],
    "expertReviewed": false,
    "practicalReviewed": false
  },
  {
    "id": "epr-10",
    "title": "EPR implementation portfolio and interview evidence",
    "order": 10,
    "level": "Advanced",
    "prerequisites": [
      "epr-09"
    ],
    "objectives": [
      "Explain epr implementation portfolio and interview evidence in a healthcare setting",
      "Demonstrate the concept using fictional information"
    ],
    "beginner": "A credible portfolio shows how you understand users, requirements, information governance, testing and safe implementation. Use only synthetic scenarios.",
    "worked": "Choose a fictional clinic improvement problem and connect its workflow, requirements, data model and test evidence.",
    "advanced": "Explain trade-offs, accessibility, clinical safety, risk escalation and how to communicate with clinical and technical teams.",
    "practice": [
      "Choose a fictional clinic improvement problem and connect its workflow, requirements, data model and test evidence.",
      "Record the assumptions, decisions and limitations in a short learning journal."
    ],
    "project": "Assemble a portfolio: as-is/to-be maps, requirements, five FHIR examples, SQL checks, test cases, hazard log and release plan.",
    "mistakes": [
      "Presenting a hypothetical project as real NHS employment or claiming clinical approval."
    ],
    "revision": [
      "Summarise the topic without notes.",
      "Repeat the practical task after one week."
    ],
    "resource": {
      "url": "https://github.com/skills",
      "label": "GitHub Skills",
      "reviewed": false
    },
    "video": {
      "url": null,
      "verified": false
    },
    "questions": [
      {
        "q": "How should you describe a fictional EPR portfolio project?",
        "choices": [
          "As a deployed NHS system",
          "As a clearly labelled simulated project with evidence",
          "As a clinically approved product",
          "Without mentioning assumptions"
        ],
        "answer": 1,
        "why": "Portfolio work must be accurately labelled as simulated and supported by artifacts."
      }
    ],
    "expertReviewed": false,
    "practicalReviewed": false
  }
];
