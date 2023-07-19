// // const fs = require("fs");
// // const path = require("path");

// // const p = path.join(
// //   path.dirname(process.mainModule.filename),
// //   "data",
// //   "products.json"
// // );

// // const getProductsFromFile = (cb) => {
// //   fs.readFile(p, (err, fileContent) => {
// //     if (err) {
// //       cb([]);
// //     } else {
// //       cb(JSON.parse(fileContent));
// //     }
// //   });
// // };

// // module.exports = class Product {
// //   constructor(title, imageUrl, description, price) {
// //     this.title = title;
// //     this.imageUrl = imageUrl;
// //     this.description = description;
// //     this.price = price;
// //   }

// //   save() {
// //     getProductsFromFile((products) => {
// //       this.id = Math.random();
// //       products.push(this);
// //       fs.writeFile(p, JSON.stringify(products), (err) => {
// //         console.log(err);
// //       });
// //     });
// //   }

// //   static fetchAll(cb) {
// //     getProductsFromFile(cb);
// //   }

// //   static fetchById(id, cb) {
// //     getProductsFromFile((products) => {
// //       const product = products.find((prod) => prod.id === id);
// //       cb(product);
// //     });
// //   }
// // };

// const cart = require("./cart");

// const db = require("../util/database");

// module.exports = class Product {
//   constructor(title, price, description, imageUrl) {
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   static fetchAll() {
//     return db.execute("SELECT * FROM products");
//   }

//   save() {
//     return db.execute(
//       "INSERT INTO products (title, price, description, imageUrl) VALUES (?,?,?,?)",
//       [this.title, this.price, this.description, this.imageUrl]
//     );
//   }

//   static findById(id) {
//     return db.execute("SELECT * FROM products WHERE products.id=?", [id]);
//   }

//   static deleteById(id) {
//     return db.execute("DELETE FROM products WHERE products.id=?", [id]);
//   }
//   // static fetchById(id) {
//   //   db.execute("SELECT * FROM products WHERE id=");
//   // }
// };

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../util/database");

const Product = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  description: { type: DataTypes.STRING, allowNull: false },
  imageUrl: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Product;
