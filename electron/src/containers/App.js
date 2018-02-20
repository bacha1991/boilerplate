import React from 'react';
import { connect } from 'react-redux';

import {
	fetchPageRequest,
	saveResult,
	saveMarksActions,
	pagesLoaded,
	fetchPageFailure,
	changeStartPage,
	saveAverages
} from '../store/actions';

import App from '../components/App';

import { getMarkAuto } from './selectors';

const mapDispatchToProps = (dispatch) => {
	return {
		saveMarks: (data) => { dispatch(saveMarksActions(data)) },
		fetchPageRequest: () => { dispatch(fetchPageRequest()) },
		saveResult: (data) => { dispatch(saveResult(data)) },
		pagesLoaded: () => { dispatch(pagesLoaded()) },
		fetchPageFailure: () => { dispatch(fetchPageFailure()) },
		changeStartPage: () => { dispatch(changeStartPage()) },
		saveAverages: (data) => { dispatch(saveAverages(data)) }
	};
};

const mapStateToProps = (state) => {
	const appState = state.appState;
	return {
		step: appState.step,
		startPage: appState.startPage,
		loadingStatus: appState.loadingStatus,
		autoInfo: getMarkAuto(state)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);