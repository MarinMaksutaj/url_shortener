const mongoose = require("mongoose");

const { Schema } = mongoose;


//here goes the urlshorten schema in mongoose
const urlShortenSchema = new Schema({

  originalUrl: String,
  urlCode: String,
  shortUrl: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }

});




mongoose.model("UrlShorten", urlShortenSchema);