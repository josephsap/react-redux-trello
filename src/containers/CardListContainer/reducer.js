import { REQUEST_CARDS, REQUEST_CARDS_SUCCESS } from './constants';

const initialState = {
	cards: [],
  loading: false
};

function requestCardsReducer(state = initialState, action) {
	switch(action.type) {
    case REQUEST_CARDS:
      return { ...state, loading: true };
		case REQUEST_CARDS_SUCCESS:
			return { ...state, cards: action.cards, loading: false };
		default:
			return state;
	}
}

export default requestCardsReducer;
