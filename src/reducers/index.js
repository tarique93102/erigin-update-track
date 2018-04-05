import { combineReducers } from 'redux';

// calling the default reducer to create a link
import defaultReducer from './default-reducer';
import clientReducer from './client-reducer';
import singleClientReducer from './single-client-reducer';

const rootReducers = combineReducers({
    // add reducer files references here
    default: defaultReducer,
    client: clientReducer,
    singleClient: singleClientReducer
});

export default rootReducers;