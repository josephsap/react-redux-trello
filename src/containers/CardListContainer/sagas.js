import { call, put, takeLatest } from 'redux-saga/effects';
import { requestCardsSuccess } from './actions';
import { REQUEST_CARDS } from './constants';


export function fetchCardsFromServer(boardId, listId) {
	return fetch(`https://5b744b1ea5837400141908d2.mockapi.io/api/boards/${boardId}/cardLists/${listId}/cards`)
	  .then(response => response.json());
}

function* fetchCards(cardAction) {
	const idThings = cardAction.listId.listId;
	try {
		const cards = yield idThings.map(idThing => call(fetchCardsFromServer,cardAction.boardId, idThing));
		yield put(requestCardsSuccess(cards));
	} catch(e) {
		console.log(e);
	}
}

export function* fetchCardsSaga() {
	yield takeLatest(REQUEST_CARDS, fetchCards);
}
