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
// export function resetSelections(state=initialState, action) {
// 	switch (action.type) {
// 		case 'RESET_SELECTIONS': {
// 			return initialState;
// 		}
// 	}
// }