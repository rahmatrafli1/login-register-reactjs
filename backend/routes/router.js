const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.status(200).json({ message: "Hai" });
});

const userRoutes = require("./user.js");
routes.use("/user", userRoutes);
const itemRoutes = require("./item.js");
routes.use("/item", itemRoutes);
const loginRoutes = require("./login.js");
routes.use("/login", loginRoutes);
const registerRoutes = require("./register.js");
routes.use("/register", registerRoutes);

module.exports = routes;
