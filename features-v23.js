/* Career Learning OS v2.3: searchable catalogue, placement and technical English.
   Self-reporting is never presented as independent mastery. */
(function(){
'use strict';
const previousRender=render;
const htmlEscape=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const items=()=>{
 const d=window.CLOS, out=[];
 (d.topics||[]).forEach(t=>out.push({id:'core:'+t.id,title:t.title,kind:'Core topic',level:t.level||'Not set',detail:(t.objectives||[]).join(' '),target:'learn'}));
 (d.foundationV4||[]).forEach(t=>out.push({id:'foundation:'+t.id,title:t.title,kind:'Foundation lesson',level:'Foundation',detail:t.beginner||'',target:'foundation'}));
 (d.deepLessons||[]).forEach(t=>out.push({id:'deep:'+t.id,title:t.title,kind:'Deep lesson',level:'Foundation',detail:t.beginner||'',target:'deep'}));
 (d.careers||[]).forEach(t=>out.push({id:'career:'+t.id,title:t.name,kind:'Career pathway',level:'Roadmap',detail:t.description||'',target:'careers'}));
 for(const [key,kind,target] of [['v8','Business Analysis / QA','ba-qa'],['v9','Cybersecurity / Cloud','security-cloud'],['v10','Programming / Data / AI','dev-data-ai']]){
  (d[key]?.modules||[]).forEach(t=>out.push({id:key+':'+t.id,title:t.title,kind,level:t.level||'Not set',detail:t.concept||'',target}));
 }
 return out;
};
const questions=[
 {q:'Which SQL clause filters rows before aggregation?',a:['WHERE','ORDER BY','GROUP BY'],correct:0,why:'WHERE filters rows; HAVING filters groups.'},
 {q:'What does DNS normally do?',a:['Encrypt a disk','Resolve names to addresses','Manage version control'],correct:1,why:'DNS resolves names to records such as IP addresses.'},
 {q:'Which command records changes in a Git repository?',a:['git commit','git ping','git compile'],correct:0,why:'git commit records a snapshot in repository history.'},
 {q:'Which statement about healthcare data is safest?',a:['Use real patient details in public demos','Use fictional data for public portfolio work','Share patient records for peer review'],correct:1,why:'Fictional data avoids exposing real patient information.'},
 {q:'What does a failed test demonstrate?',a:['A defect or unmet expectation requiring investigation','That all other features work','That the entire system is secure'],correct:0,why:'A failed test is evidence for investigation, not proof about unrelated behaviour.'}
];
const phrases=[
 {term:'Acceptance criteria',meaning:'Testable conditions that define when a requirement is satisfied.',prompt:'Write an acceptance criterion for saving an appointment status.',example:'Given an authorised user, when they save a valid status, then the status and timestamp are recorded.'},
 {term:'Root cause',meaning:'An underlying factor that explains why a problem occurred.',prompt:'Explain a recurring data-quality error without blaming a colleague.',example:'The validation rule was missing, so invalid codes were accepted. I would add validation and a regression test.'},
 {term:'Escalation',meaning:'Raising an issue to the appropriate person or team when needed.',prompt:'Describe how you would escalate an EPR access issue.',example:'I would record the symptoms, impact and urgency, then contact the authorised support team without sharing patient details.'},
 {term:'Stakeholder',meaning:'A person or group affected by a project or decision.',prompt:'Explain why nurses should be consulted during EPR design.',example:'Nurses are key stakeholders because they use the workflow and can identify practical safety and usability risks.'},
 {term:'Regression testing',meaning:'Checking that existing functionality still works after a change.',prompt:'Explain why a dropdown fix needs regression testing.',example:'I would retest the corrected dropdown and related save, keyboard and mobile interactions.'}
];
function discovery(){
 const catalogue=items();
 app.innerHTML='<h2>Search and diagnostic placement</h2><p>Search across existing course records. Search results are not proof that the topic is fully taught or verified.</p><label for="v23-search">Search learning topics and careers</label><input id="v23-search" type="search" placeholder="Try SQL, EPR, security, Python" autocomplete="off"><p id="v23-count" role="status"></p><div id="v23-results"></div><section class="card"><h3>Five-question starting diagnostic</h3><p>This short diagnostic suggests subjects to revisit. It is not a certification or an adaptive placement examination.</p><form id="v23-diagnostic">'+questions.map((q,i)=>'<fieldset><legend>'+htmlEscape(q.q)+'</legend>'+q.a.map((a,j)=>'<label class="choice"><input type="radio" name="q'+i+'" value="'+j+'"> '+htmlEscape(a)+'</label>').join('')+'</fieldset>').join('')+'<button type="submit" class="primary">Check diagnostic</button></form><p id="v23-diagnostic-result" role="status"></p></section>';
 const search=document.getElementById('v23-search'), results=document.getElementById('v23-results');
 function update(){const q=search.value.trim().toLowerCase();const filtered=catalogue.filter(x=>(x.title+' '+x.kind+' '+x.detail).toLowerCase().includes(q)).slice(0,60);document.getElementById('v23-count').textContent=filtered.length+' result(s) shown'+(catalogue.length>60?' (maximum 60)':'')+' · '+catalogue.length+' indexed records';results.innerHTML=filtered.map(x=>'<section class="card"><h3>'+htmlEscape(x.title)+'</h3><p class="muted">'+htmlEscape(x.kind)+' · '+htmlEscape(x.level)+'</p><button data-target="'+htmlEscape(x.target)+'">Open learning section</button></section>').join('')||'<p>No matches. Try a broader keyword.</p>';results.querySelectorAll('[data-target]').forEach(b=>b.onclick=()=>{view=b.dataset.target;render();app.focus()});}
 search.addEventListener('input',update);update();
 document.getElementById('v23-diagnostic').onsubmit=e=>{e.preventDefault();let score=0,missing=[];questions.forEach((q,i)=>{let selected=document.querySelector('input[name="q'+i+'"]:checked');if(!selected){missing.push(i+1);return}if(Number(selected.value)===q.correct)score++});const result=document.getElementById('v23-diagnostic-result');if(missing.length){result.textContent='Answer all five questions first. Missing: '+missing.join(', ');return}state.v23Diagnostic={score,total:questions.length,date:new Date().toISOString()};save();result.textContent='Score '+score+'/5. '+(score<4?'Recommended: revisit Computers, Networking, Git and SQL foundations.':'Recommended: continue with practical foundation exercises and review weak areas.')+' This result does not verify mastery.'};
}
function english(){app.innerHTML='<h2>Technical English practice</h2><p>Practise IT and healthcare workplace communication. Your writing is saved only in this browser; do not enter confidential information. The example answers are guidance, not automatic grading.</p>'+phrases.map((p,i)=>'<section class="card"><h3>'+htmlEscape(p.term)+'</h3><p>'+htmlEscape(p.meaning)+'</p><p><b>Writing prompt:</b> '+htmlEscape(p.prompt)+'</p><label for="v23-answer-'+i+'">Your answer</label><textarea id="v23-answer-'+i+'" rows="4" maxlength="4000">'+htmlEscape(state.v23English?.[i]||'')+'</textarea><div class="actions"><button data-english-save="'+i+'">Save answer</button></div><details><summary>Show example response</summary><p>'+htmlEscape(p.example)+'</p></details><p class="small muted" id="v23-feedback-'+i+'">Self-practice only — not independently reviewed.</p></section>').join('');app.querySelectorAll('[data-english-save]').forEach(b=>b.onclick=()=>{const i=b.dataset.englishSave;state.v23English??={};state.v23English[i]=document.getElementById('v23-answer-'+i).value.slice(0,4000);try{save();document.getElementById('v23-feedback-'+i).textContent='Saved locally. No automatic grading.'}catch(e){document.getElementById('v23-feedback-'+i).textContent='Save failed: storage may be full or unavailable.'}})}
render=function(){if(view==='discovery-v23'){discovery();return}if(view==='english-v23'){english();return}previousRender()};
const priorFindings=findings;
findings=function(){const out=priorFindings();const seen=new Set();for(const t of items()){if(seen.has(t.id))out.push({severity:'FAIL',where:t.id,detail:'Duplicate search index identifier'});seen.add(t.id);if(!t.title)out.push({severity:'FAIL',where:t.id,detail:'Search entry missing title'})}if(questions.length<10)out.push({severity:'REVIEW',where:'v2.3 diagnostic',detail:'Only five diagnostic questions; not suitable for reliable placement'});out.push({severity:'REVIEW',where:'v2.3 technical English',detail:'Written answers not independently graded'});return out};
})();
