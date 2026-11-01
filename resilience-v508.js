(function(){
'use strict';
const previousRender=render,previousFindings=findings;
const h=x=>esc(String(x??''));
const STORAGE_KEY='clos-progress-v1';
const TEST_KEY='clos-v508-temporary-storage-test';
function result(name,status,detail){return {name,status,detail};}
function validateBackupRoundtrip(){
 const sample={app:'Career Learning OS',schema:1,state:{done:{demo:'2026-01-01T00:00:00.000Z'},notes:{demo:'Fictional practice only'},attempts:{demo:{correct:1,total:1,at:'2026-01-01T00:00:00.000Z'}}}};
 const copy=JSON.parse(JSON.stringify(sample));
 const validate=window.CLOS&&window.CLOS.validateBackupV29;
 if(typeof validate!=='function')return result('Backup schema round-trip','FAIL','Backup validator unavailable');
 const valid=validate(copy),invalid=validate({...copy,schema:999});
 return result('Backup schema round-trip',valid.ok&&!invalid.ok?'PASS':'FAIL','Synthetic sample accepted and incompatible schema rejected; actual import/export not tested');
}
function storageTest(){
 try{const existing=localStorage.getItem(TEST_KEY);if(existing!==null)return result('Storage round-trip','REVIEW','Reserved test key already exists; not overwritten');
 const payload='test-'+Date.now();localStorage.setItem(TEST_KEY,payload);
 const ok=localStorage.getItem(TEST_KEY)===payload;
 localStorage.removeItem(TEST_KEY);
 return result('Storage round-trip',ok?'PASS':'FAIL','Temporary key write/read/delete only; durability and backup restoration not tested');
 }catch(e){try{localStorage.removeItem(TEST_KEY)}catch(_){}return result('Storage round-trip','FAIL',e.message)}
}
async function cacheTest(){
 if(!('caches' in window))return result('Offline cache inspection','NOT_TESTED','CacheStorage unavailable');
 try{const names=(await caches.keys()).filter(n=>n.startsWith('clos-'));if(!names.length)return result('Offline cache inspection','REVIEW','No active Career OS cache found; visit online and reload');
 const cache=await caches.open(names[names.length-1]);const keys=await cache.keys();const urls=keys.map(r=>r.url);const expected=['index.html','style.css','app.js','recovery-v29.js','resilience-v508.js'];
 const missing=expected.filter(f=>!urls.some(u=>u.endsWith('/'+f)));
 return result('Offline cache inspection',missing.length?'FAIL':'PASS',missing.length?'Missing: '+missing.join(', '):expected.length+' essential files present in cache; offline launch not tested');
 }catch(e){return result('Offline cache inspection','FAIL',e.message)}
}
async function run(){const results=[];
 results.push(storageTest(),validateBackupRoundtrip());
 const nav=[...document.querySelectorAll('nav button[data-view]')];
 results.push(result('Navigation identifiers',new Set(nav.map(b=>b.dataset.view)).size===nav.length?'PASS':'FAIL',nav.length+' routes; click behaviour not verified'));
 results.push(result('Accessibility structure',document.querySelector('main#app[tabindex]')&&document.querySelector('nav[aria-label]')&&document.querySelector('a.skip-link')?'PASS':'FAIL','Basic landmarks only; screen reader audit not performed'));
 results.push(await cacheTest());
 results.push(result('Offline airplane-mode launch','NOT_TESTED','Disconnect internet, close the app and reopen on device'));
 results.push(result('Actual backup restoration','NOT_TESTED','Export current backup, restore test copy, compare records, then restore original'));
 results.push(result('Screen reader and mobile accessibility','NOT_TESTED','Test VoiceOver, keyboard, 200% zoom and small screens'));
 results.push(result('Independent content review','REVIEW','Educational material and external links require human review'));
 return results;
}
function download(data){const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='career-os-v508-resilience-report.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1500)}
function show(){app.innerHTML='<h2>Resilience & privacy v5.0.8</h2><p>Device-local tests use synthetic data and never replace your learning progress. A PASS here does not certify full offline operation, restore safety or accessibility.</p><section class="card"><h3>Diagnostics</h3><button id="v508-run" class="primary">Run safe diagnostics</button><button id="v508-export" disabled>Download evidence report</button><div id="v508-results" role="status" aria-live="polite">Tests have not run.</div></section><section class="card"><h3>Manual device acceptance</h3><ol><li>Export your real progress before updating; save a private copy outside the browser.</li><li>With internet on, open every important lesson and wait for offline caching.</li><li>Switch to airplane mode, fully close and reopen the installed app; navigate and complete a practice quiz.</li><li>Turn internet on, verify your progress still exists, then restore a test backup and compare records.</li><li>Test keyboard Tab/Enter, iPhone VoiceOver, zoom at 200%, small screens and orientation.</li><li>Clear only a disposable browser profile to verify a fresh install; do not clear your main profile.</li></ol><p><strong>Privacy:</strong> progress and notes are stored unencrypted on this device. Never enter real patient data. GitHub Pages does not provide account sync.</p></section><p><strong>Production release remains BLOCKED.</strong></p>';
 let report=null;document.getElementById('v508-run').onclick=async()=>{const btn=document.getElementById('v508-run');btn.disabled=true;document.getElementById('v508-results').textContent='Running diagnostics…';try{const checks=await run();report={version:'5.0.8',generatedAt:new Date().toISOString(),release:'BLOCKED',checks};document.getElementById('v508-results').innerHTML=checks.map(c=>'<p><strong>'+h(c.status)+'</strong> — '+h(c.name)+': '+h(c.detail)+'</p>').join('');document.getElementById('v508-export').disabled=false;}catch(e){document.getElementById('v508-results').textContent='Diagnostics failed: '+e.message}finally{btn.disabled=false}};
 document.getElementById('v508-export').onclick=()=>{if(report)download(report)};
}
render=function(){if(view==='resilience-v508')show();else previousRender()};
findings=function(){const f=previousFindings();if(!document.querySelector('[data-view="resilience-v508"]'))f.push({severity:'FAIL',where:'resilience-v508',detail:'Resilience diagnostics page missing'});return f};
window.CLOS.resilienceV508={run,validateBackupRoundtrip};
})();
