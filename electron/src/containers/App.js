import React from 'react';
import { connect } from 'react-redux';

import actions from '../store/actions';

import App from '../components/App';

const mapStateToProps = (state) => {
	return {
		// countPages: state.countPages,
		// countPages: state.get('countPages'),
	};
};

const mapDispatchToProps = (dispatch) => {
	const { initAppAction } = actions;
	return {
		// fetchPageAction: () => { dispatch(fetchPageAction()) },
		initAppAction: () => { dispatch(initAppAction()) },
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);