import { combineReducers } from 'redux';

import { NEWS, LAST_PAGE } from './actions';

import { RouterNavigator } from '../router';

const main = RouterNavigator.router.getActionForPathAndParams('Main');
const initialState = RouterNavigator.router.getStateForAction(
    main
);

const news = (state = [], {type, payload}) => type === NEWS ? payload : state;

const nav = (state = initialState, action) => {
  const nextState = RouterNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

const lastPage = (state = '', {type, payload}) => {
    console.log(type, payload);
    return type === LAST_PAGE ? payload : state;
};

export default combineReducers({
    news,
    nav,
    lastPage
});