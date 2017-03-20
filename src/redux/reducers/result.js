// fetch reducers

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