// *****************************************************************************
// **** api-routes.js - this file offers a set of routes for displaying and
// saving data to the db
// ******************************************************************************
// *** Dependencies

// Requiring our models
var db = require("../models");

// Routes =============================================================
module.exports = function(app) {

  // GET route for getting all of the cars
  app.get("/api/users", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Users.findAll({}).then(function(dbUsers) {
      // We have access to the cars as an argument inside of the callback function
      res.json(dbUsers);
    });
  });

  //link up to the new user signup page 

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
      fav_make: req.body.favMake,
      authorized: req.body.authorized
    }).then(function(dbUsers) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbUsers);
    }).catch(function(err){
      console.log(err.message)
      res.send(err.message)
    });

  });

  // DELETE route for deleting cars. We can get the id of the todo to be deleted
  // from req.params.id
  app.delete("/api/users/:id", function(req, res) {
    // Destroy takes in one argument: a "where object describing the cars we want to destroy
    db.Users.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbUsers) {
        res.json(dbUsers);
      });

  });
  // PUT route for updating cars. We can get the updated todo data from req.body
  app.put("/api/users/update/:id", function(req, res) {
    // Update takes in two arguments, an object describing the properties we want to update,
    // and another "where" object describing the cars we want to update
    db.Todo.update({
        user_name: req.body.name,
        password: req.body.password,
        favorite_color: req.body.favColor,
        favorite_type: req.body.favType,
        fav_make: req.body.favMake,
        authorized: req.body.authorized
    }, {
      where: {
        id: req.params.id
      }
    })
      .then(function(dbUsers) {
        res.json(dbUsers);
      });
  });

};
