import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
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
function fetchSelectedBoardFromServer(id) {
  console.log(id, 'id')
  return fetch(`https://5b744b1ea5837400141908d2.mockapi.io/api/boards/${id}`)
    .then(response => response.json());
}


// function* fetchSelectedBoard(action) {
//   console.log(action, 'actn')
//   try {
//     const activeBoard = yield call(fetchSelectedBoardFromServer, action.id);
//     yield put(selectBoardSuccess(activeBoard));
//     yield put(push(`/board/${activeBoard.id}`));
//   } catch(e) {
//     console.log(e);
//   }
// }

// export function* selectBoardSaga() {
//   console.log('asaga')
//   yield* takeLatest(SELECT_BOARD, fetchSelectedBoard);
// }



// Watcher sagas
// Listen for an action and run the appropriate Worker saga
export function* watchFetchBoard() {
  console.log('watch')
  yield takeLatest(SELECT_BOARD, workFetchBoard);
}

export function* workFetchBoard({ activeBoard }) {
  try {
    console.log(activeBoard, 'hihiii')
    // Try to call the API
    // const uri = `${ROOT_URL}/posts/${id}${API_KEY}`;
    // const response = yield call(axios.get, uri);
    const activeBoardItem = yield call(fetchSelectedBoardFromServer, activeBoard);

    // Dispatch the action to the reducers
    // yield put({
    //   type: SELECT_BOARD_SUCCESS,
    //   activeBoard
    // });
    console.log(activeBoardItem)
    yield put(selectBoardSuccess(activeBoardItem));
  } catch (error) {
    // Act on the error
    console.log('Request failed! Could not fetch post.');
  }
}


// export default function* rootSaga() {
//   yield [
//     fetchBoardsSaga()
//   ];
// };
