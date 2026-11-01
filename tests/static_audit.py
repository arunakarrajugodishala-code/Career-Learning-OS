from pathlib import Path
from html.parser import HTMLParser
import re,json,subprocess,zipfile
r=Path('/mnt/data/clos-final-audit')
class Parser(HTMLParser):
 def __init__(self):super().__init__();self.scripts=[];self.buttons=[];self.ids=[];self.links=[]
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='script' and 'src'in a:self.scripts.append(a['src'])
  if tag=='button':self.buttons.append(a)
  if 'id'in a:self.ids.append(a['id'])
  if tag=='link':self.links.append(a)
p=Parser();p.feed((r/'index.html').read_text())
checks=[]
def add(name,ok,detail=''):checks.append({'check':name,'status':'PASS' if ok else 'FAIL','detail':detail})
add('All script files exist',all((r/s).is_file() for s in p.scripts),str(len(p.scripts))+' scripts')
add('No duplicate script imports',len(p.scripts)==len(set(p.scripts)))
add('All HTML IDs unique',len(p.ids)==len(set(p.ids)))
add('Navigation views unique',len([x.get('data-view') for x in p.buttons if x.get('data-view')])==len(set(x.get('data-view') for x in p.buttons if x.get('data-view'))))
add('All buttons have view or supported ID',all(x.get('data-view') or x.get('id') for x in p.buttons),'Static HTML buttons only; runtime buttons require browser testing')
js=list(r.glob('*.js'))
bad=[]
for f in js:
 result=subprocess.run(['node','--check',str(f)],capture_output=True,text=True)
 if result.returncode:bad.append({'file':f.name,'error':result.stderr[:500]})
add('All JavaScript files syntax valid',not bad,str(len(js))+' files')
manifest=json.loads((r/'manifest.webmanifest').read_text());add('Install icons present',all((r/i['src']).is_file() for i in manifest.get('icons',[])) and len(manifest.get('icons',[]))>=2)
sw=(r/'sw.js').read_text();entries=json.loads(re.search(r'const FILES=(\[.*?\]);',sw).group(1));missing=[x for x in entries if not (r/x[2:]).is_file() and x!='./'];add('Service worker cache paths exist',not missing,str(len(entries))+' cache entries')
add('Offline shell included','./index.html' in entries and './app.js' in entries)
add('Progress key unchanged',"KEY='clos-progress-v1'" in (r/'app.js').read_text())
add('QA view integrated','release-qa.js' in p.scripts and any(x.get('data-view')=='final-qa' for x in p.buttons))
add('ZIP package assets remain available',len(list((r/'labs').glob('*')))>=10)
report={'release':'2.1-release-candidate','structuralChecks':checks,'passed':sum(x['status']=='PASS' for x in checks),'failed':sum(x['status']=='FAIL' for x in checks),'javascriptErrors':bad,'missingCacheAssets':missing,'browserAndDeviceTests':'NOT_TESTED: browser networking blocked by environment','releaseGate':'BLOCKED'}
(r/'STATIC-AUDIT.json').write_text(json.dumps(report,indent=2));print(json.dumps(report,indent=2))
