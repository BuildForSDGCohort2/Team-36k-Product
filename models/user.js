const mongoose = require("mongoose");
// const Prescriptions = require("../models/prescription");

const PrescriptionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ailments: {
    type: [String],
    required: true,
  },
  dosage: {
    type: String,
    required: true,
  },
  signature: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const UserSchema = new mongoose.Schema({
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
  password: {
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
    default: "Unset",
  },
  prescriptions: {
    type: [PrescriptionSchema],
    required: false,
  },
});

module.exports = mongoose.model("user", UserSchema);
