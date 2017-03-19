import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { cuisineReducer as cuisine, locationReducer as location } from './search';
import * as fetchReducer from './result';
// import * as action from './actions';

export default combineReducers({
	cuisine,
	location,
	form: formReducer,
    routing: routerReducer
});