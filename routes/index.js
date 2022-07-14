const express = require("express");
const router = express.Router();
const misc = require("./misc");
const auth = require("./v1/auth");
const profile = require("./v1/profile");

module.exports = (app) => {
  app.use("/v1/auth", auth);
  app.use("/v1/profile", profile);

  
  app.use("/", misc);
};
