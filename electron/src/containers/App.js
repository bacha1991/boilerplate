import React from 'react';
import { connect } from 'react-redux';

import { fetchPageAction } from '../store/actions';

import App from '../components/App';

const mapStateToProps = (state) => {
	return {
		// countPages: state.countPages,
		// countPages: state.get('countPages'),
	};
};

const mapDispatchToProps = (dispatch) => ({
	fetchPageAction: () => {  dispatch(fetchPageAction()) }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);