import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { selectBoardSuccess, addListSuccess, addListFailed } from './actions';
import { SELECT_BOARD, ADD_LIST } from './constants';


/*

  SELECT A BOARD

*/
function fetchSelectedBoardFromServer(id) {
  return fetch(`https://5b744b1ea5837400141908d2.mockapi.io/api/boards/${id}/lists`)
    .then(response => response.json());
}

// Watcher sagas
// Listen for an action and run the appropriate Worker saga
export function* watchFetchBoard() {
  yield takeEvery(SELECT_BOARD, workFetchBoard);
}

export function* workFetchBoard(activeBoard) {
  try {
    const activeBoardItem = yield call(fetchSelectedBoardFromServer, activeBoard.id);
    yield put(selectBoardSuccess(activeBoardItem));
  } catch (error) {
    console.log('Request failed.', error);
  }
}

/*

  Create a list

*/


// function to interact with the api (POST)
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