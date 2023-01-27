const express = require("express");
const contact = express.Router();
const conntroller = require("../controllers/Contact");

// get

contact.route("/").get(conntroller.get);
contact.route("/").post(conntroller.create);
module.exports = contact;
