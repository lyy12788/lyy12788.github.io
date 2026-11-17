#!/usr/bin/env python3
"""Migrate 51 Google Drive M4A files to Cloudflare R2 and verify every size.
Run: python3 migration/migrate_sermons.py sermon-drive sermon-r2
Only copies; does not delete Drive files or alter website statistics.
"""
import argparse
import json
import pathlib
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent
MANIFEST = ROOT / "gospel-audio-r2-manifest.json"
DRIVE_FOLDER_ID = "1Ywedwtt6yVRyDAnFA4jUbRIFkOXfBJ0J"

def run(*args):
    return subprocess.run(["rclone", *args], text=True, capture_output=True)

def file_info(remote_path, *options):
    p = run("lsjson", remote_path, "--files-only", *options)
    if p.returncode:
        raise RuntimeError(p.stderr.strip()[-800:])
    return json.loads(p.stdout or "[]")

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("drive_remote")
    ap.add_argument("r2_remote")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()
    drive = args.drive_remote.rstrip(":") + ":"
    r2 = args.r2_remote.rstrip(":") + ":"
    items = json.loads(MANIFEST.read_text(encoding="utf-8"))["items"]
    if len(items) != 51:
        sys.exit("ERROR: manifest must contain exactly 51 items")
    root_opt = ("--drive-root-folder-id", DRIVE_FOLDER_ID)
    print("Checking source folder and matching Google Drive IDs...", flush=True)
    try:
        sources = file_info(drive, *root_opt)
    except Exception as e:
        sys.exit(f"Cannot list Google Drive folder: {e}")
    by_id = {f.get("ID"): f for f in sources}
    errors = []
    matched = []
    for item in items:
        source = by_id.get(item["drive_id"])
        if not source or int(source.get("Size", -1)) != int(item["source_size_bytes"]):
            errors.append(f"Source ID/size mismatch: {item['index']} {item['title']}")
        else:
            matched.append((item, source))
    if errors:
        print("\n".join(errors))
        sys.exit("Aborted: source verification failed; nothing uploaded.")
    print("All 51 source IDs and sizes verified.", flush=True)
    for i, (item, source) in enumerate(matched, 1):
        src = drive + source["Name"]
        dst = r2 + "lyy12788media/" + item["target_key"]
        expected = int(item["source_size_bytes"])
        print(f"[{i}/51] {source['Name']} -> {item['target_key']}", flush=True)
        if args.dry_run:
            continue
        try:
            existing = file_info(dst)
            if len(existing) == 1 and int(existing[0]["Size"]) == expected:
                print(f"  ALREADY VERIFIED: {expected} bytes", flush=True)
                continue
        except Exception:
            pass
        p = run("copyto", src, dst, *root_opt, "--s3-no-check-bucket",
                "--retries", "3", "--low-level-retries", "5")
        if p.returncode:
            errors.append(f"Upload failed: {item['index']} {p.stderr[-350:]}")
            print("  UPLOAD FAILED", flush=True)
            continue
        try:
            actual = file_info(dst)
            if len(actual) != 1 or int(actual[0]["Size"]) != expected:
                raise ValueError("R2 size mismatch")
            print(f"  VERIFIED: {expected} bytes", flush=True)
        except Exception as e:
            errors.append(f"Verification failed: {item['index']} {e}")
            print("  VERIFICATION FAILED", flush=True)
    print(f"Finished: {51-len(errors)}/51 verified; {len(errors)} errors", flush=True)
    for err in errors:
        print("ERROR:", err, flush=True)
    if errors:
        sys.exit(1)

if __name__ == "__main__":
    main()
