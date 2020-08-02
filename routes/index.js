const router = require("express").Router();

router.use("/api", require("./ChangeCoinApi"));

module.exports = router;