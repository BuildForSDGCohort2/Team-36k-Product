const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

// Create express server instance
const app = express();
// DB Config
const db = require("./config/keys").mongoURI;

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

// // Bodyparser Middleware
// app.use(bodyParser.json());
// Setup Middle Wares
app.use(express.json());

// Use Routes
// app.use("/api" /* Use Doctores Routes */);
const doctorsRoutes = require("./routes/api/doctors");
app.use("/api/doctors", doctorsRoutes); /* Use Doctores Routes */

// const usersRoute = require("./routes/api/users");
// app.use("/api/users", usersRoute); /* Use Doctores Routes */

// const prescriptionsRoutes = require("./routes/api/prescriptions");
// app.use("/api/prescription", prescriptionsRoutes); /* Use Doctores Routes */

// Step 3 - Prepare build directory for heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build/"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "/client", "build", "index.html"));
  });
}

// Setup the ports
const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => console.log("Server started on : " + port));
