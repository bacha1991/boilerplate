import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CHANGE_PAGE } from '../store/actions';

class Header extends Component {
	
	constructor(props) {
		super(props);

		this.fetchPageHanler = this.fetchPageHanler.bind(this);
	}

	fetchPageHanler() {
		let { fetchPageAction } = this.props;
		fetchPageAction();
	}

	render() {
		const { fetchedPages } = this.props;
		return <header>
			<button onClick={this.fetchPageHanler}>Fetch Next Page</button>
		</header>;
	}
};

export default Header;

