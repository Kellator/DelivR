import fetch from 'isomorphic-fetch';
// action constants
// let searchUrl = "https://api.yelp.com/v3/transactions/delivery/search?";
//choose a type of food 
export const CHOOSE_CUISINE = 'CHOOSE_CUISINE';
//choose location
export const CHOOSE_LOCATION = 'CHOOSE_LOCATION';
//reset app
export const RESET_SELECTIONS = 'RESET_SELECTIONS';
//AJAX Fetch actions
export const ITEM_IS_LOADING = 'ITEM_IS_LOADING';
export const ITEM_HAS_ERRORED = 'ITEM_HAS_ERRORED';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const TOKEN_RETRIEVED = 'TOKEN_RETRIEVED';
export const RETURN_RESULTS = 'RETURN_RESULTS';

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
export const itemIsLoading = (bool) => ({
	type: ITEM_IS_LOADING,
	bool
});
export const fetchResultSuccess = (success) => ({
	type: FETCH_DATA_SUCCESS,
	success
});
export const itemHasErrored = (error) => ({
	type: ITEM_HAS_ERRORED,
	error
});
export const tokenRetrieved = accessToken => ({
	type: TOKEN_RETRIEVED,
	accessToken
})
export const returnResults = (results) => ({
	type: RETURN_RESULTS,
	results
})
//AJAX action creators (format url in const)
export function errorAfterFiveSeconds() {
	return(dispatch) => {
		setTimeout(() => {
			dispatch(itemHasErrored(true));
		}, 5000);
	};
}
// fetch request url setup 
// https://api.yelp.com/v3/transactions/delivery/search?location={location from input}&categories={cuisine from input}
// define urls as constants prior to functions to access in the functions - variables will be received from state.
// Access token should be saved into state object
let cuisine;
let location;
let accessToken;
const tokenUrl = "https://api.yelp.com/oauth2/token";
let searchLocation = "location=" + location;
let searchCuisine = "categories=" + cuisine;
let searchUrl = "https://api.yelp.com/v3/transactions/delivery/search?" + 
searchLocation + searchCuisine;

const tokenData = new FormData();
tokenData.append("grant_type", "client_credentials");
tokenData.append("client_id", "F1GjwxdHmDgOyEQnFkrOdg");
tokenData.append("client_secret", "6VupwbF7anbAd8yHZYbl9CDDQDFzzmORu2al1E3JkqaI1HSvGEqFSLT6M8VDpLZp");

const accessTokenParams = {
	method: 'POST',
	body: tokenData
}

const fetchAccessToken = () => {
	return (dispatch) => {
		dispatch(itemIsLoading(true));
		return fetch(tokenUrl, accessTokenParams)
			.then(response => {
				console.log("response");
				return response.json();
			})
	// 		.then(json => { console.log(response.json);
	// 			// let accessToken = response.access_token; 
	// 			// dispatch(tokenRetrieved(accessToken))
	// // store results in state
	// //dispatch separate action to update state			
	// 	})	
	}

};
// API Search
const apiHeaders = new Headers();
apiHeaders.append("authorization", "Bearer" + accessToken);
apiHeaders.append("terms", "delivery");

const apiData = new FormData();
apiData.append("authorization", "Bearer" + accessToken);
apiData.append("terms", "delivery");
const apiSearchParams = {
	credentials: "include",
	method: 'get',
	body: apiData
}

const fetchApiResults = () => {
	fetch(searchUrl, apiSearchParams)
	.then(response => {
		if (!response.ok) {
			const error = new Error(response.statusText)
			error.response = response
			throw error;
		}
		console.log("api results");
		console.log(response);
		// dispatch(fetchApiResults(accessToken));		
		return response;
	})
};
// add if statement for access token => api fetch request
export const itemsFetchData = (cuisine, location) => {
	console.log("ItemsFetchData");
	return (dispatch) => { 
		console.log("return fetch data");
		dispatch(itemIsLoading(true));
		dispatch(fetchAccessToken(dispatch));
	};
}
