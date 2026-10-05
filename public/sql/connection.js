let mysql = require('mysql');

let con = mysql.createConnection({
  host: "localhost",
  database: "vozes_da_rua",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});