$(document).ready(function(){
    var cars = [];
    
    var $newCarInput = $("#input-new-car");

    var $newCarContainer = $("#car-container")

    $("#update-cars").on("click", function(){
        updateCars()
    });

    $("#insert-cars").on("click", function(){
        insertCars()
    });

    $("#secret-menu-btn").on("click", function(){
      console.log("secret menu")
  });

    function updateCars(cars) {
        $.ajax({
          method: "PUT",
          url: "/api/cars",
          data: cars
        }).then(getTodos);
      };

      //add new cars using user year:
      // when user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();
  // make a newCharacter obj
  var newCharacter = {
    // model from model input
    model: $("#model").val().trim(),
    // make from make input
    make: $("#make").val().trim(),
    // year from year input
    year: $("#year").val().trim(),
    // mile from mileage input
    mileage: $("#mileage").val().trim(),
    // type from type input
    type: $("#type").val().trim(),
    // color from color input
    color: $("#color").val().trim(),
    // price from price input
    price: $("#price").val().trim(),
    // image from image input
    image: $("#image").val().trim(),
    // hidden from hidden input. true of false
    hidden: $("#hidden").val().trim(),
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/newcars", newCharacter)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding car...");
    });

  // empty each input box by replacing the value with an empty string
  $("#model").val("");
  $("#make").val("");
  $("#year").val("");
  $("#mileage").val("");
  $("#type").val("");
  $("#color").val("");
  $("#price").val("");
  $("#image").val("");
  $("#hidden").val("");
});

});

$("#submit").on("click", function(event) {
  event.preventDefault();

  var newBid = {
    //grabs bid from bidder
    bid: $("#bid").val().trim(),
    // hidden from hidden input. true of false
    bidder: $("#bidder").val().trim(),
  }
}