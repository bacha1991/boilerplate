// import { createAction } from 'redux-actions';

import fetchPage from './fetchPage';

// import { 
// 	CHANGE_PAGE,
// } from './actionsName';

// const changePageAction = createAction(CHANGE_PAGE);

export const fetchPageAction = () => (dispatch, getState) => {
	const { step, startPage } = getState();
	// const step = getState().get('step');
	// const start = getState().get('startPage');
	fetchPage(startPage, step, dispatch);
};

// export const changePage = (page) => (dispatch) => {
// 	const changePage = createAction(CHANGE_PAGE);
// 	dispatch(changePage(page));
// 	fetchPage(page, dispatch);
// };

// export const changePage = () => (dispatch, getState) => {
// 	const { countPages } = getState();
// 	// const countPages = getState().get('countPages');
// 	dispatch(changePageAction(countPages));
// 	fetchPage(countPages, dispatch);
// };