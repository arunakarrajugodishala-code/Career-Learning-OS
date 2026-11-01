window.CLOS.v10={
  "modules": [
    {
      "id": "dev-01",
      "track": "Software Development",
      "title": "Programming foundations with Python",
      "level": "Beginner",
      "prerequisites": [],
      "lesson": "Variables, types, functions, conditions, loops and debugging. Explain what each line does and use small deterministic examples.",
      "exercise": "Build a command-line appointment counter with input validation.",
      "resource": {
        "label": "Free learning reference",
        "url": "https://cs50.harvard.edu/python/"
      },
      "rubric": [
        "Explain core ideas accurately",
        "Produce independent evidence or working example",
        "Document limitations, risks and tests"
      ],
      "videoVerified": false,
      "expertReviewed": false
    },
    {
      "id": "dev-02",
      "track": "Software Development",
      "title": "Data structures and algorithmic thinking",
      "level": "Intermediate",
      "prerequisites": [
        "dev-01"
      ],
      "lesson": "Choose lists, dictionaries, sets and sorting based on the operation. Discuss time complexity and test edge cases.",
      "exercise": "Implement a fictional appointment deduplication function with unit tests.",
      "resource": {
        "label": "Free learning reference",
        "url": "https://docs.python.org/3/tutorial/"
      },
      "rubric": [
        "Explain core ideas accurately",
        "Produce independent evidence or working example",
        "Document limitations, risks and tests"
      ],
      "videoVerified": false,
      "expertReviewed": false
    },
    {
      "id": "dev-03",
      "track": "Software Development",
      "title": "Web development and APIs",
      "level": "Intermediate",
      "prerequisites": [
        "dev-02"
      ],
      "lesson": "Understand HTTP methods, JSON, status codes, client/server boundaries and authentication. Avoid exposing secrets in browser code.",
      "exercise": "Specify a fictional appointments REST API and its error responses.",
      "resource": {
        "label": "Free learning reference",
        "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development"
      },
      "rubric": [
        "Explain core ideas accurately",
        "Produce independent evidence or working example",
        "Document limitations, risks and tests"
      ],
      "videoVerified": false,
      "expertReviewed": false
    },
    {
      "id": "dev-04",
      "track": "Software Development",
      "title": "Software architecture, testing and delivery",
      "level": "Advanced",
      "prerequisites": [
        "dev-03"
      ],
      "lesson": "Separate domain logic from UI, write automated tests, use Git review and CI, and consider observability and maintainability.",
      "exercise": "Design a tested appointment-status service and a release checklist.",
      "resource": {
        "label": "Free learning reference",
        "url": "https://docs.github.com/en/actions"
      },
      "rubric": [
        "Explain core ideas accurately",
        "Produce independent evidence or working example",
        "Document limitations, risks and tests"
      ],
      "videoVerified": false,
      "expertReviewed": false
    },
    {
      "id": "eng-01",
      "track": "Data Engineering",
      "title": "Data pipelines and file formats",
      "level": "Beginner",
      "prerequisites": [],
      "lesson": "Describe extraction, validation, transformation and loading. Compare CSV, JSON and columnar formats, and define a data contract.",
      "exercise": "Document a fictional CSV-to-SQL pipeline with schema checks.",
      "resource": {
        "label": "Free learning reference",
        "url": "https://learn.microsoft.com/en-us/training/paths/get-started-data-engineering/"
      },
      "rubric": [
        "Explain core ideas accurately",
        "Produce independent evidence or working example",
        "Document limitations, risks and tests"
      ],
      "videoVerified": false,
      "expertReviewed": false
    },
    {
      "id": "eng-02",
      "track": "Data Engineering",
      "title": "SQL modelling and transformations",
      "level": "Intermediate",
      "prerequisites": [
        "eng-01"
      ],
      "lesson": "Understand staging, keys, dimensions, facts, slowly changing data and idempotent transformations.",
      "exercise": "Design an appointments fact table and service dimension, with uniqueness tests.",
      "resource": {
        "label": "Free learning reference",
        "url": "https://www.postgresql.org/docs/current/tutorial.html"
      },
      "rubric": [
        "Explain core ideas accurately",
        "Produce independent evidence or working example",
        "Document limitations, risks and tests"
      ],
      "videoVerified": false,
      "expertReviewed": false
    },
    {
      "id": "eng-03",
      "track": "Data Engineering",
      "title": "Orchestration and data quality",
      "level": "Intermediate",
      "prerequisites": [
        "eng-02"
      ],
      "lesson": "Plan dependency-aware jobs, retries, alerts, lineage, freshness and reproducible backfills.",
      "exercise": "Create a pipeline runbook with failure and recovery scenarios.",
      "resource": {
        "label": "Free learning reference",
        "url": "https://airflow.apache.org/docs/"
      },
      "rubric": [
        "Explain core ideas accurately",
        "Produce independent evidence or working example",
        "Document limitations, risks and tests"
      ],
      "videoVerified": false,
      "expertReviewed": false
    },
    {
      "id": "eng-04",
      "track": "Data Engineering",
      "title": "Distributed processing and governance",
      "level": "Advanced",
      "prerequisites": [
        "eng-03"
      ],
      "lesson": "Explain when distributed processing is useful and its cost, partitioning, access control and sensitive-data risks.",
      "exercise": "Compare a local SQL pipeline with a hypothetical distributed design.",
      "resource": {
        "label": "Free learning reference",
        "url": "https://spark.apache.org/docs/latest/"
      },
      "rubric": [
        "Explain core ideas accurately",
        "Produce independent evidence or working example",
        "Document limitations, risks and tests"
      ],
      "videoVerified": false,
      "expertReviewed": false
    },
    {
      "id": "ai-01",
      "track": "AI and Machine Learning",
      "title": "AI, machine learning and evaluation",
      "level": "Beginner",
      "prerequisites": [],
      "lesson": "Distinguish rules, statistical learning and generative AI. Separate training, validation and test sets and avoid data leakage.",
      "exercise": "Define a fictional appointment prediction problem and a baseline.",
      "resource": {
        "label": "Free learning reference",
        "url": "https://developers.google.com/machine-learning/crash-course"
      },
      "rubric": [
        "Explain core ideas accurately",
        "Produce independent evidence or working example",
        "Document limitations, risks and tests"
      ],
      "videoVerified": false,
      "expertReviewed": false
    },
    {
      "id": "ai-02",
      "track": "AI and Machine Learning",
      "title": "Python data preparation and model baselines",
      "level": "Intermediate",
      "prerequisites": [
        "ai-01"
      ],
      "lesson": "Handle missingness, encoding and leakage; choose metrics appropriate to class balance and real-world costs.",
      "exercise": "Write a baseline evaluation plan using only synthetic data.",
      "resource": {
        "label": "Free learning reference",
        "url": "https://scikit-learn.org/stable/supervised_learning.html"
      },
      "rubric": [
        "Explain core ideas accurately",
        "Produce independent evidence or working example",
        "Document limitations, risks and tests"
      ],
      "videoVerified": false,
      "expertReviewed": false
    },
    {
      "id": "ai-03",
      "track": "AI and Machine Learning",
      "title": "LLMs, prompting and retrieval",
      "level": "Intermediate",
      "prerequisites": [
        "ai-02"
      ],
      "lesson": "Explain tokens, embeddings, retrieval, hallucination, citations, privacy and prompt-injection risks.",
      "exercise": "Design a fictional document-question answering system with source citations.",
      "resource": {
        "label": "Free learning reference",
        "url": "https://huggingface.co/learn"
      },
      "rubric": [
        "Explain core ideas accurately",
        "Produce independent evidence or working example",
        "Document limitations, risks and tests"
      ],
      "videoVerified": false,
      "expertReviewed": false
    },
    {
      "id": "ai-04",
      "track": "AI and Machine Learning",
      "title": "AI assurance, monitoring and responsible deployment",
      "level": "Advanced",
      "prerequisites": [
        "ai-03"
      ],
      "lesson": "Plan human oversight, dataset drift checks, privacy review, safety testing, rollback and incident response.",
      "exercise": "Create an AI deployment risk register and model card for a fictional use case.",
      "resource": {
        "label": "Free learning reference",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework"
      },
      "rubric": [
        "Explain core ideas accurately",
        "Produce independent evidence or working example",
        "Document limitations, risks and tests"
      ],
      "videoVerified": false,
      "expertReviewed": false
    }
  ]
};
