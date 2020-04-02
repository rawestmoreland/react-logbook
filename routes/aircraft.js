const express = require('express');
const router = express.Router();
const {
	getAircraft,
	addAircraft,
	deleteAircraft,
	helloWorld
} = require('../controllers/aircraft');

router.route('/').get(getAircraft);

router.route('/').post(addAircraft);

router.route('/:id').delete(deleteAircraft);

router.route('/hello').get(helloWorld);

module.exports = router;
