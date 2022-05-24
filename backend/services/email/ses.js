const AWS = require("aws-sdk");

AWS.config.update({ region: "ap-south-1" });

const initMail = (recipients, subject, htmlBody, source) => {
  return {
    Destination: {
      /* required */
      CcAddresses: [],
      ToAddresses: recipients, //object of emails. ['email1', 'email2']
    },
    Message: {
      /* required */
      Body: {
        /* required */
        Html: {
          Charset: "UTF-8",
          Data: htmlBody,
        },
        Text: {
          Charset: "UTF-8",
          Data: "",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
    Source: source+" <no-reply@tads.in>" /* required */,
    ReplyToAddresses: ["no-reply@tads.in"],
  };
};

exports.sendEmail = (recipients, subject, htmlBody, source = 'TADS Education') => {
  const params = initMail(recipients, subject, htmlBody, source);

  // Create the promise and SES service object
  var sendPromise = new AWS.SES({ apiVersion: "2010-12-01" }).sendEmail(params).promise();
  // Handle promise's fulfilled/rejected states
  sendPromise
    .then(function (data) {
      return true;
    })
    .catch(function (err) {
      console.error(err, err.stack);
      return false;
    });
};
