const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
    required: false,
  },
  qualification: {
    type: String,
    required: true,
    default: "BSc",
  },
});

module.exports = mongoose.model("doctor", DoctorSchema);
