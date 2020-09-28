const express = require("express");
const User = require("../../models/user");
const router = express.Router();
const bcrypt = require("bcrypt");

// @GET Request
// Get All Users
router.get("/", async function (req, res, next) {
  try {
    const mUsers = await User.find();
    res.status(200).json(mUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  next();
});

// @GET Request for one User
// GET One User
router.get("/:id", async function (req, res, next) {
  try {
    const mUsers = await User.findById({ _id: req.params.id });
    res.status(200).json(mUsers);
  } catch (error) {
    res.status(404).json({ message: `User ${req.params.id} is unavailable` });
  }

  next();
});

// @POST request for adding a User
// Add a user
router.post("/", async function (req, res, next) {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // console.log("Salt: " + salt);
    // console.log("Password: " + hashedPassword);
    // let mUsers = await new User(req.body).save();

    let mUsers = await new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      phoneNumber: req.body.phoneNumber,
    }).save();

    if (mUsers !== null) {
      res.status(201).json({ object: mUsers });
    } else {
      res.json({ messae: "Failed to Create User" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  next();
});

// @PUT Request for updating User
// Update User
// router.put("/:id", getDoctor, async function (req, res, next) {
router.put("/:id", async function (req, res, next) {
  try {
    await User.findByIdAndUpdate({ _id: req.params.id }, req.body);
    const mUsers = await User.findById({ _id: req.params.id });
    // console.log(mUsers);
    res.status(200).json(mUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  next();
});

// @DELETE Request for removing doctor
// Delete User
router.delete("/:id", async function (req, res, next) {
  try {
    await User.findByIdAndRemove({ _id: req.params.id });
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
async function getUser(req, res, next) {
  let sUser;
  try {
    sUser = await User.findById(req.params.id);
    if (sUser === null) {
      return res.status(404).json({ message: "User Not Found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.doctor = sUser;
  next();
}
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

module.exports = router;
