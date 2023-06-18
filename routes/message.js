const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send(
    '<form action="/" method="POST"><input type="text" name="userName"> <input type="text" name="message"><button type="submit">Send</button></form>'
  );
});

router.post("/", (req, res, next) => {
  const userName = req.body.userName;
  const message = req.body.message;

  const textForFile = `User Name: ${userName}, message: ${message}`;

  fs.writeFileSync("message.txt", textForFile);
});

module.exports = router;
