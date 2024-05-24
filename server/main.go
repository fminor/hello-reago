package main

import (
	"net/http"
)

func main() {
	// Serve React front-end
	fs := http.FileServer(http.Dir("client/build"))
	http.Handle("/", fs)

	// API routes
	http.HandleFunc("/api/data", dataHandler)

	http.ListenAndServe(":8080", nil)
}
