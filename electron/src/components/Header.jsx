import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CHANGE_PAGE } from '../store/actions';

class Header extends Component {
	
	constructor(props) {
		super(props);

		this.fetchPageHanler = this.fetchPageHanler.bind(this);
	}

	fetchPageHanler() {
		let { changePage, fetchedPages } = this.props;
		changePage(++fetchedPages);
	}

	render() {
		const { fetchedPages } = this.props;
		return <header>
			<h3>Count Fetched page {fetchedPages}</h3>
			<button onClick={this.fetchPageHanler}>Fetch Next Page</button>
		</header>;
	}
};

export default Header;

