// SQLqury DB
// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "peth_node",
//   password: "PETHmysql1@",
// });

// module.exports = pool.promise();

//using sequelize

const Sequelize = require("sequelize");

const sequelize = new Sequelize("peth_node", "root", "PETHmysql1@", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
