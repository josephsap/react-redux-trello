// import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
// import { selectBoardSuccess } from './actions';
// import { push } from 'react-router-redux';
// import { SELECT_BOARD, SELECT_BOARD_SUCCESS } from './constants';


/*

  SELECT A BOARD

*/
// function fetchSelectedBoardFromServer({ id }) {
//   return fetch(`https://5b744b1ea5837400141908d2.mockapi.io/api/boards/${id}`)
//     .then(response => response.json());
// }


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







// export function* watchFetchBoard() {
  // yield takeEvery(SELECT_BOARD, workFetchBoard);
// }

// export function* workFetchBoard({ id }) {
  // try {
    // Try to call the API
  //   const activeBoard = yield call(fetchSelectedBoardFromServer, id);
  //   console.log(activeBoard)

  //   // Dispatch the action to the reducers
  //   yield put(selectBoardSuccess(activeBoard));
  // } catch (error) {
    // Act on the error
    // console.log('Request failed! Could not fetch post.');
  // }
// }


// export default function* singleBoardSaga() {
//   yield [
//     selectBoardSaga()
//   );
// };
