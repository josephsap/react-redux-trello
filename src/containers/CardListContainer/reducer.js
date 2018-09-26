import { REQUEST_CARDS_SUCCESS } from './constants';

const initialState = {
	cards: []	
};

function requestCardsReducer(state = initialState, action) {
	switch(action.type) {
		case REQUEST_CARDS_SUCCESS:
			return { ...state, cards: action.cards };
		default:
			return state;
	}
}

export default requestCardsReducer;
