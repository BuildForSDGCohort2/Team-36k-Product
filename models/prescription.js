const { ObjectID } = require("mongodb");
const mongoose = require("mongoose");

const PrescriptionSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  complaint: {
    type: String,
    required: true,
  },
  ailments: {
    type: [String],
    required: false,
  },
  dosage: {
    type: [String],
    required: false,
  },
  signature: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("prescriptions", PrescriptionSchema);
