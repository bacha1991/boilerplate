import React from 'react';
import { connect } from 'react-redux';

import Loader from '../components/Loader';

const mapStateToProps = ({ appState }) => {
	const { fetchedPages, loadedPages, statusLoading } = appState;
	return {
		fetchedPages,
		loadedPages,
		statusLoading,
	};
};

export default connect(mapStateToProps)(Loader);