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
  // make a newCar obj
  var newCar = {
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
  $.post("/api/newcars", newCar)
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


  //user sign up:
  $("#signup-btn").on("click", function(event){
    event.preventDefault();

    var password = $("#password-signup").val().trim();
    var rePassword = $("#repeat-password-signup").val().trim();
    console.log(password);
    console.log(rePassword);

    if(password != rePassword){
      alert(`Password and repeat password does not match`)
      location.reload()
    }

    var newUser = {
      email: $("#email-signup").val().trim(),
      password: $("#password-signup").val().trim()
    }

    $.post("/api/newuser", newUser)
    .then(function(data){
    
      //redirect to user profile page after getting data back from controller
      alert(`user profile successfully created. Please login to access profile`)
      window.location = "/user/profile"
    })
  })

  //user login:
  $("#login-btn").on("click", function(event){
    event.preventDefault();

    var loginInfo = {
      email: $("#email-login").val().trim(),
      password: $("#password-login").val().trim()
    }

    $.get("/api/login", loginInfo).then(function(data){
      alert(`welcome ${data.user_name}`)
    })


  })
});