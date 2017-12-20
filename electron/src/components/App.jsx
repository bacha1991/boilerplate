import React, { Component } from 'react';

import Header from '../containers/Header';
import Loader from '../containers/Loader';
import Advertisements from '../containers/Advertisements';

class App extends Component {
	
	componentDidMount() {
		const { fetchPageAction } = this.props;
		fetchPageAction();	
	}

	render() {
		return <div>
			<Header />
			<Advertisements />
			<Loader />
		</div>;
	}
}

export default App;