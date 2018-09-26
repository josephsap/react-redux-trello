import { REQUEST_CARDS, REQUEST_CARDS_SUCCESS } from './constants';

export function requestCards(boardId, listId) {
	return {
		type: REQUEST_CARDS, 
		boardId,
		listId
	}
}

export function requestCardsSuccess(cards) {
	return {
		type: REQUEST_CARDS_SUCCESS,
		cards
	};
}