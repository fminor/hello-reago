# Tutorial

Following [Building Scalable Web Applications with React and Golang: Best Practices](https://www.dhiwise.com/post/building-scalable-web-applications-with-react-and-golang) and taking notes.

## Hello, React

From development container (with nodejs), use Facebook's React starter project to get started `create-react-app`.

```bash
npm install -g create-react-app
```

```bash
npx create-react-app client --template typescript

cd client

npm start
```

## Hello, Go

Using [Gazelle](https://github.com/kilpatty/Gazelle)'s structure:

```bash
mkdir server
touch server/main.go
```

```go
package main

import (
    "net/http"
)

func main() {
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        w.Write([]byte("Hello from Golang server!"))
    })
    http.ListenAndServe(":8080", nil)
}
```

```bash
cd server
go run main.go
```

Open up `http://localhost:8080/` in Firefox.

## Creating a RESTful API, part 1

[Tutorial: Creating a RESTful API with Go and Gin](https://go.dev/doc/tutorial/web-service-gin)

```bash
go mod init hello-reago/server
```

```bash
cd server
go get -u github.com/gin-gonic/gin
```

Updated `build.sh` and `run.sh`.

## Creating a RESTful API, part 2

```bash
go get -u github.com/swaggest/rest
```

After writing code, before running the tutorial, I had to tidy:

```bash
go mod tidy
```

Make sure to checkout the Swagger UI at <http://localhost:8080/docs>

## Serve Static Content (React) with Go Chi Router

```go
    // Serve front-end
    := http.FileServer(http.Dir("client/build"))
    service.Router.Handle("/*", fs)
```

## ESLint

[Setting up ESLint in React](https://medium.com/@RossWhitehouse/setting-up-eslint-in-react-c20015ef35f7)

```bash
cd client
npm install -g eslint
eslint --init
```

My answers:

* ✔ How would you like to use ESLint? · problems
* ✔ What type of modules does your project use? · esm
* ✔ Which framework does your project use? · react
* ✔ The React plugin doesn't officially support ESLint v9 yet. What would you like to do? · 8.x
* ✔ Does your project use TypeScript? · typescript
* ✔ Where does your code run? · browser
* ✔ Would you like to install them now? · No / Yes
* ✔ Which package manager do you want to use? · npm

```bash
npm install -g eslint-plugin-react
```

### npm script

Add `"lint"` line to `package.json`, now `npm run lint` is a thing.

```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject",
    "lint": "eslint src/**/*.js src/**/*.jsx"
}
```

### ESLint Rules

* [Awesome ESLint](https://github.com/dustinspecker/awesome-eslint)
* [ESLint Config React App](https://github.com/facebook/create-react-app/tree/main/packages/eslint-config-react-app)

It seems like we expect `create-react-app` to have provided the eslint rules, and since I started from the typescript project, the config file is actually `eslint.config.mjs` and appears to be using the defaults.

## Go lint

Seems like [golangci-lint](https://github.com/golangci/golangci-lint) is probably the way.

Looks like `golangci-linst run` just works.

Customize by adding a `.golangci.yml` file.

Integrate with VS Code using

```json
"go.lintTool": "golangci-lint",
"go.lintFlags": [
  "--fast"
]

# using it in an editor without --fast can freeze your editor.
# golangci-lint automatically discovers .golangci.yml config 
# you don't need to configure it in VS Code settings.
```

## OpenAPI + React (Take 1)

[Generating and integrating OpenAPI services in a React app](https://blog.logrocket.com/generating-integrating-openapi-services-react/)

1. Skip the back-end part of the tutorial
2. Build and Run our application
3. Go to <http://localhost:8080/docs> and download `openapi.json`.

### Generating API docs, data types, and CRUD services in our React frontend

1. Install openapi

   ```bash
   npm install openapi-typescript openapi-typescript-codegen -D
   ```

2. Add the `types:openapi` command to `package.json`

   ```json
   "types:openapi": "openapi -i http://localhost:8080/docs/openapi.json -o src/services/openapi"
   ```

3. Generate the API

   ```bash
   npm run types:openapi
   ```

Check out:

* `models` - Provides all the types in `Album.ts`
* `services` - Provides all the services in `AlbumService.ts`

Note: some "too-new" code was generated under `openapi/core`, I replaced `#` with `_` to get things to compile/run.  Maybe [react-openapi-client](https://www.npmjs.com/package/react-openapi-client) is a better option.

### Integrating the generated services and types in our application

Made `api/AlbumWrapper.ts`.

### Configuring and setting defaults for generated API services

Some good stuff about auth here... probably look at this more later.

### Consuming the generated services in our React app

I'll come back to this...

## React, MUI, & Typescript

Tutorial: [React MUI TypeScript](https://www.geeksforgeeks.org/react-mui-typescript/)

Starting fresh from [material-ui-cra-ts](https://github.com/mui/material-ui/tree/master/examples/material-ui-cra-ts) instead of create-react-app directly.

And... the imports on this tutorial appear way out of date.

Referring to [Learning Resources - Material UI](https://mui.com/material-ui/getting-started/learn/) for better or worse...

## MUI Zero to Hero

* [Material UI](https://mui.com/material-ui/)
* [Learn - Material UI](https://mui.com/material-ui/getting-started/learn/)
* [React + Material UI - From Zero to Hero](https://www.youtube.com/playlist?list=PLDxCaNaYIuUlG5ZqoQzFE27CUOoQvOqnQ)
  * Note that we're using typescript, so the syntax is slightly different

```bash
cd client
npm install @mui/material @emotion/react @emotion/styled
npm install react-router react-router-dom
```

## Serving "dynamic" content

[Firefox Plugin](https://react.dev/learn/react-developer-tools)

Fix CORS:

* [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
* [Go Middleware](https://github.com/swaggest/rest?tab=readme-ov-file#initializing-web-service)
