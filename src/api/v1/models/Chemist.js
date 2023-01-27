const mongoose = require("mongoose");
// Chemist model
const Schema = new mongoose.Schema({
  name: { type: String, required: true },
  map: { type: String, required: true }, //must  change
  workingDay: { type: String, required: true },
  licence: { type: String, required: true }, //must  change
  phone: { type: String, required: true },
  login: { type: String, required: true },
  password: { type: String, required: true },
  pharmacist: {}, //must  change
  isPublished: { type: Boolean, default: false },
  createdAt: Date,
  updateAt: Date,
});
module.exports = mongoose.model("Chemist", Schema);
