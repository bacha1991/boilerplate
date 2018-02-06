import { createAction } from 'redux-actions';

import fetchPage from './fetchPage';
import mainProcesses from '../../../main-process';

import { 
	GET_MARKS,
} from './actionsName';

// const changePageAction = createAction(CHANGE_PAGE);
const getMarksActions = createAction(GET_MARKS);

const fetchPageAction = () => (dispatch, getState) => {
	const { appState: { step, startPage } } = getState();
	fetchPage(startPage, step, dispatch);
};

const initAppAction = () => (dispatch, getState) => {
	const { autoRiaModule: {getMarks} } = mainProcesses;
	
	getMarks((data) => {
		dispatch(getMarksActions(data));
	}).then(() => {
		const { appState: { step, startPage } } = getState();
		fetchPage(startPage, step, dispatch);
	});
};

const actions = Object.assign({}, {
	initAppAction,
	fetchPageAction,
}, mainProcesses);

export default actions;
