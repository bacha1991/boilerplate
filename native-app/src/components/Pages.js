import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

import Header from './Header';
import Body, { BodyInfo } from './Bodies';
import Footer from './Footer';

const getPage = (Body) => (
    <ScrollView style={styles.page}>
        {Body}
        <Footer />
    </ScrollView>
);

class Page extends Component {
    render = () => getPage(<Body navigation={this.props.navigation}/>);
}

const mapStateToProps = (state, ownProps) => ({
    navigation: ownProps.navigation
});

export const Main = connect(mapStateToProps)(Page);

export class Info extends Component {
  render = () => getPage(<BodyInfo/>);
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#f0f0f0'
    }
});
