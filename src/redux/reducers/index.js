import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { cuisineReducer as cuisine, locationReducer as location, isFetchingReducer as fetching } from './search';

export default combineReducers({
	cuisine,
	location,
	fetching,
	form: formReducer,
    routing: routerReducer
});