const router = require("express").Router();
var db = require("../../models");

/*router.get("/", function(req, res) {
  console.log("api Hi");
});

 After the user signs in, the code will read the DB. Then, it will render the friends in the welcome page
router.get("/welcome/:email", function(req, res) {
  db.User.findOne({
    where: {
      email: req.params.email
    }
  })

    .then(function(response) {
      console.log(
        response.dataValues.id,
        response.dataValues.name,
        response.dataValues.email
      );
      res.json({
        userID: response.dataValues.id,
        name: response.dataValues.name
      });
    })
    .catch(err => {
      console.log(err);
    });
});*/

router.post("/create", function(req, res) {
  const { userId, giftName, giftDesc, holiday, friendName } = req.body;

  console.log(userId, giftName, giftDesc, holiday, friendName);

  db.Gift.create({
    userId: userId,
    itemName: giftName,
    comments: giftDesc,
    holiday: holiday
  })
    // pass the result of our call
    .then(function(response) {
      console.log("api", response);
      /*res.json({
        userID: response.dataValues.id,
        name: response.dataValues.name
      });*/
    })
    .catch(err => {
      console.log(err);
    });
});
