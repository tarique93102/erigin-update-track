import { FETCH_SINGLE_CLIENT } from '../actions';

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_SINGLE_CLIENT:
            return {...state, singleClient: action.payload};
        default:
            return state;
    }
}