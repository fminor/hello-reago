# hello-reago

"Hello, ReaGo!" is a **Rea**ct front-end served by a **Go** back-end server.

## Overview

The client displays the message "Hello, ReaGo!", a text field, and a "Submit" button.  When text is entered into the text field and submitted, it replaces "ReaGo" in the message.

## Quick Start

1. Start the development container
2. Compile and run the server:

    ```bash
    ./scripts/build.sh
    ./scripts/run.sh
    ```

3. Go to <http://localhost:8080> in your browser to see the React front-end
4. Use `./test.sh` to verify GET/POST albums is still working.
5. Go to <http://localhost:8080/docs> to see the OpenAPI documentation.
6. Scan for issues using `./scripts/scan.sh`:

### Live reload

In addition to compiling & running the server, run with live reload

```bash
./scripts/run.sh dev
```

Go to <http://localhost:3000>

## Objectives

| Status | Step | Description
|--------|------|-------------
| Done   | 1. | Create container with golang and node.js for development
| Started | | Learn the tools
| Done | | - Do a React+Go tutorial
| Done | | - Tutorial: Albums API
| | | - Use Albums REST API in React app
| | | - Use MUI in React App
| Done | 2. | Configure linting & visual studio code plugins
| | 3. | Define the API between the client and server
| | 4. | Write the server logic in Go and write Go unit tests (report coverage)
| | 5. | Create static React app with unit tests
| | 6. | Finish "Hello, ReaGo!" with configurable addressee.

## Dependencies

* [golang](https://golang.org/)
* [Node.js](https://nodejs.org/) & [TypeScript](https://www.typescriptlang.org/) with [npm](https://www.npmjs.com/) to build the application bundle at compile time

### Developer Plugins

* streetsidesoftware.code-spell-checker, prevent myself from checking in spelling errors
* golang.go, golang support
* dbaeumer.vscode-eslint, typescript linting
* DavidAnson.vscode-markdownlint, .md linting
* eamodio.gitlens, git extension
* 42Crunch.vscode-openapi, OpenAPI (Swagger) editor

### VS Code settings

* Format on save: editor.formatOnSave
* Auto-save: files.autoSave

## References

### Languages

* [Go Programming Language](https://go.dev/learn/)
* [React](https://react.dev/learn) with [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html)
* [Material UI](https://mui.com/material-ui/getting-started/learn/)
* OpenAPI

### Tutorials

* [Building Scalable Web Applications with React and Golang: Best Practices](https://www.dhiwise.com/post/building-scalable-web-applications-with-react-and-golang)
* [OpenAPI 3.0 Tutorial](https://support.smartbear.com/swaggerhub/docs/en/get-started/openapi-3-0-tutorial.html)
* [Tutorial: Developing a RESTful API with Go and Gin](https://go.dev/doc/tutorial/web-service-gin)
* [Tutorial: Developing a RESTful API with Go, JSON Schema validation and OpenAPI docs](https://dev.to/vearutop/tutorial-developing-a-restful-api-with-go-json-schema-validation-and-openapi-docs-2490)
* [Generating and integrating OpenAPI services in a React app](https://blog.logrocket.com/generating-integrating-openapi-services-react/)

### Repositories

* [Gazelle](https://github.com/kilpatty/Gazelle)
* [Golang+Gin+React](https://github.com/roylisto/gin-golang-react/)

### To Read

* [TypeScript Handbook: React](https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/tutorials/React.md)
  * This introduction just seems really solid.
  * Come back here to figure out unit tests.
* [React + Typescript Cheatsheet](https://gist.github.com/juhaelee/b80ab497f74e7393b15439c17421d299)