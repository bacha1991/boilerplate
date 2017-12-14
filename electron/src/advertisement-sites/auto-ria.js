import { load as $ } from 'cheerio';

export function parseData(text) {
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
			parsedResult.push({
				imgSrc,
				href,
				decription,
				priceTicket
			});
			return true;
		}
	});
	return parsedResult;
};

export const getURL = (page) => `https://auto.ria.com/legkovie/?page=${page || 0}`;

console.info('auto-ria module');
