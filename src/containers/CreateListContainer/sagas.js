import { ADD_LIST } from './constants';
import { call, put, takeLatest } from 'redux-saga/effects';
import { addListSuccess, addListFailed } from './actions';


// function to interact with the api (POST)
function createList(listName, activeBoardId) {
	console.log(listName, activeBoardId, '000---')
	return fetch(`https://5b744b1ea5837400141908d2.mockapi.io/api/boards/${activeBoardId}/lists`, {
		method: 'POST',
		headers: {
			Accept: 'applicaton/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			listName
		})
	})
	.then(response => response.json());
}



function* addList(action) {
	try {
		const newList = yield call(createList, action.listName);
		yield put(addListSuccess(newList));
	} catch(e) {
		console.log(e.message);
	}
}

export function* addListSaga() {
	yield* takeLatest(ADD_LIST, addList);
}

// https://stackblitz.com/edit/react-redux-saga-demo?file=sagas%2FPostsSagas.js