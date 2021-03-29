#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# prepare gh docs
rm -rf docs

mv dist docs

