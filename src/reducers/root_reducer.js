
import { combineReducers } from 'redux';
import preferences from './preferences_reducer';
// import portfolio from './portfolio_reducer';
// import errors from './error_reducer';

const rootReducer = combineReducers({
    preferences,
    // portfolio,
    // errors,
})

export default rootReducer;