const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSchema = new Schema({
    name: {
        type: String,
        default: "Admin",
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    req_date: {
        type: Date,
        required: true
    }
})

const adminModel = mongoose.model("admin", adminSchema);

module.exports = adminModel;