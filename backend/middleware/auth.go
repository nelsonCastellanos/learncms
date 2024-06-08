package middleware

import (
	"errors"
	"github.com/dgrijalva/jwt-go"
	"net/http"
	"plantcms/backend/infraestrucure/config"
)

var jwtKey []byte

func InitAuthMiddleware(cfg config.Config) {
	jwtKey = []byte(cfg.JWTSecret)
}

func AuthMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		cookie, err := r.Cookie("token")
		if err != nil {
			if errors.Is(err, http.ErrNoCookie) {
				http.Error(w, "Authorization cookie is required", http.StatusUnauthorized)
				return
			}
			http.Error(w, "Error reading cookie", http.StatusBadRequest)
			return
		}

		tokenStr := cookie.Value

		claims := &jwt.StandardClaims{}
		token, err := jwt.ParseWithClaims(tokenStr, claims, func(token *jwt.Token) (interface{}, error) {
			return jwtKey, nil
		})

		if err != nil || !token.Valid {
			http.Error(w, "Invalid token", http.StatusUnauthorized)
			return
		}

		next.ServeHTTP(w, r)
	})
}
