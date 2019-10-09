var connection = require("./connection.js");


// Object for all our SQL statement functions.

var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(tableInput, colInput, burgerInput) {
      var queryString = "INSERT INTO "+ tableInput + " (" + colInput + ") VALUES (" + burgerInput + ");";
  
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne: function(tableInput, colInput, colVal, id) {
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
