import { all } from 'redux-saga/effects';
import { fetchBoardsSaga } from './containers/NavigationContainer/sagas';
import { watchFetchBoard } from './containers/SingleBoardContainer/sagas';
import { addBoardSaga } from './containers/CreateBoardContainer/sagas';
import { addListSaga } from './containers/CreateListContainer/sagas';
import { addTaskSaga } from './containers/CreateTaskContainer/sagas';


export default function* rootSaga() {
  yield all ([
    fetchBoardsSaga(),
    watchFetchBoard(),
    addBoardSaga(),
    addListSaga(),
    addTaskSaga()
  ]);
}
