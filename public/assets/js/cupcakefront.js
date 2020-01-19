
    //this first function deals with the creation of a new cupcake!

    $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newCupcake = {
        // "cupcake_name" AND "devoured" ARE COLUMN NAMES.
        cupcake_name: $("#cn").val().trim(),
        // the orange stuff here is from a form div in index.handlebars
        devoured: $("[name=eat]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/cupcake_table", {
        type: "POST",
        data: newCupcake
      }).then(
        function() {
          console.log("yummy!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

$(function() {
    
    // This function will deal with changing a cupcake's devour status.
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");
        //both of the above variables refer to things on line 4 of that file!
  
      var newDevourState = {
          devoured: newDevour
          //"devoured" IS THE NAME OF THE COLUMN IN OUR DB.
          // "newDevour" is the var from line 5.
        };
    
        // Send the PUT request.
        $.ajax("/api/cupcake-table" + id, {
          type: "PUT",
          data: newDevourState
        }).then(
          function() {
            console.log("devoured that cupcake!");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

 });