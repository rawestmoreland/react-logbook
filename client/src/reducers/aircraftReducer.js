import {
    GET_AIRCRAFT,
    ADD_AIRCRAFT,
    DELETE_AIRCRAFT,
    AIRCRAFT_LOADING
} from '../actions/types';

const initialState = {
    aircraft: [],
    loading: false
}

export default function(state = initialState, action) => {
    switch (action) {
        case GET_AIRCRAFT:
            return {
                ...state,
                aircraft: action.payload,
                loading: false
            }
        case ADD_AIRCRAFT:
            return {
                ...state,
                aircraft: [action.payload, ...state.aircraft]
            }
        case DELETE_FLIGHT:
            return {
                ...state,
                aircraft: state.aircraft.filter(aircraft => aircraft._id !== action.payload)
            }
        case AIRCRAFT_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}