import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { connect } from 'react-redux';

import { getActiveRouterParams } from './../selectors';

class Details extends Component {
    render() {
        const { data } = this.props.activeRouteParams;
        if (!data) {
            return null;
        }
        const { navigate } = this.props;
        const reg =  /\d{2}\s\w{3}\s\d{4}/g;
        const src = data.getElementsByTagName('img')[0].attributes.src;
        const title = data.getElementsByTagName('title')[0].value;
        const date = data.getElementsByTagName('pubDate')[0].value.match(reg)[0];
        return (
            <View style={styles.row}>
                <Image
                    source={{uri: src}}
                    style={styles.img} />
                <View style={styles.textBlock}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '50%',
    resizeMode: Image.resizeMode.cover
  }
});

const mapStateToProps = (state, ownProps) => {
    return {
        activeRouteParams: getActiveRouterParams(state)
    };
};

export default connect(mapStateToProps)(Details);