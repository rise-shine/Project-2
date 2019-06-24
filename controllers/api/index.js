const router = require("express").Router();
const userRoutes = require("./user");
const friendRoutes = require("./friend");

router.use("/user", userRoutes);
router.use("/friend", friendRoutes);

module.exports = router;