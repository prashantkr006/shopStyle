const knex = require('../config/knex');

//Login Route
exports.getUser = async(where) => {
    return await knex("users").where(where);
};

//Register Route
exports.registerUser = async (data) => {
    return await knex("users").insert(data);
};

exports.showUsers = async () => {
    return await knex("users").select("*");
};

exports.deleteById = async (data) => {
    return await knex("users").where(data).update({is_deleted: 1});
};  

//Send OTP To Email Route
exports.emailOtpEntry = async (data) => {
    return await knex("emailotps").insert(data);
}

//Reset Password Route
exports.compareOtp = async (otp) => {
    return await knex("emailotps").where(otp);
} 

exports.getExpiryTime = async (data) => {
    return await knex("emailotps").where(data);
}

exports.updatePassword = async (email,password) => {
    return await knex("users").where(email).update(password);
}

exports.updateIsVerified = async (otp,is_verified) => {
    return await knex("emailotps").where(otp).update(is_verified);
}

//Upadate User Details
exports.updateUser = async (user_id, data) => {
    return await knex("users").where(user_id).update(data);
}
