'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _config = require('../shared/config');

var _util = require('../shared/util');

var renderApp = function renderApp(title) {
	return '<!doctype html>\n\t<html>\n\t  <head>\n\t    <title>' + title + '</title>\n\t    <link rel="stylesheet" href="' + _config.STATIC_PATH + '/css/style.css">\n\t  </head>\n\t  <body>\n\t    <div class="' + _config.APP_CONTAINER_CLASS + '"></div>\n\t    <script src="' + (_util.isProd ? _config.STATIC_PATH : 'http://localhost:' + _config.WDS_PORT + '/dist') + '/js/bundle.js"></script>\n\t  </body>\n\t</html>\n\t';
};

exports.default = renderApp;