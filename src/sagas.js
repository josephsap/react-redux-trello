import { all } from 'redux-saga/effects';
import { fetchBoardsSaga } from './containers/NavigationContainer/sagas';
import { watchFetchBoard, addListSaga } from './containers/SingleBoardContainer/sagas';
import { addBoardSaga } from './containers/CreateBoardContainer/sagas';
// import { fetchCardsSaga } from './containers/CardListContainer/sagas';


export default function* rootSaga() {
  yield all ([
    fetchBoardsSaga(),
    watchFetchBoard(),
    addBoardSaga(),
    addListSaga()
  ]);
}
