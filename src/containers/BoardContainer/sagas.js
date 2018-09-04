import { call, put, takeLatest } from 'redux-saga/effects';
import { requestBoardsSuccess, selectBoardSuccess } from './actions';
import { push } from 'react-router-redux';
import { REQUEST_BOARDS, SELECT_BOARD, SELECT_BOARD_SUCCESS } from './constants';

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
function fetchSelectedBoardFromServer({ id }) {
  return fetch(`https://5b744b1ea5837400141908d2.mockapi.io/api/boards/${id}`)
    .then(response => response.json());
}


function* fetchSelectedBoard(action) {
  console.log(action, 'actn')
  try {
    const activeBoard = yield call(fetchSelectedBoardFromServer, action.id);
    yield put(selectBoardSuccess(activeBoard));
    yield put(push(`/board/${activeBoard.id}`));
  } catch(e) {
    console.log(e);
  }
}

export function* selectBoardSaga() {
  console.log('asaga')
  yield* takeLatest(SELECT_BOARD, fetchSelectedBoard);
}



// export default function* rootSaga() {
//   yield [
//     fetchBoardsSaga()
//   ];
// };
