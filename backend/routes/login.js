const loginRoutes = require("express").Router();
const loginController = require("../controllers/loginController.js");

loginRoutes.get("/", loginController.login);

module.exports = loginRoutes;
