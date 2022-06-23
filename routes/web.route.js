// Dependencies
const express = require("express");
const webControllers = require("../controllers/webControllers");

// Router Instance
const Router = express.Router();

// Routes
Router.route("/").get(webControllers.homepage.get);

module.exports = Router;