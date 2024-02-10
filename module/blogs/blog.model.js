const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;
const blogSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  author: { type: ObjectId, required: true },
  sulify: { type: String, default: true },
  content: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
  createAt: { type: Date, default: Date.now },
});
module.exports = new model("Blog", blogSchema);
