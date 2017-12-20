import { autoRiaModule } from './advertisement-sites';

export function fetchPages(start, step, success, error) {
	let array = [];
	
	// for (let i = start; i < start + step; i++) {
	// 	fetch(autoRiaModule.getURL(i))
	// 		.then(resp => resp.text())
	// 		.then(html => {
	// 			try {
	// 				const result = autoRiaModule.parseData(html);
	// 				setTimeoutsuccess(result);
	// 		    } catch (e) {
	// 		    	error();
	// 		      	console.error(e);
	// 		    }
	// 		})
	// 		.catch(e => {
	// 			console.log(e);
	// 		});
	// }

	for (let i = start; i < start + step; i++) {
		array.push(i)
	}

	Promise.all(array.map(index => {
			return fetch(autoRiaModule.getURL(index))
				.catch(e => {
					console.log(e);
				});
		}))
		.then(resp => Promise.all( resp.map(resp => resp.text()) ))
		.then(htmls => {
			htmls.forEach(html => {
				try {
					const result = autoRiaModule.parseData(html);
					success(result);
			    } catch (e) {
			    	error();
			      	console.error(e);
			    }
			});
		});
}

