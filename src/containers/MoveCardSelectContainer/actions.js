import { MOVE_CARD_TO_LIST, MOVE_CARD_TO_LIST_SUCCESS } from './constants';

export function moveCard(activeBoardId, selectedListId, cardId, listThatCardIsIn) {
	return {
		type: MOVE_CARD_TO_LIST,
		activeBoardId,
		selectedListId,
		cardId,
		listThatCardIsIn
	};
}

export function moveCardSuccess(card) {
	return {
		type: MOVE_CARD_TO_LIST_SUCCESS,
		card
	};
}

