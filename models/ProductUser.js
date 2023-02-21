const mongoose = require("mongoose");

const ProductUserSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true
  },
  productId: {
    type: Number,
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

module.exports = mongoose.model("ProductUser", ProductUserSchema);