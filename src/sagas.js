import { all } from 'redux-saga/effects';
import { fetchBoardsSaga } from './containers/NavigationContainer/sagas';
import { watchFetchBoard } from './containers/SingleBoardContainer/sagas';
import { addBoardSaga } from './containers/CreateBoardContainer/sagas';

export default function* rootSaga() {
  yield all ([
    fetchBoardsSaga(),
    watchFetchBoard(),
    addBoardSaga()
  ]);
}
