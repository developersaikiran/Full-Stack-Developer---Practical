const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth/auth.routes"))
// router.use("/", require("./common"))
// router.use("/seller", require("./seller"))
// router.use("/buyer", require("./buyer"))
// router.use("/admin", require("./admin"))

module.exports = router