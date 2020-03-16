const express = Require('express');
const router = express.Router();

// User model
const User = require('../models/User');

router
    .route('/')
    .post(authUser);
