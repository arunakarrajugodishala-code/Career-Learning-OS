"""Optional end-to-end checks. Requires: pip install playwright; playwright install chromium."""
from pathlib import Path
import json,sys,threading,http.server,socketserver,contextlib
root=Path(__file__).resolve().parents[1]
try:
 from playwright.sync_api import sync_playwright
except ImportError:
 print(json.dumps({'browser':'NOT_TESTED','reason':'Playwright unavailable'}));sys.exit(2)
class Handler(http.server.SimpleHTTPRequestHandler):
 def __init__(self,*a,**kw):super().__init__(*a,directory=str(root),**kw)
 def log_message(self,*args):pass
class Server(socketserver.ThreadingTCPServer):allow_reuse_address=True
checks=[]
try:
 with Server(('127.0.0.1',0),Handler) as server:
  threading.Thread(target=server.serve_forever,daemon=True).start()
  with sync_playwright() as p:
   browser=p.chromium.launch(headless=True)
   page=browser.new_page(viewport={'width':390,'height':844})
   errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
   page.goto('http://127.0.0.1:%s/'%server.server_address[1],wait_until='load')
   page.wait_for_timeout(300)
   routes=page.locator('nav button[data-view]').count()
   for i in range(routes):
    btn=page.locator('nav button[data-view]').nth(i)
    name=btn.get_attribute('data-view');btn.click()
    page.wait_for_timeout(80)
    checks.append({'route':name,'status':'PASS' if page.locator('#app').inner_text().strip() else 'FAIL'})
   page.locator('nav button[data-view="readiness-v30"]').click()
   page.locator('#v30-check').click()
   checks.append({'route':'v30 smoke button','status':'PASS' if 'PASS' in page.locator('#v30-result').inner_text() else 'FAIL'})
   checks.append({'route':'uncaught JS exceptions','status':'FAIL' if errors else 'PASS','errors':errors})
   checks.append({'route':'mobile horizontal overflow','status':'PASS' if page.evaluate('document.documentElement.scrollWidth <= window.innerWidth + 2') else 'FAIL'})
   browser.close()
  server.shutdown()
except Exception as e:
 print(json.dumps({'browser':'NOT_TESTED','reason':str(e),'partial_checks':checks},indent=2));sys.exit(2)
report={'browser':'PASS' if all(x['status']=='PASS' for x in checks) else 'FAIL','checks':checks}
(root/'V30-BROWSER-AUDIT.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps(report,indent=2));sys.exit(0 if report['browser']=='PASS' else 1)
