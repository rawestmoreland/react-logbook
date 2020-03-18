const express = require('express');
const router = express.Router();
const {getAircraft, addAircraft, deleteAircraft} = require('../controllers/aircraft');

router
	.route('/')
	.get(getAircraft);

router
	.route('/')
	.post(addAircraft);

router
	.route('/:id')
	.delete(deleteAircraft);

module.exports = router;
