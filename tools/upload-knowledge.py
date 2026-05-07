#!/usr/bin/env python3
"""
Upload docs/knowledge/ markdown files to OpenAI vector store.
Usage: OPENAI_API_KEY=sk-... python3 tools/upload-knowledge.py

Removes existing files from the vector store before uploading,
so re-runs never create duplicates.
"""

import os
import sys
import json
import urllib.request
from pathlib import Path

VECTOR_STORE_ID = "vs_69fd0b6ba2508191a0282f9c38416f41"
KNOWLEDGE_DIR = Path(__file__).parent.parent / "docs" / "knowledge"
BASE_URL = "https://api.openai.com/v1"

api_key = os.environ.get("OPENAI_API_KEY")
if not api_key:
    print("Error: OPENAI_API_KEY not set.")
    print("Run: OPENAI_API_KEY=sk-... python3 tools/upload-knowledge.py")
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


def delete_existing_files():
    existing = []
    after = None
    while True:
        url = f"/vector_stores/{VECTOR_STORE_ID}/files?limit=100"
        if after:
            url += f"&after={after}"
        result = api("GET", url)
        batch = result.get("data", [])
        existing.extend(batch)
        if not result.get("has_more"):
            break
        after = batch[-1]["id"]
    if not existing:
        return
    print(f"Removing {len(existing)} existing files from vector store...")
    for f in existing:
        api("DELETE", f"/vector_stores/{VECTOR_STORE_ID}/files/{f['id']}", ignore_404=True)
        api("DELETE", f"/files/{f['id']}", ignore_404=True)
        print(f"  ✗ deleted {f['id']}")


def upload_files(md_files):
    file_ids = []
    for path in md_files:
        name = str(path.relative_to(KNOWLEDGE_DIR.parent.parent))
        boundary = "----boundary"
        with open(path, "rb") as f:
            content = f.read()
        body = (
            f"--{boundary}\r\n"
            f'Content-Disposition: form-data; name="purpose"\r\n\r\nassistants\r\n'
            f"--{boundary}\r\n"
            f'Content-Disposition: form-data; name="file"; filename="{path.name}"\r\n'
            f"Content-Type: text/markdown\r\n\r\n"
        ).encode() + content + f"\r\n--{boundary}--\r\n".encode()

        req = urllib.request.Request(
            f"{BASE_URL}/files",
            data=body,
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": f"multipart/form-data; boundary={boundary}",
            },
            method="POST",
        )
        with urllib.request.urlopen(req) as resp:
            result = json.loads(resp.read())
        file_ids.append(result["id"])
        print(f"  ✓ {name} → {result['id']}")
    return file_ids


md_files = sorted(KNOWLEDGE_DIR.rglob("*.md"))
if not md_files:
    print(f"No markdown files found in {KNOWLEDGE_DIR}")
    sys.exit(1)

print(f"Found {len(md_files)} files:\n")
for f in md_files:
    print(f"  {f.relative_to(KNOWLEDGE_DIR.parent.parent)}")

print()
delete_existing_files()

print(f"\nUploading to vector store: {VECTOR_STORE_ID}\n")
file_ids = upload_files(md_files)

print(f"\nAdding {len(file_ids)} files to vector store...")
result = api("POST", f"/vector_stores/{VECTOR_STORE_ID}/file_batches", {"file_ids": file_ids})
print(f"\nDone. Status: {result['status']} · Total: {result['file_counts']['total']}")
