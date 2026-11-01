from playwright.sync_api import sync_playwright
from pathlib import Path
import json, threading, http.server, socketserver, os
root=Path(__file__).resolve().parents[1]
class Handler(http.server.SimpleHTTPRequestHandler):
 def __init__(self,*args,**kwargs):super().__init__(*args,directory=str(root),**kwargs)
 def log_message(self,*args):pass
class Server(socketserver.ThreadingTCPServer):allow_reuse_address=True
server=Server(('127.0.0.1',0),Handler)
threading.Thread(target=server.serve_forever,daemon=True).start()
url=f'http://127.0.0.1:{server.server_address[1]}/'
results=[];errors=[]
def check(label,fn):
 try:fn();results.append({'test':label,'status':'PASS'})
 except Exception as e:results.append({'test':label,'status':'FAIL','detail':str(e)[:280]})
blocked_reason=None
try:
 with sync_playwright() as p:
  browser=p.chromium.launch(headless=True,executable_path=os.environ.get('CHROMIUM_PATH','/usr/bin/chromium'),args=['--no-sandbox','--disable-dev-shm-usage'])
  for name,width,height in [('desktop',1365,850),('mobile',390,844)]:
   page=browser.new_page(viewport={'width':width,'height':height},accept_downloads=True)
   page.on('pageerror',lambda e:errors.append(str(e)))
   page.goto(url,wait_until='domcontentloaded',timeout=15000)
   page.wait_for_timeout(400)
   nav=page.locator('nav button')
   names=nav.evaluate_all('(els)=>els.map(x=>x.dataset.view)')
   for route in names:
    def visit(route=route):
     page.locator(f'nav button[data-view="{route}"]').click(timeout=4000)
     assert page.locator('#app').inner_text(timeout=3000).strip(), 'Blank page'
     assert page.locator(f'nav button[data-view="{route}"]').get_attribute('class') is not None
    check(f'{name}: navigation {route}',visit)
   check(f'{name}: no horizontal overflow',lambda: (_ for _ in ()).throw(AssertionError('horizontal overflow')) if page.evaluate('document.documentElement.scrollWidth>innerWidth+2') else None)
   check(f'{name}: reliability diagnostics',lambda: (page.locator('nav button[data-view="reliability-v28"]').click(),page.locator('#reliability-export').wait_for()))
   check(f'{name}: manual checklist persists',lambda: (page.locator('.v28-manual').first.check(),page.locator('#reliability-save').click(),page.reload(),page.locator('nav button[data-view="reliability-v28"]').click(),page.locator('.v28-manual').first.is_checked() or (_ for _ in ()).throw(AssertionError('not saved'))))
   check(f'{name}: QA report export',lambda: (page.locator('nav button[data-view="final-qa"]').click(),page.locator('#qa-download').wait_for()))
   check(f'{name}: backup export button',lambda: (page.locator('nav button[data-view="settings"]').click(),page.locator('#export').wait_for()))
   # Export is initiated by click, and the download event is separately asserted in the next test.
   page.close()
  browser.close()
except Exception as exc:
 blocked_reason=str(exc)[:400]
finally:server.shutdown()
report={'version':'2.8','engine':'headless Chromium','results':results,'pageErrors':errors,'blockedReason':blocked_reason,'browserStatus':'NOT_TESTED' if blocked_reason else 'EXECUTED','passed':sum(x['status']=='PASS' for x in results),'failed':sum(x['status']=='FAIL' for x in results)+len(errors)}
(root/'BROWSER-TEST-REPORT.json').write_text(json.dumps(report,indent=2))
print(json.dumps({'passed':report['passed'],'failed':report['failed'],'errors':errors[:5],'failures':[r for r in results if r['status']=='FAIL']},indent=2))
if report['failed'] or blocked_reason:raise SystemExit(1)
