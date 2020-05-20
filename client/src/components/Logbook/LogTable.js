import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFlights } from '../../actions/flightActions';
import { logTableStyles } from '../../styles/LogTableStyles';
import moment from 'moment';
import LogTablePagination from './LogTablePagination';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import GridLoader from 'react-spinners/GridLoader';

const LogTable = () => {
	// Styles for the log table
	const classes = logTableStyles();
	// Map state to props
	const flights = useSelector((state) => state.flight.flights.data);
	const totals = useSelector((state) => state.flight.flights.totals);
	const loading = useSelector((state) => state.flight.loading);
	// Initialize useDispatch
	const dispatch = useDispatch();

	// Pagination variables
	// Page we're on in the table
	const [page, setPage] = useState(0);
	// Number of rows per page
	const [rowsPerPage, setRowsPerPage] = useState(20);

	// Column names
	const columns = [
		{
			id: 'date',
			label: 'date',
			format: (value) => moment(value).format('ll'),
			style: {
				whiteSpace: 'nowrap',
			},
		},
		{ id: 'aircraft_id', label: 'aircraft id' },
		{
			id: 'route',
			label: 'route',
			style: {
				whiteSpace: 'nowrap',
			},
		},
		{ id: 'takeoffs', label: 't/o' },
		{ id: 'day_ldgs', label: 'day ldgs' },
		{ id: 'night_ldgs', label: 'night ldgs' },
		{ id: 'iap', label: 'iap' },
		{ id: 'se', label: 'se' },
		{ id: 'me', label: 'me' },
		{ id: 'amphibious', label: 'amphibious' },
		{ id: 'complex', label: 'complex' },
		{ id: 'turbine', label: 'turbine' },
		{ id: 'rotocraft', label: 'rotocraft' },
		{ id: 'flt_sim', label: 'flt sim' },
		{ id: 'xc', label: 'x/c' },
		{ id: 'imc', label: 'imc' },
		{ id: 'sim_imc', label: 'sim inst' },
		{ id: 'total', label: 'total time' },
		{ id: 'night', label: 'night' },
		{ id: 'pic', label: 'pic' },
		{ id: 'sic', label: 'sic' },
		{ id: 'dual_recd', label: 'dual recd' },
		{ id: 'dual_given', label: 'dual given' },
		{
			id: 'remarks',
			label: 'remarks',
			style: {
				maxWidth: 300,
				textOverflow: 'ellipsis',
				overflow: 'hidden',
				whiteSpace: 'nowrap',
			},
			format: (value) => {
				return (
					<Tooltip title={value}>
						<div>{value}</div>
					</Tooltip>
				);
			},
		},
	];

	useEffect(() => {
		// Let's get some flights - paginated of course
		dispatch(getFlights(page, rowsPerPage));
	}, []);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value, 10);
		setPage(0);
	};

	const createFlight = (flight) => {
		// Combine day and night takeoffs
		let totalTakeoffs = flight.day_takeoffs + flight.night_takeoffs;
		let tableFlight = {
			id: flight._id,
			date: flight.date,
			aircraft_id: flight.aircraft_id,
			route: flight.route,
			takeoffs: totalTakeoffs,
			day_ldgs: flight.day_ldgs,
			night_ldgs: flight.night_ldgs,
			iap: flight.approaches,
			se: flight.single_engine,
			me: flight.multi_engine,
			amphibious: flight.amphibious || 0,
			complex: flight.complex,
			turbine: flight.turbine,
			rotocraft: flight.rotocraft,
			flt_sim: flight.sim,
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

	const parseTotals = (flight) => {
		// Combine day and night takeoffs
		let totalTakeoffs = flight.day_takeoffs + flight.night_takeoffs;
		let tableFlight = {
			id: flight._id || '',
			date: '',
			aircraft_id: '',
			route: '',
			takeoffs: totalTakeoffs,
			day_ldgs: flight.day_ldgs,
			night_ldgs: flight.night_ldgs,
			iap: flight.approaches,
			se: flight.single_engine,
			me: flight.multi_engine,
			amphibious: flight.amphibious || 0,
			complex: flight.complex,
			turbine: flight.turbine,
			rotocraft: flight.rotocraft,
			flt_sim: flight.sim,
			xc: flight.xc,
			imc: flight.imc,
			sim_imc: flight.sim_imc,
			total: flight.total,
			night: flight.night,
			pic: flight.pic,
			sic: flight.sic,
			dual_recd: flight.dual_recd,
			dual_given: flight.dual_given,
			remarks: '',
		};
		return tableFlight;
	};

	// An array for table-formatted flights
	let tableFlights = [];

	// Map through the data from the db and create table flights
	!loading &&
		flights.map((flight) => tableFlights.push(createFlight(flight)));

	// Handle the empty rows to fill the table out
	const emptyRows =
		rowsPerPage -
		Math.min(rowsPerPage, tableFlights.length - page * rowsPerPage);

	return (
		<>
			{!loading ? (
				<Paper className={classes.root}>
					<TableContainer className={classes.container}>
						<Table stickyHeader>
							<TableHead>
								<TableRow className={classes.topHeader}>
									{columns.map((column) => (
										<TableCell
											key={column.id}
											className={classes.topHeaderCell}
										>
											{column.label}
										</TableCell>
									))}
								</TableRow>
								<TableRow>
									{columns.map((column) => (
										<TableCell
											key={column.label}
											style={{
												height: 40,
												top: 80,
											}}
										>
											{!loading &&
												parseTotals(totals[0])[
													column.id
												]}
										</TableCell>
									))}
								</TableRow>
							</TableHead>
							<TableBody>
								{tableFlights
									.slice(
										page * rowsPerPage,
										page * rowsPerPage + rowsPerPage
									)
									.map((row) => {
										return (
											<TableRow key={row.id}>
												{columns.map((column) => {
													const value =
														row[column.id];
													return (
														<TableCell
															key={column.id}
															style={
																column.style
																	? column.style
																	: null
															}
														>
															{column.format
																? column.format(
																		value
																  )
																: value}
														</TableCell>
													);
												})}
											</TableRow>
										);
									})}
								{emptyRows > 0 && (
									<TableRow
										style={{ height: 53 * emptyRows }}
									>
										<TableCell colSpan={6} />
									</TableRow>
								)}
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						rowsPerPageOptions={[10, 20, 100]}
						component='div'
						count={tableFlights.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onChangePage={handleChangePage}
						onChangeRowsPerPage={handleChangeRowsPerPage}
						ActionsComponent={LogTablePagination}
					/>
				</Paper>
			) : (
				<div className={classes.gridLoaderContainer}>
					<GridLoader size={20} color={'grey'} />
				</div>
			)}
		</>
	);
};

export default LogTable;
