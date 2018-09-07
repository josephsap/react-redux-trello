import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { requestBoardsSuccess, selectBoardSuccess } from './actions';
import { REQUEST_BOARDS, SELECT_BOARD } from './constants';


/*

  FETCH BOARDS FROM SERVER

*/
export function fetchBoardsFromServer() {
  return fetch(`https://5b744b1ea5837400141908d2.mockapi.io/api/boards`)
    .then(response => response.json());
}

function* fetchBoards() {
  try {
    const boards = yield call(fetchBoardsFromServer);
    yield put(requestBoardsSuccess(boards));
  } catch(e) {
    console.log(e);
  }
}


export function* fetchBoardsSaga() {
  yield takeLatest(REQUEST_BOARDS, fetchBoards);
}




/*

  SELECT A BOARD

*/
function fetchSelectedBoardFromServer(id) {
  console.log(id, 'is00000000')
  return fetch(`https://5b744b1ea5837400141908d2.mockapi.io/api/boards/${id}`)
    .then(response => response.json());
}

// Watcher sagas
// Listen for an action and run the appropriate Worker saga
export function* watchFetchBoard() {
  yield takeEvery(SELECT_BOARD, workFetchBoard);
}

export function* workFetchBoard({ activeBoard }) {
  try {
    console.log(activeBoard, 'hihi')
    const activeBoardItem = yield call(fetchSelectedBoardFromServer, activeBoard);
    yield put(selectBoardSuccess(activeBoardItem));
  } catch (error) {
    console.log('Request failed.', error);
  }
}
