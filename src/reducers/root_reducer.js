
import { combineReducers } from 'redux';
import preference from './preference_reducer';
import portfolio from './portfolio_reducer';
// import errors from './error_reducer';

const rootReducer = combineReducers({
    preference,
    portfolio,
    // errors,
})

export default rootReducer;