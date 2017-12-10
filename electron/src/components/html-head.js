export function setHead(params) {
	const head = document.head;
	const { title='Hello Electron!!' } = params;

	head.innerHTML = `
		<meta charset="UTF-8">
    	<title>${title}</title>
    	<link rel="stylesheet" href="assets/bootstrap.min.css">
    	<link rel="stylesheet" href="assets/style.css">
	`;
};

