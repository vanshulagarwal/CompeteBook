const express = require('express');
const User=require('../models/user.js');
const { login, register, logout, changePassword } = require('../controllers/user.js');
const {isLoggedIn} =require('../utils/isLoggedIn.js');
const catchAsync = require('../utils/catchAsync');



const router = express.Router({ mergeParams: true });



router.route('/login').post(catchAsync(login));
router.route('/register').post(catchAsync(register));
router.route('/logout').get(catchAsync(logout));
router.route('/changepw')
            // .get(changePassword)//changepasswordform
            .post(catchAsync(isLoggedIn),catchAsync(changePassword));

module.exports = router;