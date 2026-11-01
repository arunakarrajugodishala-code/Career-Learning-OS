/* v1.0: three new technical pathways, safe rendering and transparent audit. */
(function(){'use strict';
const d=window.CLOS.v10;
const escapeHtml=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const previousRender=render;
render=function(){if(view==='dev-data-ai'){renderV10();return;}previousRender();};
function renderV10(){
 const track=state.v10Track||'Software Development';
 let html='<h2>Programming, Data Engineering and AI — v1.0</h2><p>12 structured learning units, from introductory concepts to advanced extensions. This is a development release, not a complete expert curriculum.</p><label for="v10-track">Choose pathway</label><select id="v10-track"><option>Software Development</option><option>Data Engineering</option><option>AI and Machine Learning</option></select><p><a href="labs/v10_appointments_fictional.csv" download>Fictional appointments dataset</a> · <a href="labs/v10_model_evaluation_template.csv" download>Model evaluation template</a></p><p class="pill warn">Video verification, expert review and independent grading pending. Do not use patient data or confidential files.</p>';
 for(const m of d.modules.filter(m=>m.track===track)){
  const previous=state.v10Journal?.[m.id]||'';
  const ready=m.prerequisites.every(id=>Boolean(state.v10Journal?.[id]?.trim()));
  html+='<section class="card"><h3>'+escapeHtml(m.title)+'</h3><span class="pill">'+escapeHtml(m.level)+'</span><p>'+escapeHtml(m.lesson)+'</p><h4>Independent exercise</h4><p>'+escapeHtml(m.exercise)+'</p><h4>Review rubric</h4><ul>'+m.rubric.map(x=>'<li>'+escapeHtml(x)+'</li>').join('')+'</ul><p><a target="_blank" rel="noopener noreferrer" href="'+escapeHtml(m.resource.url)+'">'+escapeHtml(m.resource.label)+'</a></p><label for="v10-'+m.id+'">Your practice notes</label><textarea id="v10-'+m.id+'" rows="4" maxlength="6000">'+escapeHtml(previous)+'</textarea><div class="actions"><button data-v10-save="'+m.id+'">Save practice</button></div><p role="status" id="v10-result-'+m.id+'" class="small muted">'+(ready?'Prerequisite practice logged. ':'Prerequisite practice not logged. ')+'Not independently graded.</p></section>';
 }
 app.innerHTML=html;
 document.getElementById('v10-track').value=track;
 document.getElementById('v10-track').onchange=e=>{state.v10Track=e.target.value;save();renderV10();};
 app.querySelectorAll('[data-v10-save]').forEach(b=>b.onclick=()=>{const id=b.dataset.v10Save;state.v10Journal??={};state.v10Journal[id]=document.getElementById('v10-'+id).value.slice(0,6000);try{save();document.getElementById('v10-result-'+id).textContent='Saved locally. Independent review still required.';}catch(e){document.getElementById('v10-result-'+id).textContent='Could not save; export a backup or check browser storage.';}});
}
const previousFindings=findings;
findings=function(){const out=previousFindings(),ids=new Set();if(d.modules.length!==12)out.push({severity:'FAIL',where:'v1.0',detail:'Expected twelve new learning units'});
for(const m of d.modules){if(ids.has(m.id))out.push({severity:'FAIL',where:m.id,detail:'Duplicate module identifier'});ids.add(m.id);
for(const k of ['track','title','level','lesson','exercise'])if(!m[k]||!String(m[k]).trim())out.push({severity:'FAIL',where:m.id,detail:'Missing '+k});
if(!Array.isArray(m.rubric)||m.rubric.length<3)out.push({severity:'FAIL',where:m.id,detail:'Incomplete assessment rubric'});
if(!/^https:\/\//.test(m.resource?.url||''))out.push({severity:'FAIL',where:m.id,detail:'Invalid resource URL format'});
out.push({severity:'REVIEW',where:m.id,detail:'Expert review, verified teaching video and independent assessment pending'});
}
for(const m of d.modules)for(const id of m.prerequisites)if(!ids.has(id))out.push({severity:'FAIL',where:m.id,detail:'Unknown prerequisite '+id});
return out;};
})();
