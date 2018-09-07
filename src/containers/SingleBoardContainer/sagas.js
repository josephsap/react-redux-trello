import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
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

export function* workFetchBoard({ activeBoard }) {
  console.log(activeBoard, 'active board')
  try {
    const activeBoardItem = yield call(fetchSelectedBoardFromServer, activeBoard);
    yield put(selectBoardSuccess(activeBoardItem));
  } catch (error) {
    console.log('Request failed.', error);
  }
}

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
