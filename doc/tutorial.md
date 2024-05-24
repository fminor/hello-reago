# Tutorial

Following [Building Scalable Web Applications with React and Golang: Best Practices](https://www.dhiwise.com/post/building-scalable-web-applications-with-react-and-golang) and taking notes.

## Hello, React!

From development container (with nodejs), use Facebook's React starter project to get started `create-react-app`.

```bash
npm install -g create-react-app
```

```bash
npx create-react-app client --template typescript

cd client

npm start
```

## Hello, Go!

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

## Handle JSON Requests and Responses

server/response.go:

```go
type ApiResponse struct {
    Message string `json:"message"`
}

func dataHandler(w http.ResponseWriter, r *http.Request) {
    response := ApiResponse{Message: "Hello from the Golang API!"}
    json.NewEncoder(w).Encode(response)
}
```