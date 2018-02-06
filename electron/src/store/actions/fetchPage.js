import { createAction } from 'redux-actions';

import mainProcesses from '../../../main-process';

import { 
	FETCH_PAGE_REQUEST,
	SAVE_RESULT,
	FETCH_PAGE_FAILURE,
	CHANGE_START_PAGE,
	APP_LOADED,
	INCREMENT_FETCHED_PAGES,
} from './actionsName';

const fetchPageRequest = createAction(FETCH_PAGE_REQUEST);
const saveResult = createAction(SAVE_RESULT);
const fetchPageFailure = createAction(FETCH_PAGE_FAILURE);
const changeStartPage = createAction(CHANGE_START_PAGE);
const incrementFetchedPages = createAction(INCREMENT_FETCHED_PAGES);
const appLoaded = createAction(APP_LOADED);

export default function fetchPage(start, step, dispatch) {
	const { autoRiaModule: {fetchPages} } = mainProcesses;

	const successCallback = (data) => {
		dispatch(incrementFetchedPages());
		dispatch(saveResult(data));
		console.log('Success');
	};
	const errorCallback = () => {
		dispatch(fetchPageFailure());
		console.log('Error');
	};

	dispatch(fetchPageRequest());

	fetchPages(start, step, successCallback, errorCallback)
		.then(() => {
			dispatch(appLoaded());
		});

	dispatch(changeStartPage());
}
