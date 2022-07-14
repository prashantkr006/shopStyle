const asyncHandler = require("../../utils/async");
const Users = require("../../models/Users");
const validator = require("../../middlewares/validator");
const dayjs = require("dayjs");
const nodemailer = require("nodemailer");
// const sendmail = require("sendmail")();
const cors = require("cors");
//app.use(cors({origin: 'https://akhilrecipeapp.netlify.app/'}));

exports.sendOtp = asyncHandler(async (req, res, next) => {
  if ((await validator.emailExists(req.body.email)).length > 0) {
    let otp = Math.floor(100000 + Math.random() * 900000);

    let current_date = dayjs().format("YYYY-MM-DD HH:mm:ss");
    let expiry_date = dayjs(current_date).add(15, "m").toDate();

    await Users.emailOtpEntry({
      email: req.body.email,
      otp: otp,
      expiry_date: expiry_date,
      is_verified: 0,
    });

    // let transporter = nodemailer.createTransport(options[ defaults])

    //   Add send otp to email code here
    let transporter = nodemailer.createTransport({
      secure: true,
      service: "Gmail",
      auth: {
        user: "shopkeeper0016@gmail.com",
        pass: process.env.EMAIL_PASS,
      },
    });
    var mailOptions = {
      from: "akhilchoubeys@gmail.com",
      to: req.body.email,
      subject: "Order Confirmation OTP ",
      html:
        "<h3>OTP for Order Confirmation </h3>" +
        "<h1 style='font-weight: bold;'>" +
        otp +
        "</h1><br><br><p>NOTE: This OTP is valid only for 15 minutes.</p>",
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    // sendmail({

    //     port: 465,
    //     from: 'akhilchoubeys@gmail.com',
    //     to: req.body.email,
    //     subject: "OTP for registration is: ",
    //     html: "<h3>OTP to update password is </h3>" +"<h1 style='font-weight: bold;" + otp + "</h1>"
    // },  function (err, reply) {
    //     console.log(err && err.stack)
    //     console.dir(reply)
    // })

    return res.status(200).json({ data: [], message: "OTP sent!" });
  } else {
    return res.status(404).json({
      data: [],
      message: "Email does not exists!",
    });
  }
});
