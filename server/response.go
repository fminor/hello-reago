package main

import (
	"encoding/json"
	"net/http"
)

type ApiResponse struct {
	Message string `json:"message"`
}

func dataHandler(w http.ResponseWriter, r *http.Request) {
	response := ApiResponse{Message: "Hello from the Golang API!"}
	json.NewEncoder(w).Encode(response)
}
