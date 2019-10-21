$(document).ready(function(){
    var cars = [];
    
    var $newCarInput = $("#input-new-car");

    var $newCarContainer = $("#car-container")

    $("#update-cars").on("click", function(){
        updateCars()
    });

    $("#insert-cars").on("click", function(){
        insertCars()
    })

    getCars();

    function getCars() {
        $.get("/", function(data) {
          cars = data;
          // initializeRows();
          console.log(cars)
      })}
    
    function updateCars(cars) {
        $.ajax({
          method: "PUT",
          url: "/api/cars",
          data: cars
        }).then(getTodos);
      };

      function insertCars(event) {
        event.preventDefault();
        var cars = {
          text: $newCarInput.val().trim(),
          complete: false
        };
        $.post("/api/cars", cars, getCars);
        $newItemInput.val("");
      };

});