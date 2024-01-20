const express = require('express');
const { getDetails } = require('../controllers/details');
const router = express.Router({ mergeParams: true });

router.route('/:platform').get(getDetails);

module.exports = router;