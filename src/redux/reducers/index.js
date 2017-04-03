import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import * as reducers from './search';

export default combineReducers({
	cuisine: reducers.cuisineReducer,
	location: reducers.locationReducer,
	fetching: reducers.fetchRequestReducer,
	result: reducers.resultReducer,
	form: formReducer,
    routing: routerReducer
});