import { fromJS, List } from 'immutable';

import { 
	FETCH_PAGE_REQUEST,
	// SAVE_RESULT,
	FETCH_PAGE_FAILURE,
	// CHANGE_START_PAGE,
	PAGES_LOADED,
	SAVE_RESULT,
} from '../actions/names';

const initialState = {
	step: 50,
	startPage: 0,
	fetchedPages: 0,
	loadingStatus: false,
	loadedPages: 0,
	// advertisements: List()
};

export default function appState(state = initialState, action) {
	switch (action.type) {
		case FETCH_PAGE_REQUEST: 
			const { step, startPage } = state;
			const loadedPages = step + startPage;
			return Object.assign({}, state, {
				startPage: loadedPages,
				loadedPages,
				loadingStatus: true
			});
		case SAVE_RESULT:
			let { fetchedPages } = state;	
			fetchedPages++;
			return Object.assign({}, state, {
				fetchedPages
			});
		case PAGES_LOADED:
			return Object.assign({}, state, {
				loadingStatus: false
			});
		case FETCH_PAGE_FAILURE:
			return Object.assign({}, state, {
				loadingStatus: false
			});
		default: 
			return state;
	}
}

