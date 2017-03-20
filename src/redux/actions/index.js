import fetch from 'isomorphic-fetch';
// action constants
export const searchUrl = "https://api.yelp.com/v3/transactions/delivery/search?location=";
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
export const fetchResultSuccess = (cuisine, data) => ({
	type: FETCH_DATA_SUCCESS,
	cuisine,
	data
});
export const itemHasErrored = (bool) => ({
	type: ITEM_HAS_ERRORED,
	bool
});
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

export function itemsFetchData(cuisine, location) {
	return (dispatch) => {
		dispatch(itemIsLoading(true));
// if key present - perform fetch, else request key, then perform fetch
// access token url = https://api.yelp.com/oauth2/token

		fetch(searchUrl)
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				dispatch(itemIsLoading(false));
				return response;
			})
			.then((response) => response.json())
			.then((items) =>
				dispatch(fetchResultSuccess(items)))
			.catch(() => dispatch(itemIsLoading(true)));
	};
}
