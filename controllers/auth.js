const User = require ('../models/User');

// @route  GET api/auth/user
// @desc   Get user data
// @access Private
exports.getUserData = async (req, res) => {
	const user = await User.findById(req.user.id).select('-password')
    
        res.json({user});
}

// @desc   Authorize a user
// @route POST api/auth
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
