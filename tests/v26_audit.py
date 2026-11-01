import json,re,pathlib,subprocess,sys
p=pathlib.Path(__file__).resolve().parents[1]
s=(p/'specialisation-v26-data.js').read_text().split('=',1)[1].rstrip().rstrip(';')
u=json.loads(s);assert len(u)==12
assert len(set(x['id'] for x in u))==12
assert len(set(x['subject'] for x in u))==4
for x in u:
 assert len(x['questions'])==3 and len(x['rubric'])==4
 for q in x['questions']:
  assert q['prompt'] and q['explanation'] and len(q['choices'])>=2 and 0<=q['answer']<len(q['choices'])
h=(p/'index.html').read_text();scripts=re.findall(r'<script src="([^"]+)"',h)
for name in scripts:assert (p/name).is_file(),name
for name in scripts:subprocess.run(['node','--check',str(p/name)],check=True,stdout=subprocess.DEVNULL)
assert 'specialisation-v26' in h
assert 'specialisation-v26-ui.js' in (p/'sw.js').read_text()
print(f'PASS: {len(u)} lessons, {len(scripts)} scripts, 4 specialisations, valid answer keys and references')
