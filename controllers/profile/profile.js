const asyncHandler = require("../../utils/async");
const Users = require("../../models/Users");

exports.userDetails = asyncHandler(async (req, res, next) => {

    let account = await Users.getUser({'user_id': req.user.user_id, 'is_deleted': 0});
    if(account.length > 0){
        delete account[0].password;
        res.status(200).json({data: account[0], message: ""});
    }
    else {
        res.status(401).json({data: [] ,message: "You are not logged in. Please login first."});
    }
   
});

exports.userUpdate =  asyncHandler(async (req, res, next) => {

    let firstName = req.body.first_name;
    let lastName = req.body.last_name;
    let gender = req.body.gender;
    let dialCode = req.body.dial_code;
    let phone = req.body.phone;

    try {
    if(firstName === '') delete firstName;
    if(lastName === '') delete lastName;
    if(gender === '') delete gender;
    if(dialCode === '') delete dialCode;
    if(phone === '') delete phone;

    await Users.updateUser({'user_id': req.user.user_id}, {'first_name':firstName ,'last_name': lastName, 'gender':gender,
                            'dial_code': dialCode, 'phone': phone});

    res.status(200).json({data: [], message: "Profile Successfully Updated!"});
    }
    catch(err) {
        res.status(400).json({data: [] ,message: "There is nothing to update!"});
    }
   // }
});
