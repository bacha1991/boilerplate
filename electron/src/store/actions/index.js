import { createAction } from 'redux-actions';

import { 
	FETCH_PAGE_REQUEST,
	SAVE_RESULT,
	FETCH_PAGE_FAILURE,
	CHANGE_START_PAGE,
	PAGES_LOADED,
	SAVE_MARKS,
	SAVE_AVERAGES
} from './names';

export const fetchPageRequest = createAction(FETCH_PAGE_REQUEST);
export const saveResult = createAction(SAVE_RESULT);
export const fetchPageFailure = createAction(FETCH_PAGE_FAILURE);
export const changeStartPage = createAction(CHANGE_START_PAGE);
export const pagesLoaded = createAction(PAGES_LOADED);
export const saveMarksActions = createAction(SAVE_MARKS);
export const saveAverages = createAction(SAVE_AVERAGES);

