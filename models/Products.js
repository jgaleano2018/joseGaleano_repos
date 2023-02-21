const { Decimal128 } = require("bson");
const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Decimal128,
    required: true
  },
  qualification: {
    type: Number,
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