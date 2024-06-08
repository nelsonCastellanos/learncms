package config

import (
	"time"

	"github.com/spf13/viper"
)

type Config struct {
	GoogleClientID         string        `mapstructure:"GOOGLE_OAUTH_CLIENT_ID"`
	GoogleClientSecret     string        `mapstructure:"GOOGLE_OAUTH_CLIENT_SECRET"`
	GoogleOAuthRedirectURL string        `mapstructure:"GOOGLE_OAUTH_REDIRECT_URL"`
	JWTSecret              string        `mapstructure:"JWT_SECRET"`
	TokenExpiresIn         time.Duration `mapstructure:"TOKEN_EXPIRED_IN"`
	NewRelicLicense        string        `mapstructure:"NEW_RELIC_LICENSE"`
	LogLevel               string        `mapstructure:"LOG_LEVEL"`
}

func LoadConfig(path string) (config Config, err error) {
	viper.AddConfigPath(path)
	viper.SetConfigName("app")
	viper.SetConfigType("env")
	viper.AutomaticEnv()

	err = viper.ReadInConfig()
	if err != nil {
		return
	}

	err = viper.Unmarshal(&config)
	if err != nil {
		return
	}

	return
}
