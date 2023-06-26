const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "cart.json"
);

module.exports = class Cart {
  static addProduct(id, prodPrice) {
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }

      const existingCartItemIndex = cart.products.findIndex(
        (cartItem) => cartItem.id === id
      );

      let updatedCartItem;

      if (existingCartItemIndex !== -1) {
        const existingCartItem = cart.products[existingCartItemIndex];
        updatedCartItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        cart.products[existingCartItemIndex] = updatedCartItem;
      } else {
        updatedCartItem = { id: id, quantity: 1 };
        cart.products = [...cart.products, updatedCartItem];
      }
      cart.totalPrice = cart.totalPrice + +prodPrice;
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
};
