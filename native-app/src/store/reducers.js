import { combineReducers } from 'redux';

// import { ACTIVE_PAGE } from './actions';

import { RouterNavigator } from '../router';

const main = RouterNavigator.router.getActionForPathAndParams('Main');
const initialState = RouterNavigator.router.getStateForAction(
    main
);

function name (state = 'Test Data', action) {
  return state
}


const nav = (state = initialState, action) => {
  const nextState = RouterNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default combineReducers({
    name,
    nav
});