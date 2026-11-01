from pathlib import Path
import re,subprocess,json,sys
r=Path(__file__).resolve().parents[1]; h=(r/'index.html').read_text(); scripts=re.findall(r'<script src="([^"]+)"',h); routes=re.findall(r'data-view="([^"]+)"',h); cache=(r/'sw.js').read_text(); files=json.loads(re.search(r'const FILES=(\[.*?\]);',cache).group(1)); errors=[]
for s in scripts:
 if not (r/s).is_file():errors.append('Missing script '+s)
 else:
  x=subprocess.run(['node','--check',str(r/s)],capture_output=True,text=True)
  if x.returncode:errors.append('Syntax '+s+': '+x.stderr[:120])
for a in files:
 if not (r/a.removeprefix('./')).exists() and a!='./':errors.append('Missing offline asset '+a)
if len(routes)!=len(set(routes)):errors.append('Duplicate navigation IDs')
result={'status':'PASS' if not errors else 'FAIL','scripts':len(scripts),'routes':len(routes),'offline_assets':len(files),'errors':errors}; (r/'reports'/'STATIC-RESULTS.json').write_text(json.dumps(result,indent=2));print(json.dumps(result,indent=2));sys.exit(bool(errors))
