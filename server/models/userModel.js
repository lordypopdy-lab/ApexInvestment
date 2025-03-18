const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  country: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  account: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profit: {
    type: Number,
    default: 0,
    required: false
  },
  deposit: {
    type: Number,
    default: 0,
    required: false
  },
  bonuse: {
    type: Number,
    default: 0,
    required: false
  },
  req_date: {
    type: Date,
    required: true,
  }
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
