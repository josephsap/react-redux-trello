import { watchFetchBoard } from './containers/BoardContainer/sagas';
import { fetchBoardsSaga } from './containers/BoardContainer/sagas';

export default function* rootSaga() {
  yield [
    watchFetchBoard(),
    fetchBoardsSaga()
  ];
}