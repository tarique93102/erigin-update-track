import { FETCH_CLIENT } from '../actions';

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_CLIENT:
            return {...state, clientData: action.payload.slice(0, 4)};
        default:
            return state;
    }
}