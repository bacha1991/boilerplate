import { autoRiaModule } from '../src/advertisement-sites';

export default function fetchPage(page, dispatch) {

	const array = Array(10);

	// const URL = autoRiaModule.getURL(page);
	// let timeout = setTimeout(() => {
	// 	dispatch(fetchPageFailure());
	// 	console.error('Timeout', URL);
	// }, 10000);

	//dispatch(fetchPageRequest());

	Promise.all(array.map(index => fetch(autoRiaModule.getURL(index))))
		.then(resp => Promise.all( resp.map(resp => resp.text()) ))
		.then(htmls => {
			console.log('done')
		});

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