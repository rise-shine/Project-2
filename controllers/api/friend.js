const router = require("express").Router();
var db = require("../../models");

// After the user signs in, this route will be called.
router.get("/list/:id", function(req, res) {
  // The code will read the Friends table and look for friends added by the user who's logged in.
  db.Friend.findAll({
    where: {
      UserId: req.params.id
    },
    include: [db.User]
  })
  // Then, it will render the friends list on the welcome page.
    .then(function(response) { 
      res.json(response);
    }).catch(err => {
      console.log(err);
      
    });
});

// When users select Add a new friend, this route will be called.
router.post("/create/:id", function(req, res) {

  //It should get the friend's name, DOB and relationship from the body of the request...
  const { name, friendDOB, friendRelationship } = req.body;

  //And the userId from the req.params.
  const id = req.params.id;

  //It will then create a friend for the user...
  db.Friend.create({
    name: name,
    dateOfBirth: friendDOB,
    relationship: friendRelationship,
    UserId: id
  })
    // ...and send that friend to the front end.
    .then(function(response) {

      res.json({
        name: response.dataValues.name,
        friendDOB: response.dataValues.dateOfBirth,
        friendRelationship: response.dataValues.relationship,
        friendID: response.dataValues.id
      });
      
    }).catch(err => {
      console.log(err);
    });
});

//If the user wants to delete a friend, this route will be called.
router.get("/delete/:id", function(req, res){
  //It will delete that friend from the Friends table based on the id passed with req.params.
  db.Friend.destroy({
    where: {
      id: req.params.id
    }
  }).then(()=>{
    res.send("id deleted: " + req.params.id);
  });
});


module.exports = router;