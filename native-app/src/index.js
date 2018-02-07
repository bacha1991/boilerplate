import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './store/reducers';
import RouterNavigatorWithState from './router';
import { middleware } from './utils/redux';

const store = createStore(reducers, applyMiddleware(middleware));

export default function(props) {
  return (
    <Provider store={store}>
      <RouterNavigatorWithState />
    </Provider>
  );
};
