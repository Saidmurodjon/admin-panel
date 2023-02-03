const express = require("express");
const router = express.Router();
// const path=require('path')

const users = require("./User");
const chemists = require("./Posts");
const contact = require("./Contact");
const login = require("../auth/Router");
// const Authentication = require("../middlewares/Authentication");
// router
router.get("/", (req, res) => {
  return res.send("Backend is working ...");
});
router.use("/login", login);
// router.use(Authentication);
router.use("/users", users);
router.use("/chemists", chemists);
router.use("/contact", contact);
module.exports = router;
