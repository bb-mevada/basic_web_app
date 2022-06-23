// Dependencies
const path = require("path"); // Path Module
const helmet = require("helmet"); // Security Headers
const express = require("express"); // Web Framework
const createError = require('http-errors'); // HTTP Error Handler
const loggers = require("./utilities/logger"); // Loggers
const { PORT, SERVER_URL } = require("./config/config"); // Configuration Module
const databaseService = require("./utilities/databaseService"); // Database Service

// Express App Instance
const app = express();

// Express Setting
app.set("view engine", "ejs");

// Middlewares
app.use(helmet()); // Initializing Helmet.js
app.use(express.json()); // Response will be of JSON type
app.use(express.urlencoded({ extended: true })); // If value of extended is false then multipart form data will not work
app.use(express.static(path.join(__dirname, "public"))); // Set public content directory

// Route Prefix
app.use("/api/v1", require("./routes/api.route")); // API Routes
app.use("/", require("./routes/web.route")); // Web Routes

// 404 Error Handler
app.use((req, res, next) => {
    next(createError.NotFound());
});

// Custom Error Handler
app.use((err, req, res, next) => {
    loggers.errorLogger.error(`${req.method} - ${err.message}  - ${req.originalUrl} - ${req.ip}`);
    res.status(err.status || 500);
    res.send({
        status: err.status || 500,
        message: err.message,
    });
});

// Listening App Instance
const server = app.listen(PORT);

(async () => {
    try {
        await databaseService.connector()
        loggers.infoLogger.info(`🚀 Application started @${SERVER_URL}`);
    }
    catch (error) {
        server.close((err) => {
            loggers.errorLogger.error(`${error.stack}`)
            loggers.errorLogger.error(`Application process terminated...`)
            process.exit(err ? 1: 0)
        })
    }
})();