const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  console.log("Middleware");
  console.log("add product page");
  res.send(
    '<form action="/product" method="POST"> <input type="text" name="title"><input type="number" name="size"> <button type="submit">Submit</button></form>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("Middleware");
  res.send("<h1>home</h1>");
});

app.listen(3000);
