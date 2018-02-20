import React, { Component } from 'react';

import Header from '../containers/Header';
import Loader from '../containers/Loader';
import Advertisements from '../containers/Advertisements';
import { autoRiaModule } from '../../main-process';

class App extends Component {

	constructor(props) {
		super(props);

		this.fetchPages = this.fetchPages.bind(this);
	}
	
	componentDidMount() {
		const { saveMarks, step, startPage } = this.props;

		autoRiaModule.getMarks(data => saveMarks(data))
			.then(() => this.fetchPages());	
	}

	getModels() {
		const { autoInfo } = this.props;

		const models = autoInfo.map(auto => {
			const { markId, model } = auto;

			return autoRiaModule.getModel(markId)
				.then(json =>  json.find(item => item.name === model));
		});

		return Promise.all(models);
	}

	getAverages(models) {
		const { autoInfo, saveAverages } = this.props;

		const averages = models.map(({value}, i) => {
			const { markId, year } = autoInfo[i];

			return autoRiaModule.getAverage(markId, value, year)
				.then(json => json.interQuartileMean);
		});

		Promise.all(averages)
			.then(result => saveAverages(result));
	}

	fetchPages() {
		const { 
			step, 
			startPage,
			fetchPageRequest,
			pagesLoaded,
			saveResult,
			fetchPageFailure
		} = this.props;

		const pageLoadSuccess = (data) => {
			saveResult(data);
			console.log('Success');
		};
		const pageLoadError = () => {
			fetchPageFailure();
			console.log('Error');
		};

		const props = {
			startPage,
			step,
			success: pageLoadSuccess,
			error:pageLoadError
		};

		fetchPageRequest();

		return autoRiaModule.fetchPages(props)
			.then(() => {
				this.getModels()
					.then(models => {
						this.getAverages(models);
					});

				pagesLoaded();
			});
	}

	render() {
		return <div>
			<Header fetchPages={this.fetchPages}/>
			<Advertisements advertisements={this.props.autoInfo}/>
			<Loader />
		</div>;
	}
}

export default App;
