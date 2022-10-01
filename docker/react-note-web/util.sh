#!/bin/sh

set -u

# コンテナのbuildを行う
# - docker buildx install
# @return void
build()
{
    docker build $* "$(dirname "$0")"
}


#
# コンテナのbuildを行う(キャッシュなし)
#
buildNoCache()
{
    build --no-cache --pull
}


[ "$#" -ge 1 ]
$1 "${2:-""}"
exit 0
