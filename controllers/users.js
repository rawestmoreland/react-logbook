const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

// @desc   Register a user
// @route  POST /api/v1/users
// @access Public
exports.addUser = async (req, res, next) => {
	try {
		const { name, email, password } = req.body;

		if (!name || !email || !password) {
			return res.status(400).json({
				success: false,
				error: 'All fields are required'
			});
		}

		// Check for existing users
		const user = await User.findOne({ email });

		if (user) {
			return res.status(400).json({
				success: false,
				error: 'User already exists'
			});
		}

		const newUser = new User({
			name,
			email,
			password
		});

		// Create a salt and hash
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(newUser.password, salt, async (err, hash) => {
				if (err) throw err;
				newUser.password = hash;
				const user = await newUser.save();
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
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error'
		});
	}
}