import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
//import { createLogger } from 'redux-logger';

import { setHead } from './components/html-head';
import App from './containers/App';

import reducers from './store/reducers';

//const loggerMiddleware = createLogger();
const store = createStore(
	reducers,
	applyMiddleware(
		thunkMiddleware,
		// loggerMiddleware
	),
);

setHead({});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

console.info('SRC index.js');