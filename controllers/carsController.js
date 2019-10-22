var db = require("../models");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Cars.findAll({}).then(function (dbCars) {
      // We have access to the cars as an argument inside of the callback function
      var carOb = {
        cars: dbCars.slice(0, 5)
      }
        console.log(carOb)
        res.render("index", carOb);

    });
  });

  // GET route for getting all of the cars
  app.get("/inventory", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Cars.findAll({}).then(function (dbCars) {
      // We have access to the cars as an argument inside of the callback function
      var carOb = {
        cars: dbCars
      }
        console.log(carOb)
        res.render("inventory", carOb);

    });
  });


  app.get("/login", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Cars.findAll({}).then(function(dbCars) {
      // We have access to the cars as an argument inside of the callback function
      var dbCars = {
        cars: dbCars
      }
      console.log(dbCars)
      // res.json(dbCars)
      res.render("index", dbCars);
    });
  });

  //render user page
  app.get('/postcar', function (req, res) {
    res.render('postcar', { layout: 'main.handlebars' });
  });

  app.get("/carma_sutra", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Cars.findAll({}).then(function (dbCars) {
      // We have access to the cars as an argument inside of the callback function
      var secretOb = {
        cars: dbCars
      }
        console.log(secretOb)
        res.render("secret", secretOb);

    });
  });

  // POST route for saving a new todo
  app.post("/api/newcars", function (req, res) {
    // create takes an argument of an object describing the item we want to insert
    // into our table. In this case we just we pass in an object with a text and
    // complete property
    db.Cars.create({
      model: req.body.model,
      make: req.body.make,
      year: req.body.year,
      mileage: req.body.mileage,
      type: req.body.type,
      color: req.body.color,
      price: req.body.price,
      image: req.body.image,
      hidden: req.body.hidden
    }).then(function (dbCars) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbCars);
    }).catch(function (err) {
      console.log(err.message)
      res.send(err.message)
    });

  });

  // DELETE route for deleting cars. We can get the id of the todo to be deleted
  // from req.params.id
  app.delete("/api/cars/:id", function (req, res) {
    // Destroy takes in one argument: a "where object describing the cars we want to destroy
    db.Cars.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbCars) {
        res.json(dbCars);
      });

  });
  // PUT route for updating cars. We can get the updated todo data from req.body
  app.put("/api/cars/update/:id", function (req, res) {
    // Update takes in two arguments, an object describing the properties we want to update,
    // and another "where" object describing the cars we want to update
    db.Cars.update({
      model: req.body.model,
      make: req.body.make,
      year: req.body.year,
      mileage: req.body.mileage,
      type: req.body.type,
      color: req.body.color,
      price: req.body.price,
      image: req.body.image,
      hidden: req.body.hidden
    }, {
      where: {
        id: req.params.id
      }
    })
      .then(function (dbCars) {
        res.json(dbCars);
      });
  });

};
