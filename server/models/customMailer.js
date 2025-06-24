const mongoose = require("mongoose");
const { Schema } = mongoose;

const mailSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true, 
  },
  recipient: {
    type: String,
    required: true,
  },
  sender: {
    type: String,
    required: true, 
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Optional: Index the recipient and timestamp for faster queries
mailSchema.index({ recipient: 1 });
mailSchema.index({ timestamp: -1 });

const mailModel = mongoose.model("customMail", mailSchema);

module.exports = mailModel;
