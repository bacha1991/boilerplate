// @flow

import 'babel-polyfill'

import $ from 'jquery'
import Tether from 'tether'

import Immutable from 'immutable'
import setUpSocket from './socket'

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import helloReducer from '../shared/reducer/hello'
import { APP_CONTAINER_SELECTOR, JSS_SSR_SELECTOR } from '../shared/config'
import { isProd } from '../shared/util'

window.jQuery = $
window.Tether = Tether
require('bootstrap')

// use only for client side apps
// const jssServerSide = document.querySelector(JSS_SSR_SELECTOR)
// // flow-disable-next-line
// jssServerSide.parentNode.removeChild(jssServerSide)

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const preloadedState = window.__PRELOADED_STATE__
/* eslint-enable no-underscore-dangle */

const store = createStore(combineReducers(
  { hello: helloReducer }),
  { hello: Immutable.fromJS(preloadedState.hello) },
  composeEnhancers(applyMiddleware(thunkMiddleware)));


setUpSocket(store)