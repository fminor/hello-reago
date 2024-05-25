#!/bin/bash

if [ -z "$1" ]; then
    echo "Pass 'dev' arg for live reload."
    ./server/server
elif [ "$1" == dev ]; then
    echo "Use 'http://localhost:3000' for live reload"
    pushd client
        npm run start
    popd
fi
