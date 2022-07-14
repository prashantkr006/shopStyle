const jwt = require("jsonwebtoken");
const JWTHelper = require("../utils/jwt");
const asyncHandler = require("../utils/async");


exports.auth = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    res.status(401).json({data: [],message: "You are not logged in. Please login first." });
  }

  try {
    req.token = token;
    req.user = await JWTHelper.verifyToken(token);
    next();
  } catch (error) {
   res.status(401).json({data: [],message: "You are not logged in. Please login first." });
  }
});

exports.access = () => {
  return true
};