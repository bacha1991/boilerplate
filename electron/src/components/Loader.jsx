import React from 'react';

const Loader = ({ statusLoading }) => {
	if (statusLoading) {
		return <div className='overlay'>
			<div className='loader'></div>
		</div>;
	}
	return null;
};

export default Loader;