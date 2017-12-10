import React, { Component } from 'react';
import { shell } from 'electron';

class Advertisements extends Component{

	handleExternalLink(e) {
		const { href } = e.target;
		e.preventDefault();
		shell.openExternal(href);
	}

	render() {
		const { advertisements } = this.props;
		return <ul className='list-unstyled'>
			{advertisements.map( (advertisement, i) => {
				const { imgSrc, href, decription, priceTicket } = advertisement.toJS();
				return <li key={i} className='media'>
					<img width="150" className='mr-3 align-self-center' src={imgSrc} />
					<div className='media-body'>
						<h5 className='mt-0 mb-1'>{priceTicket}</h5>
						<p>{decription}</p>
						<a onClick={this.handleExternalLink} href={href}>{href}</a>
					</div>
				</li>
			})}
		</ul>;
	}
}
export default Advertisements;