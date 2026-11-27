const storageKey = 'devops120-v2';
const reviewIntervals = [1, 3, 7, 14, 30];
const $ = id => document.getElementById(id);
const escape = value => String(value ?? '').replace(/[&<>"']/g, char =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]
);
const comparable = value => value.trim().replace(/\r\n/g, '\n');
const reviewDate = (date, days) => {
  const due = new Date(date);
  due.setDate(due.getDate() + days);
  return due.toISOString();
};

function normalizeRecords(records, legacy = false) {
  if (!records || typeof records !== 'object' || Array.isArray(records)) {
    throw new Error('Invalid progress');
  }
  return Object.fromEntries(Object.entries(records).filter(([key, value]) =>
    /^(0|[1-9]\d*)$/.test(key) && Number(key) < curriculum.length &&
    value && typeof value === 'object' && !Array.isArray(value)
  ).map(([key, value]) => {
    const lesson = foundations[Number(key)];
    const evidence = typeof value.evidence === 'string' ? value.evidence : '';
    const output = typeof value.output === 'string' ? value.output : '';
    const answers = Array.isArray(value.answers) ? value.answers : [];
    const score = lesson ? scoreQuiz(lesson, answers) : 0;
    const pass = Boolean(!legacy && lesson && evidence.trim() &&
      comparable(output) === lesson.expected && score >= 85);
    const reviews = Number.isInteger(value.reviews) && value.reviews >= 0
      ? Math.min(value.reviews, reviewIntervals.length) : 0;
    const due = pass && reviews < reviewIntervals.length
      ? (typeof value.due === 'string' && Number.isFinite(Date.parse(value.due))
        ? value.due : reviewDate(new Date(), 1)) : null;
    return [key, { evidence, output, answers, score, pass, reviews, due }];
  }));
}

function showStatus(message) {
  $('status').hidden = false;
  $('status').textContent = message;
}

function loadProgress() {
  try {
    const current = localStorage.getItem(storageKey);
    return current ? normalizeRecords(JSON.parse(current))
      : normalizeRecords(JSON.parse(localStorage.getItem('devops120-v1') || '{}'), true);
  } catch {
    showStatus('Saved progress could not be read. You can restore a progress backup.');
    return {};
  }
}

let progress = loadProgress();
let index = firstUnpassed();

function saveProgress() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(progress));
  } catch {
    showStatus('This browser could not save progress. Export a backup before closing the page.');
  }
}

function firstUnpassed() {
  const next = foundations.findIndex((_, day) => !progress[day]?.pass);
  return next < 0 ? foundations.length : next;
}

function scoreQuiz(lesson, answers) {
  const correct = lesson.questions.filter((question, i) => answers[i] === question[1]).length;
  return Math.round(correct * 100 / lesson.questions.length);
}

function showProgress() {
  const completed = foundations.filter((_, day) => progress[day]?.pass).length;
  $('progress').innerHTML = '<progress aria-label="Academy progress" max="' + curriculum.length +
    '" value="' + completed + '"></progress>' + completed + ' / ' + curriculum.length +
    ' days passed · ' + foundations.length + ' expanded lessons';
}

function selectDay(day) {
  index = day;
  $('day').value = String(day);
  renderDay();
}

function renderDay() {
  const topic = curriculum[index];
  const lesson = foundations[index];
  const saved = progress[index] || {};
  const unlocked = index <= firstUnpassed();
  showProgress();
  $('main').innerHTML = '<section><h2>Day ' + (index + 1) + ' · ' + escape(topic.topic) +
    '</h2><p><a href="' + escape(topic.source) + '">Curriculum reference</a></p></section>';
  if (!lesson) {
    const starter = topic.detail;
    $('main').insertAdjacentHTML('beforeend', starter
      ? '<section><h3>Starter notes</h3><p>' + escape(starter[1]) +
        '</p><p>' + escape(starter[2]) + '</p><h3>Starter lab</h3><p>' + escape(starter[3]) +
        '</p><h3>Recall prompt</h3><p>' + escape(starter[4]) + '</p><details><summary>Model answer</summary><p>' +
        escape(starter[5]) + '</p></details><p>Expanded content and assessment are pending.</p></section>'
      : '<section><p>This topic is on the planner. Lesson content is pending.</p></section>');
    if (saved.evidence) {
      $('main').insertAdjacentHTML('beforeend', '<section><h3>Previously saved notes</h3><pre>' +
        escape(saved.evidence) + '</pre></section>');
    }
    return;
  }
  if (!unlocked) {
    $('main').insertAdjacentHTML('beforeend', '<section><p>Pass Day ' + (firstUnpassed() + 1) +
      ' to continue through the foundations sequence.</p></section>');
    return;
  }
  const notes = lesson.notes.map(note => '<p>' + escape(note) + '</p>').join('');
  const flow = lesson.flow.map(step => '<li>' + escape(step) + '</li>').join('');
  const questions = lesson.questions.map(([question, ...choices], i) => {
    const offset = (index + i + 1) % choices.length;
    const ordered = choices.slice(offset).concat(choices.slice(0, offset));
    return '<fieldset><legend>' + escape(question) + '</legend>' + ordered.map(choice =>
      '<label><input type="radio" required name="q' + i + '" value="' + escape(choice) + '"' +
      (saved.answers?.[i] === choice ? ' checked' : '') + '> ' + escape(choice) + '</label>'
    ).join('') + '</fieldset>';
  }).join('');
  $('main').insertAdjacentHTML('beforeend',
    '<section><h3>Learning objective</h3><p>' + escape(lesson.objective) +
    '</p><h3>Detailed notes</h3>' + notes +
    '<h3>How it works</h3><ol class="flow">' + flow +
    '</ol><h3>Teach it back</h3><p>' + escape(lesson.recall) +
    '</p><h3>Day summary</h3><p>' + escape(lesson.objective) +
    ' Revisit the process above from memory, then compare your explanation with the notes.</p></section>' +
    '<section><h3>Practical lab</h3><p>' + escape(lesson.lab) + '</p><pre><code>' +
    escape(lesson.commands) + '</code></pre><details><summary>Expected result and troubleshooting</summary><pre>' +
    escape(lesson.expected) + '</pre><p>' + escape(lesson.troubleshooting) + '</p></details>' +
    '<form id="assessment"><label>Paste the requested output<textarea name="output" rows="3" required>' +
    escape(saved.output) + '</textarea></label><label>Explain what you ran and what it demonstrated' +
    '<textarea name="evidence" rows="4" required>' + escape(saved.evidence) + '</textarea></label>' +
    '<h3>Knowledge check</h3><p>Pass at 85% and match the lab output. With three questions, all three must be correct. ' +
    'The lab checks the submitted result and saves your explanation for review.</p>' + questions +
    '<button type="submit">Check and save progress</button></form><div id="result" aria-live="polite"></div></section>'
  );
  $('assessment').onsubmit = event => {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const answers = lesson.questions.map((_, i) => fields.get('q' + i));
    const output = comparable(fields.get('output'));
    const evidence = fields.get('evidence').trim();
    const score = scoreQuiz(lesson, answers);
    const labPassed = output === lesson.expected && Boolean(evidence);
    const pass = score >= 85 && labPassed;
    const previous = progress[index];
    progress[index] = previous?.pass && !pass ? previous : {
      evidence, output, answers, score, pass,
      reviews: previous?.reviews || 0,
      due: previous?.pass ? previous.due : pass ? reviewDate(new Date(), 1) : null
    };
    saveProgress();
    showProgress();
    const mistakes = lesson.questions.filter((question, i) => answers[i] !== question[1]);
    $('result').innerHTML = '<p>' + score + '% · ' + (labPassed ? 'Lab output matched' : 'Lab evidence needs another attempt') +
      (pass ? ' · Passed' : ' · Review and retry') + '</p>' +
      mistakes.map(([question, answer]) => '<p>' + escape(question) + ' <strong>' +
        escape(answer) + '</strong></p>').join('');
    if (pass) {
      const next = document.createElement('button');
      next.textContent = 'Open next day';
      next.onclick = () => selectDay(index + 1);
      $('result').append(next);
    }
  };
}

curriculum.forEach((day, position) => $('day').add(new Option('Day ' + (position + 1) + ' · ' + day.topic, position)));
$('day').onchange = event => selectDay(Number(event.target.value));
$('resume').onclick = () => selectDay(firstUnpassed());

function showRevisions() {
  $('main').innerHTML = '<section><h2>Revision queue</h2><p>Recall the answer before opening the lesson. ' +
    'A review is scheduled after 1, then 3, 7, 14 and 30 days from the previous completion.</p><div id="queue"></div></section>';
  const due = foundations.map((lesson, day) => ({ lesson, day, record: progress[day] }))
    .filter(({ record }) => record?.due && Date.parse(record.due) <= Date.now());
  if (!due.length) $('queue').textContent = 'No reviews are due today.';
  for (const { lesson, day, record } of due) {
    const card = document.createElement('section');
    card.innerHTML = '<h3>Day ' + (day + 1) + ' · ' + escape(curriculum[day].topic) +
      '</h3><p>' + escape(lesson.recall) + '</p>';
    const open = document.createElement('button');
    open.textContent = 'Check lesson notes';
    open.onclick = () => selectDay(day);
    const complete = document.createElement('button');
    complete.textContent = 'Mark reviewed';
    complete.onclick = () => {
      record.reviews += 1;
      record.due = record.reviews < reviewIntervals.length
        ? reviewDate(new Date(), reviewIntervals[record.reviews]) : null;
      saveProgress();
      showRevisions();
    };
    card.append(open, ' ', complete);
    $('queue').append(card);
  }
}
$('revisions').onclick = showRevisions;

$('audit').onclick = () => {
  const prompts = foundations.flatMap(lesson => lesson.questions.map(([question]) => question.trim().toLowerCase()));
  const duplicates = prompts.length - new Set(prompts).size;
  $('main').innerHTML = '<section><h2>Coverage checker</h2><ul><li>' + curriculum.length +
    ' planner entries</li><li>' + foundations.length + ' expanded lessons with commands and an output check</li><li>' +
    prompts.length + ' scored questions · ' + duplicates +
    ' exact duplicate prompts</li></ul><p>Pending verification includes curriculum completeness, curated videos, ' +
    'official certification mapping, full examinations, project evidence, independent lab grading, device and offline testing.</p>' +
    '<details><summary>Days awaiting expanded lessons</summary><ol start="' + (foundations.length + 1) + '">' +
    curriculum.slice(foundations.length).map(day => '<li>' + escape(day.topic) + '</li>').join('') +
    '</ol></details></section>';
};
$('backup').onclick = () => {
  const link = document.createElement('a');
  const url = URL.createObjectURL(new Blob([JSON.stringify({ version: 2, progress })], { type: 'application/json' }));
  link.href = url;
  link.download = 'devops-progress.json';
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};
$('restore').onchange = async event => {
  const [file] = event.target.files;
  event.target.value = '';
  if (!file) return;
  try {
    const backup = JSON.parse(await file.text());
    if (!backup || typeof backup !== 'object' || Array.isArray(backup) ||
      (Object.hasOwn(backup, 'version') && backup.version !== 2)) throw new Error('Unsupported backup');
    if (!confirm('Replace current Academy progress with this backup?')) return;
    progress = normalizeRecords(backup.version === 2 ? backup.progress : backup, backup.version !== 2);
    saveProgress();
    selectDay(firstUnpassed());
  } catch {
    showStatus('This backup could not be restored. Current progress was kept.');
  }
};
selectDay(index);
