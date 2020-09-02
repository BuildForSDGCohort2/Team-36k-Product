const express = require("express");
const router = express.Router();

// Get All Users
router.get("/", function (req, res, next) {
  res.status(200).json({ message: "Getting All the Doctors" });
});

// Get One User
router.get("/:id", function (req, res, next) {
  res.status(200).json({ message: `User ${req.params.id} is available` });
});

// Add a user
router.post("/", function (req, res, next) {
  Doctor.create(req.body)
    .then((doctor) => {})
    .catch((error) => {});
  res.status(200).json({ message: "User was Created" });
});

// Update User
router.put("/:id", function (req, res, next) {
  res.status(200).json({ message: "Updated the User" });
});

// Delete User
router.delete("/:id", function (req, res, next) {
  res.status(200).json({ message: "Deleted the user" });
});

module.exports = router;
