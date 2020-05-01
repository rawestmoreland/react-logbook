import axios from 'axios';
import {
	GET_AIRCRAFT,
	ADD_AIRCRAFT,
	DELETE_AIRCRAFT,
	AIRCRAFT_LOADING,
} from './types';
import { returnErrors } from './errorActions';

export const getAircraft = () => (dispatch) => {
	dispatch(setAircraftLoading());
	axios
		.get('/api/v1/aircraft')
		.then((res) =>
			dispatch({
				type: GET_AIRCRAFT,
				payload: res.data,
			})
		)
		.catch((err) => {
			dispatch(returnErrors(err.response.data, err.response.status));
		});
};

export const addAircraft = (item) => (dispatch, getState) => {
	axios
		.post('/api/v1/aircraft')
		.then((res) =>
			dispatch({
				type: ADD_AIRCRAFT,
				payload: res.data,
			})
		)
		.catch((err) => {
			dispatch(returnErrors(err.response.data, err.response.status));
		});
};

// TODO: Delete aicraft action

export const setAircraftLoading = () => {
	return {
		type: AIRCRAFT_LOADING,
	};
};
