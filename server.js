const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require("./routes/api/users");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

//Connect to Mongo
mongoose
    .connect(process.env.MONGODB_URI || db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB Connected! ");
    })
    .catch((err) => console.log(err));

// Use Routes
app.use("/api/users", items);

const port = process.env.PORT || 5000;

// step 3
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build/"));
}

app.listen(port, () => console.log("Server started on : " + port));
