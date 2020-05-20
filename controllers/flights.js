const Flight = require('../models/Flight');

// @desc   Get all flights
// @route  GET /api/v1/flights
// @access Public
exports.getFlights = async (req, res, next) => {
	try {
		const flights = await Flight.find();
		const totals = await Flight.aggregate([
			{
				$group: {
					_id: null,
					total: {
						$sum: '$total',
					},
					day_takeoffs: {
						$sum: '$day_takeoffs',
					},
					night_takeoffs: {
						$sum: '$night_takeoffs',
					},
					day_ldgs: {
						$sum: '$day_ldgs',
					},
					night_ldgs: {
						$sum: '$night_ldgs',
					},
					approaches: {
						$sum: '$approaches',
					},
					single_engine: {
						$sum: '$single_engine',
					},
					multi_engine: {
						$sum: '$multi_engine',
					},
					complex: {
						$sum: '$complex',
					},
					turbine: {
						$sum: '$turbine',
					},
					rotocraft: {
						$sum: '$rotocraft',
					},
					xc: {
						$sum: '$xc',
					},
					night: {
						$sum: '$night',
					},
					imc: {
						$sum: '$imc',
					},
					sim_imc: {
						$sum: '$sim_imc',
					},
					sim: {
						$sum: '$sim',
					},
					pic: {
						$sum: '$pic',
					},
					sic: {
						$sum: '$sic',
					},
					solo: {
						$sum: '$solo',
					},
					dual_recd: {
						$sum: '$dual_recd',
					},
					dual_given: {
						$sum: '$dual_given',
					},
				},
			},
		]);
		return res.status(200).json({
			success: true,
			count: flights.length,
			totals: totals,
			data: flights,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error',
			errorMessage: err.errmsg,
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
	await Flight.insertMany(req.body, (err, docs) => {
		if (err) {
			console.log(err);
		} else {
			console.log('Documents were added to the collection');
		}
	});
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
