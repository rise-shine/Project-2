const router = require("express").Router();
var db = require("../../models");

// This was a route created for testing purposes as we work on developing the app.
router.get("/list", function(req, res) {  
  db.Gift.findAll()
    .then(function(response) { 
      res.json(response);
    }).catch(err => {
      console.log(err);
    });
});

//If the user wants to see all gift ideas for a specific friend, this route will be called.
router.get("/list/:id", function(req, res) {
  
  //It will find all the items in the Gifts table that are not marked as purchased and belong to that friend.
  db.Gift.findAll({
    where: {
      FriendId: req.params.id,
      completed: false
    },
    include: [db.Friend]
  })
    //It will then send the response to the front end.
    .then(function(response) { 
      res.json(response);
    }).catch(err => {
      console.log(err);
    });
});

// If the user wants to see all gifts purchased for a specific friend, this route will be called.
router.get("/purchased/:id", function(req, res) {
  
  //It will find all the items in the Gifts table that are marked as purchased and belong to that friend.
  db.Gift.findAll({
    where: {
      FriendId: req.params.id,
      completed: true
    },
    include: [db.Friend]
  })
    //It will then send the response to the front end.
    .then(function(response) { 
      res.json(response);
    }).catch(err => {
      console.log(err);  
    });
});

//When the user wants to add a gift, this route will be called.
router.post("/create/:id", function(req, res) {
  //It will take in the gift details from req.body, and the friendId from req.params.
  const { itemName, comments, price } = req.body;
  const id = req.params.id;

  //It will then create the gift and save it in the DB...
  db.Gift.create({
    itemName: itemName,
    comments: comments,
    price: price,
    FriendId: id
  })
    //... and send the response to the front end.
    .then(function(response) {

      res.json(response);
     
    }).catch(err => {
      console.log("there was a problem", err);
    });
});

//If the user wants to mark a gift as purchased, this route will be called.
router.get("/update/:id", function(req, res) {

  //It will update the Gift in the DB...
  db.Gift.update({
    completed: true
  },{
    where: {
      id: req.params.id
    }
  })
  //...and send the response to the front end.
    .then(function(response) {
      res.json(response);
    });
});

module.exports = router;
