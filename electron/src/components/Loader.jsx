import React, { Component } from 'react';

class Loader extends Component {
	
	render() {
		const { statusLoading, fetchedPages, loadedPages } = this.props;
		if (statusLoading) {
			return <div className='overlay'>
				<h4 className='text-white loaded-pages'>Are Fetching Pages - {fetchedPages} of {loadedPages}</h4>
				<div className='loader'></div>
			</div>;
		}
		return null;
	}
}

export default Loader;