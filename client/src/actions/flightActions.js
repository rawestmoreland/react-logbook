import axios from 'axios';
import { GET_FLIGHTS, ADD_FLIGHT, DELETE_FLIGHT, FLIGHTS_LOADING } from '../actions/types';
import { returnErrors } from '../actions/errorActions';

export const getFlights = () => dispatch => {
    dispatch(setItemsLoading);
    axios
        .get('/api/v1/flights')
        .then(res =>
            dispatch({
                type: GET_FLIGHTS,
                payload: res.data
            })
        )
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
        })
}

export const addFlight = flight => (dispatch, getState) => {
    axios
        .post('/api/v1/flights')
        .then(res =>
            dispatch({
                type: ADD_FLIGHT,
                payload: res.data
            })
        )
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
        })
}

// TODO: delete flight action

export const setItemsLoading = () => {
    return {
        type: FLIGHTS_LOADING
    }
}