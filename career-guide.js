(function () {
  'use strict';
  const page = 'career-guide';
  const previous = render;
  const routes = D.careerGuide;
  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  const ratings = ['Unassessed', 'Learning', 'Can do with help', 'Can do independently'];
  const projectFields = [
    ['artifact', 'Artefact location', 'Repository URL, file path or document title'],
    ['contribution', 'Your contribution', 'What you built or decided and how'],
    ['validation', 'Checks and outcome', 'What you tested, observed and can reproduce'],
    ['limitations', 'Limitations', 'One specific constraint or next improvement']
  ];
  const score = r => 9 * r.fit[0] + 6 * r.fit[1] + 5 * r.fit[2];
  const byId = id => document.getElementById(id);
  const routeButton = (id, label) => `<button type="button" data-guide-open="${id}">${esc(label)}</button>`;
  const out = (url, label) => link({ url, label });
  const model = () => state.careerGuide || {};
  const meaningful = (value, min) => {
    const content = String(value ?? '').trim();
    return content.length >= min && !/^(gap|todo|tbd|n\/a|none|pending|test)\b/i.test(content);
  };

  function commit(change) {
    const next = { ...state, ...change };
    localStorage.setItem(KEY, JSON.stringify(next));
    state = next;
  }

  function open(target) {
    view = target;
    render();
    document.body.classList.remove('academy-menu-open');
    document.querySelector('.academy-menu')?.setAttribute('aria-expanded', 'false');
    app.focus();
    window.scrollTo(0, 0);
  }

  function video(key, topic) {
    const full = D.learningResourcesV511.sets[key];
    return D.shortPanelV53(key, topic) + '<p>' +
      out(full.watchUrl || full.video, 'Full video · ' + full.title) + ' · ' +
      out(full.source, 'Written source') + '</p>';
  }

  function launchEvidence(role) {
    const saved = state.launchV53?.roles?.[role] || {};
    const criteria = String(saved.criteria || '').split('\n').map(x => x.trim()).filter(Boolean);
    const evidence = String(saved.evidence || '').split('\n');
    return {
      gaps: criteria.length ? criteria.flatMap((c, i) => meaningful(evidence[i], 30) ? [] : [c]) : ['Add vacancy criteria in the launchpad CV workshop'],
      answers: Array.isArray(saved.answers) ? saved.answers.filter(a => meaningful(a, 40)).length : 0
    };
  }

  function comparison(entry, route) {
    const adverts = entry.adverts || [];
    const rows = new Map();
    for (const advert of adverts.filter(Boolean)) {
      for (const skill of new Set(advert.skills.split('\n').map(s => s.trim().replace(/\s+/g, ' ').toLowerCase()).filter(Boolean))) {
        rows.set(skill, (rows.get(skill) || 0) + 1);
      }
    }
    const skills = [...rows].sort(([a, n], [b, m]) => m - n || a.localeCompare(b));
    const evidence = new Map(entry.skillEvidence || []);
    const nextGap = skills.find(([skill]) => !meaningful(evidence.get(skill), 20))?.[0];
    return { skills, evidence, nextGap, html: `
      <h4>Compare vacancy skills</h4>
      <p>Save any route edits before switching routes. Use up to three different employer adverts for ${esc(route.title)}. Copy up to 25 essential skills per advert, one per line. Use the same wording for equivalent requirements (for example, “user acceptance testing” for UAT). The counts use your labels.</p>
      ${Array.from({ length: 3 }, (_, i) => `
        <details ${i === 0 ? 'open' : ''}><summary>Advert ${i + 1}${adverts[i]?.title ? ' · ' + esc(adverts[i].title) : ''}</summary>
        <p><label for="guide-ad-title-${i}">Job title and employer</label>
        <input id="guide-ad-title-${i}" maxlength="150" value="${esc(adverts[i]?.title)}"></p>
        <p><label for="guide-ad-url-${i}">Employer advert link</label>
        <input id="guide-ad-url-${i}" type="text" inputmode="url" maxlength="1000" value="${esc(adverts[i]?.url)}"></p>
        ${adverts[i]?.url ? '<p>' + out(adverts[i].url, 'Open saved advert') + '</p>' : ''}
        <p><label for="guide-ad-skills-${i}">Essential skills, one per line</label>
        <textarea id="guide-ad-skills-${i}" rows="4" maxlength="2000">${esc(adverts[i]?.skills)}</textarea></p></details>`).join('')}
      <button type="submit">Save and compare adverts</button>
      <p>${adverts.filter(Boolean).length} / 3 adverts saved. Check closing dates in the original listings.</p>
      ${skills.length ? `<h5>Skills ranked by frequency</h5>
        <p>${nextGap ? 'Start with ' + esc(nextGap) + '. ' : ''}Add a specific example with your action and result or leave the field blank for skills you need to practise.</p>
        ${skills.map(([skill, count], i) => `<p><label for="guide-ad-evidence-${i}">${esc(skill)} · ${count} advert${count === 1 ? '' : 's'} · ${meaningful(evidence.get(skill), 20) ? 'Evidence recorded' : 'Gap or weak evidence'}</label>
        <textarea id="guide-ad-evidence-${i}" rows="2" maxlength="1000">${esc(evidence.get(skill))}</textarea></p>`).join('')}
        <button type="submit">Save skills evidence</button>` : ''}
      ` };
  }

  function readAdverts() {
    const seen = new Set();
    return Array.from({ length: 3 }, (_, i) => {
      const title = byId('guide-ad-title-' + i).value.trim();
      const url = byId('guide-ad-url-' + i).value.trim();
      const skills = byId('guide-ad-skills-' + i).value.trim();
      if (!title && !url && !skills) return null;
      if (!title || !skills || !/^https:\/\//i.test(url)) {
        throw Error('Advert ' + (i + 1) + ' needs a title, an HTTPS link and at least one skill.');
      }
      if (skills.split('\n').filter(line => line.trim()).length > 25) {
        throw Error('Use up to 25 skill lines for advert ' + (i + 1) + '.');
      }
      const address = new URL(url);
      address.hash = '';
      if (seen.has(address.href)) throw Error('Use a different listing for each advert.');
      seen.add(address.href);
      return { title, url, skills };
    });
  }

  function draw() {
    const current = model();
    const route = routes.find(r => r.role === current.role) || routes[0];
    const entry = current.records?.[route.role] || {};
    const existing = D.careerLaunchV53.roles.find(r => r.slug === route.role);
    const launch = launchEvidence(route.role);
    const compared = comparison(entry, route);
    const assessed = route.skills.filter((_, i) => Number(entry.ratings?.[i]) > 0).length;
    const stages = route.stages.map((_, i) => {
      const record = entry.stages?.[i] || {};
      const weak = projectFields.filter(([key]) => !meaningful(record[key], key === 'artifact' ? 5 : 20));
      return { record, weak, ready: weak.length === 0 && record.reviewed === true };
    });
    const firstOpen = stages.findIndex(s => !s.ready);
    const passed = firstOpen === -1 ? stages.length : firstOpen;
    const gates = [
      ['Assess skills', assessed === route.skills.length],
      ...levels.map((level, i) => [level + ' portfolio', passed > i]),
      ['Prepare application', passed === 3 && assessed === 3 && !launch.gaps.length && launch.answers >= 3 && entry.vacancyChecked === true]
    ];
    const next = assessed < route.skills.length ? 'Rate your three skill areas below.' :
      firstOpen >= 0 ? 'Build the ' + levels[firstOpen].toLowerCase() + ' project evidence.' :
      launch.gaps.length || launch.answers < 3 ? 'Open the launchpad to cover vacancy criteria and save three practice answers.' :
      compared.nextGap ? 'Build evidence for the most frequent gap in your saved adverts: ' + compared.nextGap + '.' :
      !entry.vacancyChecked ? 'Check the actual vacancy and save your review.' : 'Use your tailored evidence to prepare an application.';
    document.querySelectorAll('nav button[data-view]').forEach(b => {
      b.classList.toggle('academy-current', b.dataset.view === page);
      if (b.dataset.view === page) b.setAttribute('aria-current', 'page');
      else b.removeAttribute('aria-current');
    });

    app.innerHTML = `
      <div class="academy-welcome"><div><span class="academy-eyebrow">CAREER LEARNING OS</span>
      <h2>Guided career dashboard</h2><p>Turn your MTech in Computer Science, BTech in Information Technology, UK care experience and Level 2/3 Adult Care qualifications into evidence you can explain in an interview.</p>
      <p><strong>Next for ${esc(route.title)}:</strong> ${esc(next)}</p>
      ${routeButton('career-launch-v53', 'Open CV & interview workshop')}
      ${routeButton('applications-v53', 'Open application tracker')}</div></div>
      <section class="card"><h3>Ranked route comparison</h3>
      <p>Planning scores out of 100. Each factor is rated 1–5 for transfer from care (45%), computing background (30%) and how directly you can build entry-level evidence (25%). This ranking is a personal fit estimate. Search local adverts to judge demand.</p>
      <ol>${[...routes].sort((a, b) => score(b) - score(a)).map(r => `<li>
        <button type="button" data-guide-role="${r.role}" aria-pressed="${r === route}">${esc(r.title)} · ${score(r)}/100</button>
        <p><strong>${esc(r.targets)}</strong> · Care ${r.fit[0]}/5, computing ${r.fit[1]}/5, entry evidence ${r.fit[2]}/5. ${esc(r.reason)}</p></li>`).join('')}</ol></section>
      <form id="guide-record">
      <section class="card"><h3>${esc(route.title)} · progress and pass gates</h3>
      <p>${gates.filter(g => g[1]).length} / ${gates.length} gates passed. Results reflect saved evidence and self-review.</p>
      <ul>${gates.map(([label, ok]) => `<li>${esc(label)} · <strong>${ok ? 'Pass' : 'Open'}</strong></li>`).join('')}</ul>
      <h4>Skill-gap assessment</h4>
      ${route.skills.map((skill, i) => `<p><label for="guide-rating-${i}">${esc(skill)}</label>
      <select id="guide-rating-${i}">${ratings.map((label, n) => `<option value="${n}" ${n === Number(entry.ratings?.[i] || 0) ? 'selected' : ''}>${label}</option>`).join('')}</select></p>`).join('')}
      <p>Start with any skill rated Unassessed or Learning. Use the project tasks to test what you can do independently.</p>
      <button type="submit">Save route progress</button></section>
      <section class="card"><h3>Learning plan and project records</h3>
      <p>Allow roughly two weeks per stage as a starting estimate. Short videos and full lessons open external players. Use synthetic data in every portfolio example.</p>
      ${route.role === 'c8' ? routeButton('aws-course-v54', 'Continue the AWS Cloud course') : ''}
      ${route.stages.map(([key, task], i) => `<details ${i === firstOpen ? 'open' : ''}><summary>${levels[i]} · ${stages[i].ready ? 'Evidence recorded' : 'Evidence needed'}</summary>
        <p><strong>Build:</strong> ${esc(task)}</p>${video(key, route.skills[i])}
        ${projectFields.map(([field, label, hint]) => `<p><label for="guide-${i}-${field}">${label}</label>
        <textarea id="guide-${i}-${field}" rows="2" maxlength="2000" placeholder="${hint}">${esc(stages[i].record[field])}</textarea></p>`).join('')}
        <label class="choice"><input id="guide-${i}-reviewed" type="checkbox" ${stages[i].record.reviewed === true ? 'checked' : ''}> I reproduced the checks and can explain the outcome and one limitation.</label>
        <p>${stages[i].weak.length ? 'Missing or too brief: ' + esc(stages[i].weak.map(f => f[1]).join(', ')) : 'All evidence fields have enough detail for review.'}
        ${stages[i].record.reviewed ? '' : ' Self-review is still open.'}</p>
        <button type="submit">Save project evidence</button></details>`).join('')}
      </section>
      <section class="card"><h3>Certificate course and record</h3>
      <p>${out(route.certificate[1], route.certificate[0])}</p><p>${esc(route.certificate[2])} Check provider fees and requirements before booking.</p>
      <label for="guide-cert-status">Status</label>
      <select id="guide-cert-status">${['Planned', 'Studying', 'Course completed', 'Certification earned'].map(s => `<option ${entry.certStatus === s ? 'selected' : ''}>${s}</option>`).join('')}</select>
      <p><label for="guide-cert-proof">Provider, completion date and credential reference or learning notes</label>
      <textarea id="guide-cert-proof" rows="2" maxlength="2000">${esc(entry.certProof)}</textarea></p>
      ${['Course completed', 'Certification earned'].includes(entry.certStatus) && !meaningful(entry.certProof, 20) ? '<p>Missing or weak credential record. Add provider, date and reference.</p>' : ''}
      <button type="submit">Save certificate record</button></section>
      <section class="card"><h3>CV evidence and interviews</h3><p>${esc(route.cv)}</p>
      ${existing.interview.map(({ q, a }) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}
      <h4>Application evidence checker</h4>
      <p>${launch.answers} interview answers with enough text to review. Aim for three answers with a clear action and result.</p>
      ${launch.gaps.length ? '<ul>' + launch.gaps.map(g => '<li>' + esc(g) + '</li>').join('') + '</ul>' : '<p>All saved vacancy criteria have an evidence line of at least 30 characters. Check relevance and accuracy yourself.</p>'}
      ${routeButton('career-launch-v53', 'Edit CV evidence and practise answers')}
      <h4>Find vacancies and apply</h4><p>
      ${out('https://www.jobs.nhs.uk/candidate/search/results?keyword=' + encodeURIComponent(route.search) + '&location=Bournemouth', 'NHS Jobs · Bournemouth')} ·
      ${out('https://www.uhd.nhs.uk/careers/vacancies', 'University Hospitals Dorset')} ·
      ${out('https://findajob.dwp.gov.uk/search?q=' + encodeURIComponent(route.search), 'Find a job · UK')}</p>
      <p>Search results change. Open the employer advert to check the deadline, location, essential criteria and any sponsorship details.</p>
      ${compared.html}
      <label class="choice"><input type="checkbox" id="guide-vacancy" ${entry.vacancyChecked ? 'checked' : ''}> I checked the vacancy criteria, application instructions and eligibility.</label>
      <button type="submit">Save application review</button></section></form>
      <p id="guide-status" role="status"></p>
      <section class="card"><h3>Before publishing an update</h3>
      <ol><li>Export a full backup from this project. Progress is stored in this browser and origin. Transfer it using Backup when switching devices.</li>
      <li>Test the updated build at a staging URL. Open all five routes, save and reload a record, and check the layout in desktop Chrome and on iPhone Safari.</li>
      <li>Check the service-worker update and backup restore, then review the current browser report before deploying the GitHub Pages root.</li></ol>
      <p><a href="reports/V55-BROWSER.md" target="_blank" rel="noopener">Current browser verification report</a></p>
      ${routeButton('settings', 'Open Backup')} ${routeButton('final-qa', 'Open release QA')}</section>`;

    app.querySelectorAll('[data-guide-role]').forEach(b => {
      b.onclick = () => act(() => {
        commit({ careerGuide: { ...model(), role: b.dataset.guideRole } });
        draw();
        app.querySelector('[data-guide-role][aria-pressed="true"]').focus();
      });
    });
    app.querySelectorAll('[data-guide-open]').forEach(b => {
      b.onclick = () => act(() => {
        if (b.dataset.guideOpen === 'career-launch-v53') {
          commit({ launchV53: { ...state.launchV53, role: route.role } });
        }
        open(b.dataset.guideOpen);
      });
    });
    byId('guide-record').onsubmit = event => {
      event.preventDefault();
      act(() => {
        const adverts = readAdverts();
        for (const [i, [skill]] of compared.skills.entries()) {
          const value = byId('guide-ad-evidence-' + i).value.trim();
          if (value) compared.evidence.set(skill, value);
          else compared.evidence.delete(skill);
        }
        const record = {
          adverts,
          skillEvidence: [...compared.evidence],
          ratings: route.skills.map((_, i) => Number(byId('guide-rating-' + i).value)),
          stages: stages.map((_, i) => ({
            ...Object.fromEntries(projectFields.map(([field]) => [field, byId(`guide-${i}-${field}`).value.trim()])),
            reviewed: byId(`guide-${i}-reviewed`).checked
          })),
          certStatus: byId('guide-cert-status').value,
          certProof: byId('guide-cert-proof').value.trim(),
          vacancyChecked: byId('guide-vacancy').checked
        };
        commit({ careerGuide: { ...current, role: route.role, records: { ...current.records, [route.role]: record } } });
        draw();
        const status = byId('guide-status');
        status.textContent = 'Progress saved. Pass gates and evidence checks updated.';
        status.tabIndex = -1;
        status.focus();
      });
    };
  }

  function act(action) {
    try { action(); }
    catch (error) {
      const status = byId('guide-status');
      status.textContent = 'Could not complete this action. ' + error.message;
      status.tabIndex = -1;
      status.focus();
    }
  }

  function attachHome() {
    const dashboard = app.querySelector('.academy-dashboard');
    if (!dashboard || byId('guide-home')) return;
    const card = document.createElement('section');
    card.className = 'card';
    card.innerHTML = '<h3>Build evidence for your next role</h3><p>Compare five career routes, assess your skills and see the next task for your portfolio.</p><button type="button" id="guide-home">Open guided career dashboard</button>';
    dashboard.prepend(card);
    byId('guide-home').onclick = () => open(page);
  }

  render = function () {
    if (view === page) return draw();
    const result = previous();
    attachHome();
    return result;
  };
  const nav = document.createElement('button');
  nav.type = 'button';
  nav.dataset.view = page;
  nav.textContent = 'Guided career dashboard';
  nav.onclick = () => open(page);
  document.querySelector('.academy-group-links').prepend(nav);
  const home = document.querySelector('.academy-home-button');
  const homeAction = home.onclick;
  home.onclick = event => {
    homeAction.call(home, event);
    attachHome();
  };
  attachHome();
})();
