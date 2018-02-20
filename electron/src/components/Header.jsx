import React, { Component } from 'react';
import { connect } from 'react-redux';

const styles = {
	header: {
		padding: '1em',
	    paddingBottom: '0.5em'
	},
	btn: {
		marginLeft: '0.5em'
	},
	top: {
		paddingBottom: '0.5em',
		borderBottom: '1px solid black',
		marginBottom: '1em'
	} 
}

class Header extends Component {

	constructor(props) {
		super(props);

		this.fetchNext = this.fetchNext.bind(this);
	}

	shouldComponentUpdate({ statusLoading }) {
		return !statusLoading;
	}

	fetchNext() {
		const { fetchPages, step, startPage } = this.props;

		fetchPages();
	}

	render() {
		const { advertisements, step } = this.props;
		return <header style={styles.header}>
			<h5 style={styles.top}>
				<span>Found Cars - </span>
				<span className="badge badge-primary">{advertisements.size}</span>
			</h5>
			<button 
				onClick={this.fetchNext} 
				style={styles.btn}
				className="btn btn-primary">
					Fetch Next {step} Pages
			</button>
		</header>;
	}
};

export default Header;

