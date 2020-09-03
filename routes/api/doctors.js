const express = require("express");
const Doctor = require("../../models/user");
const router = express.Router();

// @GET Request
// @Get All Doctors
router.get("/", async function (req, res, next) {
  try {
    const mDoctors = await Doctor.find();
    res.status(200).json(mDoctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  next();
});

// @GET Request for one Doctor
// @GET One Doctor
router.get("/:id", async function (req, res, next) {
  try {
    const mDoctor = await Doctor.findById({ _id: req.params.id });
    res.status(200).json(mDoctor);
  } catch (error) {
    res.status(500).json({ message: `User ${req.params.id} is available` });
  }
  next();
});

// @POST request for adding a Doctor
// Add a user
router.post("/", async function (req, res, next) {
  try {
    let mDoctor = await new Doctor(req.body).save();
    res.status(201).json({ object: mDoctor });
    // console.log(mDoctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  next();
});

// @PUT Request for updating Doctor
// Update User
// router.put("/:id", getDoctor, async function (req, res, next) {
router.put("/:id", async function (req, res, next) {
  try {
    await Doctor.findByIdAndUpdate({ _id: req.params.id }, req.body);
    const mDoctor = await Doctor.findById({ _id: req.params.id });
    // console.log(mDoctor);
    res.status(200).json(mDoctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  next();
});

// @DELETE Request for removing doctor
// Delete User
router.delete("/:id", async function (req, res, next) {
  try {
    await Doctor.findByIdAndRemove({ _id: req.params.id });
    res.status(200).json({ message: "Deleted the user" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  next();
});

//////////////////////////////////////////////////////////
// This is a middle ware function to get user with
// A particular id: will be used by PATCH/PUT & DEL
// Will Add and extran object to response: res.new_object;
//////////////////////////////////////////////////////////
async function getDoctor(req, res, next) {
  let sDoctor;
  try {
    sDoctor = await Doctor.findById(req.params.id);
    if (sDoctor === null) {
      return res.status(404).json({ message: "Doctor Not Found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.doctor = sDoctor;
  next();
}
////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

module.exports = router;
