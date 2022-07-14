const { body, validationResult } = require("express-validator");
const knex = require("../config/knex");

const trimSpaces = (string) => {
  return string.replace(/\s+/g, " ");
};

exports.emailExists = async (email) => {
  return await knex.select("user_id").from("users").where("email", "=", email);
};

exports.checkEmail = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required.")
      .isEmail()
      .withMessage("Email is not valid."),
  ];
};

exports.loginForm = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required.")
      .isEmail()
      .withMessage("Email is not valid."),
    body("password").trim().notEmpty().withMessage("Password is required."),
  ];
};

exports.createAccountForm = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required.")
      .isEmail()
      .withMessage("Email is not valid."),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password is required.")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast 6 Characters Long."),
    body("dial_code").trim().notEmpty().withMessage("Dial code is required."),
    body("phone")
      .trim()
      .notEmpty()
      .withMessage("Phone number is required.")
      .isLength({ min: 10, max: 10 })
      .withMessage("Phone number must be of 10 digits."),
    body("gender").trim().notEmpty().withMessage("Gender is required."),
    body("first_name").trim().notEmpty().withMessage("First Name is required."),
    body("last_name").trim().notEmpty().withMessage("Last Name is required."),
  ];
};

exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push(err.msg));

  return res.status(422).json({
    data: [],
    message: "Invalid Request",
    errors: extractedErrors,
  });
};

exports.emailOtp = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required.")
      .isEmail()
      .withMessage("Email is not valid."),
  ];
};

exports.resetPasswordCheck = () => {
  return [
    body("password").trim().notEmpty().withMessage("Password is required."),
    body("otp")
      .trim()
      .notEmpty()
      .withMessage("Otp is required.")
      .isLength({ min: 6, max: 6 })
      .withMessage("The Length of OTP must be 6."),
  ];
};
