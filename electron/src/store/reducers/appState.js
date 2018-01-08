import { fromJS, List } from 'immutable';

import { 
	FETCH_PAGE_REQUEST,
	// SAVE_RESULT,
	FETCH_PAGE_FAILURE,
	CHANGE_START_PAGE,
	APP_LOADED,
	INCREMENT_FETCHED_PAGES,
} from '../actions/actionsName';

const initialState = {
	step: 50,
	startPage: 0,
	fetchedPages: 0,
	statusLoading: false,
	loadedPages: 0,
	// advertisements: List()
};

export default function appState(state = initialState, action) {
	switch (action.type) {
		case CHANGE_START_PAGE: 
			const { step, startPage } = state;
			const loadedPages = step + startPage;
			return Object.assign({}, state, {
				startPage: loadedPages,
				loadedPages
			});
		case INCREMENT_FETCHED_PAGES:
			let { fetchedPages } = state;	
			fetchedPages++;
			return Object.assign({}, state, {
				fetchedPages
			});
		case APP_LOADED:
			return Object.assign({}, state, {
				statusLoading: false
			});
		case FETCH_PAGE_REQUEST:
			return Object.assign({}, state, {
				statusLoading: true
			});
		// case SAVE_RESULT:
		// 	const { advertisements } = state;
		// 	const payload = action.payload.map(item => fromJS(item));
		// 	return Object.assign({}, state, {
		// 		advertisements: advertisements.unshift(...payload),
		// 	});
		case FETCH_PAGE_FAILURE:
			return Object.assign({}, state, {
				statusLoading: false
			});
		default: 
			return state;
	}
}

