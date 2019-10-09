var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(burgerInput, cb) {
      orm.create("burgers", "burger_name", burgerInput, function(res) {
        cb(res);
      });
    },
    updateOne: function(id, cb) {
      orm.update("burgers", "devoured", true, id, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;