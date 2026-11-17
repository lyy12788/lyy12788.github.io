#!/usr/bin/env python3
"""Copy 51 Google Drive sermon audio files to Cloudflare R2 using local rclone credentials.
Usage: python3 migration/migrate_sermons.py DRIVE_REMOTE R2_REMOTE [--dry-run]
DRIVE_REMOTE must have root_folder_id=1Ywedwtt6yVRyDAnFA4jUbRIFkOXfBJ0J.
R2_REMOTE must be configured as an S3-compatible Cloudflare R2 remote.
Never commit rclone.conf, access keys, or downloaded audio files.
"""
import argparse, json, pathlib, subprocess, sys
ROOT=pathlib.Path(__file__).resolve().parent
MANIFEST=ROOT/'gospel-audio-r2-manifest.json'
def run(*args):
    return subprocess.run(['rclone',*args],text=True,stdout=subprocess.PIPE,stderr=subprocess.PIPE)
def main():
    ap=argparse.ArgumentParser()
    ap.add_argument('drive_remote',help='rclone Google Drive remote rooted at the sermon folder')
    ap.add_argument('r2_remote',help='rclone Cloudflare R2 S3 remote')
    ap.add_argument('--dry-run',action='store_true')
    args=ap.parse_args()
    data=json.loads(MANIFEST.read_text(encoding='utf-8'))
    items=data['items']
    if len(items)!=51:sys.exit('Expected exactly 51 entries')
    errors=[]
    for i,item in enumerate(items,1):
        source_name=item['title']+'.m4a'
        source=f"{args.drive_remote.rstrip(':')}:{source_name}"
        dest=f"{args.r2_remote.rstrip(':')}:lyy12788media/{item['target_key']}"
        print(f'[{i}/{len(items)}] {source_name}',flush=True)
        check=run('lsjson',source,'--files-only')
        if check.returncode or not json.loads(check.stdout or '[]'):
            print('  SOURCE NOT FOUND; skipping',flush=True);errors.append(source_name);continue
        if args.dry_run:print('  DRY RUN:',dest);continue
        result=run('copyto',source,dest,'--retries','3','--low-level-retries','5','--progress')
        if result.returncode:
            print('  COPY FAILED:',result.stderr[-500:],flush=True);errors.append(source_name);continue
        verify=run('lsjson',dest,'--files-only')
        try:
            files=json.loads(verify.stdout)
            ok=verify.returncode==0 and len(files)==1 and int(files[0]['Size'])==int(item['source_size_bytes'])
        except Exception:ok=False
        if not ok:
            print('  SIZE VERIFICATION FAILED',flush=True);errors.append(source_name)
        else:print('  VERIFIED:',dest,flush=True)
    print('Completed. Errors:',len(errors),flush=True)
    for name in errors:print(' -',name)
    if errors:sys.exit(1)
if __name__=='__main__':main()
