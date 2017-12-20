import { fromJS, List } from 'immutable';

import { 
	CHANGE_PAGE,
	FETCH_PAGE_REQUEST,
	FETCH_PAGE_SUCCESS,
	FETCH_PAGE_FAILURE,
	CHANGE_START_PAGE,
} from '../actions/actionsName';

const initialState = {
	step: 10,
	startPage: 0,
	fetchedPages: 0,
	statusLoading: false,
	advertisements: List()
};

export default function appState(state = initialState, action) {
	switch (action.type) {
		case CHANGE_START_PAGE: 
			const { step, startPage } = state;
			const fetchedPages = step + startPage;
			return Object.assign({}, state, {
				startPage: fetchedPages,
				fetchedPages
			});
		case FETCH_PAGE_REQUEST:
			return Object.assign({}, state, {
				statusLoading: true
			});
		case FETCH_PAGE_SUCCESS:
			const { advertisements } = state;
			return Object.assign({}, state, {
				statusLoading: false,
				advertisements: advertisements.concat(fromJS(action.payload)),
			});
		case FETCH_PAGE_FAILURE:
			return Object.assign({}, state, {
				statusLoading: false
			});
		default: 
			return state;
	}

	// switch (action.type) {
	// 	// case CHANGE_PAGE: 
	// 	// 	const step = state.get('step');
	// 	// 	return state.set('countPages', action.payload + step);
	// 	case CHANGE_START_PAGE: 
	// 		const step = state.get('step');
	// 		const start = state.get('startPage');
	// 		return state.set('startPage', start + step);
	// 	case FETCH_PAGE_REQUEST:
	// 		return state.set('statusLoading', true);
	// 	case FETCH_PAGE_SUCCESS:
	// 		return state.withMutations(s => {
	// 			s.set('statusLoading', false);
	// 			if (action.payload) {
	// 				s.update('advertisements', advertisements => advertisements.concat(fromJS(action.payload)));
	// 			}
	// 		});
	// 	case FETCH_PAGE_FAILURE:
	// 		state.set('statusLoading', false);
	// 	default: 
	// 		return state;
	// }
}