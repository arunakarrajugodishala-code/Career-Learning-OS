from pathlib import Path
import re,json,subprocess,sys
root=Path(__file__).resolve().parents[1]
s=(root/'index.html').read_text()
scripts=re.findall(r'<script src="([^"]+)"',s)
assert len(scripts)==len(set(scripts)), 'Duplicate scripts'
for x in scripts: assert (root/x).is_file(),f'Missing script {x}'
cache=(root/'sw.js').read_text(); paths=json.loads(re.search(r'const FILES=(\[.*?\]);',cache).group(1))
for x in paths: assert (root/x.removeprefix('./')).exists(),f'Missing offline asset {x}'
for x in ['technical-v27-data.js','technical-v27-ui.js']: assert x in scripts and './'+x in paths
for x in root.glob('*.js'): subprocess.run(['node','--check',str(x)],check=True,capture_output=True)
print('PASS: scripts, offline files, new integration, JS syntax')
