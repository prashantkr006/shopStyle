const User = require("../../models/Users");

exports.checkEmailForSES = async (email) => {
  let user = await User.getUser({ email: email });
  if (user.id) {
    if (user.isInvalidEmail) {
      return {
        proceed: false,
        message: "Email address is invalid. Email cannot be sent to this email address.",
      };
    } else if (!user.emailSubscription) {
      return {
        proceed: false,
        message:
          "User has turned off email notifications. Email cannot be sent to this email address. Please write us at info@tads.in to enable the email notifications.",
      };
    } else if (user.retryEmailAfter > Date.now()) {
      let difference = (user.retryEmailAfter.getTime() - Date.now()) / 3600000;
      return {
        proceed: false,
        message:
          "Email cannot be sent at this moment due to email server downtime. Please try again after " +
          Math.ceil(difference) +
          " hour(s).",
      };
    } else {
      return {
        proceed: true,
        message: "",
      };
    }
  } else {
    return {
      proceed: false,
      message: "Account does not exist with this email.",
    };
  }
};
