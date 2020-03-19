const express = require('express');
const router = express.Router();

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
            data: flights
        });
    } catch (err) {
        return res.statu(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// @desc   Add a flight
// @route  POST /api/v1/flights
// @access Public
exports.addFlight = async (req, res, next) => {
	try {
		const {
            date,
            aircraft_id,
            route,
            takeoffs,
            day_ldgs,
            night_ldgs,
            approaches,
            single_engine,
            multi_engine,
            complex,
            turbine,
            jet,
            sim,
            xc,
            imc,
            sim_imc,
            total,
            night,
            pic,
            sic,
            dual_recd,
            dual_given,
            remarks
		} = req.body;

		const flight = await Flight.create(req.body);

		return res.status(201).json({
			success: true,
			data: flight
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error'
		});
	}
}

// @desc   Delete a flight
// @route  DELETE /api/v1/flights/:id
// @access Public
exports.deleteFlight = async (req, res, next) => {
	try {
		const flight = await Flight.findById(req.params.id);

		if (!flight) {
			return res.status(404).json({
				success: false,
				error: 'No flight found'
			});
		}

		await Flight.remove();

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
}