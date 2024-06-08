package infrastructure

import (
	"github.com/newrelic/go-agent/v3/integrations/logcontext-v2/nrlogrus"
	"github.com/newrelic/go-agent/v3/newrelic"
	"github.com/sirupsen/logrus"
	"os"
	"plantcms/backend/infraestrucure/config"
)

var Log *logrus.Logger

func InitLogger(cfg config.Config) {
	Log = logrus.New()

	Log.SetFormatter(&logrus.JSONFormatter{})
	Log.SetOutput(os.Stdout)

	level, err := logrus.ParseLevel(cfg.LogLevel)
	if err != nil {
		level = logrus.InfoLevel
	}
	Log.SetLevel(level)

	app, err := newrelic.NewApplication(
		newrelic.ConfigAppName("LEARNCMS"),
		newrelic.ConfigLicense(cfg.NewRelicLicense),
		newrelic.ConfigDistributedTracerEnabled(true),
	)
	if err != nil {
		Log.Fatalf("Could not initialize New Relic: %v", err)
	}

	Log.SetFormatter(nrlogrus.NewFormatter(app, &logrus.JSONFormatter{}))
}
