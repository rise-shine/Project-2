const router = require("express").Router();
var db = require("../../models");

// // After the user signs in, the code will read the DB. Then, it will render the friends in the welcome page
router.get("/list", function(req, res) {
  
  db.Gift.findAll()
  .then(function(response) { 
    res.json(response);
    }).catch(err => {
      console.log(err);
      
    });
});


router.get("/list/:id", function(req, res) {
  
  db.Gift.findAll({
    where: {
      FriendId: req.params.id,
      completed: false
    },
    include: [db.Friend]
  })
    
    .then(function(response) { 
    res.json(response);
    }).catch(err => {
      console.log(err);
      
    });
});

router.get("/purchased/:id", function(req, res) {
  
  db.Gift.findAll({
    where: {
      FriendId: req.params.id,
      completed: true
    },
    include: [db.Friend]
  })
    
    .then(function(response) { 
    res.json(response);

    console.log(response)
    }).catch(err => {
      console.log(err);
      
    });
});

// post route to create gifts

router.post("/create/:id", function(req, res) {
  const { itemName, comments, price } = req.body;
  const id = req.params.id;

  console.log(itemName, comments, price, id);
  
  db.Gift.create({
    itemName: itemName,
    comments: comments,
    price: price,
    FriendId: id
  })
    // pass the result of our call
    .then(function(response) {

    res.json(response);
     
    }).catch(err => {
      console.log("there was a problem", err);
    });
});

router.get("/update/:id", function(req, res) {

  db.Gift.update({
    completed: true
  },{
    where: {
      id: req.params.id
    }
  })
    .then(function(response) {
      res.json(response);

      console.log(response);
    });
});

module.exports = router;
