#!/usr/bin/env python3
"""
Upload docs/knowledge/ markdown files to OpenAI vector store.
Usage: OPENAI_API_KEY=sk-... python3 tools/upload-knowledge.py
"""

import os
import sys
from pathlib import Path

try:
    from openai import OpenAI
except ImportError:
    print("Installing openai...")
    os.system(f"{sys.executable} -m pip install openai -q")
    from openai import OpenAI

VECTOR_STORE_ID = "vs_69fd0b6ba2508191a0282f9c38416f41"
KNOWLEDGE_DIR = Path(__file__).parent.parent / "docs" / "knowledge"

api_key = os.environ.get("OPENAI_API_KEY")
if not api_key:
    print("Error: OPENAI_API_KEY not set.")
    print("Run: OPENAI_API_KEY=sk-... python3 tools/upload-knowledge.py")
    sys.exit(1)

client = OpenAI(api_key=api_key)

md_files = sorted(KNOWLEDGE_DIR.rglob("*.md"))

if not md_files:
    print(f"No markdown files found in {KNOWLEDGE_DIR}")
    sys.exit(1)

print(f"Found {len(md_files)} files to upload:\n")
for f in md_files:
    print(f"  {f.relative_to(KNOWLEDGE_DIR.parent.parent)}")

print(f"\nUploading to vector store: {VECTOR_STORE_ID}\n")

file_ids = []
for path in md_files:
    name = str(path.relative_to(KNOWLEDGE_DIR.parent.parent))
    with open(path, "rb") as f:
        response = client.files.create(file=f, purpose="assistants")
    file_ids.append(response.id)
    print(f"  ✓ {name} → {response.id}")

print(f"\nAdding {len(file_ids)} files to vector store...")

batch = client.beta.vector_stores.file_batches.create_and_poll(
    vector_store_id=VECTOR_STORE_ID,
    file_ids=file_ids,
)

print(f"\nDone. Status: {batch.status}")
print(f"File counts: {batch.file_counts}")
