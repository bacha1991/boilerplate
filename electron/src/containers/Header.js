import React from 'react';
import https from 'https';
import { connect } from 'react-redux';

import { changePage, fetchPage } from '../store/actions';
import Header from '../components/Header';

const mapStateToProps = (state) => ({
	fetchedPages: state.get('fetchedPages'),
});

const mapDispatchToProps = (dispatch) => ({
	changePage: (nextPage) => dispatch(changePage(nextPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);