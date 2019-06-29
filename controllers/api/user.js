const router = require("express").Router();
var db = require("../../models");

//Requiring packages necessary to encrypt/decrypt the user's password.
var cors = require("cors");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

router.use(cors());
process.env.SECRET_KEY = "secret";

//On Sign Up, the route below will be called.
router.post("/create", function(req, res) {

  //It will take in the information contained in req.body...
  var { userName, email, password } = req.body;

  //...encrypt the password...
  var hash = bcrypt.hashSync(password, 10);
  password = hash;

  // ...and post the new user in the DB.
  db.User.create({
    name: userName,
    email: email,
    password: password
  })
    //It will then add a token to that user and send the response to the front end.
    .then(function(response) {

      var token = jwt.sign(response.dataValues, process.env.SECRET_KEY, {
        expiresIn: 1440 
      });
     
      res.json({
        userID: response.dataValues.id,
        name: response.dataValues.name,
        token: token
      });
    })
    //If there's any issue, it should catch the error and handle it.
    .catch(err => {
      console.log(err);
      res.send("Error: " + err);
    });
});

//Route created for testing purposes, to make sure users are being posted in the Users table as we're developing the app.
router.get("/welcome", function(req, res) {
  db.User.findAll({})
    .then(function(response) {
      res.json(response);
    })
    .catch(err => {
      console.log(err);
    });
});

//On Sign In, this route will be called.
router.post('/welcome/:email/:password', function (req, res) {
  
  //It will try to locate a user that's registered under the same email address our user is trying to sign in with.
  db.User.findOne({
    where: {
      email: req.params.email
    }
  }).then(function (response) {
    
    //If no user is found, it should send an error to the front end, and ask the user to register an account first.
    if (!response) {
      res.send("You haven't registered an account yet. Click Create New Account to get started.");
    } else {
      //Otherwise, it will compare the password entered by the user with the encrypted password contained in the DB and allow the user to sign in if they match.
      bcrypt.compare(req.params.password, response.password, function (err, result) {
        res.json(result);
      });
    }
  });
});

//After checking if the user is allowed to sign in, this route will be called.
router.get("/welcome/:email", function(req, res) {
  
  //It will look for that same user...
  db.User.findOne({
    where: {
      email: req.params.email
    }
  })

    .then(function(response) {

      //But this time, it will pass the ID and name of the user to the front end.
      res.json({
        userID: response.dataValues.id,
        name: response.dataValues.name
      });
    })
    //It should catch and handle any errors that may occur.
    .catch(err => {
      console.log(err);
      res.send("Error: " + err);
    });
});

module.exports = router;
