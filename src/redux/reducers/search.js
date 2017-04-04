const initialState = {
    cuisine: "",
    location: "",
    fetching: false,
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

export function resultReducer(state = {}, action) {
	switch(action.type) {
		case 'SAVE_RESULT':
			return action.resultData;
		default: 
			return state;
	}
}
export function fetchRequestReducer(state = "", action) {
	switch(action.type) {
		case 'FETCH_REQUEST':
			return true;
		case 'FETCH_SUCCESS':
			return false;
		case 'FETCH_ERROR':
			return false;
		default:
			return state;
	}
}