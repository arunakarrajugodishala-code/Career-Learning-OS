window.CLOS.careerGuide = [
  {
    role: 'c1', title: 'Healthcare Technology', targets: 'EPR support, digital trainer, clinical systems analyst',
    fit: [5, 5, 4], reason: 'Frontline care and Adult Care qualifications give you examples of documentation, escalation and helping colleagues use digital workflows.',
    cv: 'Describe a real documentation or escalation task you owned. Then add a separate fictional EPR case showing your workflow map, hazard controls and UAT results.',
    skills: ['EPR workflows and user support', 'Clinical risk and information governance', 'UAT, FHIR and change support'],
    stages: [
      ['epr', 'Map a fictional handover in five steps and write two support scenarios.'],
      ['clinical', 'Record three hazards with controls and owners. Write five UAT cases, including wrong-record selection and downtime.'],
      ['fhir', 'Validate a fictional FHIR bundle, rehearse a rollout and demonstrate how your workflow handles a mismatch.']
    ],
    certificate: ['ISTQB CTFL', 'https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/', 'Optional exam preparation for UAT-heavy roles. Prioritise employer EPR training where available.'],
    search: 'clinical systems'
  },
  {
    role: 'c2', title: 'IT Business Analysis', targets: 'Junior BA, business change analyst, digital BA',
    fit: [4, 5, 4], reason: 'Care handovers and your IT degrees give you a starting point for describing process problems and translating needs into testable requirements.',
    cv: 'Use a real communication or process example. Attach a fictional before-and-after map, prioritised requirements and acceptance criteria. Label any results from a simulation.',
    skills: ['Stakeholder discovery and process mapping', 'User stories, acceptance criteria and UAT', 'Traceability, prioritisation and change impact'],
    stages: [
      ['ba', 'Draft interview prompts and map the current and proposed handover processes.'],
      ['qa', 'Write six user stories with testable criteria and trace each one to a UAT case.'],
      ['analytics', 'Compare two options, estimate a baseline from synthetic data and present a recommendation with assumptions.']
    ],
    certificate: ['BCS Foundation Certificate in Business Analysis', 'https://www.bcs.org/qualifications-and-certifications/certifications-for-professionals/business-analysis/foundation-certificate-in-business-analysis/', 'Start with the syllabus and sample paper. Choose training or an exam after checking vacancy criteria.'],
    search: 'business analyst'
  },
  {
    role: 'c5', title: 'Data Engineering', targets: 'Junior data engineer, ETL developer, data operations analyst',
    fit: [3, 5, 3], reason: 'Your computing degrees support the transition. A reproducible pipeline will show that your current SQL, Python and debugging skills are ready to use.',
    cv: 'Show a repository with ingestion, transformation and tests. Report measured results from synthetic data and explain how you handled duplicates and failed runs.',
    skills: ['SQL joins, grain and Python ingestion', 'Data modelling and automated quality checks', 'Orchestration, incremental loads and observability'],
    stages: [
      ['sql', 'Clean a synthetic staffing CSV, explain row grain and reconcile totals after joins.'],
      ['python', 'Ingest and validate data with Python. Quarantine invalid rows and test duplicates and missing values.'],
      ['data', 'Schedule an incremental load, rerun it without duplicates and demonstrate a failure alert and recovery.']
    ],
    certificate: ['Databricks Data Engineer Associate training', 'https://www.databricks.com/learn/training/data-engineering-courses', 'Platform-specific training. Attempt the Associate exam after building a pipeline if target roles use Databricks.'],
    search: 'junior data engineer'
  },
  {
    role: 'c8', title: 'Cloud / DevOps', targets: 'Cloud support associate, junior DevOps engineer, platform support',
    fit: [2, 5, 3], reason: 'The existing AWS course gives you a head start. Build evidence of Linux, networking, CI/CD and troubleshooting before targeting engineering roles.',
    cv: 'Demonstrate a containerised service, a CI run, a least-privilege design and a rollback test. State which parts ran locally and which ran on AWS.',
    skills: ['Linux, networking and AWS fundamentals', 'Containers, CI and infrastructure as code', 'Monitoring, rollback and incident response'],
    stages: [
      ['cloud', 'Complete the AWS foundation tasks and diagnose a DNS or permissions failure in a lab.'],
      ['devops', 'Containerise a small service, run automated tests in CI and validate a Terraform plan locally.'],
      ['observability', 'Create health checks and a runbook. Trigger a failed release, roll back and show the recovery logs.']
    ],
    certificate: ['AWS Cloud Practitioner Essentials', 'https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/', 'Foundational training for the optional CLF-C02 exam. Build hands-on evidence before pursuing Solutions Architect Associate.'],
    search: 'junior devops cloud support'
  },
  {
    role: 'c12', title: 'AI Governance', targets: 'AI assurance, technology risk, data governance',
    fit: [3, 3, 2], reason: 'Care experience helps you identify human safety risks. Build applied evaluation and oversight evidence, and look at data governance or technology risk as entry points.',
    cv: 'Present an AI risk assessment with a use-case inventory, controls, evaluation cases, escalation owner and go/no-go rationale. Identify your own contribution.',
    skills: ['AI lifecycle, limitations and risk framing', 'Privacy, human oversight and evaluation', 'Assurance evidence, monitoring and escalation'],
    stages: [
      ['ai', 'Map the intended use, prohibited uses and users of a fictional care-summary assistant.'],
      ['privacy', 'Draw its data flows and document access, retention and human review controls.'],
      ['aigov', 'Test omissions, unsupported claims and edge cases. Record thresholds, residual risks and who can halt deployment.']
    ],
    certificate: ['IAPP AI Governance Professional training', 'https://www.iapp.org/train/aigp-training', 'Specialist training for the separate AIGP exam. Start with a risk register and evaluation project before paying.'],
    search: 'AI governance analyst'
  }
];
