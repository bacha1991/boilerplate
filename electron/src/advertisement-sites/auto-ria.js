const $ = require('cheerio').load;

export function parseData(html) {
	var parsedResult = [];
	
	//remove comments
	html = html.replace(/<!--[\s\S]*?-->/g, '');

	const layout = $(html);

	// remove unnecessary elements
	layout('header, title, style, script, noscript, footer, link, meta, noindex').remove();

 	//const reg = /class="content-bar"[\s\S]*(https:\/\/auto.ria.com\/auto_\w*.html)[\s\S]*[Сс][Рр][Оо][Чч][Нн][Оо|Аа][Яя]?/g;
	
	const result = layout('section.ticket-item').filter((index, item) => {
		if ($(item)('.descriptions-ticket').text().match(/[Сс][Рр][Оо][Чч][Нн][Оо|Аа][Яя]?/g)) {
			var imgSrc = $(item)('img').attr('src');
			var href = $(item)('.content-bar a').attr('href');
			var decription = $(item)('.content').text();
			var priceTicket = $(item)('.price-ticket>span').text();
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
	// console.log(parsedResult);
	// return  result ? result.html() : layout.html();
};

export const getURL = (page) => `https://auto.ria.com/legkovie/?page=${page || 0}`;

console.info('auto-ria module');
