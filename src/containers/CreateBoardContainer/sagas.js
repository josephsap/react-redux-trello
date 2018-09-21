import { ADD_BOARD } from './constants';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { addBoardSuccess, addBoardFailed } from './actions';


// function to interact with the api (POST)
function createBoard(boardName) {
	return fetch(`https://5b744b1ea5837400141908d2.mockapi.io/api/boards`, {
		method: 'POST',
		headers: {
			Accept: 'applicaton/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			boardName
		})
	})
	.then(response => response.json());
}



function* addBoard(action) {
	try {
		console.log(action)
		const newBoard = yield call(createBoard, action.boardName);
		console.log(newBoard, 'NEW BOARD HERE');
		yield put(addBoardSuccess(newBoard));
	} catch(e) {
		console.log(e.message);
	}
}

export function* addBoardSaga() {
	yield* takeLatest(ADD_BOARD, addBoard);
}

// https://stackblitz.com/edit/react-redux-saga-demo?file=sagas%2FPostsSagas.js