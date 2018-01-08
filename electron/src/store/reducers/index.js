import { combineReducers } from 'redux';

import appState from './appState';
import sitesReducers from './advertisement-sites';

const reducers = Object.assign({
	appState,
}, sitesReducers);

export default combineReducers(reducers);