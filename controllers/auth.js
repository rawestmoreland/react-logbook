const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @route  GET api/auth/user
// @desc   Get user data
// @access Private
exports.getUserData = async (req, res, next) => {
	try {
		const user = await User.findById(req.user.id).select('-password');

		return res.status(200).json({
			success: true,
			user: user
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error'
		});
	}
}

// @desc   Authorize a user
// @route  POST api/v1/auth/user
// @access Public
exports.authUser = async (req, res, next) => {
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
};
