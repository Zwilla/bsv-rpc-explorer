var os = require('os');
var path = require('path');
var url = require('url');

var btcUri = process.env.BSVEXP_BITCOIND_URI ? url.parse(process.env.BSVEXP_BITCOIND_URI, true) : { query: { } };
var btcAuth = btcUri.auth ? btcUri.auth.split(':') : [];

var ifxUri = process.env.BSVEXP_INFLUXDB_URI ? url.parse(process.env.BSVEXP_INFLUXDB_URI, true) : { query: { } };
var ifxAuth = ifxUri.auth ? ifxUri.auth.split(':') : [];
var ifxActive = !!process.env.BSVEXP_ENABLE_INFLUXDB || Object.keys(process.env).some(k => k.startsWith('BSVEXP_INFLUXDB_'));

module.exports = {
	rpc: {
		host: btcUri.hostname || process.env.BSVEXP_BITCOIND_HOST || "127.0.0.1",
		port: btcUri.port || process.env.BSVEXP_BITCOIND_PORT || 8332,
		username: btcAuth[0] || process.env.BSVEXP_BITCOIND_USER,
		password: btcAuth[1] || process.env.BSVEXP_BITCOIND_PASS,
		cookie: btcUri.query.cookie || process.env.BSVEXP_BITCOIND_COOKIE || path.join(os.homedir(), '.bitcoin', '.cookie'),
	},

	influxdb:{
		active: ifxActive,
		host: ifxUri.hostname || process.env.BSVEXP_INFLUXDB_HOST || "127.0.0.1",
		port: ifxUri.port || process.env.BSVEXP_INFLUXDB_PORT || 8086,
		database: ifxUri.pathname && ifxUri.pathname.substr(1) || process.env.BSVEXP_INFLUXDB_DBNAME || "influxdb",
		// influx -precision rfc3339 [ENTER] CREATE DATABASE influxdb
		username: ifxAuth[0] || process.env.BSVEXP_INFLUXDB_USER || "admin",
		password: ifxAuth[1] || process.env.BSVEXP_INFLUXDB_PASS || "admin"
		// influx -precision rfc3339 [ENTER] CREATE USER admin WITH PASSWORD 'admin' WITH ALL PRIVILEGES
	},

	// optional: enter your api access key from ipstack.com below
	// to include a map of the estimated locations of your node's
	// peers
	// format: "ID_FROM_IPSTACK"
	ipStackComApiAccessKey: process.env.BSVEXP_IPSTACK_KEY,

	// optional: GA tracking code
	// format: "UA-..."
	googleAnalyticsTrackingId: process.env.BSVEXP_GANALYTICS_TRACKING,

	// optional: sentry.io error-tracking url
	// format: "SENTRY_IO_URL"
	sentryUrl: process.env.BSVEXP_SENTRY_URL,
};
