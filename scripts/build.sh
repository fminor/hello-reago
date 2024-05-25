#!/bin/bash

pushd client
    npm install
    npm run build
popd

pushd server
    go build .
popd