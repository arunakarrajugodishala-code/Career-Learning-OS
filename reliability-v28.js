(function(){
'use strict';
const oldRender=render;
render=function(){if(view==='reliability-v28'){showReliability();return;}oldRender();};
const h=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function collect(){
 const buttons=[...document.querySelectorAll('nav button')];
 const results=[];const test=(name,fn)=>{try{let ok=fn();results.push({name,status:ok?'PASS':'FAIL'});}catch(e){results.push({name,status:'FAIL',detail:e.message});}};
 test('Navigation buttons have unique route identifiers',()=>buttons.every(b=>b.dataset.view)&&new Set(buttons.map(b=>b.dataset.view)).size===buttons.length);
 test('Application root is present',()=>!!document.querySelector('main#app'));
 test('Backup API is available',()=>typeof localStorage!=='undefined'&&typeof JSON.stringify==='function');
 test('Required curriculum arrays exist',()=>Array.isArray(window.CLOS?.topics)&&Array.isArray(window.CLOS?.careers));
 test('Quality audit API is available',()=>typeof window.CLOS?.finalAudit==='function');
 test('Manifest is linked',()=>!!document.querySelector('link[rel="manifest"]'));
 test('Offline worker supported in this browser',()=> 'serviceWorker' in navigator);
 return results;
}
function showReliability(){const results=collect(),fail=results.filter(x=>x.status!=='PASS').length;
 app.innerHTML='<h2>Reliability lab v2.8</h2><p class="pill warn">In-browser checks are diagnostic only; they do not replace end-to-end interaction tests or device acceptance.</p><section class="card"><h3>Live diagnostics</h3><p>'+results.length+' checks · '+fail+' failures</p><ul>'+results.map(r=>'<li><b>'+h(r.status)+'</b> — '+h(r.name)+(r.detail?' ('+h(r.detail)+')':'')+'</li>').join('')+'</ul><button id="reliability-export">Export diagnostics</button></section><section class="card"><h3>Manual acceptance checklist</h3><p>Tick these only after testing on your own device. They are stored locally and are not independent certification.</p>'+['Every navigation page renders','Every quiz submits and explains answers','Every dropdown and form responds','Backup exports and restores in a separate browser','Offline mode works after first online visit','Keyboard and screen reader navigation works','Mobile portrait has no horizontal overflow','Progress survives refresh and upgrade'].map((v,i)=>'<label style="display:block;margin:.65rem 0"><input type="checkbox" class="v28-manual" data-i="'+i+'"> '+h(v)+'</label>').join('')+'<button id="reliability-save">Save manual checklist</button><p id="reliability-msg" role="status"></p></section>';
 const key='clos-v28-manual-checklist';let saved=[];try{saved=JSON.parse(localStorage.getItem(key)||'[]')}catch(e){};document.querySelectorAll('.v28-manual').forEach(el=>el.checked=!!saved[+el.dataset.i]);
 document.getElementById('reliability-save').onclick=()=>{localStorage.setItem(key,JSON.stringify([...document.querySelectorAll('.v28-manual')].map(x=>x.checked)));document.getElementById('reliability-msg').textContent='Checklist saved on this device only.'};
 document.getElementById('reliability-export').onclick=()=>{const b=new Blob([JSON.stringify({version:'2.8',date:new Date().toISOString(),results,manual:'NOT_INDEPENDENTLY_VERIFIED'},null,2)],{type:'application/json'}),u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download='clos-v28-diagnostics.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),2000)};
}
window.CLOS.reliabilityChecks=collect;
})();