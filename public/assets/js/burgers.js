$(function() {
    // On click event when eat burger button is clicked
    $(".eat-burger").on("click", function(event) {
        // Grabs id from button
        var id = $(this).data("id");
  
        // Send the PUT request to update burger table
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
            }).then(
            function() {
            // Reload the page to get the updated list
            location.reload();
            }
        );
    });

    // On click event when submit new burger button is clicked
    $("#submit").on("click", function(event) {
        event.preventDefault();

        // Grabs burger input from form
        var burgerInput = $("#burger-input").val();

        // Creates buger object to be sent to post request
        var newBurger = {
            burgerInput: burgerInput
        };

        // Send the POST request.
        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(function() {
            // Reload the page to get the updated list
            location.reload();
        });
    });
});