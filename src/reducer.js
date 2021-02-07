export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	// token: null,
	token:
		"BQDYHHMyrX9GBjFLRfh2PmyKW6J-CLG07GoMhDGiFWQWSn20ctqmoV2idLCVZjYQvlEBFKQfEVFrBvqcaagt83dnq9LNk_9RngWZAlPj0eMhInVfkRQfiwSs9h8LiDhpWkJTPP2l4NTD4rp6tYGskoghGnMRwobwG-07UKS2O8UMsXVywpwm",
};

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};
		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.playlists,
			};
		default:
			return state;
	}
};

export default reducer;
