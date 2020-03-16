const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const User = require('../models/User');

// @desc   Authorize a user
// @route POST api/auth
// @access Public
router.post(async (req, res, next) => {
	const { email, password } = req.body;

	// Simple validation for blank fields
	if (!email || !password) {
		return res.status(400).json({
			success: false,
			error: 'Please enter all fields'
		});
	}

	const user = await User.findOne({ email });

	// Check to see if the user is in the database
	if (!user) {
		return res.status(400).json({
			success: false,
			error: 'User does not exist'
		});
	}

	// Validate the password
	const isMatch = await bcrypt.compare(password, user.password);

	if (!isMatch) {
		return res.status(400).json({
			success: false,
			error: 'Invalid credentials'
		});
	}

	jwt.sign(
		{ id: user.id },
		process.env.JWT_SECRET,
		{ expiresIn: 3600 },
		(err, token) => {
			if (err) throw err;
			res.json({
				token,
				user: {
					id: user.id,
					name: user.name,
					email: user.email
				}
			});
		}
	);
});

// @route  GET api/auth/user
// @desc   Get user data
// @access Private
router.get('/user', auth, (req, res) => {
	User.findById(req.user.id)
		.select('-password')
		.then(user => res.json(user));
});

module.exports = router;
