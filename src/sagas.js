import { all } from 'redux-saga/effects';
import { fetchBoardsSaga, watchFetchBoard } from './containers/BoardContainer/sagas';

export default function* rootSaga() {
  yield all ([
    fetchBoardsSaga(),
    watchFetchBoard()
  ]);
}
