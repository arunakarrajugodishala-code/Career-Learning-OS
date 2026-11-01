#!/usr/bin/env python3
from pathlib import Path
import re,json,sys
from playwright.sync_api import sync_playwright
R=Path(__file__).resolve().parents[1]
h=(R/'index.html').read_text()
def inline(m):
 p=R/m.group(1)
 if not p.is_file():raise FileNotFoundError(p)
 return '<script>\n'+p.read_text().replace('</script','<\\/script')+'\n</script>'
h=re.sub(r'<script src="([^"]+)"></script>',inline,h)
poly='<script>Object.defineProperty(window,"localStorage",{configurable:true,value:(()=>{const m=new Map();return {getItem:k=>m.has(k)?m.get(k):null,setItem:(k,v)=>m.set(String(k),String(v)),removeItem:k=>m.delete(k),clear:()=>m.clear()}})()})</script>'
h=h.replace('<head>','<head>'+poly,1)
checks=[]
def ck(name,ok,details=''):checks.append({'name':name,'pass':bool(ok),'detail':str(details)[:250]})
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox'])
 for device,w in [('desktop',1280),('mobile',390),('small-mobile',320)]:
  page=b.new_page(viewport={'width':w,'height':820});errs=[]
  page.on('pageerror',lambda e:errs.append(str(e)))
  page.set_content(h,wait_until='load',timeout=30000)
  ck(device+' home dashboard',page.locator('.academy-dashboard').count()==1)
  ck(device+' six courses',page.locator('.academy-course').count()==6)
  ck(device+' all nav retained',page.locator('.academy-sidebar button[data-view]').count()>=40)
  ck(device+' no horizontal overflow',page.evaluate('document.documentElement.scrollWidth<=innerWidth+2'))
  for key in ['epr','data-analyst','security-cloud','dev-data-ai','english-v23','ba-qa']:
   page.locator('.academy-dashboard [data-open="'+key+'"]').first.click()
   ck(device+' course '+key,page.locator('#app').inner_text().strip()!='')
   page.locator('.academy-home-button').evaluate('(el)=>el.click()')
  page.locator('.academy-sidebar button[data-view="device-v5025"]').evaluate('(el)=>el.click()')
  ck(device+' device evidence opens',len(page.locator('#app').inner_text().strip())>50)
  page.locator('.academy-home-button').evaluate('(el)=>el.click()')
  if device!='desktop':
   page.locator('.academy-menu').click()
   ck(device+' menu expands',page.locator('.academy-menu').get_attribute('aria-expanded')=='true')
  ck(device+' no uncaught JS errors',len(errs)==0,errs)
  page.close()
 b.close()
report={'method':'Chromium with locally inlined scripts and simulated browser storage','limitations':['No physical iPhone or Safari','No live GitHub Pages origin','No real service-worker installation or real offline test','No independent educational, accessibility or security signoff'],'checks':checks,'passed':sum(c['pass'] for c in checks),'failed':sum(not c['pass'] for c in checks)}
(R/'reports/CONSOLIDATED-BROWSER-TEST.json').write_text(json.dumps(report,indent=2))
print(json.dumps({'passed':report['passed'],'failed':report['failed'],'failures':[c for c in checks if not c['pass']]},indent=2))
sys.exit(report['failed']>0)
