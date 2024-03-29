const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = +req.body.price;
  const description = req.body.description;
  // const product = new Product(title, price, description, imageUrl);
  // console.log(product);
  // product.save().then(() => {
  //   res.redirect("/");
  // });

  req.user
    .createProduct({
      title,
      price,
      imageUrl,
      description,
    })
    .then((result) => {
      res.redirect("/admin/products");
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
  const updatedTitle = req.body.title;
  const prodId = req.body.productId;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  req.user
    .getProducts({ where: { id: prodId } })
    .then((products) => {
      const product = products[0];
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.imageUrl = updatedImageUrl;
      product.description = updatedDesc;
      return product.save();
    })
    .then((result) => {
      console.log("updaTED prod");
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};

//postEdittobe added

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("admin/products", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.destroy(prodId)
    .then((product) => {
      return product.destroy();
    })
    .then((result) => {
      console.log("detroyed");
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};
