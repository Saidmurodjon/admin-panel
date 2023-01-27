const mongoose = require("mongoose");
const DescriptionSchema = mongoose.Schema({
   AZ: String,
   ENG: String,
   RU: String,
});
const ContactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  date: Date,
});
module.exports = mongoose.model("Contact", ContactSchema);
