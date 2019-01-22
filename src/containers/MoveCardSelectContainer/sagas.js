import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { moveCardSuccess } from './actions';
import { MOVE_CARD_TO_LIST } from './constants';

function moveCardToSelectedList(activeBoardId, listId, cardId) {
	return fetch(`//5b744b1ea5837400141908d2.mockapi.io/api/boards/${activeBoardId}/lists/${listId}/cards/${cardId}`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			id: activeBoardId
		})
	})
	.then(response => response.json());
}

export function* moveCardToNewList(action) {
	try {
		const updatedListWithNewCard = yield call(moveCardToSelectedList, action.activeBoardId, action.selectedListId, action.cardId);
		yield put(moveCardSuccess(updatedListWithNewCard));
	} catch(e) {
		console.log('error moving card', e.message);
	}
}

export function* moveCardSaga() {
	yield takeLatest(MOVE_CARD_TO_LIST, moveCardToNewList);
}

// /boards/:id/lists/:id/cards/:id