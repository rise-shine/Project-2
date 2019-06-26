const router = require("express").Router();
var db = require("../../models");

// // After the user signs in, the code will read the DB. Then, it will render the friends in the welcome page
router.get("/list", function(req, res) {
  db.Gift.findAll()
    .then(function(response) {
      res.json(response);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/list/:id", function(req, res) {
  db.Gift.findAll({
    where: {
      FriendId: req.params.id
    },
    include: [db.Friend]
  })

    .then(function(response) {
      res.json(response);
    })
    .catch(err => {
      console.log(err);
    });
});

// post route to create gifts
router.post("/create/:id", function(req, res) {
  console.log(req);
  const { user, giftName, giftDesc, holiday } = req.body;
  const id = req.params.id;

  console.log("router", user, giftName, giftDesc, holiday, id);

  db.Gift.create({
    id: user,
    itemName: giftName,
    comments: giftDesc,
    holiday: holiday,
    FriendId: id,
    completed: false
  })
    // pass the result of our call
    .then(function(response) {
      res.json(response);
    })
    .catch(err => {
      console.log("there was a problem", err);
    });
});

module.exports = router;