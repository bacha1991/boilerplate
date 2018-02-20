import React from 'react';
import { connect } from 'react-redux';

import Loader from '../components/Loader';

const mapStateToProps = ({ appState }) => {
	const { fetchedPages, loadedPages, loadingStatus } = appState;
	return {
		fetchedPages,
		loadedPages,
		loadingStatus,
	};
};

export default connect(mapStateToProps)(Loader);