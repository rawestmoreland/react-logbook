import {
	GET_FLIGHTS,
	ADD_FLIGHT,
	DELETE_FLIGHT,
	FLIGHTS_LOADING,
} from '../actions/types';

const initialState = {
	flights: [],
	loading: true,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_FLIGHTS:
			return {
				...state,
				flights: action.payload,
				loading: false,
			};
		case ADD_FLIGHT:
			return {
				...state,
				flights: [action.payload, ...state.flights],
			};
		case DELETE_FLIGHT:
			return {
				...state,
				filghts: state.flights.filter(
					(flight) => flight._id !== action.payload
				),
			};
		case FLIGHTS_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
}
