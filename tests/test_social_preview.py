#!/usr/bin/env python3
"""Static checks for social preview metadata. Run: python3 tests/test_social_preview.py"""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse
import unittest

ROOT = Path(__file__).resolve().parents[1]

class MetaParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.meta = []
        self.links = []
    def handle_starttag(self, tag, attrs):
        d = dict(attrs)
        if tag == 'meta': self.meta.append(d)
        if tag == 'link': self.links.append(d)
    def values(self, attr, value):
        return [m.get('content') for m in self.meta if m.get(attr) == value]

class SocialPreviewTests(unittest.TestCase):
    def test_metadata(self):
        for name in ('index.html', 'player.html'):
            with self.subTest(page=name):
                page = ROOT / name
                parser = MetaParser()
                parser.feed(page.read_text(encoding='utf-8'))
                for key in ('og:type','og:site_name','og:title','og:description','og:url','og:image','og:image:alt','og:image:width','og:image:height'):
                    vals = parser.values('property', key)
                    self.assertEqual(len(vals), 1, (name, key, vals))
                    self.assertTrue(vals[0].strip())
                self.assertEqual(parser.values('name','twitter:card'), ['summary_large_image'])
                self.assertEqual(parser.values('property','og:url'), ['https://lyy12788.com/'])
                image = parser.values('property','og:image')[0]
                self.assertEqual(urlparse(image).scheme, 'https')
                self.assertEqual(parser.values('property','og:image:width'), ['1200'])
                self.assertEqual(parser.values('property','og:image:height'), ['630'])
                canonical = [x.get('href') for x in parser.links if x.get('rel') == 'canonical']
                self.assertEqual(canonical, ['https://lyy12788.com/'])

if __name__ == '__main__':
    unittest.main()
