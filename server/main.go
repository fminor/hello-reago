package main

import (
	"context"
	"errors"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5/middleware"
	"github.com/swaggest/openapi-go/openapi3"
	"github.com/swaggest/rest/nethttp"
	"github.com/swaggest/rest/web"
	"github.com/swaggest/swgui/v4emb"
	"github.com/swaggest/usecase"
	"github.com/swaggest/usecase/status"
)

// album represents data about a record album.
type album struct {
	ID     string  `json:"id" required:"true" minLength:"1" description:"ID is a unique string that determines album."`
	Title  string  `json:"title" required:"true" description:"Title of the album."`
	Artist string  `json:"artist,omitempty" description:"Album author, can be empty for multi-artist compilations."`
	Price  float64 `json:"price" minimum:"0" description:"Price in USD."`
}

// albums slice to seed record album data.
var albums = []album{
	{ID: "1", Title: "Blue Train", Artist: "John Coltrane", Price: 56.99},
	{ID: "2", Title: "Jeru", Artist: "Gerry Mulligan", Price: 17.99},
	{ID: "3", Title: "Sarah Vaughan and Clifford Brown", Artist: "Sarah Vaughan", Price: 39.99},
}

// getAlbums responds with the list of all albums as JSON.
func getAlbums() usecase.Interactor {
	u := usecase.NewInteractor(func(ctx context.Context, _ struct{}, output *[]album) error {
		*output = albums
		return nil
	})
	u.SetTags("Album")

	return u
}

// postAlbums adds an album from JSON received in the request body.
func postAlbums() usecase.Interactor {
	u := usecase.NewInteractor(func(ctx context.Context, input album, output *album) error {
		// Check if id is unique.
		for _, a := range albums {
			if a.ID == input.ID {
				return status.AlreadyExists
			}
		}

		// Add the new album to the slice.
		albums = append(albums, input)

		*output = input
		return nil
	})
	u.SetTags("Album")
	u.SetExpectedErrors(status.AlreadyExists)

	return u
}

// getAlbumByID locates the album whose ID value matches the id
// parameter sent by the client, then returns that album as a response.
func getAlbumByID() usecase.Interactor {
	type getAlbumByIDInput struct {
		ID string `path:"id"`
	}

	u := usecase.NewInteractor(func(ctx context.Context, input getAlbumByIDInput, output *album) error {
		for _, album := range albums {
			if album.ID == input.ID {
				*output = album
				return nil
			}
		}
		return status.Wrap(errors.New("album not found"), status.NotFound)
	})
	u.SetTags("Album")
	u.SetExpectedErrors(status.NotFound)

	return u
}

func main() {
	service := web.NewService(openapi3.NewReflector())

	// API header
	service.OpenAPISchema().SetTitle("Albums API")
	service.OpenAPISchema().SetDescription("This service provides API to manage albums.")
	service.OpenAPISchema().SetVersion("v1.0.0")

	// Additional middlewares can be added
	service.Use(
		middleware.StripSlashes,

		// cors.AllowAll().Handler, // "github.com/rs/cors", 3rd-party CORS middleware can also be configured here.
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

	// Start service
	log.Println("Starting service")
	if err := http.ListenAndServe(":8080", service); err != nil {
		log.Fatal(err)
	}
}
