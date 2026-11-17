# 51 sermon audio files: Google Drive → Cloudflare R2

The public website is not switched until every target file is verified. Original Drive files remain intact.

## One-time local Mac setup

Install rclone with Homebrew: `brew install rclone` (or install from rclone.org).

Run `rclone config` to create:
- `sermon-drive`: Google Drive remote, OAuth sign-in on **your own Mac**, and root_folder_id `1Ywedwtt6yVRyDAnFA4jUbRIFkOXfBJ0J`.
- `sermon-r2`: S3 storage, provider Cloudflare, Cloudflare account endpoint, access key and secret created in Cloudflare with permissions for bucket `lyy12788media` only. Enter keys in rclone on your Mac, **never in chat or GitHub**.

From repository root:
```sh
python3 migration/migrate_sermons.py sermon-drive sermon-r2 --dry-run
python3 migration/migrate_sermons.py sermon-drive sermon-r2
```
Each file is copied individually and checked against the source size. The script is rerunnable. Do not delete the Google Drive originals. Confirm that `https://media.lyy12788.com/audio/sermons/01-01.所赐之义.m4a` is publicly reachable only after the object is uploaded; this is an example target path, not a claim of availability.

**Important:** This manifest assumes original filenames are exactly `<title>.m4a`; if the dry run reports missing files, inspect the Drive folder with `rclone lsf sermon-drive:` and adjust source naming rather than deleting anything.

After transfer and verification, update the site to use R2 URLs and a single persistent audio element; preserve comments, likes, and play counts by retaining each Drive ID as the stable record key.
