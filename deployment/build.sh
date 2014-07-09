#!/bin/bash
echo -e "########### Start build ###########\n"
grunt
echo -e "Uglify and pack local javascript...\n"
node deployment/r.js -o js/rudibieller/build.js
echo -e "########### Build done ###########\n"