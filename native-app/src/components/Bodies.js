import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import Main from './content/Main';
import Info from './content/Info';

const bodyWrapper = (Contnet) => (
     <View style={styles.container}>
        {Contnet}
    </View>
);

class Body extends Component {
    render = () => bodyWrapper(<Main navigation={this.props.navigation} />);
}

const mapStateToProps = (state, ownProps) => ({
    navigation: ownProps.navigation
});

export default connect(mapStateToProps)(Body);

export class BodyInfo extends Component {
    render = () => bodyWrapper(<Info />);
}

const styles = StyleSheet.create({
  container: {
    minHeight: '90%',
    backgroundColor: '#e8eaf8'
  }
});

