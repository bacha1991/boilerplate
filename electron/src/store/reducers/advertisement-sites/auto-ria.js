import { fromJS, List } from 'immutable';

import { 
	GET_MARKS,
	SAVE_RESULT,
} from '../../actions/actionsName';

const initState = {
	marks: List(),
	advertisements: List(),
};

export function carsInfoState (state = initState, action) {
	switch (action.type) {
		case GET_MARKS: 
			state.marks = fromJS(action.payload);
			return state;
		case SAVE_RESULT:
			const { advertisements, marks } = state;
			const payload = action.payload.map(item => fromJS(item));
			return Object.assign({}, state, {
				advertisements: advertisements.unshift(...payload),
			});
		default: 
			return state;
	}
};