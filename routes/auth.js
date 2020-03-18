const express = require('express');
const router = express.Router();
const { getUserData, authUser } = require('../controllers/auth');
const auth = require('../middleware/auth');

router.route('/').post(authUser);

router.route('/user').get(auth, getUserData);

module.exports = router;
