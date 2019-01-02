import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { selectBoardSuccess, sendActiveBoardToTaskReducer, addListSuccess, addListFailed } from './actions';
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
    yield put(sendActiveBoardToTaskReducer(activeBoardItem[0].id))
  } catch (error) {
    console.log('Request failed.', error);
  }
}
