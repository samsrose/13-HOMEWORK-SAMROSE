const ex = require("express");
const exSesh = require("express-session");
const exSqlSesh = require("express-mysql-session");
const db = require("mysql");
const c = db.createConnection({
  host: "localhost",
  user: "root",
  password: "Renam8r9##1992",
  database: "sql",
});

c.connect();

c.query("SELECT 1 + 1 AS solution", function(err, rows, fields) {
  if (err) throw err;

  console.log("The solution is: ", rows[0].solution);
});

c.end();
