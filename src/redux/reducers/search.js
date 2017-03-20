// search reducers


export function cuisineReducer(state= "", action) {
	switch (action.type) {
		case 'CHOOSE_CUISINE':
			return action.cuisine
		default:
			return state;
	}
}
export function locationReducer(state= "", action) {
	switch (action.type) {
		case 'CHOOSE_LOCATION':
			return action.location
		default:
			return state;
	}
}
export function resetSelections(state={}, action) {
	switch (action.type) {
		case 'RESET_SELECTIONS': {
			return state;
		}
	}
}
export function isFetchingReducer(state=false, action) {
	switch (action.type) {
		case 'ITEM_IS_LOADING': 
			return true;
		default:
			return state;
	}
}
export function itemHasErrored(state = false, action) {
	switch (action.type) {
		case 'ITEM_HAS_ERRORED':
			return action.itemHasErrored;

		default:
			return state;
	}
}

export function itemIsLoading(state = false, action) {
	switch (action.type) {
		case 'ITEM_IS_LOADING':
			return action.ItemIsLoading;

		default:
			return state;
	}
}

export function restaurantResults(state=[], action) {
	switch(action.type) {
		case 'FETCH_DATA_SUCCESS':
			return action.restaurantResults;

		default:
			return state;
	}
}