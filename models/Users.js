const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  eamil: {
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

module.exports = mongoose.model("Users", UsersSchema);