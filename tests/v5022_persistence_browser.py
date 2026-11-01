#!/usr/bin/env python3
"""Chromium DOM tests: persistent localStorage across reload and JSON backup import."""
from pathlib import Path
import re,json,sys
from playwright.sync_api import sync_playwright
R=Path(__file__).resolve().parents[1]
h=(R/'index.html').read_text()
def inline(m):
 return '<script>\n'+(R/m.group(1)).read_text().replace('</script','<\\/script')+'\n</script>'
h=re.sub(r'<script src="([^"]+)"></script>',inline,h)
results=[]
def check(name,ok,detail=''):results.append({'name':name,'pass':bool(ok),'detail':str(detail)[:240]})
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
 page=b.new_page()
 storage={}
 def getter(k):return storage.get(k)
 def setter(k,v):storage[str(k)]=str(v)
 page.expose_function('testStorageGet',getter)
 page.expose_function('testStorageSet',setter)
 page.add_init_script('''Object.defineProperty(window,'localStorage',{configurable:true,value:{getItem:k=>window.testStorageGet(k),setItem:(k,v)=>window.testStorageSet(k,v),removeItem:k=>window.testStorageSet(k,null)}})''')
 # The exposed functions are asynchronous; localStorage must be synchronous. Use localStorage map backed by page global and re-inject on reload instead.
 page.close()
 page=b.new_page()
 def load(snapshot):
  init='''<script>Object.defineProperty(window,'localStorage',{configurable:true,value:(()=>{const m=new Map(Object.entries(SNAPSHOT));return {getItem:k=>m.has(k)?m.get(k):null,setItem:(k,v)=>m.set(String(k),String(v)),removeItem:k=>m.delete(k),clear:()=>m.clear(),_dump:()=>Object.fromEntries(m)}})()});</script>'''.replace('SNAPSHOT',json.dumps(snapshot))
  page.goto('about:blank')
  page.set_content(h.replace('<head>','<head>'+init,1),wait_until='load',timeout=30000)
 def snapshot():return page.evaluate('localStorage._dump()')
 load({})
 page.locator('nav button[data-view="learn"]').first.click()
 done=page.locator('button[data-done]:not([disabled])')
 check('mark-complete button exists',done.count()>0)
 if done.count():
  done.first.click()
  data=snapshot()
  check('completion written to storage','clos-progress-v1' in data and bool(json.loads(data['clos-progress-v1']).get('done')))
  load(data)
  check('completion survives reload',bool(json.loads(snapshot()['clos-progress-v1']).get('done')))
 else:data={}
 page.locator('nav button[data-view="settings"]').first.evaluate('(el)=>el.click()')
 print('DEBUG',page.locator('#app').inner_text()[:120])
 check('backup import field exists',page.locator('#import').count()==1)
 if data:
  state=json.loads(data['clos-progress-v1'])
  backup=json.dumps({'app':'Career Learning OS','schema':1,'state':state})
  page.on('dialog',lambda d:d.accept())
  page.locator('#import').set_input_files({'name':'backup.json','mimeType':'application/json','buffer':backup.encode()})
  page.wait_for_timeout(200)
  check('valid backup imported','Backup imported' in page.locator('#backup-msg').inner_text())
  before=snapshot().get('clos-progress-v1')
  page.locator('#import').set_input_files({'name':'bad.json','mimeType':'application/json','buffer':b'{broken'})
  page.wait_for_timeout(200)
  check('invalid JSON rejected','Import failed' in page.locator('#backup-msg').inner_text())
  check('invalid backup leaves saved state intact',snapshot().get('clos-progress-v1')==before)
 page.close();b.close()
report={'method':'Headless Chromium DOM with inlined local scripts and synchronous simulated localStorage','limitations':['Not physical Safari','Not actual browser disk persistence','Not service-worker offline/network testing'],'results':results,'passed':sum(x['pass'] for x in results),'failed':sum(not x['pass'] for x in results)}
(R/'reports/V5022-PERSISTENCE-BROWSER.json').write_text(json.dumps(report,indent=2))
print(json.dumps(report,indent=2));sys.exit(bool(report['failed']))
