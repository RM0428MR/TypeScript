#!/bin/sh
set -e

tsc --noEmit --module nodenext --moduleResolution nodenext "$1"
echo "✅ 型エラーなし"
