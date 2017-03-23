const initialState = {
    cuisine: "",
    location: "",
    fetching: false,
    token: ""
};
console.log(initialState);

// saves type of cuisine to state - dispatched on submit
export function cuisineReducer(state = "", action) {
	switch (action.type) {
		case 'CHOOSE_CUISINE':
			return action.cuisine
		default:
			return state;
	}
}
// save location of search area to state - dispatched on submit
export function locationReducer(state = "", action) {
	switch (action.type) {
		case 'CHOOSE_LOCATION':
			return action.location
		default:
			return state;
	}
}
// resets search criteria 
// export function resetSelections(state = {}, action) {
// 	switch (action.type) {
// 		case 'RESET_SELECTIONS': {
// 			return state;
// 		}
// 	}
// }
// dispatched from inside fetch request
// export function itemIsLoading(state = false, action) {
// 	switch (action.type) {
// 		case 'ITEM_IS_LOADING':
// 			return action.ItemIsLoading;

// 		default:
// 			return state;
// 	}
// }
// export function itemHasErrored(state = false, action) {
// 	switch (action.type) {
// 		case 'ITEM_HAS_ERRORED':
// 			return action.itemHasErrored;

// 		default:
// 			return state;
// 	}
// }
export function tokenReducer(state = initialState, action) {
	switch (action.type) {
		case 'TOKEN_RETRIEVED':
			return action.accessToken;
		default: 
			return state;
	}
}
// fires on submit - needs to handle fetching, success, error
export function fetchingReducer(state = initialState, action) {
	switch (action.type) {
		case 'ITEM_IS_LOADING': 
			return Object.assign({}, state,{fetching: true});
		case 'ITEM_HAS_ERRORED':
			return Object.assign({}, state,{fetching: false});
		case 'FETCH_DATA_SUCCESS':
			return Object.assign({}, state,{restaurantResults: []});
		default:
			return state;
	}
}
export function returnResultsReducer(state = initialState, action) {
	switch (action.type) {
		case 'RETURN_RESULTS':
			return state;
		default:
			return state;
	}
}

// export function restaurantResults(state={}, action) {
// 	switch(action.type) {
// 		case 'FETCH_DATA_SUCCESS':
// 			return  state;
// 		default:
// 			return state;
// 	}
// }