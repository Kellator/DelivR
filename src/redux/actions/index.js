import axios from 'axios';
import { history } from '../../redux/store';
import { push, replace } from 'react-router-redux';
require('axios-debug')(axios);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'PUT, GET, POST, DELETE, OPTIONS';
axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token';

import URLSearchParams from 'url-search-params';
const searchUrl = 'https://api.yelp.com/v3/transactions/delivery/search';

//choose a type of food 
export const CHOOSE_CUISINE = 'CHOOSE_CUISINE';
//choose location
export const CHOOSE_LOCATION = 'CHOOSE_LOCATION';
//reset app
export const RESET_SELECTIONS = 'RESET_SELECTIONS';
//AJAX Fetch actions
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const DISPLAY_RESULTS = 'DISPLAY_RESULTS';

export const SAVE_RESULT = 'SAVE_RESULT';
//actions creators
//choose type of cuisine for search
export const chooseCuisine = cuisine => ({ 
	type: CHOOSE_CUISINE,
	cuisine
});
// choose location for search
export const chooseLocation = location => ({
	type: CHOOSE_LOCATION,
	location
});
//reset search
export const saveResult = resultData => ({
	type: SAVE_RESULT,
	resultData
})
export const fetchSuccess = (bool) => ({
	type: FETCH_SUCCESS,
	bool
});
export const fetchError = (bool) => ({
	type: FETCH_ERROR,
	bool
});
export const fetchRequest = () => ({
	type: FETCH_REQUEST,
});
export const displayResults = () => {
    type: DISPLAY_RESULTS;
}
// make fetch to 'localhost'  in production do to hosted site
export const asyncRequest = (cuisine, location) => {
	return dispatch => {
		dispatch(fetchRequest()) 
		return axios.get('https://mysterious-inlet-23273.herokuapp.com/search', {
			params:{
				cuisine: cuisine,
				location: location
			}
		})
			.then(res => {
				dispatch(fetchSuccess())
				dispatch(saveResult(res.data))
				history.replace('/results');
				console.log("hello");
				console.log(res.data);
			})
			.catch(error => console.log({error}));
	}
}
