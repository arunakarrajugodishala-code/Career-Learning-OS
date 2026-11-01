from playwright.sync_api import sync_playwright
from pathlib import Path
import json,threading,http.server,socketserver,time
r=Path('/mnt/data/clos-final-audit');PORT=18791
class H(http.server.SimpleHTTPRequestHandler):
 def __init__(self,*a,**kw):super().__init__(*a,directory=str(r),**kw)
 def log_message(self,*a):pass
server=socketserver.TCPServer(('127.0.0.1',PORT),H)
threading.Thread(target=server.serve_forever,daemon=True).start()
results=[];errors=[]
with sync_playwright() as p:
 browser=p.chromium.launch(headless=True,executable_path='/usr/bin/chromium',args=['--no-sandbox'])
 for width,height,label in [(1365,850,'desktop'),(390,844,'mobile')]:
  page=browser.new_page(viewport={'width':width,'height':height},device_scale_factor=1)
  page.on('pageerror',lambda e:errors.append(str(e)))
  page.goto((r/'index.html').as_uri(),wait_until='load')
  page.wait_for_timeout(300)
  nav=page.locator('nav button')
  for i in range(nav.count()):
   name=nav.nth(i).get_attribute('data-view')
   try:
    nav.nth(i).click(timeout=6000)
    heading=page.locator('#app h2').first.inner_text(timeout=2500)
    results.append({'viewport':label,'view':name,'status':'PASS','heading':heading})
   except Exception as e:
    results.append({'viewport':label,'view':name,'status':'FAIL','error':str(e)[:350]})
  if label=='mobile':
   page.screenshot(path=str(r/'tests-mobile.png'),full_page=True)
  else:page.screenshot(path=str(r/'tests-desktop.png'),full_page=True)
  overflow=page.evaluate('document.documentElement.scrollWidth>window.innerWidth+2')
  results.append({'viewport':label,'view':'horizontal-overflow','status':'FAIL' if overflow else 'PASS'})
  if label=='desktop':
   page.locator('nav button[data-view="final-qa"]').click()
   results.append({'viewport':label,'view':'QA report','status':'PASS' if 'BLOCKED' in page.locator('#app').inner_text() else 'FAIL'})
   page.locator('nav button[data-view="settings"]').click()
   results.append({'viewport':label,'view':'backup export button','status':'PASS' if page.locator('#export').count()==1 else 'FAIL'})
  page.close()
 browser.close()
server.shutdown()
report={'browser':'Chromium headless','results':results,'javascriptErrors':errors,'pass':sum(x['status']=='PASS' for x in results),'fail':sum(x['status']=='FAIL' for x in results)}
(r/'browser-test-report.json').write_text(json.dumps(report,indent=2))
print(json.dumps({'pass':report['pass'],'fail':report['fail'],'jsErrors':errors[:12],'failures':[x for x in results if x['status']=='FAIL']},indent=2))
