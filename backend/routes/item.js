const itemRoutes = require("express").Router();
const itemController = require("../controllers/itemController.js");

itemRoutes.get("/", itemController.getItem);
itemRoutes.get("/:id", itemController.getDetailItem);
itemRoutes.post("/", itemController.postItem);
itemRoutes.put("/:id", itemController.updateItem);
itemRoutes.delete("/:id", itemController.destroyItem);

module.exports = itemRoutes;
