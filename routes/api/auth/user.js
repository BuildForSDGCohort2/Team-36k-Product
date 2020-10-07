const express = require("express");
const User = require("../../../models/user");
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

//////////////////////////////////////////////
// @POST request for adding a User
// Creating a user account
router.post("/", async function (req, res, next) {
  try {
    let tempUser = await User.findOne({ email: req.body.email });
    if (tempUser !== null)
      return res
        .status(403)
        .json({ message: "A Use With that Email Already Exist" });

    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      let mUsers = await new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
        phoneNumber: req.body.phoneNumber,
      }).save();

      res.status(201).json({ object: mUsers });
      // console.log(mUsers);
    } catch (error) {
      res.status(500).send();
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  next();
});

////////////////////////////////////////
// @POST request for login
//logging in a User
router.post("/login", async function (req, res, next) {
  try {
    let mUser = await User.findOne({ email: req.body.email });

    // console.log("Database Response: ", mUser);

    if (mUser === null)
      return res.status(404).json({ message: "User Does Not Exist" });

    try {
      let result = await bcrypt.compare(req.body.password, mUser.password);
      if (result) {
        res.status(200).json({
          message: "Logged In",
          id: mUser._id,
          fname: mUser.firstName,
        });
      } else {
        res.status(401).json({ message: "Incorrect Username or Password" });
      }
    } catch (error) {
      res.status(500).send();
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
////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

module.exports = router;
