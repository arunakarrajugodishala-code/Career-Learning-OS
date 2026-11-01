(function(){
const prevRender=render,oldFindings=findings;
function checks(){const nav=[...document.querySelectorAll('nav [data-view]')],ids=nav.map(b=>b.dataset.view),results=[];
const check=(name,ok,detail)=>results.push({name,status:ok?'PASS':'FAIL',detail});
check('Navigation IDs unique',new Set(ids).size===ids.length,ids.length+' routes');
check('Main learning container exists',!!document.querySelector('#app'),'#app');
check('Backup storage API available',typeof localStorage!=='undefined','Browser storage available; does not prove recovery');
check('Service worker supported','serviceWorker' in navigator,'Support only; offline not verified');
check('Viewport metadata',!!document.querySelector('meta[name="viewport"]'),'Mobile viewport');
check('Skip link exists',!!document.querySelector('a.skip-link[href="#app"]'),'Keyboard navigation');
check('Main navigation labelled',!!document.querySelector('nav[aria-label]'),'Accessible navigation');
return results}
function page(){const rs=checks(),safe=x=>esc(String(x));app.innerHTML='<h2>Verification v5.0.7</h2><p>These checks inspect the currently loaded page only. They do not prove that every control, backup, lesson or offline action works.</p><div class="card"><h3>Live checks</h3>'+rs.map(r=>'<p><strong>'+safe(r.status)+'</strong> — '+safe(r.name)+' <small>'+safe(r.detail)+'</small></p>').join('')+'</div><div class="card"><h3>Device acceptance checklist</h3><p>Use your iPhone and laptop to verify navigation, dropdowns, quizzes, saved progress, export/import, offline refresh, keyboard navigation and text sizing. Record failures before release.</p><button id="v507-export">Export live checks</button></div><p><strong>Release decision: BLOCKED</strong> until all independent acceptance gates pass.</p>';document.querySelector('#v507-export').onclick=()=>{const payload={version:'5.0.7',generatedAt:new Date().toISOString(),checks:rs,notTested:['Real device interaction','Full backup restore','Offline refresh','Independent lesson review','Screen reader'],release:'BLOCKED'};const a=document.createElement('a'),url=URL.createObjectURL(new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}));a.href=url;a.download='v507-verification.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),500)}}
render=function(){if(view==='verification-v507')page();else prevRender()};
findings=function(){const f=oldFindings();if(!document.querySelector('[data-view="verification-v507"]'))f.push('v5.0.7 verification page is missing');return f};
})();