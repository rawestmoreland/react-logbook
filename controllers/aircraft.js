const Aircraft = require('../models/Aircraft');

// @desc   Get all aircraft
// @route  GET /api/v1/aircraft
// @access Public
exports.getAircraft = async (req, res, next) => {
	try {
		const aircraft = await Aircraft.find();

		return res.status(200).json({
			success: true,
			count: aircraft.length,
			data: aircraft
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error'
		});
	}
};

// @desc   Add an aircraft
// @route  POST /api/v1/aircraft
// @access Public
exports.addAircraft = async (req, res, next) => {
	try {
		const {
			ident,
			ac_or_sim,
			model,
			icao_code,
			category,
			engines,
			engine_type,
			land_or_sea,
			manufacturer,
			model_year,
			weight_class,
			equipment,
			hi_perf,
			ifr_equipped,
			complex,
			tailwheel,
			unmanned,
			owner,
			taa
		} = req.body;

		const aicraft = await Aircraft.create(req.body);

		return res.status(201).json({
			success: true,
			data: aircraft
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error'
		});
	}
};

// @desc   Delete an aircraft
// @route  DELETE /api/v1/aircraft/:id
// @access Public
exports.deleteAircraft = async (req, res, next) => {
	try {
		const aircraft = await Aircraft.findById(req.params.id);

		if (!aircraft) {
			return res.status(404).json({
				success: false,
				error: 'No aircraft found'
			});
		}

		await Aircraft.remove();

		return res.status(200).json({
			success: true,
			data: {}
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error'
		});
	}
};

// Test function
exports.helloWorld = (req, res, next) => {
	try {
		return res.status(200).json({
			success: true,
			message: 'Hello World'
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error'
		});
	}
};
