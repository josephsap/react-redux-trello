import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { selectBoardSuccess, sendActiveBoardToTaskReducer } from './actions';
import { SELECT_BOARD } from './constants';


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
    const activeBoardItem = yield call(fetchSelectedBoardFromServer, activeBoard.activeBoardId);
    yield put(selectBoardSuccess(activeBoardItem, activeBoard.activeBoardId));
    yield put(sendActiveBoardToTaskReducer(activeBoard.activeBoardId))
  } catch (error) {
    console.log('Request failed.', error);
  }
}
