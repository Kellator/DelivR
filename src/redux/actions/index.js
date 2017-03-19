
export const searchUrl = "https://api.yelp.com";

//action types

//choose a type of food 
export const CHOOSE_CUISINE = 'CHOOSE_CUISINE';
//choose location
export const CHOOSE_LOCATION = 'CHOOSE_LOCATION';
//reset app
export const RESET_SELECTIONS = 'RESET_SELECTIONS';
//AJAX Fetch actions
export const ITEM_IS_LOADING = 'IS_LOADING';
export const ITEM_HAS_ERRORED = 'HAS_ERRORED';
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
export function itemsFetchData(searchUrl) {
	return (dispatch) => {
		dispatch(itemIsLoading(true));

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
