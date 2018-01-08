import React from 'react';
import https from 'https';
import { connect } from 'react-redux';

import actions from '../store/actions';
import Header from '../components/Header';

const mapStateToProps = (state) => {
	const { statusLoading, step } = state.appState;
	const { advertisements } = state.carsInfoState;
	return {
		advertisements,
		statusLoading,
		step,
	}	
};

const mapDispatchToProps = (dispatch) => {
	const { fetchPageAction } = actions;
	return {
		fetchPageAction: () => dispatch(fetchPageAction()),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);