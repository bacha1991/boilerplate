import React, { Component } from 'react';

class Loader extends Component {
	
	render() {
		const { statusLoading, fetchedPages } = this.props;
		if (statusLoading) {
			return <div className='overlay'>
				<h4 className='text-white loaded-pages'>Are Fetching Pages - {fetchedPages}</h4>
				<div className='loader'></div>
			</div>;
		}
		return null;
	}
}

export default Loader;