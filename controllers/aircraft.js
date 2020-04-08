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
			data: aircraft,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error',
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
			taa,
		} = req.body;

		const newAircraft = new Aircraft({
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
			taa,
		});

		// Check for existing aircraft
		const aircraft = await Aircraft.findOne({ ident });

		if (aircraft) {
			return res.status(400).json({
				success: false,
				error: 'Aircraft already exists',
			});
		}

		await newAircraft.save();

		return res.status(200).json({
			success: true,
			data: newAircraft,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error',
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
				error: 'No aircraft found',
			});
		}

		await Aircraft.remove();

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

// Test function
exports.addMany = async (req, res, next) => {
	await Aircraft.collection.insert(req.body, (err, docs) => {
		if (err) {
			console.log(err);
		} else {
			console.log('Documents were added to the collections');
		}
	});
};
