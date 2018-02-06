import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

	shouldComponentUpdate({ statusLoading }) {
		return !statusLoading;
	}

	render() {
		const { fetchPageAction, advertisements, step } = this.props;
		return <header>
			<h5>Found Cars:<span className="badge badge-secondary">{advertisements.size}</span></h5>
			<button onClick={fetchPageAction}>Fetch Next {step} Pages</button>
		</header>;
	}
};

export default Header;

