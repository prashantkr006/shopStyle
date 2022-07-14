const express = require("express");
const validator = require("../../middlewares/validator");
const auth = require("../../middlewares/auth");
const profile = require("../../controllers/profile/profile");

const router = express.Router();
//get Profile Details
router.get("/details", auth.auth, profile.userDetails );
//Update Profile Details
router.put("/details", auth.auth, profile.userUpdate );

module.exports = router;