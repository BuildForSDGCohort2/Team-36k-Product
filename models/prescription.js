const mongoose = require("mongoose");

const PrescriptionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dosage: {
    type: String,
    required: true,
  },
  signature: {
    type: String,
    required: true,
    default: "Digipharm",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Prescriptions", PrescriptionSchema);
