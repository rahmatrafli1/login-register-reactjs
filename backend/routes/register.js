const registerRoutes = require("express").Router();
const registerController = require("../controllers/registerController.js");

registerRoutes.post("/", registerController.register);

module.exports = registerRoutes;
