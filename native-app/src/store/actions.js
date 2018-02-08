import { createAction } from 'redux-actions'

export const NEWS = 'NEWS';
export const LAST_PAGE = 'LAST_PAGE';

export const getNewsAction = createAction(NEWS);
export const getLastPageAction = createAction(LAST_PAGE);