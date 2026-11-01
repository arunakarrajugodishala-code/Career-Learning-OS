window.CLOS.depthV24=[
  {
    "id": "sql-01",
    "subject": "SQL",
    "title": "Filtering rows reliably",
    "level": "Beginner",
    "objectives": [
      "Explain the core concept",
      "Apply it to a fictional dataset",
      "Check assumptions and limitations"
    ],
    "explanation": "SQL retrieves data from relational tables. SELECT chooses columns, FROM chooses the table, and WHERE restricts rows. Filtering occurs before aggregation. Use explicit columns in reports so schema changes do not silently alter output.",
    "workedExample": "SELECT service, outcome FROM appointments WHERE outcome = 'Seen';",
    "guidedPractice": "Explain why filtering for Seen excludes cancellations. Change the filter to Diagnostics appointments.",
    "independentProject": "SELECT service, COUNT(*) AS n FROM appointments WHERE outcome = 'Seen' GROUP BY service;",
    "resource": {
      "label": "SQLBolt",
      "url": "https://sqlbolt.com/",
      "reviewStatus": "NOT_REVIEWED"
    },
    "videoStatus": "NOT_VERIFIED",
    "expertReview": "PENDING",
    "questions": [
      {
        "prompt": "Which clause restricts rows before grouping?",
        "choices": [
          "WHERE",
          "ORDER BY",
          "LIMIT",
          "SELECT"
        ],
        "answer": 0,
        "explanation": "WHERE filters source rows."
      },
      {
        "prompt": "What does SELECT * return?",
        "choices": [
          "Only primary keys",
          "All columns",
          "One row",
          "A sorted result"
        ],
        "answer": 1,
        "explanation": "The star selects all columns."
      },
      {
        "prompt": "What does COUNT(*) count?",
        "choices": [
          "Non-null values of one field",
          "All rows in each group",
          "Only unique services",
          "Tables"
        ],
        "answer": 1,
        "explanation": "COUNT(*) counts rows."
      },
      {
        "prompt": "Does SQL guarantee ordering without ORDER BY?",
        "choices": [
          "Yes",
          "No",
          "Only for strings",
          "Only for small tables"
        ],
        "answer": 1,
        "explanation": "Use ORDER BY for reliable ordering."
      },
      {
        "prompt": "Which comparison tests equality in SQL?",
        "choices": [
          "==",
          "=",
          "=:=",
          "IS EQUAL"
        ],
        "answer": 1,
        "explanation": "SQL equality commonly uses =."
      }
    ]
  },
  {
    "id": "sql-02",
    "subject": "SQL",
    "title": "Joining and checking row counts",
    "level": "Intermediate",
    "objectives": [
      "Explain the core concept",
      "Apply it to a fictional dataset",
      "Check assumptions and limitations"
    ],
    "explanation": "A JOIN combines records using matching keys. One-to-many relationships may multiply rows; validate unique keys and counts before reporting. A LEFT JOIN preserves unmatched left-side records and yields NULLs on the right.",
    "workedExample": "SELECT a.id, s.service_name FROM appointments a LEFT JOIN services s ON a.service_id = s.id;",
    "guidedPractice": "Draw a two-table example and show how a duplicated service key inflates rows.",
    "independentProject": "SELECT COUNT(*) FROM appointments; -- compare with joined result",
    "resource": {
      "label": "PostgreSQL documentation",
      "url": "https://www.postgresql.org/docs/current/tutorial-join.html",
      "reviewStatus": "NOT_REVIEWED"
    },
    "videoStatus": "NOT_VERIFIED",
    "expertReview": "PENDING",
    "questions": [
      {
        "prompt": "Which JOIN preserves unmatched left rows?",
        "choices": [
          "INNER JOIN",
          "LEFT JOIN",
          "CROSS JOIN",
          "NATURAL JOIN"
        ],
        "answer": 1,
        "explanation": "LEFT JOIN retains the left table rows."
      },
      {
        "prompt": "What can multiply joined rows?",
        "choices": [
          "Duplicate join keys",
          "ORDER BY",
          "LIMIT",
          "Aliases"
        ],
        "answer": 0,
        "explanation": "Nonunique keys can create multiple matches."
      },
      {
        "prompt": "Which expression counts distinct IDs?",
        "choices": [
          "COUNT(id)",
          "SUM(id)",
          "COUNT(DISTINCT id)",
          "AVG(id)"
        ],
        "answer": 2,
        "explanation": "DISTINCT removes duplicate values for counting."
      },
      {
        "prompt": "What represents missing right-side fields in LEFT JOIN?",
        "choices": [
          "Zero",
          "NULL",
          "False",
          "Empty string always"
        ],
        "answer": 1,
        "explanation": "Unmatched fields are NULL."
      },
      {
        "prompt": "Best validation after a JOIN?",
        "choices": [
          "Assume success",
          "Compare row counts and key uniqueness",
          "Remove all NULLs",
          "Sort descending"
        ],
        "answer": 1,
        "explanation": "Check cardinality and expected row counts."
      }
    ]
  },
  {
    "id": "sql-03",
    "subject": "SQL",
    "title": "Metrics and denominators",
    "level": "Advanced",
    "objectives": [
      "Explain the core concept",
      "Apply it to a fictional dataset",
      "Check assumptions and limitations"
    ],
    "explanation": "A percentage is only meaningful when the numerator, denominator, time window and exclusions are defined. Use conditional aggregation and handle division by zero. Missing and cancelled outcomes should not silently become attended appointments.",
    "workedExample": "SELECT 100.0 * SUM(CASE WHEN outcome='Seen' THEN 1 ELSE 0 END) / NULLIF(COUNT(*),0) AS seen_pct FROM appointments;",
    "guidedPractice": "Define a fictional attendance rate, write its SQL, and document what is excluded.",
    "independentProject": "Use the fictional appointments CSV in labs and manually verify the total.",
    "resource": {
      "label": "NHS Data Dictionary",
      "url": "https://www.datadictionary.nhs.uk/",
      "reviewStatus": "NOT_REVIEWED"
    },
    "videoStatus": "NOT_VERIFIED",
    "expertReview": "PENDING",
    "questions": [
      {
        "prompt": "Why use NULLIF(denominator,0)?",
        "choices": [
          "Faster joins",
          "Avoid division by zero",
          "Encrypt values",
          "Sort groups"
        ],
        "answer": 1,
        "explanation": "NULLIF converts zero to NULL."
      },
      {
        "prompt": "What must a rate specify?",
        "choices": [
          "Colour scheme",
          "Numerator and denominator",
          "Server model",
          "File name"
        ],
        "answer": 1,
        "explanation": "A rate requires precise definitions."
      },
      {
        "prompt": "What does CASE enable?",
        "choices": [
          "Conditional counting",
          "Database backup",
          "User login",
          "Schema migration"
        ],
        "answer": 0,
        "explanation": "CASE supports conditional expressions."
      },
      {
        "prompt": "Why document exclusions?",
        "choices": [
          "To hide missing data",
          "For reproducible comparisons",
          "To shorten queries",
          "To avoid testing"
        ],
        "answer": 1,
        "explanation": "Definitions must be reproducible."
      },
      {
        "prompt": "Is a rate from 12 fictional rows evidence of clinical improvement?",
        "choices": [
          "Yes",
          "No",
          "Only with a chart",
          "Only with a percentage"
        ],
        "answer": 1,
        "explanation": "A tiny synthetic dataset cannot establish impact."
      }
    ]
  },
  {
    "id": "py-01",
    "subject": "Python",
    "title": "Variables, types and control flow",
    "level": "Beginner",
    "objectives": [
      "Explain the core concept",
      "Apply it to a fictional dataset",
      "Check assumptions and limitations"
    ],
    "explanation": "Python variables bind names to values. Integers, floats, strings and booleans behave differently. if statements choose branches, and for loops repeat actions. Keep inputs explicit and avoid assuming that numeric-looking strings are numbers.",
    "workedExample": "minutes = [20, 35, 40]\nfor value in minutes:\n    if value > 30:\n        print(value)",
    "guidedPractice": "Write a function that counts waiting times greater than 30 minutes. Test empty input and a boundary value.",
    "independentProject": "Use Python in a local interpreter or a free browser-based notebook.",
    "resource": {
      "label": "Python tutorial",
      "url": "https://docs.python.org/3/tutorial/",
      "reviewStatus": "NOT_REVIEWED"
    },
    "videoStatus": "NOT_VERIFIED",
    "expertReview": "PENDING",
    "questions": [
      {
        "prompt": "Type of \"42\"?",
        "choices": [
          "int",
          "str",
          "float",
          "bool"
        ],
        "answer": 1,
        "explanation": "Quotes produce a string."
      },
      {
        "prompt": "Which keyword introduces a condition?",
        "choices": [
          "when",
          "if",
          "check",
          "case"
        ],
        "answer": 1,
        "explanation": "Python uses if."
      },
      {
        "prompt": "What does len([]) return?",
        "choices": [
          "1",
          "None",
          "0",
          "Error"
        ],
        "answer": 2,
        "explanation": "An empty list has length zero."
      },
      {
        "prompt": "Which comparison means greater than?",
        "choices": [
          "=>",
          ">",
          "<>",
          ">=<"
        ],
        "answer": 1,
        "explanation": "The greater-than operator is >."
      },
      {
        "prompt": "What is range(3) as loop values?",
        "choices": [
          "1,2,3",
          "0,1,2",
          "0,1,2,3",
          "3"
        ],
        "answer": 1,
        "explanation": "range stops before the upper bound."
      }
    ]
  },
  {
    "id": "py-02",
    "subject": "Python",
    "title": "Functions and defensive data validation",
    "level": "Intermediate",
    "objectives": [
      "Explain the core concept",
      "Apply it to a fictional dataset",
      "Check assumptions and limitations"
    ],
    "explanation": "Functions isolate logic, accept arguments and return results. Validate input shape and types before processing. Raise clear errors for invalid input, and test empty collections and boundary conditions.",
    "workedExample": "def mean(values):\n    if not values:\n        raise ValueError(\"empty values\")\n    return sum(values) / len(values)",
    "guidedPractice": "Implement mean waiting time, then test [], [0], [10,20], and nonnumeric input.",
    "independentProject": "Create a small test file with assertions and run it locally.",
    "resource": {
      "label": "Python unittest",
      "url": "https://docs.python.org/3/library/unittest.html",
      "reviewStatus": "NOT_REVIEWED"
    },
    "videoStatus": "NOT_VERIFIED",
    "expertReview": "PENDING",
    "questions": [
      {
        "prompt": "What does return do?",
        "choices": [
          "Print always",
          "Give a value to caller",
          "Stop interpreter",
          "Create file"
        ],
        "answer": 1,
        "explanation": "return sends a result back."
      },
      {
        "prompt": "What should mean([]) do in our example?",
        "choices": [
          "Divide by zero",
          "Raise ValueError",
          "Return 100",
          "Return string"
        ],
        "answer": 1,
        "explanation": "Explicitly reject empty input."
      },
      {
        "prompt": "Which statement checks a condition in a test?",
        "choices": [
          "assert",
          "emit",
          "fetch",
          "yield"
        ],
        "answer": 0,
        "explanation": "assert verifies an expected condition."
      },
      {
        "prompt": "Why test boundaries?",
        "choices": [
          "To prove no bugs",
          "To catch edge-case defects",
          "To speed internet",
          "To avoid documentation"
        ],
        "answer": 1,
        "explanation": "Boundaries commonly expose defects."
      },
      {
        "prompt": "Why avoid real patient data in practice?",
        "choices": [
          "It is slower",
          "Privacy and authorisation",
          "It cannot be CSV",
          "Python cannot read it"
        ],
        "answer": 1,
        "explanation": "Use synthetic training data."
      }
    ]
  },
  {
    "id": "py-03",
    "subject": "Python",
    "title": "CSV analysis and reproducibility",
    "level": "Advanced",
    "objectives": [
      "Explain the core concept",
      "Apply it to a fictional dataset",
      "Check assumptions and limitations"
    ],
    "explanation": "Use Python csv or pandas to read structured data, inspect headers and missing values, and validate calculations against independent totals. Never infer clinical significance from synthetic training data. Record dataset version and assumptions.",
    "workedExample": "import csv\nwith open(\"labs/epr_appointments_fictional.csv\", newline=\"\") as f:\n    rows = list(csv.DictReader(f))\nprint(len(rows))",
    "guidedPractice": "Count appointment outcomes, verify totals manually and explain how missing outcomes would affect rates.",
    "independentProject": "Write a short README describing your data assumptions and checks.",
    "resource": {
      "label": "Python csv library",
      "url": "https://docs.python.org/3/library/csv.html",
      "reviewStatus": "NOT_REVIEWED"
    },
    "videoStatus": "NOT_VERIFIED",
    "expertReview": "PENDING",
    "questions": [
      {
        "prompt": "Which module reads CSV in Python standard library?",
        "choices": [
          "csv",
          "html",
          "socket",
          "math"
        ],
        "answer": 0,
        "explanation": "The csv module parses delimited records."
      },
      {
        "prompt": "What should you check first?",
        "choices": [
          "Chart colours",
          "Column names and row counts",
          "Font size",
          "Network speed"
        ],
        "answer": 1,
        "explanation": "Schema and counts come first."
      },
      {
        "prompt": "What makes analysis reproducible?",
        "choices": [
          "Undocumented manual edits",
          "Versioned code and definitions",
          "Screenshots only",
          "No tests"
        ],
        "answer": 1,
        "explanation": "Record code, data and assumptions."
      },
      {
        "prompt": "How should missing outcomes be handled?",
        "choices": [
          "Silently assume Seen",
          "Define and report treatment",
          "Delete source",
          "Randomly replace"
        ],
        "answer": 1,
        "explanation": "Missing data needs explicit treatment."
      },
      {
        "prompt": "Does a synthetic dataset establish real-world performance?",
        "choices": [
          "Yes",
          "No",
          "Only for AI",
          "Only if exported"
        ],
        "answer": 1,
        "explanation": "Synthetic data is for learning, not real-world inference."
      }
    ]
  }
];
