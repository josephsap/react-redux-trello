import { ADD_TASK, DELETE_CARD } from './constants';
import { call, put, takeLatest } from 'redux-saga/effects';
import { addTaskSuccess, sendActiveBoardToActiveBoardReducer, deleteCardSuccess } from './actions';


function createTask(card, activeBoardId, listId) {
  const { cardName, cardDescription } = card;
  return fetch(`//5b744b1ea5837400141908d2.mockapi.io/api/boards/${activeBoardId}/lists/${listId}/cards`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      cardName,
      cardDescription
    })
  })
  .then(response => response.json());
}


function* addNewTask(action) {
  try {
    const newTask = yield call(createTask, action.card, action.activeBoardId, action.activeListId);
    yield put(addTaskSuccess(newTask));
    yield put(sendActiveBoardToActiveBoardReducer(newTask))
  } catch(e) {
    console.log('error adding task', e.message);
  }
}

export function* addTaskSaga() {
  yield takeLatest(ADD_TASK, addNewTask);
}




function deleteCardApiCall(activeBoardId, activeListId, cardId) {
  return fetch(`//5b744b1ea5837400141908d2.mockapi.io/api/boards/${activeBoardId}/lists/${activeListId}/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      cardId
    })
  })
  .then(response => response.json());
}

function* deleteSelectedCard(action) {
  try {
    const deletedCard = yield call(deleteCardApiCall, action.activeBoardId, action.activeListId, action.cardId);
    yield put(deleteCardSuccess(deletedCard));
  } catch(e) {
    console.log('error deleting card', e.message);
  }
}

export function* deleteCardSaga() {
  yield takeLatest(DELETE_CARD, deleteSelectedCard);
}
