import React from 'react';
import { connect } from 'react-redux';

import { fetchPageAction } from '../store/actions';

import App from '../components/App';

const mapStateToProps = (state) => {
	return {
		activePage: state.get('activePage'),
	};
};

const mapDispatchToProps = (dispatch) => ({
	fetchPageAction: (page) => {  dispatch(fetchPageAction(page)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);