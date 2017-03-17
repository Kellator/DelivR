import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { Search } from './search';
import { ReturnResults } from './return';

export default combineReducers({
	searchResults: Search,
	restaurantResults: ReturnResults,
	form: formReducer,
    routing: routerReducer
});