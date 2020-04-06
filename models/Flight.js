const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the schema for a flight
const FlightSchema = new Schema({
	date: {
		type: Date,
		required: true,
	},
	model: {
		type: String,
		default: null,
	},
	aircraft_id: {
		type: String,
		required: true,
	},
	route: {
		type: String,
		required: true,
	},
	day_takeoffs: {
		type: Number,
		default: 0,
	},
	night_takeoffs: {
		type: Number,
		default: null,
	},
	day_ldgs: {
		type: Number,
		default: 0,
	},
	night_ldgs: {
		type: Number,
		default: 0,
	},
	approaches: {
		type: Number,
		required: true,
		default: 0,
	},
	single_engine: {
		type: Number,
		default: 0.0,
	},
	multi_engine: {
		type: Number,
		default: 0.0,
	},
	complex: {
		type: Number,
		default: 0.0,
	},
	turbine: {
		type: Number,
		default: 0,
	},
	rotocraft: {
		type: Number,
		default: null,
	},
	xc: {
		type: Number,
		default: 0.0,
	},
	night: {
		type: Number,
		deafult: 0.0,
	},
	imc: {
		type: Number,
		default: 0.0,
	},
	sim_imc: {
		type: Number,
		default: 0.0,
	},
	sim: {
		type: Number,
		default: 0.0,
	},
	pic: {
		type: Number,
		default: 0.0,
	},
	sic: {
		type: Number,
		default: 0.0,
	},
	solo: {
		type: Number,
		default: null,
	},
	dual_recd: {
		type: Number,
		default: 0.0,
	},
	dual_given: {
		type: Number,
		default: 0.0,
	},
	total: {
		type: Number,
		required: true,
	},
	remarks: {
		type: String,
		default: '',
	},
});

module.exports = Flight = mongoose.model('flight', FlightSchema);
