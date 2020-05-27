import React, { useEffect } from 'react';
import { getAircraft } from '../../actions/aircraftActions';
import { useSelector, useDispatch } from 'react-redux';

// Material UI components
import Select from '@material-ui/core/Select';

const AddFlightForm = () => {
	const dispatch = useDispatch();

	const aircraft = useSelector((state) => state.aircraft.aircraft.data);
	const loading = useSelector((state) => state.aircraft.loading);

	useEffect(() => {}, []);

	!loading && console.log(aircraft);

	return <div></div>;
};

export default AddFlightForm;
