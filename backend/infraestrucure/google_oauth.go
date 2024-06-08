package infrastructure

import (
	"context"
	"encoding/json"
	"net/http"
	"plantcms/backend/infraestrucure/config"
	"strings"
	"time"

	"github.com/dgrijalva/jwt-go"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
)

var (
	googleOauthConfig *oauth2.Config
	jwtKey            = []byte("your_secret_key")
)

func InitGoogleOAuth(cfg config.Config) {
	googleOauthConfig = &oauth2.Config{
		RedirectURL:  cfg.GoogleOAuthRedirectURL,
		ClientID:     cfg.GoogleClientID,
		ClientSecret: cfg.GoogleClientSecret,
		Scopes:       []string{"https://www.googleapis.com/auth/userinfo.email"},
		Endpoint:     google.Endpoint,
	}
	jwtKey = []byte(cfg.JWTSecret)
}

func HandleGoogleLogin(w http.ResponseWriter, r *http.Request) {
	redirectURL := r.URL.Query().Get("redirect")
	state := "state-token"

	url := googleOauthConfig.AuthCodeURL(state+"|"+redirectURL, oauth2.AccessTypeOffline)
	http.Redirect(w, r, url, http.StatusTemporaryRedirect)
}

func HandleGoogleCallback(w http.ResponseWriter, r *http.Request) {
	state := r.URL.Query().Get("state")
	stateParts := strings.Split(state, "|")
	if len(stateParts) != 2 {
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}
	redirectURL := stateParts[1]

	code := r.URL.Query().Get("code")
	token, err := googleOauthConfig.Exchange(context.Background(), code)
	if err != nil {
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}

	client := googleOauthConfig.Client(context.Background(), token)
	resp, err := client.Get("https://www.googleapis.com/oauth2/v1/userinfo?alt=json")
	if err != nil {
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}

	var user map[string]interface{}
	if err := json.NewDecoder(resp.Body).Decode(&user); err != nil {
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}

	// Create a JWT token for the authenticated user
	jwtToken := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"email": user["email"],
		"exp":   time.Now().Add(time.Hour * 24).Unix(),
	})
	tokenString, err := jwtToken.SignedString(jwtKey)
	if err != nil {
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}

	http.SetCookie(w, &http.Cookie{
		Name:     "token",
		Value:    tokenString,
		Path:     "/",
		Expires:  time.Now().Add(24 * time.Hour),
		SameSite: http.SameSiteLaxMode,
		Secure:   false,
		HttpOnly: true,
		Domain:   "localhost",
	})

	http.Redirect(w, r, redirectURL, http.StatusTemporaryRedirect)
}
