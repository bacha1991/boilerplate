import React from 'react';
import https from 'https';
import { connect } from 'react-redux';

import { changePage, fetchPageAction } from '../store/actions';
import Header from '../components/Header';

const mapStateToProps = (state) => ({
	fetchedPages: state.fetchedPages,
	// fetchedPages: state.get('fetchedPages'),
});

const mapDispatchToProps = (dispatch) => ({
	// changePage: () => dispatch(changePage()),
	fetchPageAction: () => dispatch(fetchPageAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);