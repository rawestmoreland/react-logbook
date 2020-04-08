const Flight = require('../models/Flight');

// @desc   Get all flights
// @route  GET /api/v1/flights
// @access Public
exports.getFlights = async (req, res, next) => {
	try {
		const flights = await Flight.find();

		return res.status(200).json({
			success: true,
			count: flights.length,
			data: flights,
		});
	} catch (err) {
		return res.statu(500).json({
			success: false,
			error: 'Server Error',
		});
	}
};

// @desc   Add a flight
// @route  POST /api/v1/flights
// @access Public
exports.addFlight = async (req, res, next) => {
	try {
		const {
			date,
			aircraft_id,
			route,
			day_takeoffs,
			night_takeoffs,
			day_ldgs,
			night_ldgs,
			approaches,
			single_engine,
			multi_engine,
			complex,
			turbine,
			rotocraft,
			xc,
			night,
			imc,
			sim_imc,
			sim,
			pic,
			sic,
			solo,
			dual_recd,
			dual_given,
			total,
			remarks,
		} = req.body;

		const newFlight = new Flight({
			date,
			aircraft_id,
			route,
			day_takeoffs,
			night_takeoffs,
			day_ldgs,
			night_ldgs,
			approaches,
			single_engine,
			multi_engine,
			complex,
			turbine,
			rotocraft,
			xc,
			night,
			imc,
			sim_imc,
			sim,
			pic,
			sic,
			solo,
			dual_recd,
			dual_given,
			total,
			remarks,
		});

		await newFlight.save();

		return res.status(201).json({
			success: true,
			data: flight,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error',
		});
	}
};

// @desc   Create many flights - from an import
// @route  POST /api/v1/flights/many
// @access Public
exports.addMany = async (req, res, next) => {
	console.log(req.body);
};

// @desc   Delete a flight
// @route  DELETE /api/v1/flights/:id
// @access Public
exports.deleteFlight = async (req, res, next) => {
	try {
		const flight = await Flight.findById(req.params.id);

		if (!flight) {
			return res.status(404).json({
				success: false,
				error: 'No flight found',
			});
		}

		await Flight.remove();

		return res.status(200).json({
			success: true,
			data: {},
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error',
		});
	}
};
