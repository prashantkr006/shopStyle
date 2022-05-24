const AWS = require("aws-sdk");

AWS.config.update({ region: "ap-south-1" });
const S3Client = new AWS.S3({ apiVersion: 'latest' })

exports.getPresignedUrl = (filePath) => {

  return new Promise(async function(resolve, reject){
      var params = {
          Bucket: 'public_tads.in',
          Key: filePath,
          ACL: 'public-read'
      };
      
      S3Client.getSignedUrl('putObject', params, function(err, url) {
          if (err) {
            resolve(false);
          } else {
            resolve(url);
          }
      });
  })
}