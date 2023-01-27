const express = require("express");
const router = express.Router();
const conntroller = require("../controllers/User");
const Authentication = require("../middlewares/Authentication");
// This is user conntroller

router.route("/").get( conntroller.Get);
router.route("/").post(conntroller.Post);
module.exports = router;
