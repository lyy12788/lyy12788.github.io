# Social share preview — release checklist

## Implemented in this branch
- Homepage Open Graph and Twitter Card metadata in `index.html` and `player.html`.
- First-party JPEG assets: `images/share-home.jpg`, `images/share-article.jpg`, `images/share-forum.jpg`.
- Static regression tests in `tests/test_social_preview.py` covering page metadata, canonical URLs, JPEG signatures and actual 1200×630 dimensions.
- Section-level fallback metadata for `articles.html`, `member-articles.html` and `forum.html`.

## Important limitations
- The article and forum images are *fallback assets only*. No per-article or per-thread Open Graph metadata has been implemented.
- GitHub Pages serves static HTML. Most social crawlers do not run the site's JavaScript; changing meta tags in the browser cannot produce reliable per-content previews.
- All OG/Twitter image URLs point to `https://lyy12788.com/images/...`, **not** the isolated preview hostname. The preview's three JPEGs being reachable does not prove a crawler can fetch those production URLs. Do not mark social-card crawler verification as passed until the referenced URLs return public HTTP 200 with image/jpeg and a real crawler preview has been checked. A staging-only copy with staging-host image URLs can be used to validate before production, without changing canonical production metadata in this branch.
- Cloudflare Pages isolated preview uses a manual upload. Changes committed after the last upload are not automatically deployed; a fresh Preview deployment is needed to test the latest branch.
- Hash-fragment URLs (e.g. `#article=...`, `#post=...`) do not reach the server in HTTP requests, so they cannot yield per-content OG tags on GitHub Pages. Do not claim individual article or forum-post cards are implemented.
- Never generate publicly accessible preview HTML for drafts, rejected, private, or unreviewed submissions. Verify publication approval on the server before exposing metadata.
- Do not route content shares to the homepage as a substitute for a genuine per-content preview. Preserve existing reader URLs and navigation.
- The `player.html` canonical URL intentionally points to the homepage; verify sharing behavior of nested player routes.

## Before release
1. Run `python3 tests/test_social_preview.py` against this branch.
2. Deploy an isolated preview with the three image assets and HTML; check HTTP 200, image content type and dimensions, and inspect the *raw* HTML source for OG tags.
3. Inspect the raw HTML source on the **newly redeployed** isolated preview; verify OG title, description, image, URL and canonical. Check all referenced image URLs from the crawler's perspective, not only the preview-host image URLs. Test real crawler previews using Facebook Sharing Debugger and relevant messaging apps; allow for caching.
4. For article/forum sharing, document actual public URL patterns, publication state and read permissions. Implement server-rendered or pre-generated preview HTML only for approved public content; use appropriate fallback images.
5. Test navigation, login, permissions, localization, phone/tablet/desktop and image loading.
6. Merge only after review and verification.

No production rollout is authorized by this checklist.
