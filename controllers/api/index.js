const router = require("express").Router();
const friendRoutes = require("./friend");
var db = require("../../models");

router.use("/friend", friendRoutes);
router.get("/user", function(req, res) {
  
    db.User.findAll()
      
      .then(function(dbFriend) {
        
        
        return res.json(dbFriend);
      });
  });
module.exports = router;