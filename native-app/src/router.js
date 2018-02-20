import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import { addListener } from './utils/redux';
import { routes, initialRoute } from './router.config';

export const RouterNavigator = StackNavigator(routes, initialRoute);

class Router extends Component {
  render() {
    const { dispatch, nav } = this.props;
    return (
      <RouterNavigator navigation={addNavigationHelpers({
        dispatch: dispatch,
        state: nav,
        addListener,
      })} />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(Router);