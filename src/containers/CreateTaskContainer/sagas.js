import { ADD_TASK } from './constants';
import { call, put, takeLatest } from 'redux-saga/effects';
import { addTaskSuccess, sendActiveBoardToActiveBoardReducer } from './actions';


function createTask(cardName, activeBoardId, listId) {
  console.log(cardName, 'card name')
  return fetch(`//5b744b1ea5837400141908d2.mockapi.io/api/boards/${activeBoardId}/lists/${listId}/cards`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      cardName
      // taskDescription
    })
  })
  .then(response => response.json());
}


function* addNewTask(action) {
  try {
    const newTask = yield call(createTask, action.cardName, action.activeBoardId, action.activeListId);
    yield put(addTaskSuccess(newTask));
    yield put(sendActiveBoardToActiveBoardReducer(newTask))
  } catch(e) {
    console.log('error adding task', e.message);
  }
}

export function* addTaskSaga() {
  yield takeLatest(ADD_TASK, addNewTask);
}