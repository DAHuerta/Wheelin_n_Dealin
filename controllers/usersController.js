var db = require("../models");

// Routes =============================================================
module.exports = function (app) {

  //link up to the new user signup page
  app.get('/signup', function (req, res) {
    res.render('notmember', { layout: 'main.handlebars' });
  });
  //link up to the profile page
  app.get('/login', function (req, res) {
    res.render('profile', { layout: 'main.handlebars' });
  });

  //post route to confirm username have not been taken:
  app.post("/api/newuser", function (req, res) {

    db.Users.findAll({}).then(function (dbUser) {
      for (var i = 0; i < dbUser.length; i++) {
        if (req.body.email === dbUser[i].user_name) {
          // console.log(res.json(`user: true`).end())
          return res.json(`old`).end()
        }
      }
      // create takes an argument of an object describing the item we want to insert
      // into our table. In this case we just we pass in an object with a text and
      // complete property
      db.Users.create({
        user_name: req.body.email,
        password: req.body.password,
      }).then(function (dbUsers) {
        // We have access to the new todo as an argument inside of the callback function
        console.log(dbUsers)
        res.json(`new`).end();
      }).catch(function (err) {
        console.log(err.message)
        res.send(err.message)
      });
    })
  })

  //get route for checking if user exist:
  app.post("/api/login", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Users.findAll({}).then(function (dbUser) {
      // console.log(req.body.user_name)
      // We have access to the cars as an argument inside of the callback function
      for (var i = 0; i < dbUser.length; i++) {
        if (req.body.email === dbUser[i].user_name && req.body.password === dbUser[i].password) {
          // console.log(dbUser)
          console.log(dbUser[i].id)
          return res.json(dbUser[i]).end()
        }
      }
      res.json(`notLogin`).end()
    })
  })

  //get route for user profile page
  app.get("/userprofile/:id", function(req, res){
    db.Users.findOne({ 
      where: 
      {id: req.params.id},
      include: [db.Cars]
    }).then(function(data){
      // console.log(data.Cars[0].id)
      var userCar = {
        postedCars: data.Cars
      }
      // res.json(data)
      // // console.log(data.Cars)
      res.render("profile2", userCar);
    })
  })
};

