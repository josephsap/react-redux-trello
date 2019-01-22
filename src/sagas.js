import { all } from 'redux-saga/effects';
import { fetchBoardsSaga } from './containers/NavigationContainer/sagas';
import { watchFetchBoard } from './containers/SingleBoardContainer/sagas';
import { addBoardSaga } from './containers/CreateBoardContainer/sagas';
import { addListSaga } from './containers/CreateListContainer/sagas';
import { addTaskSaga, deleteCardSaga } from './containers/CreateTaskContainer/sagas';
import { moveCardSaga } from './containers/MoveCardSelectContainer/sagas';


export default function* rootSaga() {
  yield all ([
    fetchBoardsSaga(),
    watchFetchBoard(),
    addBoardSaga(),
    addListSaga(),
    addTaskSaga(),
    deleteCardSaga(),
    moveCardSaga()
  ]);
}
