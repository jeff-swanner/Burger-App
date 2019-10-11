// Requires and creates router object
var express = require("express");
var router = express.Router();

// Import the burger model to use its database functions.
var burger = require("../models/burger.js");

// Catch all route to load the main indes handlebars page
router.get("*", function(req, res) {
    // Loads all burgers in database and passes to handle bars
    burger.selectAll(function(data) {
      var burgerObject = {
        burger: data
      };
      res.render("index", burgerObject);
    });
});
  
// Route for inserting new burger into database
router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.burgerInput, function(result) {
        // Send back the ID of the new quote
        console.log(result);
        res.json({ id: result.insertId });
    });
});
  
// Route for updating burger as devoured
router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne(req.params.id, function(result) {
        if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
        } else {
        res.status(200).end();
        }
    });
});

// Exports router model
module.exports = router;