// import { watchFetchBoard } from './containers/SingleBoardContainer/sagas';
import { fetchBoardsSaga } from './containers/BoardContainer/sagas';

export default function* rootSaga() {
  yield [
    // watchFetchBoard(),
    fetchBoardsSaga()
  ];
}