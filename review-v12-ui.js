/* v1.2 independent review dashboard; no automatic claims of mastery */
(function(){'use strict';
const D=window.CLOS.reviewV12, lessons=window.CLOS.masteryV11;
const safe=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const originalRender=render;
render=function(){if(view==='review-v12'){reviewDashboard();return;}originalRender();};
function records(){state.reviewV12??={};return state.reviewV12;}
function nextDate(iso,stage){const t=Date.parse(iso);if(!Number.isFinite(t))return null;return new Date(t+[1,7,30][Math.min(stage,2)]*86400000);}
function status(id){const v=records()[id]||{},j=state.masteryV11?.[id]||{};
 if(!v.lastReview)return j.correct||j.notes?'Practised — review not started':'Not started';
 if(v.lastResult!=='pass')return 'Needs practice';
 const due=nextDate(v.lastReview,v.stage||0);return due&&due.getTime()<=Date.now()?'Revision due':'Review scheduled';}
function reviewDashboard(){
 const r=records();const counts={};for(const l of lessons){const s=status(l.id);counts[s]=(counts[s]||0)+1;}
 let html='<h2>Revision Dashboard — v1.2</h2><p>24 new questions across 12 applied units. Review questions are different from the original lesson questions. Passing a quiz is not independently verified mastery.</p><div class="card"><h3>Progress overview</h3><p>'+Object.entries(counts).map(([k,v])=>safe(k)+': <b>'+v+'</b>').join(' · ')+'</p><p class="pill warn">Independently verified mastery: 0 (no qualified assessor connected)</p></div>';
 for(const l of lessons){const v=r[l.id]||{},qset=D.supplementalQuestions[l.id],due=v.lastReview&&v.lastResult==='pass'?nextDate(v.lastReview,v.stage||0):null;
 html+='<section class="card"><h3>'+safe(l.title)+'</h3><p><b>Status:</b> '+safe(status(l.id))+(due?' · Next review: '+safe(due.toLocaleDateString()):'')+'</p><p class="small muted">Two independent knowledge questions. A perfect result schedules revision; an incorrect result resets the schedule.</p>';
 qset.forEach((q,i)=>{html+='<fieldset><legend>'+safe(q.q)+'</legend>'+q.choices.map((c,j)=>'<label class="choice"><input type="radio" name="v12-'+safe(l.id)+'-'+i+'" value="'+j+'"> '+safe(c)+'</label>').join('')+'</fieldset>';});
 html+='<button class="primary" data-v12-check="'+safe(l.id)+'">Submit review</button><p role="status" id="v12-status-'+safe(l.id)+'"></p></section>';
 }
 app.innerHTML=html;
 app.querySelectorAll('[data-v12-check]').forEach(b=>b.onclick=()=>{const id=b.dataset.v12Check,qs=D.supplementalQuestions[id],answers=qs.map((q,i)=>app.querySelector('input[name="v12-'+id+'-'+i+'"]:checked'));const el=document.getElementById('v12-status-'+id);if(answers.some(a=>!a)){el.textContent='Answer both questions first.';return;}
 const n=answers.filter((a,i)=>Number(a.value)===qs[i].answer).length;const prior=r[id]||{};const pass=n===qs.length;const stage=pass?(prior.lastResult==='pass'?Math.min((prior.stage||0)+1,2):0):0;
 r[id]={lastReview:new Date().toISOString(),lastResult:pass?'pass':'retry',stage,attempts:(prior.attempts||0)+1,score:n,total:qs.length};save();el.textContent=n+'/'+qs.length+' correct. '+qs.map((q,i)=>(i+1)+'. '+q.why).join(' ')+' This is a knowledge review, not independent mastery. Refresh this page to see the updated dashboard.';});
}
const oldFindings=findings;
findings=function(){const out=oldFindings();const ids=new Set(lessons.map(l=>l.id));if(ids.size!==12)out.push({severity:'FAIL',where:'v1.2',detail:'Unexpected v1.1 lesson count or duplicate IDs'});
for(const id of ids){const qs=D.supplementalQuestions[id];if(!Array.isArray(qs)||qs.length!==2){out.push({severity:'FAIL',where:id,detail:'Expected two supplemental questions'});continue;}
for(const q of qs)if(!q.q||!q.why||!Array.isArray(q.choices)||q.choices.length<3||new Set(q.choices).size!==q.choices.length||!Number.isInteger(q.answer)||q.answer<0||q.answer>=q.choices.length)out.push({severity:'FAIL',where:id,detail:'Invalid review question'});}
for(const id of Object.keys(D.supplementalQuestions))if(!ids.has(id))out.push({severity:'FAIL',where:id,detail:'Review question refers to unknown lesson'});
out.push({severity:'REVIEW',where:'v1.2',detail:'Question factual accuracy and distractor quality require independent review'});
out.push({severity:'REVIEW',where:'v1.2',detail:'Browser/mobile, screen reader and backup round-trip testing remain unexecuted'});
return out;};
})();
