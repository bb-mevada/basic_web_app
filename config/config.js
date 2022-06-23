// Dependencies
require('dotenv').config();

module.exports = {
    DEBUG: process.env.DEBUG,
    SERVER_URL: process.env.DEBUG === "true" ? process.env.LOCAL_SERVER_URL : process.env.PRODUCTION_SERVER_URL,
    MONGO_URL: process.env.DEBUG === "true" ? process.env.LOCAL_MONGO_URL : process.env.PRODUCTION_MONGO_URL,
    PORT: process.env.PORT
}