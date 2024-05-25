#!/bin/bash

pushd client
    npm install
    npm run build
popd

pushd client-mui-cra-ts
    npm install
    npm run build
popd

pushd server
    go build .
popd