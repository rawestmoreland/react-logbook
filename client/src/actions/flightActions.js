import axios from 'axios';
import { GET_FLIGHTS, ADD_FLIGHT, DELETE_FLIGHT, FLIGHTS_LOADING } from '../actions/types';

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

export const setItemsLoading = () => {
    return {
        type: FLIGHTS_LOADING
    }
}