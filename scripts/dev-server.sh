#!/bin/sh

cd `dirname $0`/..
echo Basedir = `pwd`

NODEMON=./node_modules/nodemon/bin/nodemon.js
WEBPACK=./node_modules/webpack/bin/webpack.js
SERVER=./src/server.js

$WEBPACK -w --progress --color &

$NODEMON -w $SERVER $SERVER

