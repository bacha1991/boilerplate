import React from 'react';
import { connect } from 'react-redux';

import Advertisements from '../components/Advertisements';
import { getMarkAuto } from '../store/selectors';

const mapStateToProps = (state, props) => {
	const { statusLoading } = state.appState;
	const { advertisements } = state.carsInfoState;
	return {
		advertisements,
		statusLoading,
		autoInfo: getMarkAuto(state)
	}
};

export default connect(mapStateToProps)(Advertisements);