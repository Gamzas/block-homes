const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const connect = () => {
  mongoose
    .connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connection Success"))
    .catch((error) => console.log(error));
};

mongoose.connection.on("error", (error) => {
  console.error(error);
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected");
  connect();
});

module.exports = app;
