import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { useStyles } from '../../styles/styles';
import { getFlights } from '../../actions/flightActions';
import MaterialTable from 'material-table';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const LogTable = () => {
	const classes = useStyles();
	const theme = useTheme();

	// Map state to props
	const flights = useSelector((state) => state.flight.flights);
	const loading = useSelector((state) => state.flight.loading);
	const count = flights.count;
	// Initialize useDispatch
	const dispatch = useDispatch();

	// Pagination variables
	// Page we're on in the table
	const [page, setPage] = useState(8);
	// Number of rows per page
	const [limit, setLimit] = useState(10);

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

	!loading && console.log(flights);

	return (
		<>
			<MaterialTable></MaterialTable>
		</>
	);
};

export default LogTable;
