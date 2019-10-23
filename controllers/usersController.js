// *****************************************************************************
// **** api-routes.js - this file offers a set of routes for displaying and
// saving data to the db
// ******************************************************************************
// *** Dependencies

// Requiring our models
var db = require("../models");

// Routes =============================================================
module.exports = function (app) {


  //link up to the new user signup page
  app.get('/signup', function (req, res) {
    res.render('notmember', { layout: 'main.handlebars' });
  });
  //link up to the profile page
  app.get('/user/profile', function (req, res) {
    res.render('profile', { layout: 'main.handlebars' });
  });

  // POST route for saving a new user
  app.post("/api/newuser", function (req, res) {
    // create takes an argument of an object describing the item we want to insert
    // into our table. In this case we just we pass in an object with a text and
    // complete property
    db.Users.create({
      user_name: req.body.email,
      password: req.body.password,
    }).then(function (dbUsers) {
      // We have access to the new todo as an argument inside of the callback function
      console.log(dbUsers)
      res.json(dbUsers);
    }).catch(function (err) {
      console.log(err.message)
      res.send(err.message)
    });

  });

  //link up to the login page:
  // app.get('/login', function (req, res) {
  //   res.render('login', { layout: 'main.handlebars' });
  // });

  //get route for checking if user exist:
  app.get("/api/login", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Users.findAll({}).then(function (dbUser) {
      console.log(req.body.user_name)
      console.log(dbUser[0].user_name)
      res.json(dbUser)
      // We have access to the cars as an argument inside of the callback function
      for (var i = 0; i < dbUser.length; i++) {
        if (req.body.user_name === dbUser[i].user_name && req.body.password === dbUser[i].password) {
          //do something here
          console.log(`user's data: ${dbUser[i]}`)
          res.json(dbUser[i])
        } else {
          res.status(404).end()
        }
      }
    })

  })

};

