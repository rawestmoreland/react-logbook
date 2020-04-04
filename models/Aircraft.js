const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the User schema
const AircraftSchema = new Schema(
	{
		ident: {
			type: String,
			required: true,
			unique: true
		},
		ac_or_sim: {
			type: String,
			required: true
		},
		model: {
			type: String,
			required: true
		},
		icao_code: {
			type: String,
			required: true
		},
		category: {
			type: String,
			required: true
		},
		engines: {
			type: Number,
			required: true
		},
		engine_type: {
			type: String,
			required: true
		},
		land_or_sea: {
			type: String,
			required: true
		},
		manufacturer: {
			type: String,
			required: true
		},
		model_year: {
			type: Number
		},
		weight_class: {
			type: String
		},
		equipment: {
			type: String
		},
		hi_perf: {
			type: Boolean,
			default: false
		},
		efis: {
			type: Boolean,
			default: false
		},
		ifr_equipped: {
			type: Boolean,
			default: false
		},
		complex: {
			type: Boolean,
			default: false
		},
		tailwheel: {
			type: Boolean,
			default: false
		},
		unmanned: {
			type: Boolean,
			default: false
		},
		owner: {
			type: Boolean,
			default: false
		},
		taa: {
			type: Boolean,
			default: false
		}
	},
	{ collection: 'aircraft' }
);

module.exports = Aircraft = mongoose.model('aircraft', AircraftSchema);
