const express = require('express');
const { login } = require('../controllers/user');
const router = express.Router({ mergeParams: true });

router.route('/login').get(login);

module.exports = router;