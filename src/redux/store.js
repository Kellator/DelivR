import { compose, createStore, applyMiddleware } from 'redux';
import createHashHistory from 'history/createHashHistory';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const middleware = [
    logger(),
    thunk
];

const enhancers = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

/**
 * CREATE STORE
 */
export const initialState = {
    cuisine: "",
    location: "",
    fetching: false,
    token: ""
};
let store = createStore(
    rootReducer,
    initialState,
    enhancers
);

export const history = syncHistoryWithStore(createHashHistory(), store);

export { store };