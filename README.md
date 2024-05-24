# hello-reago

"Hello, ReaGo!" is a **Rea**ct front-end served by a **Go** back-end server.

## Overview

The client displays the message "Hello, ReaGo!", a text field, and a "Submit" button.  When text is entered into the text field and submitted, it replaces "ReaGo" in the message.

## Quick Start

1. Start the development container
2. Compile and run the server:
    ```bash
    ./build.sh
    ./run.sh
    ```
3. Go to `http://localhost:8080` in your browser.

## Objectives

| Status | Step | Description
|--------|------|-------------
| Done   | 1. | Create container with golang and node.js for development
| Started | 2. | Configure linting & visual studio code plugins
| | | Do a React+Go tutorial
| | 3. | Define the API between the client and server
| | 4. | Write the server logic in Go and write Go unit tests (report coverage)
| | 5. | Create static React app with unit tests
| | 6. | Finish "Hello, ReaGo!" with configurable addressee.

## Dependencies

* [golang](https://golang.org/)
* [node.js](https://nodejs.org/) with [npm](https://www.npmjs.com/) to build the application bundle at compile time

### Developer Plugins

* streetsidesoftware.code-spell-checker, prevent myself from checking in spelling errors
* golang.go, golang support
* dbaeumer.vscode-eslint, typescript linting
* DavidAnson.vscode-markdownlint, .md linting
* eamodio.gitlens, git extension

### VS Code settings

* Format on save: editor.formatOnSave
* Auto-save: files.autoSave

## References

* [Building Scalable Web Applications with React and Golang: Best Practices](https://www.dhiwise.com/post/building-scalable-web-applications-with-react-and-golang)
* [Gazelle](https://github.com/kilpatty/Gazelle)
