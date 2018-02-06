import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View } from 'react-native';

import reducers from './store/reducers';

import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <Body />
        <Footer />
      </View>
    );
  }
}

const store = createStore(reducers)

export default function() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
