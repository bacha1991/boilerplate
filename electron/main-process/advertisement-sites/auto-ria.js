import { load as $ } from 'cheerio';

const getPageURL = (page) => `https://auto.ria.com/legkovie/?page=${page || 0}`;

function parseData(text) {
	const parsedResult = [];
	
	//remove comments
	let html = text.replace(/<!--[\s\S]*?-->/g, '');
	html = $(html);

	// remove unnecessary elements
	html('header, title, style, script, noscript, footer, link, meta, noindex').remove();

 	//const reg = /class="content-bar"[\s\S]*(https:\/\/auto.ria.com\/auto_\w*.html)[\s\S]*[Сс][Рр][Оо][Чч][Нн][Оо|Аа][Яя]?/g;
	
	const result = html('section.ticket-item').filter((index, item) => {
		const text = $(item)('.descriptions-ticket').text();

		if (text.match(/[Сс][Рр][Оо][Чч][Нн][Оо|Аа][Яя]?/g)) {
			const imgSrc = $(item)('img').attr('src');
			const href = $(item)('.content-bar a').attr('href');
			const decription = $(item)('.content').text();
			const priceTicket = $(item)('.price-ticket>span').text();
			const headTicket = $(item)('.head-ticket').text();
			parsedResult.push({
				imgSrc,
				href,
				decription,
				priceTicket,
				headTicket,
			});
			return true;
		}
	});
	return parsedResult;
};


export function fetchPages(start, step, success, error) {
	let array = [];
	
	// for (let i = start; i < start + step; i++) {
	// 	fetch(autoRiaModule.getPageURL(i))
	// 		.then(resp => resp.text())
	// 		.then(html => {
	// 			try {
	// 				const result = autoRiaModule.parseData(html);
	// 				success(result);
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

	return Promise.all(array.map(index => {
			return fetch(getPageURL(index))
				.then(resp => resp.text())
				.then(html => {
					try {
						const result = parseData(html);
						success(result);
				    } catch (e) {
				    	error();
				      	console.error(e);
				    }
				})
				.catch(e => {
					console.log(e);
				});
		}));
};

export function getMarks(callback) {
	const URL = 'http://api.auto.ria.com/categories/1/marks';

	return fetch(URL)
		.then(resp => resp.json())
		.then(json => {
			console.log(json);
			typeof callback === 'function' && callback(json);
		})
		.catch(e => {console.error(e)});
};

console.info('auto-ria module');
