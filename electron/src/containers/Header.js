import React from 'react';
import https from 'https';
import { connect } from 'react-redux';

import actions from '../store/actions';

import Header from '../components/Header';

const mapStateToProps = (state) => {
	const { statusLoading, step, startPage } = state.appState;
	const { advertisements } = state.carsInfoState;

	return {
		advertisements,
		statusLoading,
		step,
		startPage 
	}	
};

const mapDispatchToProps = (dispatch) => {
	return {
		
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);