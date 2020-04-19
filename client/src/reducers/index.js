import { combineReducers } from 'redux';
import flightReducer from './flightReducer';
import aircraftReducer from './aircraftReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    flight: flightReducer,
    aircraft: aircraftReducer,
    error: errorReducer,
    auth: authReducer
});