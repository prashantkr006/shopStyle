const asyncHandler = require("../../utils/async");
const Users = require("../../models/Users");
const bcrypt = require("bcryptjs");
const dayjs = require("dayjs");

exports.resetUsingOtp = asyncHandler(async (req, res, next) => {
  let current_date = dayjs(dayjs().format("YYYY-MM-DD HH:mm:ss"));
  let userRequest = await Users.getExpiryTime({ otp: req.body.otp });

  if (userRequest.length > 0) {
    let expiry_date = dayjs(userRequest[0].expiry_date);

    let expiryTimeValue =
      expiry_date.get("h") +
      expiry_date.get("m") / 60 +
      expiry_date.get("s") / (60 * 60);
    let currentTimeValue =
      current_date.get("h") +
      current_date.get("m") / 60 +
      current_date.get("s") / (60 * 60);

    if (
      expiry_date.get("year") > current_date.get("year") ||
      expiry_date.get("month") > current_date.get("month") ||
      expiry_date.get("day") > current_date.get("day")
    ) {
      expiryTimeValue += 24;
    }
    if (
      current_date.get("year") > expiry_date.get("year") ||
      current_date.get("month") > expiry_date.get("month") ||
      current_date.get("day") > expiry_date.get("day")
    ) {
      currentTimeValue += 24;
    }

    let account = await Users.compareOtp({ otp: req.body.otp });

    if (account[0].is_verified === 0) {
      if (account.length > 0) {
        if (expiryTimeValue > currentTimeValue) {
          let otpDetail = await Users.compareOtp({ otp: req.body.otp });

          if (otpDetail.length > 0) {
            const password = req.body.password;
            const hash = await bcrypt.hash(password, 10);

            await Users.updatePassword(
              { email: otpDetail[0].email },
              { password: hash }
            );
            await Users.updateIsVerified(
              { otp: req.body.otp },
              { is_verified: 1 }
            );

            res
              .status(200)
              .json({ data: [], message: "Password Successfully Updated!" });
          } else {
            res.json({
              data: [],
              message: "Something went wrong while updating the password!",
            });
          }
        } else {
          res.status(400).json({ data: [], message: "OTP Invalid!" });
        }
      } else {
        res.status(404).json({ data: [], message: "Account Doesn't Exist!" });
      }
    } else {
      res.status(400).json({ data: [], message: "OTP Invalid!" });
    }
  } else {
    res.status(400).json({ data: [], message: "OTP Invalid!" }); // Please provide correct OTP
  }
});
