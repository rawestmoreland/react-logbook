const express = require('express');
const router = express.Router();
const {
	getAircraft,
	addAircraft,
	deleteAircraft,
	addMany
} = require('../controllers/aircraft');

router.route('/').get(getAircraft);

router.route('/').post(addAircraft);

router.route('/:id').delete(deleteAircraft);

router.route('/many').post(addMany);

module.exports = router;
