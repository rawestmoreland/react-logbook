const express = require('express');
const router = express.Router();
const { getUserData, authUser } = require('../controllers/auth');
const auth = require('../middleware/auth');

router.route('/').post(authUser);

// @route  GET api/auth/user
// @desc   Get user data
// @access Private
router.get('/user', auth, (req, res) => {
	User.findById(req.user.id)
		.select('-password')
		.then(user => res.json(user));
});

module.exports = router;
