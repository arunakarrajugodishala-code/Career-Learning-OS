/* v0.9 cybersecurity/cloud modules; extends existing app safely. */
(function(){'use strict';
const d=window.CLOS.v9;const escapeHtml=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const originalRender=render;
render=function(){if(view==='security-cloud'){securityCloud();return;}originalRender();};
function securityCloud(){
 const track=state.v9Track||'Cybersecurity';
 let html='<h2>Cybersecurity and Cloud — v0.9</h2><p>Ten introductory learning units. All practical activities use fictional systems. These lessons are not a certification or a complete expert curriculum.</p><label for="v9-track">Choose pathway</label><select id="v9-track"><option>Cybersecurity</option><option>Cloud Computing</option></select><p><a href="labs/v9_security_risk_register_fictional.csv" download>Fictional security risk register</a> · <a href="labs/v9_cloud_architecture_checklist.csv" download>Cloud architecture checklist</a></p><p class="pill warn">Specific videos and expert reviews remain unverified. Work is self-assessed.</p>';
 for(const m of d.modules.filter(m=>m.track===track)){
  const prev=state.v9Journal?.[m.id]||'';const prereqs=m.prerequisites.every(id=>Boolean(state.v9Journal?.[id]?.trim()));
  html+='<section class="card"><h3>'+escapeHtml(m.title)+'</h3><span class="pill">'+escapeHtml(m.level)+'</span><p>'+escapeHtml(m.lesson)+'</p><h4>Independent exercise</h4><p>'+escapeHtml(m.exercise)+'</p><h4>Review criteria</h4><p>'+escapeHtml(m.rubric)+'</p><p><a target="_blank" rel="noopener noreferrer" href="'+escapeHtml(m.resource.url)+'">'+escapeHtml(m.resource.label)+'</a></p><label for="v9-'+m.id+'">Your practice notes (no confidential information)</label><textarea id="v9-'+m.id+'" rows="4" maxlength="6000">'+escapeHtml(prev)+'</textarea><div class="actions"><button data-v9="'+m.id+'">Save practice</button></div><p id="v9-result-'+m.id+'" class="small muted">'+(prereqs?'Earlier practice logged.':'Earlier practice not yet logged. ')+'Not independently graded.</p></section>';
 }
 app.innerHTML=html;document.getElementById('v9-track').value=track;
 document.getElementById('v9-track').onchange=e=>{state.v9Track=e.target.value;save();securityCloud()};
 app.querySelectorAll('[data-v9]').forEach(b=>b.onclick=()=>{const id=b.dataset.v9;state.v9Journal??={};state.v9Journal[id]=document.getElementById('v9-'+id).value.slice(0,6000);save();document.getElementById('v9-result-'+id).textContent='Saved on this device. Independent assessment remains required.'});
}
const priorFindings=findings;
findings=function(){const out=priorFindings(),ids=new Set();if(d.modules.length!==10)out.push({severity:'FAIL',where:'v0.9',detail:'Expected ten new modules'});
for(const m of d.modules){if(ids.has(m.id))out.push({severity:'FAIL',where:m.id,detail:'Duplicate module ID'});ids.add(m.id);
for(const field of ['track','title','level','lesson','exercise','rubric'])if(!m[field]||!String(m[field]).trim())out.push({severity:'FAIL',where:m.id,detail:'Missing '+field});
if(!/^https:\/\//.test(m.resource?.url||''))out.push({severity:'FAIL',where:m.id,detail:'Invalid resource URL format'});
out.push({severity:'REVIEW',where:m.id,detail:'Individual video, expert review and independently graded practical work pending'});}
for(const m of d.modules)for(const id of m.prerequisites)if(!ids.has(id))out.push({severity:'FAIL',where:m.id,detail:'Unknown prerequisite '+id});
return out;};
})();
