const mongoose = require("mongoose");

const ProductUserSchema = new mongoose.Schema({
  userId: {
    type: int,
    required: true
  },
  productId: {
    type: int,
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

userId
1
productId
1
createDate
"2023-02-14T06:44:00Z"
lastUpdate
"2023-02-13T06:44:00Z"

module.exports = mongoose.model("ProductUser", ProductUserSchema);