import { MOVE_CARD_TO_LIST, MOVE_CARD_TO_LIST_SUCCESS } from './constants';

export function moveCard(activeBoardId, selectedListId, cardId) {
	return {
		type: MOVE_CARD_TO_LIST,
		activeBoardId,
		selectedListId,
		cardId
	};
}

export function moveCardSuccess(card) {
	return {
		type: MOVE_CARD_TO_LIST_SUCCESS,
		card
	};
}

