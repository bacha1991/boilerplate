import React from 'react';
import { Main, Info } from './components/Pages';
import Header from './components/Header';

export const initialRoute = {
    initialRouteName: 'Main',
    navigationOptions: {
        headerTitle: <Header />,
        headerStyle: {
            backgroundColor: '#6b52ae',
        },
        headerTintColor: '#fff',
        // headerTitleStyle: {
        //     fontWeight: 'bold',
        // }
    }
};

export const routes = {
    Main: { screen: Main },
    Info: {
        screen: Info,
        navigationOptions: {}
    }
};