import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Footer = () => (
    <View style={styles.footer}>
        <Text>Footer</Text>
    </View>
);

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center'
  }
});

export default Footer;
