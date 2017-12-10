import https from 'https';
import { createAction } from 'redux-actions';

import { autoRiaModule } from '../../advertisement-sites';

import { 
	FETCH_PAGE_REQUEST,
	FETCH_PAGE_SUCCESS,
	FETCH_PAGE_FAILURE,
} from './actionsName';

export const fetchPageRequest = createAction(FETCH_PAGE_REQUEST);
export const fetchPageSuccess = createAction(FETCH_PAGE_SUCCESS);
export const fetchPageFailure = createAction(FETCH_PAGE_FAILURE);

export default function fetchPage(page, dispatch) {
	let timeout;
	dispatch(fetchPageRequest());

	https.get(autoRiaModule.getURL(page), (res) => {
	  const { statusCode } = res;
	  const contentType = res.headers['content-type'];

	  if (statusCode !== 200) {
	    error = new Error(`Request Failed.\n Status Code: ${statusCode}`);
	  }

	  res.setEncoding('utf8');
	  let rawData = '';
	  res.on('data', (chunk) => { rawData += chunk; });
	  res.on('end', () => {
	  	const html = rawData;
	  	rawData = null;
	    try {
			const result = autoRiaModule.parseData(html);
			dispatch(fetchPageSuccess(result));
	    } catch (e) {
	    	dispatch(fetchPageFailure());
	      	console.error(e.message);
	    }

	    clearTimeout(timeout);
	  });
	}).on('error', (e) => {
		dispatch(fetchPageFailure());
		console.error(`Got error: ${e.message}`);
	});

	timeout = setTimeout(() => {
		dispatch(fetchPageFailure());
		console.error('Timeout',autoRiaModule.getURL(page));
	}, 10000);
}