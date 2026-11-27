const examPaths = [
  ['AWS Solutions Architect Associate · SAA-C03',
    'https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03.html',
    'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
    [['Secure architectures', 32, 35, 37, 106], ['Resilient architectures', 31, 39, 40, 107],
      ['High-performing architectures', 41, 43, 108], ['Cost-optimised architectures', 44, 109]]],
  ['Terraform Associate · 004',
    'https://docs.hashicorp.com/terraform/tutorials/certification-004/associate-review-004',
    'https://developer.hashicorp.com/certifications/terraform-associate',
    [['IaC, providers and core workflow', 53, 57], ['Variables, state and modules', 54, 55, 56, 110]]],
  ['GitHub Actions · GH-200',
    'https://learn.microsoft.com/credentials/certifications/resources/study-guides/gh-200',
    'https://learn.microsoft.com/credentials/certifications/github-actions/',
    [['Workflows and runners', 62, 63, 64], ['Artifact and release security', 65, 66, 67, 68, 111]]],
  ['Certified Kubernetes Administrator',
    'https://github.com/cncf/curriculum',
    'https://www.cncf.io/training/certification/cka/',
    [['Cluster architecture and administration', 71, 76], ['Workloads and scheduling', 72, 73, 75, 77, 78],
      ['Services and networking', 74, 80], ['Storage', 79], ['Troubleshooting', 112]]],
  ['Microsoft Azure Fundamentals · AZ-900',
    'https://learn.microsoft.com/credentials/certifications/resources/study-guides/az-900',
    'https://learn.microsoft.com/credentials/certifications/azure-fundamentals/',
    [['Cloud concepts and Azure architecture', 31, 45, 70], ['Management and governance', 44, 70]]],
  ['Microsoft Azure Administrator · AZ-104',
    'https://learn.microsoft.com/credentials/certifications/resources/study-guides/az-104',
    'https://learn.microsoft.com/credentials/certifications/azure-administrator/',
    [['Transferable networking, storage and monitoring concepts', 33, 34, 37, 43],
      ['Azure deployment context', 70]]],
  ['Microsoft DevOps Solutions · AZ-400',
    'https://learn.microsoft.com/credentials/certifications/resources/study-guides/az-400',
    'https://learn.microsoft.com/credentials/certifications/devops-engineer/',
    [['Source control and automation', 16, 19, 61, 62, 70], ['Security and instrumentation', 66, 68, 86, 88]],
    'Microsoft lists retirement for 1 February 2027. Check the latest official pathway before you plan or pay.']
];

const projects = [
  ['Cloud-hosted status website', [3, 13, 30, 36, 45],
    'Build a static fictional care rota status page. Serve it locally first, then document how HTTPS, access and rollback would work in AWS.',
    ['Create a Git repository with an HTML status page and a reproducible local web-server command.',
      'Draw the request path and record a health check plus one failure and recovery.',
      'Document the optional AWS deployment, estimated billable resources and teardown.']],
  ['Automated healthcare application', [22, 26, 27, 47, 62],
    'Package and test a small Python service serving fictional rota entries.',
    ['Create a health route and a route returning fictional rota data.',
      'Add boundary tests and a Dockerfile. Bind the demo to a local address.',
      'Create a minimal-permission Actions workflow that runs tests and stores test evidence.']],
  ['Infrastructure automation', [53, 54, 57, 59, 60],
    'Implement a reproducible environment with Terraform and Ansible.',
    ['Start with a local Terraform resource and review plan output. Keep state out of version control.',
      'Use Ansible to render configuration on a disposable target and verify idempotency.',
      'Diagram the cloud equivalent and record how to inspect, provision, verify and destroy it.']],
  ['Production-style deployment platform', [71, 73, 81, 82, 84, 90],
    'Deploy the fictional service to a disposable Kubernetes cluster with a release and monitoring procedure.',
    ['Add probes, resource requests and a Helm chart. Render and inspect it before deployment.',
      'Reconcile it with Argo CD and monitor a request counter plus a health signal.',
      'Run a rollback drill and record the trigger, elapsed time and post-rollback measurements.']],
  ['AI incident assistant', [94, 96, 97, 98, 103, 105],
    'Use fictional runbooks for retrieval and expose a read-only lookup through a scoped tool.',
    ['Write three runbooks, build retrieval and record expected passages for sample incidents.',
      'Return citations or abstain. Evaluate retrieval and grounding separately.',
      'Verify denied actions, data redaction and the audit record for a fictional human approval.']],
  ['Integrated care technology capstone', [88, 89, 105, 117, 118, 120],
    'Combine the application, automated release, recovery runbook and incident assistant using fictional data.',
    ['Link the release commit, deployment configuration and evidence in the README.',
      'Record an end-to-end demo and a separate incident recovery exercise.',
      'Explain design trade-offs, evidence, limitations, privacy controls and response procedure.']]
];

function getExtras() {
  try {
    const value = JSON.parse(localStorage.getItem('devops120-extras') || '{}');
    return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
  } catch {
    return {};
  }
}

function saveExtras(key, value) {
  try {
    localStorage.setItem('devops120-extras', JSON.stringify({ ...getExtras(), [key]: value }));
  } catch {
    showStatus('This browser could not save module progress.');
  }
}

function modulePanel(title, body) {
  $('main').innerHTML = '<section><h2>' + escape(title) + '</h2>' + body + '</section>';
}

function dayLinks(days) {
  return days.map(day => '<button type="button" data-day="' + day + '">Day ' + day + '</button>').join(' ');
}

function bindDayLinks() {
  $('main').querySelectorAll('[data-day]').forEach(button => {
    button.onclick = () => selectDay(Number(button.dataset.day) - 1);
  });
}

$('certification').onclick = () => {
  modulePanel('Certification pathways',
    '<p>These mappings show related academy lessons. Check the complete official objectives, exam version, fees, prerequisites and booking details with each provider.</p>' +
    examPaths.map(([name, guide, booking, domains, notice], i) => '<details><summary>' +
      escape(name) + '</summary>' + (notice ? '<p>' + escape(notice) + '</p>' : '') +
      '<p><a href="' + guide + '">Official objectives</a> · <a href="' + booking + '">Official booking and exam details</a></p>' +
      '<ul>' + domains.map(([domain, ...days]) => '<li>' + escape(domain) + ' ' + dayLinks(days) + '</li>').join('') +
      '</ul><button type="button" data-prep="' + i + '">Start timed academy practice</button></details>'
    ).join(''));
  bindDayLinks();
  $('main').querySelectorAll('[data-prep]').forEach(button => {
    button.onclick = () => {
      const [name, , , domains] = examPaths[Number(button.dataset.prep)];
      startExam(name + ' practice', [...new Set(domains.flatMap(domain => domain.slice(1)))], 15);
    };
  });
};

function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

const assessments = [
  ...Array.from({ length: 17 }, (_, i) => ['Week ' + (i + 1), range(i * 7 + 1, i === 16 ? 120 : i * 7 + 7), 15]),
  ...Array.from({ length: 4 }, (_, i) => ['Month ' + (i + 1), range(i * 30 + 1, (i + 1) * 30), 40]),
  ['Final comprehensive review', range(1, 120), 120]
];

let timer;
function stopTimer() {
  clearInterval(timer);
  timer = undefined;
}

$('exam-centre').onclick = () => {
  stopTimer();
  const results = getExtras().exams || {};
  modulePanel('Examination centre',
    '<p>Timed academy reviews reuse the daily question bank. The internal passing score is 85%.</p>' +
    assessments.map(([name, days, minutes], i) =>
      '<p><button type="button" data-exam="' + i + '">' + escape(name) + '</button> ' + minutes +
      ' min · Days ' + days[0] + '–' + days.at(-1) +
      (Number.isFinite(results[name]) ? ' · Latest score ' + results[name] + '%' : '') + '</p>'
    ).join(''));
  $('main').querySelectorAll('[data-exam]').forEach(button => {
    button.onclick = () => startExam(...assessments[Number(button.dataset.exam)]);
  });
};

function startExam(name, days, minutes) {
  stopTimer();
  const items = days.flatMap(day => lessons[day - 1].questions.map(question => ({ day, question })));
  modulePanel(name, '<p id="time-left"></p><form id="exam-form">' + items.map(({ question }, i) => {
    const [prompt, ...choices] = question;
    const shift = (i + 1) % choices.length;
    const ordered = choices.slice(shift).concat(choices.slice(0, shift));
    return '<fieldset><legend>' + (i + 1) + '. ' + escape(prompt) + '</legend>' + ordered.map(choice =>
      '<label><input type="radio" name="exam-' + i + '" value="' + escape(choice) + '"> ' +
      escape(choice) + '</label>').join('') + '</fieldset>';
  }).join('') + '<button type="submit">Submit assessment</button></form>');
  const form = $('exam-form');
  const deadline = Date.now() + minutes * 60000;
  function finish() {
    stopTimer();
    const answers = new FormData(form);
    const missed = items.filter(({ question }, i) => answers.get('exam-' + i) !== question[1]);
    const score = Math.round((items.length - missed.length) / items.length * 100);
    saveExtras('exams', { ...getExtras().exams, [name]: score });
    modulePanel(name, '<p><strong>' + score + '% · ' + (score >= 85 ? 'Passed' : 'Review and retry') +
      '</strong></p>' + missed.map(({ day, question }) =>
      '<details><summary>' + escape(question[0]) + '</summary><p>Model answer: ' + escape(question[1]) +
      '</p><p>' + escape(lessons[day - 1].notes[0]) + '</p>' + dayLinks([day]) + '</details>').join(''));
    bindDayLinks();
  }
  function tick() {
    if (!form.isConnected) return stopTimer();
    const remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    if (remaining === 0) return finish();
    $('time-left').textContent = Math.floor(remaining / 60) + ':' + String(remaining % 60).padStart(2, '0') + ' remaining';
  }
  form.onsubmit = event => {
    event.preventDefault();
    finish();
  };
  timer = setInterval(tick, 1000);
  tick();
}

$('portfolio').onclick = () => {
  const records = getExtras().portfolio || {};
  modulePanel('Portfolio builder', '<p>Use fictional data and link evidence you created. Each project has a brief, milestones and a handover checklist.</p>' +
    projects.map(([name, days, brief, tasks], i) => {
      const saved = records[i] || {};
      return '<details><summary>' + escape(name) + '</summary><p>' + escape(brief) + '</p><ol>' +
        tasks.map(task => '<li>' + escape(task) + '</li>').join('') + '</ol>' + dayLinks(days) +
        '<form data-project="' + i + '"><label>Repository URL<input type="url" name="repo" value="' +
        escape(saved.repo) + '"></label><label>Evidence and presentation notes<textarea name="notes" rows="5">' +
        escape(saved.notes) + '</textarea></label><p>Include code, diagram, setup, test outputs, troubleshooting, security checks, README and a short presentation.</p>' +
        '<button type="submit">Save portfolio evidence</button><p role="status"></p></form></details>';
    }).join(''));
  bindDayLinks();
  $('main').querySelectorAll('[data-project]').forEach(form => {
    form.onsubmit = event => {
      event.preventDefault();
      saveExtras('portfolio', { ...getExtras().portfolio,
        [form.dataset.project]: Object.fromEntries(new FormData(form)) });
      form.querySelector('[role=status]').textContent = 'Evidence recorded for this project.';
    };
  });
};

const roleSkills = {
  'IT Support Engineer': ['Linux', 'Networking', 'Troubleshooting', 'Logging'],
  'Cloud Support Engineer': ['Linux', 'Networking', 'AWS', 'Monitoring', 'IAM'],
  'Junior DevOps Engineer': ['Linux', 'Git', 'Docker', 'Terraform', 'CI/CD', 'Kubernetes'],
  'Cloud Engineer': ['AWS', 'Terraform', 'Networking', 'IAM', 'Disaster recovery'],
  'DevOps Engineer': ['Git', 'Docker', 'Terraform', 'Kubernetes', 'CI/CD', 'Monitoring'],
  'DevSecOps Engineer': ['CI/CD', 'Git', 'IAM', 'Supply chain security', 'Kubernetes'],
  'AIOps Engineer': ['Python', 'Monitoring', 'Incident response', 'RAG', 'MCP']
};

$('career').onclick = () => {
  const saved = getExtras().career || {};
  modulePanel('Career preparation',
    '<form id="career-form"><label>Target role<select name="role">' + Object.keys(roleSkills).map(role =>
      '<option' + (saved.role === role ? ' selected' : '') + '>' + escape(role) + '</option>').join('') +
    '</select></label><label>Job description<textarea name="listing" rows="6">' + escape(saved.listing) +
    '</textarea></label><label>Your qualifications and demonstrated skills<textarea name="evidence" rows="6" required>' +
    escape(saved.evidence) + '</textarea></label><button type="submit">Analyse and draft CV profile</button></form>' +
    '<pre id="career-draft" hidden></pre><h3>Sponsorship research</h3><p>Check the employer’s listing, confirm sponsorship for this vacancy with the recruiter, then confirm the role code and pay requirements.</p>' +
    '<p><a href="https://www.gov.uk/government/publications/register-of-licensed-sponsors-workers">Worker sponsor register</a> · ' +
    '<a href="https://www.gov.uk/skilled-worker-visa/your-job">Skilled Worker job rules</a></p>' +
    '<h3>Interview and presentation practice</h3><p>Use Situation, Task, Action and Result. Finish each answer with the evidence you can show.</p>' +
    dayLinks([113, 114, 115, 116, 117, 118, 119]) +
    '<details><summary>Technical interview prompt bank</summary><ol>' +
    lessons.slice(10).map(lesson => '<li><details><summary>' + escape(lesson.recall) +
      '</summary><p>' + escape(lesson.expected) + '</p></details></li>').join('') + '</ol></details>');
  bindDayLinks();
  $('career-form').onsubmit = event => {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.currentTarget));
    if (!fields.evidence.trim()) return;
    saveExtras('career', fields);
    const skills = roleSkills[fields.role];
    const inText = (text, skill) => text.toLowerCase().includes(skill.toLowerCase());
    const mentioned = skills.filter(skill => inText(fields.listing, skill));
    const gaps = (mentioned.length ? mentioned : skills).filter(skill => !inText(fields.evidence, skill));
    const draft = $('career-draft');
    draft.hidden = false;
    draft.textContent = 'Target role\n' + fields.role + '\n\nCV evidence supplied by you\n' +
      fields.evidence.trim() + '\n\nRole keywords found in the vacancy\n' +
      (mentioned.join(', ') || 'No role keywords matched. Review the posting manually.') +
      '\n\nSkills to review against your evidence\n' +
      (gaps.join(', ') || 'All compared keywords appeared in your evidence.');
  };
};

const schedules = {
  'Night-shift day': [10, 20, 10, 25, 10],
  'Normal day': [10, 30, 20, 45, 15],
  'Day off': [15, 40, 20, 55, 20]
};

$('schedule').onclick = () => {
  const selected = getExtras().schedule || 'Normal day';
  modulePanel('Study schedule',
    '<label for="shift-mode">Day type</label><select id="shift-mode">' + Object.keys(schedules)
      .map(key => '<option' + (key === selected ? ' selected' : '') + '>' + escape(key) + '</option>').join('') +
    '</select><div id="schedule-plan"></div><button type="button" id="schedule-resume">Resume the earliest unfinished day</button>');
  const update = () => {
    const mode = $('shift-mode').value;
    const blocks = schedules[mode] || schedules['Normal day'];
    saveExtras('schedule', mode);
    $('schedule-plan').innerHTML = '<p>' + blocks.reduce((sum, time) => sum + time, 0) +
      ' minutes total. If you run out of time, the earliest unfinished lesson stays at the front of your queue.</p><ul>' +
      ['Revision', 'Detailed learning', 'Visual or reference study', 'Practice', 'Quiz and summary']
        .map((activity, i) => '<li>' + activity + ' · ' + blocks[i] + ' min</li>').join('') + '</ul>';
  };
  $('shift-mode').onchange = update;
  $('schedule-resume').onclick = () => selectDay(firstUnpassed());
  update();
};

if ('serviceWorker' in navigator && ['https:', 'http:'].includes(location.protocol)) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}

const mediaGroups = [
  ['Linux and Bash', 'rrB13utjYV4', 'ZtqBQ68cfJc', [3, 4, 5, 6, 9, 10], 'Watch setup and basic commands first. Stop and repeat pwd, ls, cd and redirection in the lab.'],
  ['Docker', 'Gjnup-PuquQ', 'rjjES5IsPdg', [46, 47, 48, 49, 50, 51], 'Start with the image and container explanation. For a free-first practice environment, follow the local setup chapters.'],
  ['Kubernetes', 'PziYflu8cB8', '_4uQI4ihGVU', [71, 72, 73, 74, 76, 79], 'Choose the chapter matching today’s topic. Recreate the architecture and name the responsibility of each component.']
];

const diagrams = [
  ['Docker image and containers',
    '<div class="flow"><span>Source + Dockerfile</span><span>→ Build →</span><span>Versioned image</span></div>' +
    '<ul><li>Container A runs from the image with its own writable layer.</li><li>Container B uses the same image with a separate writable layer.</li></ul>' +
    '<p>Capture the image digest to identify the exact same image used by both containers.</p>'],
  ['AWS web application across two Availability Zones',
    '<div class="flow"><span>User request</span><span>→ HTTPS →</span><span>Load balancer</span></div>' +
    '<ul><li>AZ A → App target A → Database endpoint</li><li>AZ B → App target B → Database endpoint</li></ul>' +
    '<p>The balancer sends requests to eligible targets. The database requires its own availability and recovery design.</p>'],
  ['Kubernetes deployment and request paths',
    '<ul><li>Deployment → ReplicaSet → Pods. Controllers maintain the desired copy count.</li>' +
    '<li>Client → Service → Ready Pods. Service selectors connect the stable endpoint to the matching backends.</li></ul>'],
  ['Grounded incident assistant',
    '<div class="flow"><span>Fictional incident question</span><span>→ Scoped retrieval →</span><span>Relevant runbook excerpts</span></div>' +
    '<p>The model uses the excerpts to produce a cited draft or reports insufficient evidence. A separate permission check protects each tool, and a human reviews operational decisions.</p>']
];

$('media').onclick = () => {
  modulePanel('Video classroom and working diagrams',
    '<p>Selected videos require an internet connection. The diagrams and lesson text are available in the app.</p>' +
    mediaGroups.map(([name, short, long, days, plan]) => '<h3>' + escape(name) + '</h3><p>' +
      '<a href="https://www.youtube.com/watch?v=' + short + '">Short overview</a> · ' +
      '<a href="https://www.youtube.com/watch?v=' + long + '">Full course</a></p><p>' + escape(plan) +
      '</p>' + dayLinks(days)).join('') + diagrams.map(([title, markup]) =>
      '<details><summary>' + escape(title) + '</summary>' + markup + '</details>').join(''));
  bindDayLinks();
};

$('tutor').onclick = () => {
  const lesson = lessons[index];
  const saved = progress[index];
  const missed = lesson.questions.filter((question, i) => saved?.answers?.[i] !== question[1]);
  const prompt = missed[0] || lesson.questions[0];
  modulePanel('Study tutor · Day ' + (index + 1),
    '<p>' + escape(lesson.objective) + '</p><ol>' +
    '<li>Recall the answer without opening notes. Write one sentence explaining your reasoning.</li>' +
    '<li>Check the hint and model answer. Name one condition where your original reasoning would fail.</li>' +
    '<li>Use the practical exercise to test the idea. Record what you observed and how you verified it.</li></ol>' +
    '<p><strong>' + escape(prompt[0]) + '</strong></p>' +
    '<details><summary>Hint</summary><p>' + escape(lesson.notes[0]) + '</p></details>' +
    '<details><summary>Model answer</summary><p>' + escape(prompt[1]) + '</p></details>' +
    '<p>' + dayLinks([index + 1]) + '</p>');
  bindDayLinks();
};
