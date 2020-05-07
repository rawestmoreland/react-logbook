import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { useStyles } from '../../styles/styles';
import { getFlights } from '../../actions/flightActions';
import MaterialTable from 'material-table';
import moment from 'moment';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, TablePagination } from '@material-ui/core';

const LogTable = () => {
	const classes = useStyles();
	const tableTheme = useTheme();

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
	const [limit, setLimit] = useState(30);

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

	/**
	 * This will be a list of flights generated with the
	 * createFlight() function. The key / values for this
	 * flight will be the data that the user sees in the table
	 * ie: takeoffs will be night and day takoffs combined.
	 * We use the keys of a flight to use as the field for the
	 * column
	 */
	let flightArray = [];

	!loading &&
		flights.results.map((f) => {
			flightArray.push(createFlight(f));
		});

	// The columns for our table
	let columnArray = [];

	/**
	 * The keys from a tableFlight will be used as the 'field'
	 * value in column creation.
	 */
	const getKeys = () => {
		return Object.keys(flightArray[0]);
	};

	// Make the columns with title and field keys
	const makeColumns = () => {
		columns.map((title, index) => {
			// For the date column, we need to turn the string date into a Date()
			// and sort based on that value since we cannot sort a string date.
			if (title === 'date') {
				columnArray.push({
					title: title,
					field: getKeys()[index],
					render: (rowData) => (
						<div>{moment(rowData.date).format('LL')}</div>
					),
				});
			} else {
				columnArray.push({ title: title, field: getKeys()[index] });
			}
		});
	};

	!loading && makeColumns();

	return (
		<>
			<MaterialTable
				style={{ width: '85vw' }}
				isLoading={loading}
				options={{
					maxBodyHeight: '80vh',
					toolbar: false,
					pageSize: limit,
					headerStyle: {
						position: 'sticky',
						top: 0,
						textAlign: 'center',
						textTransform: 'uppercase',
						backgroundColor: '#000',
						color: '#FFF',
					},
					padding: 'dense',
				}}
				columns={columnArray}
				data={flightArray}
			/>
		</>
	);
};

export default LogTable;
