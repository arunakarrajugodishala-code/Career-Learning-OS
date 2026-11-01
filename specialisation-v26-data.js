window.CLOS.specialisationV26=[
  {
    "id": "v26-healthcare-epr-1",
    "subject": "Healthcare EPR",
    "sequence": 1,
    "title": "Clinical workflow mapping",
    "level": "Intermediate",
    "objectives": [
      "Explain clinical workflow mapping and its limits",
      "Apply the concept to a fictional healthcare scenario",
      "Produce evidence that can be reviewed"
    ],
    "explanation": "Map admission, observation, escalation, discharge and documentation steps using fictional roles.",
    "workedExample": "An observation is entered late; distinguish event time from entry time and ensure escalation is not hidden.",
    "guidedPractice": "Recreate the worked example using only fictional records; document assumptions, expected result, and one edge case.",
    "independentProject": "Create a swimlane diagram for a fictional patient admission and escalation, with exception paths.",
    "commonMistake": "Confusing a documented event with evidence that the clinical action occurred.",
    "questions": [
      {
        "prompt": "Which record is most important when documenting an observation entered later?",
        "choices": [
          "Only the data-entry time",
          "The observation time and entry time",
          "The staff rota",
          "The ward name"
        ],
        "answer": 1,
        "explanation": "Both clinical event time and entry time matter for an accurate audit trail."
      },
      {
        "prompt": "What is the strongest evidence that this work is complete?",
        "choices": [
          "A screenshot with no context",
          "A documented test and independently reviewed result",
          "A promise that it works",
          "A single happy-path click"
        ],
        "answer": 1,
        "explanation": "Traceable test evidence and review are stronger than unverified claims."
      },
      {
        "prompt": "What data should be used for public training exercises?",
        "choices": [
          "Live identifiable patient records",
          "Fictional or properly anonymised authorised data",
          "Private staff passwords",
          "Unredacted clinical notes"
        ],
        "answer": 1,
        "explanation": "Use fictional training data or appropriately authorised de-identified datasets."
      }
    ],
    "rubric": [
      "Correct use of terminology and clear assumptions",
      "Demonstrable result with evidence and edge cases",
      "Privacy, safety and accessibility risks considered",
      "Limitations and next steps clearly documented"
    ],
    "reviewStatus": "NOT_REVIEWED"
  },
  {
    "id": "v26-healthcare-epr-2",
    "subject": "Healthcare EPR",
    "sequence": 2,
    "title": "EPR safety and change control",
    "level": "Intermediate",
    "objectives": [
      "Explain epr safety and change control and its limits",
      "Apply the concept to a fictional healthcare scenario",
      "Produce evidence that can be reviewed"
    ],
    "explanation": "Identify user roles, least-privilege access, downtime procedures, testing and rollback for EPR changes.",
    "workedExample": "A new discharge field is deployed: test required fields, accessibility, permissions and rollback in a training environment.",
    "guidedPractice": "Recreate the worked example using only fictional records; document assumptions, expected result, and one edge case.",
    "independentProject": "Draft a change impact assessment and 8 fictional UAT test cases for discharge workflow.",
    "commonMistake": "Assuming an interface change is safe because it passes a happy-path test.",
    "questions": [
      {
        "prompt": "What is the safest response to an EPR change that causes incorrect medication display?",
        "choices": [
          "Wait for next release",
          "Use the documented incident and rollback process",
          "Delete the test evidence",
          "Give all staff administrator access"
        ],
        "answer": 1,
        "explanation": "Patient-safety incidents require escalation and approved contingency or rollback processes."
      },
      {
        "prompt": "What is the strongest evidence that this work is complete?",
        "choices": [
          "A screenshot with no context",
          "A documented test and independently reviewed result",
          "A promise that it works",
          "A single happy-path click"
        ],
        "answer": 1,
        "explanation": "Traceable test evidence and review are stronger than unverified claims."
      },
      {
        "prompt": "What data should be used for public training exercises?",
        "choices": [
          "Live identifiable patient records",
          "Fictional or properly anonymised authorised data",
          "Private staff passwords",
          "Unredacted clinical notes"
        ],
        "answer": 1,
        "explanation": "Use fictional training data or appropriately authorised de-identified datasets."
      }
    ],
    "rubric": [
      "Correct use of terminology and clear assumptions",
      "Demonstrable result with evidence and edge cases",
      "Privacy, safety and accessibility risks considered",
      "Limitations and next steps clearly documented"
    ],
    "reviewStatus": "NOT_REVIEWED"
  },
  {
    "id": "v26-healthcare-epr-3",
    "subject": "Healthcare EPR",
    "sequence": 3,
    "title": "FHIR and interoperability basics",
    "level": "Intermediate",
    "objectives": [
      "Explain fhir and interoperability basics and its limits",
      "Apply the concept to a fictional healthcare scenario",
      "Produce evidence that can be reviewed"
    ],
    "explanation": "Distinguish patient, encounter and observation resources; discuss identifiers, validation and information governance.",
    "workedExample": "A fictional Observation references a Patient and Encounter; verify references and coded units.",
    "guidedPractice": "Recreate the worked example using only fictional records; document assumptions, expected result, and one edge case.",
    "independentProject": "Inspect a fictional FHIR bundle and document five data-quality and access-control checks.",
    "commonMistake": "Assuming a valid JSON document is automatically clinically correct.",
    "questions": [
      {
        "prompt": "Which FHIR resource commonly represents a measured blood pressure?",
        "choices": [
          "Observation",
          "PractitionerRole",
          "Location",
          "Organization"
        ],
        "answer": 0,
        "explanation": "A clinical measurement is commonly represented as an Observation resource."
      },
      {
        "prompt": "What is the strongest evidence that this work is complete?",
        "choices": [
          "A screenshot with no context",
          "A documented test and independently reviewed result",
          "A promise that it works",
          "A single happy-path click"
        ],
        "answer": 1,
        "explanation": "Traceable test evidence and review are stronger than unverified claims."
      },
      {
        "prompt": "What data should be used for public training exercises?",
        "choices": [
          "Live identifiable patient records",
          "Fictional or properly anonymised authorised data",
          "Private staff passwords",
          "Unredacted clinical notes"
        ],
        "answer": 1,
        "explanation": "Use fictional training data or appropriately authorised de-identified datasets."
      }
    ],
    "rubric": [
      "Correct use of terminology and clear assumptions",
      "Demonstrable result with evidence and edge cases",
      "Privacy, safety and accessibility risks considered",
      "Limitations and next steps clearly documented"
    ],
    "reviewStatus": "NOT_REVIEWED"
  },
  {
    "id": "v26-healthcare-data-1",
    "subject": "Healthcare Data",
    "sequence": 1,
    "title": "Data quality and lineage",
    "level": "Intermediate",
    "objectives": [
      "Explain data quality and lineage and its limits",
      "Apply the concept to a fictional healthcare scenario",
      "Produce evidence that can be reviewed"
    ],
    "explanation": "Assess completeness, validity, timeliness, uniqueness and lineage before analysis.",
    "workedExample": "A fictional appointment export contains duplicates and missing outcomes; calculate each defect rate separately.",
    "guidedPractice": "Recreate the worked example using only fictional records; document assumptions, expected result, and one edge case.",
    "independentProject": "Build a data-quality log and propose correction owners and verification steps.",
    "commonMistake": "Deleting missing records without recording the resulting bias.",
    "questions": [
      {
        "prompt": "Which metric measures the share of required fields that are populated?",
        "choices": [
          "Completeness",
          "Latency",
          "Encryption",
          "Precision of a model"
        ],
        "answer": 0,
        "explanation": "Completeness assesses presence of required values."
      },
      {
        "prompt": "What is the strongest evidence that this work is complete?",
        "choices": [
          "A screenshot with no context",
          "A documented test and independently reviewed result",
          "A promise that it works",
          "A single happy-path click"
        ],
        "answer": 1,
        "explanation": "Traceable test evidence and review are stronger than unverified claims."
      },
      {
        "prompt": "What data should be used for public training exercises?",
        "choices": [
          "Live identifiable patient records",
          "Fictional or properly anonymised authorised data",
          "Private staff passwords",
          "Unredacted clinical notes"
        ],
        "answer": 1,
        "explanation": "Use fictional training data or appropriately authorised de-identified datasets."
      }
    ],
    "rubric": [
      "Correct use of terminology and clear assumptions",
      "Demonstrable result with evidence and edge cases",
      "Privacy, safety and accessibility risks considered",
      "Limitations and next steps clearly documented"
    ],
    "reviewStatus": "NOT_REVIEWED"
  },
  {
    "id": "v26-healthcare-data-2",
    "subject": "Healthcare Data",
    "sequence": 2,
    "title": "Safe healthcare metrics",
    "level": "Intermediate",
    "objectives": [
      "Explain safe healthcare metrics and its limits",
      "Apply the concept to a fictional healthcare scenario",
      "Produce evidence that can be reviewed"
    ],
    "explanation": "Specify denominators, reporting periods, exclusions, and small-number disclosure controls.",
    "workedExample": "A cancellation rate uses cancelled appointments divided by eligible booked appointments, with explicit exclusions.",
    "guidedPractice": "Recreate the worked example using only fictional records; document assumptions, expected result, and one edge case.",
    "independentProject": "Write a one-page metric definition for fictional appointment non-attendance.",
    "commonMistake": "Comparing rates with different denominators or inconsistent definitions.",
    "questions": [
      {
        "prompt": "Why document the denominator?",
        "choices": [
          "It changes the chart colour",
          "It makes the metric reproducible and comparable",
          "It hides missing data",
          "It replaces validation"
        ],
        "answer": 1,
        "explanation": "The denominator defines the population being measured."
      },
      {
        "prompt": "What is the strongest evidence that this work is complete?",
        "choices": [
          "A screenshot with no context",
          "A documented test and independently reviewed result",
          "A promise that it works",
          "A single happy-path click"
        ],
        "answer": 1,
        "explanation": "Traceable test evidence and review are stronger than unverified claims."
      },
      {
        "prompt": "What data should be used for public training exercises?",
        "choices": [
          "Live identifiable patient records",
          "Fictional or properly anonymised authorised data",
          "Private staff passwords",
          "Unredacted clinical notes"
        ],
        "answer": 1,
        "explanation": "Use fictional training data or appropriately authorised de-identified datasets."
      }
    ],
    "rubric": [
      "Correct use of terminology and clear assumptions",
      "Demonstrable result with evidence and edge cases",
      "Privacy, safety and accessibility risks considered",
      "Limitations and next steps clearly documented"
    ],
    "reviewStatus": "NOT_REVIEWED"
  },
  {
    "id": "v26-healthcare-data-3",
    "subject": "Healthcare Data",
    "sequence": 3,
    "title": "Dashboard interpretation",
    "level": "Intermediate",
    "objectives": [
      "Explain dashboard interpretation and its limits",
      "Apply the concept to a fictional healthcare scenario",
      "Produce evidence that can be reviewed"
    ],
    "explanation": "Evaluate filters, trends, uncertainty, accessibility and whether a chart supports its claim.",
    "workedExample": "A monthly waiting-list count increases while service scope expands; avoid assuming deterioration without context.",
    "guidedPractice": "Recreate the worked example using only fictional records; document assumptions, expected result, and one edge case.",
    "independentProject": "Design a dashboard specification with 4 fictional KPIs and caveats.",
    "commonMistake": "Treating correlation or a visual trend as proof of causation.",
    "questions": [
      {
        "prompt": "What should a dashboard display alongside a rate?",
        "choices": [
          "A clearly defined period and denominator",
          "Only a colourful chart",
          "No filters",
          "Only the maximum value"
        ],
        "answer": 0,
        "explanation": "Definitions and reporting periods are needed to interpret rates."
      },
      {
        "prompt": "What is the strongest evidence that this work is complete?",
        "choices": [
          "A screenshot with no context",
          "A documented test and independently reviewed result",
          "A promise that it works",
          "A single happy-path click"
        ],
        "answer": 1,
        "explanation": "Traceable test evidence and review are stronger than unverified claims."
      },
      {
        "prompt": "What data should be used for public training exercises?",
        "choices": [
          "Live identifiable patient records",
          "Fictional or properly anonymised authorised data",
          "Private staff passwords",
          "Unredacted clinical notes"
        ],
        "answer": 1,
        "explanation": "Use fictional training data or appropriately authorised de-identified datasets."
      }
    ],
    "rubric": [
      "Correct use of terminology and clear assumptions",
      "Demonstrable result with evidence and edge cases",
      "Privacy, safety and accessibility risks considered",
      "Limitations and next steps clearly documented"
    ],
    "reviewStatus": "NOT_REVIEWED"
  },
  {
    "id": "v26-business-analysis-1",
    "subject": "Business Analysis",
    "sequence": 1,
    "title": "Stakeholder discovery",
    "level": "Intermediate",
    "objectives": [
      "Explain stakeholder discovery and its limits",
      "Apply the concept to a fictional healthcare scenario",
      "Produce evidence that can be reviewed"
    ],
    "explanation": "Use interviews, observation and document review to separate needs from proposed solutions.",
    "workedExample": "A receptionist requests a new button; explore the underlying delay and success measure first.",
    "guidedPractice": "Recreate the worked example using only fictional records; document assumptions, expected result, and one edge case.",
    "independentProject": "Prepare interview questions, stakeholder map and problem statement for a fictional clinic.",
    "commonMistake": "Treating the first requested feature as the real requirement.",
    "questions": [
      {
        "prompt": "What is a useful first step after a stakeholder requests a feature?",
        "choices": [
          "Identify the underlying problem",
          "Approve the feature immediately",
          "Skip acceptance criteria",
          "Remove existing controls"
        ],
        "answer": 0,
        "explanation": "Problem discovery avoids implementing an ineffective solution."
      },
      {
        "prompt": "What is the strongest evidence that this work is complete?",
        "choices": [
          "A screenshot with no context",
          "A documented test and independently reviewed result",
          "A promise that it works",
          "A single happy-path click"
        ],
        "answer": 1,
        "explanation": "Traceable test evidence and review are stronger than unverified claims."
      },
      {
        "prompt": "What data should be used for public training exercises?",
        "choices": [
          "Live identifiable patient records",
          "Fictional or properly anonymised authorised data",
          "Private staff passwords",
          "Unredacted clinical notes"
        ],
        "answer": 1,
        "explanation": "Use fictional training data or appropriately authorised de-identified datasets."
      }
    ],
    "rubric": [
      "Correct use of terminology and clear assumptions",
      "Demonstrable result with evidence and edge cases",
      "Privacy, safety and accessibility risks considered",
      "Limitations and next steps clearly documented"
    ],
    "reviewStatus": "NOT_REVIEWED"
  },
  {
    "id": "v26-business-analysis-2",
    "subject": "Business Analysis",
    "sequence": 2,
    "title": "Requirements and acceptance criteria",
    "level": "Intermediate",
    "objectives": [
      "Explain requirements and acceptance criteria and its limits",
      "Apply the concept to a fictional healthcare scenario",
      "Produce evidence that can be reviewed"
    ],
    "explanation": "Write testable functional/nonfunctional requirements, assumptions and Given/When/Then criteria.",
    "workedExample": "For appointment cancellation, specify permissions, confirmation, audit logging and error handling.",
    "guidedPractice": "Recreate the worked example using only fictional records; document assumptions, expected result, and one edge case.",
    "independentProject": "Write six requirements and acceptance criteria for a fictional booking change.",
    "commonMistake": "Using vague requirements such as “the system should be fast”.",
    "questions": [
      {
        "prompt": "Which criterion is most testable?",
        "choices": [
          "The app should be nice",
          "The system is modern",
          "Given an invalid date, the form displays a validation error",
          "Everyone likes the workflow"
        ],
        "answer": 2,
        "explanation": "Observable behaviour enables consistent testing."
      },
      {
        "prompt": "What is the strongest evidence that this work is complete?",
        "choices": [
          "A screenshot with no context",
          "A documented test and independently reviewed result",
          "A promise that it works",
          "A single happy-path click"
        ],
        "answer": 1,
        "explanation": "Traceable test evidence and review are stronger than unverified claims."
      },
      {
        "prompt": "What data should be used for public training exercises?",
        "choices": [
          "Live identifiable patient records",
          "Fictional or properly anonymised authorised data",
          "Private staff passwords",
          "Unredacted clinical notes"
        ],
        "answer": 1,
        "explanation": "Use fictional training data or appropriately authorised de-identified datasets."
      }
    ],
    "rubric": [
      "Correct use of terminology and clear assumptions",
      "Demonstrable result with evidence and edge cases",
      "Privacy, safety and accessibility risks considered",
      "Limitations and next steps clearly documented"
    ],
    "reviewStatus": "NOT_REVIEWED"
  },
  {
    "id": "v26-business-analysis-3",
    "subject": "Business Analysis",
    "sequence": 3,
    "title": "Traceability and change impact",
    "level": "Intermediate",
    "objectives": [
      "Explain traceability and change impact and its limits",
      "Apply the concept to a fictional healthcare scenario",
      "Produce evidence that can be reviewed"
    ],
    "explanation": "Link business objectives to requirements, tests, risks, owners and release decisions.",
    "workedExample": "A consent rule changes; identify affected screens, APIs, test cases and training materials.",
    "guidedPractice": "Recreate the worked example using only fictional records; document assumptions, expected result, and one edge case.",
    "independentProject": "Create a traceability matrix and change-impact note for a fictional consent workflow.",
    "commonMistake": "Marking a requirement complete without associated verification.",
    "questions": [
      {
        "prompt": "What does a traceability matrix connect?",
        "choices": [
          "Requirements to tests and evidence",
          "Only employee names",
          "Only invoices",
          "Only UI colours"
        ],
        "answer": 0,
        "explanation": "Traceability shows how requirements are verified."
      },
      {
        "prompt": "What is the strongest evidence that this work is complete?",
        "choices": [
          "A screenshot with no context",
          "A documented test and independently reviewed result",
          "A promise that it works",
          "A single happy-path click"
        ],
        "answer": 1,
        "explanation": "Traceable test evidence and review are stronger than unverified claims."
      },
      {
        "prompt": "What data should be used for public training exercises?",
        "choices": [
          "Live identifiable patient records",
          "Fictional or properly anonymised authorised data",
          "Private staff passwords",
          "Unredacted clinical notes"
        ],
        "answer": 1,
        "explanation": "Use fictional training data or appropriately authorised de-identified datasets."
      }
    ],
    "rubric": [
      "Correct use of terminology and clear assumptions",
      "Demonstrable result with evidence and edge cases",
      "Privacy, safety and accessibility risks considered",
      "Limitations and next steps clearly documented"
    ],
    "reviewStatus": "NOT_REVIEWED"
  },
  {
    "id": "v26-software-qa-1",
    "subject": "Software QA",
    "sequence": 1,
    "title": "Risk-based test design",
    "level": "Intermediate",
    "objectives": [
      "Explain risk-based test design and its limits",
      "Apply the concept to a fictional healthcare scenario",
      "Produce evidence that can be reviewed"
    ],
    "explanation": "Choose boundary, equivalence, negative, role-based and accessibility tests based on impact.",
    "workedExample": "For an age input, test valid boundaries, empty, invalid text, and out-of-range values.",
    "guidedPractice": "Recreate the worked example using only fictional records; document assumptions, expected result, and one edge case.",
    "independentProject": "Write 12 test cases for a fictional clinic appointment form and rank by risk.",
    "commonMistake": "Testing only the successful path.",
    "questions": [
      {
        "prompt": "What is a boundary-value test?",
        "choices": [
          "Checking a value at or near an allowed limit",
          "Only clicking the logo",
          "Only reading requirements",
          "Checking the release date"
        ],
        "answer": 0,
        "explanation": "Boundary testing targets edges of valid and invalid input ranges."
      },
      {
        "prompt": "What is the strongest evidence that this work is complete?",
        "choices": [
          "A screenshot with no context",
          "A documented test and independently reviewed result",
          "A promise that it works",
          "A single happy-path click"
        ],
        "answer": 1,
        "explanation": "Traceable test evidence and review are stronger than unverified claims."
      },
      {
        "prompt": "What data should be used for public training exercises?",
        "choices": [
          "Live identifiable patient records",
          "Fictional or properly anonymised authorised data",
          "Private staff passwords",
          "Unredacted clinical notes"
        ],
        "answer": 1,
        "explanation": "Use fictional training data or appropriately authorised de-identified datasets."
      }
    ],
    "rubric": [
      "Correct use of terminology and clear assumptions",
      "Demonstrable result with evidence and edge cases",
      "Privacy, safety and accessibility risks considered",
      "Limitations and next steps clearly documented"
    ],
    "reviewStatus": "NOT_REVIEWED"
  },
  {
    "id": "v26-software-qa-2",
    "subject": "Software QA",
    "sequence": 2,
    "title": "Defect reports and reproducibility",
    "level": "Intermediate",
    "objectives": [
      "Explain defect reports and reproducibility and its limits",
      "Apply the concept to a fictional healthcare scenario",
      "Produce evidence that can be reviewed"
    ],
    "explanation": "Record environment, exact steps, expected/actual result, severity and evidence without sensitive data.",
    "workedExample": "A dropdown fails on narrow screens; report viewport, steps, browser and screenshots with fictional data.",
    "guidedPractice": "Recreate the worked example using only fictional records; document assumptions, expected result, and one edge case.",
    "independentProject": "Create three actionable defect reports from fictional scenarios.",
    "commonMistake": "Reporting “does not work” without steps to reproduce.",
    "questions": [
      {
        "prompt": "What belongs in a reproducible defect report?",
        "choices": [
          "Expected and actual behaviour",
          "A guess about the developer",
          "Real patient identifiers",
          "Only the word broken"
        ],
        "answer": 0,
        "explanation": "Expected/actual results and steps allow the team to reproduce the problem."
      },
      {
        "prompt": "What is the strongest evidence that this work is complete?",
        "choices": [
          "A screenshot with no context",
          "A documented test and independently reviewed result",
          "A promise that it works",
          "A single happy-path click"
        ],
        "answer": 1,
        "explanation": "Traceable test evidence and review are stronger than unverified claims."
      },
      {
        "prompt": "What data should be used for public training exercises?",
        "choices": [
          "Live identifiable patient records",
          "Fictional or properly anonymised authorised data",
          "Private staff passwords",
          "Unredacted clinical notes"
        ],
        "answer": 1,
        "explanation": "Use fictional training data or appropriately authorised de-identified datasets."
      }
    ],
    "rubric": [
      "Correct use of terminology and clear assumptions",
      "Demonstrable result with evidence and edge cases",
      "Privacy, safety and accessibility risks considered",
      "Limitations and next steps clearly documented"
    ],
    "reviewStatus": "NOT_REVIEWED"
  },
  {
    "id": "v26-software-qa-3",
    "subject": "Software QA",
    "sequence": 3,
    "title": "Regression and release readiness",
    "level": "Intermediate",
    "objectives": [
      "Explain regression and release readiness and its limits",
      "Apply the concept to a fictional healthcare scenario",
      "Produce evidence that can be reviewed"
    ],
    "explanation": "Prioritise smoke, regression, data migration, accessibility, backup and rollback tests.",
    "workedExample": "A form validation fix may affect save and import flows; test dependent paths before release.",
    "guidedPractice": "Recreate the worked example using only fictional records; document assumptions, expected result, and one edge case.",
    "independentProject": "Create a release test matrix, including a failed migration and a rollback drill.",
    "commonMistake": "Calling a release ready because the JavaScript parser succeeds.",
    "questions": [
      {
        "prompt": "Which check is especially important after changing saved-data structure?",
        "choices": [
          "Backup and migration recovery",
          "Changing logo colour",
          "Renaming the repository",
          "Removing tests"
        ],
        "answer": 0,
        "explanation": "Data migrations must be tested for preservation and recovery."
      },
      {
        "prompt": "What is the strongest evidence that this work is complete?",
        "choices": [
          "A screenshot with no context",
          "A documented test and independently reviewed result",
          "A promise that it works",
          "A single happy-path click"
        ],
        "answer": 1,
        "explanation": "Traceable test evidence and review are stronger than unverified claims."
      },
      {
        "prompt": "What data should be used for public training exercises?",
        "choices": [
          "Live identifiable patient records",
          "Fictional or properly anonymised authorised data",
          "Private staff passwords",
          "Unredacted clinical notes"
        ],
        "answer": 1,
        "explanation": "Use fictional training data or appropriately authorised de-identified datasets."
      }
    ],
    "rubric": [
      "Correct use of terminology and clear assumptions",
      "Demonstrable result with evidence and edge cases",
      "Privacy, safety and accessibility risks considered",
      "Limitations and next steps clearly documented"
    ],
    "reviewStatus": "NOT_REVIEWED"
  }
];
