#!/bin/bash
echo "########### Start build ###########"
echo "Uglify and pack local javascript..."
node deployment/r.js -o js/rudibieller/build.js
grunt
echo "Build project, copy all prepared files to build directory..."
echo "Build project, set paths and variables..."
echo "########### Build done ###########"