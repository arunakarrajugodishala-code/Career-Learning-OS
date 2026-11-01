window.CLOS.reviewV12={
  "version": "1.2",
  "supplementalQuestions": {
    "computer-hardware": [
      {
        "q": "Which component retains data after shutdown?",
        "choices": [
          "RAM",
          "SSD",
          "CPU cache"
        ],
        "answer": 1,
        "why": "An SSD uses non-volatile storage; RAM normally loses its contents when powered off."
      },
      {
        "q": "What is the safest first troubleshooting step?",
        "choices": [
          "Delete system files",
          "Record the symptoms and recent changes",
          "Disable backups"
        ],
        "answer": 1,
        "why": "Record evidence before changing the system."
      }
    ],
    "networking-dns": [
      {
        "q": "What does DNS primarily provide?",
        "choices": [
          "Name-to-address resolution",
          "File encryption",
          "CPU scheduling"
        ],
        "answer": 0,
        "why": "DNS resolves domain names into records such as IP addresses."
      },
      {
        "q": "Which command is typically used to test basic network reachability?",
        "choices": [
          "ping",
          "mkdir",
          "git status"
        ],
        "answer": 0,
        "why": "Ping tests ICMP reachability where ICMP is permitted."
      }
    ],
    "linux-permissions": [
      {
        "q": "What does pwd print?",
        "choices": [
          "Working directory",
          "File contents",
          "Process tree"
        ],
        "answer": 0,
        "why": "pwd prints the current working directory."
      },
      {
        "q": "Which permission grants file reading on Unix-like systems?",
        "choices": [
          "r",
          "w",
          "x"
        ],
        "answer": 0,
        "why": "The r permission means read."
      }
    ],
    "git-workflow": [
      {
        "q": "What does git commit do?",
        "choices": [
          "Records a snapshot in local history",
          "Deletes the repository",
          "Publishes to every remote"
        ],
        "answer": 0,
        "why": "A commit records a local repository snapshot."
      },
      {
        "q": "What helps resolve a merge conflict?",
        "choices": [
          "Review both changes and test the merged result",
          "Delete all branches",
          "Force-push without review"
        ],
        "answer": 0,
        "why": "Conflicts require deliberate reconciliation and testing."
      }
    ],
    "excel-quality": [
      {
        "q": "Which formula sums B2 through B10?",
        "choices": [
          "=SUM(B2:B10)",
          "=COUNT(B2:B10)",
          "=AVERAGE(B2:B10)"
        ],
        "answer": 0,
        "why": "SUM adds numeric values in the range."
      },
      {
        "q": "Why use a pivot table?",
        "choices": [
          "Summarise data by categories",
          "Encrypt a workbook",
          "Install Python"
        ],
        "answer": 0,
        "why": "Pivot tables aggregate data for comparison."
      }
    ],
    "sql-aggregation": [
      {
        "q": "Which SQL clause filters rows before aggregation?",
        "choices": [
          "WHERE",
          "ORDER BY",
          "HAVING"
        ],
        "answer": 0,
        "why": "WHERE filters rows; HAVING filters grouped results."
      },
      {
        "q": "What does a LEFT JOIN preserve?",
        "choices": [
          "All rows from the left table",
          "Only matched rows",
          "All rows from the right table"
        ],
        "answer": 0,
        "why": "A left join retains left-side rows even when no right-side match exists."
      }
    ],
    "python-data": [
      {
        "q": "Which Python type represents an ordered mutable sequence?",
        "choices": [
          "list",
          "tuple",
          "str"
        ],
        "answer": 0,
        "why": "Lists are ordered and mutable."
      },
      {
        "q": "What should a function test assert?",
        "choices": [
          "Expected output for known input",
          "Only that code has comments",
          "Only that a file exists"
        ],
        "answer": 0,
        "why": "Tests compare actual and expected behaviour."
      }
    ],
    "epr-requirements": [
      {
        "q": "Which is an example of a testable requirement?",
        "choices": [
          "The screen should be nice",
          "An authorised user can save an outcome and see a timestamp",
          "The system should be perfect"
        ],
        "answer": 1,
        "why": "Testable requirements have observable outcomes."
      },
      {
        "q": "Why is traceability useful?",
        "choices": [
          "Connects requirements to tests and evidence",
          "Guarantees no defects",
          "Replaces stakeholder reviews"
        ],
        "answer": 0,
        "why": "Traceability helps show what has and has not been verified."
      }
    ],
    "qa-boundaries": [
      {
        "q": "Which test checks a value just below a minimum?",
        "choices": [
          "Boundary-value test",
          "Performance test",
          "Smoke test only"
        ],
        "answer": 0,
        "why": "Boundary tests cover values at and around limits."
      },
      {
        "q": "What must a defect report include?",
        "choices": [
          "Reproduction steps and expected versus actual results",
          "Only a screenshot",
          "Only the tester name"
        ],
        "answer": 0,
        "why": "Reproducible defects need context, steps and observed behaviour."
      }
    ],
    "cyber-iam": [
      {
        "q": "What is least privilege?",
        "choices": [
          "Give only necessary permissions",
          "Give all users admin access",
          "Share credentials"
        ],
        "answer": 0,
        "why": "Least privilege limits access to what a role needs."
      },
      {
        "q": "Which action best protects sensitive training data?",
        "choices": [
          "Use fictional records",
          "Publish patient records",
          "Store passwords in source code"
        ],
        "answer": 0,
        "why": "Fictional data avoids exposing real patient information."
      }
    ],
    "cloud-responsibility": [
      {
        "q": "Who is responsible for security in a cloud deployment?",
        "choices": [
          "Only the provider",
          "Only the customer",
          "Responsibilities are shared and depend on the service"
        ],
        "answer": 2,
        "why": "Cloud shared responsibility varies by service model."
      },
      {
        "q": "Why set a cloud spending alert?",
        "choices": [
          "To identify unexpected cost growth",
          "To guarantee free service",
          "To disable billing"
        ],
        "answer": 0,
        "why": "Alerts improve cost visibility but do not cap charges automatically."
      }
    ],
    "ai-evaluation": [
      {
        "q": "Why separate training and test data?",
        "choices": [
          "To assess generalisation on unseen data",
          "To double the dataset size",
          "To avoid defining metrics"
        ],
        "answer": 0,
        "why": "Evaluation should use data not used for fitting."
      },
      {
        "q": "What is a risk of generative AI output?",
        "choices": [
          "Hallucinated factual claims",
          "Guaranteed factual correctness",
          "No privacy concerns"
        ],
        "answer": 0,
        "why": "Model outputs may be plausible but false and require checking."
      }
    ]
  },
  "reviewIntervalsDays": [
    1,
    7,
    30
  ]
};
