const express = require("express");

const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const messageRoutes = require("./routes/message");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(messageRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not fond<h1>");
});

app.listen(3000);
