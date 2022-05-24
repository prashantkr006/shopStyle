const express = require("express");

const router = express.Router();

router.get("/", function(req, res){
    res.send("Hey there! We are happy to serve you.").end();
});

module.exports = router;
