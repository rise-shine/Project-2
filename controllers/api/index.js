const router = require("express").Router();
const userRoutes = require("./user");

const giftRoutes = require("./gift");

const friendRoutes = require("./friend");


router.use("/user", userRoutes);
router.use("/friend", friendRoutes);

router.use("/gift", giftRoutes);

module.exports = router;
