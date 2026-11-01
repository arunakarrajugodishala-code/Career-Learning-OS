(function(){
'use strict';
const oldRender=render;
render=function(){if(view==='final-qa'){renderQA();return;}oldRender();};
const htmlEscape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const requiredFields=['objectives','beginner','intermediate','advanced','examples','guided','project','mistakes','revision','assessment','resources','video'];
function report(){
 let base=[];try{base=findings()}catch(e){base=[{severity:'FAIL',where:'checker',detail:'Checker crashed: '+e.message}];}
 const topics=window.CLOS?.topics||[],careers=window.CLOS?.careers||[];
 const missing=[];for(const t of topics){for(const field of requiredFields){const val=t[field];if(val===undefined||val===null||(Array.isArray(val)&&!val.length)||(typeof val==='string'&&!val.trim()))missing.push({topic:t.id,field});}}
 const checkedVideos=topics.filter(t=>t.video?.reviewed===true&&/^https:\/\//.test(t.video?.url||'')).length;
 const issues=[...base];for(const x of missing)issues.push({severity:'FAIL',where:x.topic,detail:'Missing topic field: '+x.field});
 const manual=[
 {id:'browser',label:'Browser and mobile interactions',status:'NOT_TESTED',note:'Requires automated browser tests and real iPhone/laptop checks'},
 {id:'accessibility',label:'WCAG 2.2 AA',status:'NOT_TESTED',note:'Needs automated accessibility and manual keyboard/screen-reader tests'},
 {id:'videos',label:'Individual video verification',status:checkedVideos===topics.length&&topics.length?'REVIEW':'INCOMPLETE',note:checkedVideos+'/'+topics.length+' core topics have a reviewed video flag; flags are not external proof'},
 {id:'expert',label:'Independent curriculum accuracy',status:'REVIEW',note:'Qualified subject reviewers must verify lessons and answers'},
 {id:'mastery',label:'Independent project assessment',status:'INCOMPLETE',note:'Current practice logs are self-reported'},
 {id:'sync',label:'Automatic secure cross-device sync',status:'NOT_IMPLEMENTED',note:'Static GitHub Pages does not provide a sync backend'},
 {id:'jobs',label:'Live jobs, salaries and visa checks',status:'NOT_IMPLEMENTED',note:'Verify employer sponsorship and eligibility against current official sources'},
 {id:'recovery',label:'Full backup/restore device test',status:'NOT_TESTED',note:'Export and import must be tested on actual devices'},
 {id:'offline',label:'Offline installation on iPhone and laptop',status:'NOT_TESTED',note:'Requires deployment and airplane-mode checks'}
 ];
 return {version:'2.1-release-candidate',generatedAt:new Date().toISOString(),summary:{topics:topics.length,careers:careers.length,deepLessons:(window.CLOS?.deepLessons||[]).length,foundationLessons:(window.CLOS?.foundationV4||[]).length,appliedMilestones:(window.CLOS?.milestones||[]).length,reviewedCoreVideos:checkedVideos,structuralFailures:issues.filter(i=>i.severity==='FAIL').length,manualReviewFlags:issues.filter(i=>i.severity!=='FAIL').length},releaseStatus:'BLOCKED',findings:issues,manualGates:manual};
}
function download(name,content){const b=new Blob([content],{type:'application/json'}),u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),3000)}
function renderQA(){const a=report(),s=a.summary;
 app.innerHTML='<h2>Release quality and completeness audit</h2><p class="qa-status" role="status"><b>Production gate: BLOCKED.</b> This checker reports what it can verify. It cannot certify learning accuracy, jobs, video availability or mastery.</p><div class="qa-grid">'+[
 ['Core topic records',s.topics],['Career outlines',s.careers],['Foundation lessons',s.foundationLessons],['Applied milestone units',s.appliedMilestones],['Structural failures',s.structuralFailures],['Other review findings',s.manualReviewFlags]
 ].map(([k,v])=>'<section class="card"><h3>'+htmlEscape(k)+'</h3><strong>'+htmlEscape(v)+'</strong></section>').join('')+'</div><section class="card"><h3>Release gates</h3><ul>'+a.manualGates.map(g=>'<li><b>'+htmlEscape(g.status)+'</b> — '+htmlEscape(g.label)+': '+htmlEscape(g.note)+'</li>').join('')+'</ul><button id="qa-download" class="primary">Export full QA report (JSON)</button><p>Any automated result is a limited structural check. An unrun test is never a pass.</p></section><section class="card"><h3>Structural findings</h3><details><summary>Show '+a.findings.length+' findings</summary><ol>'+a.findings.map(x=>'<li><b>'+htmlEscape(x.severity)+'</b> — '+htmlEscape(x.where)+': '+htmlEscape(x.detail)+'</li>').join('')+'</ol></details></section><section class="card"><h3>Privacy and backup</h3><p>Progress remains local to this browser. Do not enter identifiable patient information or secrets. Export a backup before installing updates, and verify a restore on a separate browser profile.</p><button id="qa-backup">Open backup settings</button></section>';
 document.getElementById('qa-download').onclick=()=>download('career-learning-os-qa-v2.1.json',JSON.stringify(a,null,2));document.getElementById('qa-backup').onclick=()=>{view='settings';render();app.focus()};
}
window.CLOS.finalAudit=report;
})();
