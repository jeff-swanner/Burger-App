$(function() {
    $(".eat-burger").on("click", function(event) {
      var id = $(this).data("id");
  
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
            }).then(
            function() {
            // Reload the page to get the updated list
            location.reload();
            }
        );
    });

    $("#submit").on("click", function(event) {
        event.preventDefault();
        var burgerInput = $("#burger-input").val();
        var newBurger = {
            burgerInput: burgerInput
        };

        // Send the PUT request.
        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(function() {
            // Reload the page to get the updated list
            location.reload();
        });
    });
});