const User=require('../models/user.js');

module.exports.login = (req, res, next) => {
    res.status(200).json({
        status: "login"
    });
}