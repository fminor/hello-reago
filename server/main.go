package main

import (
	"log"
	"net/http"

	"github.com/go-chi/chi/v5/middleware"
	"github.com/swaggest/openapi-go/openapi3"
	"github.com/swaggest/rest/nethttp"
	"github.com/swaggest/rest/web"
	"github.com/swaggest/swgui/v4emb"
)

func setupService() *web.Service {
	service := web.NewService(openapi3.NewReflector())

	// API header
	service.OpenAPISchema().SetTitle("Albums API")
	service.OpenAPISchema().SetDescription("This service provides API to manage albums.")
	service.OpenAPISchema().SetVersion("v1.0.0")

	// Additional middlewares can be added
	service.Use(
		middleware.StripSlashes,
	)

	service.Wrap()

	// API routes
	service.Get("/albums", getAlbums())
	service.Post("/albums", postAlbums(), nethttp.SuccessStatus(http.StatusCreated))
	service.Get("/albums/{id}", getAlbumByID())

	// Swagger UI
	service.Docs("/docs", v4emb.New)

	// Serve front-end
	fs := http.FileServer(http.Dir("client/build"))
	service.Router.Handle("/*", fs)

	return service
}

func main() {
	service := setupService()

	// Start service
	log.Println("Starting service")
	if err := http.ListenAndServe(":8080", service); err != nil {
		log.Fatal(err)
	}
}
