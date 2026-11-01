window.CLOS.curriculumV31=[
  {
    "id": "v31-privacy",
    "track": "Data governance",
    "title": "Pseudonymisation and data minimisation",
    "level": "Applied foundation",
    "objectives": [
      "Explain the key concept and its limits",
      "Apply the concept to fictional data",
      "Evaluate evidence using the rubric"
    ],
    "explanation": "A pseudonym replaces an identifier but a re-identification key may still exist. Pseudonymised data can remain personal data. Minimise fields, restrict access, document retention and avoid using patient data in public portfolios.",
    "workedExample": "A synthetic dataset has name, DOB, postcode and appointment outcome. Decide which fields a monthly service dashboard genuinely needs.",
    "guidedPractice": "Explain the worked example, identify one limitation, then create a small fictional counterexample.",
    "independentProject": "Produce a field-level data-minimisation register for a fictional dashboard.",
    "commonMistake": "Treating pseudonymised records as anonymous.",
    "rubric": [
      "Concepts accurate and terminology explained",
      "Evidence reproducible using fictional data",
      "Limitations and safety risks documented",
      "Results reviewed against independent checks"
    ],
    "questions": [
      {
        "prompt": "Which dataset best follows minimisation?",
        "choices": [
          "Only required aggregate counts",
          "All identifiable patient records",
          "A public patient export"
        ],
        "answer": 0,
        "explanation": "Aggregate counts can often meet the reporting purpose with less disclosure."
      },
      {
        "prompt": "Why may pseudonymised data still be personal data?",
        "choices": [
          "A re-identification key may exist",
          "Every pseudonym is public",
          "No law applies to it"
        ],
        "answer": 0,
        "explanation": "A separately held key or other available information may permit re-identification."
      },
      {
        "prompt": "Which is the safest public portfolio example?",
        "choices": [
          "A real patient extract",
          "A fully fictional dataset",
          "A spreadsheet with patient initials"
        ],
        "answer": 1,
        "explanation": "Use fictional data, never real confidential patient information."
      },
      {
        "prompt": "Which control limits unnecessary access?",
        "choices": [
          "Least-privilege permissions",
          "A shared administrator password",
          "Publishing a download link"
        ],
        "answer": 0,
        "explanation": "Restrict access to authorised roles and required purposes."
      },
      {
        "prompt": "What should a retention plan specify?",
        "choices": [
          "Only a file name",
          "A deletion period and purpose",
          "A colour scheme"
        ],
        "answer": 1,
        "explanation": "Retention must be tied to a purpose and an appropriate deletion schedule."
      }
    ],
    "reviewStatus": "PENDING_INDEPENDENT_REVIEW",
    "resourceStatus": "NOT_VERIFIED"
  },
  {
    "id": "v31-quality",
    "track": "Healthcare data",
    "title": "Data quality and denominator checks",
    "level": "Applied foundation",
    "objectives": [
      "Explain the key concept and its limits",
      "Apply the concept to fictional data",
      "Evaluate evidence using the rubric"
    ],
    "explanation": "A percentage is only meaningful when numerator, denominator, exclusions and time window are defined. Duplicate rows, missing values and late updates can distort results.",
    "workedExample": "A fictional clinic saw 72 of 90 eligible appointments. Attendance rate is 80%; document excluded cancelled appointments separately.",
    "guidedPractice": "Explain the worked example, identify one limitation, then create a small fictional counterexample.",
    "independentProject": "Write a metric specification and three data-quality assertions for synthetic appointments.",
    "commonMistake": "Dividing by all bookings without defining exclusions.",
    "rubric": [
      "Concepts accurate and terminology explained",
      "Evidence reproducible using fictional data",
      "Limitations and safety risks documented",
      "Results reviewed against independent checks"
    ],
    "questions": [
      {
        "prompt": "What must a percentage metric specify?",
        "choices": [
          "A colour palette",
          "Numerator and denominator",
          "A screenshot only"
        ],
        "answer": 1,
        "explanation": "The calculation requires an explicit numerator and denominator."
      },
      {
        "prompt": "A service has 45 attended out of 60 eligible visits. Rate?",
        "choices": [
          "60%",
          "75%",
          "80%"
        ],
        "answer": 1,
        "explanation": "45 divided by 60 equals 0.75 or 75%."
      },
      {
        "prompt": "Which issue can inflate attendance counts?",
        "choices": [
          "Duplicate appointment rows",
          "A chart title",
          "A consistent time zone"
        ],
        "answer": 0,
        "explanation": "Duplicates can count one visit more than once."
      },
      {
        "prompt": "What should happen to missing outcomes?",
        "choices": [
          "Silently count them as attended",
          "Define and report handling explicitly",
          "Delete the original data without trace"
        ],
        "answer": 1,
        "explanation": "Document missing values and the metric policy."
      },
      {
        "prompt": "Why define a reporting window?",
        "choices": [
          "To ensure numerator and denominator cover the same period",
          "To make the chart colourful",
          "To avoid testing"
        ],
        "answer": 0,
        "explanation": "A consistent time window prevents mismatched comparisons."
      }
    ],
    "reviewStatus": "PENDING_INDEPENDENT_REVIEW",
    "resourceStatus": "NOT_VERIFIED"
  },
  {
    "id": "v31-requirements",
    "track": "Business analysis",
    "title": "Acceptance criteria and traceability",
    "level": "Applied foundation",
    "objectives": [
      "Explain the key concept and its limits",
      "Apply the concept to fictional data",
      "Evaluate evidence using the rubric"
    ],
    "explanation": "A requirement should identify the user need and a verifiable outcome. Link each requirement to acceptance criteria, test cases, owner and evidence. Avoid assuming stakeholder approval.",
    "workedExample": "For a fictional appointment dashboard, specify that an authorised manager can filter by service and date with no patient identifiers shown.",
    "guidedPractice": "Explain the worked example, identify one limitation, then create a small fictional counterexample.",
    "independentProject": "Create a five-row requirements-to-tests traceability matrix.",
    "commonMistake": "Using vague criteria such as “dashboard should be easy”.",
    "rubric": [
      "Concepts accurate and terminology explained",
      "Evidence reproducible using fictional data",
      "Limitations and safety risks documented",
      "Results reviewed against independent checks"
    ],
    "questions": [
      {
        "prompt": "Which acceptance criterion is testable?",
        "choices": [
          "It feels modern",
          "It is user-friendly",
          "Only authorised roles can export aggregate results"
        ],
        "answer": 2,
        "explanation": "Role-based export behaviour can be objectively tested."
      },
      {
        "prompt": "Which is a measurable acceptance criterion?",
        "choices": [
          "Fast enough",
          "Loads within 3 seconds under agreed test conditions",
          "Looks nice"
        ],
        "answer": 1,
        "explanation": "Measurable conditions make a requirement testable."
      },
      {
        "prompt": "What links a requirement to its verification?",
        "choices": [
          "Traceability matrix",
          "Colour palette",
          "Marketing slogan"
        ],
        "answer": 0,
        "explanation": "Traceability links requirements, acceptance criteria and tests."
      },
      {
        "prompt": "Who should confirm a business requirement?",
        "choices": [
          "An appropriate stakeholder or product owner",
          "An unrelated visitor",
          "Only the test runner"
        ],
        "answer": 0,
        "explanation": "Relevant stakeholders validate the intended need."
      },
      {
        "prompt": "What is a risk of vague requirements?",
        "choices": [
          "Different interpretations and untestable outcomes",
          "Faster reliable testing",
          "Automatic compliance"
        ],
        "answer": 0,
        "explanation": "Ambiguity creates inconsistent implementation and acceptance."
      }
    ],
    "reviewStatus": "PENDING_INDEPENDENT_REVIEW",
    "resourceStatus": "NOT_VERIFIED"
  },
  {
    "id": "v31-qa",
    "track": "Software testing",
    "title": "Boundary testing and reproducible defects",
    "level": "Applied foundation",
    "objectives": [
      "Explain the key concept and its limits",
      "Apply the concept to fictional data",
      "Evaluate evidence using the rubric"
    ],
    "explanation": "Test normal, invalid and boundary inputs. A useful defect report includes expected and actual results, steps, environment, severity and evidence without confidential data.",
    "workedExample": "For an appointment date filter, test the earliest allowed date, latest allowed date, empty input and reversed date range.",
    "guidedPractice": "Explain the worked example, identify one limitation, then create a small fictional counterexample.",
    "independentProject": "Write eight test cases and two fictional defect reports with reproduction steps.",
    "commonMistake": "Reporting “broken” without steps to reproduce.",
    "rubric": [
      "Concepts accurate and terminology explained",
      "Evidence reproducible using fictional data",
      "Limitations and safety risks documented",
      "Results reviewed against independent checks"
    ],
    "questions": [
      {
        "prompt": "Which defect report is most actionable?",
        "choices": [
          "Steps, expected, actual, environment",
          "A vague complaint",
          "Only a screenshot"
        ],
        "answer": 0,
        "explanation": "Reproduction steps and expected versus actual results enable triage."
      },
      {
        "prompt": "For allowed ages 18 to 65 inclusive, which boundary set is useful?",
        "choices": [
          "17,18,65,66",
          "20,30,40",
          "Only 40"
        ],
        "answer": 0,
        "explanation": "Test just below, at and just above boundaries."
      },
      {
        "prompt": "What makes a bug reproducible?",
        "choices": [
          "Steps, expected and actual results",
          "A vague complaint",
          "A screenshot without context"
        ],
        "answer": 0,
        "explanation": "Clear reproduction steps and environment details support diagnosis."
      },
      {
        "prompt": "What should regression testing check?",
        "choices": [
          "Previously working behaviour after a change",
          "Only the new logo",
          "Only a single happy path"
        ],
        "answer": 0,
        "explanation": "Regression tests detect unintended changes to existing functionality."
      },
      {
        "prompt": "A field rejects valid minimum input. What is best?",
        "choices": [
          "Record a defect with evidence",
          "Ignore it",
          "Change the requirement secretly"
        ],
        "answer": 0,
        "explanation": "Document the failing input, expected result and actual result."
      }
    ],
    "reviewStatus": "PENDING_INDEPENDENT_REVIEW",
    "resourceStatus": "NOT_VERIFIED"
  },
  {
    "id": "v31-security",
    "track": "Cybersecurity",
    "title": "Threat modelling and least privilege",
    "level": "Applied foundation",
    "objectives": [
      "Explain the key concept and its limits",
      "Apply the concept to fictional data",
      "Evaluate evidence using the rubric"
    ],
    "explanation": "Identify assets, trust boundaries, threats and mitigations. Apply least privilege, strong authentication and logging. Avoid storing credentials in a public repository.",
    "workedExample": "A fictional learning site stores local progress. Identify risks from shared devices, malicious extensions and unencrypted browser storage.",
    "guidedPractice": "Explain the worked example, identify one limitation, then create a small fictional counterexample.",
    "independentProject": "Create a risk register with likelihood, impact, mitigation and owner for five scenarios.",
    "commonMistake": "Assuming a static website automatically protects local personal notes.",
    "rubric": [
      "Concepts accurate and terminology explained",
      "Evidence reproducible using fictional data",
      "Limitations and safety risks documented",
      "Results reviewed against independent checks"
    ],
    "questions": [
      {
        "prompt": "Which principle limits unnecessary access?",
        "choices": [
          "Maximum permissions",
          "Least privilege",
          "Shared passwords"
        ],
        "answer": 1,
        "explanation": "Least privilege grants only permissions required for a task."
      },
      {
        "prompt": "What does least privilege mean?",
        "choices": [
          "Grant only access required for the task",
          "Give everyone administrator access",
          "Reuse one password"
        ],
        "answer": 0,
        "explanation": "Least privilege reduces unnecessary exposure."
      },
      {
        "prompt": "What is an asset in threat modelling?",
        "choices": [
          "Something valuable that needs protection",
          "Only an attacker",
          "A website font"
        ],
        "answer": 0,
        "explanation": "Assets include data, services and credentials."
      },
      {
        "prompt": "Which response is appropriate to a suspected exposed credential?",
        "choices": [
          "Follow incident process and rotate/revoke it",
          "Post it in a public issue",
          "Ignore it"
        ],
        "answer": 0,
        "explanation": "Contain exposure using the approved incident response process."
      },
      {
        "prompt": "Why document trust boundaries?",
        "choices": [
          "To identify where controls and validation are needed",
          "To make diagrams decorative",
          "To eliminate all risk"
        ],
        "answer": 0,
        "explanation": "Crossing trust boundaries changes the assumptions about inputs and access."
      }
    ],
    "reviewStatus": "PENDING_INDEPENDENT_REVIEW",
    "resourceStatus": "NOT_VERIFIED"
  },
  {
    "id": "v31-cloud",
    "track": "Cloud and DevOps",
    "title": "CI/CD gates and rollback",
    "level": "Applied foundation",
    "objectives": [
      "Explain the key concept and its limits",
      "Apply the concept to fictional data",
      "Evaluate evidence using the rubric"
    ],
    "explanation": "A delivery pipeline should validate code, check dependencies, run tests and preserve a rollback path. Passing syntax checks does not establish browser correctness or security.",
    "workedExample": "A website release has passing syntax tests but no browser test evidence. Mark browser acceptance NOT_TESTED and block production approval.",
    "guidedPractice": "Explain the worked example, identify one limitation, then create a small fictional counterexample.",
    "independentProject": "Design a deployment checklist with test evidence, owner and rollback steps.",
    "commonMistake": "Treating a successful build as proof all features work.",
    "rubric": [
      "Concepts accurate and terminology explained",
      "Evidence reproducible using fictional data",
      "Limitations and safety risks documented",
      "Results reviewed against independent checks"
    ],
    "questions": [
      {
        "prompt": "What is the correct status for an unexecuted test?",
        "choices": [
          "PASS",
          "FAIL",
          "NOT_TESTED"
        ],
        "answer": 2,
        "explanation": "A test without execution evidence must not be marked passed."
      },
      {
        "prompt": "What should happen when a critical deployment test fails?",
        "choices": [
          "Block release pending review",
          "Deploy anyway automatically",
          "Delete test results"
        ],
        "answer": 0,
        "explanation": "A failing release gate should prevent unreviewed deployment."
      },
      {
        "prompt": "What is the purpose of rollback?",
        "choices": [
          "Restore a known-good version",
          "Remove monitoring",
          "Increase uncertainty"
        ],
        "answer": 0,
        "explanation": "Rollback provides a recovery route when a release causes problems."
      },
      {
        "prompt": "Which metric helps detect deployment problems?",
        "choices": [
          "Error rate",
          "Font size alone",
          "Repository name"
        ],
        "answer": 0,
        "explanation": "Error rate, latency and availability help monitor impact."
      },
      {
        "prompt": "Why test recovery before production?",
        "choices": [
          "A plan is unproven until exercised",
          "Testing guarantees no future incident",
          "Recovery never fails"
        ],
        "answer": 0,
        "explanation": "Practice reveals missing dependencies and procedural errors."
      }
    ],
    "reviewStatus": "PENDING_INDEPENDENT_REVIEW",
    "resourceStatus": "NOT_VERIFIED"
  },
  {
    "id": "v31-python",
    "track": "Python automation",
    "title": "Input validation and safe CSV processing",
    "level": "Applied foundation",
    "objectives": [
      "Explain the key concept and its limits",
      "Apply the concept to fictional data",
      "Evaluate evidence using the rubric"
    ],
    "explanation": "Treat file contents as untrusted input. Check required columns, types and missing values; handle errors explicitly. Use fictional records and avoid leaking identifiers into logs.",
    "workedExample": "For a synthetic CSV with appointment_id and status, reject duplicate IDs and unexpected status values before calculating counts.",
    "guidedPractice": "Explain the worked example, identify one limitation, then create a small fictional counterexample.",
    "independentProject": "Write pseudocode and five unit-test cases for a CSV validation function.",
    "commonMistake": "Silently dropping invalid records without reporting their number.",
    "rubric": [
      "Concepts accurate and terminology explained",
      "Evidence reproducible using fictional data",
      "Limitations and safety risks documented",
      "Results reviewed against independent checks"
    ],
    "questions": [
      {
        "prompt": "What should happen to an unexpected CSV status?",
        "choices": [
          "Validate and flag it",
          "Assume it is valid",
          "Delete the entire file silently"
        ],
        "answer": 0,
        "explanation": "Unexpected values need explicit validation and reporting."
      },
      {
        "prompt": "Why validate CSV column names?",
        "choices": [
          "To detect unexpected input structure",
          "To change the file colour",
          "To remove all errors automatically"
        ],
        "answer": 0,
        "explanation": "Schema validation catches missing or renamed fields."
      },
      {
        "prompt": "How should a script handle a malformed numeric field?",
        "choices": [
          "Report or safely handle the invalid row",
          "Silently treat it as valid",
          "Crash without context every time"
        ],
        "answer": 0,
        "explanation": "Explicit error handling improves traceability and reliability."
      },
      {
        "prompt": "Which is safer for a repeatable transformation?",
        "choices": [
          "Keep original input and write a new output",
          "Overwrite source without backup",
          "Edit results manually without recording"
        ],
        "answer": 0,
        "explanation": "Preserving input supports reproducibility and recovery."
      },
      {
        "prompt": "What does a unit test verify?",
        "choices": [
          "A small defined behaviour with expected result",
          "That all software is perfect",
          "That internet access exists"
        ],
        "answer": 0,
        "explanation": "Unit tests exercise specific behaviour against expected outcomes."
      }
    ],
    "reviewStatus": "PENDING_INDEPENDENT_REVIEW",
    "resourceStatus": "NOT_VERIFIED"
  },
  {
    "id": "v31-ai",
    "track": "AI assurance",
    "title": "Model evaluation and human oversight",
    "level": "Applied foundation",
    "objectives": [
      "Explain the key concept and its limits",
      "Apply the concept to fictional data",
      "Evaluate evidence using the rubric"
    ],
    "explanation": "Evaluate AI systems on representative test cases, including false positives, false negatives, subgroup performance and data leakage. Human oversight and escalation are required in consequential workflows.",
    "workedExample": "A fictional triage classifier has high overall accuracy but misses many urgent cases. Evaluate recall for urgent cases and define escalation.",
    "guidedPractice": "Explain the worked example, identify one limitation, then create a small fictional counterexample.",
    "independentProject": "Create a model evaluation card with limitations, monitoring and a human-review trigger.",
    "commonMistake": "Equating overall accuracy with safety for every use case.",
    "rubric": [
      "Concepts accurate and terminology explained",
      "Evidence reproducible using fictional data",
      "Limitations and safety risks documented",
      "Results reviewed against independent checks"
    ],
    "questions": [
      {
        "prompt": "Which measure helps identify missed urgent cases?",
        "choices": [
          "Font size",
          "Recall for urgent cases",
          "Number of slides"
        ],
        "answer": 1,
        "explanation": "Recall measures the fraction of actual urgent cases correctly detected."
      },
      {
        "prompt": "Why keep a separate test set?",
        "choices": [
          "To estimate performance on unseen examples",
          "To increase training leakage",
          "To avoid evaluation"
        ],
        "answer": 0,
        "explanation": "Unseen evaluation data provides a less biased estimate of generalisation."
      },
      {
        "prompt": "What is data leakage?",
        "choices": [
          "Information from evaluation or future data contaminates training",
          "A harmless font issue",
          "A backup file name"
        ],
        "answer": 0,
        "explanation": "Leakage can make reported performance misleading."
      },
      {
        "prompt": "What is appropriate for high-impact AI decisions?",
        "choices": [
          "Human oversight and escalation",
          "Unreviewed automatic action",
          "No audit trail"
        ],
        "answer": 0,
        "explanation": "Human review and governance help manage risks in consequential uses."
      },
      {
        "prompt": "What should an AI evaluation report include?",
        "choices": [
          "Metrics, limitations and failure cases",
          "Only a single accuracy number",
          "Only marketing claims"
        ],
        "answer": 0,
        "explanation": "Multiple metrics, subgroup limitations and error analysis give better evidence."
      }
    ],
    "reviewStatus": "PENDING_INDEPENDENT_REVIEW",
    "resourceStatus": "NOT_VERIFIED"
  }
];
