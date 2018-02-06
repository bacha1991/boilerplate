import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Footer extends Component {
    render() {
        return(
            <View style={styles.header}>
                <Text>Footer</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center'
  }
});