const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();
// const bodyParser = require("body-parser");

// Create express server instance
const app = express();
// DB Config
const db = require("./config/keys").MONGODB_URI;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || db, {
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
app.use(express.json());

// Use Routes
// app.use("/api" /* Use Doctores Routes */);
const doctorsRoutes = require("./routes/api/doctors");
app.use("/api/doctors", doctorsRoutes); /* Use Doctores Routes */

const usersRoutes = require("./routes/api/users");
app.use("/api/users", usersRoutes); /* Use Users Routes */

// const prescriptionsRoutes = require("./routes/api/prescriptions");
// app.use("/api/prescriptions", prescriptionsRoutes); /* Use Doctores Routes */

// Step 3 - Prepare build directory for heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build/"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "/client", "build", "index.html"));
  });
  app.use("*/api/users", usersRoutes); /* Use Users Routes */
  app.use("*/api/doctors", doctorsRoutes); /* Use Doctores Routes */
}

// Setup the ports
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => console.log("Server started on : " + port));
