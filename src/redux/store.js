import { compose, createStore, applyMiddleware } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import logger from 'redux-logger';
import rootReducer from './reducers';

const middleware = [
    logger()
];

const enhancers = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

/**
 * CREATE STORE
 */
const initialState = {
    search: {
        cuisineSearch: "",
        locationSearch: ""
    },
    restaurantResults: []
};
const store = createStore(
    rootReducer,
    initialState,
    enhancers
);

export const history = syncHistoryWithStore(createBrowserHistory(), store);

export { store };