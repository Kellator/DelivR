// import fetch from 'isomorphic-fetch';
import axios from 'axios';
require('axios-debug')(axios);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'PUT, GET, POST, DELETE, OPTIONS';
axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token';

// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.get['Access-Control-Allow-Methods'] = 'PUT, GET, POST, DELETE, OPTIONS';
// axios.defaults.headers.get['Access-Control-Allow-Headers'] = 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token';
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

export const SAVE_ACCESS = 'SAVE_ACCESS';
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
export const saveAccess = (accessData) => ({
	type: SAVE_ACCESS,
	accessData
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

// make fetch to 'localhost'  in production do to hosted site
export const asyncRequest = (cuisine, location) => {
	return dispatch => {
		dispatch(fetchRequest()) 
		return axios.post('http://localhost:3030/login')
			.then(res => {
				dispatch(fetchSuccess())
				let accessToken = res.data.access_token;
				let expiresIn = res.data.expires_in;
				let tokenType = res.data.token_type;
				console.log("hello");
				console.log(res.data);
				console.log(res);
				console.log(accessToken);
				console.log(expiresIn);
				console.log(tokenType);
				console.log(cuisine);
				console.log(location);
				let auth = tokenType + ' ' + accessToken;
				console.log(auth);
				dispatch(fetchRequest())
				console.log(searchUrl); 
				return axios.get('http://localhost:3030/login')
					.then(res => {
						dispatch(fetchSuccess())
						console.log('second hello');
						console.log(res.data);
						console.log(res);
					})
				// return axios.get(searchUrl, {
				// 	params : {
				// 		'location' : location,
				// 		'categories' : cuisine
				// 	},
				// 	headers : {
				// 		'Access-Control-Allow-Origin' : '*',
				// 		'Authorization' : auth
				// 	}
				// })
				// 	.then(res => {
					// dispatch(fetchSuccess())
				// 		console.log('second hello');
				// 		console.log(res.data);
				// 		console.log(res);
				// 	})
			})
			.catch(error => console.log({error}));
	}
}
