// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

   $(".add-burger").on("click", function(event) {

      event.preventDefault();

      console.log ("add button clicked");
      var newBurger = {
         name: $("#burger").val().trim()
      };

      // Send the POST request.
      $.ajax("/api/add", {type: "POST", data: newBurger
      }).then(

         function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
      });
   });

  $(".devour-burger").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    console.log ("devour button clicked. id = " + id); 

    // Send the PUT request.
    $.ajax("/api/update/" + id, {
      type: "PUT", 
      data: id
    }).then(
      function() {
        console.log("devoured " + id);
        // Reload the page to get the updated list
        location.reload();
      }
    );

  });


/*   // Send the PUT request.
   $.ajax("/api/cats/" + id, {
      type: "PUT",
      data: newSleepState
   }).then(
      function() {
         console.log("changed sleep to", newSleep);
        // Reload the page to get the updated list
        location.reload();
      }
    );
*/


});
