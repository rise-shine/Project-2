const router = require("express").Router();
const userRoutes = require("./user");
const friendRoutes = require("./friend");
const giftRoutes = require("./gift");

router.use("/user", userRoutes);
router.use("/friend", friendRoutes);
router.use("/gift", giftRoutes);

module.exports = router;