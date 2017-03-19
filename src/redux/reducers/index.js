import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import * as searchReducer from './search';
import * as fetchReducer from './result';
// import * as action from './actions';

export default combineReducers({
	cuisineSearch: searchReducer.cuisineReducer,
	locationSearch: searchReducer.locationReducer,
	form: formReducer,
    routing: routerReducer
});
console.log(searchReducer.cuisineReducer);