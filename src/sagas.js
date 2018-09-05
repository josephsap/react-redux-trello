import boardContainerRootSaga from './containers/BoardContainer/sagas';

export default function* rootSaga() {
  yield [
    boardContainerRootSaga()
  ];
}