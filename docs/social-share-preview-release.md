# Social share preview — release checklist

## Implemented in this branch
- Homepage Open Graph and Twitter Card metadata in `index.html` and `player.html`.
- First-party JPEG assets: `images/share-home.jpg`, `images/share-article.jpg`, `images/share-forum.jpg`.
- Static regression tests in `tests/test_social_preview.py`.

## Important limitations
- The article and forum images are *fallback assets only*. No per-article or per-thread Open Graph metadata has been implemented.
- GitHub Pages serves static HTML. Most social crawlers do not run the site's JavaScript; changing meta tags in the browser cannot produce reliable per-content previews.
- The current homepage OG image URL points to the production hostname, so it will not serve the branch-only image until a public deployment publishes that asset. Validate on an isolated deployment before merging.
- Never generate publicly accessible preview HTML for drafts, rejected, private, or unreviewed submissions. Verify publication approval on the server before exposing metadata.
- Do not route content shares to the homepage as a substitute for a genuine per-content preview. Preserve existing reader URLs and navigation.
- The `player.html` canonical URL intentionally points to the homepage; verify sharing behavior of nested player routes.

## Before release
1. Run `python3 tests/test_social_preview.py` against this branch.
2. Deploy an isolated preview with the three image assets and HTML; check HTTP 200, image content type and dimensions, and inspect the *raw* HTML source for OG tags.
3. Test real crawler previews using Facebook Sharing Debugger, X Card and relevant messaging apps; allow for caching.
4. For article/forum sharing, document actual public URL patterns, publication state and read permissions. Implement server-rendered or pre-generated preview HTML only for approved public content; use appropriate fallback images.
5. Test navigation, login, permissions, localization, phone/tablet/desktop and image loading.
6. Merge only after review and verification.

No production rollout is authorized by this checklist.
