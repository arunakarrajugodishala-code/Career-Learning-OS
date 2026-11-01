/* v0.6 specialist learning extension. Release gate is intentionally blocked. */
(function(){
const lessons=window.CLOS.eprV6||[];
const e=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const oldRender=render;
render=function(){if(view==='epr'){eprView();return}oldRender()};
function eprView(){
const progress=state.eprV6||{};
let html='<h2>Healthcare Systems / EPR — v0.6</h2><p>Ten sequenced specialist learning units, with written explanations, exercises, projects and knowledge checks. <b>These are guided introductions, not an accredited or clinically validated course.</b></p><p class="pill warn">Video review, clinical expert review and practical grading are outstanding.</p>';
for(const t of lessons){const record=progress[t.id]||{},prior=t.prerequisites.every(id=>!!progress[id]?.practised);
html+=`<section class="card"><h3>${t.order}. ${e(t.title)}</h3><span class="pill">${e(t.level)}</span> <span class="pill warn">Review pending</span><p><b>Objectives:</b> ${t.objectives.map(e).join('; ')}</p><h4>Explanation</h4><p>${e(t.beginner)}</p><h4>Worked scenario</h4><p>${e(t.worked)}</p><details><summary>Advanced discussion and common mistakes</summary><p>${e(t.advanced)}</p><p><b>Common mistake:</b> ${e(t.mistakes[0])}</p></details><h4>Practical exercise</h4><ol>${t.practice.map(x=>`<li>${e(x)}</li>`).join('')}</ol><h4>Portfolio task</h4><p>${e(t.project)}</p><p><a href="${e(t.resource.url)}" target="_blank" rel="noopener noreferrer">${e(t.resource.label)}</a> <span class="pill warn">Source not individually reviewed</span></p><p class="small muted">No verified individual video yet. Written lesson remains available offline.</p><fieldset><legend>${e(t.questions[0].q)}</legend>${t.questions[0].choices.map((x,i)=>`<label class="choice"><input type="radio" name="epr-${e(t.id)}" value="${i}"> ${e(x)}</label>`).join('')}</fieldset><div class="actions"><button class="primary" data-epr-quiz="${e(t.id)}">Check knowledge</button><button data-epr-practice="${e(t.id)}" ${prior?'':'disabled'}>${record.practised?'Undo practice log':'Log practice'}</button></div><p role="status" id="epr-result-${e(t.id)}" class="small muted">${prior?'Previous unit practice logged.':'Log the previous unit first to unlock practice logging.'} ${record.practised?'Practice self-reported.':''}</p></section>`;
}
app.innerHTML=html;
app.querySelectorAll('[data-epr-quiz]').forEach(b=>b.onclick=()=>{const t=lessons.find(x=>x.id===b.dataset.eprQuiz),selected=app.querySelector(`input[name="epr-${t.id}"]:checked`),target=document.getElementById('epr-result-'+t.id);if(!selected){target.textContent='Choose an answer first.';return}const correct=Number(selected.value)===t.questions[0].answer;state.eprV6??={};state.eprV6[t.id]={...state.eprV6[t.id],correct,attemptedAt:new Date().toISOString()};save();target.textContent=(correct?'Correct. ':'Not correct. ')+t.questions[0].why+' One question does not prove mastery.'});
app.querySelectorAll('[data-epr-practice]').forEach(b=>b.onclick=()=>{const id=b.dataset.eprPractice;state.eprV6??={};state.eprV6[id]={...state.eprV6[id],practised:!state.eprV6[id]?.practised};save();eprView()});
}
function eprAudit(){const issues=[],ids=new Set(lessons.map(x=>x.id));if(lessons.length!==10)issues.push({severity:'FAIL',where:'EPR',detail:'Expected ten specialist units'});if(ids.size!==lessons.length)issues.push({severity:'FAIL',where:'EPR',detail:'Duplicate lesson IDs'});
for(const [i,t] of lessons.entries()){if(t.order!==i+1)issues.push({severity:'FAIL',where:t.id,detail:'Incorrect order'});for(const key of ['title','level','objectives','beginner','worked','advanced','practice','project','questions','mistakes','revision','resource','video','prerequisites']){if(t[key]==null||(typeof t[key]==='string'&&!t[key].trim())||(Array.isArray(t[key])&&!t[key].length&&!['prerequisites'].includes(key)))issues.push({severity:'FAIL',where:t.id,detail:'Missing '+key})}
for(const pre of t.prerequisites)if(!ids.has(pre)||lessons.findIndex(x=>x.id===pre)>=i)issues.push({severity:'FAIL',where:t.id,detail:'Invalid prerequisite '+pre});
for(const q of t.questions){if(!q.q||!q.why||!Array.isArray(q.choices)||q.choices.length<3||new Set(q.choices).size!==q.choices.length||!Number.isInteger(q.answer)||q.answer<0||q.answer>=q.choices.length)issues.push({severity:'FAIL',where:t.id,detail:'Invalid assessment'})}
if(!/^https:\/\//.test(t.resource.url||''))issues.push({severity:'FAIL',where:t.id,detail:'Invalid resource URL'});
if(t.questions.length<5)issues.push({severity:'REVIEW',where:t.id,detail:'Only one knowledge question; larger assessment needed'});
if(!t.video.verified)issues.push({severity:'REVIEW',where:t.id,detail:'Individual teaching video not verified'});
if(!t.expertReviewed)issues.push({severity:'REVIEW',where:t.id,detail:'Healthcare subject-matter review required'});
if(!t.practicalReviewed)issues.push({severity:'REVIEW',where:t.id,detail:'Practical work not independently graded'});
}
return issues}
const previousFindings=findings;
findings=function(){return [...previousFindings(),...eprAudit()]};
})();
