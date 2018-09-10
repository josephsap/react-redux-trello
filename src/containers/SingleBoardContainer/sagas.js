import { call, put, takeEvery } from 'redux-saga/effects';
import { selectBoardSuccess } from './actions';
import { SELECT_BOARD } from './constants';


/*

  SELECT A BOARD

*/
function fetchSelectedBoardFromServer(id) {
  return fetch(`https://5b744b1ea5837400141908d2.mockapi.io/api/boards/${id}`)
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
