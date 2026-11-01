(function(){
'use strict';
const oldRender=render;
const KEY='clos-progress-v1', SNAP='clos-v29-safety-snapshot';
const h=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const plain=o=>o&&typeof o==='object'&&!Array.isArray(o);
function validate(x){
 const issues=[];
 if(!plain(x)||x.app!=='Career Learning OS'||x.schema!==1||!plain(x.state))return {ok:false,issues:['Not a compatible Career Learning OS schema 1 backup']};
 const s=x.state;
 for(const k of ['done','notes','attempts'])if(!plain(s[k]))issues.push('Invalid '+k+' object');
 if(issues.length)return {ok:false,issues};
 for(const k of ['done','notes','attempts']){
  const entries=Object.entries(s[k]);if(entries.length>20000)issues.push('Too many '+k+' entries');
  for(const [id,v] of entries){if(id.length>180||['__proto__','prototype','constructor'].includes(id))issues.push('Unsafe entry name in '+k);if(k==='done'&&typeof v!=='string')issues.push('Invalid completion date '+id);if(k==='notes'&&typeof v!=='string')issues.push('Invalid note '+id);if(k==='attempts'&&(!plain(v)||!Number.isFinite(v.correct)||!Number.isFinite(v.total)||v.correct<0||v.total<0||v.correct>v.total))issues.push('Invalid assessment '+id);if(issues.length>15)break;}
 }
 return {ok:issues.length===0,issues};
}
function download(name,data){const b=new Blob([data],{type:'application/json'}),url=URL.createObjectURL(b),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),3000);}
function show(){
 app.innerHTML='<h2>Recovery & privacy v2.9</h2><p>Device-local backups. No account, cloud sync or automatic transfer is provided. Test a copy before replacing your real progress.</p><section class="card"><h3>Protected backup workflow</h3><p>Export a backup, inspect an import safely, then confirm replacement. A safety snapshot is kept locally before replacement.</p><div class="actions"><button id="v29-export" class="primary">Export full progress</button><label>Inspect backup <input id="v29-file" type="file" accept=".json,application/json"></label></div><p id="v29-status" role="status">No backup selected.</p><button id="v29-restore" disabled>Confirm and restore inspected backup</button><button id="v29-undo">Undo last restore (this device)</button></section><section class="card"><h3>Storage diagnostics</h3><p id="v29-storage"></p><button id="v29-check">Run storage write/read test</button><p id="v29-check-result" role="status"></p></section><section class="card"><h3>Privacy and accessibility</h3><p>Do not enter identifiable patient or confidential employer information. Local storage is not encrypted. Backups may include personal notes: store and share them securely. Browser clearing, private browsing, and device loss can erase progress.</p><p>Use the keyboard Tab and Enter keys to test every control. Use the Reliability Lab for manual device checks.</p></section>';
 let pending=null;
 const status=document.getElementById('v29-status'), restore=document.getElementById('v29-restore');
 function storage(){try{const raw=localStorage.getItem(KEY)||'{}';document.getElementById('v29-storage').textContent='Stored progress: '+new Blob([raw]).size+' bytes; safety snapshot: '+(localStorage.getItem(SNAP)?'available':'not available')+'.';}catch(e){document.getElementById('v29-storage').textContent='Storage inaccessible: '+e.message;}}
 storage();
 document.getElementById('v29-export').onclick=()=>download('career-learning-os-progress-v29.json',JSON.stringify({app:'Career Learning OS',schema:1,state,exportedAt:new Date().toISOString()},null,2));
 document.getElementById('v29-file').onchange=async e=>{pending=null;restore.disabled=true;try{const f=e.target.files?.[0];if(!f||f.size>2000000)throw Error('Choose a JSON file under 2 MB');const parsed=JSON.parse(await f.text());const v=validate(parsed);if(!v.ok)throw Error(v.issues.slice(0,4).join('; '));pending=parsed;status.textContent='Validated '+Object.keys(parsed.state.done).length+' completed topics, '+Object.keys(parsed.state.notes).length+' notes, '+Object.keys(parsed.state.attempts).length+' assessments. Review before restoring.';restore.disabled=false;}catch(err){status.textContent='Import rejected: '+err.message;}};
 restore.onclick=()=>{if(!pending)return;if(!confirm('Replace your existing progress? A local undo snapshot will be created first. Export your current progress before continuing.'))return;try{const before=localStorage.getItem(KEY);localStorage.setItem(SNAP,before===null?JSON.stringify({}):before);const next={...state,done:pending.state.done,notes:pending.state.notes,attempts:pending.state.attempts};localStorage.setItem(KEY,JSON.stringify(next));state=next;pending=null;restore.disabled=true;status.textContent='Restored and saved. Reload or navigate to view updated progress.';storage();}catch(err){status.textContent='Restore failed: '+err.message;}};
 document.getElementById('v29-undo').onclick=()=>{try{const old=localStorage.getItem(SNAP);if(!old)throw Error('No safety snapshot exists');const parsed=JSON.parse(old);if(!plain(parsed))throw Error('Snapshot invalid');if(!confirm('Undo the last restore and replace current progress?'))return;localStorage.setItem(KEY,old);state={done:{},notes:{},attempts:{},...parsed};localStorage.removeItem(SNAP);status.textContent='Last restore undone.';storage();}catch(err){status.textContent='Undo unavailable: '+err.message;}};
 document.getElementById('v29-check').onclick=()=>{const key='clos-v29-write-test';try{localStorage.setItem(key,'verified');if(localStorage.getItem(key)!=='verified')throw Error('Readback mismatch');localStorage.removeItem(key);document.getElementById('v29-check-result').textContent='PASS: local storage write/read/delete on this browser. This does not verify backup recovery or durability.';}catch(err){document.getElementById('v29-check-result').textContent='FAIL: '+err.message;}};
}
render=function(){if(view==='recovery-v29'){show();return;}oldRender();};
window.CLOS.validateBackupV29=validate;
})();