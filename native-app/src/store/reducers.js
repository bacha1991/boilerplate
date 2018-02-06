import { combineReducers } from 'redux';

function name (state = 'Test Data', action) {
  return state
}

export default combineReducers({
    name
});