import React from 'react';
import { connect } from 'react-redux';

import Advertisements from '../components/Advertisements';

const mapStateToProps = (state) => ({
	advertisements: state.get('advertisements'),
});

// const mapDispatchToProps = (dispatch) => ({
// 	changePage: (nextPage) => dispatch(changePage(nextPage)),
// 	fetchPage: (page) => {  dispatch(fetchPage(page)) }
// });

export default connect(mapStateToProps)(Advertisements);