const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./routes/router.js");
app.use(routes);

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
