#!/bin/bash

pushd server
    # Use golangci-lint
    golangci-lint run

    # Otherwise, call these guys individually
    # golint *
    # go fmt *.go
    # go vet *.go
popd

pushd client
    npm run lint
popd