import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, Button } from 'react-native';
import { connect } from 'react-redux';

import { getActiveRouterParams } from './../selectors';

class Info extends Component {
    render() {
        const { type } = this.props.activeRouteParams;
        return (
            <View>
                <Text>This is {type}</Text>
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        activeRouteParams: getActiveRouterParams(state)
    };
};

export default connect(mapStateToProps)(Info);