"""Audit: reconcile translate-libevent.js CN strings with the generated HTML pages."""
import re, sys, os, html

sys.stdout.reconfigure(encoding='utf-8')
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

src = open('src/translate-libevent.js', encoding='utf-8').read()

# Split into doTranslate('./public/X.html', [ ... ]) blocks, including commented-out ones
blocks = re.findall(r'(//\s*)?doTranslate\(\s*[\'"]\./public/([^\'"]+)[\'"]\s*,\s*\[(.*?)\n\s*\]\s*\)', src, re.S)
print('blocks found:', len(blocks))

SQ = '\x27'
strpat = (r'(?:"((?:[^"\\]|\\.)*)"|' + SQ + r'((?:[^' + SQ + r'\\]|\\.)*)' + SQ + r'|`((?:[^`]|\\`)*)`)')
item_re = re.compile(r'EN:\s*' + strpat + r'\s*,\s*CN:\s*' + strpat, re.S)

total_missing = 0
for commented, fname, body in blocks:
    path = fname
    if not os.path.exists(path):
        print('!! missing file', path); continue
    h = open(path, encoding='utf-8').read()
    flat = re.sub(r'\s+', '', re.sub(r'<[^>]+>', '', html.unescape(h)))
    items = item_re.findall(body)
    miss = []
    for g in items:
        cn = g[3] or g[4] or g[5] or ''
        if not cn:
            continue
        # the JS keeps HTML entities (&lt; ...); unescape so both sides compare alike
        key = html.unescape(cn)
        key = re.sub(r'<br\s*/?>|<[^>]+>', '', key)
        key = re.sub(r'\s+', '', key)[:40]
        if key and key not in flat:
            miss.append(cn[:110])
    flag = ' (COMMENTED-OUT)' if commented else ''
    total_missing += len(miss)
    print(f'--- {path}{flag}  items={len(items)}  NOT-IN-HTML={len(miss)}')
    for m in miss:
        print('      *', m)
print('TOTAL not-yet-applied translation entries:', total_missing)
