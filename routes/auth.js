const express = require('express');
const router = express.Router();
const {getUserData, authUser} = require('../controllers/auth');
const auth = require('../middleware/auth');

router
    .route('/')
    .post(authUser)

router
    .route('/user', auth)
    .get(getUserData)

module.exports = router;
