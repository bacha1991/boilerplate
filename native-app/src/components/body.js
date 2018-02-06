import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, Button } from 'react-native';

import HelloWorld from './hello';

export default class Header extends Component {
    render() {
        return(
             <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Press Me"/>
                </View>
                <HelloWorld />
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
                <Button
                    onPress={() => { Alert.alert('You tapped the button!')}}
                    title="Press Me"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  }
});