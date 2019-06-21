const router = require("express").Router();
var db = require("../../../models");

router.get("/", function(req, res) {
  console.log("Hi");
});

// get route, edited to match sequelize
router.get("/user", function(req, res) {
  
  db.User.findAll()
    
    .then(function(dbFriend) {
      
      
      return res.json(dbFriend);
    });
});

// post route to create burgers
router.post("/friends/create", function(req, res) {
  // edited burger create to add in a burger_name
  db.Friend.create({
    name: req.body.name
  })
    // pass the result of our call
    .then(function(dbFriend) {
      // log the result to our terminal/bash window
      console.log(dbFriend);
      // redirect
      res.redirect("/");
    });
});

// put route to devour a burger
router.put("/friends/update", function(req, res) {
  // If we are given a customer, create the customer and give them this devoured burger
  if (req.body.friend) {
    db.Friend.create({
      friend: req.body.friend,
    })
      .then(function(dbFriend) {
        return db.Friend.update(
          {
            name: req.body.name
          },
          {
            where: {
              id: req.body.friend_id
            }
          }
        );
      })
      .then(function(dbFriend) {
        res.json("/");
      });
  }
  // If we aren't given a customer, just update the burger to be devoured
  else {
    db.Friend.update(
      {
        name: req.body.name
      },
      {
        where: {
          id: req.body.friend_id
        }
      }
    ).then(function(dbFriend) {
      res.json("/");
    });
  }
});

module.exports = router;