const router = require("express").Router();
var db = require("../../models");

router.get("/", function(req, res) {
  console.log("Hi");
});

router.get("/welcome", function(req, res) {
  db.User.findAll({})
    
    .then(function(response) {

    res.json(response); 
        
    }).catch(err => {
      console.log(err);
      
    });

})

// After the user signs in, the code will read the DB. Then, it will render the friends in the welcome page
router.get("/welcome/:email/:password", function(req, res) {
  
  db.User.findOne({

    where: {
      email: req.params.email
    }
  })
    
    .then(function(response) {

    if (req.params.password === response.dataValues.password) {

      console.log(response.dataValues.id, response.dataValues.name, response.dataValues.email);
        res.json({
          userID: response.dataValues.id,
          name: response.dataValues.name
        });

    }   
        
    }).catch(err => {
      console.log(err);
      
    });
});

// post route to create burgers
router.post("/create", function(req, res) {
  const { name, email, password } = req.body;

  console.log(name, email, password);
  
  // edited burger create to add in a burger_name
  db.User.create({
    name: name,
    email: email,
    password: password
  })
    // pass the result of our call
    .then(function(response) {

      console.log(response.dataValues.id, response.dataValues.name);
      res.json({
        userID: response.dataValues.id,
        name: response.dataValues.name
      });
      
    }).catch(err => {
      console.log(err);
    });
});

// // put route to devour a burger
// router.put("/friends/update", function(req, res) {
//   // If we are given a customer, create the customer and give them this devoured burger
//   if (req.body.friend) {
//     db.Friend.create({
//       friend: req.body.friend,
//     })
//       .then(function(dbFriend) {
//         return db.Friend.update(
//           {
//             name: req.body.name
//           },
//           {
//             where: {
//               id: req.body.friend_id
//             }
//           }
//         );
//       })
//       .then(function(dbFriend) {
//         res.json("/");
//       });
//   }
//   // If we aren't given a customer, just update the burger to be devoured
//   else {
//     db.Friend.update(
//       {
//         name: req.body.name
//       },
//       {
//         where: {
//           id: req.body.friend_id
//         }
//       }
//     ).then(function(dbFriend) {
//       res.json("/");
//     });
//   }
// });

module.exports = router;