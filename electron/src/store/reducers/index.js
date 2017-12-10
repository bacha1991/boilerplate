import { fromJS, List } from 'immutable';

import { 
	CHANGE_PAGE,
	FETCH_PAGE_REQUEST,
	FETCH_PAGE_SUCCESS,
	FETCH_PAGE_FAILURE
} from '../actions/actionsName';

const initialState = fromJS({
	fetchedPages: 1,
	statusLoading: false,
	advertisements: List()
});

export default function appState(state = initialState, action) {
	switch (action.type) {
		case CHANGE_PAGE: 
			return state.set('fetchedPages', action.payload);
		case FETCH_PAGE_REQUEST:
			return state.set('statusLoading', true);
		case FETCH_PAGE_SUCCESS:

			return state.withMutations(s => {
				s.set('statusLoading', false);
				if (action.payload) {
					s.update('advertisements', advertisements => advertisements.concat(fromJS(action.payload)));
				}
			});
		case FETCH_PAGE_FAILURE:
			state.set('statusLoading', false);
		default: 
			return state;
	}
}