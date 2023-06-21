const mysql = require('mysql2');

const con = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "2801",
  database: "chiliski"
});

module.exports = con 