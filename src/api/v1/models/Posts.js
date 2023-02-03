const mongoose = require("mongoose");
// Chemist model
const UploadedFile = new mongoose.Schema({
  path: String,
  type: String,
  size: Number,
  folder: String,
  filename: String,
});
const Schema = new mongoose.Schema(
  {
    // title: { type: String, required: true },
    // text: { type: String, required: true }, //!must  change
    uploadImage: { type: String },
    isPublished: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Post", Schema);
