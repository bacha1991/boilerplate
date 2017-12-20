import { createAction } from 'redux-actions';

import mainProcesses from '../../../main-process';

import { 
	FETCH_PAGE_REQUEST,
	FETCH_PAGE_SUCCESS,
	FETCH_PAGE_FAILURE,
	CHANGE_START_PAGE,
} from './actionsName';

const fetchPageRequest = createAction(FETCH_PAGE_REQUEST);
const fetchPageSuccess = createAction(FETCH_PAGE_SUCCESS);
const fetchPageFailure = createAction(FETCH_PAGE_FAILURE);
const changeStartPage = createAction(CHANGE_START_PAGE);

export default function fetchPage(start, step, dispatch) {
	const { fetchPages } = mainProcesses;

	const successCallback = (data) => {
		dispatch(fetchPageSuccess(data));
		console.log('Success');
	};
	const errorCallback = () => {
		dispatch(fetchPageFailure());
		console.log('Error');
	};

	dispatch(fetchPageRequest());

	fetchPages(start, step, successCallback, errorCallback);
	
	dispatch(changeStartPage());
}
