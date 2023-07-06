const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "peth_node",
  password: "PETHmysql1@",
});

module.exports = pool.promise();
