#!/bin/bash
Green='\033[0;32m'
NC='\033[0m'
git checkout main
git add . && git commit -m "patching release" && git push
echo 'Patching release'
npm version patch

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')
echo -e "${Green}"'-- Version' $PACKAGE_VERSION 'tagged' "${NC}"

npm run build

echo -e "${Green}"'-- Building latest for prod' "${NC}"
docker build --no-cache -t ghcr.io/georgestav/georgestav:latest -f ./latest.Dockerfile .
echo -e "${Green}"'-- Pushing to github container repository' "${NC}"
docker push ghcr.io/georgestav/georgestav:latest