/* v1.1 learning quality and mastery: conservative evidence-based status */
(function(){'use strict';
const lessons=window.CLOS.masteryV11;
const safe=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const originalRender=render;
render=function(){if(view==='mastery-v11'){renderMastery();return;}originalRender();};
function getJournal(){state.masteryV11??={};return state.masteryV11;}
function renderMastery(){
 const journal=getJournal();let selected=state.masteryV11Subject||'All';
 const subjects=['All',...new Set(lessons.map(l=>l.subject))];
 const filtered=lessons.filter(l=>selected==='All'||l.subject===selected);
 let html='<h2>Learning Quality & Mastery — v1.1</h2><p>Detailed explanations, worked examples, projects, and evidence-based revision. <strong>Practice completion is not a qualification or independently verified mastery.</strong></p><label for="v11-subject">Subject</label><select id="v11-subject">'+subjects.map(s=>'<option value="'+safe(s)+'"'+(s===selected?' selected':'')+'>'+safe(s)+'</option>').join('')+'</select>';
 html+='<p class="pill warn">Specific videos and expert content review remain unverified. Offline progress stays on this device.</p>';
 for(const l of filtered){let j=journal[l.id]||{},q=l.quiz;
 html+='<section class="card"><h3>'+safe(l.title)+'</h3><span class="pill">'+safe(l.subject)+'</span><p><b>Learning objective:</b> '+safe(l.objectives[0])+'</p><h4>Lesson</h4><p>'+safe(l.explanation)+'</p><h4>Worked example</h4><p>'+safe(l.worked)+'</p><h4>Independent project</h4><p>'+safe(l.project)+'</p><p><a href="'+safe(l.resource.url)+'" target="_blank" rel="noopener noreferrer">'+safe(l.resource.label)+'</a></p><fieldset><legend>'+safe(q.q)+'</legend>'+q.choices.map((c,i)=>'<label class="choice"><input type="radio" name="v11-'+safe(l.id)+'" value="'+i+'"> '+safe(c)+'</label>').join('')+'</fieldset><label for="v11-note-'+safe(l.id)+'">Your project notes (fictional or public data only)</label><textarea id="v11-note-'+safe(l.id)+'" rows="4" maxlength="8000">'+safe(j.notes||'')+'</textarea><div class="actions"><button data-v11-check="'+safe(l.id)+'" class="primary">Check knowledge</button><button data-v11-save="'+safe(l.id)+'">Save project notes</button></div><p class="small muted" id="v11-status-'+safe(l.id)+'" role="status">'+(j.correct?'Last recorded answer correct. ':'No correct answer recorded. ')+(j.notes?'Notes saved. ':'No project evidence saved. ')+'Not independently mastered.</p></section>';
 }
 app.innerHTML=html;
 document.getElementById('v11-subject').onchange=e=>{state.masteryV11Subject=e.target.value;save();renderMastery()};
 app.querySelectorAll('[data-v11-check]').forEach(b=>b.onclick=()=>{let id=b.dataset.v11Check,l=lessons.find(x=>x.id===id),a=app.querySelector('input[name="v11-'+id+'"]:checked'),el=document.getElementById('v11-status-'+id);if(!a){el.textContent='Choose an answer before checking.';return;}let correct=Number(a.value)===l.quiz.answer;journal[id]={...(journal[id]||{}),correct,attemptedAt:new Date().toISOString()};save();el.textContent=(correct?'Correct. ':'Not correct. ')+l.quiz.why+' This single question does not demonstrate mastery.';});
 app.querySelectorAll('[data-v11-save]').forEach(b=>b.onclick=()=>{let id=b.dataset.v11Save;journal[id]={...(journal[id]||{}),notes:document.getElementById('v11-note-'+id).value.slice(0,8000),savedAt:new Date().toISOString()};save();document.getElementById('v11-status-'+id).textContent='Project notes saved locally. Independent assessment and practical verification pending.';});
}
const oldFindings=findings;
findings=function(){let out=oldFindings(),ids=new Set();for(const l of lessons){if(ids.has(l.id))out.push({severity:'FAIL',where:l.id,detail:'Duplicate mastery unit ID'});ids.add(l.id);for(const k of ['title','subject','explanation','worked','project'])if(typeof l[k]!=='string'||!l[k].trim())out.push({severity:'FAIL',where:l.id,detail:'Missing '+k});if(!Array.isArray(l.objectives)||!l.objectives.length)out.push({severity:'FAIL',where:l.id,detail:'No learning objective'});let q=l.quiz;if(!q||!Array.isArray(q.choices)||new Set(q.choices).size!==q.choices.length||!Number.isInteger(q.answer)||q.answer<0||q.answer>=q.choices.length||!q.why)out.push({severity:'FAIL',where:l.id,detail:'Invalid question/answer key'});if(!/^https:\/\//.test(l.resource?.url||''))out.push({severity:'FAIL',where:l.id,detail:'Invalid resource URL format'});out.push({severity:'REVIEW',where:l.id,detail:'Specific video, independent expert review and practical grading outstanding'});}if(lessons.length!==12)out.push({severity:'FAIL',where:'v1.1',detail:'Expected twelve mastery learning units'});return out;};
})();
