import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Material UI components
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

// Material UI icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const AddFlightForm = () => {
	const dispatch = useDispatch();

	// We load the aircraft in App.js
	const aircraft = useSelector((state) => state.aircraft.aircraft.data);
	// These should already be loadied - but jus tin case.
	const aircraftLoading = useSelector((state) => state.aircraft.loading);

	// Form State
	const [formState, setFormState] = useState({
		selectedDate: new Date(),
	});

	useEffect(() => {}, []);

	// Stuff for the aircraft dropdown
	const [aircraftOpen, setAircraftOpen] = useState(false);
	const anchorRef = useRef(null);
	const handleAcMenuToggle = () => {
		setAircraftOpen((prevOpen) => !prevOpen);
	};
	const handleAcMenuClose = (e) => {
		if (anchorRef.current && anchorRef.current.contains(e.target)) {
			return;
		}
		setAircraftOpen(false);
	};

	const { selectedDate } = formState;

	const handleFormSubmit = () => {};

	return (
		<form onSubmit={handleFormSubmit}>
			<Grid container spacing={3}>
				<Grid item>
					<TextField
						id='datetime-local'
						label='Flight Date / Time'
						type='datetime-local'
						defaultValue={selectedDate}
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</Grid>
			</Grid>
			<Grid container spacing={3}>
				<Grid item>
					<TextField
						name='aircraft_id'
						id='aircraft_id'
						label='Aircraft ID'
					/>
				</Grid>
				<IconButton aria-label='aircraft-menu-expand'>
					<ExpandMoreIcon />
				</IconButton>
			</Grid>
		</form>
	);
};

export default AddFlightForm;
