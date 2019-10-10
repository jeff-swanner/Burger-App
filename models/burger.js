var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("z5dlstv4h99boly0", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(burgerInput, cb) {
      orm.insertOne("z5dlstv4h99boly0", "burger_name", burgerInput, function(res) {
        cb(res);
      });
    },
    updateOne: function(id, cb) {
      orm.updateOne("z5dlstv4h99boly0", "devoured", true, id, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;