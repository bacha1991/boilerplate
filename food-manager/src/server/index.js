import compression from 'compression';
import express from 'express';

import { WEB_PORT, STATIC_PATH } from '../shared/config';
import { isProd } from '../shared/util';
import renderApp from './render-app';

const app = express();

app.use(compression());
app.use(STATIC_PATH, express.static('dist'));
app.use(STATIC_PATH, express.static('public'));

app.get('*', (req, res) => {
    res.send(renderApp('Hello world'));
});

app.listen(WEB_PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${WEB_PORT} ${isProd ? 'prod' : 'dev'}`);
});
