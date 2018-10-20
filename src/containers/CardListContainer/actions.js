import { REQUEST_CARDS, REQUEST_CARDS_SUCCESS } from './constants';

export function requestCards(boardId, listId = {}) {
	return {
		type: REQUEST_CARDS, 
		boardId,
		listId
	}
}

export function requestCardsSuccess(listItems) {
	return {
		type: REQUEST_CARDS_SUCCESS,
		listItems
	};
}