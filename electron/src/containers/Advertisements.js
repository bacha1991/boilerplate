import React from 'react';
import { connect } from 'react-redux';

import Advertisements from '../components/Advertisements';

const mapStateToProps = (state, props) => {
	return {
		loadingStatus: state.appState.loadingStatus,
	}
};

export default connect(mapStateToProps)(Advertisements);