import https from 'https';
import { createAction } from 'redux-actions';

import { autoRiaModule } from '../../advertisement-sites';

import { 
	FETCH_PAGE_REQUEST,
	FETCH_PAGE_SUCCESS,
	FETCH_PAGE_FAILURE,
} from './actionsName';

const fetchPageRequest = createAction(FETCH_PAGE_REQUEST);
const fetchPageSuccess = createAction(FETCH_PAGE_SUCCESS);
const fetchPageFailure = createAction(FETCH_PAGE_FAILURE);

export default function fetchPage(page, dispatch) {
	const URL = autoRiaModule.getURL(page);
	let timeout = setTimeout(() => {
		dispatch(fetchPageFailure());
		console.error('Timeout', URL);
	}, 10000);

	let array = [];
	for (let i = 0; i < 10; i++) {
		array.push(i)
	}

	dispatch(fetchPageRequest());

	fetch(URL)
		.then(resp => resp.text())
		.then(text => {
			try {
			const result = autoRiaModule.parseData(text);
			dispatch(fetchPageSuccess(result));
		    } catch (e) {
		    	dispatch(fetchPageFailure());
		      	console.error(e);
		    }

		    clearTimeout(timeout);
		})
		.catch(function(error) {
			dispatch(fetchPageFailure());
			console.log(`There has been a problem fetch ${URL}: ` + error.message);
		});
}