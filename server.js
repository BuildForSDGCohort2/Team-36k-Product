const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

// Create express server instance
const app = express();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB Connected! ");
  })
  .catch((err) => console.log(err));

// Setup Middle Wares
// JSON Middleware
app.use(cors());
app.use(express.json());

// Use Routes
// API Doctors
app.use("/api/doctors", require("./routes/api/doctors"));
// API Users
app.use("/api/users", require("./routes/api/users"));
// API Prescriptions
app.use("/api/prescriptions", require("./routes/api/prescriptions"));

// AUTH Doctors
// app.use("/api/auth/user", require("./routes/api/auth/doctor"));
// AUTH Users
app.use("/api/auth/user", require("./routes/api/auth/user"));


// const prescriptionsRoutes = require("./routes/api/prescriptions");
// app.use("/api/prescriptions", prescriptionsRoutes); /* Use Doctores Routes */

// Step 3 - Prepare build directory for heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build/"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "/client", "build", "index.html"));
  });
  // app.use("*/api/users", usersRoutes); /* Use Users Routes */
  // app.use("*/api/doctors", doctorsRoutes); /* Use Doctores Routes */
}

// Setup the ports
const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => console.log("Server started on : " + port));
