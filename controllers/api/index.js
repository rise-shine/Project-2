const router = require("express").Router();
const userRoutes = require("./user");
const giftRoutes = require("./gift");

router.use("/user", userRoutes);

router.use("/gift", giftRoutes);

module.exports = router;
