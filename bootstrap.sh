#!/usr/bin/env bash

curl -fsSL https://get.pnpm.io/install.sh | sh -

for d in $(ls -d */); do
  [[ "$d" = "node_modules/" ]] && continue
	[[ "$d" = "docs/" ]] && continue
  pushd $d
  rm -rf node_modules
  pnpm i
  popd
done