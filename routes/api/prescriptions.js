const express = require("express");
const Prescription = require("../../models/prescription");
const User = require("../../models/user");
const router = express.Router();

// Get All Prescriptions
router.get("/", async function (req, res, next) {
  try {
    const mPresc = await Prescription.find({});
    if (mPresc !== null) {
      res.status(200).json(mPresc);
    } else {
      res.status(404).json({ message: "No Prescriptions Found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  next();
});

// Get One Prescription
// @GET public
router.get("/:id", async function (req, res, next) {
  try {
    const mPresc = await Prescription.findById({ _id: req.params.id });
    if (mPresc !== null) {
      res.status(200).json(mPresc);
    } else {
      res
        .status(404)
        .json({ message: `Prescription with id: ${req.params.id} not Found` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  next();
});

// Add a Prescription
// @POST public
router.post("/", async function (req, res, next) {
  try {
    let mPresc = await new Prescription({
      ailments: req.body.complaint.split(", "),
      complaint: req.body.complaint,
      user_id: req.body.user_id,
    }).save();
    let mUser = null;

    if (mPresc !== null) {
      // Add Prescription to the user prescrition array
      mUser = await User.findById({ _id: req.body.user_id });
      mUser.prescriptions = [...mUser.prescriptions, mPresc._id.toString()];
      mUser.save(); // Save Current Configuration of the user

      if (mUser !== null) {
        res.status(201).json({ message: "Prescription Added" });
      } else {
        res.status(404).json({ message: "Failed to add Prescrition to User" });
      }
    } else {
      res.status(400).json({ message: "Failed to add Prescription" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  next();
});

module.exports = router;
