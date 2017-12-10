import React from 'react';
import { connect } from 'react-redux';

import Loader from '../components/Loader';

const mapStateToProps = (state) => {
	return {
		statusLoading: state.get('statusLoading'),
	};
};

export default connect(mapStateToProps)(Loader);