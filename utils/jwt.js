const jwt = require("jsonwebtoken");

exports.getToken = async(jsonData)=>{  
    return jwt.sign(
        jsonData, 
        process.env.JWT_SECRET, 
        {
            expiresIn: process.env.JWT_EXPIRE,
        }
    );
}

exports.verifyToken = async(token)=>{
    return jwt.verify(token, process.env.JWT_SECRET);
}