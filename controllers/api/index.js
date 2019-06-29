const router = require("express").Router();

//Defining which routes the app will work with on the backend
const userRoutes = require("./user");
const friendRoutes = require("./friend");
const giftRoutes = require("./gift");

//Defining how Express will work with the routes
router.use("/user", userRoutes);
router.use("/friend", friendRoutes);
router.use("/gift", giftRoutes);

module.exports = router;