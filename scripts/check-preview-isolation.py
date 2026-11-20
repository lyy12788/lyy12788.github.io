#!/usr/bin/env python3
"""Read-only preview isolation checks; run: python3 scripts/check-preview-isolation.py"""
from pathlib import Path
import re, sys
root=Path(__file__).resolve().parents[1]
prod="mkchupvmervxkskvjyhz"
test="bjlzeqfpyynavvcwmyez"
errors=[]
pages=[]
for p in root.rglob("*"):
    if not p.is_file() or p.suffix.lower() not in {".html",".js",".mjs"} or ".git" in p.parts: continue
    if "node_modules" in p.parts: continue
    text=p.read_text(encoding="utf-8",errors="replace")
    pages.append(p)
    if prod in text: errors.append(f"PRODUCTION SUPABASE REF: {p.relative_to(root)}")
    if re.search(r"sb_secret_|service_role",text,re.I): errors.append(f"CHECK SENSITIVE TOKEN: {p.relative_to(root)}")
for name in ("index.html","forum.html","member-articles.html","gospel.html"):
    s=(root/name).read_text(encoding="utf-8")
    if test not in s: errors.append(f"TEST SUPABASE MISSING: {name}")
if not (root/"site-i18n.js").exists(): errors.append("MISSING site-i18n.js")
print(f"Checked {len(pages)} HTML/JS files; {len(errors)} issue(s).")
for e in errors: print("FAIL:",e)
sys.exit(1 if errors else 0)
