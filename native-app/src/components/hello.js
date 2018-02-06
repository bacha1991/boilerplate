import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

class HelloWorld extends Component {
    render() {
        console.log(this.props);
        const { name = "World"} = this.props;
        return (
            <Text>Hello {name}!</Text>
        );
    }
}

const mapStateToProps = state => {
    return {
        name: state.name
    }
}

export default connect(mapStateToProps)(HelloWorld);
