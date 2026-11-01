from pathlib import Path
from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
import threading,os,json
from playwright.sync_api import sync_playwright
r=Path(__file__).resolve().parents[1];os.chdir(r);server=ThreadingHTTPServer(('127.0.0.1',0),SimpleHTTPRequestHandler);threading.Thread(target=server.serve_forever,daemon=True).start();url=f'http://127.0.0.1:{server.server_port}/';errors=[];checks=[]
try:
 with sync_playwright() as p:
  browser=p.chromium.launch(headless=True,executable_path='/usr/bin/chromium',args=['--no-sandbox']);page=browser.new_page(viewport={'width':390,'height':844});page.on('pageerror',lambda e:errors.append(str(e)));page.goto(url,wait_until='domcontentloaded',timeout=15000);page.wait_for_timeout(300);nav=page.locator('nav [data-view]');count=nav.count();
  for i in range(count):
   name=nav.nth(i).get_attribute('data-view');nav.nth(i).click(timeout=5000);page.wait_for_timeout(30);checks.append({'route':name,'rendered':bool(page.locator('#app').inner_text().strip())})
  overflow=page.evaluate('document.documentElement.scrollWidth > window.innerWidth + 2');page.locator('[data-view="completion-v50"]').click();page.locator('#v50-export').count();browser.close()
  result={'status':'PASS' if not errors and all(x['rendered'] for x in checks) and not overflow else 'FAIL','navigation_checked':count,'route_results':checks,'page_errors':errors,'mobile_overflow':overflow}
except Exception as e:result={'status':'NOT_TESTED','reason':str(e),'partial_checks':checks,'page_errors':errors}
finally:server.shutdown()
(r/'reports'/'BROWSER-RESULTS.json').write_text(json.dumps(result,indent=2));print(json.dumps({k:v for k,v in result.items() if k!='route_results'},indent=2));raise SystemExit(0 if result['status']=='PASS' else 1)
