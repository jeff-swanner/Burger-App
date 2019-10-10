// Set up MySQL connection.
var mysql = require("mysql");
var jaws = false;
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

console.log (connection.database);

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  if (jaws) {
    var queryString = `CREATE TABLE burgers
    (
      id int NOT NULL AUTO_INCREMENT,
      burger_name varchar(255) NOT NULL,
      devoured BOOLEAN DEFAULT false,
      PRIMARY KEY (id)
    );`;
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
        });
  }
  
});

// Export connection for our ORM to use.
module.exports = connection;