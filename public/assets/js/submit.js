$(document).ready(function () {

  $("#secret-menu-btn").on("click", function () {
    console.log("secret menu")
  });

  $("#add-btn").on("click", function (event) {
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
      .then(function (data) {
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

  $("#search-btn").on("click", function (event) {
    event.preventDefault();
    // make a newCharacter obj
    var searchCar = {
      // model from model input
      model: $("#model-search").val().trim(),
      // make from make input
      make: $("#make-search").val().trim(),
      // year from year input
      year: $("#year-search").val().trim(),
      // mile from mileage input
      mileage: $("#mileage-search").val().trim(),
      // type from type input
      type: $("#type-search").val().trim(),
      // color from color input
      color: $("#color-search").val().trim(),
      // price from price input
      price: $("#price-search").val().trim(),
      // image from image input
    };
    console.log(searchCar.model)

    location.href=`/inventory/search?model=${searchCar.model}&make=&${searchCar.make}`
  });

});