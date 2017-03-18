// search reducers


export function chooseCuisine(state= "", action) {
	switch (action.type) {
		case 'CHOOSE_CUISINE':
		console.log(action.cuisine);
			return Object.assign({}, ...state, {
				search: {
					cuisineSearch: action.cuisine
				}
			})
		default:
			return state;
	}
}
export function chooseLocation(state= "", action) {
	switch (action.type) {
		case 'CHOOSE_LOCATION':
		console.log(action.location)
			return Object.assign({}, ...state, {
				search: {
					locationSearch: action.location
				}
			})
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