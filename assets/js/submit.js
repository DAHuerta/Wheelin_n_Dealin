// // when appropriate button is clicked, class of button will change for devoured, updates html when end of function is reached
// $(function() {
//     $(".change-devoured").on("click", function(event) {
//       var id = $(this).data("id");
//       var newEat = $(this).data("neweat");

//       var newEatState = {
//         devoured: newEat
//       };
//       $.ajax("/api/burgers/" + id, {
//         type: "PUT",
//         data: newEatState
//       }).then(
//         function() {
//           console.log("changed devoured to", newEat);
//           location.reload();
//         }
//       );
//     });
// allows user to create new burger, adds to database and reloads html when end of function is reached 
$(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newCarInterest = {
        car_name: $("#car-name").val().trim(),
    };
    $.ajax("/api/cars", {
        type: "POST",
        data: newCarInterest
    }).then(
        function () {
            console.log("Added car to user's favorites");
            location.reload();
        }
    );
});
//   });