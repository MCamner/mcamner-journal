#!/usr/bin/env python3
"""
Remove all files from the vector store and from OpenAI storage.
Usage: OPENAI_API_KEY=sk-... python3 tools/cleanup-vector-store.py

Run this before upload-knowledge.py if you see stale or nameless files in the store.
"""

import os
import sys
import json
import urllib.request

VECTOR_STORE_ID = "vs_69fd0b6ba2508191a0282f9c38416f41"
BASE_URL = "https://api.openai.com/v1"

api_key = os.environ.get("OPENAI_API_KEY")
if not api_key:
    print("Error: OPENAI_API_KEY not set.")
    print("Run: OPENAI_API_KEY=sk-... python3 tools/cleanup-vector-store.py")
    sys.exit(1)

HEADERS = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json",
    "OpenAI-Beta": "assistants=v2",
}


def api(method, path, data=None, ignore_404=False):
    req = urllib.request.Request(
        f"{BASE_URL}{path}",
        data=json.dumps(data).encode() if data else None,
        headers=HEADERS,
        method=method,
    )
    try:
        with urllib.request.urlopen(req) as resp:
            body = resp.read()
            return json.loads(body) if body else {}
    except urllib.error.HTTPError as e:
        if ignore_404 and e.code == 404:
            return {}
        raise


def collect_all_files():
    files = []
    after = None
    while True:
        url = f"/vector_stores/{VECTOR_STORE_ID}/files?limit=100"
        if after:
            url += f"&after={after}"
        result = api("GET", url)
        batch = result.get("data", [])
        files.extend(batch)
        if not result.get("has_more") or not batch:
            break
        after = batch[-1]["id"]
    return files


files = collect_all_files()

if not files:
    print("Vector store is already empty.")
    sys.exit(0)

print(f"Found {len(files)} files in vector store. Removing...\n")

for f in files:
    fid = f["id"]
    fname = f.get("filename") or f.get("id") or "(no name)"
    api("DELETE", f"/vector_stores/{VECTOR_STORE_ID}/files/{fid}", ignore_404=True)
    api("DELETE", f"/files/{fid}", ignore_404=True)
    print(f"  ✗ {fname} ({fid})")

print(f"\nDone. Removed {len(files)} files.")
print("Run upload-knowledge.py to re-populate the store.")
