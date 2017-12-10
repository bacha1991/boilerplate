import React, { Component } from 'react';

import Header from '../containers/Header';
import Loader from '../containers/Loader';
import Advertisements from '../containers/Advertisements';

class App extends Component {
	
	componentDidMount() {
		const { activePage, fetchPageAction } = this.props;
		fetchPageAction(activePage);	
	}

	render() {
		let { activePage } = this.props;
		return <div>
			<Header />
			<Advertisements />
			<Loader />
		</div>;
	}
}

export default App;