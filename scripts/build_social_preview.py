#!/usr/bin/env python3
"""Build an isolated Cloudflare Pages preview ZIP without changing production OG tags."""
import argparse
import html
from html.parser import HTMLParser
from pathlib import Path
import re
import shutil
import subprocess
import tempfile
import zipfile

PAGES = ("index.html", "player.html", "articles.html", "member-articles.html", "forum.html")
IMAGES = ("share-home.jpg", "share-article.jpg", "share-forum.jpg")
PRODUCTION = "https://lyy12788.com"
PREVIEW = "https://social-share25.lyy12788-isolated-preview.pages.dev"

def build(output: Path):
    root = Path(__file__).resolve().parents[1]
    files = subprocess.check_output(["git", "ls-files", "-z"], cwd=root).decode().split("\0")
    with tempfile.TemporaryDirectory() as temp:
        dest = Path(temp)
        for relative in filter(None, files):
            source = root / relative
            if not source.is_file() or relative.startswith(".git/"):
                continue
            target = dest / relative
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(source, target)
        for name in PAGES:
            page = dest / name
            source = page.read_text(encoding="utf-8")
            # Only metadata URL attributes are changed. Navigation, scripts, CSS and API endpoints remain untouched.
            for attr in ("og:url", "og:image", "twitter:image"):
                pattern = r'(<meta\\s+(?:property|name)="' + re.escape(attr) + r'"\\s+content=")([^"]+)(")'
                source, count = re.subn(pattern, lambda m: m.group(1) + m.group(2).replace(PRODUCTION, PREVIEW, 1) + m.group(3), source)
                if count != 1:
                    raise ValueError(f"{name}: expected exactly one {attr} tag, found {count}")
            source, count = re.subn(
                r'(<link\\s+rel="canonical"\\s+href=")([^"]+)(")',
                lambda m: m.group(1) + m.group(2).replace(PRODUCTION, PREVIEW, 1) + m.group(3),
                source,
            )
            if count != 1:
                raise ValueError(f"{name}: expected exactly one canonical URL")
            page.write_text(source, encoding="utf-8")
            for attr in ("og:url", "og:image", "twitter:image"):
                match = re.search(r'<meta\\s+(?:property|name)="' + re.escape(attr) + r'"\\s+content="([^"]+)"', source)
                if not match or not match.group(1).startswith(PREVIEW):
                    raise ValueError(f"{name}: {attr} must point to isolated preview")
            if 'href="' + PREVIEW not in source:
                raise ValueError(f"{name}: canonical must point to isolated preview")
        for name in IMAGES:
            if not (dest / "images" / name).is_file():
                raise ValueError(f"Missing {name}")
        output.parent.mkdir(parents=True, exist_ok=True)
        with zipfile.ZipFile(output, "w", zipfile.ZIP_DEFLATED) as z:
            for path in sorted(dest.rglob("*")):
                if path.is_file():
                    z.write(path, path.relative_to(dest).as_posix())
    with zipfile.ZipFile(output) as z:
        names = z.namelist()
        if "index.html" not in names or "images/share-home.jpg" not in names:
            raise ValueError("ZIP root structure invalid")
    print(f"Preview ZIP ready: {output}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path, default=Path("social-share25-preview.zip"))
    build(parser.parse_args().output)
