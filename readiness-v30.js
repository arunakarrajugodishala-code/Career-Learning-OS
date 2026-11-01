(function(){
'use strict';
const priorRender=render;
const esc30=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const GATES=[
 ['Structural integrity','PASS','Run tests/v30_release_audit.py after each change; this status is a build-time report, not a live test.'],
 ['Navigation and buttons','NOT_TESTED','Run automated browser suite plus manual click-through on actual devices.'],
 ['Responsive iPhone and laptop','NOT_TESTED','Verify portrait, landscape, zoom and keyboard focus.'],
 ['Offline PWA installation','NOT_TESTED','Install from HTTPS, disconnect network and reopen.'],
 ['Backup recovery and rollback','NOT_TESTED','Export, import into clean browser, compare, then undo.'],
 ['Accessibility WCAG 2.2','REVIEW','Keyboard, screen reader, contrast and zoom review required.'],
 ['15 career curriculum completeness','FAIL','Introductory coverage is not a complete independently reviewed syllabus.'],
 ['Resource and video freshness','REVIEW','Individual external links and educational relevance require verification.'],
 ['Practical mastery and grading','REVIEW','Projects need expert-reviewed rubrics and evidence-based grading.'],
 ['Privacy and security','REVIEW','Local browser storage is unencrypted; threat model and privacy audit outstanding.'],
 ['Cross-device automatic sync','FAIL','Not supported on static GitHub Pages without an external sync service.'],
 ['Career/visa guidance currency','REVIEW','Confirm current rules against authoritative sources before applying.']
];
function download30(data){const b=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download='clos-v30-release-readiness.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),2500);}
function show(){
 const completed=GATES.filter(x=>x[1]==='PASS').length;
 app.innerHTML='<h2>Release readiness v3.0</h2><p><strong>RELEASE BLOCKED</strong> — '+completed+'/'+GATES.length+' acceptance gates provisionally passed. Build-time structural checks are separate from browser and curriculum verification.</p><section class="card"><h3>Acceptance gates</h3><table style="width:100%;border-collapse:collapse"><thead><tr><th scope="col">Gate</th><th scope="col">Status</th></tr></thead><tbody>'+GATES.map((g,i)=>'<tr><td style="padding:.5rem;border-bottom:1px solid #999"><strong>'+esc30(g[0])+'</strong><div><small>'+esc30(g[2])+'</small></div></td><td style="padding:.5rem;border-bottom:1px solid #999">'+esc30(g[1])+'</td></tr>').join('')+'</tbody></table><button id="v30-export">Export acceptance report</button></section><section class="card"><h3>Run diagnostics on this device</h3><p>These are limited smoke checks; passing does not prove every button works.</p><button id="v30-check">Run smoke checks</button><p id="v30-result" role="status"></p></section><section class="card"><h3>Release rules</h3><p>Never change NOT_TESTED to PASS without execution evidence. A manual checklist is not independent certification. Do not use real patient records in exercises. Use Recovery & privacy to export progress before updating.</p></section>';
 document.getElementById('v30-export').onclick=()=>download30({version:'3.0',generatedAt:new Date().toISOString(),release:'BLOCKED',gates:GATES.map(([name,status,evidence])=>({name,status,evidence}))});
 document.getElementById('v30-check').onclick=()=>{const nav=[...document.querySelectorAll('nav button[data-view]')],ids=nav.map(x=>x.dataset.view),checks=[['Unique navigation routes',ids.length===new Set(ids).size],['Main region',!!document.getElementById('app')],['Curriculum arrays',Array.isArray(window.CLOS?.topics)&&Array.isArray(window.CLOS?.careers)],['Local storage available',(()=>{try{const k='clos-v30-smoke';localStorage.setItem(k,'1');const ok=localStorage.getItem(k)==='1';localStorage.removeItem(k);return ok}catch(e){return false}})()]];document.getElementById('v30-result').textContent=checks.map(([n,ok])=>(ok?'PASS':'FAIL')+': '+n).join(' | ');};
}
render=function(){if(view==='readiness-v30')return show();return priorRender();};
window.CLOS.releaseGatesV30=GATES;
})();
