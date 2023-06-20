const express = require("express");

const router = express.Router();

const path = require("path");

const rootDir = require("../util/path");

router.get("/contact-us", (req, res, next) => {
  res.send(path.join(rootDir, "views", "contact-us.html"));
});

router.post("/success", (req, res, next) => {
  res.send("<h1>Sucesss<h1>");
  res.redirect("/");
});

module.exports = router;
