const express = require("express");

const router = express.Router();

router.get("/login", (req, res, next) => {
  console.log("Login page");
  res.send(
    '<form action="/login" method="POST"> <input type="text" name="title"><input type="number" name="size"> <button type="submit">Submit</button></form>'
  );
});

router.post("/login", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
