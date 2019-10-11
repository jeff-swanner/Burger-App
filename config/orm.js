// calls connection file to connect to mysql
var connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
  // Function used to select all entries in database and return
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";

      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    // Function used to insert one entry into database
    insertOne: function(tableInput, colInput, burgerInput, cb) {
      var queryString = "INSERT INTO "+ tableInput + " (" + colInput + ") VALUES ('" + burgerInput + "');";

      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    // A function used to update one entry in database by id
    updateOne: function(tableInput, colInput, colVal, id, cb) {
      var queryString = "UPDATE " + tableInput + " SET " + colInput + " = " + colVal + " WHERE id = " + id;
  
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
