import { RECEIVE_PREFERENCE } from '../actions/preference_actions';
import {merge} from 'lodash';

const preferenceReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case 'RECEIVE_PREFERENCES':
      return action.preferences;
    case 'RECEIVE_PREFERENCE':
      const newState = {[action.preference.id]: action.preference}
      return newState;
    default:
      return state;
  }
};

export default preferenceReducer;