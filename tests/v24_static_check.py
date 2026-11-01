from pathlib import Path
import json,re,subprocess
r=Path(__file__).resolve().parent.parent
h=(r/'index.html').read_text()
scripts=re.findall(r'<script src="([^"]+)"',h)
assert all((r/p).is_file() for p in scripts)
assert len(scripts)==len(set(scripts))
raw=(r/'depth-v24-data.js').read_text().split('=',1)[1].strip().rstrip(';')
units=json.loads(raw)
assert len(units)==6 and len({u['id'] for u in units})==6
assert sum(len(u['questions']) for u in units)==30
for u in units:
 assert len(u['questions'])==5
 for q in u['questions']:
  assert len(q['choices'])==4 and 0<=q['answer']<4 and q['explanation']
assert 'depth-v24-data.js' in (r/'sw.js').read_text()
assert 'depth-v24-ui.js' in (r/'sw.js').read_text()
for js in r.glob('*.js'):
 p=subprocess.run(['node','--check',str(js)],capture_output=True,text=True)
 assert p.returncode==0,(js.name,p.stderr)
print('PASS: 6 units, 30 questions, scripts, cache, JS syntax')
