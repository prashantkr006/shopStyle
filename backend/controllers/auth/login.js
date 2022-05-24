const asyncHandler = require("../../utils/async");
const Users = require("../../models/Users");
const JWTHelper = require("../../utils/jwt");
const bcrypt = require("bcryptjs");

exports.loginByPassword = asyncHandler(async (req, res, next) => {
  let accounts = await Users.getUser({ email: req.body.email, is_deleted: 0 });

  //comparing the password
  if (accounts.length > 0) {
    if (bcrypt.compareSync(req.body.password, accounts[0].password)) {
      let token = await JWTHelper.getToken({
        user_id: accounts[0].user_id,
        first_name: accounts[0].first_name,
        last_name: accounts[0].last_name,
        email: accounts[0].email,
        address: accounts[0].address,
        gender: accounts[0].gender,
        phone: accounts[0].phone,
        avatar_url: accounts[0].avatar_url,
      });

      delete accounts[0].password;

      //responding
      res.status(200).json({
        data: { token: token, users: accounts[0] },
        message: "Login Successfull!",
      });
      // .json("Login Successfull!");
    } else {
      res
        .status(401)
        .json({ data: [], message: "Email or password is incorrect." });
    }
  } else {
    res.status(404).json({ data: [], message: "Account doesn't Exists!" });
  }
});
