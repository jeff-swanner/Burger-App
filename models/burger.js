// Requires the ORM file to be used for database calls
var orm = require("../config/orm.js");

// burger object used to make custom database calls
var burger = {
    // creates selectall function that selects all from burgers table
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // Inserts new burger into table
    insertOne: function(burgerInput, cb) {
      orm.insertOne("burgers", "burger_name", burgerInput, function(res) {
        cb(res);
      });
    },
    // Updates one burger as devoured based on id
    updateOne: function(id, cb) {
      orm.updateOne("burgers", "devoured", true, id, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller
  module.exports = burger;