const express = require('express');
const router = express.Router();
const {
	getFlights,
	addFlight,
	deleteFlight
} = require('../controllers/flights');

router.route('/').get(getFlights);

router.route('/').post(addFlight);

router.route('/:id').delete(deleteFlight);
