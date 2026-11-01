from pathlib import Path
import re,subprocess,json
p=Path(__file__).resolve().parents[1];html=(p/'index.html').read_text();sw=(p/'sw.js').read_text();scripts=re.findall(r'<script src="([^"]+)"',html);assert len(scripts)==len(set(scripts));assert all((p/x).is_file() for x in scripts);assert all(('"./'+x+'"') in sw for x in scripts);assert 'data-view="recovery-v29"' in html;assert 'recovery-v29.js' in scripts;assert 'clos-v2.9.0' in sw
for x in scripts:subprocess.run(['node','--check',str(p/x)],check=True,capture_output=True)
print(json.dumps({'result':'PASS','scripts_checked':len(scripts),'checks':['script syntax','script references','offline precache','new route','cache version']}))
