const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  dateNow: { type: Date, default: Date.now, required: true },
  datePub: { type: Date, required: true },
  url: { type: String, required: true},
  imgSrc: {type: String, required: true}
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;

