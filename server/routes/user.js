const express = require('express');
const { login, register, logout, changePassword, setUsername } = require('../controllers/user.js');
const { isLoggedIn } = require('../utils/isLoggedIn.js');
const catchAsync = require('../utils/catchAsync');

const router = express.Router({ mergeParams: true });

router.route('/login').post(catchAsync(login));
router.route('/register').post(catchAsync(register));
router.route('/logout').get(catchAsync(logout));
router.route('/changepw')
    // .get(changePassword)//changepasswordform
    .post(catchAsync(isLoggedIn), catchAsync(changePassword));
router.route('/setusername').post(catchAsync(isLoggedIn), catchAsync(setUsername));

module.exports = router;