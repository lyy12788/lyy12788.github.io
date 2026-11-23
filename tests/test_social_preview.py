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

def jpeg_dimensions(data):
    """Read JPEG SOF dimensions without third-party dependencies."""
    if not data.startswith(bytes.fromhex('ffd8')):
        raise ValueError('Not a JPEG')
    i = 2
    while i < len(data):
        if data[i] != 0xff:
            raise ValueError('Invalid JPEG marker')
        while i < len(data) and data[i] == 0xff:
            i += 1
        if i >= len(data):
            break
        marker = data[i]
        i += 1
        if marker in (0xd8, 0xd9) or 0xd0 <= marker <= 0xd7 or marker == 0x01:
            continue
        if i + 2 > len(data):
            break
        length = int.from_bytes(data[i:i+2], 'big')
        if length < 2 or i + length > len(data):
            raise ValueError('Invalid JPEG segment')
        if marker in (0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf):
            if length < 7:
                raise ValueError('Invalid JPEG frame')
            return (int.from_bytes(data[i+5:i+7], 'big'),
                    int.from_bytes(data[i+3:i+5], 'big'))
        i += length
    raise ValueError('Missing JPEG dimensions')

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
                self.assertEqual(urlparse(image).netloc, 'lyy12788.com')
                self.assertEqual(urlparse(image).path, '/images/share-home.jpg')
                self.assertEqual(parser.values('name','twitter:image'), [image])
                self.assertEqual(parser.values('property','og:image:width'), ['1200'])
                self.assertEqual(parser.values('property','og:image:height'), ['630'])
                canonical = [x.get('href') for x in parser.links if x.get('rel') == 'canonical']
                self.assertEqual(canonical, ['https://lyy12788.com/'])

    def test_section_fallback_previews(self):
        for name, image_name in (
            ('member-articles.html', 'share-article.jpg'),
            ('articles.html', 'share-article.jpg'),
            ('forum.html', 'share-forum.jpg'),
        ):
            with self.subTest(page=name):
                parser = MetaParser()
                parser.feed((ROOT / name).read_text(encoding='utf-8'))
                self.assertEqual(parser.values('property', 'og:image'),
                                 ['https://lyy12788.com/images/' + image_name])
                self.assertEqual(parser.values('name', 'twitter:image'),
                                 parser.values('property', 'og:image'))
                self.assertEqual(parser.values('property', 'og:url'),
                                 ['https://lyy12788.com/' + name])
                self.assertEqual(
                    [x.get('href') for x in parser.links if x.get('rel') == 'canonical'],
                    ['https://lyy12788.com/' + name])
                self.assertEqual(parser.values('name', 'twitter:card'),
                                 ['summary_large_image'])
                for key in ('og:title', 'og:description', 'og:image:alt'):
                    self.assertEqual(len(parser.values('property', key)), 1)

    def test_default_share_images(self):
        for filename in ('share-home.jpg', 'share-article.jpg', 'share-forum.jpg'):
            with self.subTest(image=filename):
                path = ROOT / 'images' / filename
                self.assertTrue(path.is_file(), str(path))
                data = path.read_bytes()
                self.assertTrue(data.startswith(bytes.fromhex('ffd8ff')), filename)
                self.assertTrue(data.endswith(bytes.fromhex('ffd9')), filename)
                self.assertLess(len(data), 1024 * 1024, filename)
                self.assertEqual(jpeg_dimensions(data), (1200, 630), filename)

if __name__ == '__main__':
    unittest.main()
