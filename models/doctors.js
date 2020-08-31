const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
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

module.exports = mongoose.model("doctors", DoctorSchema);
