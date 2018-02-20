import { createSelector } from 'reselect';

const getAdvertisements = state => state.carsInfoState.advertisements;
const getMarks = state => state.carsInfoState.marks;
const getAverages = state => state.carsInfoState.averages;

export const getMarkAuto = createSelector(
  [getAdvertisements, getMarks, getAverages],
  (advertisements, marks, averages) => {
  	const advertisementsJs = advertisements.toJS();
  	const marksJs = marks.toJS();
  	const averagesJs = averages.toJS();

  	return advertisementsJs.map((item, i) => {
  		const mark = marksJs.find(mark => mark.name === item.mark);
  		item.markId = mark.value;
  		item.average = averagesJs[i];
  		return item;
  	});
  }
)