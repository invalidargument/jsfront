#!/bin/bash
echo "########### Start build ###########"
grunt replace $1
#node deployment/r.js -o js/build.js
grunt $1