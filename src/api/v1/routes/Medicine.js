const express = require("express");
const router = express.Router();
const conntroller = require("../controllers/Medicine");
// This is Medicine router
router.route("/").get(conntroller.Get);
router.route("/").post(conntroller.Post);
router.route("/search").post(conntroller.Search);
module.exports = router;
