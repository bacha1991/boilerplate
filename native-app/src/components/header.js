import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Header extends Component {
    render() {
        return(
            <View style={styles.header}>
                <Text>Header</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center'
  }
});