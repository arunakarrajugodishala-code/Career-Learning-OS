#!/usr/bin/env python3
"""Run local real-browser checks; needs pip install playwright and Chromium installed.
Does not send or modify any learning data. Uses a fresh temporary browser profile.
"""
import json, pathlib, threading, http.server, socketserver, sys, time
from playwright.sync_api import sync_playwright
ROOT=pathlib.Path(__file__).resolve().parents[1]
class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self,*args,**kwargs):super().__init__(*args,directory=str(ROOT),**kwargs)
    def log_message(self,*args):pass
class Server(socketserver.ThreadingTCPServer):allow_reuse_address=True
results=[]; errors=[]
def record(name,ok,detail=''):results.append({'test':name,'status':'PASS' if ok else 'FAIL','detail':str(detail)[:300]})
def main():
    with Server(('127.0.0.1',0),Handler) as server:
        threading.Thread(target=server.serve_forever,daemon=True).start()
        url=f'http://127.0.0.1:{server.server_address[1]}/'
        with sync_playwright() as p:
            browser=p.chromium.launch(headless=True)
            for label,width,height in [('desktop',1280,800),('mobile',390,844)]:
                page=browser.new_page(viewport={'width':width,'height':height})
                page.on('pageerror',lambda error:errors.append(str(error)))
                try:
                    page.goto(url,wait_until='load',timeout=20000)
                    record(label+' page load',bool(page.locator('#app').count()))
                    nav=page.locator('nav button[data-view]'); count=nav.count()
                    record(label+' navigation available',count>=40,f'{count} buttons')
                    for i in range(count):
                        btn=nav.nth(i); view=btn.get_attribute('data-view')
                        try:
                            btn.click(timeout=3500)
                            record(label+' route '+view,bool(page.locator('#app').inner_text(timeout=3500).strip()))
                        except Exception as e:record(label+' route '+view,False,e)
                    record(label+' horizontal overflow',page.evaluate('document.documentElement.scrollWidth<=innerWidth+2'))
                    record(label+' unique nav targets',page.evaluate("(()=>{const a=[...document.querySelectorAll('nav button[data-view]')].map(x=>x.dataset.view);return new Set(a).size===a.length})()"))
                    record(label+' no JS errors',not errors,errors[-3:])
                except Exception as e:record(label+' browser run',False,e)
                page.close()
            browser.close()
    report={'browser':'Chromium via Playwright','note':'Run on a machine allowing localhost access; a pass is not a substitute for real iPhone Safari testing.','results':results,'javascriptErrors':errors,'passed':sum(x['status']=='PASS' for x in results),'failed':sum(x['status']=='FAIL' for x in results)}
    dest=ROOT/'reports'/'V5015-BROWSER-RESULTS.json';dest.parent.mkdir(exist_ok=True);dest.write_text(json.dumps(report,indent=2))
    print(f"Passed {report['passed']}, failed {report['failed']}. Report: {dest}")
    return 1 if report['failed'] else 0
if __name__=='__main__':sys.exit(main())
