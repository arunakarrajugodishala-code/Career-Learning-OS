window.CLOS.v9={
  "modules": [
    {
      "id": "cy01",
      "track": "Cybersecurity",
      "title": "Security principles and threat modelling",
      "level": "Beginner",
      "prerequisites": [],
      "lesson": "Understand confidentiality, integrity, availability, assets, threats, vulnerabilities and mitigations. Distinguish a threat from a vulnerability.",
      "exercise": "Build a threat model for a fictional staff scheduling app.",
      "rubric": "Asset list, threats, controls and residual risk are recorded.",
      "resource": {
        "label": "Cisco Skills for All / Networking Academy",
        "url": "https://www.netacad.com/"
      },
      "videoVerified": false,
      "expertReviewed": false
    },
    {
      "id": "cy02",
      "track": "Cybersecurity",
      "title": "Identity and access management",
      "level": "Beginner",
      "prerequisites": [
        "cy01"
      ],
      "lesson": "Apply least privilege, multi-factor authentication, strong account recovery and access reviews. Avoid sharing accounts.",
      "exercise": "Write a role-permission matrix for fictional clinicians, administrators and support staff.",
      "rubric": "Roles, least privilege and review frequency are documented.",
      "resource": {
        "label": "Cisco Skills for All / Networking Academy",
        "url": "https://www.netacad.com/"
      },
      "videoVerified": false,
      "expertReviewed": false
    },
    {
      "id": "cy03",
      "track": "Cybersecurity",
      "title": "Secure networks and endpoints",
      "level": "Intermediate",
      "prerequisites": [
        "cy02"
      ],
      "lesson": "Explain firewalls, patching, endpoint protection, logging, segmentation and safe network configuration.",
      "exercise": "Draw a defensive network diagram and document a patch and backup policy.",
      "rubric": "Boundaries, monitoring and recovery are considered.",
      "resource": {
        "label": "Cisco Skills for All / Networking Academy",
        "url": "https://www.netacad.com/"
      },
      "videoVerified": false,
      "expertReviewed": false
    },
    {
      "id": "cy04",
      "track": "Cybersecurity",
      "title": "Incident response and security monitoring",
      "level": "Intermediate",
      "prerequisites": [
        "cy03"
      ],
      "lesson": "Follow preparation, detection, containment, eradication, recovery and lessons learned. Escalate suspected incidents appropriately.",
      "exercise": "Write an incident response playbook for a fictional lost work laptop.",
      "rubric": "Escalation, evidence handling, containment and notification decisions are addressed.",
      "resource": {
        "label": "Cisco Skills for All / Networking Academy",
        "url": "https://www.netacad.com/"
      },
      "videoVerified": false,
      "expertReviewed": false
    },
    {
      "id": "cy05",
      "track": "Cybersecurity",
      "title": "Risk, privacy and security assurance",
      "level": "Advanced",
      "prerequisites": [
        "cy04"
      ],
      "lesson": "Assess security risks, document controls, and recognise data-protection and organisational requirements. Training is not authorisation to access systems.",
      "exercise": "Create a risk register and control evidence plan for a fictional EPR interface.",
      "rubric": "Risk owners, likelihood, impact and evidence requirements are recorded.",
      "resource": {
        "label": "Cisco Skills for All / Networking Academy",
        "url": "https://www.netacad.com/"
      },
      "videoVerified": false,
      "expertReviewed": false
    },
    {
      "id": "cl01",
      "track": "Cloud Computing",
      "title": "Cloud models and shared responsibility",
      "level": "Beginner",
      "prerequisites": [],
      "lesson": "Compare IaaS, PaaS and SaaS, public/private/hybrid cloud, regions, availability zones and the provider-customer responsibility split.",
      "exercise": "Classify five fictional services and identify security ownership.",
      "rubric": "Deployment model, service model and shared responsibilities are correct.",
      "resource": {
        "label": "Microsoft Learn cloud fundamentals",
        "url": "https://learn.microsoft.com/training/"
      },
      "videoVerified": false,
      "expertReviewed": false
    },
    {
      "id": "cl02",
      "track": "Cloud Computing",
      "title": "Cloud networking and identity",
      "level": "Beginner",
      "prerequisites": [
        "cl01"
      ],
      "lesson": "Understand virtual networks, subnets, security groups, routing, IAM and least privilege.",
      "exercise": "Draw a fictional two-tier cloud application with restricted access.",
      "rubric": "No public database access; access boundaries and roles are explicit.",
      "resource": {
        "label": "Microsoft Learn cloud fundamentals",
        "url": "https://learn.microsoft.com/training/"
      },
      "videoVerified": false,
      "expertReviewed": false
    },
    {
      "id": "cl03",
      "track": "Cloud Computing",
      "title": "Compute, storage and databases",
      "level": "Intermediate",
      "prerequisites": [
        "cl02"
      ],
      "lesson": "Compare virtual machines, containers, object storage, managed databases and serverless. Consider reliability and cost.",
      "exercise": "Design a small fictional reporting service and justify each cloud component.",
      "rubric": "Capacity, durability, access and cost tradeoffs are explained.",
      "resource": {
        "label": "Microsoft Learn cloud fundamentals",
        "url": "https://learn.microsoft.com/training/"
      },
      "videoVerified": false,
      "expertReviewed": false
    },
    {
      "id": "cl04",
      "track": "Cloud Computing",
      "title": "Infrastructure as code and deployment",
      "level": "Intermediate",
      "prerequisites": [
        "cl03"
      ],
      "lesson": "Explain repeatable deployment, version-controlled configuration, environment separation, CI/CD and safe secrets handling.",
      "exercise": "Write a deployment checklist and an illustrative infrastructure configuration plan.",
      "rubric": "No secrets committed; rollback and review steps included.",
      "resource": {
        "label": "Microsoft Learn cloud fundamentals",
        "url": "https://learn.microsoft.com/training/"
      },
      "videoVerified": false,
      "expertReviewed": false
    },
    {
      "id": "cl05",
      "track": "Cloud Computing",
      "title": "Monitoring, resilience and cost governance",
      "level": "Advanced",
      "prerequisites": [
        "cl04"
      ],
      "lesson": "Set alerts and budgets, monitor health, plan backups and restore tests, and use recovery objectives to guide resilience.",
      "exercise": "Create a monitoring dashboard specification and disaster recovery test plan.",
      "rubric": "Metrics, alert thresholds, recovery objectives and cost limits are documented.",
      "resource": {
        "label": "Microsoft Learn cloud fundamentals",
        "url": "https://learn.microsoft.com/training/"
      },
      "videoVerified": false,
      "expertReviewed": false
    }
  ]
};
