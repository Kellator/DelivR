import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import * as searchReducer from './search';
import * as fetchReducer from './result';
// import * as action from './actions';

export default combineReducers({
	cuisineSearch: searchReducer.chooseCuisine,
	locationSearch: searchReducer.chooseLocation,
	form: formReducer,
    routing: routerReducer
});
console.log(searchReducer.chooseCuisine);