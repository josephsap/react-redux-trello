import { ADD_LIST } from './constants';
import { call, put, takeLatest } from 'redux-saga/effects';
import { addListSuccess, addListFailed } from './actions';


function createList(listName, activeBoardId) {
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



function* addNewList(action) {
  try {
    const newList = yield call(createList, action.listName, action.activeBoardId);
    yield put(addListSuccess(newList));
  } catch(e) {
    console.log(e.message);
  }
}

export function* addListSaga() {
  yield takeLatest(ADD_LIST, addNewList);
}

// https://stackblitz.com/edit/react-redux-saga-demo?file=sagas%2FPostsSagas.js