#!/bin/sh
# Scope 定律检查（见 AGENTS.md）
# 主叙事（Hero / Thesis / Organism / Road / Ledger）不得出现产品名。
# 允许位置： #proof（展品）、#open（入口）、<footer>（入口）、JSON-LD（SEO 结构化数据）
# 用法: pnpm build && sh scripts/check-scope.sh
set -e
fail=0
for f in dist/index.html dist/zh/index.html; do
  [ -f "$f" ] || { echo "SKIP $f (not built)"; continue; }
  out=$(python3 - "$f" <<'PY'
import re,sys
h=open(sys.argv[1]).read()
rest=h
# 允许段：展品 / 入口 / 页脚 / 结构化数据
for pat in (r'<section[^>]*id="proof".*?</section>',
            r'<section[^>]*id="open".*?</section>',
            r'<footer.*?</footer>',
            r'<script[^>]*application/ld\+json[^>]*>.*?</script>'):
    for m in re.finditer(pat,h,re.S):
        rest=rest.replace(m.group(0),'')
hits=[(m.start(),m.group(0)) for m in re.finditer(r'Karpathy|Shift-Router|Obsidian',rest)]
if hits:
    for pos,_ in hits: print('  ...%s...'%re.sub(r'\s+',' ',rest[max(0,pos-70):pos+30]))
    print(len(hits))
else:
    print(0)
PY
)
  n=$(echo "$out" | tail -1)
  if [ "$n" != "0" ]; then
    echo "FAIL $f — 产品名出现在主叙事 ($n 处)"; echo "$out" | head -20; fail=1
  else
    echo "PASS $f"
  fi
done
exit $fail
