const router = require("express").Router();
var db = require("../../models");

router.get("/", function(req, res) {
  console.log("Hi");
});

// After the user signs in, the code will read the DB. Then, it will render the friends in the welcome page
router.get("/list/:id", function(req, res) {
  
  db.Friend.findAll({
    where: {
      UserId: req.params.id
    },
    include: [db.User]
  })
    
    .then(function(response) { 

        // response.map(friend => {

        //   friendObj = {
        //     friendID: friend.dataValues.id,
        //     friendName: friend.dataValues.name,
        //     friendDOB: friend.dataValues.dateOfBirth,
        //     friendRelationship: friend.dataValues.relationship
        //   }
        //   console.log(friendObj);
        // });
    res.json(response);
    }).catch(err => {
      console.log(err);
      
    });
});

// post route to create burgers
router.post("/create/:id", function(req, res) {
  const { friendName, friendDOB, friendRelationship } = req.body;
  const id = req.params.id;

  console.log(friendName, friendDOB, friendRelationship, id);
  
  db.Friend.create({
    name: friendName,
    dateOfBirth: friendDOB,
    relationship: friendRelationship,
    UserId: id
  })
    // pass the result of our call
    .then(function(response) {

      res.json({
        friendName: response.dataValues.name,
        friendDOB: response.dataValues.dateOfBirth,
        friendRelationship: response.dataValues.relationship,
        friendID: response.dataValues.id
      });
      
    }).catch(err => {
      console.log(err);
    });
});


module.exports = router;