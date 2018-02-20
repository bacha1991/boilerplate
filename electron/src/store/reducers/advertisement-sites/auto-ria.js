import { fromJS, List } from 'immutable';

import { 
	SAVE_MARKS,
	SAVE_RESULT,
	SAVE_AVERAGES
} from '../../actions/names';

const initState = {
	marks: List(),
	advertisements: List(),
	averages: List()
};

export function carsInfoState (state = initState, action) {
	switch (action.type) {
		case SAVE_MARKS: 
			state.marks = fromJS(action.payload);
			return state;
		case SAVE_RESULT:
			const { advertisements, marks } = state;
			const payload = action.payload.map(item => fromJS(item));
			return Object.assign({}, state, {
				advertisements: advertisements.unshift(...payload),
			});
		case SAVE_AVERAGES: 
			const { averages } = state;
			return Object.assign({}, state, {
				averages: fromJS(action.payload),
			});
		default: 
			return state;
	}
};