const userRoutes = require("express").Router();
const userController = require("../controllers/userController.js");

userRoutes.get("/", userController.getUser);
userRoutes.get("/:id", userController.getDetailUser);
userRoutes.put("/:id", userController.updateUser);
userRoutes.delete("/:id", userController.destroyUser);

module.exports = userRoutes;
