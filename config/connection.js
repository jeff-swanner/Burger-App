// Set up MySQL connection.
var mysql = require("mysql");

// Sets connection to Jaws when deployed on heroku
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  jaws = true;
} else {
  connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "12345678",
      database: "burgers_db"
  });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;