import { SEARCH_MOVIE } from '../actions/types';
import { FETCH_MOVIES } from '../actions/types';
import { FETCH_MOVIE_DETAILS, LOADING } from '../actions/types';

const initialState = {
	text: '',
	movies: [],
	loading: false,
	movie: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SEARCH_MOVIE:
			return { ...state, text: action.payload, loading: false };
		case FETCH_MOVIES:
			return { ...state, movies: action.payload, loading: false };
		case FETCH_MOVIE_DETAILS:
			return { ...state, movie: action.payload, loading: false };
		case LOADING:
			return { ...state, loading: true };
		default:
			return state;
	}
}
