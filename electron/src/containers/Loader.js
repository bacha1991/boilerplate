import React from 'react';
import { connect } from 'react-redux';

import Loader from '../components/Loader';

const mapStateToProps = (state) => {
	const { fetchedPages, statusLoading } = state;
	return {
		fetchedPages: fetchedPages,
		// countPages: state.get('countPages'),
		statusLoading: statusLoading,
		// statusLoading: state.get('statusLoading'),
	};
};

export default connect(mapStateToProps)(Loader);