const mongoose = require("mongoose");
// Post model
const Schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    text: { type: String, required: true }, //!must  change
    uploadImage: { type: String },
    isPublished: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Post", Schema);
