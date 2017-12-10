import { createAction } from 'redux-actions';

import fetchPage from './fetchPage';

import { 
	CHANGE_PAGE,
} from './actionsName';

export const fetchPageAction = (page) => (dispatch) => {
	fetchPage(page, dispatch);
};

export const changePage = (page) => (dispatch) => {
	dispatch(createAction(CHANGE_PAGE)(page));
	fetchPage(page, dispatch);
};

