#!/bin/bash

pushd client
    npm install
    npm run build
popd

go build server/*.go