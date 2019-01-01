import { ADD_TASK } from './constants';
import { call, put, takeLatest } from 'redux-saga/effects';
import { addTaskSuccess } from './actions';


function createTask(taskName, taskDescription, activeBoardId, listId) {
  return fetch(`https://5b744b1ea5837400141908d2.mockapi.io/api/boards/${activeBoardId}/lists/${listId}/cards`, {
    method: 'POST',
    headers: {
      Accept: 'application/json'
    },
    body: JSON.stringify({
      taskName,
      taskDescription
    })
  })
  .then(response => response.json());
}


function* addNewTask(action) {
  try {
    const newTask = yield call(createTask, action.taskName, action.taskDescription, action.listId);
    yield put(addTaskSuccess(newTask));
  } catch(e) {
    console.log('error adding task', e.message);
  }
}

export function* addTaskSaga() {
  yield takeLatest(ADD_TASK, addNewTask);
}