import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { connect } from 'react-redux';

class Main extends Component {
    render() {
        const { navigate } = this.props;
        return (
            <View>
                <Image style={styles.image} source={require('assets/default-banner.jpg')}/>
                <Button
                    title="Video"
                    onPress={() => navigate('Info', { type: 'Video' })}
                />
                <Button
                    title="News"
                    onPress={() => navigate('Info', { type: 'News' })}
                />
                <Button
                    title="Blogs"
                    onPress={() => navigate('Info', { type: 'Blogs' })}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '50%',
    resizeMode: Image.resizeMode.cover
  }
});

const mapStateToProps = (state, ownProps) => {
    return {
        navigate: ownProps.navigation.navigate,
    };
};

export default connect(mapStateToProps)(Main);