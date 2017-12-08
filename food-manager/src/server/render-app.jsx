import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { STATIC_PATH } from '../shared/config';
import Title from '../shared/component/Title';

const html = ReactDOMServer.renderToString(<Title />);

const renderApp = (title) =>
`<!doctype html>
<html>
  <head>
    <title>${title}</title>
    <link rel="stylesheet" href="${STATIC_PATH}/css/style.css">
  </head>
  <body>
    <div clas="root">${html}</div>
  </body>
</html>`;

export default renderApp;