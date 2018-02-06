import { createSelector } from 'reselect';

const getAdvertisements = state => state.carsInfoState.advertisements;
const getMarks = state => state.carsInfoState.marks;

export const getMarkAuto = createSelector(
  [getAdvertisements, getMarks],
  (advertisements, marks, carsListInfo) => {

	console.log(arguments);
	return [];
  }
)