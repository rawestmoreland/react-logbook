const express = require('express');
const router = express.Router();
const { addUser } = require('../controllers/users')

router
	.route('/')
	.post(addUser);

module.exports = router;
