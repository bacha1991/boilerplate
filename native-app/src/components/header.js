import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = () => <Text style={styles.header}>App Name</Text>;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '900'
  }
});

export default Header;