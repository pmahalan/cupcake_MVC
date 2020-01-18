//below is front-end code to request information from the server-side
//upon the user's listing of a new cupcake!
$("create-form").on("submit", function(event) {
    event.preventDefault();

    var newCupcake = {
        name: $("#cn").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
    };

    //send teh POST request
    $.ajax("/cupcakes/create", {
        type: "POST",
        data: newCupcake
      }).then(
        function() {
          console.log("listed a new cupcake!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
})

$("")

// create the code that will call the ORM functions using 
// cupcake-specific input for the ORM.