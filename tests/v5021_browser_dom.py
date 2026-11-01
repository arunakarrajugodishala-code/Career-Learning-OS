#!/usr/bin/env python3
"""Actual Chromium DOM execution using inline local scripts. Not a network/PWA/Safari test."""
from pathlib import Path
import json,re,sys
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parents[1]
html=(ROOT/'index.html').read_text()
def inline(m):
 f=ROOT/m.group(1)
 if not f.is_file():raise FileNotFoundError(f)
 return '<script>\n'+f.read_text().replace('</script','<\\/script')+'\n</script>'
html=re.sub(r'<script src="([^"]+)"></script>',inline,html)
html=html.replace('<head>', '<head><script>Object.defineProperty(window,"localStorage",{configurable:true,value:(()=>{const m=new Map();return {getItem:k=>m.has(k)?m.get(k):null,setItem:(k,v)=>m.set(String(k),String(v)),removeItem:k=>m.delete(k),clear:()=>m.clear()}})()})</script>',1)
results=[]
def check(label,ok,detail=''):
 results.append({'name':label,'pass':bool(ok),'detail':str(detail)[:200]})
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
 for name,w,h in [('desktop',1280,800),('mobile',390,844)]:
  page=browser.new_page(viewport={'width':w,'height':h});errors=[]
  page.on('pageerror',lambda e:errors.append(str(e)))
  page.add_init_script("Object.defineProperty(window,'localStorage',{configurable:true,value:(()=>{const m=new Map();return {getItem:k=>m.has(k)?m.get(k):null,setItem:(k,v)=>m.set(String(k),String(v)),removeItem:k=>m.delete(k),clear:()=>m.clear()}})()})")
  page.set_content(html,wait_until='load',timeout=30000)
  nav=page.locator('nav button[data-view]');count=nav.count()
  check(name+' navigation count',count>=40,count)
  for i in range(count):
   button=nav.nth(i);target=button.get_attribute('data-view')
   try:
    button.evaluate('(el)=>el.click()')
    content=page.locator('#app').inner_text(timeout=4000)
    check(name+' route '+str(target),len(content.strip())>0,len(content))
   except Exception as e:check(name+' route '+str(target),False,e)
  check(name+' no JS exceptions',not errors,errors[:5])
  check(name+' horizontal overflow',page.evaluate('document.documentElement.scrollWidth<=innerWidth+2'),page.evaluate('JSON.stringify([...document.querySelectorAll("body *")].filter(e=>e.getBoundingClientRect().right>innerWidth+3).slice(0,5).map(e=>[e.tagName,e.className,e.getBoundingClientRect().right]))'))
  page.close()
 browser.close()
report={'method':'Real headless Chromium DOM execution with locally inlined JS (no localhost access required)','limitations':['Not testing network loading, service workers, installability, or offline mode','Not a Safari or physical device test','Navigation triggered through DOM click rather than physical pointer'], 'results':results,'passed':sum(r['pass'] for r in results),'failed':sum(not r['pass'] for r in results)}
out=ROOT/'reports/V5021-BROWSER-DOM.json';out.parent.mkdir(exist_ok=True);out.write_text(json.dumps(report,indent=2));print('Passed',report['passed'],'Failed',report['failed']);print('Failures',[(x['name'],x['detail']) for x in results if not x['pass']][:20]);sys.exit(bool(report['failed']))
