// Curated learning units; unverified videos are never marked as verified.
window.CLOS.deepLessons=[
  {
    "id": "computer-core",
    "title": "Computer fundamentals",
    "parent": "it-basics",
    "objectives": [
      "Explain CPU, RAM, storage and operating-system roles."
    ],
    "beginner": "A CPU executes instructions; RAM holds temporary working data; storage retains files when power is off. An operating system schedules programs and manages files and permissions.",
    "intermediate": "A browser tab consumes memory while running; a saved document resides on persistent storage. Restarting usually clears RAM, not the saved document.",
    "advanced": "Advanced extension: document assumptions, identify failure modes, compare alternatives, and validate outputs against an independent reference.",
    "worked": "A browser tab consumes memory while running; a saved document resides on persistent storage. Restarting usually clears RAM, not the saved document.",
    "practice": [
      "On your own device, identify CPU, installed RAM, disk capacity and OS version. Record where you found each value without including serial numbers.",
      "Write a short explanation in your own words and identify one common mistake."
    ],
    "project": "On your own device, identify CPU, installed RAM, disk capacity and OS version. Record where you found each value without including serial numbers.",
    "assessment": [
      {
        "q": "What retains files after power off?",
        "choices": [
          "RAM",
          "SSD storage",
          "CPU cache"
        ],
        "answer": 1,
        "why": "An SSD is non-volatile storage."
      }
    ],
    "resource": {
      "label": "Free reference / course",
      "url": "https://cs50.harvard.edu/x/",
      "reviewed": false
    },
    "video": {
      "url": "",
      "label": "Video not yet independently selected or verified",
      "reviewed": false
    },
    "reviewed": false
  },
  {
    "id": "network-core",
    "title": "Networking and web basics",
    "parent": "networking",
    "objectives": [
      "Explain IP addresses, DNS, HTTP and HTTPS."
    ],
    "beginner": "An IP address identifies a network endpoint. DNS resolves domain names to addresses. HTTP is an application protocol; HTTPS protects its transport using TLS.",
    "intermediate": "Typing a website address typically triggers DNS resolution, a network connection and an HTTPS request. HTTPS does not guarantee the site itself is trustworthy.",
    "advanced": "Advanced extension: document assumptions, identify failure modes, compare alternatives, and validate outputs against an independent reference.",
    "worked": "Typing a website address typically triggers DNS resolution, a network connection and an HTTPS request. HTTPS does not guarantee the site itself is trustworthy.",
    "practice": [
      "Use a command line to run nslookup example.com (or dig example.com). Note the returned address and explain that it can change.",
      "Write a short explanation in your own words and identify one common mistake."
    ],
    "project": "Use a command line to run nslookup example.com (or dig example.com). Note the returned address and explain that it can change.",
    "assessment": [
      {
        "q": "What is DNS primarily used for?",
        "choices": [
          "Encrypting files",
          "Resolving domain names",
          "Storing passwords"
        ],
        "answer": 1,
        "why": "DNS maps names to records such as IP addresses."
      }
    ],
    "resource": {
      "label": "Free reference / course",
      "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work",
      "reviewed": false
    },
    "video": {
      "url": "",
      "label": "Video not yet independently selected or verified",
      "reviewed": false
    },
    "reviewed": false
  },
  {
    "id": "linux-core",
    "title": "Linux and command-line essentials",
    "parent": "os-linux",
    "objectives": [
      "Navigate directories and manage files safely using a terminal."
    ],
    "beginner": "pwd shows your current directory; ls lists contents; cd changes directory. mkdir creates a folder. Use commands cautiously because terminal operations can modify files.",
    "intermediate": "Absolute paths begin at the filesystem root; relative paths depend on the current directory. Quoting paths containing spaces avoids accidental splitting.",
    "advanced": "Advanced extension: document assumptions, identify failure modes, compare alternatives, and validate outputs against an independent reference.",
    "worked": "Absolute paths begin at the filesystem root; relative paths depend on the current directory. Quoting paths containing spaces avoids accidental splitting.",
    "practice": [
      "Create a folder called learning-lab, enter it, create a text file, list its contents and explain each command. Never use destructive commands on unfamiliar paths.",
      "Write a short explanation in your own words and identify one common mistake."
    ],
    "project": "Create a folder called learning-lab, enter it, create a text file, list its contents and explain each command. Never use destructive commands on unfamiliar paths.",
    "assessment": [
      {
        "q": "Which command prints the working directory?",
        "choices": [
          "pwd",
          "mkdir",
          "cd"
        ],
        "answer": 0,
        "why": "pwd stands for print working directory."
      }
    ],
    "resource": {
      "label": "Free reference / course",
      "url": "https://linuxjourney.com/",
      "reviewed": false
    },
    "video": {
      "url": "",
      "label": "Video not yet independently selected or verified",
      "reviewed": false
    },
    "reviewed": false
  },
  {
    "id": "git-core",
    "title": "Git and GitHub fundamentals",
    "parent": "git",
    "objectives": [
      "Understand repositories, commits, branches and remote hosting."
    ],
    "beginner": "Git tracks changes in files. A commit is a recorded snapshot with a message. GitHub hosts Git repositories and supports collaboration.",
    "intermediate": "A branch allows parallel work; merging integrates changes. A GitHub Pages site publishes files but does not automatically provide private cloud storage.",
    "advanced": "Advanced extension: document assumptions, identify failure modes, compare alternatives, and validate outputs against an independent reference.",
    "worked": "A branch allows parallel work; merging integrates changes. A GitHub Pages site publishes files but does not automatically provide private cloud storage.",
    "practice": [
      "Create a practice repository, add a README, commit an improvement and inspect the history. Do not upload secrets or personal documents.",
      "Write a short explanation in your own words and identify one common mistake."
    ],
    "project": "Create a practice repository, add a README, commit an improvement and inspect the history. Do not upload secrets or personal documents.",
    "assessment": [
      {
        "q": "Which action records a snapshot in Git?",
        "choices": [
          "Commit",
          "Refresh",
          "Deploy"
        ],
        "answer": 0,
        "why": "A commit records tracked changes in repository history."
      }
    ],
    "resource": {
      "label": "Free reference / course",
      "url": "https://skills.github.com/",
      "reviewed": false
    },
    "video": {
      "url": "",
      "label": "Video not yet independently selected or verified",
      "reviewed": false
    },
    "reviewed": false
  },
  {
    "id": "excel-core",
    "title": "Excel data analysis foundations",
    "parent": "excel",
    "objectives": [
      "Use tables, formulas, filters and pivot tables to analyse data."
    ],
    "beginner": "A spreadsheet contains cells organised into rows and columns. Formulas calculate results. Tables and filters help structure and inspect data.",
    "intermediate": "Use SUMIFS to aggregate with conditions; use XLOOKUP to find matching values. A pivot table groups and summarises records, but incorrect source data leads to misleading totals.",
    "advanced": "Advanced extension: document assumptions, identify failure modes, compare alternatives, and validate outputs against an independent reference.",
    "worked": "Use SUMIFS to aggregate with conditions; use XLOOKUP to find matching values. A pivot table groups and summarises records, but incorrect source data leads to misleading totals.",
    "practice": [
      "Create 20 fictional care shifts with date, hours and department. Calculate total hours, average hours and hours by department. Reconcile your results manually.",
      "Write a short explanation in your own words and identify one common mistake."
    ],
    "project": "Create 20 fictional care shifts with date, hours and department. Calculate total hours, average hours and hours by department. Reconcile your results manually.",
    "assessment": [
      {
        "q": "Which feature groups records to summarise totals?",
        "choices": [
          "Pivot table",
          "Font colour",
          "Freeze panes"
        ],
        "answer": 0,
        "why": "Pivot tables aggregate rows by selected categories."
      }
    ],
    "resource": {
      "label": "Free reference / course",
      "url": "https://support.microsoft.com/en-us/excel",
      "reviewed": false
    },
    "video": {
      "url": "",
      "label": "Video not yet independently selected or verified",
      "reviewed": false
    },
    "reviewed": false
  },
  {
    "id": "sql-core",
    "title": "SQL fundamentals and joins",
    "parent": "sql-intro",
    "objectives": [
      "Query relational data with SELECT, WHERE, GROUP BY and JOIN."
    ],
    "beginner": "A table stores rows and columns. SELECT chooses columns, WHERE filters rows and ORDER BY sorts results. SQL queries do not automatically modify data.",
    "intermediate": "GROUP BY aggregates records. INNER JOIN keeps matching records from both tables; LEFT JOIN keeps all rows from the left table. Duplicate keys can multiply rows and distort totals.",
    "advanced": "Advanced extension: document assumptions, identify failure modes, compare alternatives, and validate outputs against an independent reference.",
    "worked": "GROUP BY aggregates records. INNER JOIN keeps matching records from both tables; LEFT JOIN keeps all rows from the left table. Duplicate keys can multiply rows and distort totals.",
    "practice": [
      "Using fictional residents and appointments tables, write a SELECT query, a filtered query, a GROUP BY count and a LEFT JOIN. Check unmatched records and row counts.",
      "Write a short explanation in your own words and identify one common mistake."
    ],
    "project": "Using fictional residents and appointments tables, write a SELECT query, a filtered query, a GROUP BY count and a LEFT JOIN. Check unmatched records and row counts.",
    "assessment": [
      {
        "q": "Which JOIN retains every row from the left table?",
        "choices": [
          "INNER JOIN",
          "LEFT JOIN",
          "CROSS JOIN"
        ],
        "answer": 1,
        "why": "LEFT JOIN preserves left-side rows even without a match."
      }
    ],
    "resource": {
      "label": "Free reference / course",
      "url": "https://sqlbolt.com/",
      "reviewed": false
    },
    "video": {
      "url": "",
      "label": "Video not yet independently selected or verified",
      "reviewed": false
    },
    "reviewed": false
  }
];
