import { all } from 'redux-saga/effects';
import { fetchBoardsSaga } from './containers/NavigationContainer/sagas';
import { watchFetchBoard } from './containers/SingleBoardContainer/sagas';

export default function* rootSaga() {
  yield all ([
    fetchBoardsSaga(),
    watchFetchBoard()
  ]);
}
