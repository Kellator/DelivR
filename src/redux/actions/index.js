// import fetch from 'isomorphic-fetch';
import axios from 'axios';
require('axios-debug')(axios);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'PUT, GET, POST, DELETE, OPTIONS';
axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token';

axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers['Access-Control-Allow-Methods'] = 'PUT, GET, POST, DELETE, OPTIONS';
axios.defaults.headers['Access-Control-Allow-Headers'] = 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token';
import URLSearchParams from 'url-search-params';
// const yelp = require('yelp-fusion');
// action constants
// let searchUrl = "https://api.yelp.com/v3/transactions/delivery/search?";
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
export const resetSelections = selections => ({
	type: RESET_SELECTIONS,
	selections
});
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

let cuisine;
let location;

const tokenUrl = "https://api.yelp.com/oauth2/token";
let searchLocation = "location=" + location;
let searchCuisine = "categories=" + cuisine;
let searchUrl = "https://api.yelp.com/v3/transactions/delivery/search?" + 
searchLocation + searchCuisine;

const tokenHeaders = new Headers();
tokenHeaders.append("grant_type", "client_credentials");
tokenHeaders.append("client_id", "F1GjwxdHmDgOyEQnFkrOdg");
tokenHeaders.append("client_secret", "6VupwbF7anbAd8yHZYbl9CDDQDFzzmORu2al1E3JkqaI1HSvGEqFSLT6M8VDpLZp");

const tokenData = new FormData();
tokenData.append("grant_type", "client_credentials");
tokenData.append("client_id", "F1GjwxdHmDgOyEQnFkrOdg");
tokenData.append("client_secret", "6VupwbF7anbAd8yHZYbl9CDDQDFzzmORu2al1E3JkqaI1HSvGEqFSLT6M8VDpLZp");


// API Search
// const apiHeaders = new Headers();
// apiHeaders.append("authorization", "Bearer" + accessToken);
// apiHeaders.append("terms", "delivery");

// const apiData = new FormData();
// apiData.append("authorization", "Bearer " + accessToken);
// apiData.append("terms", "delivery");

// const apiSearchParams = {
// 	credentials: "include",
// 	method: 'get',
// 	Headers: apiHeaders
// }
// make fetch to 'localhost'  in production do to hosted site
export const asyncRequest = (cuisine, location) => {
	return dispatch => {
		dispatch(fetchRequest()) 
		return axios.post('http://localhost:3030/login')
			.then(res => {
				console.log("hello");
				console.log(res.data);
				console.log(res);
			})
			.catch(error => console.log({error}));
	}
}
