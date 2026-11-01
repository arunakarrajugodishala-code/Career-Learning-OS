from pathlib import Path
import re,subprocess,json,sys
p=Path(__file__).resolve().parents[1]
html=(p/'index.html').read_text();sw=(p/'sw.js').read_text()
checks=[]
def test(name,condition):checks.append({'name':name,'status':'PASS' if condition else 'FAIL'})
scripts=re.findall(r'<script\s+src="([^"]+)"',html)
routes=re.findall(r'<button[^>]*data-view="([^"]+)"',html)
test('HTML has one application root',html.count('id="app"')==1)
test('All scripts exist',bool(scripts) and all((p/x).is_file() for x in scripts))
test('Script references unique',len(scripts)==len(set(scripts)))
test('Navigation routes unique',len(routes)==len(set(routes)))
test('Release readiness page registered','readiness-v30' in routes and 'readiness-v30.js' in scripts)
test('Offline precache includes scripts',all(('"./'+x+'"') in sw for x in scripts))
test('Offline precache includes index and manifest',all(('"./'+x+'"') in sw for x in ('index.html','manifest.webmanifest')))
test('Offline precache files exist',all((p/x).exists() for x in re.findall(r'"\./([^"\n]+)"',sw)))
test('PWA icon assets exist',all((p/x).is_file() for x in ('icons/icon-192.png','icons/icon-512.png')))
test('Release status discloses limitations',(p/'RELEASE-STATUS.md').is_file() and 'BLOCKED' in (p/'RELEASE-STATUS.md').read_text())
failed_syntax=[]
for f in p.glob('*.js'):
 if subprocess.run(['node','--check',str(f)],capture_output=True).returncode:failed_syntax.append(f.name)
test('JavaScript syntax',not failed_syntax)
result={'version':'3.0','status':'PASS' if all(x['status']=='PASS' for x in checks) else 'FAIL','checks':checks,'scripts':len(scripts),'routes':len(routes),'js_files':len(list(p.glob('*.js'))),'syntax_failures':failed_syntax,'browser':'NOT_TESTED','curriculum_accuracy':'NOT_REVIEWED','release':'BLOCKED'}
(p/'V30-STATIC-AUDIT.json').write_text(json.dumps(result,indent=2)+'\n')
print(json.dumps(result,indent=2));sys.exit(0 if result['status']=='PASS' else 1)
