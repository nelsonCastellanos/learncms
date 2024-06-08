package main

import (
	"encoding/json"
	"github.com/newrelic/go-agent/v3/newrelic"
	"log"
	"net/http"
	infrastructure "plantcms/backend/infraestrucure"
	"plantcms/backend/infraestrucure/config"
	"plantcms/backend/middleware"
)

type Response struct {
	Message string `json:"message"`
}

func apiHandler(w http.ResponseWriter, r *http.Request) {
	infrastructure.Log.Info("Handling API request")
	response := Response{Message: "Hello from Go backend"}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func protectedHandler(w http.ResponseWriter, r *http.Request) {
	infrastructure.Log.Info("Handling protected request")
	response := Response{Message: "This is a protected endpoint"}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func main() {
	cfg, err := config.LoadConfig(".")
	if err != nil {
		log.Fatalf("Could not load config: %v", err)
	}

	infrastructure.InitLogger(cfg)
	infrastructure.InitGoogleOAuth(cfg)
	middleware.InitAuthMiddleware(cfg)

	// Inicializar New Relic
	app, err := newrelic.NewApplication(
		newrelic.ConfigAppName("LEARNCMS"),
		newrelic.ConfigLicense(cfg.NewRelicLicense),
		newrelic.ConfigDistributedTracerEnabled(true),
	)
	if err != nil {
		log.Fatalf("Could not initialize New Relic: %v", err)
	}

	http.HandleFunc(newrelic.WrapHandleFunc(app, "/api/auth/google/login", infrastructure.HandleGoogleLogin))
	http.HandleFunc(newrelic.WrapHandleFunc(app, "/api/auth/callback", infrastructure.HandleGoogleCallback))

	http.Handle(newrelic.WrapHandle(app, "/api/hello", http.HandlerFunc(apiHandler)))
	http.Handle(newrelic.WrapHandle(app, "/api/protected", middleware.AuthMiddleware(http.HandlerFunc(protectedHandler))))

	http.Handle("/", http.FileServer(http.Dir("./static")))

	log.Println("Listening on :8080...")
	err = http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal(err)
	}
}
