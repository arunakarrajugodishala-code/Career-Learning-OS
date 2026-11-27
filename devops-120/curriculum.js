const curriculum = [
  {
    "subject": "Foundations",
    "source": "https://linuxjourney.com/",
    "topic": "DevOps lifecycle",
    "detail": [
      "DevOps lifecycle",
      "DevOps connects development and operations through small changes, automated tests, repeatable releases and feedback. A deployment is not complete until its health is observable.",
      "Commit → build → test → deploy → monitor",
      "Draw a pipeline for a synthetic care rota application; identify a rollback point.",
      "Why monitor after deployment?",
      "To detect regressions and restore service"
    ]
  },
  {
    "subject": "Foundations",
    "source": "https://linuxjourney.com/",
    "topic": "Computer hardware and OS",
    "detail": null
  },
  {
    "subject": "Foundations",
    "source": "https://linuxjourney.com/",
    "topic": "Linux terminal",
    "detail": [
      "Linux terminal",
      "A shell interprets commands. The current directory determines relative paths; absolute paths begin at the root. Commands return exit codes, with zero usually meaning success.",
      "Shell → command → kernel → output",
      "Run pwd, ls -la, mkdir practice, cd practice and echo hello > note.txt in a disposable Linux environment.",
      "What does pwd show?",
      "Current working directory"
    ]
  },
  {
    "subject": "Foundations",
    "source": "https://linuxjourney.com/",
    "topic": "Files and paths",
    "detail": null
  },
  {
    "subject": "Foundations",
    "source": "https://linuxjourney.com/",
    "topic": "Permissions",
    "detail": null
  },
  {
    "subject": "Foundations",
    "source": "https://linuxjourney.com/",
    "topic": "Processes",
    "detail": null
  },
  {
    "subject": "Foundations",
    "source": "https://linuxjourney.com/",
    "topic": "Services",
    "detail": null
  },
  {
    "subject": "Foundations",
    "source": "https://linuxjourney.com/",
    "topic": "Packages",
    "detail": null
  },
  {
    "subject": "Foundations",
    "source": "https://linuxjourney.com/",
    "topic": "Shell variables",
    "detail": null
  },
  {
    "subject": "Foundations",
    "source": "https://linuxjourney.com/",
    "topic": "Bash scripts",
    "detail": null
  },
  {
    "subject": "Foundations",
    "source": "https://linuxjourney.com/",
    "topic": "IP addressing",
    "detail": null
  },
  {
    "subject": "Foundations",
    "source": "https://linuxjourney.com/",
    "topic": "DNS",
    "detail": null
  },
  {
    "subject": "Foundations",
    "source": "https://linuxjourney.com/",
    "topic": "HTTP and TLS",
    "detail": null
  },
  {
    "subject": "Foundations",
    "source": "https://linuxjourney.com/",
    "topic": "Ports and firewalls",
    "detail": null
  },
  {
    "subject": "Foundations",
    "source": "https://linuxjourney.com/",
    "topic": "SSH",
    "detail": null
  },
  {
    "subject": "Engineering basics",
    "source": "https://skills.github.com/",
    "topic": "Git init and commits",
    "detail": null
  },
  {
    "subject": "Engineering basics",
    "source": "https://skills.github.com/",
    "topic": "Branches",
    "detail": null
  },
  {
    "subject": "Engineering basics",
    "source": "https://skills.github.com/",
    "topic": "Merge conflicts",
    "detail": null
  },
  {
    "subject": "Engineering basics",
    "source": "https://skills.github.com/",
    "topic": "Pull requests",
    "detail": null
  },
  {
    "subject": "Engineering basics",
    "source": "https://skills.github.com/",
    "topic": "Git remotes",
    "detail": null
  },
  {
    "subject": "Engineering basics",
    "source": "https://skills.github.com/",
    "topic": "Python variables",
    "detail": null
  },
  {
    "subject": "Engineering basics",
    "source": "https://skills.github.com/",
    "topic": "Python functions",
    "detail": null
  },
  {
    "subject": "Engineering basics",
    "source": "https://skills.github.com/",
    "topic": "Python files",
    "detail": null
  },
  {
    "subject": "Engineering basics",
    "source": "https://skills.github.com/",
    "topic": "Python exceptions",
    "detail": null
  },
  {
    "subject": "Engineering basics",
    "source": "https://skills.github.com/",
    "topic": "JSON and YAML",
    "detail": null
  },
  {
    "subject": "Engineering basics",
    "source": "https://skills.github.com/",
    "topic": "REST APIs",
    "detail": null
  },
  {
    "subject": "Engineering basics",
    "source": "https://skills.github.com/",
    "topic": "Unit tests",
    "detail": null
  },
  {
    "subject": "Engineering basics",
    "source": "https://skills.github.com/",
    "topic": "Logging",
    "detail": null
  },
  {
    "subject": "Engineering basics",
    "source": "https://skills.github.com/",
    "topic": "Debugging",
    "detail": null
  },
  {
    "subject": "Engineering basics",
    "source": "https://skills.github.com/",
    "topic": "Foundation project",
    "detail": null
  },
  {
    "subject": "AWS",
    "source": "https://docs.aws.amazon.com/",
    "topic": "Regions and availability zones",
    "detail": null
  },
  {
    "subject": "AWS",
    "source": "https://docs.aws.amazon.com/",
    "topic": "IAM",
    "detail": [
      "IAM",
      "IAM controls which identities can perform actions on resources. Policies evaluate permissions; explicit deny overrides allow. Prefer roles and temporary credentials over permanent keys.",
      "Identity → policy evaluation → resource",
      "Design a read-only S3 policy for a fictional application; do not create access keys.",
      "What overrides an allow?",
      "Explicit deny"
    ]
  },
  {
    "subject": "AWS",
    "source": "https://docs.aws.amazon.com/",
    "topic": "VPC",
    "detail": null
  },
  {
    "subject": "AWS",
    "source": "https://docs.aws.amazon.com/",
    "topic": "Subnets and routing",
    "detail": null
  },
  {
    "subject": "AWS",
    "source": "https://docs.aws.amazon.com/",
    "topic": "Security groups",
    "detail": null
  },
  {
    "subject": "AWS",
    "source": "https://docs.aws.amazon.com/",
    "topic": "EC2",
    "detail": null
  },
  {
    "subject": "AWS",
    "source": "https://docs.aws.amazon.com/",
    "topic": "S3",
    "detail": null
  },
  {
    "subject": "AWS",
    "source": "https://docs.aws.amazon.com/",
    "topic": "EBS",
    "detail": null
  },
  {
    "subject": "AWS",
    "source": "https://docs.aws.amazon.com/",
    "topic": "RDS",
    "detail": null
  },
  {
    "subject": "AWS",
    "source": "https://docs.aws.amazon.com/",
    "topic": "Load balancing",
    "detail": null
  },
  {
    "subject": "AWS",
    "source": "https://docs.aws.amazon.com/",
    "topic": "Auto Scaling",
    "detail": null
  },
  {
    "subject": "AWS",
    "source": "https://docs.aws.amazon.com/",
    "topic": "Route 53",
    "detail": null
  },
  {
    "subject": "AWS",
    "source": "https://docs.aws.amazon.com/",
    "topic": "CloudWatch",
    "detail": null
  },
  {
    "subject": "AWS",
    "source": "https://docs.aws.amazon.com/",
    "topic": "AWS budgets",
    "detail": null
  },
  {
    "subject": "AWS",
    "source": "https://docs.aws.amazon.com/",
    "topic": "AWS architecture review",
    "detail": null
  },
  {
    "subject": "Automation",
    "source": "https://developer.hashicorp.com/terraform/tutorials",
    "topic": "Docker images",
    "detail": [
      "Docker images",
      "An image is an immutable packaged filesystem and metadata. A container is a running instance with a writable layer. Rebuild images rather than modifying production containers.",
      "Dockerfile → image → container",
      "Build a local nginx image or run nginx with a local port mapping; inspect and remove the container.",
      "What is a container?",
      "A running instance of an image"
    ]
  },
  {
    "subject": "Automation",
    "source": "https://developer.hashicorp.com/terraform/tutorials",
    "topic": "Dockerfile",
    "detail": null
  },
  {
    "subject": "Automation",
    "source": "https://developer.hashicorp.com/terraform/tutorials",
    "topic": "Containers",
    "detail": null
  },
  {
    "subject": "Automation",
    "source": "https://developer.hashicorp.com/terraform/tutorials",
    "topic": "Volumes",
    "detail": null
  },
  {
    "subject": "Automation",
    "source": "https://developer.hashicorp.com/terraform/tutorials",
    "topic": "Docker networks",
    "detail": null
  },
  {
    "subject": "Automation",
    "source": "https://developer.hashicorp.com/terraform/tutorials",
    "topic": "Compose",
    "detail": null
  },
  {
    "subject": "Automation",
    "source": "https://developer.hashicorp.com/terraform/tutorials",
    "topic": "Registries",
    "detail": null
  },
  {
    "subject": "Automation",
    "source": "https://developer.hashicorp.com/terraform/tutorials",
    "topic": "Terraform providers",
    "detail": null
  },
  {
    "subject": "Automation",
    "source": "https://developer.hashicorp.com/terraform/tutorials",
    "topic": "Terraform state",
    "detail": [
      "Terraform state",
      "State maps configuration addresses to real infrastructure objects. Terraform uses it to calculate changes; shared state needs access controls and locking where supported. State may contain sensitive data.",
      "Configuration + state + provider → plan",
      "Use a local-only Terraform resource; inspect plan and state without publishing state.",
      "Why protect state?",
      "It may contain sensitive data and resource mappings"
    ]
  },
  {
    "subject": "Automation",
    "source": "https://developer.hashicorp.com/terraform/tutorials",
    "topic": "Terraform variables",
    "detail": null
  },
  {
    "subject": "Automation",
    "source": "https://developer.hashicorp.com/terraform/tutorials",
    "topic": "Terraform modules",
    "detail": null
  },
  {
    "subject": "Automation",
    "source": "https://developer.hashicorp.com/terraform/tutorials",
    "topic": "Terraform plan and apply",
    "detail": null
  },
  {
    "subject": "Automation",
    "source": "https://developer.hashicorp.com/terraform/tutorials",
    "topic": "Ansible inventory",
    "detail": null
  },
  {
    "subject": "Automation",
    "source": "https://developer.hashicorp.com/terraform/tutorials",
    "topic": "Ansible playbooks",
    "detail": null
  },
  {
    "subject": "Automation",
    "source": "https://developer.hashicorp.com/terraform/tutorials",
    "topic": "Infrastructure project",
    "detail": null
  },
  {
    "subject": "CI/CD",
    "source": "https://docs.github.com/en/actions",
    "topic": "CI and CD",
    "detail": null
  },
  {
    "subject": "CI/CD",
    "source": "https://docs.github.com/en/actions",
    "topic": "GitHub workflows",
    "detail": [
      "GitHub workflows",
      "A workflow is YAML automation triggered by events. Jobs run on runners and steps execute commands or actions. Limit token permissions and pin third-party actions appropriately.",
      "Event → workflow → job → runner → steps",
      "Create a workflow that runs a local unit test on pull requests.",
      "What executes a job?",
      "A runner"
    ]
  },
  {
    "subject": "CI/CD",
    "source": "https://docs.github.com/en/actions",
    "topic": "Jobs and steps",
    "detail": null
  },
  {
    "subject": "CI/CD",
    "source": "https://docs.github.com/en/actions",
    "topic": "Runners",
    "detail": null
  },
  {
    "subject": "CI/CD",
    "source": "https://docs.github.com/en/actions",
    "topic": "Artifacts",
    "detail": null
  },
  {
    "subject": "CI/CD",
    "source": "https://docs.github.com/en/actions",
    "topic": "Secrets and OIDC",
    "detail": null
  },
  {
    "subject": "CI/CD",
    "source": "https://docs.github.com/en/actions",
    "topic": "Matrix builds",
    "detail": null
  },
  {
    "subject": "CI/CD",
    "source": "https://docs.github.com/en/actions",
    "topic": "Deployment environments",
    "detail": null
  },
  {
    "subject": "CI/CD",
    "source": "https://docs.github.com/en/actions",
    "topic": "Rollback",
    "detail": null
  },
  {
    "subject": "CI/CD",
    "source": "https://docs.github.com/en/actions",
    "topic": "Azure Pipelines",
    "detail": null
  },
  {
    "subject": "CI/CD",
    "source": "https://docs.github.com/en/actions",
    "topic": "Kubernetes architecture",
    "detail": null
  },
  {
    "subject": "CI/CD",
    "source": "https://docs.github.com/en/actions",
    "topic": "Pods",
    "detail": [
      "Pods",
      "A pod is Kubernetes' smallest deployable unit. Its containers share networking and can share volumes. Controllers replace failed pods rather than relying on a permanent pod identity.",
      "Deployment → ReplicaSet → Pod",
      "Use a local kind cluster; create a deployment, delete a pod and observe replacement.",
      "Which controller maintains replicas?",
      "ReplicaSet"
    ]
  },
  {
    "subject": "CI/CD",
    "source": "https://docs.github.com/en/actions",
    "topic": "Deployments",
    "detail": null
  },
  {
    "subject": "CI/CD",
    "source": "https://docs.github.com/en/actions",
    "topic": "Services",
    "detail": null
  },
  {
    "subject": "CI/CD",
    "source": "https://docs.github.com/en/actions",
    "topic": "ConfigMaps and Secrets",
    "detail": null
  },
  {
    "subject": "Production",
    "source": "https://kubernetes.io/docs/",
    "topic": "Namespaces and RBAC",
    "detail": null
  },
  {
    "subject": "Production",
    "source": "https://kubernetes.io/docs/",
    "topic": "Probes",
    "detail": null
  },
  {
    "subject": "Production",
    "source": "https://kubernetes.io/docs/",
    "topic": "Resource limits",
    "detail": null
  },
  {
    "subject": "Production",
    "source": "https://kubernetes.io/docs/",
    "topic": "Persistent volumes",
    "detail": null
  },
  {
    "subject": "Production",
    "source": "https://kubernetes.io/docs/",
    "topic": "Ingress",
    "detail": null
  },
  {
    "subject": "Production",
    "source": "https://kubernetes.io/docs/",
    "topic": "Helm",
    "detail": null
  },
  {
    "subject": "Production",
    "source": "https://kubernetes.io/docs/",
    "topic": "Argo CD",
    "detail": null
  },
  {
    "subject": "Production",
    "source": "https://kubernetes.io/docs/",
    "topic": "GitOps",
    "detail": null
  },
  {
    "subject": "Production",
    "source": "https://kubernetes.io/docs/",
    "topic": "Prometheus",
    "detail": null
  },
  {
    "subject": "Production",
    "source": "https://kubernetes.io/docs/",
    "topic": "Grafana",
    "detail": null
  },
  {
    "subject": "Production",
    "source": "https://kubernetes.io/docs/",
    "topic": "Logs",
    "detail": null
  },
  {
    "subject": "Production",
    "source": "https://kubernetes.io/docs/",
    "topic": "Distributed traces",
    "detail": null
  },
  {
    "subject": "Production",
    "source": "https://kubernetes.io/docs/",
    "topic": "Incident response",
    "detail": null
  },
  {
    "subject": "Production",
    "source": "https://kubernetes.io/docs/",
    "topic": "Supply chain security",
    "detail": null
  },
  {
    "subject": "Production",
    "source": "https://kubernetes.io/docs/",
    "topic": "Production project",
    "detail": null
  },
  {
    "subject": "AI operations",
    "source": "https://learn.microsoft.com/en-us/azure/ai-foundry/",
    "topic": "LLM fundamentals",
    "detail": null
  },
  {
    "subject": "AI operations",
    "source": "https://learn.microsoft.com/en-us/azure/ai-foundry/",
    "topic": "Tokens and context",
    "detail": null
  },
  {
    "subject": "AI operations",
    "source": "https://learn.microsoft.com/en-us/azure/ai-foundry/",
    "topic": "Prompt design",
    "detail": null
  },
  {
    "subject": "AI operations",
    "source": "https://learn.microsoft.com/en-us/azure/ai-foundry/",
    "topic": "Embeddings",
    "detail": null
  },
  {
    "subject": "AI operations",
    "source": "https://learn.microsoft.com/en-us/azure/ai-foundry/",
    "topic": "Vector search",
    "detail": null
  },
  {
    "subject": "AI operations",
    "source": "https://learn.microsoft.com/en-us/azure/ai-foundry/",
    "topic": "RAG",
    "detail": [
      "RAG",
      "Retrieval augmented generation retrieves relevant documents and supplies them as context to a language model. Retrieval quality and answer grounding must be evaluated separately.",
      "Question → retrieval → context → model → answer",
      "Use synthetic documents; retrieve matching passages and compare answers with and without context.",
      "Does RAG retrain the model?",
      "No, it supplies external context"
    ]
  },
  {
    "subject": "AI operations",
    "source": "https://learn.microsoft.com/en-us/azure/ai-foundry/",
    "topic": "RAG evaluation",
    "detail": null
  },
  {
    "subject": "AI operations",
    "source": "https://learn.microsoft.com/en-us/azure/ai-foundry/",
    "topic": "MCP",
    "detail": [
      "MCP",
      "Model Context Protocol standardises communication between AI applications and servers exposing tools, resources or prompts. Tool calls require appropriate authorisation and untrusted content must not override instructions.",
      "Host → client → MCP server → tool",
      "Sketch a read-only synthetic incident lookup tool and its permission boundary.",
      "Should retrieved text grant permissions?",
      "No"
    ]
  },
  {
    "subject": "AI operations",
    "source": "https://learn.microsoft.com/en-us/azure/ai-foundry/",
    "topic": "Tool permissions",
    "detail": null
  },
  {
    "subject": "AI operations",
    "source": "https://learn.microsoft.com/en-us/azure/ai-foundry/",
    "topic": "AI Foundry",
    "detail": null
  },
  {
    "subject": "AI operations",
    "source": "https://learn.microsoft.com/en-us/azure/ai-foundry/",
    "topic": "AIOps anomaly detection",
    "detail": null
  },
  {
    "subject": "AI operations",
    "source": "https://learn.microsoft.com/en-us/azure/ai-foundry/",
    "topic": "AI incident triage",
    "detail": null
  },
  {
    "subject": "AI operations",
    "source": "https://learn.microsoft.com/en-us/azure/ai-foundry/",
    "topic": "Human approval",
    "detail": null
  },
  {
    "subject": "AI operations",
    "source": "https://learn.microsoft.com/en-us/azure/ai-foundry/",
    "topic": "AI security",
    "detail": null
  },
  {
    "subject": "AI operations",
    "source": "https://learn.microsoft.com/en-us/azure/ai-foundry/",
    "topic": "AI operations project",
    "detail": null
  },
  {
    "subject": "Career",
    "source": "https://aws.amazon.com/certification/",
    "topic": "AWS secure architecture",
    "detail": null
  },
  {
    "subject": "Career",
    "source": "https://aws.amazon.com/certification/",
    "topic": "AWS resilient architecture",
    "detail": null
  },
  {
    "subject": "Career",
    "source": "https://aws.amazon.com/certification/",
    "topic": "AWS performance",
    "detail": null
  },
  {
    "subject": "Career",
    "source": "https://aws.amazon.com/certification/",
    "topic": "AWS cost optimisation",
    "detail": null
  },
  {
    "subject": "Career",
    "source": "https://aws.amazon.com/certification/",
    "topic": "Terraform exam review",
    "detail": null
  },
  {
    "subject": "Career",
    "source": "https://aws.amazon.com/certification/",
    "topic": "GitHub Actions exam review",
    "detail": null
  },
  {
    "subject": "Career",
    "source": "https://aws.amazon.com/certification/",
    "topic": "Kubernetes exam review",
    "detail": null
  },
  {
    "subject": "Career",
    "source": "https://aws.amazon.com/certification/",
    "topic": "Linux interview",
    "detail": null
  },
  {
    "subject": "Career",
    "source": "https://aws.amazon.com/certification/",
    "topic": "Networking interview",
    "detail": null
  },
  {
    "subject": "Career",
    "source": "https://aws.amazon.com/certification/",
    "topic": "Cloud interview",
    "detail": null
  },
  {
    "subject": "Career",
    "source": "https://aws.amazon.com/certification/",
    "topic": "DevOps interview",
    "detail": null
  },
  {
    "subject": "Career",
    "source": "https://aws.amazon.com/certification/",
    "topic": "Portfolio README",
    "detail": null
  },
  {
    "subject": "Career",
    "source": "https://aws.amazon.com/certification/",
    "topic": "Technical presentation",
    "detail": null
  },
  {
    "subject": "Career",
    "source": "https://aws.amazon.com/certification/",
    "topic": "UK job and sponsorship checks",
    "detail": null
  },
  {
    "subject": "Career",
    "source": "https://aws.amazon.com/certification/",
    "topic": "Final capstone",
    "detail": [
      "Final capstone",
      "A production-style portfolio should show reproducible infrastructure, automated tests, deployment, observability, security and recovery. Use synthetic data and document limitations.",
      "Git → CI → image → deployment → monitoring → rollback",
      "Record a demo of your synthetic care application; include test output, architecture, failure recovery and cost controls.",
      "What proves recovery?",
      "Evidence of a tested rollback or restore"
    ]
  }
];
