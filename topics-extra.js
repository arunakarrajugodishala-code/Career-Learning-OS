window.CLOS.topics.push(...[
  {
    "id": "os-linux",
    "title": "Windows and Linux basics",
    "level": "Beginner to advanced",
    "objectives": [
      "Identify files, permissions, processes and terminal commands"
    ],
    "prerequisites": [
      "it-basics"
    ],
    "beginner": "An operating system manages programs, files and user access. Linux and Windows use different tools but share these core ideas.",
    "intermediate": "Practise paths, directories, user accounts, permissions and environment variables.",
    "advanced": "Study services, logs, shell scripts, privilege escalation prevention and troubleshooting.",
    "resources": [
      {
        "label": "Free reference / learning material",
        "url": "https://ubuntu.com/tutorials/command-line-for-beginners"
      }
    ],
    "video": {
      "url": "",
      "label": "Video curation pending",
      "reviewed": false
    },
    "examples": [
      "Create a directory, list its files, and record how to check free disk space."
    ],
    "guided": [
      "Create a directory, list its files, and record how to check free disk space.",
      "Explain the concept in your own words and check against the reference."
    ],
    "assessment": [
      {
        "q": "Which command displays the current directory in Linux?",
        "choices": [
          "pwd",
          "cd",
          "mkdir"
        ],
        "answer": 0,
        "why": "pwd prints the working directory."
      }
    ],
    "project": "Write a safe troubleshooting guide for a fictional computer.",
    "mistakes": [
      "Do not assume that following an example proves independent mastery.",
      "Check results against the stated learning objective."
    ],
    "revision": [
      "Review after 1, 7 and 30 days."
    ]
  },
  {
    "id": "networking",
    "title": "Networking and web fundamentals",
    "level": "Beginner to advanced",
    "objectives": [
      "Explain IP addresses, DNS, HTTP, HTTPS and network troubleshooting"
    ],
    "prerequisites": [
      "it-basics"
    ],
    "beginner": "An IP address helps identify a device on a network. DNS converts domain names into IP addresses. HTTPS encrypts web traffic.",
    "intermediate": "Compare TCP and UDP; learn ports, routers, NAT, subnets and request-response cycles.",
    "advanced": "Study TLS certificates, packet capture, routing and zero-trust network design.",
    "resources": [
      {
        "label": "Free reference / learning material",
        "url": "https://www.cloudflare.com/learning/dns/what-is-dns/"
      }
    ],
    "video": {
      "url": "",
      "label": "Video curation pending",
      "reviewed": false
    },
    "examples": [
      "Sketch the route from a phone through a router to a web server."
    ],
    "guided": [
      "Sketch the route from a phone through a router to a web server.",
      "Explain the concept in your own words and check against the reference."
    ],
    "assessment": [
      {
        "q": "What is the main role of DNS?",
        "choices": [
          "Convert domain names to IP addresses",
          "Store passwords",
          "Compress images"
        ],
        "answer": 0,
        "why": "DNS resolves names to addresses."
      }
    ],
    "project": "Document a fictional Wi-Fi outage diagnosis with evidence.",
    "mistakes": [
      "Do not assume that following an example proves independent mastery.",
      "Check results against the stated learning objective."
    ],
    "revision": [
      "Review after 1, 7 and 30 days."
    ]
  },
  {
    "id": "git",
    "title": "Git and GitHub version control",
    "level": "Beginner to advanced",
    "objectives": [
      "Create a repository and explain commits, branches and pull requests"
    ],
    "prerequisites": [
      "it-basics"
    ],
    "beginner": "Git tracks changes in files so you can review and restore earlier versions. GitHub hosts repositories online.",
    "intermediate": "Practise commits, branches, merges, pull requests and conflict resolution.",
    "advanced": "Learn branching policies, signed commits, CI checks and release tagging.",
    "resources": [
      {
        "label": "Free reference / learning material",
        "url": "https://skills.github.com/"
      }
    ],
    "video": {
      "url": "",
      "label": "Video curation pending",
      "reviewed": false
    },
    "examples": [
      "Create a repository and commit a README and one sample file."
    ],
    "guided": [
      "Create a repository and commit a README and one sample file.",
      "Explain the concept in your own words and check against the reference."
    ],
    "assessment": [
      {
        "q": "What does a Git commit represent?",
        "choices": [
          "A saved snapshot of changes",
          "A password",
          "A web browser"
        ],
        "answer": 0,
        "why": "A commit records a version of tracked changes."
      }
    ],
    "project": "Publish a sample learning project without secrets or personal data.",
    "mistakes": [
      "Do not assume that following an example proves independent mastery.",
      "Check results against the stated learning objective."
    ],
    "revision": [
      "Review after 1, 7 and 30 days."
    ]
  },
  {
    "id": "excel",
    "title": "Excel and data cleaning",
    "level": "Beginner to advanced",
    "objectives": [
      "Clean a table and calculate accurate summary statistics"
    ],
    "prerequisites": [
      "it-basics"
    ],
    "beginner": "Spreadsheets organise data into rows and columns. Formulas calculate results from cells.",
    "intermediate": "Use tables, XLOOKUP, pivot tables, validation and Power Query.",
    "advanced": "Design reproducible reporting with documented assumptions and reconciliation tests.",
    "resources": [
      {
        "label": "Free reference / learning material",
        "url": "https://support.microsoft.com/en-us/excel"
      }
    ],
    "video": {
      "url": "",
      "label": "Video curation pending",
      "reviewed": false
    },
    "examples": [
      "Create a fictional staffing table and calculate total hours by team."
    ],
    "guided": [
      "Create a fictional staffing table and calculate total hours by team.",
      "Explain the concept in your own words and check against the reference."
    ],
    "assessment": [
      {
        "q": "Which Excel feature summarises data by categories?",
        "choices": [
          "PivotTable",
          "Page margins",
          "Spell check"
        ],
        "answer": 0,
        "why": "PivotTables group and aggregate data."
      }
    ],
    "project": "Produce an anonymised synthetic staffing dashboard with checked totals.",
    "mistakes": [
      "Do not assume that following an example proves independent mastery.",
      "Check results against the stated learning objective."
    ],
    "revision": [
      "Review after 1, 7 and 30 days."
    ]
  },
  {
    "id": "statistics",
    "title": "Statistics and data literacy",
    "level": "Beginner to advanced",
    "objectives": [
      "Explain averages, distributions and misleading charts"
    ],
    "prerequisites": [
      "excel"
    ],
    "beginner": "The mean is the total divided by the number of observations. The median is the middle value when sorted.",
    "intermediate": "Learn variance, standard deviation, sampling and correlation.",
    "advanced": "Study confidence intervals, hypothesis tests, causal inference and data leakage.",
    "resources": [
      {
        "label": "Free reference / learning material",
        "url": "https://www.khanacademy.org/math/statistics-probability"
      }
    ],
    "video": {
      "url": "",
      "label": "Video curation pending",
      "reviewed": false
    },
    "examples": [
      "Compare the mean and median of 2, 3, 3, 4, 50."
    ],
    "guided": [
      "Compare the mean and median of 2, 3, 3, 4, 50.",
      "Explain the concept in your own words and check against the reference."
    ],
    "assessment": [
      {
        "q": "Which statistic is less affected by an extreme outlier?",
        "choices": [
          "Median",
          "Mean",
          "Sum"
        ],
        "answer": 0,
        "why": "The median is generally more resistant to extreme values."
      }
    ],
    "project": "Write a report explaining why a misleading average could harm a decision.",
    "mistakes": [
      "Do not assume that following an example proves independent mastery.",
      "Check results against the stated learning objective."
    ],
    "revision": [
      "Review after 1, 7 and 30 days."
    ]
  },
  {
    "id": "sql-advanced",
    "title": "Relational databases and advanced SQL",
    "level": "Beginner to advanced",
    "objectives": [
      "Build joins, aggregations and database integrity checks"
    ],
    "prerequisites": [
      "sql-intro"
    ],
    "beginner": "Tables store related data. A primary key identifies a row and a foreign key refers to another table.",
    "intermediate": "Practise JOIN, GROUP BY, CTE, window functions and transaction basics.",
    "advanced": "Explore indexes, query plans, normalisation and transaction isolation.",
    "resources": [
      {
        "label": "Free reference / learning material",
        "url": "https://www.postgresql.org/docs/current/tutorial.html"
      }
    ],
    "video": {
      "url": "",
      "label": "Video curation pending",
      "reviewed": false
    },
    "examples": [
      "Join fictional residents and wards tables and reconcile row counts."
    ],
    "guided": [
      "Join fictional residents and wards tables and reconcile row counts.",
      "Explain the concept in your own words and check against the reference."
    ],
    "assessment": [
      {
        "q": "Which key references a row in another table?",
        "choices": [
          "Foreign key",
          "Display key",
          "Sort key"
        ],
        "answer": 0,
        "why": "A foreign key links related tables."
      }
    ],
    "project": "Build a PostgreSQL schema with constraints and reporting queries.",
    "mistakes": [
      "Do not assume that following an example proves independent mastery.",
      "Check results against the stated learning objective."
    ],
    "revision": [
      "Review after 1, 7 and 30 days."
    ]
  },
  {
    "id": "powerbi",
    "title": "Power BI reporting",
    "level": "Beginner to advanced",
    "objectives": [
      "Build a data model and explain a dashboard measure"
    ],
    "prerequisites": [
      "excel"
    ],
    "beginner": "Power BI turns datasets into charts and reports. Good dashboards start with reliable data and clear questions.",
    "intermediate": "Learn Power Query, relationships, star schemas and DAX measures.",
    "advanced": "Explore row-level security, performance tuning and deployment governance.",
    "resources": [
      {
        "label": "Free reference / learning material",
        "url": "https://learn.microsoft.com/en-us/training/powerplatform/power-bi"
      }
    ],
    "video": {
      "url": "",
      "label": "Video curation pending",
      "reviewed": false
    },
    "examples": [
      "Make a chart of fictional incidents by month and verify totals."
    ],
    "guided": [
      "Make a chart of fictional incidents by month and verify totals.",
      "Explain the concept in your own words and check against the reference."
    ],
    "assessment": [
      {
        "q": "What is DAX mainly used for in Power BI?",
        "choices": [
          "Calculations and measures",
          "Operating system updates",
          "Website hosting"
        ],
        "answer": 0,
        "why": "DAX defines calculations in tabular models."
      }
    ],
    "project": "Build a healthcare quality dashboard using only synthetic data.",
    "mistakes": [
      "Do not assume that following an example proves independent mastery.",
      "Check results against the stated learning objective."
    ],
    "revision": [
      "Review after 1, 7 and 30 days."
    ]
  },
  {
    "id": "python",
    "title": "Python programming fundamentals",
    "level": "Beginner to advanced",
    "objectives": [
      "Write functions, loops and tests for a small program"
    ],
    "prerequisites": [
      "it-basics"
    ],
    "beginner": "Python is a programming language. Variables store values, conditions choose actions, and loops repeat actions.",
    "intermediate": "Learn functions, lists, dictionaries, files, exceptions and modules.",
    "advanced": "Use type hints, virtual environments, unit tests and performance profiling.",
    "resources": [
      {
        "label": "Free reference / learning material",
        "url": "https://cs50.harvard.edu/python/"
      }
    ],
    "video": {
      "url": "",
      "label": "Video curation pending",
      "reviewed": false
    },
    "examples": [
      "Write a function that counts fictional shift hours."
    ],
    "guided": [
      "Write a function that counts fictional shift hours.",
      "Explain the concept in your own words and check against the reference."
    ],
    "assessment": [
      {
        "q": "Which keyword defines a function in Python?",
        "choices": [
          "def",
          "func",
          "function"
        ],
        "answer": 0,
        "why": "Python functions begin with def."
      }
    ],
    "project": "Build a command-line tool that validates a synthetic CSV file.",
    "mistakes": [
      "Do not assume that following an example proves independent mastery.",
      "Check results against the stated learning objective."
    ],
    "revision": [
      "Review after 1, 7 and 30 days."
    ]
  },
  {
    "id": "api",
    "title": "Web APIs and JSON",
    "level": "Beginner to advanced",
    "objectives": [
      "Describe HTTP requests, JSON responses and authentication"
    ],
    "prerequisites": [
      "networking"
    ],
    "beginner": "An API lets one program request information or actions from another. JSON is a common structured data format.",
    "intermediate": "Practise GET/POST, status codes, pagination, authentication and error handling.",
    "advanced": "Study rate limiting, idempotency, API versioning, OAuth and threat modelling.",
    "resources": [
      {
        "label": "Free reference / learning material",
        "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction"
      }
    ],
    "video": {
      "url": "",
      "label": "Video curation pending",
      "reviewed": false
    },
    "examples": [
      "Inspect a public example JSON response and identify its fields."
    ],
    "guided": [
      "Inspect a public example JSON response and identify its fields.",
      "Explain the concept in your own words and check against the reference."
    ],
    "assessment": [
      {
        "q": "Which HTTP status commonly means not found?",
        "choices": [
          "404",
          "200",
          "201"
        ],
        "answer": 0,
        "why": "404 indicates a requested resource was not found."
      }
    ],
    "project": "Design and document a fictional appointment API.",
    "mistakes": [
      "Do not assume that following an example proves independent mastery.",
      "Check results against the stated learning objective."
    ],
    "revision": [
      "Review after 1, 7 and 30 days."
    ]
  },
  {
    "id": "business-analysis",
    "title": "Business analysis and requirements",
    "level": "Beginner to advanced",
    "objectives": [
      "Turn a user problem into measurable requirements"
    ],
    "prerequisites": [
      "it-basics"
    ],
    "beginner": "Business analysts investigate needs, communicate with stakeholders and define what a system should achieve.",
    "intermediate": "Write user stories, acceptance criteria, process maps and prioritised requirements.",
    "advanced": "Practise benefits cases, traceability, stakeholder negotiation and change control.",
    "resources": [
      {
        "label": "Free reference / learning material",
        "url": "https://www.iiba.org/business-analysis-resources/"
      }
    ],
    "video": {
      "url": "",
      "label": "Video curation pending",
      "reviewed": false
    },
    "examples": [
      "Write three user stories for a fictional appointment booking system."
    ],
    "guided": [
      "Write three user stories for a fictional appointment booking system.",
      "Explain the concept in your own words and check against the reference."
    ],
    "assessment": [
      {
        "q": "Which is a testable acceptance criterion?",
        "choices": [
          "Appointment confirmation appears within 5 seconds",
          "Make it nice",
          "Users should be happy"
        ],
        "answer": 0,
        "why": "Measurable criteria can be tested."
      }
    ],
    "project": "Produce a complete requirements specification and traceability matrix.",
    "mistakes": [
      "Do not assume that following an example proves independent mastery.",
      "Check results against the stated learning objective."
    ],
    "revision": [
      "Review after 1, 7 and 30 days."
    ]
  },
  {
    "id": "testing",
    "title": "Software testing and UAT",
    "level": "Beginner to advanced",
    "objectives": [
      "Design test cases and record reproducible defects"
    ],
    "prerequisites": [
      "business-analysis"
    ],
    "beginner": "Testing checks whether software behaves as expected. UAT checks whether it meets users’ real needs.",
    "intermediate": "Learn boundary tests, regression, exploratory tests and bug reporting.",
    "advanced": "Practise risk-based testing, automation, accessibility and test-data management.",
    "resources": [
      {
        "label": "Free reference / learning material",
        "url": "https://www.istqb.org/"
      }
    ],
    "video": {
      "url": "",
      "label": "Video curation pending",
      "reviewed": false
    },
    "examples": [
      "Test a fictional form with empty, valid and invalid values."
    ],
    "guided": [
      "Test a fictional form with empty, valid and invalid values.",
      "Explain the concept in your own words and check against the reference."
    ],
    "assessment": [
      {
        "q": "What is regression testing for?",
        "choices": [
          "Checking existing behaviour after changes",
          "Hiring staff",
          "Buying software"
        ],
        "answer": 0,
        "why": "Regression tests catch unintended changes."
      }
    ],
    "project": "Create a 20-case EPR acceptance-test plan using synthetic scenarios.",
    "mistakes": [
      "Do not assume that following an example proves independent mastery.",
      "Check results against the stated learning objective."
    ],
    "revision": [
      "Review after 1, 7 and 30 days."
    ]
  },
  {
    "id": "privacy",
    "title": "Healthcare data privacy and governance",
    "level": "Beginner to advanced",
    "objectives": [
      "Explain least privilege, confidentiality and data minimisation"
    ],
    "prerequisites": [
      "epr-intro"
    ],
    "beginner": "Health data is sensitive. Access must have a legitimate purpose and be restricted to authorised users.",
    "intermediate": "Study UK GDPR principles, audit trails, retention and incident reporting.",
    "advanced": "Study DPIAs, governance controls, clinical safety responsibilities and assurance evidence.",
    "resources": [
      {
        "label": "Free reference / learning material",
        "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/"
      }
    ],
    "video": {
      "url": "",
      "label": "Video curation pending",
      "reviewed": false
    },
    "examples": [
      "Identify five privacy risks in a fictional appointment system."
    ],
    "guided": [
      "Identify five privacy risks in a fictional appointment system.",
      "Explain the concept in your own words and check against the reference."
    ],
    "assessment": [
      {
        "q": "What does data minimisation mean?",
        "choices": [
          "Collect only data necessary for the purpose",
          "Collect everything",
          "Publish all records"
        ],
        "answer": 0,
        "why": "Only necessary personal data should be processed."
      }
    ],
    "project": "Create a privacy risk register using entirely fictional information.",
    "mistakes": [
      "Do not assume that following an example proves independent mastery.",
      "Check results against the stated learning objective."
    ],
    "revision": [
      "Review after 1, 7 and 30 days."
    ]
  },
  {
    "id": "fhir",
    "title": "HL7 FHIR and healthcare integration",
    "level": "Beginner to advanced",
    "objectives": [
      "Explain FHIR resources and safe data exchange"
    ],
    "prerequisites": [
      "api"
    ],
    "beginner": "FHIR is a healthcare data exchange standard that models information using resources such as Patient and Observation.",
    "intermediate": "Study resource references, profiles, terminology and validation.",
    "advanced": "Explore integration engines, mapping, conformance testing and resilient interfaces.",
    "resources": [
      {
        "label": "Free reference / learning material",
        "url": "https://hl7.org/fhir/"
      }
    ],
    "video": {
      "url": "",
      "label": "Video curation pending",
      "reviewed": false
    },
    "examples": [
      "Identify Patient and Observation fields in fictional FHIR examples."
    ],
    "guided": [
      "Identify Patient and Observation fields in fictional FHIR examples.",
      "Explain the concept in your own words and check against the reference."
    ],
    "assessment": [
      {
        "q": "Which standard uses resources such as Patient and Observation?",
        "choices": [
          "FHIR",
          "CSS",
          "SMTP"
        ],
        "answer": 0,
        "why": "FHIR defines healthcare resource structures."
      }
    ],
    "project": "Build a synthetic patient-observation mapping and validation checklist.",
    "mistakes": [
      "Do not assume that following an example proves independent mastery.",
      "Check results against the stated learning objective."
    ],
    "revision": [
      "Review after 1, 7 and 30 days."
    ]
  },
  {
    "id": "cloud",
    "title": "Cloud computing and identity",
    "level": "Beginner to advanced",
    "objectives": [
      "Explain compute, storage, identity and shared responsibility"
    ],
    "prerequisites": [
      "networking"
    ],
    "beginner": "Cloud services provide computing resources over a network. Providers and customers share security responsibilities.",
    "intermediate": "Compare IaaS, PaaS and SaaS; study identity, networking and cost controls.",
    "advanced": "Study resilience, infrastructure as code, monitoring and cloud security architecture.",
    "resources": [
      {
        "label": "Free reference / learning material",
        "url": "https://learn.microsoft.com/en-us/training/azure/"
      }
    ],
    "video": {
      "url": "",
      "label": "Video curation pending",
      "reviewed": false
    },
    "examples": [
      "Draw a secure web app with identity, storage and backups."
    ],
    "guided": [
      "Draw a secure web app with identity, storage and backups.",
      "Explain the concept in your own words and check against the reference."
    ],
    "assessment": [
      {
        "q": "Which model provides managed applications to end users?",
        "choices": [
          "SaaS",
          "IaaS",
          "Bare metal"
        ],
        "answer": 0,
        "why": "SaaS delivers a managed application."
      }
    ],
    "project": "Design a fictional cloud architecture with cost and risk assumptions.",
    "mistakes": [
      "Do not assume that following an example proves independent mastery.",
      "Check results against the stated learning objective."
    ],
    "revision": [
      "Review after 1, 7 and 30 days."
    ]
  },
  {
    "id": "cyber",
    "title": "Cybersecurity fundamentals",
    "level": "Beginner to advanced",
    "objectives": [
      "Identify threats, controls and incident response steps"
    ],
    "prerequisites": [
      "networking"
    ],
    "beginner": "Cybersecurity protects confidentiality, integrity and availability of systems and data.",
    "intermediate": "Study MFA, patching, logs, phishing, vulnerability management and network defence.",
    "advanced": "Explore SIEM triage, threat modelling, incident response and governance.",
    "resources": [
      {
        "label": "Free reference / learning material",
        "url": "https://www.netacad.com/"
      }
    ],
    "video": {
      "url": "",
      "label": "Video curation pending",
      "reviewed": false
    },
    "examples": [
      "Classify five fictional phishing and access-control risks."
    ],
    "guided": [
      "Classify five fictional phishing and access-control risks.",
      "Explain the concept in your own words and check against the reference."
    ],
    "assessment": [
      {
        "q": "Which control adds a second verification factor?",
        "choices": [
          "MFA",
          "Plaintext passwords",
          "Open sharing"
        ],
        "answer": 0,
        "why": "MFA requires more than one authentication factor."
      }
    ],
    "project": "Write an incident response playbook for a simulated account compromise.",
    "mistakes": [
      "Do not assume that following an example proves independent mastery.",
      "Check results against the stated learning objective."
    ],
    "revision": [
      "Review after 1, 7 and 30 days."
    ]
  },
  {
    "id": "data-engineering",
    "title": "Data pipelines and ETL",
    "level": "Beginner to advanced",
    "objectives": [
      "Explain data extraction, transformation, loading and validation"
    ],
    "prerequisites": [
      "sql-advanced"
    ],
    "beginner": "A data pipeline moves data from sources to destinations while checking quality.",
    "intermediate": "Learn batch processing, incremental loads, orchestration and schema changes.",
    "advanced": "Study distributed processing, lakehouses, streaming and pipeline observability.",
    "resources": [
      {
        "label": "Free reference / learning material",
        "url": "https://learn.microsoft.com/en-us/training/"
      }
    ],
    "video": {
      "url": "",
      "label": "Video curation pending",
      "reviewed": false
    },
    "examples": [
      "Sketch a pipeline from fictional CSV files into reporting tables."
    ],
    "guided": [
      "Sketch a pipeline from fictional CSV files into reporting tables.",
      "Explain the concept in your own words and check against the reference."
    ],
    "assessment": [
      {
        "q": "What does ETL stand for?",
        "choices": [
          "Extract Transform Load",
          "Encrypt Test Login",
          "Evaluate Track List"
        ],
        "answer": 0,
        "why": "ETL describes the major data pipeline steps."
      }
    ],
    "project": "Build a repeatable synthetic ETL pipeline with reconciliation tests.",
    "mistakes": [
      "Do not assume that following an example proves independent mastery.",
      "Check results against the stated learning objective."
    ],
    "revision": [
      "Review after 1, 7 and 30 days."
    ]
  },
  {
    "id": "ai-basics",
    "title": "AI and machine learning foundations",
    "level": "Beginner to advanced",
    "objectives": [
      "Distinguish AI, machine learning, training and evaluation"
    ],
    "prerequisites": [
      "statistics"
    ],
    "beginner": "Machine learning finds patterns from examples. A model can be useful without being correct on every input.",
    "intermediate": "Learn datasets, training/test splits, overfitting, classification and metrics.",
    "advanced": "Study distribution shift, calibration, fairness and model monitoring.",
    "resources": [
      {
        "label": "Free reference / learning material",
        "url": "https://developers.google.com/machine-learning/crash-course"
      }
    ],
    "video": {
      "url": "",
      "label": "Video curation pending",
      "reviewed": false
    },
    "examples": [
      "Explain why training accuracy alone can mislead."
    ],
    "guided": [
      "Explain why training accuracy alone can mislead.",
      "Explain the concept in your own words and check against the reference."
    ],
    "assessment": [
      {
        "q": "What is data leakage?",
        "choices": [
          "Information from evaluation improperly entering training",
          "Encrypting a database",
          "Removing duplicate files"
        ],
        "answer": 0,
        "why": "Leakage creates misleading model evaluation."
      }
    ],
    "project": "Evaluate a toy classifier using synthetic data and a confusion matrix.",
    "mistakes": [
      "Do not assume that following an example proves independent mastery.",
      "Check results against the stated learning objective."
    ],
    "revision": [
      "Review after 1, 7 and 30 days."
    ]
  },
  {
    "id": "ai-governance",
    "title": "AI governance and assurance",
    "level": "Beginner to advanced",
    "objectives": [
      "Identify AI risks and define evidence-based controls"
    ],
    "prerequisites": [
      "ai-basics"
    ],
    "beginner": "AI outputs can be wrong or biased. Human oversight and evaluation are needed where mistakes matter.",
    "intermediate": "Study model cards, risk registers, evaluation sets and responsible deployment.",
    "advanced": "Explore monitoring, auditability, red-teaming and governance frameworks.",
    "resources": [
      {
        "label": "Free reference / learning material",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework"
      }
    ],
    "video": {
      "url": "",
      "label": "Video curation pending",
      "reviewed": false
    },
    "examples": [
      "List risks from a fictional AI-generated care summary."
    ],
    "guided": [
      "List risks from a fictional AI-generated care summary.",
      "Explain the concept in your own words and check against the reference."
    ],
    "assessment": [
      {
        "q": "Which is an appropriate safety measure for high-impact AI outputs?",
        "choices": [
          "Independent evaluation and human oversight",
          "Trust every output",
          "Hide model limitations"
        ],
        "answer": 0,
        "why": "Independent checks reduce unrecognised failures."
      }
    ],
    "project": "Create an AI assurance plan with failure cases and human review rules.",
    "mistakes": [
      "Do not assume that following an example proves independent mastery.",
      "Check results against the stated learning objective."
    ],
    "revision": [
      "Review after 1, 7 and 30 days."
    ]
  },
  {
    "id": "devops",
    "title": "DevOps and CI/CD",
    "level": "Beginner to advanced",
    "objectives": [
      "Explain automated build, test and deployment workflows"
    ],
    "prerequisites": [
      "git"
    ],
    "beginner": "CI runs checks when code changes. CD helps deliver verified changes reliably.",
    "intermediate": "Learn GitHub Actions, containers, environment separation and release pipelines.",
    "advanced": "Explore infrastructure as code, observability, rollback and secure supply chains.",
    "resources": [
      {
        "label": "Free reference / learning material",
        "url": "https://docs.github.com/en/actions"
      }
    ],
    "video": {
      "url": "",
      "label": "Video curation pending",
      "reviewed": false
    },
    "examples": [
      "Write a sample CI workflow that runs a syntax check."
    ],
    "guided": [
      "Write a sample CI workflow that runs a syntax check.",
      "Explain the concept in your own words and check against the reference."
    ],
    "assessment": [
      {
        "q": "What is a main benefit of CI?",
        "choices": [
          "Automated feedback on changes",
          "No testing needed",
          "Guaranteed bug-free software"
        ],
        "answer": 0,
        "why": "CI gives repeatable test feedback, not a guarantee."
      }
    ],
    "project": "Design a tested release pipeline with rollback documentation.",
    "mistakes": [
      "Do not assume that following an example proves independent mastery.",
      "Check results against the stated learning objective."
    ],
    "revision": [
      "Review after 1, 7 and 30 days."
    ]
  },
  {
    "id": "interview",
    "title": "CV, portfolio and interview fundamentals",
    "level": "Beginner to advanced",
    "objectives": [
      "Present accurate evidence of skills and practise structured answers"
    ],
    "prerequisites": [
      "business-analysis"
    ],
    "beginner": "A strong CV matches the job requirements with truthful examples. Interviews test skills and communication.",
    "intermediate": "Use STAR examples, role-specific project evidence and mock technical interviews.",
    "advanced": "Practise system design discussions, trade-offs and senior stakeholder scenarios.",
    "resources": [
      {
        "label": "Free reference / learning material",
        "url": "https://nationalcareers.service.gov.uk/careers-advice/cv-sections"
      }
    ],
    "video": {
      "url": "",
      "label": "Video curation pending",
      "reviewed": false
    },
    "examples": [
      "Write one STAR example using fictionalised nonconfidential work details."
    ],
    "guided": [
      "Write one STAR example using fictionalised nonconfidential work details.",
      "Explain the concept in your own words and check against the reference."
    ],
    "assessment": [
      {
        "q": "What does STAR stand for?",
        "choices": [
          "Situation Task Action Result",
          "Skill Test Analysis Review",
          "Start Try Apply Repeat"
        ],
        "answer": 0,
        "why": "STAR structures behavioural interview examples."
      }
    ],
    "project": "Prepare a tailored CV and three demonstrable portfolio projects.",
    "mistakes": [
      "Do not assume that following an example proves independent mastery.",
      "Check results against the stated learning objective."
    ],
    "revision": [
      "Review after 1, 7 and 30 days."
    ]
  }
]);
