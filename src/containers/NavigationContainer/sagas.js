import { call, put, takeLatest } from 'redux-saga/effects';
import { requestBoardsSuccess } from './actions';
import { REQUEST_BOARDS } from './constants';


/*

  FETCH BOARDS FROM SERVER

*/
export function fetchBoardsFromServer() {
  return fetch(`//5b744b1ea5837400141908d2.mockapi.io/api/boards`)
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
// function fetchSelectedBoardFromServer(id) {
//   return fetch(`https://5b744b1ea5837400141908d2.mockapi.io/api/boards/${id}`)
//     .then(response => response.json());
// }

// // Watcher sagas
// // Listen for an action and run the appropriate Worker saga
// export function* watchFetchBoard() {
//   yield takeEvery(SELECT_BOARD, workFetchBoard);
// }

// export function* workFetchBoard({ activeBoard }) {
//   console.log(activeBoard)
//   try {
//     const activeBoardItem = yield call(fetchSelectedBoardFromServer, activeBoard.id);
//     yield put(selectBoard(activeBoardItem));
//   } catch (error) {
//     console.log('Request failed.', error);
//   }
// }

// export function* workFetchPost({ id }) {
//   try {
//     // Try to call the API
//     const uri = `${ROOT_URL}/posts/${id}${API_KEY}`;
//     const response = yield call(axios.get, uri);

//     // Dispatch the action to the reducers
//     yield put({
//       type: types.FETCH_POST_SUCCESS,
//       payload: response.data
//     });
//   } catch (error) {
//     // Act on the error
//     console.log('Request failed! Could not fetch post.');
//   }
// }
