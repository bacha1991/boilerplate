import React from 'react';
import { connect } from 'react-redux';

import Advertisements from '../components/Advertisements';

const mapStateToProps = (state) => ({
	advertisements: state.advertisements,
	// advertisements: state.get('advertisements'),
});

export default connect(mapStateToProps)(Advertisements);