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

    location.href=`/inventory/search?model=${searchCar.model}&make=&${searchCar.make}&color=${searchCar.color}&type=${searchCar.type}&year=${searchCar.year}`
  });

  $("#search-again").on("click", function (event){
    event.preventDefault();
    location.href=`/vehicle_search`
  })

  // var $newCarInput = $("#input-new-car");

  // var $newCarContainer = $("#car-container")

  $("#update-cars").on("click", function () {
    updateCars()
  });

  $("#insert-cars").on("click", function () {
    insertCars()
  });

  $("#secret-menu-btn").on("click", function () {
    console.log("secret menu")
  });

  function updateCars(cars) {
    $.ajax({
      method: "PUT",
      url: "/api/cars",
      data: cars
    }).then(getTodos);
  };

  //reroute to /post/:id when click on sell your car
  $("#sell-car-btn").on("click", function(){
    console.log(window.location.href.split("/:")[1])
    var id = window.location.href.split("userprofile/")[1];
    window.location = "/postcar/" + id;
  })

  //user sign up:
  $("#signup-btn").on("click", function (event) {
    event.preventDefault();

    var password = $("#password-signup").val().trim();
    var rePassword = $("#repeat-password-signup").val().trim();
    console.log(password);
    console.log(rePassword);

    if (password != rePassword) {
      alert(`Password and repeat password does not match`)
      location.reload()
    }

    var newUser = {
      email: $("#email-signup").val().trim(),
      password: $("#password-signup").val().trim()
    }

    $.post("/api/newuser", newUser)
      .then(function (data) {
        //redirect to user profile page after getting data back from controller
        console.log(data)
        if (data === "old") {
          alert(`There is already a user with this email address`)
          location.reload()
        } else if (data === "new") {
          alert(`User profile successfully created. Please login.`)
          window.location = "/user/profile"
        }
      })
  })

  //user login:
  $("#login-btn").on("click", function (event) {
    event.preventDefault();

    var loginInfo = {
      email: $("#email-login").val().trim(),
      password: $("#password-login").val().trim()
    }

    $.post("/api/login", loginInfo).done(function (data) {
      if (data === "notLogin") {
        alert(`Incorrect username and password`)
        location.reload();
      } else {
        // console.log(data.user_name)
        alert(`welcome ${data.user_name}`)
        window.location = `/userprofile/${data.id}`
        //redirect to profile page. look at burgerJS for hints
      }
    })
  })

  //delete button from user profile page:
  $("#delete-button").on("click", function(event){
    event.preventDefault();
    // var deleteCar = confirm("Are you sure?")

    var carId = $(this).data("carid")
    
    console.log($(this).data("carid"))
    $.ajax({
      method: "DELETE",
      url: "/api/car/delete/" + carId,
    }).then(function(data){
      // console.log(data)
      alert(`Car deleted`)
    })
  })
});

// $.ajax({
//   method: "DELETE",
//   url: "/api/authors/" + id
// })
//   .then(getAuthors);