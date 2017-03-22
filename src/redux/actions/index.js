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
export const fetchResultSuccess = (results) => ({
	type: FETCH_DATA_SUCCESS,
	results
});
export const itemHasErrored = (bool) => ({
	type: ITEM_HAS_ERRORED,
	bool
});
export const tokenRetrieved = accessToken => ({
	type: TOKEN_RETRIEVED,
	accessToken
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

// returns access token
// const tokenHeaders = new Headers();
// tokenHeaders.append("grant_type", "client_credentials");
// tokenHeaders.append("client_id", "F1GjwxdHmDgOyEQnFkrOdg");
// tokenHeaders.append("client_secret", "6VupwbF7anbAd8yHZYbl9CDDQDFzzmORu2al1E3JkqaI1HSvGEqFSLT6M8VDpLZp");

const tokenData = new FormData();
tokenData.append("grant_type", "client_credentials");
tokenData.append("client_id", "F1GjwxdHmDgOyEQnFkrOdg");
tokenData.append("client_secret", "6VupwbF7anbAd8yHZYbl9CDDQDFzzmORu2al1E3JkqaI1HSvGEqFSLT6M8VDpLZp");

const accessTokenParams = {
	method: 'POST',
	body: tokenData
}

const fetchAccessToken = (dispatch) => {
	fetch(tokenUrl, accessTokenParams)
	.then(response => {
		if (!response.ok) {
			const error = new Error(response.statusText)
			error.response = response
			throw error;
		}
		console.log(response);
		dispatch(tokenRetrieved(accessToken));
	// store results in state
	//dispatch separate action to update state	
		
	})
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

const fetchApiResults = (accessToken) => {
	fetch(searchUrl, apiSearchParams)
	.then(response => {
		if (!response.ok) {
			const error = new Error(response.statusText)
			error.response = response
			throw error;
		}
		console.log("api results");
		console.log(response);
		// dispatch(itemIsLoading(false));
		return response;
	})
};
export function itemsFetchData(cuisine, location) {
	return (dispatch) => {
		dispatch(itemIsLoading(true));
		// if token is not present =>
		dispatch(fetchAccessToken(dispatch));
		// if token is present =>
		dispatch(fetchApiResults(accessToken))
	// 	.then(response => {
	// 	if (!response.ok) {
	// 		const error = new Error(response.statusText)
	// 		error.response = response
	// 		throw error;
	// 	}
	// 	// dispatch(itemIsLoading(false));
	// 	return response;
	// })
	// .then(response => response.json())
	// .then(results =>
	// 	dispatch(fetchResultSuccess(results)))
	// .catch(Error => 
	// 	dispatch(itemIsLoading(true))
	// );
	};
}
