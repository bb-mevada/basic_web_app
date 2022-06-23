// Dependencies
const express = require("express");
const apiControllers = require("../controllers/apiControllers");

// Router Instance
const Router = express.Router();

// Routes
Router.route("/").get(apiControllers.home.get);

module.exports = Router;