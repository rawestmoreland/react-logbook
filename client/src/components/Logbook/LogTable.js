import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFlights } from '../../actions/flightActions';

const LogTable = () => {
	// Map state to props
	const flights = useSelector((state) => state.flight.flights);
	const loading = useSelector((state) => state.flight.loading);
	const count = flights.count;
	// Initialize useDispatch
	const dispatch = useDispatch();

	// Pagination variables
	// Page we're on in the table
	const [page, setPage] = useState(1);
	// Number of rows per page
	const [limit, setLimit] = useState(20);

	// Column names
	const columns = [
		'date',
		'aircraft id',
		'route',
		't/o',
		'day ldgs',
		'night ldgs',
		'iap',
		'se',
		'me',
		'amphibious',
		'complex',
		'turbine',
		'rotocraft',
		'flt sim',
		'x/c',
		'imc',
		'sim inst',
		'total time',
		'night',
		'pic',
		'sic',
		'dual recd',
		'dual given',
		'remarks',
	];

	useEffect(() => {
		// Let's get some flights - paginated of course
		dispatch(getFlights(page, limit));
	}, []);

	const handleFirstPageButtonClick = (e) => {};

	const handleBackButtonClick = (e) => {};

	const handleNextButtonClick = (e) => {};

	const handleLastPageButtonClick = (e) => {};

	const createFlight = (flight) => {
		// Combine day and night takeoffs
		let totalTakeoffs = flight.day_takeoffs + flight.night_takeoffs;
		let tableFlight = {
			date: flight.date,
			aircraft_id: flight.aircraft_id,
			route: flight.route,
			takeoffs: totalTakeoffs,
			day_ldgs: flight.day_ldgs,
			night_ldgs: flight.night_ldgs,
			approaches: flight.approaches,
			single_engine: flight.single_engine,
			multi_engine: flight.multi_engine,
			amphibious: flight.amphibious || 0,
			complex: flight.complex,
			turbine: flight.turbine,
			rotocraft: flight.rotocraft,
			sim: flight.sim,
			xc: flight.xc,
			imc: flight.imc,
			sim_imc: flight.sim_imc,
			total: flight.total,
			night: flight.night,
			pic: flight.pic,
			sic: flight.sic,
			dual_recd: flight.dual_recd,
			dual_given: flight.dual_given,
			remarks: flight.remarks,
		};
		return tableFlight;
	};

	return <></>;
};

export default LogTable;
