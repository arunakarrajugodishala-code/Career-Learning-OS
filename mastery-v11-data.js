window.CLOS.masteryV11=[
  {
    "id": "computer-hardware",
    "title": "Computer hardware and operating systems",
    "subject": "Computer Fundamentals",
    "objectives": [
      "Understand CPU, RAM, storage and operating-system responsibilities."
    ],
    "explanation": "A CPU executes instructions; RAM temporarily holds working data; persistent storage retains files after power-off. An operating system schedules processes, manages memory and devices, and enforces permissions.",
    "worked": "Compare RAM and SSD roles using an everyday example. Explain what happens when an application opens and saves a file.",
    "project": "You are given a slow laptop with a nearly full SSD and 4 GB RAM. Describe how to distinguish storage pressure from memory pressure.",
    "quiz": {
      "q": "Which component normally retains saved files when power is off?",
      "choices": [
        "RAM",
        "SSD",
        "CPU cache",
        "CPU registers"
      ],
      "answer": 1,
      "why": "SSDs are persistent storage; RAM and CPU caches are volatile."
    },
    "resource": {
      "label": "Free learning reference",
      "url": "https://cs50.harvard.edu/x/weeks/0/"
    },
    "video": {
      "status": "UNVERIFIED",
      "url": null
    },
    "expertReview": "NOT_TESTED",
    "practicalReview": "NOT_TESTED"
  },
  {
    "id": "networking-dns",
    "title": "DNS and web requests",
    "subject": "Networking",
    "objectives": [
      "Explain the difference between DNS, IP routing and HTTPS."
    ],
    "explanation": "DNS resolves names to network addresses. TCP/IP carries packets; HTTPS uses TLS to protect application traffic in transit. DNS lookup alone does not guarantee a website is trustworthy.",
    "worked": "Draw the sequence browser → DNS lookup → connection → TLS → HTTP request → response.",
    "project": "Diagnose a fictional case where a website works by IP but not by hostname; propose safe checks.",
    "quiz": {
      "q": "What does DNS primarily do?",
      "choices": [
        "Encrypt all network traffic",
        "Resolve domain names to addresses",
        "Store web pages",
        "Assign browser passwords"
      ],
      "answer": 1,
      "why": "DNS helps resolve domain names; TLS handles HTTPS encryption."
    },
    "resource": {
      "label": "Free learning reference",
      "url": "https://www.cloudflare.com/learning/dns/what-is-dns/"
    },
    "video": {
      "status": "UNVERIFIED",
      "url": null
    },
    "expertReview": "NOT_TESTED",
    "practicalReview": "NOT_TESTED"
  },
  {
    "id": "linux-permissions",
    "title": "Linux file permissions",
    "subject": "Linux",
    "objectives": [
      "Interpret read, write and execute permissions and least privilege."
    ],
    "explanation": "Linux permission bits apply to owner, group and others. For files, read allows content viewing, write allows modification and execute allows running. For directories, execute permits traversal.",
    "worked": "Explain chmod 640 on a regular file and why chmod 777 is usually inappropriate.",
    "project": "Write a safe permission plan for a shared training folder; do not execute commands on production systems.",
    "quiz": {
      "q": "Which octal digit represents read and write, but not execute?",
      "choices": [
        "4",
        "5",
        "6",
        "7"
      ],
      "answer": 2,
      "why": "Read=4 and write=2, so 6 grants read/write."
    },
    "resource": {
      "label": "Free learning reference",
      "url": "https://www.gnu.org/software/coreutils/manual/html_node/File-permissions.html"
    },
    "video": {
      "status": "UNVERIFIED",
      "url": null
    },
    "expertReview": "NOT_TESTED",
    "practicalReview": "NOT_TESTED"
  },
  {
    "id": "git-workflow",
    "title": "Git branches and pull requests",
    "subject": "Git and GitHub",
    "objectives": [
      "Understand commits, branches, merge reviews and rollback."
    ],
    "explanation": "Git commits record snapshots and history. Branches isolate changes. A pull request lets collaborators review changes before merging. Avoid committing credentials or confidential data.",
    "worked": "Sketch a feature branch → commit → pull request → review → merge workflow.",
    "project": "Prepare a fictional change log and review checklist for a README correction.",
    "quiz": {
      "q": "What is the main purpose of a feature branch?",
      "choices": [
        "Erase the main branch",
        "Isolate work before merging",
        "Encrypt all files",
        "Automatically deploy every commit"
      ],
      "answer": 1,
      "why": "Feature branches isolate changes so they can be reviewed."
    },
    "resource": {
      "label": "Free learning reference",
      "url": "https://skills.github.com/"
    },
    "video": {
      "status": "UNVERIFIED",
      "url": null
    },
    "expertReview": "NOT_TESTED",
    "practicalReview": "NOT_TESTED"
  },
  {
    "id": "excel-quality",
    "title": "Excel data cleaning and pivot tables",
    "subject": "Excel",
    "objectives": [
      "Check input types, duplicates and denominators before reporting."
    ],
    "explanation": "Excel tables support structured references. COUNTIF and SUMIFS summarise records, while pivot tables group and aggregate. Always validate source data and note missing values.",
    "worked": "Using the fictional CSV, calculate counts of each appointment outcome and verify totals.",
    "project": "Create a pivot table by service and outcome; document your data-quality checks.",
    "quiz": {
      "q": "What should be checked before interpreting a pivot table?",
      "choices": [
        "Only font size",
        "Input data completeness and definitions",
        "Whether the sheet has a chart",
        "The number of colours"
      ],
      "answer": 1,
      "why": "Aggregations are only meaningful when source data and definitions are sound."
    },
    "resource": {
      "label": "Free learning reference",
      "url": "https://support.microsoft.com/en-us/excel"
    },
    "video": {
      "status": "UNVERIFIED",
      "url": null
    },
    "expertReview": "NOT_TESTED",
    "practicalReview": "NOT_TESTED"
  },
  {
    "id": "sql-aggregation",
    "title": "SQL aggregation and joins",
    "subject": "SQL",
    "objectives": [
      "Use grouping, joins and validation to produce reliable metrics."
    ],
    "explanation": "GROUP BY summarises records, while JOIN combines tables using keys. A one-to-many join may multiply rows and inflate counts; validate row counts and uniqueness before and after joins.",
    "worked": "Write SELECT service, outcome, COUNT(*) FROM appointments GROUP BY service, outcome; and explain the result.",
    "project": "Propose tests for duplicate appointment IDs and null outcome values in the fictional dataset.",
    "quiz": {
      "q": "What is a common risk of a one-to-many join?",
      "choices": [
        "Automatic encryption",
        "Inflated row counts",
        "Guaranteed deduplication",
        "No null values"
      ],
      "answer": 1,
      "why": "Multiple matching rows can multiply output rows and totals."
    },
    "resource": {
      "label": "Free learning reference",
      "url": "https://sqlbolt.com/"
    },
    "video": {
      "status": "UNVERIFIED",
      "url": null
    },
    "expertReview": "NOT_TESTED",
    "practicalReview": "NOT_TESTED"
  },
  {
    "id": "python-data",
    "title": "Python data validation",
    "subject": "Python",
    "objectives": [
      "Use functions and assertions to validate small datasets."
    ],
    "explanation": "Python functions make repeated logic testable. Use csv.DictReader for CSV input, check expected fields, and fail clearly when assumptions do not hold. Never use real patient records in public exercises.",
    "worked": "Write pseudocode that rejects rows with missing appointment IDs and reports duplicate IDs.",
    "project": "Implement a script to count fictional appointment outcomes and compare totals with a spreadsheet.",
    "quiz": {
      "q": "Which Python structure is suited to tracking unique IDs?",
      "choices": [
        "set",
        "str",
        "float",
        "tuple with duplicates"
      ],
      "answer": 0,
      "why": "A set stores unique values and supports efficient membership checks."
    },
    "resource": {
      "label": "Free learning reference",
      "url": "https://docs.python.org/3/tutorial/"
    },
    "video": {
      "status": "UNVERIFIED",
      "url": null
    },
    "expertReview": "NOT_TESTED",
    "practicalReview": "NOT_TESTED"
  },
  {
    "id": "epr-requirements",
    "title": "EPR requirements and acceptance testing",
    "subject": "Healthcare Systems / EPR",
    "objectives": [
      "Write testable requirements and protect clinical safety."
    ],
    "explanation": "A functional requirement describes what the system must do; a non-functional requirement describes constraints such as accessibility, security and performance. Clinical safety requires explicit hazard review and authorised governance.",
    "worked": "Write a Given/When/Then acceptance criterion for saving an appointment outcome.",
    "project": "Create a traceability row linking a fictional requirement to test evidence and an identified risk.",
    "quiz": {
      "q": "Which is the strongest acceptance criterion?",
      "choices": [
        "System should be nice",
        "Staff like it",
        "Given authorised access, saving an outcome records its value and audit timestamp",
        "It must be fast"
      ],
      "answer": 2,
      "why": "The third option specifies conditions and observable results."
    },
    "resource": {
      "label": "Free learning reference",
      "url": "https://www.england.nhs.uk/digitaltechnology/"
    },
    "video": {
      "status": "UNVERIFIED",
      "url": null
    },
    "expertReview": "NOT_TESTED",
    "practicalReview": "NOT_TESTED"
  },
  {
    "id": "qa-boundaries",
    "title": "Boundary-value test design",
    "subject": "Software Testing / QA",
    "objectives": [
      "Design tests for valid and invalid boundary conditions."
    ],
    "explanation": "Boundary-value analysis tests values at and around a constraint, such as one day before, on and after the minimum allowed appointment date. Combine with negative tests and clear expected results.",
    "worked": "List five cases for an appointment date that cannot be in the past.",
    "project": "Create a test table with test ID, input, expected result, actual result and status.",
    "quiz": {
      "q": "For a minimum valid value of 10, which is a useful boundary set?",
      "choices": [
        "1, 5, 20",
        "9, 10, 11",
        "100, 200, 300",
        "10 only"
      ],
      "answer": 1,
      "why": "Testing just below, at and above a boundary finds off-by-one errors."
    },
    "resource": {
      "label": "Free learning reference",
      "url": "https://istqb.org/"
    },
    "video": {
      "status": "UNVERIFIED",
      "url": null
    },
    "expertReview": "NOT_TESTED",
    "practicalReview": "NOT_TESTED"
  },
  {
    "id": "cyber-iam",
    "title": "Identity and least privilege",
    "subject": "Cybersecurity",
    "objectives": [
      "Explain MFA, access roles and least privilege."
    ],
    "explanation": "Authentication establishes who a user is; authorisation determines what they may do. MFA adds a second factor. Least privilege limits permissions and reduces exposure if an account is compromised.",
    "worked": "Compare a clinician role and an administrator role in a fictional system.",
    "project": "Design a basic role-permission matrix and an access review process.",
    "quiz": {
      "q": "Which principle grants only permissions needed for a task?",
      "choices": [
        "Open access",
        "Least privilege",
        "Shared passwords",
        "Default admin"
      ],
      "answer": 1,
      "why": "Least privilege restricts access to what a role requires."
    },
    "resource": {
      "label": "Free learning reference",
      "url": "https://www.ncsc.gov.uk/collection/10-steps"
    },
    "video": {
      "status": "UNVERIFIED",
      "url": null
    },
    "expertReview": "NOT_TESTED",
    "practicalReview": "NOT_TESTED"
  },
  {
    "id": "cloud-responsibility",
    "title": "Cloud shared responsibility",
    "subject": "Cloud Computing",
    "objectives": [
      "Distinguish provider and customer security duties."
    ],
    "explanation": "Cloud providers manage underlying infrastructure according to the service model; customers remain responsible for data, identities, configuration and other controls depending on IaaS/PaaS/SaaS.",
    "worked": "Compare customer responsibilities in a fictional IaaS virtual machine and SaaS email service.",
    "project": "Write a simple responsibility matrix and note uncertainty where contracts differ.",
    "quiz": {
      "q": "Who usually manages user access policies for an organisation’s cloud account?",
      "choices": [
        "The organisation",
        "The internet provider",
        "Nobody",
        "Every website visitor"
      ],
      "answer": 0,
      "why": "Cloud customers generally control their own identities and permissions."
    },
    "resource": {
      "label": "Free learning reference",
      "url": "https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility"
    },
    "video": {
      "status": "UNVERIFIED",
      "url": null
    },
    "expertReview": "NOT_TESTED",
    "practicalReview": "NOT_TESTED"
  },
  {
    "id": "ai-evaluation",
    "title": "Evaluating AI answers",
    "subject": "AI / Machine Learning",
    "objectives": [
      "Evaluate accuracy, privacy and limits of AI systems."
    ],
    "explanation": "Model output can sound confident while being wrong. Evaluate against representative cases, record false positives and negatives, check data leakage, and require human oversight in high-stakes settings.",
    "worked": "Create five fictional prompts and a rubric for factual correctness, sources and unsafe assumptions.",
    "project": "Build an evaluation table recording expected answer, observed answer, error type and reviewer notes.",
    "quiz": {
      "q": "Which evidence best supports a claim that an AI tool is reliable?",
      "choices": [
        "One good demo",
        "Repeated tests on representative held-out cases",
        "A confident response",
        "A marketing slogan"
      ],
      "answer": 1,
      "why": "Reliability requires systematic evaluation across relevant cases."
    },
    "resource": {
      "label": "Free learning reference",
      "url": "https://huggingface.co/learn"
    },
    "video": {
      "status": "UNVERIFIED",
      "url": null
    },
    "expertReview": "NOT_TESTED",
    "practicalReview": "NOT_TESTED"
  }
];
