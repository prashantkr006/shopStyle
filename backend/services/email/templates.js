const header = 
'<div style="background: #fafafa; padding: 2em 1em; font-size: 16px;">'+
    '<div style="padding: 1.5em; border-radius: 1em; max-width: 640px; margin: auto; '+
      ' background: #fff;">';

const EMAIL_VERIFY_OTP = header+
  "<p>Dear User</p>" +
  "<p>Please use the following OTP to verify your email address.</p>" +
  "<p style='font-weight: bold; font-size: 24px'>@OTP</p>" +
  "<p>This OTP will be valid for next 10 minutes.<p>";

/**
 * Methods to export above declared email templates
 */

exports.email_verify_otp = (otp) => {
  return EMAIL_VERIFY_OTP.replace("@OTP", otp);
};