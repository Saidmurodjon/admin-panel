const mongoose = require("mongoose");
// This is User model
const Schema = new mongoose.Schema({
  firstName: { type: String, require: false },
  lastName: { type: String, require: false },
  age: { type: Number, require: false },
  phone: { type: String, default: "+998" },
  email: { type: String, require: true },
  password: { type: String, require: true },
  createdAt: Date,
  updateAt: Date,
});
module.exports = mongoose.model("User", Schema);
  