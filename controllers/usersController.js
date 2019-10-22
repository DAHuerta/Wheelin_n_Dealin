// *****************************************************************************
// **** api-routes.js - this file offers a set of routes for displaying and
// saving data to the db
// ******************************************************************************
// *** Dependencies

// Requiring our models
var db = require("../models");

// Routes =============================================================
module.exports = function(app) {


  //link up to the new user signup page
  app.get('/signup', function (req, res) {
    res.render('signup', { layout: 'main.handlebars' });
  });

  // POST route for saving a new user
  app.post("/api/users", function(req, res) {
    // create takes an argument of an object describing the item we want to insert
    // into our table. In this case we just we pass in an object with a text and
    // complete property
    db.Users.create({
      user_name: req.body.name,
      password: req.body.password,
      favorite_color: req.body.favColor,
      favorite_type: req.body.favType,
      fav_make: req.body.favMake
    }).then(function(dbUsers) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbUsers);
    }).catch(function(err){
      console.log(err.message)
      res.send(err.message)
    });

  });

  //link up to the login page:
  app.get('/login', function (req, res) {
    res.render('login', { layout: 'main.handlebars' });
  });

  //get route for checking if user exist:
  app.get("/login", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Cars.findAll({}).then(function(dbUser) {
      // We have access to the cars as an argument inside of the callback function
      if(req.body.user_name === dbUser.user_name && req.body.password === dbUser.password){
        alert(`Welcome ${req.body.user_name}`)
        window.location = "/user/profile/" + req.body.user_name;
      }else {
        alert(`Invalid username or password`)
        location.reload()
      }
    })
    res.end()
  });

    

};
