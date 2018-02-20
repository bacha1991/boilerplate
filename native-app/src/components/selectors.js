import { createSelector } from 'reselect';

const getIndex = (state) => state.nav.index;
const getIRoutes = (state) => state.nav.routes;

export const getActiveRouterParams = createSelector(
    [getIndex, getIRoutes],
    (index, routes) => routes[index].params || {}
);