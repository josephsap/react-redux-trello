import { REQUEST_CARDS, REQUEST_CARDS_SUCCESS } from './constants';

const initialState = {
	listItems: [],
  loading: false
};

function requestCardsReducer(state = initialState, action) {
	switch(action.type) {
    case REQUEST_CARDS:
      return { ...state, loading: true };
		case REQUEST_CARDS_SUCCESS:
			return { ...state, listItems: action.listItems, loading: false };
		default:
			return state;
	}
}

export default requestCardsReducer;
