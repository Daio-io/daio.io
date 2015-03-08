#!/bin/sh
# ** This script is run from the package.json file using npm test **

#clean up all node running first
killall node

NODE_ENV=test node index.js &

gulp api-tests

#clean up to kill all node processes
killall node