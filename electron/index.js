const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const colors = require('colors');
const glob = require('glob');
const debug = /--debug/.test(process.argv[2]);
const { isProd } = require('./src/shared/util');

let win;

function createWindow () {
	win = new BrowserWindow({ width: 800, height: 600 });

	win.loadURL(url.format({
		pathname: path.join(__dirname, `index.${isProd ? '' : 'dev.'}html`),
		protocol: 'file',
		stashes: true
	}));

	 if (debug) {
      win.webContents.openDevTools();
    }

	win.on('closed', () => {
		win = null;
	});

	!isProd && console.log('RUN WEBPACK SERVER - npm run dev:wds'.blue);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
});