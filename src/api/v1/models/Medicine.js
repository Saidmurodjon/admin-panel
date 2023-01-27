const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  about: { type: String, required: false }, //must be  changed type file
  quantity: { type: String, default: 0 },
  price: { type: String, required: true },
  images: { type: String, required: false }, //must be  changed
  sale: { status: false, offer: 0 }, //must be  changed
  validity: {
    from: Date,
    to: Date,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Chemist",
  },
  isPublished: { type: Boolean, default: false },
  createdAt: Date,
  updateAt: Date,
});
module.exports = mongoose.model("Medicine", Schema);
