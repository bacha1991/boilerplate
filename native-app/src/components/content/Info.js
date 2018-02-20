import React, { Component } from 'react';
import {
    Text, View, StyleSheet, Alert,
    Button, FlatList, ScrollView,
    Image, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import XMLParser from 'react-xml-parser';

import config from '../../../app.config';
import { getNewsAction, getLastPageAction } from 'store/actions';

import { getActiveRouterParams } from './../selectors';

class Info extends Component {

    componentDidMount() {
        const { getNews } = this.props;

        fetch(config.sourceUrl)
            .then(resp => resp.text())
            .then(data => {
                const parser = new XMLParser().parseFromString(data);
                getNews(parser.getElementsByTagName('item'));
            })
            .catch(console.error);
    }

    renderNews() {
        const { news } = this.props;

        if (!news.length) {
            return <View style={styles.loading}><Text>Loading...</Text></View>;
        }

        return <FlatList
            data={news}
            renderItem={({item}) => {
                const { navigate } = this.props;
                const reg =  /\d{2}\s\w{3}\s\d{4}/g;
                const src = item.getElementsByTagName('img')[0].attributes.src;
                const title = item.getElementsByTagName('title')[0].value;
                const date = item.getElementsByTagName('pubDate')[0].value.match(reg)[0];

                return (
                    <TouchableOpacity onPress={() => navigate('Details', { data: item })}>
                        <View style={styles.row}>
                            <Image
                                source={{uri: src}}
                                style={styles.img} />
                            <View style={styles.textBlock}>
                                <Text style={styles.title}>{title}</Text>
                                <Text style={styles.date}>{date}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
            }}
        />
    }

    renderContent() {
        const { setLastPage, lastPage, activeRouteParams } = this.props;
        const type = activeRouteParams.type || lastPage;

        setLastPage(type);

        switch(type) {
            case 'news':
                return this.renderNews();
            default:
                return type ? <Text>This is {type}</Text> : null;
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                {this.renderContent()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   padding: 10
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
    backgroundColor: '#fff'
  },
  img: {
    width: '100%',
    height: 100,
    width: '40%',
    marginRight: 5,
    resizeMode: Image.resizeMode.cover
  },
  textBlock: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 10
  },
  date: {
    fontSize: 10,
    color: 'gray'
  },
  loading: {
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const mapStateToProps = (state, ownProps) => {
    return {
        activeRouteParams: getActiveRouterParams(state),
        news: state.news,
        lastPage: state.lastPage,
        navigate: ownProps.navigation.navigate
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getNews: news => dispatch(getNewsAction(news)),
        setLastPage: page => dispatch(getLastPageAction(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);