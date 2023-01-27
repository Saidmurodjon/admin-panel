const express = require("express");
const router = express.Router();
const conntroller = require("../controllers/Chemist");

router.route("/").get(conntroller.Get);
router.route("/").post(conntroller.Post);
module.exports = router;
