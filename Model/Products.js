const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  id: {
    type: int,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: double,
    required: true
  },
  qualification: {
    type: int,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  lastUpdate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Products", ProductsSchema);