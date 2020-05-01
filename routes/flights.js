const express = require('express');
const router = express.Router();
const {
	getFlights,
	addFlight,
	deleteFlight,
	addMany,
} = require('../controllers/flights');
const { paginatedResults } = require('../middleware/paginatedResults');
const Flight = require('../models/Flight');

router.get('/', paginatedResults(Flight), (req, res) => {
	res.json(res.paginatedResults);
});

router.route('/').post(addFlight);

router.route('/:id').delete(deleteFlight);

router.route('/many').post(addMany);

module.exports = router;
