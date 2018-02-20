import React, { Component } from 'react';
import { shell } from 'electron';

const styles = {
	ol: {
		padding: '0.5em',
		borderTop: '1px solid black',
		margin: '0.5em 1em'
	}
};

class Advertisements extends Component{

	handleExternalLink(e) {
		const { href } = e.target;
		e.preventDefault();
		shell.openExternal(href);
	}

	shouldComponentUpdate({ loadingStatus }) {
		return !loadingStatus;
	}

	priceDifference(priceStr, average) {
		const [price] = priceStr.match(/[\d\s]*/);

		return average - Number(price);
	}

	render() {
		const { advertisements } = this.props;
		return <ol className='list-unstyled'  style={styles.ol}>
			{advertisements.map( (advertisement, i) => {
				const { imgSrc, href, decription, priceTicket, average = 0 } = advertisement;
				const averagePrice = Math.round(+average);
				const priceDifference = this.priceDifference(priceTicket, averagePrice);
				const priceState = priceDifference > 0;

				return <li key={i} className='media advertisement'>
					<img width="150" className='mr-3 align-self-center' src={imgSrc} />
					<div className='media-body'>
						<h5 className='mt-0 mb-1'>
							{priceTicket}.  
							<span className="badge badge-primary">{averagePrice} $ </span> 
							<span 
								className={`badge badge-${priceState ? 'success' : 'danger'}`}>
								{priceState ? '+' : ''}{priceDifference} $
							</span>
						</h5>
						<p>{decription}</p>
						<a onClick={this.handleExternalLink} href={href}>{href}</a>
					</div>
				</li>
			})}
		</ol>;
	}
}
export default Advertisements;