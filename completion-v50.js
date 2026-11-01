(function(){'use strict';
const oldRender=render,oldFindings=findings;
const CHECKS=[
['code','JS syntax and file references','PASS','Automated source audit; see reports/STATIC-RESULTS.json'],
['navigation','All navigation clicks in a browser','NOT_TESTED','Run tests/browser_v50.py and attach browser output'],
['mobile','320px and desktop overflow','NOT_TESTED','Browser responsive test'],
['backup','Backup/restore/undo round trip','NOT_TESTED','Run isolated restoration test with disposable data'],
['offline','Install, airplane mode, update, rollback','NOT_TESTED','Test on actual iPhone and laptop'],
['coverage','All 15 pathways mapped to syllabus','REVIEW','Curriculum mapping is not full lesson completion'],
['lesson','Beginner-to-advanced lesson accuracy','REVIEW','Requires independent qualified reviewers'],
['assessment','Question quality and mastery validity','REVIEW','Small banks; human review needed'],
['resources','External links and videos verified','NOT_TESTED','Live link audit with timestamps required'],
['accessibility','WCAG 2.2 AA and screen reader','NOT_TESTED','Keyboard, VoiceOver and axe review'],
['privacy','Security/privacy assessment','REVIEW','No real patient data; third-party review needed'],
['career','Job/visa guidance current','REVIEW','Verify current official rules before use'],
['sync','Automatic secure cross-device sync','NOT_IMPLEMENTED','Manual JSON backup supported; no backend configured']
];
function viewPage(){const failures=CHECKS.filter(x=>x[2]!=='PASS');const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));app.innerHTML='<h2>v5.0 — Academy acceptance centre</h2><p><strong>RELEASE BLOCKED.</strong> This is a candidate, not a certified complete academy. All mandatory gates must have independent PASS evidence.</p><section class="card"><h3>Release gates ('+(CHECKS.length-failures.length)+'/'+CHECKS.length+' documented PASS)</h3><div style="overflow-x:auto"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence needed</th></tr></thead><tbody>'+CHECKS.map(x=>'<tr><td>'+safe(x[1])+'</td><td>'+safe(x[2])+'</td><td>'+safe(x[3])+'</td></tr>').join('')+'</tbody></table></div><button id="v50-export" type="button">Download gate report</button></section><section class="card"><h3>Next action</h3><p>Prioritise real browser interaction and restore tests, then complete and independently review the courses. All 15 career pathways need validated syllabus-to-assessment coverage.</p><p>Automatic sync is not offered: GitHub Pages is static hosting. Export/import is the supported device transfer.</p></section>';
document.getElementById('v50-export').onclick=()=>{const b=new Blob([JSON.stringify({version:'5.0',release:'BLOCKED',gates:CHECKS.map(x=>({id:x[0],name:x[1],status:x[2],evidence:x[3]}))},null,2)],{type:'application/json'}),u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download='academy-v5-gates.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000)};}
render=function(){if(view==='completion-v50')return viewPage();return oldRender()};
findings=function(){const a=oldFindings();a.push({severity:'REVIEW',where:'v5 release',detail:'Mandatory curriculum, browser, device, accessibility and independent-review gates remain unverified'});return a};
})();